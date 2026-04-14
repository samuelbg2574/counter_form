import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Counterform Studio",
  description: "Premium web systems from strong templates, rebuilt until they feel owned.",
  icons: {
    icon: "/seo/icon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
