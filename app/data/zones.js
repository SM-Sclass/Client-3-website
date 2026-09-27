export const zones = [
  {
    id: "south-mumbai",
    name: "South Mumbai",
    shortName: "South Mumbai",
    parentHref: "/car-inspection-south-mumbai",
    parentTitle: "South Mumbai corridor",
    blurb:
      "Churchgate to Mahim on the western line, plus Mahalaxmi and Lower Parel. Deliveries usually happen in basement society parking or at a dealership on Pali Hill, so the car is inspected in the same cramped conditions you will sign the papers in.",
    line: "Western Line (Churchgate to Dadar)"
  },
  {
    id: "bandra-andheri",
    name: "Bandra to Jogeshwari",
    shortName: "Bandra to Jogeshwari",
    parentHref: "/car-inspection-bandra-andheri",
    parentTitle: "Bandra to Andheri corridor",
    blurb:
      "The busiest stretch of the western line. Linking Road high-rises, offices in BKC-adjacent pockets and multiple new-car showrooms sit within a few kilometres, so most bookings here are for showroom to society handover on the same day.",
    line: "Western Line (Bandra to Jogeshwari)"
  },
  {
    id: "goregaon-borivali",
    name: "Goregaon to Dahisar",
    shortName: "Goregaon to Dahisar",
    parentHref: "/car-inspection-goregaon-borivali",
    parentTitle: "Goregaon to Borivali corridor",
    blurb:
      "Goregaon, Malad, Kandivali, Borivali and Dahisar, including the Aarey-side and film-city stretches where open storage yards are common. Most PDI calls come from dealers delivering to society basements after dark.",
    line: "Western Line (Goregaon to Dahisar)"
  },
  {
    id: "mira-virar",
    name: "Mira Road to Virar",
    shortName: "Mira Road to Virar",
    parentHref: "/car-inspection-mira-virar",
    parentTitle: "Mira Road to Virar corridor",
    blurb:
      "The outer western suburbs. Vehicles spend the longest time in open stockyards here, get exposed to monsoon water and dust, and arrive from longer transport distances, which makes paint, battery and underbody checks the priority.",
    line: "Western Line (Mira Road to Virar)"
  },
  {
    id: "palghar",
    name: "Palghar District",
    shortName: "Palghar",
    parentHref: "/car-inspection-palghar",
    parentTitle: "Palghar corridor",
    blurb:
      "Palghar town, Manor Road, Dahanu, Boival, Vaitarna and Kelve. This is the furthest we travel, and the one place where asking the dealer to bring the car to a paved, lit inspection spot genuinely changes the result.",
    line: "Western Line North Extension + Salsette-Karjat side"
  },
  {
    id: "navi-mumbai",
    name: "Navi Mumbai",
    shortName: "Navi Mumbai",
    parentHref: "/car-inspection-navi-mumbai",
    parentTitle: "Navi Mumbai corridor",
    blurb:
      "Vashi, Nerul, Airoli, Taloja, Kharghar, Kalundre, Ulwe and Panvel. Large-volume new car sales in Taloja and Panvel MIDC, plus CIDCO sector deliveries in Kharghar and Nerul.",
    line: "Navi Mumbai suburban line and MIDC belts"
  },
  {
    id: "thane",
    name: "Thane and Powai",
    shortName: "Thane and Powai",
    parentHref: "/car-inspection-thane",
    parentTitle: "Thane corridor",
    blurb:
      "Powai, Vikhroli, Bhandup, Mulund, Thane West, Majiwada, Ghodbunder Road and Kalwa. Ghodbunder Road and Kasarvadavali dealers deliver dusty test-drive and display cars, so underbody and filter checks matter here.",
    line: "Central Line (Powai to Thane) and Ghodbunder Road"
  },
  {
    id: "kalyan-dombivli",
    name: "Mumbra to Kalyan",
    shortName: "Kalyan belt",
    parentHref: "/car-inspection-kalyan-dombivli",
    parentTitle: "Kalyan and Dombivli corridor",
    blurb:
      "Mumbra, Diva, Dombivli, Thakurli, Kalyan and Ambernath. The most price-sensitive belt we cover, and the area where buyers most often skip inspection and later regret it.",
    line: "Central Line (Mumbra to Kalyan)"
  }
];

export const zoneById = Object.fromEntries(zones.map((zone) => [zone.id, zone]));
