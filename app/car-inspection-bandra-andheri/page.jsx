import { SiteHeader } from "@/components/site-header";
import { SectionLabel } from "@/components/section-label";
import { Icon } from "@/components/icon";
import { navigation, corridorPages, verifiedReviews } from "@/app/site-data";
import { ReviewSection } from "@/components/review-section";

export const metadata = {
  title: "Car PDI Inspection Bandra to Andheri | Pre-Delivery & Used Car Checks | CheckMate PDI",
  description: "Independent car PDI inspection in Bandra, Khar, Santacruz, Vile Parle & Andheri. Unbiased 350+ point inspection & photo evidence. Starting ₹999."
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "AutomotiveBusiness",
  "name": "CheckMate PDI Exxpert - Bandra to Andheri Corridor",
  "url": "https://checkmatepdi.com/car-inspection-bandra-andheri",
  "telephone": "+917039935536",
  "priceRange": "₹999 - ₹4999",
  "description": "On-site car PDI & pre-purchase inspection from Bandra to Andheri including Khar, Santacruz, Vile Parle, and Jogeshwari.",
  "areaServed": [
    "Bandra", "Khar", "Santacruz", "Vile Parle", "Andheri", "Jogeshwari"
  ]
};

export default function BandraAndheriCorridorPage() {
  const areas = [
    "Bandra West", "Bandra East", "Khar West", "Santacruz East/West",
    "Vile Parle", "Andheri West", "Andheri East", "Jogeshwari"
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
            <div className="hero-price-pill">Bandra–Andheri Car Inspection • Starts at ₹999</div>
            <SectionLabel>Bandra to Andheri Coverage</SectionLabel>
            <h1>Car PDI & Used Car Inspection in Bandra, Vile Parle & Andheri.</h1>
            <p className="hero-text">
              Taking delivery of a new car or evaluating a pre-owned vehicle in Bandra, Khar, Santacruz, or Andheri? Our certified inspectors reach showroom stockyards and seller locations quickly to conduct a rigorous 350+ point inspection.
            </p>
            <p className="hero-text hero-text-extended">
              Get detailed photo proof of paint depth, panel alignment, engine health, and odometer integrity in a digital report delivered within 15 minutes.
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
              <a className="button button-solid shimmer-effect" href="https://wa.me/917039935536?text=Hi%2C%20I%20want%20to%20book%20a%20PDI%20inspection%20in%20Bandra-Andheri." target="_blank" rel="noopener noreferrer">
                <Icon className="button-icon" name="chat" />
                Book Bandra–Andheri Inspection
              </a>
              <a className="button button-outline" href="/">
                View Main Site
              </a>
            </div>
          </div>

          <div className="hero-showcase" style={{ background: 'var(--surface-card)', padding: '32px', borderRadius: '28px', border: '1px solid var(--color-border)' }}>
            <h3 style={{ fontSize: '1.4rem', marginBottom: '16px' }}>Areas Covered (Bandra to Andheri)</h3>
            <p style={{ color: 'var(--text-body)', lineHeight: '1.6', marginBottom: '24px' }}>
              Our field team provides fast, on-site inspection across major automotive hubs along SV Road, Link Road, and WEH:
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
            <SectionLabel>Why Bandra–Andheri Buyers Need PDI</SectionLabel>
            <h2>3 Essential Checks for Western Suburb Car Buyers</h2>
          </div>
          <div className="feature-card-grid">
            <article className="feature-card">
              <div className="feature-card-icon"><Icon name="shield" /></div>
              <h3>Repaint & Accident Repair Detection</h3>
              <p>With high volumes of used car trades along Link Road and SV Road, our digital coating thickness gauges identify hidden resprays, filler work, and replaced panels instantly.</p>
            </article>
            <article className="feature-card">
              <div className="feature-card-icon"><Icon name="shield" /></div>
              <h3>Dense City Traffic Wear Checks</h3>
              <p>Heavy traffic in Bandra and Andheri strains clutches and cooling systems. We inspect radiator performance, fluid health, and transmission smooth-shifting behavior.</p>
            </article>
            <article className="feature-card">
              <div className="feature-card-icon"><Icon name="shield" /></div>
              <h3>Pre-Registration Stockyard Verification</h3>
              <p>Dealership yards around MIDC Andheri and Kanjurmarg stock hundreds of cars. We verify your specific VIN before RTO registration so you never accept a damaged car.</p>
            </article>
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="section-space">
        <div className="container">
          <div className="section-heading">
            <SectionLabel>Verified Buyer Reviews</SectionLabel>
            <h2>Real Inspection Proof from Buyers Near You</h2>
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
            {corridorPages.filter(c => c.href !== "/car-inspection-bandra-andheri").map(c => (
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
