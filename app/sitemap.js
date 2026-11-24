import { getAreaSlugs } from "./data/locations";
import { services } from "./data/services";
import { absoluteUrl } from "./data/business";
import { corridors } from "./data/corridors";

const coreRoutes = [
  { route: "", priority: 1.0, changeFrequency: "weekly" },
  { route: "/service-areas", priority: 0.9, changeFrequency: "monthly" },
  { route: "/sample-report", priority: 0.85, changeFrequency: "monthly" },
  { route: "/about", priority: 0.6, changeFrequency: "yearly" },
  { route: "/contact", priority: 0.7, changeFrequency: "yearly" }
];

const corridorSlugs = new Set(corridors.map(({ slug }) => slug));

function entry(route, priority, changeFrequency) {
  return {
    url: absoluteUrl(route),
    changeFrequency,
    priority
  };
}

export default function sitemap() {
  return [
    ...coreRoutes.map((item) => entry(item.route, item.priority, item.changeFrequency)),
    ...corridors.map(({ slug }) => entry(`/${slug}`, 0.85, "monthly")),
    ...services.map((service) =>
      entry(`/services/${service.slug}`, 0.9, "monthly")
    ),
    ...getAreaSlugs()
      .filter((slug) => !corridorSlugs.has(slug))
      .map((slug) => entry(`/${slug}`, 0.8, "monthly"))
  ];
}
