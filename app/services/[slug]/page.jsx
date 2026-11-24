import { Breadcrumbs } from "@/components/breadcrumbs";
import { FaqSection } from "@/components/faq-section";
import { Icon } from "@/components/icon";
import { JsonLd } from "@/components/json-ld";
import { ProofHighlights } from "@/components/proof-highlights";
import { SiteFooter } from "@/components/site-footer";
import { SectionLabel } from "@/components/section-label";
import {
  contactConfig,
  openingHours,
  serviceFacts,
  siteConfig,
  whatsappLink
} from "@/app/data/business";
import { serviceAreaSummary, zones } from "@/app/data/locations";
import { getService, services } from "@/app/data/services";
import { inspectionSections } from "@/app/data/checklist";
import {
  breadcrumbSchema,
  faqSchema,
  graph,
  howToSchema,
  serviceSchema,
  webPageSchema
} from "@/app/data/schema";

export const dynamicParams = false;

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const service = getService(slug);

  if (!service) {
    return { title: "Service Not Found" };
  }

  return {
    title: service.metaTitle,
    description: service.metaDescription,
    alternates: { canonical: `https://checkmatepdi.com/services/${service.slug}` },
    openGraph: {
      title: service.metaTitle,
      description: service.metaDescription,
      url: `https://checkmatepdi.com/services/${service.slug}`,
      siteName: siteConfig.name,
      locale: siteConfig.locale,
      type: "article"
    },
    twitter: {
      card: "summary_large_image",
      title: service.metaTitle,
      description: service.metaDescription,
      images: ["/assets/logo.png"]
    }
  };
}

const processSteps = [
  {
    title: "Share vehicle details",
    text: "Send the car make, model, variant, location and your preferred inspection slot."
  },
  {
    title: "Confirm the slot",
    text: "We confirm the inspector name, the inspection point and the price before the visit."
  },
  {
    title: "Inspector completes the checklist",
    text: `The full ${serviceFacts.checklistPointsLabel} checklist across ${serviceFacts.checklistSections} sections is completed on site, taking 45 to 60 minutes.`
  },
  {
    title: "Walkthrough of findings",
    text: "The inspector explains every finding and its photographs before leaving."
  },
  {
    title: "Report within 15 minutes",
    text: `The decision-ready report is sent on WhatsApp and email within ${serviceFacts.reportDeliveryMinutes} minutes of the inspection finishing.`
  }
];

export default async function ServicePage({ params }) {
  const { slug } = await params;
  const service = getService(slug);

  if (!service) {
    return null;
  }

  const path = `/services/${service.slug}`;
  const trail = [
    { label: "Home", href: "/" },
    { label: "Services", href: "/service-areas" },
    { label: service.navLabel, href: path }
  ];
  const breadcrumb = breadcrumbSchema(trail);
  const faq = faqSchema(service.faqs, path);
  const serviceNode = serviceSchema({
    name: service.name,
    serviceType: service.type,
    description: service.metaDescription,
    path,
    priceFrom: service.priceFrom
  });
  const howTo = howToSchema({
    name: `How a ${service.navLabel.toLowerCase()} works at CheckMate PDI`,
    description: `The five step booking and inspection process for a ${service.navLabel.toLowerCase()}, from sharing vehicle details to receiving the report.`,
    path,
    steps: processSteps
  });

  const jsonLd = graph([
    serviceNode,
    faq,
    howTo,
    breadcrumb,
    webPageSchema({
      path,
      name: service.metaTitle,
      description: service.metaDescription,
      breadcrumb: { "@id": breadcrumb["@id"] },
      mainEntity: [
        { "@id": serviceNode["@id"] },
        { "@id": faq["@id"] },
        { "@id": howTo["@id"] }
      ]
    })
  ]);

  const otherServices = services.filter((item) => item.slug !== service.slug);

  return (
    <main className="page-shell" id="top">
      <JsonLd data={jsonLd} />

      <section className="hero-section">
        <div className="container">
          <Breadcrumbs trail={trail} />
          <div className="hero-grid">
            <div className="hero-copy">
              <div className="hero-price-pill">
                From {serviceFacts.priceFromLabel} &middot;{" "}
                {serviceFacts.checklistPointsLabel} checklist
              </div>
              <SectionLabel>{service.type}</SectionLabel>
              <h1>{service.h1}</h1>
              <p className="hero-text">{service.heroIntro}</p>
              <p className="hero-text hero-text-extended">
                We inspect in {serviceAreaSummary.count} areas across{" "}
                {serviceAreaSummary.zoneCount} zones, from Churchgate to Virar, Palghar district,
                Navi Mumbai, and the Thane to Kalyan belt. {openingHours.shortLabel}. No travel
                charge anywhere.
              </p>

              <ul className="hero-point-list">
                {service.heroPoints.map((point) => (
                  <li key={point}>
                    <Icon className="cta-list-icon" name="check" />
                    {point}
                  </li>
                ))}
              </ul>

              <div className="hero-actions">
                <a
                  className="button button-solid shimmer-effect"
                  href={whatsappLink(
                    `Hi, I want to book a ${service.navLabel.toLowerCase()}. Car details: `
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icon className="button-icon" name="whatsapp" />
                  Book This Inspection
                </a>
                <a className="button button-outline" href="/services/car-inspection-cost">
                  See Pricing
                </a>
              </div>
            </div>

            <aside className="hero-showcase area-facts-panel">
              <h2 className="area-facts-title">At a glance</h2>
              <dl className="area-facts">
                <div className="area-fact">
                  <dt>Starting price</dt>
                  <dd>
                    <strong>{serviceFacts.priceFromLabel}</strong>
                    <span>No travel charge in any service area</span>
                  </dd>
                </div>
                <div className="area-fact">
                  <dt>Checklist</dt>
                  <dd>
                    <strong>{serviceFacts.checklistPointsLabel} checklist</strong>
                    <span>{serviceFacts.technicalSections} vehicle inspection sections</span>
                  </dd>
                </div>
                <div className="area-fact">
                  <dt>On-site time</dt>
                  <dd>
                    <strong>{serviceFacts.inspectionDurationMinutes} minutes</strong>
                    <span>At the vehicle, dealer yard or your home</span>
                  </dd>
                </div>
                <div className="area-fact">
                  <dt>Report</dt>
                  <dd>
                    <strong>{serviceFacts.reportDeliveryMinutes} minutes</strong>
                    <span>WhatsApp and email, with photo evidence</span>
                  </dd>
                </div>
                <div className="area-fact">
                  <dt>Hours</dt>
                  <dd>
                    <strong>8:00 AM to 9:00 PM</strong>
                    <span>Open all seven days</span>
                  </dd>
                </div>
                <div className="area-fact">
                  <dt>Coverage</dt>
                  <dd>
                    <strong>{serviceAreaSummary.count} areas</strong>
                    <span>Mumbai, Palghar, Navi Mumbai, Thane, Kalyan</span>
                  </dd>
                </div>
              </dl>
            </aside>
          </div>
        </div>
      </section>

      <section className="section-space">
        <div className="container">
          <div className="prose-sections">
            {service.sections.map((section) => (
              <div className="prose-block" key={section.h2}>
                <h2>{section.h2}</h2>
                {section.body.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
                {section.list.length ? (
                  <ul className="check-list">
                    {section.list.map((item) => (
                      <li key={item}>
                        <Icon className="cta-list-icon" name="check" />
                        {item}
                      </li>
                    ))}
                  </ul>
                ) : null}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-band">
        <div className="container">
          <div className="section-heading">
            <SectionLabel>How the process runs</SectionLabel>
            <h2>From booking to report in five steps.</h2>
          </div>
          <div className="process-grid">
            {processSteps.map((step, index) => (
              <article className="process-card" key={step.title}>
                <span className="process-step">{String(index + 1).padStart(2, "0")}</span>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {service.slug === "what-we-check" ? (
        <section className="section-space">
          <div className="container">
            <div className="section-heading">
              <SectionLabel>Full checklist</SectionLabel>
              <h2>The complete {serviceFacts.checklistPointsLabel} checklist, item by item.</h2>
              <p>
                The report lists {serviceFacts.reportItems} items across {serviceFacts.reportSections} sections,
                including {serviceFacts.checklistPoints} core items and the dealer-action summary. Applicable vehicle checks
                are graded OK, Minor Issue or Major Issue, with photos to support the findings.
              </p>
            </div>

            <div className="checklist-sections">
              {inspectionSections.map((section) => (
                <article className="checklist-section" key={section.number}>
                  <h3>
                    {section.number}. {section.title}
                    <span className="checklist-count">{section.items.length} items</span>
                  </h3>
                  <p className="checklist-section-desc">{section.description}</p>
                  {section.items.length > 0 && <ul>
                    {section.items.map((item) => (
                          <li key={item}>
                            {item}{section.referenceItems?.includes(item) && " (recorded)"}
                          </li>
                    ))}
                  </ul>}
                </article>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      <section className="section-space">
        <div className="container">
          <div className="section-heading">
            <SectionLabel>Real inspections</SectionLabel>
            <h2>Defects caught before the buyer paid.</h2>
          </div>
          <ProofHighlights limit={3} />
        </div>
      </section>

      <FaqSection
        id="faq"
        eyebrow={`${service.navLabel} — questions`}
        title={`${service.navLabel}: frequently asked questions`}
        intro="Straight answers about process, price and coverage, written the way we explain them on site."
        faqs={service.faqs}
      />

      <section className="section-band">
        <div className="container">
          <div className="section-heading">
            <SectionLabel>Where we cover this service</SectionLabel>
            <h2>{service.navLabel} across {serviceAreaSummary.count} areas.</h2>
          </div>
          <div className="zone-link-grid">
            {zones.map((zone) => (
              <a className="zone-link-card" href={`/service-areas#${zone.id}`} key={zone.id}>
                <h3>{zone.name}</h3>
                <p>{zone.shortName} belt</p>
                <span className="feature-card-link">See areas</span>
              </a>
            ))}
          </div>

          <div className="section-heading section-heading-sm">
            <h2>Other services</h2>
          </div>
          <div className="feature-card-grid">
            {otherServices.map((item) => (
              <a className="feature-card" href={`/services/${item.slug}`} key={item.slug}>
                <div className="feature-card-icon">
                  <Icon name="report" />
                </div>
                <h3>{item.navLabel}</h3>
                <p>{item.summary}</p>
                <span className="feature-card-link">Read more</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="section-space">
        <div className="container">
          <div className="cta-card">
            <div className="cta-copy">
              <div className="hero-price-pill" style={{ marginBottom: "18px" }}>
                {service.navLabel} from {serviceFacts.priceFromLabel}
              </div>
              <SectionLabel>Book now</SectionLabel>
              <h2>Inspect the car before you pay, not after.</h2>
              <p>
                Send the car details and your preferred slot. We confirm the inspector and the
                inspection point, and the report reaches you within{" "}
                {serviceFacts.reportDeliveryMinutes} minutes of the inspection finishing.
              </p>
              <div className="cta-actions">
                <a
                  className="button button-solid"
                  href={whatsappLink(
                    `Hi, I want to book a ${service.navLabel.toLowerCase()}. Car details: `
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icon className="button-icon" name="whatsapp" />
                  Book on WhatsApp
                </a>
                <a className="button button-outline" href="/contact">
                  <Icon className="button-icon" name="phone" />
                  {contactConfig.phoneDisplay}
                </a>
              </div>
            </div>
            <div className="contact-panel">
              <div className="contact-panel-header">
                <p className="eyebrow">Quick contact</p>
                <h3>Message us, we reply with a confirmed slot.</h3>
              </div>
              <div className="contact-list">
                <a className="contact-row" href={contactConfig.whatsapp} target="_blank" rel="noopener noreferrer">
                  <div className="contact-icon-wrap">
                    <Icon className="contact-icon" name="whatsapp" />
                  </div>
                  <div>
                    <span>Mobile &amp; WhatsApp</span>
                    <strong>{contactConfig.phoneDisplay}</strong>
                  </div>
                </a>
                <a className="contact-row" href={`mailto:${contactConfig.email}`}>
                  <div className="contact-icon-wrap">
                    <Icon className="contact-icon" name="mail" />
                  </div>
                  <div>
                    <span>Email</span>
                    <strong>{contactConfig.email}</strong>
                  </div>
                </a>
                <a className="contact-row" href="/sample-report">
                  <div className="contact-icon-wrap">
                    <Icon className="contact-icon" name="report" />
                  </div>
                  <div>
                    <span>See a report first</span>
                    <strong>Sample PDI report</strong>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
