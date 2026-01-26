"use client";

import Link from "next/link";
import Image from "next/image";
import { FadeInUp } from "./animations";

const footerLinks = {
  solutions: [
    { href: "/solutions", label: "All Solutions" },
    { href: "/solutions/credit-debit-processing", label: "Credit & Debit Processing" },
    { href: "/solutions/online-payments", label: "Online Payments" },
    { href: "/solutions/dual-pricing", label: "Dual Pricing" },
    { href: "/solutions/high-risk", label: "High-Risk Merchants" },
  ],
  company: [
    { href: "/about", label: "About Us" },
    { href: "/industries", label: "Industries" },
    { href: "/partners", label: "Partners" },
    { href: "/resources", label: "Resources" },
  ],
  contact: [
    { href: "/contact", label: "Contact Us" },
    { href: "/contact?type=quote", label: "Request a Quote" },
    { href: "/contact?type=partner", label: "Partner Inquiries" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand Column */}
          <FadeInUp className="lg:col-span-2">
            <Link href="/" className="inline-block mb-6">
              <Image
                src="/logo2.png"
                alt="Goldman Merchant Services"
                width={300}
                height={75}
                className="h-16 w-auto"
              />
            </Link>
            <p className="text-slate-400 max-w-sm">
              A Portfolio Company of The Goldman Fund. Delivering secure, compliant,
              and scalable payment solutions for growing businesses.
            </p>
          </FadeInUp>

          {/* Solutions Links */}
          <FadeInUp delay={0.1}>
            <h3 className="text-lg font-semibold mb-6">Solutions</h3>
            <ul className="space-y-3">
              {footerLinks.solutions.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-slate-400 hover:text-amber-400 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </FadeInUp>

          {/* Company Links */}
          <FadeInUp delay={0.2}>
            <h3 className="text-lg font-semibold mb-6">Company</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-slate-400 hover:text-amber-400 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </FadeInUp>

          {/* Contact Links */}
          <FadeInUp delay={0.3}>
            <h3 className="text-lg font-semibold mb-6">Contact</h3>
            <ul className="space-y-3">
              {footerLinks.contact.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-slate-400 hover:text-amber-400 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </FadeInUp>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-slate-500 text-sm">
              &copy; {new Date().getFullYear()} Goldman Merchant Services. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <Link href="/privacy" className="text-slate-500 hover:text-slate-300 transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-slate-500 hover:text-slate-300 transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
