import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Partner Program",
  description: "Join our partner network. ISO partners, agent partners, and strategic partners benefit from competitive residuals, dedicated support, and scalable infrastructure.",
  keywords: ["ISO partner program", "payment processing partner", "merchant services agent", "residual income", "payment referral program"],
  openGraph: {
    title: "Partner Program | Goldman Merchant Services",
    description: "Partner program for ISOs, brokers, and strategic partners looking for reliable processing.",
  },
};

export default function PartnersLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
