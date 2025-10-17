import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import FollowingBanner from "@/components/FollowingBanner";
import Footer from "@/components/Footer";
import StructuredData from "@/components/StructuredData";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Insignia Group | Vertically Integrated Real Estate Development",
  description: "From initial vision to final delivery, we control every stage of development—ensuring uncompromising quality across 43 iconic buildings throughout New York City. Three generations of vertically integrated real estate excellence.",
  keywords: [
    "real estate development NYC",
    "vertical integration",
    "construction management",
    "property management",
    "architectural design",
    "NYC real estate",
    "Brooklyn development",
    "Queens development",
    "mixed-use development",
    "residential development",
    "commercial real estate",
    "hotel development",
    "healthcare facilities"
  ],
  authors: [{ name: "Insignia Group" }],
  creator: "Insignia Group",
  publisher: "Insignia Group",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "Insignia Group | Vertically Integrated Real Estate Development",
    description: "Three generations of excellence delivering iconic developments across hotels, residential, healthcare, and commercial properties throughout New York City.",
    type: "website",
    locale: "en_US",
    siteName: "Insignia Group",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Insignia Group - Vertically Integrated Real Estate Development",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Insignia Group | Vertically Integrated Real Estate Development",
    description: "Three generations of excellence. 43 iconic buildings. Complete control from vision to delivery.",
    images: ["/og-image.jpg"],
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
  },
  themeColor: "#1a1a1a",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <link rel="preload" href="/heroback.mp4" as="video" type="video/mp4" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="font-sans antialiased">
        <StructuredData />
        <Navigation />
        <FollowingBanner />
        {children}
        <Footer />
      </body>
    </html>
  );
}
