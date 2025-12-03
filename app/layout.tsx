import type { Metadata } from 'next';
import { Inter, Space_Grotesk } from 'next/font/google';
import './globals.css';
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const spaceGrotesk = Space_Grotesk({ 
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  weight: ['500', '600', '700']
});

export const metadata: Metadata = {
  metadataBase: new URL('https://damonte.vercel.app'),
  title: 'Damonte – AI Strategy & Consulting',
  description: 'Stop wasting time and money on bad AI decisions. Get expert AI strategy guidance and fix your approach now.',
  openGraph: {
    type: 'website',
    locale: 'en_GB',
    url: 'https://damonte.vercel.app',
    siteName: 'Damonte',
    title: 'Damonte – AI Strategy & Consulting',
    description: 'Stop wasting time and money on bad AI decisions. Get expert AI strategy guidance and fix your approach now.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Damonte – AI Strategy & Consulting',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Damonte – AI Strategy & Consulting',
    description: 'Stop wasting time and money on bad AI decisions. Get expert AI strategy guidance and fix your approach now.',
    images: ['/og-image.jpg'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} ${spaceGrotesk.variable}`}>
        <TooltipProvider>
          {children}
          <Toaster />
          <Sonner />
        </TooltipProvider>
      </body>
    </html>
  );
}
