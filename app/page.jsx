import Image from "next/image";
import { ProofSlider } from "@/components/proof-slider";
import { InspectionSectionCard } from "@/components/inspection-section-card";
import { SectionLabel } from "@/components/section-label";
import { StatusPill } from "@/components/status-pill";
import { Icon } from "@/components/icon";
import { ReviewSection } from "@/components/review-section";
import { Reveal } from "@/components/reveal";
import { SiteFooter } from "@/components/site-footer";
import { getAreasByZone, serviceAreaSummary, zones } from "@/app/data/locations";
import { services } from "@/app/data/services";
import { inspectionSections } from "@/app/data/checklist";
import { contactConfig, openingHours, serviceFacts, whatsappLink } from "@/app/data/business";
import { faqSchema } from "@/app/data/schema";
import { JsonLd } from "@/components/json-ld";
import {
  contactActions,
  contactItems,
  ctaChecklist,
  evidenceItems,
  processSteps,
  professionalPoints,
  reportMeta,
  reportRemark,
  sampleVehicle,
  serviceNotes,
  testimonial,
  trustPillars,
  proofGallery,
  verifiedReviews,  faqItems
} from "@/app/site-data";

export const metadata = {
  alternates: { canonical: "/", types: { "text/plain": "/llms.txt" } }
};

const bookingWhatsApp = whatsappLink("Hi, I'd like to book a car inspection. Can you confirm pricing and availability?");
const coverageLegend = ["OK", "Minor Issue", "Major Issue"];

export default function HomePage() {
  return (
    <main className="page-shell home-page" id="top">
      <JsonLd data={faqSchema(faqItems, "/")} />
      <section className="booking-hero" aria-labelledby="home-title">
        <div className="booking-hero-content">
          <h1 id="home-title">Know the car before you buy it.</h1>
          <p>
            Independent new car PDI and used car inspections at the vehicle location across
            Mumbai, Palghar, Navi Mumbai, Thane and Kalyan.
          </p>
          <div className="booking-actions">
            <a className="button button-call" href={`tel:${contactConfig.phone}`}>
              <Icon className="button-icon" name="phone" />
              Call to book
            </a>
            <a className="button booking-chat" href={bookingWhatsApp} target="_blank" rel="noopener noreferrer">
              <Icon className="button-icon" name="whatsapp" />
              WhatsApp
            </a>
          </div>
          <p className="booking-hours">{contactConfig.phoneDisplay} · {openingHours.shortLabel}</p>
        </div>
        <figure className="booking-hero-photo">
          <Image
            src="/assets/inspection-proof-02.jpeg"
            alt="Front view of a Land Rover Defender from a CheckMate PDI inspection"
            fill
            preload
            sizes="(max-width: 760px) 100vw, 50vw"
          />
          <figcaption>From a CheckMate PDI inspection</figcaption>
        </figure>
      </section>

      <div className="booking-facts">
        <ul className="container" aria-label="Inspection at a glance">
          <li><strong>{serviceFacts.priceFromLabel}</strong><span>Starting price</span></li>
          <li><strong>{serviceFacts.checklistPoints} items</strong><span>{serviceFacts.gradedChecks} graded vehicle checks</span></li>
          <li><strong>{serviceFacts.reportDeliveryMinutes} min</strong><span>Report after inspection</span></li>
        </ul>
      </div>

      <section className="section-space home-services" id="services" aria-labelledby="services-title">
        <div className="container">
          <div className="section-heading section-heading-sm">
            <h2 id="services-title">Find the right car inspection</h2>
          </div>
          <div className="home-service-grid">
            {services.slice(0, 2).map((service) => (
              <a className="home-service-card" href={`/services/${service.slug}`} key={service.slug}>
                <Icon className="home-service-icon" name="shield" />
                <h3>{service.navLabel}</h3>
                <p>{service.summary}</p>
                <span>View service <Icon className="button-icon" name="arrowRight" /></span>
              </a>
            ))}
            <a className="home-service-card home-report-card" href="/sample-report">
              <Icon className="home-service-icon" name="report" />
              <h3>See what your report looks like</h3>
              <p>Preview the photos, condition grades and findings you’ll get after your inspection.</p>
              <span>View sample report <Icon className="button-icon" name="arrowRight" /></span>
            </a>
          </div>
          <div className="home-service-links">
            <a href="/services/car-inspection-cost">See inspection pricing</a>
            <a href="/services/what-we-check">Read the full checklist</a>
            <a href="/service-areas">Check your service area</a>
          </div>
        </div>
      </section>

      {/* ── PROOF SLIDER ── */}
      <section className="section-space" id="proof">
        <div className="container hero-grid" style={{ alignItems: "center" }}>
          <Reveal className="hero-copy">
            <SectionLabel>Real Inspection Proofs</SectionLabel>
            <h2>See exactly what we check before you drive off.</h2>
            <p className="hero-text">We don't just give you a checklist. We provide high-quality photo evidence of every major component so you know exactly what you are paying for.</p>
          </Reveal>
          <div className="hero-showcase">
            <ProofSlider slides={proofGallery} />
          </div>
        </div>
      </section>

      {/* ── WHY CHOOSE US ── */}
      <section className="section-band" id="why-checkmate">
        <div className="container">
          <div className="section-heading section-heading-split">
            <div>
              <SectionLabel>Why choose us</SectionLabel>
              <h2>A sharper way to inspect a car before ownership changes hands.</h2>
            </div>
            <p>
              A clear, independent inspection removes guesswork from the buying decision. Every finding is backed by evidence, not assumptions.
            </p>
          </div>

          <div className="section-intro-grid">
            <article className="section-intro-card">
              <p className="eyebrow">Why buyers trust the process</p>
              <h3>Independent, detail-led inspections that make the buying decision feel calm and clear.</h3>
              <p>
                Every report is built on a structured, unbiased process — so nothing gets missed and nothing is exaggerated.
              </p>
              <div className="section-intro-metrics">
                <div>
                  <strong>{serviceFacts.checklistPoints}</strong>
                  <span>checklist points</span>
                </div>
                <div>
                  <strong>Every</strong>
                  <span>finding photographed</span>
                </div>
                <div>
                  <strong>₹999</strong>
                  <span>starting price</span>
                </div>
                <div>
                  <strong>15 min</strong>
                  <span>report delivery</span>
                </div>
              </div>
            </article>
            <div className="section-intro-stack">
              <article className="intro-highlight-card">
                <Icon className="pillar-icon" name="shield" />
                <h3>Built for real negotiation</h3>
                <p>Inspection reports are objective, easy to read, and give you real leverage — whether you are negotiating price or simply confirming the car is sound.</p>
              </article>
              <article className="intro-highlight-card">
                <Icon className="pillar-icon" name="calendar" />
                <h3>Fast, usable delivery</h3>
                <p>Your report is ready to review and act on within 15 minutes of inspection completion.</p>
              </article>
            </div>
          </div>

          <div className="pillar-grid">
            {trustPillars.map((pillar) => (
              <article className="pillar-card" key={pillar.title}>
                <Icon className="pillar-icon" name="shield" />
                <h3>{pillar.title}</h3>
                <p>{pillar.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROCESS ── */}
      <section className="section-space" id="our-process">
        <div className="container">
          <div className="section-heading">
            <SectionLabel>How it works</SectionLabel>
            <h2>A Simple Process Built for Fast &amp; Confident Buying Decisions</h2>
            <p>
              The process is straightforward, practical, and designed to give you clarity before a payment is made.
            </p>
          </div>

          <div className="process-grid">
            {processSteps.map((step, index) => (
              <Reveal key={step.title} delay={index * 150}>
                <article className="process-card">
                  <span className="process-step">{String(index + 1).padStart(2, "0")}</span>
                  <h3>{step.title}</h3>
                  <p>{step.text}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── INSPECTION COVERAGE ── */}
      <section className="section-band" id="inspection-areas">
        <div className="container">
          <div className="section-heading">
            <SectionLabel>Complete inspection coverage</SectionLabel>
            <h2>Every major area is checked, graded, and explained.</h2>
            <p>
              Every major area is checked with a structured flow, so the report is both easy to scan and thorough enough to trust.
            </p>
          </div>

          <div className="legend-row">
            {coverageLegend.map((status) => (
              <StatusPill key={status} status={status} />
            ))}
          </div>

          <div className="inspection-layout">
            <div className="inspection-main">
              <div className="inspection-grid">
                {inspectionSections.map((section) => (
                  <InspectionSectionCard key={section.number} section={section} />
                ))}
              </div>
            </div>

            <aside className="report-showcase" id="sample-report">
              <article className="report-card" style={{ display: 'flex', flexDirection: 'column', padding: '40px 32px' }}>
                <Reveal effect="fade-in" delay={300} className="float-anim image-zoom-container" style={{ margin: '0 auto 32px', display: 'block' }}>
                  <div style={{
                    width: '180px',
                    height: 'auto',
                    borderRadius: '12px',
                    boxShadow: '0 20px 40px rgba(15,31,19,0.12)',
                    border: '4px solid #fff'
                  }}>
                    <Image src="/assets/report-mockup.jpg" alt="PDI Report Sample" width={300} height={400} style={{ width: '100%', height: 'auto', display: 'block' }} />
                  </div>
                </Reveal>
                
                <h3 style={{ fontSize: '1.75rem', marginBottom: '16px' }}>See exactly what you get</h3>
                
                <p style={{ color: 'var(--text-body)', fontSize: '1.05rem', lineHeight: '1.6', marginBottom: '32px' }}>
                  No simulated data or placeholder text. Download a <strong>genuine CheckMate PDI report</strong> from a real past inspection to see the exact level of detail, photo evidence, and clear grading you will receive.
                </p>

                <div style={{ background: 'var(--surface-soft)', padding: '24px', borderRadius: '16px', marginBottom: '32px' }}>
                  <ul className="cta-list" style={{ margin: 0, padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '16px' }}>
                    <li style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                      <Icon name="check" className="cta-list-icon" style={{ marginTop: '2px', flexShrink: 0, color: 'var(--green-600)' }} /> 
                      <span style={{ fontWeight: 600, color: 'var(--text-main)' }}>Inspection findings and photos</span>
                    </li>
                    <li style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                      <Icon name="check" className="cta-list-icon" style={{ marginTop: '2px', flexShrink: 0, color: 'var(--green-600)' }} /> 
                      <span style={{ fontWeight: 600, color: 'var(--text-main)' }}>High-res photo evidence of defects</span>
                    </li>
                    <li style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                      <Icon name="check" className="cta-list-icon" style={{ marginTop: '2px', flexShrink: 0, color: 'var(--green-600)' }} /> 
                      <span style={{ fontWeight: 600, color: 'var(--text-main)' }}>Unbiased final condition rating</span>
                    </li>
                  </ul>
                </div>

                <a href="/sample-report.pdf" target="_blank" rel="noopener noreferrer" className="button button-solid shimmer-effect" style={{ width: '100%', padding: '18px 24px', fontSize: '1.1rem' }}>
                  <Icon className="button-icon" name="report" />
                  View Genuine PDF Report
                </a>
                
                <p style={{ marginTop: '16px', fontSize: '0.85rem', color: 'var(--text-muted)', textAlign: 'center' }}>PDF Document</p>
              </article>
            </aside>
          </div>
        </div>
      </section>

      <section className="section-band" id="coverage">
        <div className="container">
          <div className="section-heading section-heading-split">
            <div>
              <SectionLabel>Where we inspect</SectionLabel>
              <h2>
                {serviceAreaSummary.count} areas across {serviceAreaSummary.zoneCount} zones.
              </h2>
            </div>
            <p>
              We travel to the vehicle, so coverage is the real question. There is no travel charge
              anywhere in the service area and the price never changes with distance.
            </p>
          </div>

          <div className="zone-link-grid">
            {zones.map((zone) => (
              <a className="zone-link-card" href={`/service-areas#${zone.id}`} key={zone.id}>
                <h3>{zone.name}</h3>
                <p>{zone.line}</p>
                <span className="zone-link-areas">
                  {getAreasByZone(zone.id)
                    .map((area) => area.name)
                    .join(", ")}
                </span>
                <span className="feature-card-link">See areas</span>
              </a>
            ))}
          </div>

          <div className="inline-links">
            <a href="/service-areas">Full service area list</a>
            <a href="/car-inspection-south-mumbai">South Mumbai</a>
            <a href="/car-inspection-bandra-andheri">Bandra to Andheri</a>
            <a href="/car-inspection-goregaon-borivali">Goregaon to Borivali</a>
            <a href="/car-inspection-mira-virar">Mira Road to Virar</a>
            <a href="/car-inspection-palghar">Palghar</a>
            <a href="/car-inspection-navi-mumbai">Navi Mumbai</a>
            <a href="/car-inspection-thane">Thane</a>
            <a href="/car-inspection-kalyan-dombivli">Kalyan and Dombivli</a>
          </div>
        </div>
      </section>

      {/* ── REVIEWS ── */}
      <section className="section-space" id="reviews">
        <div className="container">
          <div className="section-heading">
            <SectionLabel>Buyer reviews</SectionLabel>
            <h2>Real inspection reports and proof from customers who avoided hidden risks.</h2>
            <p>
              See exactly how a CheckMate inspection saves you from future repair costs and provides total peace of mind.
            </p>
          </div>
          <ReviewSection reviews={verifiedReviews} />
        </div>
      </section>

      {/* ── CONTACT / CTA ── */}
      <section className="section-space section-space-tight" id="contact">
        <div className="container">
          <div className="cta-card">
            <div className="cta-copy">
              <h2>Book your car inspection</h2>
              <p>
                Call or WhatsApp with the car model, vehicle location and preferred date.
                We’ll confirm the price and available slots.
              </p>

              <ul className="cta-list">
                {ctaChecklist.map((item) => (
                  <li key={item}>
                    <Icon className="cta-list-icon" name="check" />
                    {item}
                  </li>
                ))}
              </ul>

              <div className="cta-actions">
                {contactActions.map((action) => (
                  <a
                    className={`button ${action.variant === "solid" ? "button-solid" : "button-outline"}`}
                    href={action.href}
                    key={action.label}
                    target={action.href.startsWith("https://") ? "_blank" : undefined}
                    rel={action.href.startsWith("https://") ? "noopener noreferrer" : undefined}
                  >
                    <Icon className="button-icon" name={action.icon} />
                    {action.label}
                  </a>
                ))}
              </div>
            </div>

            <div className="contact-panel">
              <div className="contact-panel-header">
                <p className="eyebrow">Quick contact</p>
                <h3>Book, ask questions, or request the report format.</h3>
              </div>

              <div className="contact-list">
                {contactItems.map((item) =>
                  item.href ? (
                    <a className="contact-row" href={item.href} key={item.label} target="_blank" rel="noopener noreferrer">
                      <div className="contact-icon-wrap">
                        <Icon className="contact-icon" name={item.icon} />
                      </div>
                      <div>
                        <span>{item.label}</span>
                        <strong>{item.value}</strong>
                      </div>
                    </a>
                  ) : (
                    <div className="contact-row" key={item.label}>
                      <div className="contact-icon-wrap">
                        <Icon className="contact-icon" name={item.icon} />
                      </div>
                      <div>
                        <span>{item.label}</span>
                        <strong>{item.value}</strong>
                      </div>
                    </div>
                  )
                )}
              </div>

              <div className="service-note-list">
                {serviceNotes.map((note) => (
                  <div className="service-note" key={note}>
                    <Icon className="service-note-icon" name="shield" />
                    <span>{note}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ SECTION ── */}
      <section className="section-space" id="faq">
        <div className="container">
          <div className="section-heading">
            <SectionLabel>Frequently Asked Questions</SectionLabel>
            <h2>Everything You Need to Know About Car PDI</h2>
            <p>Clear, direct answers about our pre-delivery and pre-purchase inspection services.</p>
          </div>
          <div className="faq-grid" style={{ display: 'grid', gap: '16px', maxWidth: '840px', margin: '0 auto' }}>
            {faqItems.map((item, idx) => (
              <details key={idx} className="faq-item" style={{ background: 'var(--surface-card)', padding: '20px 24px', borderRadius: '16px', border: '1px solid var(--color-border)' }}>
                <summary style={{ fontWeight: '700', cursor: 'pointer', fontSize: '1.05rem', color: 'var(--text-main)' }}>
                  {item.q}
                </summary>
                <p style={{ marginTop: '12px', color: 'var(--text-body)', lineHeight: '1.6', fontSize: '0.95rem' }}>
                  {item.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
