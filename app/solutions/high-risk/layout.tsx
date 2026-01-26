import { Metadata } from "next";

export const metadata: Metadata = {
  title: "High-Risk Merchant Solutions",
  description: "Specialized payment processing for high-risk industries. Expert underwriting, chargeback management, and dedicated support for challenging merchant categories.",
  keywords: ["high-risk merchant account", "high-risk payment processing", "chargeback management", "high-risk industries", "specialized underwriting"],
  openGraph: {
    title: "High-Risk Merchant Solutions | Goldman Merchant Services",
    description: "Specialized underwriting and support for merchants in challenging industries.",
  },
};

export default function HighRiskLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
