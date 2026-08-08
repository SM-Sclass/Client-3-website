import Image from "next/image";
import { SiteHeader } from "@/components/site-header";
import { SectionLabel } from "@/components/section-label";
import { Icon } from "@/components/icon";
import { BrandMark } from "@/components/brand-mark";
import { navigation, corridorPages, verifiedReviews } from "@/app/site-data";
import { ReviewSection } from "@/components/review-section";

export const metadata = {
  title: "Car PDI Inspection South Mumbai | Pre-Delivery Checks Churchgate to Dadar | CheckMate PDI",
  description: "Expert car PDI & pre-purchase inspection in South Mumbai (Churchgate, Marine Lines, Lower Parel, Dadar). 350+ point check & 15-min report. Starting ₹999."
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "AutomotiveBusiness",
  "name": "CheckMate PDI Exxpert - South Mumbai Corridor",
  "url": "https://checkmatepdi.com/car-inspection-south-mumbai",
  "telephone": "+917039935536",
  "priceRange": "₹999 - ₹4999",
  "description": "On-site car PDI & pre-purchase inspection across South Mumbai including Churchgate, Lower Parel, Prabhadevi, Dadar, and Mahim.",
  "areaServed": [
    "Churchgate", "Marine Lines", "Charni Road", "Grant Road", "Mumbai Central",
    "Mahalaxmi", "Lower Parel", "Prabhadevi", "Dadar", "Mahim"
  ]
};

export default function SouthMumbaiCorridorPage() {
  const areas = [
    "Churchgate", "Marine Lines", "Charni Road", "Grant Road", "Mumbai Central",
    "Mahalaxmi", "Lower Parel", "Prabhadevi", "Dadar", "Mahim"
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
            <div className="hero-price-pill">South Mumbai Car Inspection • Starts at ₹999</div>
            <SectionLabel>South Mumbai PDI Coverage</SectionLabel>
            <h1>Car PDI Inspection in South Mumbai — Know Before You Sign.</h1>
            <p className="hero-text">
              Buying a new or premium used car around Churchgate, Lower Parel, or Dadar? Our certified inspectors visit dealership stockyards and private sellers across South Mumbai to conduct a complete 350+ point pre-delivery inspection before you pay.
            </p>
            <p className="hero-text hero-text-extended">
              Get an independent, photo-backed evidence report delivered to your phone in 15 minutes — giving you total confidence or real price negotiation power.
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
              <a className="button button-solid shimmer-effect" href="https://wa.me/917039935536?text=Hi%2C%20I%20want%20to%20book%20a%20PDI%20inspection%20in%20South%20Mumbai." target="_blank" rel="noopener noreferrer">
                <Icon className="button-icon" name="chat" />
                Book South Mumbai Inspection
              </a>
              <a className="button button-outline" href="/">
                View Main Site
              </a>
            </div>
          </div>

          <div className="hero-showcase" style={{ background: 'var(--surface-card)', padding: '32px', borderRadius: '28px', border: '1px solid var(--color-border)' }}>
            <h3 style={{ fontSize: '1.4rem', marginBottom: '16px' }}>Areas Covered in South Mumbai</h3>
            <p style={{ color: 'var(--text-body)', lineHeight: '1.6', marginBottom: '24px' }}>
              We provide prompt, on-site PDI services at all major showroom yards and private seller locations across South Mumbai:
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
            <SectionLabel>Why South Mumbai Buyers Choose CheckMate</SectionLabel>
            <h2>3 Key Reasons South Mumbai Car Buyers Need Independent PDI</h2>
          </div>
          <div className="feature-card-grid">
            <article className="feature-card">
              <div className="feature-card-icon"><Icon name="shield" /></div>
              <h3>Dealership Stockyard & Transit Audits</h3>
              <p>Showroom stockyards around Worli, Mahalaxmi, and Lower Parel often stack vehicles in tight spaces. We inspect for transit scrapes, bumper repairs, and repainted door panels before handover.</p>
            </article>
            <article className="feature-card">
              <div className="feature-card-icon"><Icon name="shield" /></div>
              <h3>Coastal Atmosphere Corrosion Checks</h3>
              <p>Vehicles along Marine Drive and Nariman Point are exposed to salty sea air. We perform thorough underbody checks for early surface rust, brake disc pitting, and silencer wear.</p>
            </article>
            <article className="feature-card">
              <div className="feature-card-icon"><Icon name="shield" /></div>
              <h3>Luxury & Tech Variant Testing</h3>
              <p>South Mumbai buyers frequently opt for top-tier variants. We test all electronic modules, panoramic sunroof drains, ADAS sensors, and infotainment features.</p>
            </article>
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="section-space">
        <div className="container">
          <div className="section-heading">
            <SectionLabel>Verified Buyer Reviews</SectionLabel>
            <h2>See What Other Buyers Saved Before Handover</h2>
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
            {corridorPages.filter(c => c.href !== "/car-inspection-south-mumbai").map(c => (
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
