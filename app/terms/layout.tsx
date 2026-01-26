import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Goldman Merchant Services terms of service and conditions of use.",
  robots: {
    index: true,
    follow: true,
  },
};

export default function TermsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
