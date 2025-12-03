import './globals.css';

export const metadata = {
  title: "Damonte – AI Strategy Consulting",
  description: "Stop wasting time and money on bad AI decisions. Fix your AI strategy now.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta property="og:title" content="Damonte – AI Strategy Consulting" />
        <meta property="og:description" content="Stop wasting time and money on bad AI decisions. Fix your AI strategy now." />
        <meta property="og:image" content="/og-image.jpg" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
      </head>
      <body>{children}</body>
    </html>
  );
}
