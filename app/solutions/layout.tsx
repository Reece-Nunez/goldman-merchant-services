import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Payment Solutions",
  description: "Comprehensive payment solutions including credit card processing, e-commerce payments, dual pricing, and high-risk merchant services.",
  openGraph: {
    title: "Payment Solutions | Goldman Merchant Services",
    description: "End-to-end merchant services for businesses operating in-store, online, and on-the-go.",
  },
};

export default function SolutionsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
