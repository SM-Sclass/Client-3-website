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
import { serviceAreaSummary, zones } from "@/app/data/locations";
import { breadcrumbSchema, faqSchema, graph, webPageSchema } from "@/app/data/schema";

const path = "/contact";

const title = "Contact and Book a Car PDI Inspection";

const description = `Book a car PDI or pre-purchase inspection with CheckMate PDI. WhatsApp ${contactConfig.phoneDisplay}, email ${contactConfig.email}. ${openingHours.shortLabel}. No travel charge across ${serviceAreaSummary.count} areas.`;

const faqs = [
  {
    q: "How do I book an inspection?",
    a: `Message us on WhatsApp or call ${contactConfig.phoneDisplay} with the car make, model, variant, location and your preferred slot. We reply with a confirmed slot, the inspector's name and the exact inspection point.`
  },
  {
    q: "What information should I send when booking?",
    a: "The car make, model and variant, the VIN or registration number if the car is used, the exact location with a Maps pin, and your preferred date and time window. If the seller is a dealer, the dealership or yard name helps."
  },
  {
    q: "Do I need to be present during the inspection?",
    a: "No. A large share of our inspections are for buyers who cannot attend, including remote and out-of-state buyers. Just send a contact person on site and we will send the report to you."
  },
  {
    q: "What are your working hours?",
    a: `${openingHours.shortLabel}. Same-day slots are usually available, especially in Thane. Evening slots are the most requested, so book ahead for weekends.`
  },
  {
    q: "When do I pay?",
    a: "Payment is normally made after you have read the report. We accept UPI, cash and bank transfer. The price is confirmed when the slot is booked, so there are no extra charges on the day."
  },
  {
    q: "Is there a travel charge for coming to my area?",
    a: `No. There is no travel charge anywhere in our service area, which covers ${serviceAreaSummary.count} areas across Mumbai, Palghar, Navi Mumbai, Thane and Kalyan.`
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

export default function ContactPage() {
  const trail = [
    { label: "Home", href: "/" },
    { label: "Contact", href: path }
  ];
  const breadcrumb = breadcrumbSchema(trail);
  const faq = faqSchema(faqs, path);

  const contactPage = {
    "@type": "ContactPage",
    "@id": `https://checkmatepdi.com${path}#webpage`,
    url: `https://checkmatepdi.com${path}`,
    name: title,
    description,
    inLanguage: siteConfig.language,
    isPartOf: { "@id": `${siteConfig.url}/#website` },
    about: { "@id": `${siteConfig.url}/#organization` },
    breadcrumb: { "@id": breadcrumb["@id"] },
    mainEntity: { "@id": faq["@id"] }
  };

  const jsonLd = graph([faq, breadcrumb, contactPage]);

  return (
    <main className="page-shell" id="top">
      <JsonLd data={jsonLd} />
      <SiteHeader navigation={subpageNavigation} />

      <section className="hero-section">
        <div className="container">
          <Breadcrumbs trail={trail} />
          <div className="hero-copy">
            <div className="hero-price-pill">
              WhatsApp {contactConfig.phoneDisplay}
            </div>
            <SectionLabel>Contact and booking</SectionLabel>
            <h1>Book a Car PDI Inspection.</h1>
            <p className="hero-text">
              Send us the car make, model, variant, the exact location and your preferred slot. We
              reply with a confirmed slot, the inspector&apos;s name and the inspection point.
              Inspections start at {serviceFacts.priceFromLabel} and there is no travel charge in any
              of the {serviceAreaSummary.count} areas we cover.
            </p>
            <p className="hero-text hero-text-extended">{openingHours.note}</p>
            <div className="hero-actions">
              <a
                className="button button-solid shimmer-effect"
                href={whatsappLink("Hi, I want to book a PDI inspection. Car details: ")}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon className="button-icon" name="whatsapp" />
                Message on WhatsApp
              </a>
              <a className="button button-outline" href={`tel:${contactConfig.phone}`}>
                <Icon className="button-icon" name="phone" />
                Call {contactConfig.phoneDisplay}
              </a>
              <a className="button button-outline" href={`mailto:${contactConfig.email}`}>
                <Icon className="button-icon" name="mail" />
                Email Us
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="section-band">
        <div className="container">
          <div className="section-heading">
            <SectionLabel>All ways to reach us</SectionLabel>
            <h2>Contact details.</h2>
            <p>
              CheckMate PDI is a mobile, on-site service with no walk-in location, because the
              inspection has to happen at the car. Everything is therefore handled by phone,
              WhatsApp and email.
            </p>
          </div>

          <div className="contact-cards">
            <a className="contact-card" href={contactConfig.whatsapp} target="_blank" rel="noopener noreferrer">
              <div className="contact-icon-wrap">
                <Icon className="contact-icon" name="whatsapp" />
              </div>
              <h3>WhatsApp</h3>
              <p>
                Fastest way to book. Send the car details and the location, and we will confirm a
                slot.
              </p>
              <strong>{contactConfig.phoneDisplay}</strong>
            </a>

            <a className="contact-card" href={`tel:${contactConfig.phone}`}>
              <div className="contact-icon-wrap">
                <Icon className="contact-icon" name="phone" />
              </div>
              <h3>Phone</h3>
              <p>Call any time during working hours to discuss the vehicle and the package.</p>
              <strong>{contactConfig.phoneDisplay}</strong>
            </a>

            <a className="contact-card" href={`mailto:${contactConfig.email}`}>
              <div className="contact-icon-wrap">
                <Icon className="contact-icon" name="mail" />
              </div>
              <h3>Email</h3>
              <p>Best for sharing multiple vehicle details or documents.</p>
              <strong>{contactConfig.email}</strong>
            </a>

            <a
              className="contact-card"
              href={contactConfig.instagram}
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="contact-icon-wrap">
                <Icon className="contact-icon" name="camera" />
              </div>
              <h3>Instagram</h3>
              <p>Real inspection photographs and report previews.</p>
              <strong>{contactConfig.instagramHandle}</strong>
            </a>

            <a
              className="contact-card"
              href={contactConfig.facebook}
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="contact-icon-wrap">
                <Icon className="contact-icon" name="user" />
              </div>
              <h3>Facebook</h3>
              <p>Updates and customer inspection reports.</p>
              <strong>{contactConfig.facebookName}</strong>
            </a>

            <div className="contact-card">
              <div className="contact-icon-wrap">
                <Icon className="contact-icon" name="clock" />
              </div>
              <h3>Working hours</h3>
              <p>Open every day, including weekends.</p>
              <strong>8:00 AM to 9:00 PM</strong>
            </div>
          </div>
        </div>
      </section>

      <section className="section-space">
        <div className="container">
          <div className="section-heading">
            <SectionLabel>Booking steps</SectionLabel>
            <h2>What happens after you message us.</h2>
          </div>
          <div className="process-grid">
            <article className="process-card">
              <span className="process-step">01</span>
              <h3>You send the details</h3>
              <p>
                Car make, model, variant, VIN or registration number for a used car, exact location
                with a Maps pin, and your preferred slot.
              </p>
            </article>
            <article className="process-card">
              <span className="process-step">02</span>
              <h3>We confirm slot and price</h3>
              <p>
                We reply with the inspector&apos;s name, the inspection point and the agreed
                package price. Nothing is charged at this stage.
              </p>
            </article>
            <article className="process-card">
              <span className="process-step">03</span>
              <h3>Inspection on site</h3>
              <p>
                The inspector completes the {serviceFacts.checklistPointsLabel} checklist across{" "}
                {serviceFacts.checklistSections} sections in 45 to 60 minutes and walks you through
                the findings.
              </p>
            </article>
            <article className="process-card">
              <span className="process-step">04</span>
              <h3>Report in 15 minutes</h3>
              <p>
                You receive the report on WhatsApp and email, then pay by UPI, cash or bank
                transfer.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="section-band">
        <div className="container">
          <div className="section-heading">
            <SectionLabel>Service area</SectionLabel>
            <h2>{serviceAreaSummary.count} areas, no travel charge.</h2>
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
            <a href="/services/car-inspection-cost">Inspection pricing</a>
            <a href="/sample-report">Sample report</a>
          </div>
        </div>
      </section>

      <section className="section-space">
        <div className="container">
          <div className="section-heading">
            <SectionLabel>Questions</SectionLabel>
            <h2>Booking questions.</h2>
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

      <SiteFooter />
    </main>
  );
}
