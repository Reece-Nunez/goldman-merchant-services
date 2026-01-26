export function OrganizationSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Goldman Merchant Services",
    description: "Goldman Merchant Services delivers secure, compliant, and scalable payment solutions designed to help small and mid-sized businesses grow.",
    url: "https://goldmanmerchantservices.com",
    logo: "https://goldmanmerchantservices.com/logo1.png",
    parentOrganization: {
      "@type": "Organization",
      name: "The Goldman Fund",
      url: "https://www.thegoldmanfund.com",
    },
    sameAs: [],
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "sales",
      availableLanguage: "English",
    },
    areaServed: {
      "@type": "Country",
      name: "United States",
    },
    serviceType: [
      "Payment Processing",
      "Credit Card Processing",
      "Merchant Services",
      "E-Commerce Payments",
      "POS Systems",
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function LocalBusinessSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FinancialService",
    name: "Goldman Merchant Services",
    description: "Payment processing and merchant services for small and mid-sized businesses.",
    url: "https://goldmanmerchantservices.com",
    logo: "https://goldmanmerchantservices.com/logo1.png",
    priceRange: "$$",
    areaServed: "United States",
    serviceType: "Merchant Services",
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function WebsiteSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Goldman Merchant Services",
    url: "https://goldmanmerchantservices.com",
    potentialAction: {
      "@type": "SearchAction",
      target: "https://goldmanmerchantservices.com/search?q={search_term_string}",
      "query-input": "required name=search_term_string",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function ServiceSchema({
  name,
  description,
  url,
}: {
  name: string;
  description: string;
  url: string;
}) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    url,
    provider: {
      "@type": "Organization",
      name: "Goldman Merchant Services",
      url: "https://goldmanmerchantservices.com",
    },
    areaServed: {
      "@type": "Country",
      name: "United States",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function BreadcrumbSchema({
  items,
}: {
  items: { name: string; url: string }[];
}) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function FAQSchema({
  questions,
}: {
  questions: { question: string; answer: string }[];
}) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: questions.map((q) => ({
      "@type": "Question",
      name: q.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: q.answer,
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
