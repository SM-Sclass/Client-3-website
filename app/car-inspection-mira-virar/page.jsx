import { SiteHeader } from "@/components/site-header";
import { SectionLabel } from "@/components/section-label";
import { Icon } from "@/components/icon";
import { navigation, corridorPages, verifiedReviews } from "@/app/site-data";
import { ReviewSection } from "@/components/review-section";

export const metadata = {
  title: "Car PDI Inspection Mira Road to Virar | Vasai, Bhayandar & Virar PDI | CheckMate PDI",
  description: "Professional car PDI inspection in Mira Road, Bhayandar, Vasai & Virar. Detect flood damage, repaint & defects before delivery. Starting ₹999."
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "AutomotiveBusiness",
  "name": "CheckMate PDI Exxpert - Mira Road to Virar Corridor",
  "url": "https://checkmatepdi.com/car-inspection-mira-virar",
  "telephone": "+917039935536",
  "priceRange": "₹999 - ₹4999",
  "description": "Professional on-site car PDI & pre-purchase inspection in Mira Road, Bhayandar, Naigaon, Vasai, Nallasopara, and Virar.",
  "areaServed": [
    "Mira Road", "Bhayandar", "Naigaon", "Vasai Road", "Nallasopara", "Virar"
  ]
};

export default function MiraVirarCorridorPage() {
  const areas = [
    "Mira Road East/West", "Bhayandar East/West", "Naigaon",
    "Vasai Road East/West", "Nallasopara", "Virar East/West"
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
            <div className="hero-price-pill">Mira Road to Virar Car Inspection • Starts at ₹999</div>
            <SectionLabel>Mira Road to Virar Corridor</SectionLabel>
            <h1>Car PDI Inspection in Mira Road, Bhayandar, Vasai & Virar.</h1>
            <p className="hero-text">
              Buying a car across the Mira-Bhayandar or Vasai-Virar region? Don't accept delivery until an independent expert reviews the vehicle. Our mobile inspectors carry out a thorough 350+ point evaluation at dealership yards and private locations.
            </p>
            <p className="hero-text hero-text-extended">
              We check paint coating thickness, engine fluid levels, tyre manufacturing dates, interior electricals, and VIN numbers — delivering a decision-ready report in 15 minutes.
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
              <a className="button button-solid shimmer-effect" href="https://wa.me/917039935536?text=Hi%2C%20I%20want%20to%20book%20a%20PDI%20inspection%20in%20Mira-Virar." target="_blank" rel="noopener noreferrer">
                <Icon className="button-icon" name="chat" />
                Book Mira Road–Virar Inspection
              </a>
              <a className="button button-outline" href="/">
                View Main Site
              </a>
            </div>
          </div>

          <div className="hero-showcase" style={{ background: 'var(--surface-card)', padding: '32px', borderRadius: '28px', border: '1px solid var(--color-border)' }}>
            <h3 style={{ fontSize: '1.4rem', marginBottom: '16px' }}>Areas Covered (Mira Road to Virar)</h3>
            <p style={{ color: 'var(--text-body)', lineHeight: '1.6', marginBottom: '24px' }}>
              We visit all stockyards, showroom delivery centers, and private sellers across the outer Western suburb belt:
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
            <SectionLabel>Why Mira–Virar Car Buyers Need PDI</SectionLabel>
            <h2>3 Essential Protection Points for Local Buyers</h2>
          </div>
          <div className="feature-card-grid">
            <article className="feature-card">
              <div className="feature-card-icon"><Icon name="shield" /></div>
              <h3>Open Yard Storage Inspection</h3>
              <p>Dealership stockyards in Vasai and Virar often store vehicles in open fields exposed to sun, dust, and rain. We inspect for rubber seal cracking, battery drain, and rodents damaging wiring.</p>
            </article>
            <article className="feature-card">
              <div className="feature-card-icon"><Icon name="shield" /></div>
              <h3>Long-Distance Transit Strain Audits</h3>
              <p>Vehicles transported to outer suburban yards travel farther on car trailers. We verify odometer readings, tyre manufacturing dates, and suspension trueness before handover.</p>
            </article>
            <article className="feature-card">
              <div className="feature-card-icon"><Icon name="shield" /></div>
              <h3>Affordable Peace of Mind from ₹999</h3>
              <p>Our transparent pricing ensures every buyer in Mira Road, Bhayandar, or Vasai gets expert third-party inspection without heavy costs.</p>
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
            {corridorPages.filter(c => c.href !== "/car-inspection-mira-virar").map(c => (
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
