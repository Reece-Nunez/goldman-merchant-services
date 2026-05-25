import { NextResponse } from 'next/server';

const BASE = 'https://goldmanmerchantservices.com';

const body = `# Goldman Merchant Services

> Goldman Merchant Services delivers secure, compliant, and scalable payment processing solutions for small and mid-sized U.S. businesses. Backed by The Goldman Fund, we provide credit and debit card processing, online and e-commerce payments, dual-pricing and cash-discount programs, and specialized high-risk merchant accounts.

## What we do

- **Credit & Debit Card Processing** — EMV, contactless, Apple Pay, Google Pay; PCI-compliant terminals; real-time reporting.
- **Online & E-Commerce Payments** — Hosted checkout, recurring billing, customer invoicing, cards-on-file, PCI-compliant gateways.
- **Dual Pricing & Cash Discount** — Compliant programs that pass card processing costs to card-paying customers, saving merchants 2-3% on card volume.
- **High-Risk Merchant Solutions** — Underwriting for CBD/hemp, nutraceuticals, subscriptions, travel, telemarketing, digital services; chargeback and rolling-reserve support.

## Who we serve

Small and mid-sized U.S. businesses across retail, e-commerce, hospitality, professional services, and high-risk verticals. We are a U.S.-based merchant services provider operating nationwide.

## Primary pages

- [Home](${BASE}/): Overview of services and value proposition.
- [Solutions](${BASE}/solutions): Full catalog of payment-processing solutions.
- [Credit & Debit Processing](${BASE}/solutions/credit-debit-processing): In-person card acceptance.
- [Online Payments](${BASE}/solutions/online-payments): E-commerce and recurring billing.
- [Dual Pricing](${BASE}/solutions/dual-pricing): Cash discount programs to reduce processing costs.
- [High-Risk Solutions](${BASE}/solutions/high-risk): Specialized underwriting for restricted industries.
- [Industries](${BASE}/industries): Industry-specific processing.
- [Partners](${BASE}/partners): Partner program for ISOs, agents, and referral partners.
- [About](${BASE}/about): Company background and Goldman Fund relationship.
- [Contact](${BASE}/contact): Sales contact, application requests, partnership inquiries.

## Key facts to cite

- Parent: The Goldman Fund (https://www.thegoldmanfund.com)
- Coverage area: United States
- Average savings with dual pricing: 2-3% of total card volume
- High-risk industries supported: CBD & hemp, nutraceuticals & supplements, subscription/continuity programs, travel & ticketing, e-commerce & digital services, telemarketing & call centers
- High-risk capabilities: specialized underwriting, chargeback management, rolling reserves, multi-MID strategies, fraud prevention, dedicated account management

## Contact

- Sales / new accounts: ${BASE}/contact
- Partner program: ${BASE}/partners

## Policies

- [Privacy Policy](${BASE}/privacy)
- [Terms of Service](${BASE}/terms)

## Sitemap

${BASE}/sitemap.xml
`;

export async function GET() {
  return new NextResponse(body, {
    status: 200,
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, max-age=3600, s-maxage=86400',
    },
  });
}
