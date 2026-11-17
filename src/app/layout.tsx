// src\app\layout.tsx
import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ceylon Gem Co. | Gemstones from Sri Lanka",
  description:
    "A small gemstone business in Sri Lanka. Explore sapphires, coloured stones and special finds, or get in touch with what you have in mind.",
  openGraph: {
    title: "Ceylon Gem Co. | Gemstones from Sri Lanka",
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
