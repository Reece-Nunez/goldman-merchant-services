"use client";

import Link from "next/link";
import PageLayout from "../components/PageLayout";
import { PageHero } from "../components/ParallaxHero";
import { FadeInUp, StaggerContainer, StaggerItem, HoverCard } from "../components/animations";
import {
  BuildingStorefrontIcon,
  UserGroupIcon,
  HomeModernIcon,
  BriefcaseIcon,
  HeartIcon,
  ShoppingBagIcon,
  CheckCircleIcon,
} from "@heroicons/react/24/outline";

const industries = [
  {
    icon: BuildingStorefrontIcon,
    title: "Retail & Brick-and-Mortar",
    description: "Modern POS systems, countertop terminals, and integrated payment solutions designed for retail environments.",
    features: ["Fast checkout processing", "Inventory integration", "Customer loyalty programs", "Multi-location support"],
  },
  {
    icon: UserGroupIcon,
    title: "Restaurants & Food Service",
    description: "Tableside payments, quick-service solutions, and tip management for restaurants of all sizes.",
    features: ["Tableside payment devices", "Tip adjustment features", "Kitchen integration", "Delivery & takeout support"],
  },
  {
    icon: HomeModernIcon,
    title: "Home & Field Services",
    description: "Mobile payment solutions for contractors, plumbers, electricians, and other service professionals.",
    features: ["Mobile card readers", "Invoice on-the-go", "Quote to payment workflow", "Recurring service billing"],
  },
  {
    icon: BriefcaseIcon,
    title: "Professional Services",
    description: "Payment solutions for consultants, attorneys, accountants, and other professional service providers.",
    features: ["Invoice payments", "Retainer billing", "Trust account compliance", "Client portal integration"],
  },
  {
    icon: HeartIcon,
    title: "Medical & Wellness",
    description: "HIPAA-compliant payment processing for healthcare providers, clinics, and wellness businesses.",
    features: ["HIPAA compliance", "Patient payment plans", "Insurance copay processing", "Appointment integration"],
  },
  {
    icon: ShoppingBagIcon,
    title: "E-Commerce & Online Brands",
    description: "Powerful online payment gateways, shopping cart integration, and subscription billing for digital businesses.",
    features: ["Shopping cart plugins", "Subscription management", "Digital product delivery", "Multi-currency support"],
  },
];

export default function IndustriesPage() {
  return (
    <PageLayout>
      <PageHero
        badge="Industries"
        title="Industry-Focused Payment Solutions"
        description="Our team understands the operational and compliance challenges unique to different industries. We build payment solutions that align with how your business actually operates."
      />

      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry) => (
              <StaggerItem key={industry.title}>
                <HoverCard className="h-full">
                  <div className="bg-slate-50 rounded-xl p-8 h-full border border-slate-100 hover:border-amber-200 transition-colors">
                    <div className="w-14 h-14 rounded-xl bg-amber-100 flex items-center justify-center mb-6">
                      <industry.icon className="w-7 h-7 text-amber-600" />
                    </div>
                    <h3 className="text-xl font-semibold text-slate-900 mb-3">{industry.title}</h3>
                    <p className="text-slate-600 mb-6">{industry.description}</p>
                    <ul className="space-y-2">
                      {industry.features.map((feature) => (
                        <li key={feature} className="flex items-center gap-2 text-sm text-slate-500">
                          <CheckCircleIcon className="w-4 h-4 text-amber-500 flex-shrink-0" />
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

      <section className="py-20 lg:py-28 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="industries-grid" width="60" height="60" patternUnits="userSpaceOnUse">
                <path d="M 60 0 L 0 0 0 60" fill="none" stroke="white" strokeWidth="0.5"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#industries-grid)"/>
          </svg>
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <FadeInUp>
            <h2 className="text-3xl lg:text-4xl text-white mb-6">Don&apos;t See Your Industry?</h2>
            <p className="text-slate-300 text-lg mb-10 max-w-2xl mx-auto">
              We work with businesses across many industries. Contact us to discuss your specific needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn-primary">Contact Us</Link>
              <Link href="/solutions" className="btn-secondary">View Solutions</Link>
            </div>
          </FadeInUp>
        </div>
      </section>
    </PageLayout>
  );
}
