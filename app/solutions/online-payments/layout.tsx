import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Online & E-Commerce Payment Solutions",
  description: "Power your digital business with secure payment gateways, recurring billing, invoicing tools, and PCI-compliant checkout solutions.",
  keywords: ["online payments", "e-commerce payments", "payment gateway", "recurring billing", "subscription billing", "online checkout"],
  openGraph: {
    title: "Online & E-Commerce Payments | Goldman Merchant Services",
    description: "Secure and flexible online payment tools for digital businesses.",
  },
};

export default function OnlinePaymentsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
