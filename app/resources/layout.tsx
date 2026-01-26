import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Resources",
  description: "Payment processing resources, guides, and educational content for merchants. Learn about payment solutions, compliance, and best practices.",
  openGraph: {
    title: "Resources | Goldman Merchant Services",
    description: "Guides, FAQs, and educational content for merchants.",
  },
};

export default function ResourcesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
