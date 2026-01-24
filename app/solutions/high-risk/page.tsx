"use client";

import Link from "next/link";
import PageLayout from "../../components/PageLayout";
import { PageHero } from "../../components/ParallaxHero";
import { FadeInUp, FadeInLeft, FadeInRight, StaggerContainer, StaggerItem } from "../../components/animations";
import {
  ShieldExclamationIcon,
  BeakerIcon,
  GlobeAltIcon,
  PhoneIcon,
  TicketIcon,
  ShoppingCartIcon,
  CheckCircleIcon,
  ArrowRightIcon,
} from "@heroicons/react/24/outline";

const industries = [
  {
    icon: BeakerIcon,
    title: "CBD & Hemp",
    description: "Compliant payment processing for CBD, hemp, and related products.",
  },
  {
    icon: ShoppingCartIcon,
    title: "Subscription & Continuity Programs",
    description: "Solutions for recurring billing and subscription-based business models.",
  },
  {
    icon: BeakerIcon,
    title: "Nutraceuticals & Supplements",
    description: "Payment processing for health supplements and nutraceutical products.",
  },
  {
    icon: TicketIcon,
    title: "Travel & Ticketing",
    description: "Specialized solutions for travel agencies, ticketing, and booking services.",
  },
  {
    icon: GlobeAltIcon,
    title: "E-Commerce & Digital Services",
    description: "Online payment solutions for digital products and services.",
  },
  {
    icon: PhoneIcon,
    title: "Telemarketing & Call Centers",
    description: "Phone-based payment processing for outbound sales operations.",
  },
];

const features = [
  "Specialized underwriting expertise",
  "Chargeback management tools",
  "Rolling reserve solutions",
  "Multi-MID strategies",
  "Fraud prevention systems",
  "Dedicated account management",
];

export default function HighRiskPage() {
  return (
    <PageLayout>
      <PageHero
        badge="High-Risk Solutions"
        title="High-Risk Merchant Payment Solutions"
        description="Some businesses operate in industries traditional processors avoid. We specialize in underwriting and supporting high-risk merchants with secure, compliant payment solutions."
      />

      {/* Industries Section */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <FadeInUp className="text-center mb-16">
            <span className="text-amber-600 font-semibold text-sm uppercase tracking-wider">
              Industries We Support
            </span>
            <h2 className="text-3xl lg:text-4xl text-slate-900 mt-4 mb-6">
              Specialized High-Risk Processing
            </h2>
            <p className="text-slate-600 text-lg max-w-2xl mx-auto">
              We understand the unique challenges of high-risk industries and provide tailored solutions.
            </p>
          </FadeInUp>

          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry) => (
              <StaggerItem key={industry.title}>
                <div className="bg-slate-50 rounded-xl p-8 h-full border border-slate-100 hover:border-amber-200 transition-colors">
                  <div className="w-12 h-12 rounded-lg bg-amber-100 flex items-center justify-center mb-6">
                    <industry.icon className="w-6 h-6 text-amber-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-3">
                    {industry.title}
                  </h3>
                  <p className="text-slate-600">
                    {industry.description}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 lg:py-28 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <FadeInLeft>
              <span className="text-amber-600 font-semibold text-sm uppercase tracking-wider">
                Why Choose Us
              </span>
              <h2 className="text-3xl lg:text-4xl text-slate-900 mt-4 mb-6">
                Expert High-Risk Support
              </h2>
              <p className="text-slate-600 text-lg mb-8">
                Our team has extensive experience working with high-risk merchants. We understand the
                unique challenges you face and provide the support you need to succeed.
              </p>
              <div className="flex items-center gap-4 mb-8">
                <div className="w-14 h-14 rounded-xl bg-amber-100 flex items-center justify-center">
                  <ShieldExclamationIcon className="w-7 h-7 text-amber-600" />
                </div>
                <div>
                  <div className="text-3xl font-bold text-slate-900">15+</div>
                  <div className="text-slate-600">Years of Experience</div>
                </div>
              </div>
              <Link
                href="/contact"
                className="btn-primary inline-flex items-center gap-2"
              >
                Apply Now
                <ArrowRightIcon className="w-4 h-4" />
              </Link>
            </FadeInLeft>

            <FadeInRight>
              <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100">
                <h3 className="text-xl font-semibold text-slate-900 mb-6">
                  What We Provide
                </h3>
                <ul className="space-y-4">
                  {features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <CheckCircleIcon className="w-6 h-6 text-amber-500 flex-shrink-0 mt-0.5" />
                      <span className="text-slate-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </FadeInRight>
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <FadeInUp className="text-center mb-16">
            <span className="text-amber-600 font-semibold text-sm uppercase tracking-wider">
              Get Started
            </span>
            <h2 className="text-3xl lg:text-4xl text-slate-900 mt-4 mb-6">
              Simple Application Process
            </h2>
          </FadeInUp>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: "01",
                title: "Submit Application",
                description: "Complete our online application with your business details and processing history.",
              },
              {
                step: "02",
                title: "Underwriting Review",
                description: "Our experienced team reviews your application and determines the best solution.",
              },
              {
                step: "03",
                title: "Start Processing",
                description: "Once approved, we set up your account and you can begin accepting payments.",
              },
            ].map((item, index) => (
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

      {/* CTA */}
      <section className="py-20 lg:py-28 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="high-risk-grid" width="60" height="60" patternUnits="userSpaceOnUse">
                <path d="M 60 0 L 0 0 0 60" fill="none" stroke="white" strokeWidth="0.5"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#high-risk-grid)"/>
          </svg>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <FadeInUp>
            <h2 className="text-3xl lg:text-4xl text-white mb-6">
              Ready to Get Approved?
            </h2>
            <p className="text-slate-300 text-lg mb-10 max-w-2xl mx-auto">
              Don&apos;t let traditional processors hold your business back. Apply for high-risk processing today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn-primary">
                Apply Now
              </Link>
              <Link href="/contact?type=quote" className="btn-secondary">
                Request a Consultation
              </Link>
            </div>
          </FadeInUp>
        </div>
      </section>
    </PageLayout>
  );
}
