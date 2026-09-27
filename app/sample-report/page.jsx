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
import { serviceAreaSummary } from "@/app/data/locations";
import { breadcrumbSchema, faqSchema, graph, webPageSchema } from "@/app/data/schema";
import { evidenceItems, reportMeta, reportRemark, reportRows } from "@/app/site-data";

const path = "/sample-report";

const title = "Sample PDI Report | What a CheckMate Car Inspection Report Contains";

const description = `A real past CheckMate PDI report broken down section by section: the ${serviceFacts.checklistSections} sections, the ${serviceFacts.checklistPointsLabel} checklist, the OK / Minor Issue / Major Issue grading, photo evidence and written remarks. Download the PDF.`;

const faqs = [
  {
    q: "Can I see a real PDI report before I book?",
    a: "Yes. This page is a real past CheckMate report, reproduced section by section, and the original PDF is linked below it. Nothing on this page is a mock-up."
  },
  {
    q: "How long is a CheckMate PDI report?",
    a: "The report has 11 sections covering all 84 checklist points, with a grade for every item, written remarks, an overall condition grade, and photo evidence for each finding."
  },
  {
    q: "What do the grades mean?",
    a: "OK means normal condition for the vehicle's age and mileage. Minor Issue means something to correct or price in that does not affect safety or legality. Major Issue affects safety, legality or resale value, such as structural damage, a leak or brake failure risk."
  },
  {
    q: "How quickly do I get the report?",
    a: "Within 15 minutes of the on-site inspection finishing, delivered on WhatsApp and email as a PDF."
  },
  {
    q: "Is the report format the same in every location?",
    a: "Yes. One checklist, one grading scale, one report format, whether the inspection happened in Churchgate, Virar, Palghar, Panvel, Thane or Kalyan."
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
    type: "article",
    images: [{ url: "/Checkmatepdilogo.png", width: 800, height: 600, alt: "Sample CheckMate PDI report" }]
  }
};

export default function SampleReportPage() {
  const trail = [
    { label: "Home", href: "/" },
    { label: "Sample Report", href: path }
  ];
  const breadcrumb = breadcrumbSchema(trail);
  const faq = faqSchema(faqs, path);

  const jsonLd = graph([
    faq,
    breadcrumb,
    webPageSchema({
      path,
      name: title,
      description,
      breadcrumb: { "@id": breadcrumb["@id"] },
      mainEntity: [{ "@id": faq["@id"] }]
    })
  ]);

  return (
    <main className="page-shell" id="top">
      <JsonLd data={jsonLd} />
      <SiteHeader navigation={subpageNavigation} />

      <section className="hero-section">
        <div className="container">
          <Breadcrumbs trail={trail} />
          <div className="hero-grid">
            <div className="hero-copy">
              <div className="hero-price-pill">Real report, not a mock-up</div>
              <SectionLabel>Sample report</SectionLabel>
              <h1>What a CheckMate PDI Report Actually Contains.</h1>
              <p className="hero-text">
                This is a real report from a past inspection, reproduced section by section so you
                can see exactly what you get before you book. The vehicle below was inspected in
                Pune, outside our regular service belt, and is shown precisely because it is
                genuine. The format is identical to every report we issue in Mumbai, Palghar,
                Navi Mumbai, Thane and Kalyan.
              </p>
              <p className="hero-text hero-text-extended">
                Every report is a {serviceFacts.checklistPointsLabel} checklist across{" "}
                {serviceFacts.checklistSections} sections, grades each item as OK, Minor Issue or
                Major Issue, attaches photo evidence to every finding, and closes with an overall
                condition grade and written remarks.
              </p>
              <div className="hero-actions">
                <a
                  className="button button-solid shimmer-effect"
                  href="/sample-report.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icon className="button-icon" name="report" />
                  Download the PDF Report
                </a>
                <a className="button button-outline" href="/services/what-we-check">
                  See the Full Checklist
                </a>
              </div>
            </div>

            <aside className="hero-showcase area-facts-panel">
              <h2 className="area-facts-title">Report identity</h2>
              <dl className="area-facts">
                {reportMeta.map((item) => (
                  <div className="area-fact" key={item.label}>
                    <dt>{item.label}</dt>
                    <dd>
                      <strong>{item.value}</strong>
                    </dd>
                  </div>
                ))}
              </dl>
              <p className="area-facts-foot">
                The VIN plate and odometer are photographed on every inspection and recorded here,
                so the report doubles as a permanent record of the car you bought.
              </p>
            </aside>
          </div>
        </div>
      </section>

      <section className="section-band">
        <div className="container">
          <div className="section-heading">
            <SectionLabel>Section scores</SectionLabel>
            <h2>How the report is graded.</h2>
            <p>
              Each section is scored against the number of checklist items it contains, so you can
              see at a glance where a car is strong and where it is not.
            </p>
          </div>

          <div className="table-wrap">
            <table className="checklist-table report-table">
              <caption className="visually-hidden">
                Section scores from a real CheckMate PDI report
              </caption>
              <thead>
                <tr>
                  <th scope="col">Section</th>
                  <th scope="col">Score</th>
                  <th scope="col">Status</th>
                </tr>
              </thead>
              <tbody>
                {reportRows.map((row) => (
                  <tr key={row.label}>
                    <th scope="row">{row.label}</th>
                    <td>{row.score}</td>
                    <td>
                      <span className={`status-tag status-${row.status.toLowerCase().replace(/\s+/g, "-")}`}>
                        {row.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="section-heading section-heading-sm">
            <h2>Findings with photo evidence</h2>
          </div>
          <div className="table-wrap">
            <table className="checklist-table report-table">
              <caption className="visually-hidden">
                Defects recorded in the sample report
              </caption>
              <thead>
                <tr>
                  <th scope="col">Finding</th>
                  <th scope="col">Severity</th>
                </tr>
              </thead>
              <tbody>
                {evidenceItems.map((item) => (
                  <tr key={item.label}>
                    <th scope="row">{item.label}</th>
                    <td>
                      <span className={`status-tag status-${item.status.toLowerCase().replace(/\s+/g, "-")}`}>
                        {item.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="report-remark">
            <h3>Inspector remarks, in full</h3>
            <p>{reportRemark}</p>
          </div>
        </div>
      </section>

      <section className="section-space">
        <div className="container">
          <div className="section-heading">
            <SectionLabel>Grading scale</SectionLabel>
            <h2>Three grades, and what each one means.</h2>
          </div>
          <div className="feature-card-grid">
            <article className="feature-card">
              <div className="feature-card-icon">
                <Icon name="check" />
              </div>
              <h3>OK</h3>
              <p>
                The item is in normal condition for the vehicle&apos;s age and mileage. Nothing to
                report, no action needed.
              </p>
            </article>
            <article className="feature-card">
              <div className="feature-card-icon">
                <Icon name="alert" />
              </div>
              <h3>Minor Issue</h3>
              <p>
                A defect or irregularity that does not affect safety or legality but should be
                corrected, or priced into the deal.
              </p>
            </article>
            <article className="feature-card">
              <div className="feature-card-icon">
                <Icon name="alert" />
              </div>
              <h3>Major Issue</h3>
              <p>
                A defect affecting safety, legality or resale value, such as structural or chassis
                damage, a fuel or coolant leak, or brake failure risk.
              </p>
            </article>
          </div>

          <div className="inline-links">
            <a href="/services/what-we-check">See the full {serviceFacts.checklistPointsLabel} checklist</a>
            <a href="/services/car-inspection-cost">See inspection pricing</a>
            <a href="/service-areas">See all {serviceAreaSummary.count} service areas</a>
          </div>
        </div>
      </section>

      <section className="section-space">
        <div className="container">
          <div className="section-heading">
            <SectionLabel>Questions</SectionLabel>
            <h2>About the report.</h2>
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
                Get your own report from {serviceFacts.priceFromLabel}
              </div>
              <SectionLabel>Book an inspection</SectionLabel>
              <h2>See this level of detail on your car.</h2>
              <p>
                Send the car details, location and your preferred slot. We confirm the inspector and
                the inspection point, and the report reaches you within{" "}
                {serviceFacts.reportDeliveryMinutes} minutes.
              </p>
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
              <p className="cta-note">{openingHours.shortLabel}</p>
            </div>
            <div className="contact-panel">
              <div className="contact-panel-header">
                <p className="eyebrow">Quick contact</p>
                <h3>Message us and we will confirm a slot.</h3>
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
