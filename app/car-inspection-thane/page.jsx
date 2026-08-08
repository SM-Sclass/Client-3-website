import { SiteHeader } from "@/components/site-header";
import { SectionLabel } from "@/components/section-label";
import { Icon } from "@/components/icon";
import { navigation, corridorPages, verifiedReviews, inspectionSections } from "@/app/site-data";
import { ReviewSection } from "@/components/review-section";
import { InspectionSectionCard } from "@/components/inspection-section-card";

export const metadata = {
  title: "Car PDI Inspection Thane, Kalwa & Mumbra | On-Site Pre-Delivery Checks | CheckMate PDI",
  description: "Thane's trusted independent car PDI expert. 350+ point inspection for new & used cars across Thane West, Ghodbunder Rd, Kalwa & Mumbra. From ₹999."
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "AutomotiveBusiness",
  "name": "CheckMate PDI Exxpert - Thane Core Corridor",
  "url": "https://checkmatepdi.com/car-inspection-thane",
  "telephone": "+917039935536",
  "priceRange": "₹999 - ₹4999",
  "description": "Thane's leading independent on-site car PDI & pre-purchase inspection service covering Thane West, Ghodbunder Road, Majiwada, Kalwa, and Mumbra.",
  "areaServed": [
    "Thane West", "Ghodbunder Road", "Majiwada", "Naupada", "Wagle Estate",
    "Vartak Nagar", "Kalwa", "Mumbra"
  ]
};

export default function ThaneCorridorPage() {
  const areas = [
    "Thane West (Majiwada, Ghodbunder Rd)", "Naupada & Charai",
    "Wagle Industrial Estate", "Vartak Nagar & Pokhran Rd",
    "Kalwa East/West", "Mumbra & Kausa"
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
            <div className="hero-price-pill">Thane's #1 Car PDI Service • Starts at ₹999</div>
            <SectionLabel>Thane Core Corridor</SectionLabel>
            <h1>Independent Car PDI Inspection in Thane, Kalwa & Mumbra.</h1>
            <p className="hero-text">
              CheckMate PDI Exxpert is based in Thane, providing fast, unbiased pre-delivery and used car inspections across Ghodbunder Road, Majiwada, Naupada, Wagle Estate, Kalwa, and Mumbra.
            </p>
            <p className="hero-text hero-text-extended">
              Whether you are buying a brand new SUV at a Ghodbunder showroom or evaluating a pre-owned sedan in Kalwa, our certified field inspectors perform an exhaustive 350+ point audit with high-resolution photo proof delivered in 15 minutes.
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
              <a className="button button-solid shimmer-effect" href="https://wa.me/917039935536?text=Hi%2C%20I%20want%20to%20book%20a%20PDI%20inspection%20in%20Thane." target="_blank" rel="noopener noreferrer">
                <Icon className="button-icon" name="chat" />
                Book Thane Inspection
              </a>
              <a className="button button-outline" href="/">
                View Main Site
              </a>
            </div>
          </div>

          <div className="hero-showcase" style={{ background: 'var(--surface-card)', padding: '32px', borderRadius: '28px', border: '1px solid var(--color-border)' }}>
            <h3 style={{ fontSize: '1.4rem', marginBottom: '16px' }}>Thane Corridor Hubs</h3>
            <p style={{ color: 'var(--text-body)', lineHeight: '1.6', marginBottom: '24px' }}>
              We visit all major brand stockyards along Ghodbunder Road, Pokhran Road, Kalwa, and Mumbra:
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(1, 1fr)', gap: '12px' }}>
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

      {/* Deep Dive Reasons for Thane */}
      <section className="section-space">
        <div className="container">
          <div className="section-heading">
            <SectionLabel>Why Thane Buyers Depend on CheckMate</SectionLabel>
            <h2>Thane's Most Comprehensive On-Site Inspection Standard</h2>
          </div>
          <div className="feature-card-grid">
            <article className="feature-card">
              <div className="feature-card-icon"><Icon name="shield" /></div>
              <h3>Ghodbunder Showroom Yard Audits</h3>
              <p>Ghodbunder Road hosts Thane's largest dealership hub. Our inspectors arrive directly at dealer stockyards to audit factory paint work, glass manufacturing codes, and transit condition before you register the vehicle.</p>
            </article>
            <article className="feature-card">
              <div className="feature-card-icon"><Icon name="shield" /></div>
              <h3>Engine Bay & Fluid Leak Tracing</h3>
              <p>We inspect oil pan gaskets, coolant reservoirs, brake fluid moisture levels, and battery health to ensure no pre-existing leaks or electrical faults are hidden under engine covers.</p>
            </article>
            <article className="feature-card">
              <div className="feature-card-icon"><Icon name="shield" /></div>
              <h3>Fast 15-Minute Digital Delivery</h3>
              <p>Our standardized inspection process allows us to generate a full PDF report with photo evidence right after physical checking, allowing you to finalize deal terms on the spot.</p>
            </article>
          </div>
        </div>
      </section>

      {/* Checklist Preview */}
      <section className="section-band">
        <div className="container">
          <div className="section-heading">
            <SectionLabel>Full Checklist Overview</SectionLabel>
            <h2>What We Inspect During a Thane PDI</h2>
          </div>
          <div className="inspection-grid">
            {inspectionSections.slice(0, 4).map((section) => (
              <InspectionSectionCard key={section.number} section={section} />
            ))}
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="section-space">
        <div className="container">
          <div className="section-heading">
            <SectionLabel>Verified Buyer Reviews</SectionLabel>
            <h2>Real Feedback from Thane & Kalwa Car Owners</h2>
          </div>
          <ReviewSection reviews={verifiedReviews} />
        </div>
      </section>

      {/* Corridor Links */}
      <section className="section-space">
        <div className="container">
          <div className="section-heading">
            <SectionLabel>Explore Other Inspection Corridors</SectionLabel>
            <h2>Coverage Across Mumbai Western Line & Thane Belt</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '18px' }}>
            {corridorPages.filter(c => c.href !== "/car-inspection-thane").map(c => (
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
