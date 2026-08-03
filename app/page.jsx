import Image from "next/image";
import { BrandMark } from "@/components/brand-mark";
import { HeroSlider } from "@/components/hero-slider";
import { InspectionSectionCard } from "@/components/inspection-section-card";
import { SectionLabel } from "@/components/section-label";
import { SiteHeader } from "@/components/site-header";
import { StatusPill } from "@/components/status-pill";
import { Icon } from "@/components/icon";
import { ReviewSection } from "@/components/review-section";
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
  reviewItems,
  proofGalleryItems,
  heroSlides
} from "@/app/site-data";

const heroScore = 94;
const reportScore = 84;
const reportPreviewRows = reportRows.slice(0, 5);
const coverageLegend = ["OK", "Minor Issue", "Major Issue"];

function ScoreRing({ label, score, suffix = "%" }) {
  return (
    <div className="score-block">
      <p className="meta-label">{label}</p>
      <div className="gauge" style={{ "--score-angle": `${score * 3.6}deg` }}>
        <div className="gauge-center">
          <strong>
            {score}
            {suffix}
          </strong>
          <span>{suffix === "%" ? "Verified" : "Overall score"}</span>
        </div>
      </div>
    </div>
  );
}

export default function HomePage() {
  return (
    <main className="page-shell" id="top">
      <SiteHeader navigation={navigation} />

      <section className="hero-section">
        <div className="container hero-grid">
          <div className="hero-copy">
            <div className="hero-price-pill">PDI Starts at ₹999* Only</div>
            <SectionLabel>Trusted car inspection for every buyer</SectionLabel>
            <h1>Premium pre-delivery inspections for confident car purchases.</h1>
            <p className="hero-text">
              Our certified inspectors perform a complete 350+ point pre-delivery inspection, capturing every major detail with photo-backed evidence and executive findings.
            </p>
            <p className="hero-text hero-text-extended">
              Get a polished, decision-ready report delivered fast so you can buy with clarity and avoid unexpected issues after handover.
            </p>

            <div className="hero-badge-grid">
              <div className="hero-badge-card">350+ checkpoints</div>
              <div className="hero-badge-card">Same-day report delivery</div>
              <div className="hero-badge-card">Photo-backed findings</div>
            </div>

            <div className="hero-actions">
              <a className="button button-solid" href="#contact">
                <Icon className="button-icon" name="calendar" />
                Book Your Inspection
              </a>
              <a className="button button-outline" href="#our-process">
                See the process
              </a>
            </div>

            <div className="hero-trustline">
              <div className="hero-rating">
                <Icon className="trust-icon" name="shield" />
                <span>350+ checkpoints, photo evidence, and fast report delivery.</span>
              </div>
            </div>
          </div>

          <div className="hero-showcase">
            <HeroSlider slides={heroSlides} />
          </div>
        </div>
      </section>

      <section className="feature-card-section">
        <div className="container">
          <div className="section-heading section-heading-sm">
            <SectionLabel>Core benefits</SectionLabel>
            <h2>Inspection insights built to keep buyers in control.</h2>
          </div>

          <div className="feature-card-grid">
            {heroHighlights.map((item) => (
              <article className="feature-card" key={item.title}>
                <div className="feature-card-icon">
                  <Icon name="check" />
                </div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="metrics-strip">
        <div className="container metrics-shell">
          <div className="metrics-copy">
            <p className="eyebrow">Trusted by serious buyers</p>
            <h3>Every report is built to help you decide with clarity instead of guesswork.</h3>
          </div>
          <div className="metrics-grid">
            {confidenceStats.map((stat) => (
              <div className="metric-chip" key={stat}>
                <Icon className="metric-chip-icon" name="shield" />
                <span>{stat}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-space" id="why-checkmate">
        <div className="container">
          <div className="section-heading section-heading-split">
            <div>
              <SectionLabel>Why choose us</SectionLabel>
              <h2>A sharper way to inspect a car before ownership changes hands.</h2>
            </div>
            <p>
              The goal is simple: turn a stressful handover into a calm, evidence-led decision with
              no guesswork and no hidden surprises.
            </p>
          </div>

          <div className="section-intro-grid">
            <article className="section-intro-card">
              <p className="eyebrow">Why buyers trust the process</p>
              <h3>Independent, detail-led inspections that make the buying decision feel calm and clear.</h3>
              <p>
                We document the car the way a careful buyer would want to see it: plainly,
                honestly, and with proof that is easy to review.
              </p>
              <div className="section-intro-metrics">
                <div>
                  <strong>84</strong>
                  <span>structured checklist</span>
                </div>
                <div>
                  <strong>15+</strong>
                  <span>years of experience</span>
                </div>
                <div>
                  <strong>100%</strong>
                  <span>photo-backed findings</span>
                </div>
              </div>
            </article>
            <div className="section-intro-stack">
              <article className="intro-highlight-card">
                <Icon className="pillar-icon" name="shield" />
                <h3>Built for real negotiation</h3>
                <p>Use the report to negotiate repairs, ask for clarity, or walk away with confidence.</p>
              </article>
              <article className="intro-highlight-card">
                <Icon className="pillar-icon" name="calendar" />
                <h3>Fast delivery when timing matters</h3>
                <p>Get decision-ready documentation quickly so the deal does not lose momentum.</p>
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

      <section className="section-band" id="our-process">
        <div className="container">
          <div className="section-heading">
            <SectionLabel>How it works</SectionLabel>
            <h2>A Simple Process Built for Fast & Confident Buying Decisions</h2>
            <p>
              The process is straightforward, practical, and designed to give you clarity before a
              payment is made.
            </p>
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

      <section className="section-space section-space-tight" id="proof">
        <div className="container">
          <div className="section-heading section-heading-split">
            <div>
              <SectionLabel>Real proof from real inspections</SectionLabel>
              <h2>Every issue is documented clearly so you can act with confidence.</h2>
            </div>
            <p>
              These are the kinds of details buyers want to see before moving forward: clear,
              honest, and easy to share.
            </p>
          </div>

          <div className="proof-grid">
            {proofGalleryItems.map((item) => (
              <article className="proof-card" key={item.title}>
                <div className="proof-image-wrap">
                  <Image alt={item.title} fill sizes="(max-width: 720px) 100vw, 33vw" src={item.image} />
                </div>
                <div className="proof-card-body">
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-space" id="inspection-areas">
        <div className="container">
          <div className="section-heading">
            <SectionLabel>Complete inspection coverage</SectionLabel>
            <h2>Every major area is checked, graded, and explained.</h2>
            <p>
              Every major area is checked with a structured flow, so the report is both easy to scan
              and thorough enough to trust.
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
              <div className="report-card">
                <div className="report-topline">
                  <div>
                    <p className="eyebrow">Sample report</p>
                    <h3>{sampleVehicle.name}</h3>
                    <p className="report-subtitle">{sampleVehicle.subtitle}</p>
                  </div>
                  <StatusPill status="Good" />
                </div>

                <div className="report-vehicle">
                  <Image
                    alt="White SUV used as the example vehicle in the sample report."
                    className="report-car"
                    height={360}
                    src="/assets/report-car.png"
                    width={520}
                  />

                  <div className="report-score-panel">
                    <ScoreRing label="Overall condition" score={reportScore} suffix="" />
                    <p className="report-score-copy">Good condition with a few negotiable issues.</p>
                  </div>
                </div>

                <div className="report-meta-grid">
                  {reportMeta.map((item) => (
                    <div key={item.label}>
                      <span>{item.label}</span>
                      <strong>{item.value}</strong>
                    </div>
                  ))}
                </div>

                <div className="report-rows">
                  {reportRows.map((row) => (
                    <div className="report-summary-row" key={row.label}>
                      <span>{row.label}</span>
                      <span>{row.score}</span>
                      <StatusPill status={row.status} />
                    </div>
                  ))}
                </div>

                <div className="evidence-list">
                  <p className="meta-label">Reported issues with photo support</p>
                  {evidenceItems.map((item) => (
                    <div className="evidence-row" key={item.label}>
                      <StatusPill status={item.status} />
                      <span>{item.label}</span>
                    </div>
                  ))}
                </div>

                <blockquote className="report-remark">{reportRemark}</blockquote>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <section className="section-band" id="trust">
        <div className="container professional-section">
          <div className="professional-copy">
            <SectionLabel>Professional inspectors</SectionLabel>
            <h2>Real people. Real evidence. A report you can actually act on.</h2>
            <p>
              The inspection is documented with the seriousness a real purchase deserves, not a quick
              walkaround done for appearances.
            </p>

            <div className="professional-grid">
              {professionalPoints.map((point) => (
                <article className="professional-card" key={point.title}>
                  <h3>{point.title}</h3>
                  <p>{point.text}</p>
                </article>
              ))}
            </div>

            <blockquote className="testimonial-card">
              <Icon className="testimonial-icon" name="star" />
              <p>{testimonial.quote}</p>
              <strong>{testimonial.name}</strong>
              <span>{testimonial.location}</span>
            </blockquote>
          </div>

          <div className="professional-visual">
            <Image
              alt="Vehicle inspector reviewing a car and documenting findings on a tablet."
              className="inspector-image"
              height={1040}
              src="/assets/inspector-team.png"
              width={880}
            />
            <div className="visual-note">
              <strong>Built for buyers who need clarity fast.</strong>
              <p>Ideal for pre-purchase decisions, remote buyers, and negotiation support.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-space" id="reviews">
        <div className="container">
          <div className="section-heading">
            <SectionLabel>Buyer reviews</SectionLabel>
            <h2>Real inspection reports and proof from customers who avoided hidden risks.</h2>
            <p>
              Each review includes the car model, dealer city, supporting photos, the problem found,
              estimated repair cost, and the value saved by making a smart decision before delivery.
            </p>
          </div>
          <ReviewSection initialReviews={[]} />
        </div>
      </section>

      <section className="section-space section-space-tight" id="contact">
        <div className="container cta-card">
          <div className="cta-copy">
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
                  <a className="contact-row" href={item.href} key={item.label}>
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
      </section>

      <footer className="site-footer">
        <div className="container footer-shell">
          <div>
            <BrandMark />
          </div>
          <p>Know the car. Know the truth. Drive with confidence.</p>
        </div>
      </footer>
    </main>
  );
}
