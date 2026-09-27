import { BrandMark } from "@/components/brand-mark";
import { contactConfig, openingHours, serviceFacts } from "@/app/data/business";
import { serviceAreas, zones } from "@/app/data/locations";
import { services } from "@/app/data/services";

const popularAreaSlugs = [
  "car-inspection-dadar",
  "car-inspection-andheri",
  "car-inspection-borivali",
  "car-inspection-thane-west",
  "car-inspection-virar",
  "car-inspection-kalyan",
  "car-inspection-vashi",
  "car-inspection-panvel",
  "car-inspection-churchgate",
  "car-inspection-malad",
  "car-inspection-dombivli",
  "car-inspection-palghar"
];

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div className="footer-brand-col">
          <BrandMark />
          <p className="footer-desc">
            Independent, evidence-based car inspections across Churchgate to Virar, Palghar, Navi
            Mumbai, Thane and Kalyan. {serviceFacts.checklistPointsLabel} checklist across{" "}
            {serviceFacts.checklistSections} sections, photo evidence for every finding, report
            within {serviceFacts.reportDeliveryMinutes} minutes.
          </p>
          <p className="footer-desc">
            Phone and WhatsApp:{" "}
            <a href={contactConfig.whatsapp} target="_blank" rel="noopener noreferrer">
              {contactConfig.phoneDisplay}
            </a>
            <br />
            Email:{" "}
            <a href={`mailto:${contactConfig.email}`}>{contactConfig.email}</a>
            <br />
            {openingHours.shortLabel}
          </p>
        </div>

        <div className="footer-links-col">
          <h4>Services</h4>
          <ul>
            {services.map((service) => (
              <li key={service.slug}>
                <a href={`/services/${service.slug}`}>{service.navLabel}</a>
              </li>
            ))}
            <li>
              <a href="/sample-report">Sample Report</a>
            </li>
          </ul>
        </div>

        <div className="footer-links-col">
          <h4>Coverage Zones</h4>
          <ul>
            {zones.map((zone) => (
              <li key={zone.id}>
                <a href={`/service-areas#${zone.id}`}>{zone.shortName}</a>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer-links-col">
          <h4>Popular Areas</h4>
          <ul>
            {popularAreaSlugs.map((slug) => {
              const area = serviceAreas.find((item) => item.slug === slug);
              if (!area) return null;
              return (
                <li key={slug}>
                  <a href={`/${slug}`}>{area.name}</a>
                </li>
              );
            })}
          </ul>
        </div>

        <div className="footer-links-col">
          <h4>Company</h4>
          <ul>
            <li>
              <a href="/service-areas">All Service Areas</a>
            </li>
            <li>
              <a href="/about">About CheckMate PDI</a>
            </li>
            <li>
              <a href="/contact">Contact and Booking</a>
            </li>
            <li>
              <a href="/car-inspection-south-mumbai">South Mumbai</a>
            </li>
            <li>
              <a href="/car-inspection-mira-virar">Mira Road to Virar</a>
            </li>
            <li>
              <a href="/car-inspection-thane">Thane Corridor</a>
            </li>
            <li>
              <a href="/car-inspection-kalyan-dombivli">Kalyan and Dombivli</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="container footer-bottom">
        <p>
          &copy; {year} CheckMate PDI Exxpert. All rights reserved. Car PDI and pre-purchase
          inspection across Mumbai, Palghar, Navi Mumbai, Thane and Kalyan.
        </p>
      </div>
    </footer>
  );
}
