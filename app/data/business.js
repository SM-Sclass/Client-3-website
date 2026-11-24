import {
  checklistPoints,
  checklistPointsLabel,
  gradedChecks,
  reportItems,
  reportSections,
  technicalItems,
  technicalSections
} from "./checklist";

export const siteConfig = {
  name: "CheckMate PDI Exxpert",
  shortName: "CheckMate PDI",
  url: "https://checkmatepdi.com",
  locale: "en_IN",
  language: "en-IN",
  tagline: "Independent car PDI and pre-purchase inspection across Mumbai, Palghar, Navi Mumbai, Thane and Kalyan.",
  description:
    `Independent on-site car PDI and used car inspection across Mumbai, Palghar, Navi Mumbai, Thane and Kalyan. ${checklistPointsLabel} checklist, photo evidence, report in 15 minutes. From ₹999.`,
  foundedYear: 2023,
  priceRange: "₹999 - ₹4999",
  currencies: "INR"
};

export const contactConfig = {
  phone: "+917039935536",
  phoneDisplay: "+91 70399 35536",
  whatsapp: "https://wa.me/917039935536",
  email: "checkmate.pdiexxpert@gmail.com",
  instagram: "https://www.instagram.com/Checkmate.pdiexxpert",
  instagramHandle: "@Checkmate.pdiexxpert",
  facebook: "https://www.facebook.com/profile.php?id=61573372995325",
  facebookName: "CheckMate PDI Exxpert"
};

export const openingHours = {
  openingTime: "08:00",
  closingTime: "21:00",
  days: [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday"
  ],
  shortLabel: "Open every day, 8:00 AM to 9:00 PM",
  sameDaySlots: true,
  note: "Inspections are booked by WhatsApp or phone. Same-day slots are usually available if you message before 6:00 PM."
};

export const serviceFacts = {
  checklistPoints,
  checklistPointsLabel,
  checklistSections: reportSections,
  reportSections,
  reportItems,
  technicalItems,
  technicalSections,
  gradedChecks,
  photoEvidenceLabel: "photo evidence for every finding",
  reportDeliveryMinutes: 15,
  inspectionDurationMinutes: "45-60",
  inspectionDurationShort: "about 1 hour",
  priceFrom: 999,
  priceFromLabel: "₹999",
  priceRangeLabel: "₹999 - ₹4999",
  gradingScale: ["OK", "Minor Issue", "Major Issue"],
  reportChannels: ["WhatsApp", "Email"],
  languagesSpoken: ["English", "Hindi", "Marathi"],
  paymentModes: ["UPI", "Cash", "Bank transfer"],
  inspectionType: "On-site at the vehicle location",
  serviceRadiusText:
    "Churchgate to Virar on the western line, Palghar district up to Dahanu, Navi Mumbai, and the Thane to Kalyan belt"
};

export const serviceCatalog = [
  {
    id: "pre-delivery-inspection",
    name: "Pre-Delivery Inspection (PDI) for new cars",
    slug: "pre-delivery-inspection",
    type: "Pre-Delivery Inspection",
    priceFrom: 999,
    summary:
      "Independent inspection of a new car at the dealership yard or stockyard before you pay the token amount or sign the delivery papers."
  },
  {
    id: "pre-purchase-inspection",
    name: "Pre-Purchase Inspection for used cars",
    slug: "pre-purchase-inspection",
    type: "Pre-Purchase Inspection",
    priceFrom: 999,
    summary:
      "Independent inspection of a used car before you pay the seller, covering paint thickness, engine bay, flood and accident history, chassis and paperwork basics."
  },
  {
    id: "car-inspection-cost",
    name: "Car inspection cost and pricing",
    slug: "car-inspection-cost",
    type: "Inspection Pricing",
    priceFrom: 999,
    summary:
      "What a PDI or pre-purchase inspection costs in Mumbai, what changes the price, and what is included at each level."
  },
  {
    id: "what-we-check",
    name: `What a PDI checks: the ${checklistPointsLabel} checklist`,
    slug: "what-we-check",
    type: "Inspection Checklist",
    priceFrom: 999,
    summary:
      `The full ${reportSections}-section report, with ${checklistPoints} core checklist items, a dealer-action summary and grading for applicable vehicle checks.`
  }
];

export function absoluteUrl(path = "/") {
  if (path.startsWith("http")) return path;
  return `${siteConfig.url}${path.startsWith("/") ? path : `/${path}`}`;
}

export function whatsappLink(message) {
  return `https://wa.me/${contactConfig.phone.replace("+", "")}?text=${encodeURIComponent(message)}`;
}
