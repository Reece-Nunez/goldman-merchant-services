import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Goldman Merchant Services privacy policy. Learn how we collect, use, and protect your information.",
  robots: {
    index: true,
    follow: true,
  },
};

export default function PrivacyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
