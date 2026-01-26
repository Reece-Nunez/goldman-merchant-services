import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Industries We Serve",
  description: "Industry-focused payment solutions for retail, restaurants, healthcare, professional services, e-commerce, and field services businesses.",
  keywords: ["retail payments", "restaurant POS", "healthcare payments", "professional services billing", "e-commerce payments", "field service payments"],
  openGraph: {
    title: "Industries We Serve | Goldman Merchant Services",
    description: "Payment solutions tailored to how your business actually operates.",
  },
};

export default function IndustriesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
