import { SiteHeader } from "@/components/site-header";
import { SectionLabel } from "@/components/section-label";
import { Icon } from "@/components/icon";
import { navigation, corridorPages, verifiedReviews } from "@/app/site-data";
import { ReviewSection } from "@/components/review-section";

export const metadata = {
  title: "Car PDI Inspection Kalyan & Dombivli | Pre-Delivery Car Inspection | CheckMate PDI",
  description: "Car PDI & pre-purchase inspection in Kalyan, Dombivli, Thakurli & Diva. Certified inspectors check 350+ points before you sign. Starting ₹999."
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "AutomotiveBusiness",
  "name": "CheckMate PDI Exxpert - Kalyan & Dombivli Corridor",
  "url": "https://checkmatepdi.com/car-inspection-kalyan-dombivli",
  "telephone": "+917039935536",
  "priceRange": "₹999 - ₹4999",
  "description": "Certified on-site car PDI and used car inspection in Kalyan, Dombivli, Thakurli, Diva, and Kopar.",
  "areaServed": [
    "Kalyan East", "Kalyan West", "Dombivli East", "Dombivli West", "Thakurli", "Diva", "Kopar"
  ]
};

export default function KalyanDombivliCorridorPage() {
  const areas = [
    "Kalyan West", "Kalyan East", "Dombivli East", "Dombivli West",
    "Thakurli", "Diva Junction", "Kopar"
  ];

  return (
    <main className="page-shell" id="top">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <SiteHeader navigation={navigation} />

      {/* Hero */}
      <section className="hero-section">
        <div className="container hero-grid">
          <div className="hero-copy">
            <div className="hero-price-pill">Kalyan–Dombivli Car PDI • Starts at ₹999</div>
            <SectionLabel>Kalyan to Dombivli Belt</SectionLabel>
            <h1>Car PDI Inspection in Kalyan, Dombivli & Thakurli.</h1>
            <p className="hero-text">
              Purchasing a car in Kalyan, Dombivli, Thakurli, or Diva? Protect your investment with a professional 350+ point pre-delivery inspection before paying the final installment or taking handover.
            </p>
            <p className="hero-text hero-text-extended">
              Our field inspectors travel directly to showroom yards and private seller locations across the Kalyan-Dombivli belt, providing an evidence-backed digital report within 15 minutes.
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
              <a className="button button-solid shimmer-effect" href="https://wa.me/917039935536?text=Hi%2C%20I%20want%20to%20book%20a%20PDI%20inspection%20in%20Kalyan-Dombivli." target="_blank" rel="noopener noreferrer">
                <Icon className="button-icon" name="chat" />
                Book Kalyan–Dombivli Inspection
              </a>
              <a className="button button-outline" href="/">
                View Main Site
              </a>
            </div>
          </div>

          <div className="hero-showcase" style={{ background: 'var(--surface-card)', padding: '32px', borderRadius: '28px', border: '1px solid var(--color-border)' }}>
            <h3 style={{ fontSize: '1.4rem', marginBottom: '16px' }}>Areas Covered (Kalyan & Dombivli)</h3>
            <p style={{ color: 'var(--text-body)', lineHeight: '1.6', marginBottom: '24px' }}>
              We provide prompt, on-demand inspection across dealership stockyards and private seller points:
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '12px' }}>
              {areas.map((area) => (
                <div key={area} style={{ display: 'flex', alignItems: 'center', gap: '8px', background: 'var(--surface-soft)', padding: '10px 14px', borderRadius: '12px', fontSize: '0.92rem', fontWeight: 600 }}>
                  <Icon name="check" style={{ color: 'var(--green-600)', flexShrink: 0 }} />
                  <span>{area}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Corridor Specific Reasons */}
      <section className="section-space">
        <div className="container">
          <div className="section-heading">
            <SectionLabel>Why Kalyan–Dombivli Buyers Trust CheckMate</SectionLabel>
            <h2>3 Key Protections for Central Corridor Buyers</h2>
          </div>
          <div className="feature-card-grid">
            <article className="feature-card">
              <div className="feature-card-icon"><Icon name="shield" /></div>
              <h3>Pre-Owned Car Odometer & Condition Audit</h3>
              <p>Buying a used car in Kalyan or Dombivli? We evaluate engine wear, transmission shifts, suspension bushings, and verify physical wear against odometer readings.</p>
            </article>
            <article className="feature-card">
              <div className="feature-card-icon"><Icon name="shield" /></div>
              <h3>Underbody & Subframe Damage Check</h3>
              <p>Suburban road conditions can impact lower chassis components. We perform full underbody inspections checking silencer corrosion, oil pan dents, and steering rack boot condition.</p>
            </article>
            <article className="feature-card">
              <div className="feature-card-icon"><Icon name="shield" /></div>
              <h3>Fast On-Yard Appointment Booking</h3>
              <p>Certified inspectors visit Kalyan and Dombivli stockyards at short notice, ensuring your delivery date isn't delayed while protecting you from hidden risks.</p>
            </article>
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="section-space">
        <div className="container">
          <div className="section-heading">
            <SectionLabel>Verified Buyer Reviews</SectionLabel>
            <h2>Real Protection for Real Car Buyers</h2>
          </div>
          <ReviewSection reviews={verifiedReviews} />
        </div>
      </section>

      {/* Corridor Links */}
      <section className="section-band">
        <div className="container">
          <div className="section-heading">
            <SectionLabel>Explore Other Inspection Corridors</SectionLabel>
            <h2>Coverage Across Mumbai Western Line & Thane Belt</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '18px' }}>
            {corridorPages.filter(c => c.href !== "/car-inspection-kalyan-dombivli").map(c => (
              <a key={c.href} href={c.href} className="feature-card" style={{ textDecoration: 'none', display: 'block' }}>
                <h4 style={{ fontSize: '1.1rem', color: 'var(--green-700)', marginBottom: '8px' }}>{c.title}</h4>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-body)', margin: 0 }}>{c.desc}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      <footer className="site-footer">
        <div className="container footer-bottom">
          <p>© {new Date().getFullYear()} CheckMate PDI Exxpert. All rights reserved.</p>
        </div>
      </footer>
    </main>
  );
}
