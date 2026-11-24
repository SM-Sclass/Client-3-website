import { Breadcrumbs } from "@/components/breadcrumbs";
import { Icon } from "@/components/icon";
import { JsonLd } from "@/components/json-ld";
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
import {
  breadcrumbSchema,
  faqSchema,
  graph,
  organizationSchema,
  webPageSchema
} from "@/app/data/schema";

const path = "/about";

const title = "About CheckMate PDI Exxpert | Independent Car Inspection Mumbai";

const description = `CheckMate PDI Exxpert is an independent car PDI and pre-purchase inspection service operating across ${serviceAreaSummary.count} areas in Mumbai, Palghar, Navi Mumbai, Thane and Kalyan. ${serviceFacts.checklistPointsLabel} checklist, photo evidence, report in 15 minutes.`;

const faqs = [
  {
    q: "Is CheckMate PDI affiliated with any car brand or dealership?",
    a: "No. We are independent. We do not sell cars, do not earn commission from any brand or dealer, and are not part of any dealership group. Our only business is inspecting cars for buyers."
  },
  {
    q: "Do you have a shop or office I can visit?",
    a: "We are a mobile, on-site service. There is no walk-in location, because the inspection has to happen at the car. Inspections are booked by phone or WhatsApp and our inspectors travel to the vehicle."
  },
  {
    q: "What are your working hours?",
    a: `${openingHours.shortLabel}. Same-day slots are usually available, particularly in Thane, and evening slots are the most requested.`
  },
  {
    q: "Who actually performs the inspection?",
    a: "A field inspector travels to the vehicle and completes the checklist on site. The inspector's name, inspection date and sign-off are recorded in the report, so the work is attributable."
  },
  {
    q: "How is the inspection independent?",
    a: "The report is written for the buyer, not the seller. We do not have any commercial relationship with the dealer or seller, and the grading scale has no incentive built into it."
  },
  {
    q: "What is not covered by a PDI?",
    a: "A PDI is a physical, visual and functional check performed on site in about an hour. It does not include engine teardown, compression testing, dyno measurement or a full OBD-II scan, and it is not a guarantee of future reliability."
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
    type: "profile"
  }
};

export default function AboutPage() {
  const trail = [
    { label: "Home", href: "/" },
    { label: "About", href: path }
  ];
  const breadcrumb = breadcrumbSchema(trail);
  const faq = faqSchema(faqs, path);
  const organization = organizationSchema();

  const jsonLd = graph([
    organization,
    faq,
    breadcrumb,
    webPageSchema({
      path,
      name: title,
      description,
      breadcrumb: { "@id": breadcrumb["@id"] },
      mainEntity: [
        { "@id": organization["@id"] },
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
          <div className="hero-copy">
            <div className="hero-price-pill">
              Independent &middot; No dealer tie-up &middot; Since {siteConfig.foundedYear}
            </div>
            <SectionLabel>About us</SectionLabel>
            <h1>An independent inspection that works for the buyer.</h1>
            <p className="hero-text">
              CheckMate PDI Exxpert exists because the person carrying out a pre-delivery check is
              almost never the person who suffers the consequences of a bad one. We are an
              independent, mobile inspection service. We do not sell cars, we are not part of any
              dealership group, and we do not earn commission from any brand. Our only business is
              telling a buyer what is actually wrong with a car before they pay for it.
            </p>
            <p className="hero-text hero-text-extended">
              We inspect on site in {serviceAreaSummary.count} areas across{" "}
              {serviceAreaSummary.zoneCount} zones, from Churchgate to Virar, through Palghar
              district and Navi Mumbai, to the Thane and Kalyan belt.{" "}
              {openingHours.shortLabel}.
            </p>
            <div className="hero-actions">
              <a
                className="button button-solid shimmer-effect"
                href={whatsappLink("Hi, I want to book a PDI inspection. Car details: ")}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon className="button-icon" name="whatsapp" />
                Book an Inspection
              </a>
              <a className="button button-outline" href="/services/what-we-check">
                See the Checklist
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="section-band">
        <div className="container">
          <div className="section-heading">
            <SectionLabel>What independence means here</SectionLabel>
            <h2>Four commitments that shape every report.</h2>
          </div>
          <div className="feature-card-grid">
            <article className="feature-card">
              <div className="feature-card-icon">
                <Icon name="shield" />
              </div>
              <h3>No dealer, brand or seller relationship</h3>
              <p>
                We have no commercial tie to any dealership, brand or seller. Nobody can buy a
                better grade, and nobody can have a finding removed.
              </p>
            </article>
            <article className="feature-card">
              <div className="feature-card-icon">
                <Icon name="check" />
              </div>
              <h3>Written for the buyer</h3>
              <p>
                The report is framed around the decision you have to make: pay, negotiate, or walk
                away. That is the only outcome we optimise for.
              </p>
            </article>
            <article className="feature-card">
              <div className="feature-card-icon">
                <Icon name="camera" />
              </div>
              <h3>Every finding is evidenced</h3>
              <p>
                A claim without evidence is an opinion. Every finding in our report is supported by
                a photograph or a measured reading, which is what makes it usable in a negotiation.
              </p>
            </article>
            <article className="feature-card">
              <div className="feature-card-icon">
                <Icon name="report" />
              </div>
              <h3>One checklist, everywhere</h3>
              <p>
                {serviceFacts.checklistPointsLabel} checklist across{" "}
                {serviceFacts.checklistSections} sections and one grading scale, used identically in
                every location. A report from Virar is comparable to one from Dadar.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="section-space">
        <div className="container">
          <div className="prose-sections">
            <div className="prose-block">
              <h2>How we work</h2>
              <p>
                CheckMate PDI is a mobile, on-site inspection service. There is no walk-in location
                and no showroom, because a pre-delivery or pre-purchase inspection is only
                meaningful when it is performed on the actual car, at the actual location, in the
                condition it is being sold in.
              </p>
              <p>
                You send the vehicle details, the location and your preferred slot. We confirm an
                inspector, a time and the exact inspection point, which matters in a city where a
                basement ramp or a badly lit forecourt can make readings unreliable. The inspector
                completes the full checklist on site, which takes 45 to 60 minutes, and walks you
                through every finding and its photographs before leaving. The report is then sent
                on WhatsApp and email within {serviceFacts.reportDeliveryMinutes} minutes.
              </p>
              <p>
                The inspector&apos;s name, the inspection date and a sign-off are recorded in every
                report. The VIN plate and odometer reading are photographed, so the report also
                serves as a permanent record of the car you bought.
              </p>
            </div>

            <div className="prose-block">
              <h2>What a PDI is, and what it is not</h2>
              <p>
                A PDI is a physical, visual and functional check carried out on site in about an
                hour. It covers vehicle identity, exterior paint and panel alignment, glass, tyres
                and wheels, interior condition, engine bay, electrical systems, photo evidence, an
                overall condition grade, and inspector sign-off.
              </p>
              <p>
                It is not a workshop diagnostic. We do not perform engine teardown, compression
                testing, dyno measurement or a full OBD-II software scan, and we do not claim a
                PDI guarantees future reliability. What it does give you is a properly evidenced
                picture of the car&apos;s present condition, at the only moment when that picture
                can still change the price you pay.
              </p>
            </div>

            <div className="prose-block">
              <h2>Pricing</h2>
              <p>
                Inspections start at {serviceFacts.priceFromLabel}, and packages range up to{" "}
                {serviceFacts.priceRangeLabel}. The price depends on the package and the vehicle,
                never on the distance. There is no travel charge anywhere in our service area, and
                the price does not change for evening or weekend appointments. It is confirmed when
                you book, so there are no surprise charges on the day.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-band">
        <div className="container">
          <div className="section-heading">
            <SectionLabel>Coverage</SectionLabel>
            <h2>{serviceAreaSummary.count} areas across {serviceAreaSummary.zoneCount} zones.</h2>
          </div>
          <div className="zone-link-grid">
            {zones.map((zone) => (
              <a className="zone-link-card" href={`/service-areas#${zone.id}`} key={zone.id}>
                <h3>{zone.name}</h3>
                <p>{zone.line}</p>
                <span className="feature-card-link">See areas</span>
              </a>
            ))}
          </div>
          <div className="inline-links">
            <a href="/service-areas">Full service area list</a>
            <a href="/sample-report">See a real sample report</a>
            <a href="/contact">Contact and booking</a>
          </div>
        </div>
      </section>

      <section className="section-space">
        <div className="container">
          <div className="section-heading">
            <SectionLabel>Questions</SectionLabel>
            <h2>About CheckMate PDI.</h2>
          </div>
          <div className="faq-list">
            {faqs.map((item, index) => (
              <details className="faq-item" key={index}>
                <summary>
                  <span>{item.q}</span>
                </summary>
                <p>{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="section-space section-space-tight">
        <div className="container">
          <div className="cta-card">
            <div className="cta-copy">
              <div className="hero-price-pill" style={{ marginBottom: "18px" }}>
                From {serviceFacts.priceFromLabel}
              </div>
              <SectionLabel>Book now</SectionLabel>
              <h2>Get the car checked before you pay.</h2>
              <div className="cta-actions">
                <a
                  className="button button-solid"
                  href={whatsappLink("Hi, I want to book a PDI inspection. Car details: ")}
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
              <p className="cta-note">
                {contactConfig.email} &middot; {openingHours.shortLabel}
              </p>
            </div>
            <div className="contact-panel">
              <div className="contact-panel-header">
                <p className="eyebrow">Quick contact</p>
                <h3>We reply with a confirmed slot, not a callback promise.</h3>
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
              </div>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
