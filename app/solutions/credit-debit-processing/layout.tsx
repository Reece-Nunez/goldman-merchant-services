import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Credit & Debit Card Processing",
  description: "Accept all major credit and debit cards with fast, secure, and reliable processing. EMV, contactless payments, and advanced fraud protection.",
  keywords: ["credit card processing", "debit card processing", "EMV payments", "contactless payments", "payment terminal", "merchant account"],
  openGraph: {
    title: "Credit & Debit Card Processing | Goldman Merchant Services",
    description: "Accept all major credit and debit cards with fast, secure, and reliable processing.",
  },
};

export default function CreditDebitLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
