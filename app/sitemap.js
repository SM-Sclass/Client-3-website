import { getAreaSlugs } from "./data/locations";
import { services } from "./data/services";

const baseUrl = "https://checkmatepdi.com";

const lastModified = "2026-09-26";

const coreRoutes = [
  { route: "", priority: 1.0, changeFrequency: "weekly" },
  { route: "/services/pre-delivery-inspection", priority: 0.95, changeFrequency: "monthly" },
  { route: "/services/pre-purchase-inspection", priority: 0.95, changeFrequency: "monthly" },
  { route: "/services/car-inspection-cost", priority: 0.9, changeFrequency: "monthly" },
  { route: "/services/what-we-check", priority: 0.9, changeFrequency: "monthly" },
  { route: "/service-areas", priority: 0.9, changeFrequency: "monthly" },
  { route: "/sample-report", priority: 0.85, changeFrequency: "monthly" },
  { route: "/about", priority: 0.6, changeFrequency: "yearly" },
  { route: "/contact", priority: 0.7, changeFrequency: "yearly" }
];

const corridorRoutes = [
  "/car-inspection-south-mumbai",
  "/car-inspection-bandra-andheri",
  "/car-inspection-goregaon-borivali",
  "/car-inspection-mira-virar",
  "/car-inspection-palghar",
  "/car-inspection-navi-mumbai",
  "/car-inspection-thane",
  "/car-inspection-kalyan-dombivli"
];

function entry(route, priority, changeFrequency) {
  return {
    url: `${baseUrl}${route}`,
    lastModified,
    changeFrequency,
    priority
  };
}

export default function sitemap() {
  return [
    ...coreRoutes.map((item) => entry(item.route, item.priority, item.changeFrequency)),
    ...corridorRoutes.map((route) => entry(route, 0.85, "monthly")),
    ...services.map((service) =>
      entry(`/services/${service.slug}`, 0.9, "monthly")
    ),
    ...getAreaSlugs().map((slug) => entry(`/${slug}`, 0.8, "monthly"))
  ];
}
