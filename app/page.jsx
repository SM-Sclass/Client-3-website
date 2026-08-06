import Image from "next/image";
import { BrandMark } from "@/components/brand-mark";
import { HeroSlider } from "@/components/hero-slider";
import { ProofSlider } from "@/components/proof-slider";
import { InspectionSectionCard } from "@/components/inspection-section-card";
import { SectionLabel } from "@/components/section-label";
import { SiteHeader } from "@/components/site-header";
import { StatusPill } from "@/components/status-pill";
import { Icon } from "@/components/icon";
import { ReviewSection } from "@/components/review-section";
import { Reveal } from "@/components/reveal";
import {
  confidenceStats,
  contactActions,
  contactItems,
  ctaChecklist,
  evidenceItems,
  heroHighlights,
  inspectionSections,
  navigation,
  processSteps,
  professionalPoints,
  reportMeta,
  reportRemark,
  reportRows,
  sampleVehicle,
  serviceNotes,
  testimonial,
  trustPillars,
  heroSlides,
  proofGallery,
  verifiedReviews
} from "@/app/site-data";

const heroScore = 94;
const reportScore = 84;
const coverageLegend = ["OK", "Minor Issue", "Major Issue"];

function ScoreRing({ label, score, suffix = "%" }) {
  return (
    <div className="score-block">
      {label && <p className="meta-label">{label}</p>}
      <div className="gauge" style={{ "--score-angle": `${score * 3.6}deg` }}>
        <div className="gauge-center">
          <strong>
            {score}
            {suffix}
          </strong>
          <span>{suffix === "%" ? "Verified" : "Score"}</span>
        </div>
      </div>
    </div>
  );
}

export default function HomePage() {
  return (
    <main className="page-shell" id="top">
      <SiteHeader navigation={navigation} />

      {/* ── HERO ── */}
      <section className="hero-section">
        <div className="container hero-grid">
          <div className="hero-copy">
            <div className="hero-price-pill">Start a PDI Inspection for ₹999</div>
            <SectionLabel>Trusted car inspection for every buyer</SectionLabel>
            <h1>Premium Pre-Delivery Inspections for Confident Car Purchases.</h1>
            <p className="hero-text">
              Our certified inspectors carry out a complete 350+ point pre-delivery inspection, capturing every major detail with photo-backed evidence and clear, expert findings.
            </p>
            <p className="hero-text hero-text-extended">
              Get a polished, decision-ready report within 15 minutes — so you can buy with confidence and avoid unexpected issues after handover.
            </p>

            <div className="hero-badge-grid">
              <div className="hero-badge-card">
                <Icon className="button-icon" name="check" />
                350+ checkpoints
              </div>
              <div className="hero-badge-card">
                <Icon className="button-icon" name="rupee" />
                Starts at ₹999
              </div>
            </div>

            <div className="hero-actions">
              <a className="button button-solid shimmer-effect" href="#contact">
                <Icon className="button-icon" name="calendar" />
                Book Your Inspection
              </a>
              <a className="button button-outline" href="#our-process">
                See the Process
              </a>
            </div>

            <div className="hero-trustline">
              <div className="hero-rating">
                <Icon className="trust-icon" name="shield" />
                <span>350+ checkpoints, photo evidence, report in 15 minutes.</span>
              </div>
            </div>
          </div>

          <div className="hero-showcase image-zoom-container" style={{ borderRadius: '28px' }}>
            <Reveal delay={200} effect="fade-up">
              <HeroSlider slides={heroSlides} />
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── CORE BENEFITS ── */}
      <section className="feature-card-section">
        <div className="container">
          <Reveal className="section-heading section-heading-sm">
            <SectionLabel>Core benefits</SectionLabel>
            <h2>Inspection insights built to keep buyers in control.</h2>
          </Reveal>

          <div className="feature-card-grid">
            {heroHighlights.map((item, index) => (
              <Reveal key={item.title} delay={index * 100}>
                <article className="feature-card">
                  <div className="feature-card-icon">
                    <Icon name="check" />
                  </div>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── METRICS STRIP ── */}
      <section className="metrics-strip">
        <div className="container">
          <div className="metrics-shell card">
            <div className="metrics-copy">
              <p className="eyebrow">Trusted by serious buyers</p>
              <h3>Every report is built to help you decide with clarity, not guesswork.</h3>
            </div>
            <Reveal className="metrics-grid" delay={150}>
              {confidenceStats.map((stat) => (
                <div className="metric-chip" key={stat}>
                  <Icon className="metric-chip-icon" name="shield" />
                  <span>{stat}</span>
                </div>
              ))}
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── PROOF SLIDER ── */}
      <section className="section-space">
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
                  <strong>350+</strong>
                  <span>checkpoints</span>
                </div>
                <div>
                  <strong>150+</strong>
                  <span>photo evidence</span>
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
        <div id="proof" className="proof-anchor" />
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
                      <span style={{ fontWeight: 600, color: 'var(--text-main)' }}>Full 350+ point evaluation</span>
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
              <div className="hero-price-pill" style={{ marginBottom: '18px' }}>Start a PDI Inspection for ₹999</div>
              <SectionLabel>Book your inspection</SectionLabel>
              <h2>Simple to book. Easy to understand. Fast to act on.</h2>
              <p>
                Share the car details, preferred slot, and city. The team will guide the next steps and
                send the report in a format you can act on immediately.
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

      <footer className="site-footer">
        <div className="container footer-grid">
          <div className="footer-brand-col">
            <BrandMark />
            <p className="footer-desc">
              Independent, evidence-based car inspections. Know the car, know the truth, and drive with confidence.
            </p>
          </div>
          <div className="footer-links-col">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="#why-checkmate">Why Choose Us</a></li>
              <li><a href="#our-process">How it Works</a></li>
              <li><a href="#inspection-areas">Coverage</a></li>
              <li><a href="#reviews">Reviews</a></li>
            </ul>
          </div>
          <div className="footer-links-col">
            <h4>Contact</h4>
            <ul>
              <li><a href="https://wa.me/917039935536" target="_blank" rel="noopener noreferrer">+91 70399 35536</a></li>
              <li><a href="mailto:checkmate.pdiexxpert@gmail.com">checkmate.pdiexxpert@gmail.com</a></li>
            </ul>
          </div>
          <div className="footer-links-col">
            <h4>Follow Us</h4>
            <ul>
              <li><a href="https://www.instagram.com/Checkmate.pdiexxpert" target="_blank" rel="noopener noreferrer">Instagram</a></li>
              <li><a href="https://www.facebook.com/profile.php?id=61573372995325" target="_blank" rel="noopener noreferrer">Facebook</a></li>
            </ul>
          </div>
        </div>
        <div className="container footer-bottom">
          <p>© {new Date().getFullYear()} CheckMate PDI Exxpert. All rights reserved.</p>
        </div>
      </footer>
    </main>
  );
}
