import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";

const root = process.cwd();
const extract = (await import("../docs/research/arches-raw-extract.json", {
  with: { type: "json" },
})).default;

const fontAssets = [
  {
    url: "https://fonts.gstatic.com/s/poppins/v24/pxiEyp8kv8JHgFVrFJA.ttf",
    publicPath: "/fonts/poppins-400.ttf",
  },
  {
    url: "https://fonts.gstatic.com/s/poppins/v24/pxiByp8kv8JHgFVrLGT9V1s.ttf",
    publicPath: "/fonts/poppins-500.ttf",
  },
  {
    url: "https://fonts.gstatic.com/s/poppins/v24/pxiByp8kv8JHgFVrLCz7V1s.ttf",
    publicPath: "/fonts/poppins-700.ttf",
  },
];

function extFromUrl(url) {
  const pathname = new URL(url).pathname;
  const ext = path.extname(pathname);
  return ext || ".bin";
}

function slugify(value, fallback) {
  const slug = String(value || "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
  return slug || fallback;
}

const seen = new Set();
const imageAssets = [];

for (const image of extract.desktop.images) {
  const url = image.rawSrc || image.src;
  if (!url || seen.has(url)) continue;
  seen.add(url);
  const index = String(imageAssets.length + 1).padStart(2, "0");
  const base = slugify(image.alt, "asset");
  const publicPath = `/images/arches/${index}-${base}${extFromUrl(url)}`;
  imageAssets.push({
    url,
    publicPath,
    alt: image.alt,
    naturalWidth: image.naturalWidth,
    naturalHeight: image.naturalHeight,
  });
}

for (const icon of extract.desktop.icons) {
  const url = icon.href;
  if (!url || seen.has(url)) continue;
  seen.add(url);
  const publicPath = `/seo/${slugify(icon.rel, "icon")}${extFromUrl(url)}`;
  imageAssets.push({ url, publicPath, alt: icon.rel });
}

const assets = [...imageAssets, ...fontAssets];
const manifest = {};

async function download(asset) {
  const response = await fetch(asset.url);
  if (!response.ok) {
    throw new Error(`Failed ${response.status} ${asset.url}`);
  }
  const outPath = path.join(root, "public", asset.publicPath);
  await mkdir(path.dirname(outPath), { recursive: true });
  const bytes = Buffer.from(await response.arrayBuffer());
  await writeFile(outPath, bytes);
  manifest[asset.url] = {
    ...asset,
    bytes: bytes.length,
  };
  console.log(`${asset.publicPath} ${bytes.length} bytes`);
}

for (let i = 0; i < assets.length; i += 4) {
  await Promise.all(assets.slice(i, i + 4).map(download));
}

await writeFile(
  path.join(root, "docs/research/arches-assets-manifest.json"),
  JSON.stringify(manifest, null, 2),
);

console.log(`Downloaded ${assets.length} assets`);
