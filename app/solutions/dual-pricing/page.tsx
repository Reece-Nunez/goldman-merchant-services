"use client";

import Link from "next/link";
import PageLayout from "../../components/PageLayout";
import ParallaxHero from "../../components/ParallaxHero";
import { FadeInUp, FadeInLeft, FadeInRight, StaggerContainer, StaggerItem } from "../../components/animations";
import {
  CurrencyDollarIcon,
  CalculatorIcon,
  ShieldCheckIcon,
  ChatBubbleLeftRightIcon,
  CheckCircleIcon,
  ArrowRightIcon,
} from "@heroicons/react/24/outline";

const benefits = [
  {
    icon: CurrencyDollarIcon,
    title: "Lower Processing Expenses",
    description: "Significantly reduce your credit card processing costs by offering a cash discount option to customers.",
  },
  {
    icon: ShieldCheckIcon,
    title: "Automated Compliance",
    description: "Our system handles all compliance requirements automatically, keeping you protected.",
  },
  {
    icon: CalculatorIcon,
    title: "No Manual Calculations",
    description: "Pricing adjustments are calculated automatically at the point of sale — no extra steps for your staff.",
  },
  {
    icon: ChatBubbleLeftRightIcon,
    title: "Clear Customer Communication",
    description: "Transparent signage and receipts ensure customers understand their payment options.",
  },
];

const howItWorks = [
  {
    step: "01",
    title: "Display Both Prices",
    description: "Show cash and card prices clearly to customers before they choose their payment method.",
  },
  {
    step: "02",
    title: "Customer Chooses",
    description: "Customers decide whether to pay with cash and receive the discount, or pay with card.",
  },
  {
    step: "03",
    title: "Automatic Adjustment",
    description: "The system automatically applies the correct pricing based on the payment method selected.",
  },
  {
    step: "04",
    title: "You Save",
    description: "When customers pay cash, you keep more of your revenue instead of paying processing fees.",
  },
];

export default function DualPricingPage() {
  return (
    <PageLayout>
      <ParallaxHero
        badge="Dual Pricing"
        title="Dual Pricing & Cash Discount Programs"
        description="Reduce processing costs while remaining transparent and compliant. Our dual pricing technology allows businesses to display both cash and card prices — giving customers a choice and helping merchants protect margins."
        backgroundImage="/dual-pricing.png"
        minHeight="70vh"
        showScrollIndicator={false}
      />

      {/* Benefits Section */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <FadeInUp className="text-center mb-16">
            <span className="text-amber-600 font-semibold text-sm uppercase tracking-wider">
              Benefits
            </span>
            <h2 className="text-3xl lg:text-4xl text-slate-900 mt-4 mb-6">
              Why Dual Pricing Works
            </h2>
          </FadeInUp>

          <StaggerContainer className="grid md:grid-cols-2 gap-8">
            {benefits.map((benefit) => (
              <StaggerItem key={benefit.title}>
                <div className="bg-slate-50 rounded-xl p-8 h-full border border-slate-100 hover:border-amber-200 transition-colors">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-amber-100 flex items-center justify-center flex-shrink-0">
                      <benefit.icon className="w-6 h-6 text-amber-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-slate-900 mb-2">
                        {benefit.title}
                      </h3>
                      <p className="text-slate-600">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 lg:py-28 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <FadeInUp className="text-center mb-16">
            <span className="text-amber-600 font-semibold text-sm uppercase tracking-wider">
              Process
            </span>
            <h2 className="text-3xl lg:text-4xl text-slate-900 mt-4 mb-6">
              How Dual Pricing Works
            </h2>
          </FadeInUp>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {howItWorks.map((item, index) => (
              <FadeInUp key={item.step} delay={index * 0.1}>
                <div className="text-center">
                  <div className="w-16 h-16 rounded-full bg-amber-100 flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-amber-600">{item.step}</span>
                  </div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-slate-600 text-sm">
                    {item.description}
                  </p>
                </div>
              </FadeInUp>
            ))}
          </div>
        </div>
      </section>

      {/* Savings Highlight */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="bg-gradient-to-br from-amber-50 to-amber-100 rounded-2xl p-8 lg:p-12">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <FadeInLeft>
                <h2 className="text-3xl lg:text-4xl text-slate-900 mb-6">
                  Save Thousands on Processing Fees
                </h2>
                <p className="text-slate-600 text-lg mb-6">
                  The average business saves 2-3% on their total credit card volume when implementing
                  a dual pricing program. That&apos;s money that goes directly back into your business.
                </p>
                <ul className="space-y-3 mb-8">
                  {[
                    "No hidden fees or surprises",
                    "Full compliance support included",
                    "Compatible with most POS systems",
                    "Training and signage provided",
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-3">
                      <CheckCircleIcon className="w-5 h-5 text-amber-600" />
                      <span className="text-slate-700">{item}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href="/contact"
                  className="btn-primary inline-flex items-center gap-2"
                >
                  Calculate Your Savings
                  <ArrowRightIcon className="w-4 h-4" />
                </Link>
              </FadeInLeft>

              <FadeInRight>
                <div className="bg-white rounded-xl p-8 shadow-lg">
                  <div className="text-center">
                    <div className="text-5xl font-bold text-amber-600 mb-2">2-3%</div>
                    <div className="text-slate-600 mb-6">Average Savings on Card Volume</div>
                    <div className="border-t border-slate-100 pt-6">
                      <div className="grid grid-cols-2 gap-4 text-center">
                        <div>
                          <div className="text-2xl font-bold text-slate-900">$24K+</div>
                          <div className="text-slate-500 text-sm">Annual Savings*</div>
                        </div>
                        <div>
                          <div className="text-2xl font-bold text-slate-900">100%</div>
                          <div className="text-slate-500 text-sm">Compliant</div>
                        </div>
                      </div>
                    </div>
                    <p className="text-xs text-slate-400 mt-4">*Based on $1M annual card volume</p>
                  </div>
                </div>
              </FadeInRight>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 lg:py-28 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="dual-grid" width="60" height="60" patternUnits="userSpaceOnUse">
                <path d="M 60 0 L 0 0 0 60" fill="none" stroke="white" strokeWidth="0.5"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#dual-grid)"/>
          </svg>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <FadeInUp>
            <h2 className="text-3xl lg:text-4xl text-white mb-6">
              Start Saving on Processing Today
            </h2>
            <p className="text-slate-300 text-lg mb-10 max-w-2xl mx-auto">
              Contact us to learn how dual pricing can reduce your payment processing costs.
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
