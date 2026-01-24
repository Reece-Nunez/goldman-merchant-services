"use client";

import Link from "next/link";
import PageLayout from "../../components/PageLayout";
import { PageHero } from "../../components/ParallaxHero";
import { FadeInUp, FadeInLeft, FadeInRight, StaggerContainer, StaggerItem } from "../../components/animations";
import {
  GlobeAltIcon,
  CreditCardIcon,
  ArrowPathIcon,
  DocumentTextIcon,
  ShieldCheckIcon,
  CheckCircleIcon,
  ArrowRightIcon,
} from "@heroicons/react/24/outline";

const capabilities = [
  {
    icon: GlobeAltIcon,
    title: "Hosted Checkout Pages",
    description: "Secure, customizable checkout pages that match your brand and reduce PCI compliance burden.",
  },
  {
    icon: ArrowPathIcon,
    title: "Recurring & Subscription Billing",
    description: "Automate recurring payments for subscription-based businesses with flexible billing cycles.",
  },
  {
    icon: DocumentTextIcon,
    title: "Customer Invoicing",
    description: "Send professional invoices and accept payments online with our integrated invoicing tools.",
  },
  {
    icon: CreditCardIcon,
    title: "Secure Cards-on-File",
    description: "Safely store customer payment information for quick repeat purchases and future billing.",
  },
  {
    icon: ShieldCheckIcon,
    title: "PCI-Compliant Gateways",
    description: "Enterprise-grade security that meets the highest PCI DSS compliance standards.",
  },
];

const benefits = [
  "Easy integration with popular e-commerce platforms",
  "Developer-friendly APIs and documentation",
  "Real-time transaction monitoring",
  "Automated fraud prevention",
  "Detailed analytics and reporting",
  "24/7 technical support",
];

export default function OnlinePaymentsPage() {
  return (
    <PageLayout>
      <PageHero
        badge="Online Payments"
        title="Online & E-Commerce Payment Solutions"
        description="Power your digital business with secure and flexible online payment tools. Whether you sell products, services, or subscriptions, we help you collect payments efficiently while protecting customer data."
      />

      {/* Capabilities Section */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <FadeInUp className="text-center mb-16">
            <span className="text-amber-600 font-semibold text-sm uppercase tracking-wider">
              Capabilities
            </span>
            <h2 className="text-3xl lg:text-4xl text-slate-900 mt-4 mb-6">
              Complete Online Payment Toolkit
            </h2>
          </FadeInUp>

          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {capabilities.map((capability) => (
              <StaggerItem key={capability.title}>
                <div className="bg-slate-50 rounded-xl p-8 h-full border border-slate-100 hover:border-amber-200 transition-colors">
                  <div className="w-12 h-12 rounded-lg bg-amber-100 flex items-center justify-center mb-6">
                    <capability.icon className="w-6 h-6 text-amber-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-3">
                    {capability.title}
                  </h3>
                  <p className="text-slate-600">
                    {capability.description}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 lg:py-28 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <FadeInLeft>
              <span className="text-amber-600 font-semibold text-sm uppercase tracking-wider">
                Benefits
              </span>
              <h2 className="text-3xl lg:text-4xl text-slate-900 mt-4 mb-6">
                Why Choose Our Online Payment Solutions?
              </h2>
              <p className="text-slate-600 text-lg mb-8">
                We provide everything you need to accept payments online — from simple checkout
                buttons to complex subscription management systems.
              </p>
              <Link
                href="/contact"
                className="btn-primary inline-flex items-center gap-2"
              >
                Get Started
                <ArrowRightIcon className="w-4 h-4" />
              </Link>
            </FadeInLeft>

            <FadeInRight>
              <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100">
                <ul className="space-y-4">
                  {benefits.map((benefit) => (
                    <li key={benefit} className="flex items-start gap-3">
                      <CheckCircleIcon className="w-6 h-6 text-amber-500 flex-shrink-0 mt-0.5" />
                      <span className="text-slate-700">{benefit}</span>
                    </li>
                  ))}
                </ul>
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
              <pattern id="online-grid" width="60" height="60" patternUnits="userSpaceOnUse">
                <path d="M 60 0 L 0 0 0 60" fill="none" stroke="white" strokeWidth="0.5"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#online-grid)"/>
          </svg>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <FadeInUp>
            <h2 className="text-3xl lg:text-4xl text-white mb-6">
              Ready to Go Online?
            </h2>
            <p className="text-slate-300 text-lg mb-10 max-w-2xl mx-auto">
              Set up your online payment system and start accepting payments from customers anywhere in the world.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn-primary">
                Get Started
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
