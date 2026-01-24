"use client";

import Link from "next/link";
import PageLayout from "../components/PageLayout";
import { PageHero } from "../components/ParallaxHero";
import { FadeInUp, StaggerContainer, StaggerItem, HoverCard } from "../components/animations";
import { DocumentTextIcon, ChartBarIcon, BookOpenIcon, NewspaperIcon, ArrowRightIcon } from "@heroicons/react/24/outline";

const resources = [
  { icon: DocumentTextIcon, title: "Payment Processing Guides", description: "Comprehensive guides on understanding payment processing, fees, and optimization strategies.", category: "Guides" },
  { icon: ChartBarIcon, title: "Cost Reduction Strategies", description: "Learn how to reduce your payment processing costs while maintaining service quality.", category: "Strategy" },
  { icon: BookOpenIcon, title: "Compliance Resources", description: "Stay up-to-date with PCI compliance requirements and industry regulations.", category: "Compliance" },
  { icon: NewspaperIcon, title: "Industry Insights", description: "Analysis and trends in the payments industry that affect your business.", category: "Insights" },
];

export default function ResourcesPage() {
  return (
    <PageLayout>
      <PageHero badge="Resources" title="Insights & Resources" description="Explore insights on payments, compliance, cost-reduction strategies, and operational growth for modern businesses." />
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <StaggerContainer className="grid md:grid-cols-2 gap-8">
            {resources.map((resource) => (
              <StaggerItem key={resource.title}>
                <HoverCard className="h-full">
                  <div className="bg-slate-50 rounded-xl p-8 h-full border border-slate-100 hover:border-amber-200 transition-colors">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-lg bg-amber-100 flex items-center justify-center flex-shrink-0">
                        <resource.icon className="w-6 h-6 text-amber-600" />
                      </div>
                      <div>
                        <span className="text-xs font-semibold text-amber-600 uppercase tracking-wider">{resource.category}</span>
                        <h3 className="text-xl font-semibold text-slate-900 mt-1 mb-2">{resource.title}</h3>
                        <p className="text-slate-600">{resource.description}</p>
                      </div>
                    </div>
                  </div>
                </HoverCard>
              </StaggerItem>
            ))}
          </StaggerContainer>
          <FadeInUp delay={0.4} className="text-center mt-16">
            <p className="text-slate-600 mb-6">Looking for specific information? Our team is here to help.</p>
            <Link href="/contact" className="btn-primary inline-flex items-center gap-2">Contact Us<ArrowRightIcon className="w-4 h-4" /></Link>
          </FadeInUp>
        </div>
      </section>
    </PageLayout>
  );
}
