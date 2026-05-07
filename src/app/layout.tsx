import type { Metadata, Viewport } from "next";
import "@/app/globals.css";
import SmoothScroll from "@/components/smoothScroll";
import { Noto_Sans, Noto_Serif, Noto_Sans_Mono } from "next/font/google";

const sans = Noto_Sans({ subsets: ["latin"], variable: "--font-sans" });
const serif = Noto_Serif({ subsets: ["latin"], variable: "--font-serif"});
const mono = Noto_Sans_Mono({ subsets: ["latin"], variable: "--font-mono" });

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "Warex Organisation Wiki - Collaborate on non-official documentation for Warex",
  description: "Warex's official wiki for non-official documentation. Join us in our mission to provide comprehensive and collaborative documentation for Warex projects.",
  alternates: {
    canonical: 'https://warex.org',
  },
  icons: {
    icon: '/icon.svg',
  },
  openGraph: {
    title: 'Warex Organisation Wiki - Collaborate on non-official documentation for Warex',
    description: 'Warex\'s official wiki for non-official documentation. Join us in our mission to provide comprehensive and collaborative documentation for Warex projects.',
    url: 'https://warex.org',
    siteName: 'Warex',
    images: [
      {
        url: '/icon.svg',
        alt: 'Warex Logo',
        width: 1024,
        height: 1024,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Warex Organisation Wiki - Collaborate on non-official documentation for Warex',
    description: 'Warex\'s official wiki for non-official documentation. Join us in our mission to provide comprehensive and collaborative documentation for Warex projects.',
    images: ['/icon.svg'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${sans.variable} ${serif.variable} ${mono.variable}`}>
      <body className="antialiased">
        <SmoothScroll>
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}