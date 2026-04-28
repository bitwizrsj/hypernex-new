import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Suspense } from "react";
import "./globals.css";
import AnalyticsTracker from "@/components/AnalyticsTracker";
import CookieConsent from "@/components/CookieConsent";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://hypernextechnologies.com'),
  title: {
    default: "Hypernex Technologies | High-End Digital Agency USA",
    template: "%s | Hypernex Technologies"
  },
  description: "Hypernex Technologies is a premier digital agency in the USA specializing in high-performance web design, software development, and strategic branding for ambitious startups and enterprises.",
  keywords: ["Digital Agency USA", "Web Design Sheridan", "Software Development", "UI/UX Design", "Hypernex Technologies", "Brand Strategy", "Next.js Development"],
  authors: [{ name: "Hypernex Team" }],
  creator: "Hypernex Technologies",
  publisher: "Hypernex Technologies",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://hypernextechnologies.com",
    siteName: "Hypernex Technologies",
    title: "Hypernex Technologies | Building the Digital Future",
    description: "Expert web design and software engineering for modern brands. Based in USA.",
    images: [
      {
        url: "/og-image.png", // I'll need to generate this or use a placeholder
        width: 1200,
        height: 630,
        alt: "Hypernex Technologies",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Hypernex Technologies | Digital Agency USA",
    description: "High-performance digital experiences for ambitious brands.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#0b0b0e] text-white">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Hypernex Technologies",
              "url": "https://hypernextechnologies.com",
              "logo": "https://hypernextechnologies.com/logo.png",
              "description": "High-end digital agency specializing in web design and software development.",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "30 N Gould St Ste R",
                "addressLocality": "Sheridan",
                "addressRegion": "WY",
                "postalCode": "82801",
                "addressCountry": "US"
              },
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+1-555-000-0000",
                "contactType": "customer service",
                "email": "info@hypernextechnologies.com"
              }
            })
          }}
        />
        <Suspense fallback={null}>
          <AnalyticsTracker />
          <CookieConsent />
        </Suspense>
        {children}
      </body>
    </html>
  );
}
