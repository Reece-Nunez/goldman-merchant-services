import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Get in touch with Goldman Merchant Services. Request a quote, discuss payment solutions, or inquire about partnership opportunities.",
  openGraph: {
    title: "Contact Us | Goldman Merchant Services",
    description: "Connect with our team to discuss payment solutions and pricing.",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
