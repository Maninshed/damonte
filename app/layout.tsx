import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Damonte – AI Strategy Consulting",
  description:
    "Stop wasting time and money on bad AI decisions. Fix your AI strategy now with expert guidance that delivers real business results.",
  openGraph: {
    title: "Damonte – AI Strategy Consulting",
    description:
      "Stop wasting time and money on bad AI decisions. Fix your AI strategy now with expert guidance that delivers real business results.",
    url: "https://damonteuk.vercel.app/",
    siteName: "Damonte",
    images: [
      {
        url: "https://damonteuk.vercel.app/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Damonte – AI Strategy Consulting",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Damonte – AI Strategy Consulting",
    description:
      "Stop wasting time and money on bad AI decisions. Fix your AI strategy now with expert guidance.",
    images: ["https://damonteuk.vercel.app/og-image.jpg"],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <body>{children}</body>
    </html>
  );
}
