import json
import re
from pathlib import Path
from urllib.parse import urlparse

from playwright.sync_api import sync_playwright


TARGET_URL = "https://arches-template.framer.website/?fpr=onmix"
ROOT = Path(__file__).resolve().parents[1]
RESEARCH = ROOT / "docs" / "research"
REFERENCES = ROOT / "docs" / "design-references"


STYLE_PROPS = [
    "fontSize",
    "fontWeight",
    "fontFamily",
    "lineHeight",
    "letterSpacing",
    "color",
    "textTransform",
    "textDecorationLine",
    "backgroundColor",
    "backgroundImage",
    "paddingTop",
    "paddingRight",
    "paddingBottom",
    "paddingLeft",
    "marginTop",
    "marginRight",
    "marginBottom",
    "marginLeft",
    "width",
    "height",
    "maxWidth",
    "minWidth",
    "display",
    "flexDirection",
    "justifyContent",
    "alignItems",
    "gap",
    "gridTemplateColumns",
    "borderRadius",
    "borderTopWidth",
    "borderRightWidth",
    "borderBottomWidth",
    "borderLeftWidth",
    "borderColor",
    "boxShadow",
    "overflow",
    "position",
    "top",
    "right",
    "bottom",
    "left",
    "zIndex",
    "opacity",
    "transform",
    "transition",
    "cursor",
    "objectFit",
    "filter",
    "backdropFilter",
]


EXTRACT_JS = """
({ styleProps }) => {
  const cleanText = (text) => (text || '').replace(/\\s+/g, ' ').trim();
  const rectOf = (el) => {
    const r = el.getBoundingClientRect();
    return {
      x: Math.round((r.x + window.scrollX) * 100) / 100,
      y: Math.round((r.y + window.scrollY) * 100) / 100,
      width: Math.round(r.width * 100) / 100,
      height: Math.round(r.height * 100) / 100,
    };
  };
  const stylesOf = (el) => {
    const cs = getComputedStyle(el);
    const out = {};
    for (const p of styleProps) {
      const v = cs[p];
      if (v && v !== 'none' && v !== 'normal' && v !== 'auto' && v !== '0px' && v !== 'rgba(0, 0, 0, 0)') out[p] = v;
    }
    return out;
  };
  const selectorOf = (el) => {
    if (el.id) return '#' + CSS.escape(el.id);
    const framer = el.getAttribute('data-framer-name');
    if (framer) return `[data-framer-name="${framer.replace(/"/g, '\\"')}"]`;
    const tag = el.tagName.toLowerCase();
    const classes = String(el.className || '').split(/\\s+/).filter(Boolean).slice(0, 2);
    if (classes.length) return tag + '.' + classes.map((c) => CSS.escape(c)).join('.');
    return tag;
  };
  const elementSummary = (el) => ({
    tag: el.tagName.toLowerCase(),
    selector: selectorOf(el),
    id: el.id || null,
    className: String(el.className || '').slice(0, 160),
    framerName: el.getAttribute('data-framer-name'),
    role: el.getAttribute('role'),
    ariaLabel: el.getAttribute('aria-label'),
    href: el.getAttribute('href'),
    text: cleanText(el.innerText || el.textContent).slice(0, 600),
    rect: rectOf(el),
    styles: stylesOf(el),
  });

  const all = [...document.querySelectorAll('*')];
  const textBlocks = all
    .filter((el) => cleanText(el.innerText || el.textContent).length > 0)
    .map(elementSummary)
    .filter((item) => item.rect.width > 0 && item.rect.height > 0)
    .sort((a, b) => a.rect.y - b.rect.y || a.rect.x - b.rect.x)
    .slice(0, 500);

  const named = all
    .filter((el) => el.getAttribute('data-framer-name') || /^(HEADER|NAV|MAIN|SECTION|FOOTER|H1|H2|H3|ARTICLE|A|BUTTON|IMG|VIDEO)$/.test(el.tagName))
    .map(elementSummary)
    .filter((item) => item.rect.width > 0 && item.rect.height > 0)
    .sort((a, b) => a.rect.y - b.rect.y || a.rect.x - b.rect.x)
    .slice(0, 800);

  const images = [...document.querySelectorAll('img')].map((img) => ({
    src: img.currentSrc || img.src,
    rawSrc: img.getAttribute('src'),
    srcset: img.getAttribute('srcset'),
    alt: img.alt,
    loading: img.loading,
    naturalWidth: img.naturalWidth,
    naturalHeight: img.naturalHeight,
    rect: rectOf(img),
    parent: img.parentElement ? selectorOf(img.parentElement) : null,
    siblings: img.parentElement ? img.parentElement.querySelectorAll('img').length : 0,
    styles: stylesOf(img),
  }));

  const backgroundImages = all
    .map((el) => ({ el, bg: getComputedStyle(el).backgroundImage }))
    .filter(({ bg }) => bg && bg !== 'none')
    .map(({ el, bg }) => ({
      url: bg,
      element: selectorOf(el),
      framerName: el.getAttribute('data-framer-name'),
      text: cleanText(el.textContent).slice(0, 120),
      rect: rectOf(el),
    }));

  const videos = [...document.querySelectorAll('video')].map((v) => ({
    src: v.currentSrc || v.src || v.querySelector('source')?.src,
    poster: v.poster,
    autoplay: v.autoplay,
    loop: v.loop,
    muted: v.muted,
    rect: rectOf(v),
  }));

  const svg = [...document.querySelectorAll('svg')].map((s, idx) => ({
    index: idx,
    outerHTML: s.outerHTML.slice(0, 8000),
    text: cleanText(s.textContent),
    rect: rectOf(s),
    parent: s.parentElement ? selectorOf(s.parentElement) : null,
  }));

  const links = [...document.querySelectorAll('a')].map((a) => ({
    text: cleanText(a.innerText || a.textContent),
    href: a.href,
    rect: rectOf(a),
    selector: selectorOf(a),
    styles: stylesOf(a),
  }));

  const fontFamilies = [...new Set(all.slice(0, 1200).map((el) => getComputedStyle(el).fontFamily).filter(Boolean))];
  const colors = [...new Set(all.flatMap((el) => {
    const cs = getComputedStyle(el);
    return [cs.color, cs.backgroundColor, cs.borderColor].filter((c) => c && c !== 'rgba(0, 0, 0, 0)');
  }))];
  const fontFaceRules = [...document.styleSheets].flatMap((sheet) => {
    try {
      return [...sheet.cssRules].filter((rule) => rule.type === CSSRule.FONT_FACE_RULE).map((rule) => rule.cssText);
    } catch {
      return [];
    }
  });

  return {
    title: document.title,
    url: location.href,
    viewport: { width: innerWidth, height: innerHeight },
    scrollHeight: document.documentElement.scrollHeight,
    bodyText: cleanText(document.body.innerText || document.body.textContent),
    htmlClass: document.documentElement.className,
    bodyClass: document.body.className,
    fontFamilies,
    fontFaceRules,
    colors,
    textBlocks,
    named,
    images,
    backgroundImages,
    videos,
    svg,
    links,
    meta: [...document.querySelectorAll('meta')].map((m) => ({
      name: m.getAttribute('name'),
      property: m.getAttribute('property'),
      content: m.getAttribute('content'),
    })),
    icons: [...document.querySelectorAll('link[rel*="icon"], link[rel="apple-touch-icon"], link[rel="manifest"]')].map((l) => ({
      rel: l.getAttribute('rel'),
      href: l.href,
      sizes: l.getAttribute('sizes'),
      type: l.getAttribute('type'),
    })),
  };
}
"""


def slugify(text: str) -> str:
    text = re.sub(r"[^a-zA-Z0-9]+", "-", text.lower()).strip("-")
    return text or "section"


def wait_ready(page):
    page.wait_for_load_state("domcontentloaded", timeout=60_000)
    try:
        page.wait_for_load_state("networkidle", timeout=20_000)
    except Exception:
        pass
    page.wait_for_timeout(1200)
    try:
        page.evaluate("document.fonts && document.fonts.ready")
    except Exception:
        pass


def scroll_activate(page, name: str):
    height = page.evaluate("document.documentElement.scrollHeight")
    viewport_height = page.viewport_size["height"]
    step = max(240, int(viewport_height * 0.55))
    captures = []
    for y in range(0, height + viewport_height, step):
        page.evaluate("(y) => window.scrollTo(0, y)", y)
        page.wait_for_timeout(260)
        if len(captures) < 18 and (y == 0 or y % (step * 3) < step):
            path = REFERENCES / f"arches-{name}-viewport-{len(captures):02d}.png"
            page.screenshot(path=str(path), full_page=False)
            captures.append(str(path.relative_to(ROOT)))
    page.evaluate("window.scrollTo(0, 0)")
    page.wait_for_timeout(600)
    return captures


def capture_viewport(page, name: str, width: int, height: int):
    page.set_viewport_size({"width": width, "height": height})
    page.goto(TARGET_URL, wait_until="domcontentloaded", timeout=60_000)
    wait_ready(page)
    captures = scroll_activate(page, name)
    full_path = REFERENCES / f"arches-{name}-activated-full.png"
    page.screenshot(path=str(full_path), full_page=True)
    data = page.evaluate(EXTRACT_JS, {"styleProps": STYLE_PROPS})
    data["screenshots"] = captures + [str(full_path.relative_to(ROOT))]
    return data


def main():
    RESEARCH.mkdir(parents=True, exist_ok=True)
    REFERENCES.mkdir(parents=True, exist_ok=True)
    with sync_playwright() as p:
        browser = p.chromium.launch()
        context = browser.new_context(device_scale_factor=1)
        page = context.new_page()
        desktop = capture_viewport(page, "desktop", 1440, 1200)
        tablet = capture_viewport(page, "tablet", 768, 1100)
        mobile = capture_viewport(page, "mobile", 390, 1000)

        extract = {
            "targetUrl": TARGET_URL,
            "origin": urlparse(TARGET_URL).netloc,
            "desktop": desktop,
            "tablet": tablet,
            "mobile": mobile,
        }
        out = RESEARCH / "arches-raw-extract.json"
        out.write_text(json.dumps(extract, indent=2), encoding="utf-8")

        (RESEARCH / "arches-assets.json").write_text(
            json.dumps(
                {
                    "images": desktop["images"],
                    "backgroundImages": desktop["backgroundImages"],
                    "videos": desktop["videos"],
                    "icons": desktop["icons"],
                    "meta": desktop["meta"],
                },
                indent=2,
            ),
            encoding="utf-8",
        )
        browser.close()

    print(f"Wrote {out.relative_to(ROOT)}")


if __name__ == "__main__":
    main()
