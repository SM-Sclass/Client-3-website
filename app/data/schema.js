import {
  absoluteUrl,
  contactConfig,
  openingHours,
  serviceCatalog,
  serviceFacts,
  siteConfig
} from "./business";
import { getAreaNames, serviceAreaSummary } from "./locations";

export const ORG_ID = `${siteConfig.url}/#organization`;
export const WEBSITE_ID = `${siteConfig.url}/#website`;

export function organizationSchema() {
  return {
    "@type": "Organization",
    "@id": ORG_ID,
    name: siteConfig.name,
    alternateName: siteConfig.shortName,
    url: siteConfig.url,
    logo: {
      "@type": "ImageObject",
      "@id": `${siteConfig.url}/#logo`,
      url: absoluteUrl("/assets/logo.png"),
      contentUrl: absoluteUrl("/assets/logo.png"),
      width: 1068,
      height: 476,
      caption: `${siteConfig.name} logo`
    },
    image: {
      "@id": `${siteConfig.url}/#logo`,
      url: absoluteUrl("/assets/logo.png")
    },
    description: siteConfig.description,
    slogan: siteConfig.tagline,
    foundingDate: String(siteConfig.foundedYear),
    email: contactConfig.email,
    telephone: contactConfig.phone,
    priceRange: siteConfig.priceRange,
    currenciesAccepted: siteConfig.currencies,
    knowsLanguage: serviceFacts.languagesSpoken,
    areaServed: getAreaNames().map((name) => ({
      "@type": "Place",
      name
    })),
    serviceArea: {
      "@type": "GeoCircle",
      geoMidpoint: {
        "@type": "GeoCoordinates",
        latitude: 19.076,
        longitude: 72.8777
      },
      geoRadius: "120000"
    },
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: contactConfig.phone,
        email: contactConfig.email,
        contactType: "customer service",
        areaServed: "IN",
        availableLanguage: serviceFacts.languagesSpoken
      },
      {
        "@type": "ContactPoint",
        telephone: contactConfig.phone,
        contactType: "sales",
        areaServed: "IN",
        availableLanguage: serviceFacts.languagesSpoken
      }
    ],
    openingHoursSpecification: openingHours.days.map((day) => ({
      "@type": "OpeningHoursSpecification",
      dayOfWeek: `https://schema.org/${day}`,
      opens: openingHours.openingTime,
      closes: openingHours.closingTime
    })),
    sameAs: [contactConfig.instagram, contactConfig.facebook],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      "@id": `${siteConfig.url}/#offer-catalog`,
      name: "Car PDI and pre-purchase inspection services",
      itemListElement: serviceCatalog.map((service) => ({
        "@type": "Offer",
        "@id": `${siteConfig.url}/services/${service.slug}#offer`,
        name: service.name,
        description: service.summary,
        price: String(service.priceFrom),
        priceCurrency: siteConfig.currencies,
        availability: "https://schema.org/InStock",
        url: absoluteUrl(`/services/${service.slug}`),
        itemOffered: {
          "@type": "Service",
          name: service.name,
          serviceType: service.type,
          provider: { "@id": ORG_ID }
        }
      }))
    }
  };
}

export function websiteSchema() {
  return {
    "@type": "WebSite",
    "@id": WEBSITE_ID,
    url: siteConfig.url,
    name: siteConfig.name,
    description: siteConfig.description,
    inLanguage: siteConfig.language,
    publisher: { "@id": ORG_ID },
    about: { "@id": ORG_ID }
  };
}

export function llmsTxtSchema() {
  return {
    "@type": "WebPage",
    "@id": `${siteConfig.url}/llms.txt#webpage`,
    url: absoluteUrl("/llms.txt"),
    name: "LLM-readable service and coverage summary for CheckMate PDI",
    description:
      "A plain-text summary of CheckMate PDI services, pricing, checklist, coverage areas and contact details, written for language models.",
    inLanguage: siteConfig.language,
    isPartOf: { "@id": WEBSITE_ID },
    about: { "@id": ORG_ID }
  };
}

export function serviceSchema({
  name,
  serviceType,
  description,
  path,
  areaServed,
  priceFrom = serviceFacts.priceFrom
}) {
  return {
    "@type": "Service",
    "@id": `${absoluteUrl(path)}#service`,
    name,
    serviceType,
    description,
    url: absoluteUrl(path),
    provider: { "@id": ORG_ID },
    areaServed: (areaServed || getAreaNames()).map((place) => ({
      "@type": "Place",
      name: typeof place === "string" ? place : place.name
    })),
    availableChannel: {
      "@type": "ServiceChannel",
      serviceUrl: contactConfig.whatsapp,
      servicePhone: contactConfig.phone,
      availableLanguage: serviceFacts.languagesSpoken
    },
    offers: {
      "@type": "Offer",
      "@id": `${absoluteUrl(path)}#offer`,
      price: String(priceFrom),
      priceCurrency: siteConfig.currencies,
      availability: "https://schema.org/InStock",
      url: absoluteUrl(path),
      validFrom: `${siteConfig.foundedYear}-01-01`
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: `${name} inclusions`,
      itemListElement: [
        {
          "@type": "Offer",
          name: `${serviceFacts.checklistPointsLabel} inspection checklist`,
          description: `${serviceFacts.checklistPointsLabel} checklist across ${serviceFacts.checklistSections} sections`
        },
        {
          "@type": "Offer",
          name: "Photo evidence report",
          description: "Photo evidence for every finding, delivered within 15 minutes"
        },
        {
          "@type": "Offer",
          name: "On-site walkthrough",
          description: "Inspector explains every finding before leaving"
        }
      ]
    }
  };
}

export function areaServiceSchema(area) {
  return {
    "@type": "Service",
    "@id": `${absoluteUrl(`/${area.slug}`)}#service`,
    name: `Car PDI and Pre-Purchase Inspection in ${area.name}`,
    alternateName: [
      `PDI in ${area.name}`,
      `Car inspection ${area.name}`,
      `Pre-purchase inspection ${area.name}`
    ],
    serviceType: "Car Pre-Delivery Inspection and Pre-Purchase Inspection",
    description: `On-site car PDI and used car pre-purchase inspection in ${area.name}. ${serviceFacts.checklistPointsLabel} checklist across ${serviceFacts.checklistSections} sections, photo evidence for every finding, report within 15 minutes. From ${serviceFacts.priceFromLabel}. Also known as ${area.aka.join(", ")}.`,
    url: absoluteUrl(`/${area.slug}`),
    provider: { "@id": ORG_ID },
    areaServed: [
      { "@type": "City", name: area.name, alternateName: area.aka },
      { "@type": "AdministrativeArea", name: "Maharashtra" },
      { "@type": "Country", name: "India" }
    ],
    availableChannel: {
      "@type": "ServiceChannel",
      serviceUrl: contactConfig.whatsapp,
      servicePhone: contactConfig.phone,
      availableLanguage: serviceFacts.languagesSpoken
    },
    offers: {
      "@type": "Offer",
      "@id": `${absoluteUrl(`/${area.slug}`)}#offer`,
      price: String(serviceFacts.priceFrom),
      priceCurrency: siteConfig.currencies,
      availability: "https://schema.org/InStock",
      url: absoluteUrl(`/${area.slug}`)
    },
    isRelatedTo: area.parentHref
      ? { "@id": `${absoluteUrl(area.parentHref)}#service` }
      : undefined
  };
}

export function faqSchema(faqs, path) {
  return {
    "@type": "FAQPage",
    "@id": `${absoluteUrl(path)}#faq`,
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: { "@type": "Answer", text: faq.a }
    }))
  };
}

export function breadcrumbSchema(trail) {
  return {
    "@type": "BreadcrumbList",
    "@id": `${absoluteUrl(trail[trail.length - 1].href)}#breadcrumb`,
    itemListElement: trail.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.label,
      item: absoluteUrl(item.href)
    }))
  };
}

export function webPageSchema({ path, name, description, breadcrumb, mainEntity }) {
  const schema = {
    "@type": "WebPage",
    "@id": `${absoluteUrl(path)}#webpage`,
    url: absoluteUrl(path),
    name,
    description,
    inLanguage: siteConfig.language,
    isPartOf: { "@id": WEBSITE_ID },
    about: { "@id": ORG_ID }
  };
  if (breadcrumb) schema.breadcrumb = breadcrumb;
  if (mainEntity) schema.mainEntity = mainEntity;
  return schema;
}

export function howToSchema({ name, description, path, steps }) {
  return {
    "@type": "HowTo",
    "@id": `${absoluteUrl(path)}#howto`,
    name,
    description,
    totalTime: "PT15M",
    step: steps.map((step, index) => ({
      "@type": "HowToStep",
      position: index + 1,
      name: step.title,
      text: step.text
    }))
  };
}

export function graph(nodes) {
  return {
    "@context": "https://schema.org",
    "@graph": nodes.filter(Boolean)
  };
}

export const siteFactsForLLM = {
  name: siteConfig.name,
  url: siteConfig.url,
  tagline: siteConfig.tagline,
  description: siteConfig.description,
  priceRange: siteConfig.priceRange,
  startingPrice: serviceFacts.priceFromLabel,
  checklistPoints: serviceFacts.checklistPoints,
  checklistPointsLabel: serviceFacts.checklistPointsLabel,
  checklistSections: serviceFacts.checklistSections,
  reportMinutes: serviceFacts.reportDeliveryMinutes,
  inspectionDuration: serviceFacts.inspectionDurationMinutes,
  hours: openingHours.shortLabel,
  phone: contactConfig.phoneDisplay,
  email: contactConfig.email,
  whatsapp: contactConfig.whatsapp,
  instagram: contactConfig.instagramHandle,
  facebook: contactConfig.facebookName,
  coverageSummary: serviceAreaSummary.stationLine,
  locationCount: serviceAreaSummary.count,
  zoneCount: serviceAreaSummary.zoneCount
};
