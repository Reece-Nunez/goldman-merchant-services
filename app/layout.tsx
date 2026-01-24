import type { Metadata } from "next";
import { Montserrat, DM_Serif_Display } from "next/font/google";
import "./globals.css";

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
  title: "Goldman Merchant Services | Modern Payment Solutions for Growing Businesses",
  description: "Goldman Merchant Services delivers secure, compliant, and scalable payment solutions designed to help small and mid-sized businesses grow — backed by a private-equity platform focused on long-term value creation.",
  keywords: "merchant services, payment processing, credit card processing, e-commerce payments, high-risk merchant, dual pricing, cash discount",
  openGraph: {
    title: "Goldman Merchant Services | Modern Payment Solutions",
    description: "Secure, compliant, and scalable payment solutions for growing businesses.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${montserrat.variable} ${dmSerif.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
