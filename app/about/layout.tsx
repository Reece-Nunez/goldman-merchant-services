import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn about Goldman Merchant Services - a portfolio company of The Goldman Fund delivering secure, compliant payment solutions for growing businesses.",
  openGraph: {
    title: "About Goldman Merchant Services",
    description: "A different kind of payment processor — built by investors who understand what businesses need to grow.",
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
