"use client";

import Link from "next/link";
import PageLayout from "./components/PageLayout";
import ParallaxHero from "./components/ParallaxHero";
import { FadeInUp, FadeInLeft, FadeInRight, StaggerContainer, StaggerItem, HoverCard } from "./components/animations";
import {
  CreditCardIcon,
  GlobeAltIcon,
  CurrencyDollarIcon,
  ShieldExclamationIcon,
  DevicePhoneMobileIcon,
  CheckCircleIcon,
  ArrowRightIcon,
  BuildingStorefrontIcon,
  HomeModernIcon,
  BriefcaseIcon,
  HeartIcon,
  ShoppingBagIcon,
  UserGroupIcon,
} from "@heroicons/react/24/outline";

const services = [
  {
    icon: CreditCardIcon,
    title: "Credit & Debit Card Processing",
    description: "Accept all major credit and debit cards with fast, secure, and reliable processing.",
    href: "/solutions/credit-debit-processing",
  },
  {
    icon: GlobeAltIcon,
    title: "Online & E-Commerce Payments",
    description: "Power your digital business with secure gateways, recurring billing, and invoicing tools.",
    href: "/solutions/online-payments",
  },
  {
    icon: CurrencyDollarIcon,
    title: "Dual Pricing & Cash Discount",
    description: "Reduce processing costs while staying transparent and compliant with customers.",
    href: "/solutions/dual-pricing",
  },
  {
    icon: ShieldExclamationIcon,
    title: "High-Risk Merchant Solutions",
    description: "Specialized underwriting and support for merchants in challenging industries.",
    href: "/solutions/high-risk",
  },
  {
    icon: DevicePhoneMobileIcon,
    title: "Mobile & Virtual Payments",
    description: "Accept payments anywhere with mobile tools and browser-based virtual terminals.",
    href: "/solutions",
  },
];

const whyUs = [
  "Transparent, compliant pricing models",
  "Advanced payment technology",
  "Dedicated merchant support",
  "Solutions built with growth in mind",
];

const industries = [
  { icon: BuildingStorefrontIcon, name: "Retail & Brick-and-Mortar" },
  { icon: UserGroupIcon, name: "Restaurants & Food Service" },
  { icon: HomeModernIcon, name: "Home & Field Services" },
  { icon: BriefcaseIcon, name: "Professional Services" },
  { icon: HeartIcon, name: "Medical & Wellness" },
  { icon: ShoppingBagIcon, name: "E-Commerce & Online Brands" },
];

export default function Home() {
  return (
    <PageLayout>
      {/* Hero Section */}
      <ParallaxHero
        badge="A Portfolio Company of The Goldman Fund"
        title="Payments Built to Strengthen Your Business"
        subtitle="Not Just Process Transactions"
        description="Goldman Merchant Services delivers secure, compliant, and scalable payment solutions designed to help small and mid-sized businesses grow — backed by a private-equity platform focused on long-term value creation."
        primaryCTA={{ label: "Get Started", href: "/contact" }}
        secondaryCTA={{ label: "Request a Quote", href: "/contact?type=quote" }}
        backgroundImage="/pos-interaction.png"
      />

      {/* Intro Section */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <FadeInLeft>
              <span className="text-amber-600 font-semibold text-sm uppercase tracking-wider">
                Our Approach
              </span>
              <h2 className="text-3xl lg:text-4xl text-slate-900 mt-4 mb-6">
                Payments as a Strategic Advantage
              </h2>
              <p className="text-slate-600 text-lg mb-6">
                At Goldman Merchant Services, we believe payments should be a strategic advantage,
                not a cost center. Our technology-driven merchant services help businesses accept
                payments seamlessly while improving margins, cash flow, and operational efficiency.
              </p>
              <p className="text-slate-600 mb-8">
                We provide end-to-end merchant services for businesses operating in-store, online,
                and on-the-go — supported by a team that understands growth, capital, and operational scale.
              </p>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 text-amber-600 font-semibold hover:text-amber-700 transition-colors"
              >
                Learn About Us
                <ArrowRightIcon className="w-4 h-4" />
              </Link>
            </FadeInLeft>

            <FadeInRight>
              <div className="bg-slate-50 rounded-2xl p-8 lg:p-10">
                <h3 className="text-xl font-semibold text-slate-900 mb-6">
                  Why Goldman Merchant Services?
                </h3>
                <ul className="space-y-4">
                  {whyUs.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircleIcon className="w-6 h-6 text-amber-500 flex-shrink-0 mt-0.5" />
                      <span className="text-slate-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </FadeInRight>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 lg:py-28 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <FadeInUp className="text-center mb-16">
            <span className="text-amber-600 font-semibold text-sm uppercase tracking-wider">
              What We Do
            </span>
            <h2 className="text-3xl lg:text-4xl text-slate-900 mt-4 mb-6">
              Comprehensive Payment Solutions
            </h2>
            <p className="text-slate-600 text-lg max-w-2xl mx-auto">
              End-to-end merchant services for businesses operating in-store, online,
              and on-the-go — supported by a team that understands growth.
            </p>
          </FadeInUp>

          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <StaggerItem key={service.title}>
                <HoverCard className="h-full">
                  <Link href={service.href} className="block h-full">
                    <div className="bg-white rounded-xl p-8 shadow-sm border border-slate-100 h-full group">
                      <div className="w-14 h-14 rounded-xl bg-amber-50 flex items-center justify-center mb-6 group-hover:bg-amber-100 transition-colors">
                        <service.icon className="w-7 h-7 text-amber-600" />
                      </div>
                      <h3 className="text-xl font-semibold text-slate-900 mb-3 group-hover:text-amber-600 transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-slate-600">
                        {service.description}
                      </p>
                    </div>
                  </Link>
                </HoverCard>
              </StaggerItem>
            ))}
          </StaggerContainer>

          <FadeInUp delay={0.4} className="text-center mt-12">
            <Link href="/solutions" className="btn-primary inline-flex items-center gap-2">
              View All Solutions
              <ArrowRightIcon className="w-4 h-4" />
            </Link>
          </FadeInUp>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <FadeInLeft>
              <span className="text-amber-600 font-semibold text-sm uppercase tracking-wider">
                Industries We Serve
              </span>
              <h2 className="text-3xl lg:text-4xl text-slate-900 mt-4 mb-6">
                Industry-Focused Payment Solutions
              </h2>
              <p className="text-slate-600 text-lg mb-8">
                Our team understands the operational and compliance challenges unique to different
                industries. We build payment solutions that align with how your business actually operates.
              </p>
              <Link
                href="/industries"
                className="btn-primary inline-flex items-center gap-2"
              >
                Explore Industries
                <ArrowRightIcon className="w-4 h-4" />
              </Link>
            </FadeInLeft>

            <FadeInRight>
              <div className="grid grid-cols-2 gap-4">
                {industries.map((industry) => (
                  <div
                    key={industry.name}
                    className="bg-slate-50 rounded-xl p-6 flex items-center gap-4 hover:bg-amber-50 transition-colors group"
                  >
                    <div className="w-12 h-12 rounded-lg bg-white flex items-center justify-center shadow-sm group-hover:shadow-md transition-shadow">
                      <industry.icon className="w-6 h-6 text-amber-600" />
                    </div>
                    <span className="text-slate-700 font-medium text-sm">
                      {industry.name}
                    </span>
                  </div>
                ))}
              </div>
            </FadeInRight>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-28 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="cta-grid" width="60" height="60" patternUnits="userSpaceOnUse">
                <path d="M 60 0 L 0 0 0 60" fill="none" stroke="white" strokeWidth="0.5"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#cta-grid)"/>
          </svg>
        </div>

        {/* Accent Blurs */}
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-amber-500/10 blur-3xl" />
        <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-amber-600/10 blur-3xl" />

        <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <FadeInUp>
            <h2 className="text-3xl lg:text-4xl text-white mb-6">
              Ready to Optimize Your Payment Processing?
            </h2>
            <p className="text-slate-300 text-lg mb-10 max-w-2xl mx-auto">
              Connect with our team to discuss payment solutions, pricing, or partnership opportunities.
              Let&apos;s build a payment infrastructure that supports your growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn-primary">
                Get Started Today
              </Link>
              <Link href="/contact?type=quote" className="btn-secondary">
                Request a Quote
              </Link>
            </div>
          </FadeInUp>
        </div>
      </section>

      {/* Partner Section */}
      <section className="py-20 lg:py-28 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="bg-white rounded-2xl p-8 lg:p-12 shadow-sm border border-slate-100">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <FadeInLeft>
                <span className="text-amber-600 font-semibold text-sm uppercase tracking-wider">
                  Partner Program
                </span>
                <h2 className="text-3xl lg:text-4xl text-slate-900 mt-4 mb-6">
                  Partner With Goldman Merchant Services
                </h2>
                <p className="text-slate-600 mb-8">
                  Our partner program is built for ISOs, brokers, and strategic partners looking
                  for a reliable processing platform backed by institutional experience.
                </p>
                <Link
                  href="/partners"
                  className="btn-primary inline-flex items-center gap-2"
                >
                  Become a Partner
                  <ArrowRightIcon className="w-4 h-4" />
                </Link>
              </FadeInLeft>

              <FadeInRight>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    "Competitive residuals",
                    "Dedicated support teams",
                    "Marketing & sales enablement",
                    "Scalable infrastructure",
                  ].map((benefit) => (
                    <div
                      key={benefit}
                      className="flex items-center gap-3 bg-slate-50 rounded-lg p-4"
                    >
                      <CheckCircleIcon className="w-5 h-5 text-amber-500 flex-shrink-0" />
                      <span className="text-slate-700 text-sm font-medium">{benefit}</span>
                    </div>
                  ))}
                </div>
              </FadeInRight>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
