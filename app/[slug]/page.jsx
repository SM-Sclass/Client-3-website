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
import { getArea, getAreaSlugs, getAreaNeighbours, zoneById } from "@/app/data/locations";
import { services } from "@/app/data/services";
import { inspectionSections } from "@/app/data/checklist";
import {
  areaServiceSchema,
  breadcrumbSchema,
  faqSchema,
  graph,
  webPageSchema
} from "@/app/data/schema";

export const dynamicParams = false;

export function generateStaticParams() {
  return getAreaSlugs().map((slug) => ({ slug }));
}

function buildMeta(area) {
  const zone = zoneById[area.zone];
  const also = area.aka.slice(0, 2).join(" and ");
  const title = `Car PDI Inspection in ${area.name} | Pre-Delivery & Pre-Purchase Car Check from ₹999`;
  const description = `Car PDI and used car inspection in ${area.name} (${also}). ${serviceFacts.checklistPointsLabel} checklist across ${serviceFacts.checklistSections} sections, photo evidence, report in 15 minutes. From ${serviceFacts.priceFromLabel}. ${zone.shortName} and nearby areas covered.`;
  return { title, description };
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const area = getArea(slug);

  if (!area) {
    return { title: "Service Area Not Found" };
  }

  const { title, description } = buildMeta(area);

  return {
    title,
    description,
    alternates: { canonical: `https://checkmatepdi.com/${area.slug}` },
    openGraph: {
      title,
      description,
      url: `https://checkmatepdi.com/${area.slug}`,
      siteName: siteConfig.name,
      locale: siteConfig.locale,
      type: "article",
      images: [{ url: "/assets/logo.png", width: 1068, height: 476, alt: siteConfig.name }]
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/assets/logo.png"]
    }
  };
}

const factItems = [
  { label: "Starting price", value: serviceFacts.priceFromLabel, note: "No travel charge from any area" },
  { label: "Checklist", value: serviceFacts.checklistPointsLabel, note: `${serviceFacts.technicalSections} vehicle inspection sections` },
  { label: "Inspection time", value: `${serviceFacts.inspectionDurationMinutes} minutes`, note: "On site at the vehicle" },
  { label: "Report delivery", value: `${serviceFacts.reportDeliveryMinutes} minutes`, note: "WhatsApp and email, with photo evidence" },
  { label: "Working hours", value: "8:00 AM to 9:00 PM", note: "Open all seven days" },
  { label: "Languages", value: serviceFacts.languagesSpoken.join(", "), note: "Inspector and report explanation" },
  { label: "Payment", value: serviceFacts.paymentModes.join(", "), note: "Pay after reading the report" },
  { label: "Service type", value: "On-site only", note: "We travel to the car, dealer yard or home" }
];

export default async function AreaPage({ params }) {
  const { slug } = await params;
  const area = getArea(slug);

  if (!area) {
    return null;
  }

  const zone = zoneById[area.zone];
  const neighbours = getAreaNeighbours(area);
  const path = `/${area.slug}`;
  const { title, description } = buildMeta(area);
  const alsoKnownAs = [area.name, ...area.aka];

  const trail = [
    { label: "Home", href: "/" },
    { label: "Service Areas", href: "/service-areas" },
    { label: zone.shortName, href: `/service-areas#${zone.id}` },
    { label: area.name, href: path }
  ];

  const breadcrumb = breadcrumbSchema(trail);
  const faq = faqSchema(area.faqs, path);
  const areaService = areaServiceSchema(area);

  const jsonLd = graph([
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

      <section className="hero-section">
        <div className="container">
          <Breadcrumbs trail={trail} />
          <div className="hero-grid">
            <div className="hero-copy">
              <div className="hero-price-pill">
                Car PDI in {area.name} &middot; Starts at {serviceFacts.priceFromLabel}
              </div>
              <SectionLabel>Car inspection in {area.name}</SectionLabel>
              <h1>Car PDI and Pre-Purchase Inspection in {area.name}.</h1>
              <p className="hero-text">{area.intro}</p>
              <p className="hero-text hero-text-extended">
                Every {area.name} inspection runs the same {serviceFacts.checklistPointsLabel}{" "}
                checklist across {serviceFacts.checklistSections} sections, with photo evidence for
                every finding and a report on WhatsApp and email within{" "}
                {serviceFacts.reportDeliveryMinutes} minutes. Inspection starts at{" "}
                {serviceFacts.priceFromLabel}, with no travel charge.
              </p>

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
                  <Icon className="button-icon" name="clock" />
                  Report in {serviceFacts.reportDeliveryMinutes} min
                </div>
                <div className="hero-badge-card">
                  <Icon className="button-icon" name="calendar" />
                  {openingHours.shortLabel}
                </div>
              </div>

              <div className="hero-actions">
                <a
                  className="button button-solid shimmer-effect"
                  href={whatsappLink(
                    `Hi, I want to book a car PDI inspection in ${area.name}. Car details: `
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icon className="button-icon" name="whatsapp" />
                  Book {area.name} Inspection
                </a>
                <a
                  className="button button-outline"
                  href={whatsappLink(
                    `Hi, please send the price and a slot for a car PDI in ${area.name}.`
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
              <h2 className="area-facts-title">Car inspection facts for {area.name}</h2>
              <dl className="area-facts">
                {factItems.map((fact) => (
                  <div className="area-fact" key={fact.label}>
                    <dt>{fact.label}</dt>
                    <dd>
                      <strong>{fact.value}</strong>
                      <span>{fact.note}</span>
                    </dd>
                  </div>
                ))}
              </dl>
              <p className="area-facts-foot">
                Also known as {area.aka.join(", ")}. {area.travelNote}.
              </p>
            </aside>
          </div>
        </div>
      </section>

      <section className="section-band">
        <div className="container">
          <div className="section-heading">
            <SectionLabel>Where we inspect in {area.name}</SectionLabel>
            <h2>Coverage across {area.name} and {zone.shortName}.</h2>
            <p>
              We travel to the vehicle, wherever it is in {area.name}. Common inspection points
              include dealer yards, society parking, private homes and stockyards.
            </p>
          </div>

          <div className="chip-row">
            {alsoKnownAs.map((name) => (
              <span className="chip" key={name}>
                {name}
              </span>
            ))}
            {area.landmarks.map((landmark) => (
              <span className="chip chip-muted" key={landmark}>
                {landmark}
              </span>
            ))}
          </div>

          <p className="zone-note">
            <strong>{zone.name}:</strong> {zone.blurb}
          </p>
        </div>
      </section>

      <section className="section-space">
        <div className="container">
          <div className="section-heading">
            <SectionLabel>Why buyers in {area.name} inspect before paying</SectionLabel>
            <h2>Local reasons a PDI matters in {area.name}.</h2>
          </div>
          <div className="feature-card-grid">
            {area.factors.map((factor) => (
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
            <SectionLabel>The {serviceFacts.checklistPointsLabel} checklist</SectionLabel>
            <h2>What a car PDI in {area.name} checks.</h2>
            <p>
              The report has {serviceFacts.reportSections} sections and {serviceFacts.reportItems} items,
              including {serviceFacts.checklistPoints} core items and a dealer-action summary.
              The {serviceFacts.technicalSections} vehicle inspection sections cover {serviceFacts.technicalItems}
              {" "}technical items, including {serviceFacts.gradedChecks} graded checks.
              Applicable checks are graded OK, Minor Issue or Major Issue, with photos to support the findings.
            </p>
          </div>

          <div className="table-wrap">
            <table className="checklist-table">
              <caption className="visually-hidden">
                PDI checklist sections for car inspection in {area.name}
              </caption>
              <thead>
                <tr>
                  <th scope="col">Section</th>
                  <th scope="col">Type</th>
                  <th scope="col">Items</th>
                  <th scope="col">What it covers</th>
                </tr>
              </thead>
              <tbody>
                {inspectionSections.map((section) => (
                  <tr key={section.number}>
                    <th scope="row">
                      {section.number} {section.title}
                    </th>
                    <td>{section.type}</td>
                    <td>{section.items.length}</td>
                    <td>{section.description}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="inline-links">
            <a href="/services/what-we-check">See the full {serviceFacts.checklistPointsLabel} checklist</a>
            <a href="/sample-report">See a real sample report</a>
            <a href="/services/car-inspection-cost">See inspection pricing</a>
          </div>
        </div>
      </section>

      <section className="section-space">
        <div className="container">
          <div className="section-heading">
            <SectionLabel>Real inspections</SectionLabel>
            <h2>Problems found before handover.</h2>
            <p>
              These are actual findings from past CheckMate inspections, each one caught before the
              buyer made the final payment.
            </p>
          </div>
          <ProofHighlights limit={2} />
        </div>
      </section>

      <FaqSection
        id="faq"
        eyebrow={`Car PDI in ${area.name} — questions`}
        title={`Car PDI and pre-purchase inspection in ${area.name}: questions`}
        intro={`What buyers in ${area.name} ask before booking, answered with our actual process and pricing.`}
        faqs={area.faqs}
      />

      <section className="section-band">
        <div className="container">
          <div className="section-heading">
            <SectionLabel>Nearby service areas</SectionLabel>
            <h2>We also inspect in these areas near {area.name}.</h2>
          </div>
          <div className="chip-row">
            {neighbours.map((item) => (
              <a className="chip chip-link" href={`/${item.slug}`} key={item.slug}>
                {item.name}
              </a>
            ))}
          </div>

          <div className="inline-links">
            <a href={`/service-areas#${zone.id}`}>All {zone.shortName} areas</a>
            {zone.parentHref ? <a href={zone.parentHref}>{zone.parentTitle}</a> : null}
            <a href="/service-areas">All service areas</a>
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
                Book a PDI in {area.name} from {serviceFacts.priceFromLabel}
              </div>
              <SectionLabel>Book your inspection</SectionLabel>
              <h2>Get your {area.name} car inspected before you pay.</h2>
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
                    `Hi, I want to book a car PDI inspection in ${area.name}. Car details: `
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icon className="button-icon" name="whatsapp" />
                  Book on WhatsApp
                </a>
                <a
                  className="button button-outline"
                  href={`tel:${contactConfig.phone}`}
                >
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
                <a className="contact-row" href={contactConfig.instagram} target="_blank" rel="noopener noreferrer">
                  <div className="contact-icon-wrap">
                    <Icon className="contact-icon" name="camera" />
                  </div>
                  <div>
                    <span>Instagram</span>
                    <strong>{contactConfig.instagramHandle}</strong>
                  </div>
                </a>
              </div>
              <div className="service-note-list">
                <div className="service-note">
                  <Icon className="service-note-icon" name="shield" />
                  <span>
                    We inspect at the vehicle location in {area.name}. No travel charge, ever.
                  </span>
                </div>
                <div className="service-note">
                  <Icon className="service-note-icon" name="city" />
                  <span>
                    Part of the {zone.name} belt, which also includes{" "}
                    {neighbours.slice(0, 3).map((item) => item.name).join(", ")}.
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
