import { Breadcrumbs } from "@/components/breadcrumbs";
import { Icon } from "@/components/icon";
import { JsonLd } from "@/components/json-ld";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { SectionLabel } from "@/components/section-label";
import {
  contactConfig,
  openingHours,
  serviceFacts,
  siteConfig,
  subpageNavigation,
  whatsappLink
} from "@/app/data/business";
import { getAreasByZone, serviceAreaSummary, zones } from "@/app/data/locations";
import { services } from "@/app/data/services";
import {
  breadcrumbSchema,
  faqSchema,
  graph,
  organizationSchema,
  serviceSchema,
  webPageSchema
} from "@/app/data/schema";

const path = "/service-areas";

const title = "Car PDI Service Areas | Mumbai, Palghar, Navi Mumbai, Thane & Kalyan";

const description = `We inspect cars in ${serviceAreaSummary.count} areas across ${serviceAreaSummary.zoneCount} zones. Churchgate to Virar on the Western line, Palghar district up to Dahanu, Navi Mumbai, and the Thane to Kalyan belt. From ${serviceFacts.priceFromLabel}, no travel charge.`;

const faqs = [
  {
    q: "Which areas does CheckMate PDI cover?",
    a: `We cover ${serviceAreaSummary.count} areas across ${serviceAreaSummary.zoneCount} zones: ${serviceAreaSummary.stationLine}. Every area is in the standard service area, so there is no travel charge on the inspection price.`
  },
  {
    q: "Is the price the same in every area?",
    a: "Yes. The price depends on the package and the vehicle, not the distance. A Virar inspection costs the same as a Thane inspection, and the price is confirmed before you book."
  },
  {
    q: "Can you inspect my car at my home or at the dealership?",
    a: "Yes. We travel to the vehicle. Dealer yards, stockyards, society parking and private homes all work, and you do not need to be present."
  },
  {
    q: "Do you cover Palghar district and Navi Mumbai?",
    a: "Yes. Palghar, Manor Road, Dahanu, Boival, Kelve and Vaitarna are covered on a planned route, and Vashi, Nerul, Airoli, Taloja, Kharghar, Kalundre, Ulwe and Panvel are all in the standard Navi Mumbai service area."
  },
  {
    q: "How do I book an inspection in my area?",
    a: "Send the car make, model, variant, location and your preferred slot on WhatsApp or by phone. We confirm the inspector name, the slot and the inspection point. We operate 8:00 AM to 9:00 PM every day."
  },
  {
    q: "What if my area is not listed?",
    a: "Message us anyway. We travel across Mumbai, Palghar, Navi Mumbai, Thane and Kalyan, and if a location is genuinely outside our range we will tell you honestly rather than take the booking."
  }
];

export const metadata = {
  title,
  description,
  alternates: { canonical: `https://checkmatepdi.com${path}` },
  openGraph: {
    title,
    description,
    url: `https://checkmatepdi.com${path}`,
    siteName: siteConfig.name,
    locale: siteConfig.locale,
    type: "website"
  }
};

export default function ServiceAreasPage() {
  const trail = [
    { label: "Home", href: "/" },
    { label: "Service Areas", href: path }
  ];
  const breadcrumb = breadcrumbSchema(trail);
  const faq = faqSchema(faqs, path);
  const areaService = serviceSchema({
    name: "Car PDI and Pre-Purchase Inspection Coverage",
    serviceType: "Car Pre-Delivery Inspection and Pre-Purchase Inspection",
    description,
    path
  });

  const jsonLd = graph([
    organizationSchema(),
    areaService,
    faq,
    breadcrumb,
    webPageSchema({
      path,
      name: title,
      description,
      breadcrumb: { "@id": breadcrumb["@id"] },
      mainEntity: [
        { "@id": areaService["@id"] },
        { "@id": faq["@id"] }
      ]
    })
  ]);

  return (
    <main className="page-shell" id="top">
      <JsonLd data={jsonLd} />
      <SiteHeader navigation={subpageNavigation} />

      <section className="hero-section">
        <div className="container">
          <Breadcrumbs trail={trail} />
          <div className="hero-copy">
            <div className="hero-price-pill">
              {serviceAreaSummary.count} areas &middot; From {serviceFacts.priceFromLabel}
            </div>
            <SectionLabel>Coverage</SectionLabel>
            <h1>Where We Inspect Cars in Mumbai, Palghar, Navi Mumbai, Thane and Kalyan.</h1>
            <p className="hero-text">
              CheckMate PDI travels to the vehicle, so coverage is the real question. We inspect in{" "}
              {serviceAreaSummary.count} areas across {serviceAreaSummary.zoneCount} zones, from
              Churchgate on the southern end of the Western line to Dahanu in Palghar district, across
              Navi Mumbai, and along the Thane to Kalyan belt. No travel charge anywhere.
            </p>
            <p className="hero-text hero-text-extended">
              Every inspection uses the same {serviceFacts.checklistPointsLabel} checklist across{" "}
              {serviceFacts.checklistSections} sections, the same OK / Minor Issue / Major Issue
              grading, and the same report delivered within {serviceFacts.reportDeliveryMinutes}{" "}
              minutes. {openingHours.shortLabel}.
            </p>
            <div className="hero-actions">
              <a
                className="button button-solid shimmer-effect"
                href={whatsappLink("Hi, I want to book a car PDI inspection. Area: ")}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon className="button-icon" name="whatsapp" />
                Book an Inspection
              </a>
              <a className="button button-outline" href={`tel:${contactConfig.phone}`}>
                <Icon className="button-icon" name="phone" />
                {contactConfig.phoneDisplay}
              </a>
            </div>
          </div>
        </div>
      </section>

      {zones.map((zone) => {
        const areas = getAreasByZone(zone.id);
        return (
          <section className="section-space" id={zone.id} key={zone.id}>
            <div className="container">
              <div className="section-heading section-heading-split">
                <div>
                  <SectionLabel>{zone.line}</SectionLabel>
                  <h2>Car PDI in {zone.name}</h2>
                </div>
                <p>{zone.blurb}</p>
              </div>

              <div className="area-grid">
                {areas.map((area) => (
                  <a className="area-card" href={`/${area.slug}`} key={area.slug}>
                    <h3>{area.name}</h3>
                    <p className="area-card-aka">Also known as {area.aka.join(", ")}</p>
                    <p className="area-card-meta">
                      From {serviceFacts.priceFromLabel} &middot; Report in{" "}
                      {serviceFacts.reportDeliveryMinutes} min
                    </p>
                    <span className="feature-card-link">Car inspection in {area.name}</span>
                  </a>
                ))}
              </div>

              {zone.parentHref ? (
                <div className="inline-links">
                  <a href={zone.parentHref}>{zone.parentTitle} overview</a>
                </div>
              ) : null}
            </div>
          </section>
        );
      })}

      <section className="section-band">
        <div className="container">
          <div className="section-heading">
            <SectionLabel>Services available in every area</SectionLabel>
            <h2>One checklist, one report format, every location.</h2>
          </div>
          <div className="feature-card-grid">
            {services.map((service) => (
              <a className="feature-card" href={`/services/${service.slug}`} key={service.slug}>
                <div className="feature-card-icon">
                  <Icon name="report" />
                </div>
                <h3>{service.navLabel}</h3>
                <p>{service.summary}</p>
                <span className="feature-card-link">Read more</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="section-space">
        <div className="container">
          <div className="section-heading">
            <SectionLabel>Questions</SectionLabel>
            <h2>Car inspection coverage questions.</h2>
          </div>
          <div className="faq-list">
            {faqs.map((faqItem, index) => (
              <details className="faq-item" key={index}>
                <summary>
                  <span>{faqItem.q}</span>
                </summary>
                <p>{faqItem.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
