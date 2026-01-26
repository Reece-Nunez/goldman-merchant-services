import type { Metadata } from "next";
import { Montserrat, DM_Serif_Display } from "next/font/google";
import "./globals.css";
import { OrganizationSchema, WebsiteSchema, LocalBusinessSchema } from "./components/StructuredData";
import GoogleAnalytics from "./components/GoogleAnalytics";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  display: "swap",
});

const dmSerif = DM_Serif_Display({
  variable: "--font-dm-serif",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL('https://goldmanmerchantservices.com'),
  title: {
    default: "Goldman Merchant Services | Payment Processing Solutions",
    template: "%s | Goldman Merchant Services",
  },
  description: "Goldman Merchant Services delivers secure, compliant, and scalable payment solutions designed to help small and mid-sized businesses grow — backed by The Goldman Fund.",
  keywords: [
    "merchant services",
    "payment processing",
    "credit card processing",
    "e-commerce payments",
    "high-risk merchant",
    "dual pricing",
    "cash discount program",
    "POS systems",
    "online payment gateway",
    "small business payments",
  ],
  authors: [{ name: "Goldman Merchant Services" }],
  creator: "Goldman Merchant Services",
  publisher: "Goldman Merchant Services",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://goldmanmerchantservices.com",
    siteName: "Goldman Merchant Services",
    title: "Goldman Merchant Services | Payment Processing Solutions",
    description: "Secure, compliant, and scalable payment solutions for growing businesses. Credit card processing, e-commerce payments, dual pricing, and more.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Goldman Merchant Services - Payment Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Goldman Merchant Services | Payment Processing Solutions",
    description: "Secure, compliant, and scalable payment solutions for growing businesses.",
    images: ["/og-image.png"],
  },
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
  verification: {
    // Add your verification codes here when ready
    // google: "your-google-verification-code",
    // yandex: "your-yandex-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <OrganizationSchema />
        <WebsiteSchema />
        <LocalBusinessSchema />
      </head>
      <body className={`${montserrat.variable} ${dmSerif.variable} antialiased`}>
        <GoogleAnalytics />
        {children}
      </body>
    </html>
  );
}
