import { locationsWestern } from "./locations-western";
import { locationsPalgharNavi } from "./locations-palghar-navi";
import { locationsThaneKalyan } from "./locations-thane-kalyan";
import { zones, zoneById } from "./zones";

export { zones, zoneById };

export const serviceAreas = [
  ...locationsWestern,
  ...locationsPalgharNavi,
  ...locationsThaneKalyan
];

export const areaBySlug = Object.fromEntries(
  serviceAreas.map((area) => [area.slug, area])
);

export function getArea(slug) {
  return areaBySlug[slug] || null;
}

export function getAreaSlugs() {
  return serviceAreas.map((area) => area.slug);
}

export function getAreasByZone(zoneId) {
  return serviceAreas.filter((area) => area.zone === zoneId);
}

export function getAreaNeighbours(area) {
  const siblings = getAreasByZone(area.zone);
  const index = siblings.findIndex((item) => item.slug === area.slug);
  return siblings.filter((item) => item.slug !== area.slug);
}

export function getAreaCount() {
  return serviceAreas.length;
}

export function getAreaNames() {
  return serviceAreas.map((area) => area.name);
}

export const serviceAreaSummary = {
  count: serviceAreas.length,
  zoneCount: zones.length,
  stationLine:
    "Churchgate to Virar on the Western line, Palghar district up to Dahanu, Navi Mumbai, and the Thane to Kalyan belt"
};
