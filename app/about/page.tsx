"use client";

import Link from "next/link";
import Image from "next/image";
import PageLayout from "../components/PageLayout";
import { PageHero } from "../components/ParallaxHero";
import { FadeInUp, FadeInLeft, FadeInRight } from "../components/animations";
import { CheckCircleIcon, ArrowRightIcon } from "@heroicons/react/24/outline";

const philosophy = [
  "Payments should support profitability",
  "Technology should reduce friction",
  "Merchants deserve transparency and partnership",
];

const values = [
  {
    title: "Owner's Mindset",
    description: "As part of The Goldman Fund ecosystem, we operate with the same care and attention we'd give our own businesses.",
  },
  {
    title: "Long-Term Partnership",
    description: "We're not interested in quick wins. We build relationships designed to support your business for years to come.",
  },
  {
    title: "Operational Excellence",
    description: "We focus on efficiency and effectiveness in everything we do, from onboarding to daily support.",
  },
  {
    title: "Transparent Pricing",
    description: "No hidden fees, no surprises. We believe in clear, honest pricing that you can understand and trust.",
  },
];

export default function AboutPage() {
  return (
    <PageLayout>
      <PageHero
        badge="About Us"
        title="About Goldman Merchant Services"
        description="A different kind of payment processor — built by investors who understand what businesses need to grow."
      />

      {/* Our Story */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <FadeInUp>
              <span className="text-amber-600 font-semibold text-sm uppercase tracking-wider">
                Our Story
              </span>
              <h2 className="text-3xl lg:text-4xl text-slate-900 mt-4 mb-8">
                Why We Exist
              </h2>
              <div className="prose prose-lg prose-slate">
                <p className="text-slate-600 text-lg mb-6">
                  Goldman Merchant Services was founded from a fundamentally different starting point
                  than most payment processors.
                </p>
                <p className="text-slate-600 mb-6">
                  We began as a private equity platform — The Goldman Fund — focused on acquiring,
                  supporting, and scaling small and mid-sized businesses. Through years of investing
                  across operating companies, we identified a consistent challenge: payment processing
                  was often misaligned with the long-term interests of business owners.
                </p>
                <p className="text-slate-600 mb-6">
                  High fees, opaque pricing, limited support, and one-size-fits-all solutions were
                  holding companies back.
                </p>
                <p className="text-slate-600 mb-6 font-semibold">
                  Goldman Merchant Services was created to solve that problem.
                </p>
                <p className="text-slate-600">
                  Rather than operating as a transactional processor, we built a merchant services
                  platform grounded in value creation, operational efficiency, and long-term partnership.
                  Our solutions are designed not just to process payments, but to help businesses
                  improve margins, streamline operations, and position themselves for sustainable growth.
                </p>
              </div>
            </FadeInUp>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-20 lg:py-28 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <FadeInLeft>
              <span className="text-amber-600 font-semibold text-sm uppercase tracking-wider">
                Our Philosophy
              </span>
              <h2 className="text-3xl lg:text-4xl text-slate-900 mt-4 mb-6">
                What We Believe
              </h2>
              <ul className="space-y-4 mb-8">
                {philosophy.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircleIcon className="w-6 h-6 text-amber-500 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-700 text-lg">{item}</span>
                  </li>
                ))}
              </ul>
              <p className="text-slate-600">
                As part of The Goldman Fund ecosystem, Goldman Merchant Services operates with an
                owner&apos;s mindset — delivering tools, insight, and support that help businesses scale.
              </p>
            </FadeInLeft>

            <FadeInRight>
              <div className="bg-white rounded-2xl p-8 lg:p-10 shadow-sm border border-slate-100">
                <div className="text-center mb-8">
                  <Image
                    src="/goldman-fund-logo-dark.png"
                    alt="The Goldman Fund"
                    width={180}
                    height={180}
                    className="mx-auto mb-4"
                  />
                  <h3 className="text-xl font-semibold text-slate-900">The Goldman Fund</h3>
                  <p className="text-slate-500">Parent Company</p>
                </div>
                <p className="text-slate-600 text-center">
                  Goldman Merchant Services is a portfolio company of The Goldman Fund, a private
                  equity platform focused on acquiring and supporting small and mid-sized businesses.
                </p>
              </div>
            </FadeInRight>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <FadeInUp className="text-center mb-16">
            <span className="text-amber-600 font-semibold text-sm uppercase tracking-wider">
              Our Values
            </span>
            <h2 className="text-3xl lg:text-4xl text-slate-900 mt-4">
              How We Work
            </h2>
          </FadeInUp>

          <div className="grid md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <FadeInUp key={value.title} delay={index * 0.1}>
                <div className="bg-slate-50 rounded-xl p-8 border border-slate-100">
                  <h3 className="text-xl font-semibold text-slate-900 mb-3">{value.title}</h3>
                  <p className="text-slate-600">{value.description}</p>
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
              <pattern id="about-grid" width="60" height="60" patternUnits="userSpaceOnUse">
                <path d="M 60 0 L 0 0 0 60" fill="none" stroke="white" strokeWidth="0.5"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#about-grid)"/>
          </svg>
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <FadeInUp>
            <h2 className="text-3xl lg:text-4xl text-white mb-6">Ready to Work Together?</h2>
            <p className="text-slate-300 text-lg mb-10 max-w-2xl mx-auto">
              Let&apos;s discuss how Goldman Merchant Services can help your business grow.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn-primary">Contact Us</Link>
              <Link href="/solutions" className="btn-secondary">Explore Solutions</Link>
            </div>
          </FadeInUp>
        </div>
      </section>
    </PageLayout>
  );
}
