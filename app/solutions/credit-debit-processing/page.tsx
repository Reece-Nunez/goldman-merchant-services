"use client";

import Link from "next/link";
import Image from "next/image";
import PageLayout from "../../components/PageLayout";
import { PageHero } from "../../components/ParallaxHero";
import { FadeInUp, FadeInLeft, FadeInRight, StaggerContainer, StaggerItem } from "../../components/animations";
import {
  CreditCardIcon,
  ShieldCheckIcon,
  BoltIcon,
  ChartBarIcon,
  LockClosedIcon,
  DevicePhoneMobileIcon,
  CheckCircleIcon,
  ArrowRightIcon,
} from "@heroicons/react/24/outline";

const features = [
  {
    icon: DevicePhoneMobileIcon,
    title: "EMV & Contactless Payments",
    description: "Accept chip cards and tap-to-pay with modern terminals that meet the latest security standards.",
  },
  {
    icon: BoltIcon,
    title: "Fast Authorizations",
    description: "Quick transaction processing that keeps your checkout lines moving and customers happy.",
  },
  {
    icon: ShieldCheckIcon,
    title: "Advanced Fraud Monitoring",
    description: "Real-time fraud detection and prevention tools to protect your business and customers.",
  },
  {
    icon: LockClosedIcon,
    title: "Secure Data Encryption",
    description: "End-to-end encryption and tokenization to keep sensitive payment data protected.",
  },
  {
    icon: ChartBarIcon,
    title: "Real-Time Reporting",
    description: "Access detailed transaction reports and analytics to understand your business performance.",
  },
];

const cardLogos = [
  { name: "Visa", logo: "/logos/visa.svg" },
  { name: "Mastercard", logo: "/logos/mastercard.svg" },
  { name: "American Express", logo: "/logos/amex.svg" },
  { name: "Discover", logo: "/logos/discover.svg" },
];

const additionalPayments = [
  "Debit Cards",
  "Prepaid Cards",
  "Apple Pay",
  "Google Pay",
];

export default function CreditDebitProcessingPage() {
  return (
    <PageLayout>
      <PageHero
        badge="Credit & Debit Processing"
        title="Reliable Credit & Debit Card Processing"
        description="Accept all major credit and debit cards with confidence. Our processing solutions are designed for speed, reliability, and security — ensuring every transaction runs smoothly."
      />

      {/* Features Section */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <FadeInUp className="text-center mb-16">
            <span className="text-amber-600 font-semibold text-sm uppercase tracking-wider">
              Features
            </span>
            <h2 className="text-3xl lg:text-4xl text-slate-900 mt-4 mb-6">
              Everything You Need for Card Processing
            </h2>
          </FadeInUp>

          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature) => (
              <StaggerItem key={feature.title}>
                <div className="bg-slate-50 rounded-xl p-8 h-full border border-slate-100 hover:border-amber-200 transition-colors">
                  <div className="w-12 h-12 rounded-lg bg-amber-100 flex items-center justify-center mb-6">
                    <feature.icon className="w-6 h-6 text-amber-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-slate-600">
                    {feature.description}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Accepted Cards */}
      <section className="py-20 lg:py-28 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <FadeInLeft>
              <span className="text-amber-600 font-semibold text-sm uppercase tracking-wider">
                Accepted Cards
              </span>
              <h2 className="text-3xl lg:text-4xl text-slate-900 mt-4 mb-6">
                Accept All Major Payment Types
              </h2>
              <p className="text-slate-600 text-lg mb-8">
                Give your customers the flexibility to pay how they want. We support all major
                credit cards, debit cards, and digital payment methods.
              </p>
              <div className="flex items-center gap-4 mb-8">
                <div className="w-14 h-14 rounded-xl bg-amber-100 flex items-center justify-center">
                  <CreditCardIcon className="w-7 h-7 text-amber-600" />
                </div>
                <div>
                  <div className="text-3xl font-bold text-slate-900">99.9%</div>
                  <div className="text-slate-600">Uptime Guarantee</div>
                </div>
              </div>
            </FadeInLeft>

            <FadeInRight>
              <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100">
                {/* Card Network Logos */}
                <div className="grid grid-cols-4 gap-6 mb-8">
                  {cardLogos.map((card) => (
                    <div
                      key={card.name}
                      className="flex items-center justify-center p-4 bg-white rounded-lg"
                    >
                      <Image
                        src={card.logo}
                        alt={card.name}
                        width={60}
                        height={40}
                        className="object-contain"
                      />
                    </div>
                  ))}
                </div>
                {/* Additional Payment Methods */}
                <div className="grid grid-cols-2 gap-3">
                  {additionalPayments.map((payment) => (
                    <div
                      key={payment}
                      className="flex items-center gap-2 text-slate-600"
                    >
                      <CheckCircleIcon className="w-5 h-5 text-amber-500 flex-shrink-0" />
                      <span className="text-sm font-medium">{payment}</span>
                    </div>
                  ))}
                </div>
              </div>
            </FadeInRight>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 lg:py-28 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="cc-grid" width="60" height="60" patternUnits="userSpaceOnUse">
                <path d="M 60 0 L 0 0 0 60" fill="none" stroke="white" strokeWidth="0.5"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#cc-grid)"/>
          </svg>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <FadeInUp>
            <h2 className="text-3xl lg:text-4xl text-white mb-6">
              Ready to Start Processing?
            </h2>
            <p className="text-slate-300 text-lg mb-10 max-w-2xl mx-auto">
              Get competitive rates and reliable processing for your business. Request pricing today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact?type=quote" className="btn-primary">
                Request Pricing
              </Link>
              <Link href="/solutions" className="btn-secondary">
                View All Solutions
              </Link>
            </div>
          </FadeInUp>
        </div>
      </section>
    </PageLayout>
  );
}
