"use client";

import Link from "next/link";
import PageLayout from "../components/PageLayout";
import ParallaxHero from "../components/ParallaxHero";
import { FadeInUp, FadeInLeft, FadeInRight, StaggerContainer, StaggerItem } from "../components/animations";
import {
  CurrencyDollarIcon,
  UserGroupIcon,
  MegaphoneIcon,
  ServerStackIcon,
  CheckCircleIcon,
  ArrowRightIcon,
} from "@heroicons/react/24/outline";

const benefits = [
  {
    icon: CurrencyDollarIcon,
    title: "Competitive Residuals",
    description: "Industry-leading commission structures that reward your success and growth.",
  },
  {
    icon: UserGroupIcon,
    title: "Dedicated Support Teams",
    description: "Access to experienced support staff who understand the partner business model.",
  },
  {
    icon: MegaphoneIcon,
    title: "Marketing & Sales Enablement",
    description: "Collateral, training, and tools to help you close deals and grow your portfolio.",
  },
  {
    icon: ServerStackIcon,
    title: "Scalable Infrastructure",
    description: "Technology and systems designed to support partners at any scale.",
  },
];

const partnerTypes = [
  {
    title: "ISO Partners",
    description: "For established independent sales organizations looking for a reliable processing partner.",
    features: ["Full portfolio management", "Custom pricing programs", "White-label options"],
  },
  {
    title: "Agent Partners",
    description: "For individual agents and small teams building their merchant services business.",
    features: ["Competitive splits", "Training & support", "Growth resources"],
  },
  {
    title: "Strategic Partners",
    description: "For software companies, associations, and organizations seeking payment integration.",
    features: ["API integration support", "Co-marketing opportunities", "Revenue sharing"],
  },
];

export default function PartnersPage() {
  return (
    <PageLayout>
      <ParallaxHero
        badge="Partner Program"
        title="Partner With Goldman Merchant Services"
        description="Our partner program is built for ISOs, brokers, and strategic partners looking for a reliable processing platform backed by institutional experience."
        backgroundImage="/partnership.jpg"
        minHeight="70vh"
        showScrollIndicator={false}
      />

      {/* Benefits */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <FadeInUp className="text-center mb-16">
            <span className="text-amber-600 font-semibold text-sm uppercase tracking-wider">
              Partner Benefits
            </span>
            <h2 className="text-3xl lg:text-4xl text-slate-900 mt-4 mb-6">
              Why Partner With Us
            </h2>
          </FadeInUp>

          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit) => (
              <StaggerItem key={benefit.title}>
                <div className="text-center">
                  <div className="w-16 h-16 rounded-2xl bg-amber-100 flex items-center justify-center mx-auto mb-6">
                    <benefit.icon className="w-8 h-8 text-amber-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">{benefit.title}</h3>
                  <p className="text-slate-600 text-sm">{benefit.description}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Partner Types */}
      <section className="py-20 lg:py-28 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <FadeInUp className="text-center mb-16">
            <span className="text-amber-600 font-semibold text-sm uppercase tracking-wider">
              Partnership Options
            </span>
            <h2 className="text-3xl lg:text-4xl text-slate-900 mt-4 mb-6">
              Find Your Fit
            </h2>
          </FadeInUp>

          <div className="grid md:grid-cols-3 gap-8">
            {partnerTypes.map((type, index) => (
              <FadeInUp key={type.title} delay={index * 0.1}>
                <div className="bg-white rounded-xl p-8 h-full border border-slate-100 hover:border-amber-200 transition-colors">
                  <h3 className="text-xl font-semibold text-slate-900 mb-3">{type.title}</h3>
                  <p className="text-slate-600 mb-6">{type.description}</p>
                  <ul className="space-y-2">
                    {type.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2 text-sm text-slate-600">
                        <CheckCircleIcon className="w-4 h-4 text-amber-500 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
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
              <pattern id="partners-grid" width="60" height="60" patternUnits="userSpaceOnUse">
                <path d="M 60 0 L 0 0 0 60" fill="none" stroke="white" strokeWidth="0.5"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#partners-grid)"/>
          </svg>
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <FadeInUp>
            <h2 className="text-3xl lg:text-4xl text-white mb-6">Ready to Partner?</h2>
            <p className="text-slate-300 text-lg mb-10 max-w-2xl mx-auto">
              Join our partner network and start growing your business with Goldman Merchant Services.
            </p>
            <Link href="/contact?type=partner" className="btn-primary inline-flex items-center gap-2">
              Become a Partner
              <ArrowRightIcon className="w-4 h-4" />
            </Link>
          </FadeInUp>
        </div>
      </section>
    </PageLayout>
  );
}
