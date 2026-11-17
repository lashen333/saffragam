// src\app\layout.tsx
import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: "Saffragam Gem Co. | Gemstones from Sri Lanka",
  description:
    "A small gemstone business in Sri Lanka. Explore sapphires, coloured stones and special finds, or get in touch with what you have in mind.",
  icons: {
    icon: [
      {
        url: "/favicon-32x32.png",
        sizes: "32x32",
        type: "image/png",
      },
    ],
  },
  openGraph: {
    title: "Saffragam Gem Co. | Gemstones from Sri Lanka",
    description:
      "Explore sapphires, coloured stones and special finds from Sri Lanka.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
