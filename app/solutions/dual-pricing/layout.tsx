import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dual Pricing & Cash Discount Programs",
  description: "Reduce processing costs while staying transparent and compliant. Display cash and card prices to give customers a choice and protect your margins.",
  keywords: ["dual pricing", "cash discount program", "reduce processing fees", "merchant fees", "credit card surcharge", "compliant pricing"],
  openGraph: {
    title: "Dual Pricing & Cash Discount | Goldman Merchant Services",
    description: "Reduce processing costs while remaining transparent and compliant with dual pricing.",
  },
};

export default function DualPricingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
