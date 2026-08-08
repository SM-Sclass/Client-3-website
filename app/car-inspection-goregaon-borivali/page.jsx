import { SiteHeader } from "@/components/site-header";
import { SectionLabel } from "@/components/section-label";
import { Icon } from "@/components/icon";
import { navigation, corridorPages, verifiedReviews } from "@/app/site-data";
import { ReviewSection } from "@/components/review-section";

export const metadata = {
  title: "Car PDI Inspection Goregaon to Borivali | Pre-Purchase Car Checks | CheckMate PDI",
  description: "Car PDI and pre-delivery inspection in Goregaon, Malad, Kandivali & Borivali. 350+ point checklist, paint & battery test, report in 15 mins. From ₹999."
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "AutomotiveBusiness",
  "name": "CheckMate PDI Exxpert - Goregaon to Borivali Corridor",
  "url": "https://checkmatepdi.com/car-inspection-goregaon-borivali",
  "telephone": "+917039935536",
  "priceRange": "₹999 - ₹4999",
  "description": "Independent car PDI & pre-purchase inspection in Goregaon, Malad, Kandivali, Borivali, and Dahisar.",
  "areaServed": [
    "Goregaon", "Malad", "Kandivali", "Borivali", "Dahisar"
  ]
};

export default function GoregaonBorivaliCorridorPage() {
  const areas = [
    "Goregaon East/West", "Malad East/West", "Mindspace Malad",
    "Kandivali East/West", "Borivali West", "Borivali East", "Dahisar"
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
            <div className="hero-price-pill">Goregaon–Borivali Car PDI • Starts at ₹999</div>
            <SectionLabel>Goregaon to Borivali Belt</SectionLabel>
            <h1>Car PDI & Used Car Inspection in Goregaon, Malad & Borivali.</h1>
            <p className="hero-text">
              Buying a vehicle in Goregaon, Malad, Kandivali, or Borivali? Don't rely solely on showroom promises or dealer claims. Our independent inspectors check 350+ points across paint quality, mechanical safety, electrical systems, and cabin condition.
            </p>
            <p className="hero-text hero-text-extended">
              We inspect cars on-site at dealer stockyards, pre-owned car outlets, and private locations, delivering photo proof in 15 minutes.
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
              <a className="button button-solid shimmer-effect" href="https://wa.me/917039935536?text=Hi%2C%20I%20want%20to%20book%20a%20PDI%20inspection%20in%20Goregaon-Borivali." target="_blank" rel="noopener noreferrer">
                <Icon className="button-icon" name="chat" />
                Book Goregaon–Borivali Inspection
              </a>
              <a className="button button-outline" href="/">
                View Main Site
              </a>
            </div>
          </div>

          <div className="hero-showcase" style={{ background: 'var(--surface-card)', padding: '32px', borderRadius: '28px', border: '1px solid var(--color-border)' }}>
            <h3 style={{ fontSize: '1.4rem', marginBottom: '16px' }}>Areas Covered (Goregaon to Borivali)</h3>
            <p style={{ color: 'var(--text-body)', lineHeight: '1.6', marginBottom: '24px' }}>
              Our certified inspectors cover all major stockyards, Link Road auto hubs, and suburban neighborhoods:
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
            <SectionLabel>Why Goregaon–Borivali Buyers Trust CheckMate</SectionLabel>
            <h2>3 Key Benefits for Suburban Car Buyers</h2>
          </div>
          <div className="feature-card-grid">
            <article className="feature-card">
              <div className="feature-card-icon"><Icon name="shield" /></div>
              <h3>Water Logging & Flood Damage Inspection</h3>
              <p>Low-lying areas around Malad subway and SV Road experience seasonal water accumulation. We perform deep under-dash inspections, checking for dampness, rust, and ECU corrosion.</p>
            </article>
            <article className="feature-card">
              <div className="feature-card-icon"><Icon name="shield" /></div>
              <h3>Major Showroom Yard Pre-Registration Checks</h3>
              <p>With massive auto stockyards in Goregaon East and Dahisar, we inspect vehicles right after unloading to catch factory paint blemishes, transport scratches, and glass chips.</p>
            </article>
            <article className="feature-card">
              <div className="feature-card-icon"><Icon name="shield" /></div>
              <h3>Negotiation Leverage for Used Car Buyers</h3>
              <p>Evaluating a pre-owned car in Borivali or Kandivali? Our clear, photo-backed defect report gives you objective facts to lower the asking price or request repairs.</p>
            </article>
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="section-space">
        <div className="container">
          <div className="section-heading">
            <SectionLabel>Verified Buyer Reviews</SectionLabel>
            <h2>Real Savings Reported by Local Car Buyers</h2>
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
            {corridorPages.filter(c => c.href !== "/car-inspection-goregaon-borivali").map(c => (
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
