import { Breadcrumbs } from "@/components/breadcrumbs";
import { FaqSection } from "@/components/faq-section";
import { Icon } from "@/components/icon";
import { JsonLd } from "@/components/json-ld";
import { ProofHighlights } from "@/components/proof-highlights";
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
import { getAreasByZone, zoneById, zones } from "@/app/data/locations";
import { services } from "@/app/data/services";
import {
  breadcrumbSchema,
  faqSchema,
  graph,
  organizationSchema,
  serviceSchema,
  webPageSchema
} from "@/app/data/schema";

export function buildCorridorMetadata(corridor) {
  const areas = getAreasByZone(corridor.zoneId);
  const description = `${corridor.metaDescription} ${serviceFacts.checklistPointsLabel} checklist across ${serviceFacts.checklistSections} sections, photo evidence for every finding, report in ${serviceFacts.reportDeliveryMinutes} minutes. No travel charge.`;

  return {
    title: corridor.metaTitle,
    description,
    alternates: { canonical: `${siteConfig.url}/${corridor.slug}` },
    openGraph: {
      title: corridor.metaTitle,
      description,
      url: `${siteConfig.url}/${corridor.slug}`,
      siteName: siteConfig.name,
      locale: siteConfig.locale,
      type: "article",
      images: [
        {
          url: "/Checkmatepdilogo.png",
          width: 800,
          height: 600,
          alt: `Car PDI inspection in ${corridor.label}`
        }
      ]
    },
    twitter: {
      card: "summary_large_image",
      title: corridor.metaTitle,
      description,
      images: ["/Checkmatepdilogo.png"]
    }
  };
}

export function CorridorPage({ corridor }) {
  const zone = zoneById[corridor.zoneId];
  const areas = getAreasByZone(corridor.zoneId);
  const path = `/${corridor.slug}`;

  const trail = [
    { label: "Home", href: "/" },
    { label: "Service Areas", href: "/service-areas" },
    { label: corridor.label, href: path }
  ];
  const breadcrumb = breadcrumbSchema(trail);
  const faq = faqSchema(corridor.faqs, path);
  const areaService = serviceSchema({
    name: `Car PDI and Pre-Purchase Inspection in ${corridor.label}`,
    serviceType: "Car Pre-Delivery Inspection and Pre-Purchase Inspection",
    description: corridor.metaDescription,
    path,
    areaServed: areas.map((area) => area.name)
  });

  const jsonLd = graph([
    organizationSchema(),
    areaService,
    faq,
    breadcrumb,
    webPageSchema({
      path,
      name: corridor.metaTitle,
      description: corridor.metaDescription,
      breadcrumb: { "@id": breadcrumb["@id"] },
      mainEntity: [
        { "@id": areaService["@id"] },
        { "@id": faq["@id"] }
      ]
    })
  ]);

  const otherZones = zones.filter((item) => item.id !== corridor.zoneId);

  return (
    <main className="page-shell" id="top">
      <JsonLd data={jsonLd} />
      <SiteHeader navigation={subpageNavigation} />

      <section className="hero-section">
        <div className="container">
          <Breadcrumbs trail={trail} />
          <div className="hero-grid">
            <div className="hero-copy">
              <div className="hero-price-pill">
                {corridor.label} inspection &middot; From {serviceFacts.priceFromLabel}
              </div>
              <SectionLabel>{corridor.label} corridor</SectionLabel>
              <h1>{corridor.h1}</h1>
              <p className="hero-text">{corridor.heroIntro}</p>
              <p className="hero-text hero-text-extended">{corridor.heroExtended}</p>

              <div className="hero-badge-grid">
                <div className="hero-badge-card">
                  <Icon className="button-icon" name="check" />
                  {serviceFacts.checklistPointsLabel} checklist
                </div>
                <div className="hero-badge-card">
                  <Icon className="button-icon" name="rupee" />
                  From {serviceFacts.priceFromLabel}
                </div>
                <div className="hero-badge-card">
                  <Icon className="button-icon" name="city" />
                  {areas.length} areas covered
                </div>
                <div className="hero-badge-card">
                  <Icon className="button-icon" name="clock" />
                  Report in {serviceFacts.reportDeliveryMinutes} min
                </div>
              </div>

              <div className="hero-actions">
                <a
                  className="button button-solid shimmer-effect"
                  href={whatsappLink(
                    `Hi, I want to book a PDI inspection in ${corridor.label}. Car details: `
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icon className="button-icon" name="whatsapp" />
                  Book {corridor.label} Inspection
                </a>
                <a
                  className="button button-outline"
                  href={whatsappLink(
                    `Hi, please send the price and a slot for a car PDI in ${corridor.label}.`
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icon className="button-icon" name="chat" />
                  Get Price and Slot
                </a>
              </div>
            </div>

            <aside className="hero-showcase area-facts-panel">
              <h2 className="area-facts-title">Areas covered in {corridor.label}</h2>
              <p className="area-facts-intro">{corridor.areaNote}</p>
              <div className="area-list">
                {areas.map((area) => (
                  <a className="area-list-row" href={`/${area.slug}`} key={area.slug}>
                    <span className="area-list-name">{area.name}</span>
                    <span className="area-list-meta">{area.aka[0]}</span>
                  </a>
                ))}
              </div>
              <p className="area-facts-foot">
                From {serviceFacts.priceFromLabel}, no travel charge, report in{" "}
                {serviceFacts.reportDeliveryMinutes} minutes. {openingHours.shortLabel}.
              </p>
            </aside>
          </div>
        </div>
      </section>

      <section className="section-space">
        <div className="container">
          <div className="section-heading">
            <SectionLabel>Why buyers in {corridor.label} inspect</SectionLabel>
            <h2>What makes a PDI worth it on this corridor.</h2>
            <p>{zone.blurb}</p>
          </div>
          <div className="feature-card-grid">
            {corridor.factors.map((factor) => (
              <article className="feature-card" key={factor.title}>
                <div className="feature-card-icon">
                  <Icon name="shield" />
                </div>
                <h3>{factor.title}</h3>
                <p>{factor.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-band">
        <div className="container">
          <div className="section-heading">
            <SectionLabel>Book by area</SectionLabel>
            <h2>Car inspection in each {corridor.label} area.</h2>
            <p>
              Each area has its own page with the local inspection context, what we specifically
              check there, and answers to the questions buyers in that area ask.
            </p>
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
          <div className="inline-links">
            <a href={`/service-areas#${zone.id}`}>All {zone.name} areas</a>
            <a href="/service-areas">Full service area list</a>
          </div>
        </div>
      </section>

      <section className="section-space">
        <div className="container">
          <div className="section-heading">
            <SectionLabel>Real inspections</SectionLabel>
            <h2>Problems found before handover.</h2>
            <p>
              Actual findings from past CheckMate inspections, each one caught before the buyer made
              the final payment.
            </p>
          </div>
          <ProofHighlights limit={2} />
        </div>
      </section>

      <FaqSection
        id="faq"
        eyebrow={`Car PDI in ${corridor.label} — questions`}
        title={`Car PDI and pre-purchase inspection in ${corridor.label}: questions`}
        intro="Coverage, pricing, access and what we specifically check on this corridor."
        faqs={corridor.faqs}
      />

      <section className="section-band">
        <div className="container">
          <div className="section-heading">
            <SectionLabel>Other corridors</SectionLabel>
            <h2>We also inspect across {zones.length} zones.</h2>
          </div>
          <div className="zone-link-grid">
            {otherZones.map((item) => (
              <a className="zone-link-card" href={`/service-areas#${item.id}`} key={item.id}>
                <h3>{item.name}</h3>
                <p>{item.line}</p>
                {item.parentHref ? (
                  <span className="feature-card-link">{item.parentTitle}</span>
                ) : (
                  <span className="feature-card-link">See areas</span>
                )}
              </a>
            ))}
          </div>

          <div className="section-heading section-heading-sm">
            <h2>Services</h2>
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
          <div className="cta-card">
            <div className="cta-copy">
              <div className="hero-price-pill" style={{ marginBottom: "18px" }}>
                {corridor.label} from {serviceFacts.priceFromLabel}
              </div>
              <SectionLabel>Book your inspection</SectionLabel>
              <h2>Get the car checked before you pay.</h2>
              <p>
                Send the car make, model, variant, location and your preferred slot. We confirm the
                inspector and the inspection point, and the report reaches you within{" "}
                {serviceFacts.reportDeliveryMinutes} minutes of the inspection finishing.
              </p>
              <ul className="cta-list">
                <li>
                  <Icon className="cta-list-icon" name="check" />
                  {serviceFacts.checklistPointsLabel} checklist across {serviceFacts.checklistSections} sections
                </li>
                <li>
                  <Icon className="cta-list-icon" name="check" />
                  Photo evidence for every finding
                </li>
                <li>
                  <Icon className="cta-list-icon" name="check" />
                  Report within {serviceFacts.reportDeliveryMinutes} minutes on WhatsApp and email
                </li>
                <li>
                  <Icon className="cta-list-icon" name="check" />
                  {openingHours.shortLabel}
                </li>
              </ul>
              <div className="cta-actions">
                <a
                  className="button button-solid"
                  href={whatsappLink(
                    `Hi, I want to book a PDI inspection in ${corridor.label}. Car details: `
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icon className="button-icon" name="whatsapp" />
                  Book on WhatsApp
                </a>
                <a className="button button-outline" href={`tel:${contactConfig.phone}`}>
                  <Icon className="button-icon" name="phone" />
                  {contactConfig.phoneDisplay}
                </a>
              </div>
            </div>

            <div className="contact-panel">
              <div className="contact-panel-header">
                <p className="eyebrow">Quick contact</p>
                <h3>Book, ask a question, or request the report format.</h3>
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
              <div className="service-note-list">
                <div className="service-note">
                  <Icon className="service-note-icon" name="shield" />
                  <span>
                    We inspect at the vehicle location across {corridor.label}. No travel charge,
                    ever.
                  </span>
                </div>
                <div className="service-note">
                  <Icon className="service-note-icon" name="city" />
                  <span>
                    {areas.length} areas in this corridor:{" "}
                    {areas.map((area) => area.name).join(", ")}.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
