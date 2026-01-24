"use client";

import Link from "next/link";
import PageLayout from "../components/PageLayout";
import { PageHero } from "../components/ParallaxHero";
import { FadeInUp, FadeInLeft, FadeInRight, StaggerContainer, StaggerItem, HoverCard } from "../components/animations";
import {
  CreditCardIcon,
  GlobeAltIcon,
  CurrencyDollarIcon,
  ShieldExclamationIcon,
  DevicePhoneMobileIcon,
  ComputerDesktopIcon,
  ArrowRightIcon,
  CheckCircleIcon,
} from "@heroicons/react/24/outline";

const solutions = [
  {
    icon: CreditCardIcon,
    title: "In-Store Payments",
    description: "Modern countertop terminals, wireless devices, and POS-integrated systems that deliver fast, secure checkout experiences.",
    features: ["EMV & Contactless", "Fast Authorizations", "POS Integration"],
  },
  {
    icon: GlobeAltIcon,
    title: "Online Payments",
    description: "Secure gateways, hosted checkout pages, recurring billing, and invoicing tools built for e-commerce and service-based businesses.",
    features: ["Hosted Checkout", "Recurring Billing", "PCI Compliant"],
  },
  {
    icon: DevicePhoneMobileIcon,
    title: "Mobile Payments",
    description: "Accept payments anywhere your business operates — ideal for field services, events, delivery, and mobile sales teams.",
    features: ["Mobile Card Readers", "App Integration", "On-the-Go Processing"],
  },
  {
    icon: ComputerDesktopIcon,
    title: "Virtual Terminals",
    description: "Process payments from any browser-enabled device without hardware. Perfect for phone orders and remote payments.",
    features: ["No Hardware Needed", "Browser-Based", "Secure Processing"],
  },
];

const detailedSolutions = [
  {
    icon: CreditCardIcon,
    title: "Credit & Debit Card Processing",
    description: "Accept all major credit and debit cards with confidence. Our processing solutions are designed for speed, reliability, and security — ensuring every transaction runs smoothly.",
    href: "/solutions/credit-debit-processing",
    features: ["EMV & Contactless Payments", "Fast Authorizations", "Advanced Fraud Monitoring", "Secure Data Encryption", "Real-Time Reporting"],
  },
  {
    icon: GlobeAltIcon,
    title: "Online & E-Commerce Payments",
    description: "Power your digital business with secure and flexible online payment tools. Whether you sell products, services, or subscriptions, we help you collect payments efficiently.",
    href: "/solutions/online-payments",
    features: ["Hosted Checkout Pages", "Recurring & Subscription Billing", "Customer Invoicing", "Secure Cards-on-File", "PCI-Compliant Gateways"],
  },
  {
    icon: CurrencyDollarIcon,
    title: "Dual Pricing & Cash Discount",
    description: "Reduce processing costs while remaining transparent and compliant. Our dual pricing technology allows businesses to display both cash and card prices.",
    href: "/solutions/dual-pricing",
    features: ["Lower Processing Expenses", "Automated Compliance", "No Manual Calculations", "Clear Customer Communication"],
  },
  {
    icon: ShieldExclamationIcon,
    title: "High-Risk Merchant Solutions",
    description: "Some businesses operate in industries traditional processors avoid. We specialize in underwriting and supporting high-risk merchants with secure, compliant solutions.",
    href: "/solutions/high-risk",
    features: ["CBD & Hemp", "Subscription Programs", "Nutraceuticals", "Travel & Ticketing", "E-Commerce Services"],
  },
];

export default function SolutionsPage() {
  return (
    <PageLayout>
      <PageHero
        badge="Solutions"
        title="Payment Solutions Designed for Real Businesses"
        description="No two businesses operate the same — and your payment infrastructure shouldn't either. Goldman Merchant Services offers flexible solutions tailored to your industry, transaction volume, and growth objectives."
      />

      {/* Overview Solutions */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <FadeInUp className="text-center mb-16">
            <span className="text-amber-600 font-semibold text-sm uppercase tracking-wider">
              Payment Types
            </span>
            <h2 className="text-3xl lg:text-4xl text-slate-900 mt-4 mb-6">
              Accept Payments Everywhere
            </h2>
            <p className="text-slate-600 text-lg max-w-2xl mx-auto">
              Whether your customers are in-store, online, or on-the-go, we have the right solution.
            </p>
          </FadeInUp>

          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {solutions.map((solution) => (
              <StaggerItem key={solution.title}>
                <HoverCard className="h-full">
                  <div className="bg-slate-50 rounded-xl p-6 h-full border border-slate-100">
                    <div className="w-12 h-12 rounded-lg bg-amber-100 flex items-center justify-center mb-4">
                      <solution.icon className="w-6 h-6 text-amber-600" />
                    </div>
                    <h3 className="text-lg font-semibold text-slate-900 mb-2">
                      {solution.title}
                    </h3>
                    <p className="text-slate-600 text-sm mb-4">
                      {solution.description}
                    </p>
                    <ul className="space-y-1">
                      {solution.features.map((feature) => (
                        <li key={feature} className="text-xs text-slate-500 flex items-center gap-2">
                          <CheckCircleIcon className="w-4 h-4 text-amber-500" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </HoverCard>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Detailed Solutions */}
      <section className="py-20 lg:py-28 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <FadeInUp className="text-center mb-16">
            <span className="text-amber-600 font-semibold text-sm uppercase tracking-wider">
              Our Solutions
            </span>
            <h2 className="text-3xl lg:text-4xl text-slate-900 mt-4 mb-6">
              Explore Our Payment Solutions
            </h2>
          </FadeInUp>

          <div className="space-y-8">
            {detailedSolutions.map((solution, index) => (
              <FadeInUp key={solution.title} delay={index * 0.1}>
                <div className="bg-white rounded-2xl p-8 lg:p-10 shadow-sm border border-slate-100">
                  <div className="grid lg:grid-cols-3 gap-8 items-center">
                    <div className="lg:col-span-2">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="w-12 h-12 rounded-lg bg-amber-100 flex items-center justify-center">
                          <solution.icon className="w-6 h-6 text-amber-600" />
                        </div>
                        <h3 className="text-2xl text-slate-900">{solution.title}</h3>
                      </div>
                      <p className="text-slate-600 mb-6">{solution.description}</p>
                      <Link
                        href={solution.href}
                        className="inline-flex items-center gap-2 text-amber-600 font-semibold hover:text-amber-700 transition-colors"
                      >
                        Learn More
                        <ArrowRightIcon className="w-4 h-4" />
                      </Link>
                    </div>
                    <div>
                      <ul className="space-y-3">
                        {solution.features.map((feature) => (
                          <li key={feature} className="flex items-center gap-3 text-slate-600">
                            <CheckCircleIcon className="w-5 h-5 text-amber-500 flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </FadeInUp>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 lg:py-28 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="solutions-grid" width="60" height="60" patternUnits="userSpaceOnUse">
                <path d="M 60 0 L 0 0 0 60" fill="none" stroke="white" strokeWidth="0.5"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#solutions-grid)"/>
          </svg>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <FadeInUp>
            <h2 className="text-3xl lg:text-4xl text-white mb-6">
              Find the Right Solution for Your Business
            </h2>
            <p className="text-slate-300 text-lg mb-10 max-w-2xl mx-auto">
              Our team will help you identify the best payment infrastructure for your specific needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn-primary">
                Get Started
              </Link>
              <Link href="/contact?type=quote" className="btn-secondary">
                Request Pricing
              </Link>
            </div>
          </FadeInUp>
        </div>
      </section>
    </PageLayout>
  );
}
