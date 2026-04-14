import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Counterform Studio — Premium Websites for UK Independents";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "80px",
          background:
            "linear-gradient(135deg, #0d1b2a 0%, #1b263b 50%, #415a77 100%)",
          color: "#ffffff",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ fontSize: 28, letterSpacing: "0.2em", opacity: 0.8 }}>
          COUNTERFORM STUDIO
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 24,
          }}
        >
          <div
            style={{
              fontSize: 76,
              fontWeight: 500,
              lineHeight: 1.05,
              letterSpacing: "-0.01em",
              maxWidth: 1000,
            }}
          >
            Look like the premium choice. Win the premium jobs.
          </div>
          <div style={{ fontSize: 30, opacity: 0.85, maxWidth: 900 }}>
            Premium websites for UK independents who charge premium prices.
          </div>
        </div>
      </div>
    ),
    { ...size },
  );
}
