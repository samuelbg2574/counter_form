import type { Metadata } from "next";
import localFont from "next/font/local";

import { SITE_URL, serializeJsonLd } from "@/lib/seo";

import "./globals.css";

const poppins = localFont({
  src: [
    { path: "../../public/fonts/poppins-400.ttf", weight: "400", style: "normal" },
    { path: "../../public/fonts/poppins-500.ttf", weight: "500", style: "normal" },
    { path: "../../public/fonts/poppins-700.ttf", weight: "700", style: "normal" },
  ],
  variable: "--font-poppins",
  display: "swap",
  preload: true,
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Counterform Studio — Premium Websites for Independent UK Businesses",
    template: "%s | Counterform Studio",
  },
  description:
    "Fast, premium websites for independent UK businesses that need clearer positioning, stronger trust, and better enquiries.",
  keywords: [
    "premium website design UK",
    "web design for small business UK",
    "Next.js web design studio",
    "premium website for independent business",
    "UK web design studio",
    "fast website design",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: "Counterform Studio",
    title: "Counterform Studio — Premium Websites for Independent UK Businesses",
    description:
      "Fast, premium websites for independent UK businesses that need clearer positioning, stronger trust, and better enquiries.",
    locale: "en_GB",
  },
  twitter: {
    card: "summary_large_image",
    title: "Counterform Studio — Premium Websites for Independent UK Businesses",
    description:
      "Fast, premium websites for independent UK businesses that need clearer positioning and better enquiries.",
  },
  icons: {
    icon: "/seo/icon.svg",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "Counterform Studio",
    url: SITE_URL,
    description:
      "Fast, premium websites for independent UK businesses that need clearer positioning, stronger trust, and better enquiries.",
    areaServed: { "@type": "Country", name: "United Kingdom" },
    priceRange: "££££",
    makesOffer: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Premium website design",
          url: `${SITE_URL}/services/web-design`,
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "SEO optimisation",
          url: `${SITE_URL}/services/seo-optimisation`,
        },
      },
    ],
    sameAs: [],
  };

  return (
    <html lang="en-GB" className={`${poppins.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: serializeJsonLd(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
