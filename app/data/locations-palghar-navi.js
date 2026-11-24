import { checklistPoints, gradedChecks, technicalSections, reportSections } from "./checklist";

export const locationsPalgharNavi = [
  {
    slug: "car-inspection-palghar",
    name: "Palghar",
    zone: "palghar",
    aka: ["Palghar town", "Palghar district headquarters"],
    landmarks: ["Palghar town centre", "Palghar beach", "Varsai", "Masoli"],
    travelNote: "The furthest point we travel from the Thane base, on the Western line extension",
    intro:
      "Palghar is the district headquarters and the largest town in the belt, with a mix of old town streets and newer township layouts. It is our longest travel in the network, so bookings here are scheduled as planned visits rather than same-day calls.",
    factors: [
      {
        title: "Longest travel in the network",
        text: "Palghar sits at the far end of our coverage. Slots are planned in advance and grouped, which is also why same-day booking in Palghar is possible but not guaranteed."
      },
      {
        title: "Coastal air and open parking",
        text: "Cars parked near the coastline pick up salt moisture. We look for early rust on underbody metal, damp at the boot and cabin floor, and air-conditioning performance issues."
      },
      {
        title: "Fewer lit inspection spots",
        text: "Some parts of the district have limited well-lit hard surface. We confirm the inspection point when you book and will suggest a better spot if the one you have chosen is unsuitable."
      }
    ],
    faqs: [
      {
        q: "Do you travel to Palghar?",
        a: "Yes, Palghar is the furthest point in our service area, and we inspect cars across the town and nearby villages. Message us a day or two ahead for the smoothest scheduling."
      },
      {
        q: "Is there an extra charge for travelling to Palghar?",
        a: "The price depends on the package, not on distance, and there is no travel surcharge anywhere in our service area. Inspection starts at ₹999."
      },
      {
        q: "Can I book a same-day inspection in Palghar?",
        a: "It depends on the day's schedule. We run 8:00 AM to 9:00 PM every day, and giving us a day's notice gets you a confirmed slot rather than a hopeful one."
      },
      {
        q: "What is included in the Palghar inspection?",
        a: `The same ${checklistPoints}-point checklist used across Mumbai, Navi Mumbai, Thane and Kalyan, with photo evidence for every finding and a report within 15 minutes.`
      }
    ]
  },
  {
    slug: "car-inspection-manor-road",
    name: "Manor Road",
    zone: "palghar",
    aka: ["Manor", "Karanjade", "Bordi"],
    landmarks: ["Manor Road town", "Bordi beach", "Karanjade", "Gokhale"],
    travelNote: "Planned slot, on the Western line extension north of Virar",
    intro:
      "Manor Road is a small belt town with a mix of agrarian land, new township layouts and coastal villages such as Bordi. Pre-purchase inspection demand here is high relative to the number of showrooms, so most cars are bought second hand.",
    factors: [
      {
        title: "Predominantly used-car market",
        text: "With few new-car showrooms, most Manor Road work is pre-purchase inspection of used vehicles, often bought from dealers further down the line. The main risks are repaint, accident history and odometer tampering."
      },
      {
        title: "Coastal and agrarian dust exposure",
        text: "Cars parked near farmland and the coast pick up grit and salt. We check air filter condition, brake dust accumulation and underbody corrosion."
      },
      {
        title: "Flood-prone low ground",
        text: "Monsoon waterlogging is common in low-lying pockets in this belt. Water ingress checks are standard on every pre-purchase inspection here."
      }
    ],
    faqs: [
      {
        q: "What should I check before buying a used car in Manor Road?",
        a: "Paint thickness across every panel, underbody for rust and flood traces, engine bay for leaks and tampering, odometer consistency against wear, and a full functional check of all electricals."
      },
      {
        q: "Do you inspect at private homes in Manor Road?",
        a: "Yes, on-site inspection at the vehicle location is our standard model. We just need a firm, reasonably lit surface and about an hour."
      },
      {
        q: "How do I know a car was flood affected?",
        a: "Look for damp or replaced boot carpet, seat base moisture, water line marks on underbody metal, corroded suspension bolts, compressed rear springs, residue in headliner channels, and a musty smell that the seller does not mention."
      },
      {
        q: "Can you inspect a car I am buying from another city?",
        a: "We cover Mumbai, Palghar, Navi Mumbai, Thane and Kalyan. If the car is outside that, we can advise you on what to check remotely and what to insist on before travelling."
      }
    ]
  },
  {
    slug: "car-inspection-dahanu",
    name: "Dahanu",
    zone: "palghar",
    aka: ["Dahanu Road", "Dahanu town"],
    landmarks: ["Dahanu town", "Kashid beach", "Dahanu Road railway station", "Hemadpanti"],
    travelNote: "Planned slot at the northern end of the Western line extension",
    intro:
      "Dahanu is the northern end of the Western line extension and the last station in that direction. It has tourist traffic, a coastal belt and a new airport project, and it is the most planned booking in our entire coverage.",
    factors: [
      {
        title: "Northernmost booking",
        text: "Dahanu is our last stop in the north. We schedule it as a dedicated visit, usually with a fixed slot, so please book ahead rather than expecting a same-day callout."
      },
      {
        title: "Salt and sand exposure",
        text: "Beach-side and coastal parking exposes cars to salt-laden air and sand. Underbody corrosion, paint fade on horizontal panels and air filter contamination are the usual findings."
      },
      {
        title: "Used-car purchases from touring visitors",
        text: "A number of Dahanu-area pre-purchase inspections are on cars bought by buyers from other states who cannot attend. The photo-backed report is built for exactly that situation."
      }
    ],
    faqs: [
      {
        q: "How far in advance should I book for Dahanu?",
        a: "At least a day ahead is advisable, ideally two. Dahanu is our longest travel, so we group it into planned visits to keep the price and timing fair for you."
      },
      {
        q: "Do you cover Kashid and Hemadpanti?",
        a: "Both are within the Dahanu area we travel to. Send the exact location when you book and we will confirm."
      },
      {
        q: "Is the report sent to WhatsApp?",
        a: "Yes, the report is sent on WhatsApp and email within 15 minutes of the inspection finishing, with photo evidence for every finding."
      },
      {
        q: "Can you inspect a car before I register it?",
        a: "Yes. A pre-delivery inspection is normally done before you make the token payment or sign the delivery papers, which is before registration in most cases."
      }
    ]
  },
  {
    slug: "car-inspection-boival",
    name: "Boival",
    zone: "palghar",
    aka: ["Boival town", "Shirala", "Nakane"],
    landmarks: ["Boival town", "Shirala", "Nakane", "Sarod"],
    travelNote: "Planned slot on the Western line extension, south of Dahanu",
    intro:
      "Boival sits on the Vaitarna-Vasai road close to the Vaitarna river, and functions as the service and market town for the surrounding villages. Cars here are inspected at homes, farms and small dealer premises rather than at showrooms.",
    factors: [
      {
        title: "Unsurfaced inspection points",
        text: "A fair number of Boival-area inspections happen on unpaved or uneven ground. Paint gauge readings need a firm, level surface, so we check the ground before we start and note any limitation in the report."
      },
      {
        title: "Rural dust and mud exposure",
        text: "Vehicles used on rural roads pick up mud and grit, which shows in the air filter, brake dust and underbody. We photograph underbody condition before it is washed."
      },
      {
        title: "Cross-border vehicle history",
        text: "Vehicles in this belt sometimes have interstate or out-of-state history. The VIN plate, odometer photo and service-tag details are recorded in the report for your records."
      }
    ],
    faqs: [
      {
        q: "What if my car is parked on an unpaved road?",
        a: "We still inspect, but we will tell you if the surface will affect the paint thickness readings, and we will note it in the report. A firm, level surface gives the most reliable results."
      },
      {
        q: "Do you inspect cars in Boival villages?",
        a: "Yes, wherever the vehicle is. Send a Google Maps pin or an exact address and we will route the inspector to it."
      },
      {
        q: "How much does a PDI cost in Boival?",
        a: "The price depends on the package and starts at ₹999, the same as anywhere else in our service area. Distance does not change the price."
      },
      {
        q: "What does an underbody check include?",
        a: "Visible rust on structural and suspension parts, fluid leaks, evidence of flood water lines, scrapes and impact marks from loading ramps, and the condition of the exhaust and fuel lines."
      }
    ]
  },
  {
    slug: "car-inspection-kelve",
    name: "Kelve",
    zone: "palghar",
    aka: ["Kelve town", "Kelve beach"],
    landmarks: ["Kelve beach", "Kelve Jain temple", "Kelve caves site"],
    travelNote: "Planned slot, coastal Palghar belt",
    intro:
      "Kelve is a small coastal town known for its long beach and the historic cave site in the hills behind it. Vehicle population is small but inspection requests are almost always used-car purchases, so the focus is on history rather than delivery condition.",
    factors: [
      {
        title: "Used-car focus",
        text: "With very few new-car sales in Kelve, most inspections are pre-purchase. The questions that matter are accident history, flood exposure and whether the odometer is telling the truth."
      },
      {
        title: "Beach-side salt exposure",
        text: "Cars parked near the beach pick up salt air. We look for corrosion starting on underbody metal and for damp at the boot and cabin floor."
      },
      {
        title: "Seasonal tourist demand",
        text: "Inspection demand in Kelve peaks across the tourist season. Book a few days ahead during that period for a confirmed slot."
      }
    ],
    faqs: [
      {
        q: "Do you inspect cars near Kelve beach?",
        a: "Yes, provided the car is parked on firm ground rather than soft sand, which the paint gauge and underbody check both need."
      },
      {
        q: "How do you check for accident repair on a used car?",
        a: "Paint thickness across every panel, panel gap measurement, underbody scrapes and deformation, suspension geometry, and alignment. Findings are recorded as OK, Minor Issue or Major Issue with photographs."
      },
      {
        q: "Is Kelve in your service area?",
        a: "Yes, Kelve is part of the Palghar belt we cover, with inspection starting at ₹999 and no travel surcharge."
      },
      {
        q: "Can you help me if the seller is in a different city?",
        a: "If the car is inside our service area we can inspect it on your behalf. Outside it, we can tell you exactly what to check and what photographs to insist on before you travel."
      }
    ]
  },
  {
    slug: "car-inspection-vaitarna",
    name: "Vaitarna",
    zone: "palghar",
    aka: ["Vaitarna river belt", "Nakane", "Sarod"],
    landmarks: ["Vaitarna river", "Vaitarna bridge", "Sizinga", "Nakane"],
    travelNote: "Planned slot on the Vaitarna road corridor",
    intro:
      "Vaitarna is the river and estuary corridor that separates the Palghar belt from the Alibag side, and the villages along it are among the most rural in our coverage. Inspections here are always at the vehicle, and the ground conditions need checking in advance.",
    factors: [
      {
        title: "Ground conditions matter",
        text: "Villages along the Vaitarna often have soft, uneven or waterlogged ground. Paint thickness readings and underbody inspection need firm, dry ground, so we confirm the spot before travelling."
      },
      {
        title: "Monsoon and estuary humidity",
        text: "Humidity near the estuary accelerates corrosion. We check for early rust on underbody and suspension parts and for damp inside the cabin and boot."
      },
      {
        title: "Long-distance logistics",
        text: "This is the farthest corner of our network, so we group inspections into planned routes. Booking a few days ahead gives you a confirmed slot and a better price on the visit."
      }
    ],
    faqs: [
      {
        q: "Which villages in the Vaitarna belt do you cover?",
        a: "Vaitarna and the villages along the river road including Nakane, Sarod and Sizinga. Send an exact pin and we will confirm the route before the visit."
      },
      {
        q: "How early should I book for Vaitarna?",
        a: "Two to three days is sensible, because this is a planned route rather than a same-day callout."
      },
      {
        q: "What does the PDI actually check?",
        a: `The report has ${reportSections} sections and ${gradedChecks} graded vehicle checks, with customer and vehicle details, photo evidence, a condition summary and inspector sign-off.`
      },
      {
        q: "Is the report the same across all locations?",
        a: "Yes, one checklist, one grading scale, one report format. What changes by location is the local risk focus we spend more time on."
      }
    ]
  },
  {
    slug: "car-inspection-vashi",
    name: "Vashi",
    zone: "navi-mumbai",
    aka: ["Vashi node", "Palm Beach Vashi"],
    landmarks: ["Inorbit Mall", "Vashi Creek", "Millennium Business Park", "Palm Beach Road"],
    travelNote: "About 45 minutes from Churchgate station",
    intro:
      "Vashi is the entry point to Navi Mumbai and a mixed commercial and residential node with corporate offices and a large used-car market. Both pre-delivery and pre-purchase work are strong here, and the road access is the main scheduling constraint.",
    factors: [
      {
        title: "Peak-hour access planning",
        text: "Vashi's entry and exit roads choke badly at peak hours. We plan the arrival window with you so the inspector is not caught in a queue that threatens the report timeline."
      },
      {
        title: "Used-car dealer market",
        text: "Vashi has a well-developed used-car dealer market. Pre-purchase inspections here regularly catch disguised repaint, substituted trim and odometer reset."
      },
      {
        title: "Creek-side salt exposure",
        text: "Vehicles parked near the creek and waterfront pick up moisture. We check underbody metal, boot floor and air-conditioning performance for early signs."
      }
    ],
    faqs: [
      {
        q: "Do you inspect cars in Vashi at the buyer or seller location?",
        a: "Either. We inspect wherever the car is. Share a Maps pin and the contact person on site, and we will route the inspector there."
      },
      {
        q: "How long does a Navi Mumbai inspection take?",
        a: "The on-site check is 45 to 60 minutes and the report is delivered within 15 minutes of completion."
      },
      {
        q: "Do you charge for travel within Navi Mumbai?",
        a: "No. Navi Mumbai is fully in the standard service area, with pricing based on the package and starting at ₹999."
      },
      {
        q: "Can I inspect a car before paying a dealer in Vashi?",
        a: "That is exactly the service. The report is written for the buyer, so you can act on it in the dealer's yard before any payment is made."
      }
    ]
  },
  {
    slug: "car-inspection-nerul",
    name: "Nerul",
    zone: "navi-mumbai",
    aka: ["Nerul East", "Nerul West", "Palm Beach Road"],
    landmarks: ["DY Patil Stadium", "University of Mumbai Kalina campus", "Seawoods Grand Central", "Nerul railway station"],
    travelNote: "About 50 minutes from Churchgate station",
    intro:
      "Nerul combines CIDCO-sector housing, a university campus, a stadium and the Palm Beach Road commercial strip. It is a mix of family PDI deliveries and used-car purchases, and the wide roads here make finding a good inspection point easy.",
    factors: [
      {
        title: "Wide roads, easy access",
        text: "Nerul's sector roads and parking pockets give us room to work properly. This is one of the easier belts for accurate paint and underbody inspection."
      },
      {
        title: "Student and first-time buyers",
        text: "A lot of first-time buyers here. We keep the explanation plain, walk through the report on site, and highlight the findings that actually affect the purchase decision."
      },
      {
        title: "Sector delivery pattern",
        text: "Most deliveries are to sector societies, and the car is usually available at the society itself. We ask for the gate to be clear and the car to be moved to an open bay."
      }
    ],
    faqs: [
      {
        q: "What is included in a PDI for a new car in Nerul?",
        a: `Paint and panel gap consistency, glass, tyres and manufacturing dates, interior condition, engine bay fluids and battery, full electrical functional check, VIN and odometer verification, and an overall condition grade, across ${checklistPoints} checklist points.`
      },
      {
        q: "Can you explain the report in person?",
        a: "Yes. The inspector walks you through each finding and its photographs before leaving, and the written report follows on WhatsApp and email."
      },
      {
        q: "Do you inspect used cars bought from Nerul dealers?",
        a: "Yes, and pre-purchase inspection is the single most requested service in Navi Mumbai. Send the registration number and the yard location."
      },
      {
        q: "How do I book?",
        a: "WhatsApp the car make, model, variant, location and your preferred slot. We reply with a confirmed slot, the inspector name and the inspection point."
      }
    ]
  },
  {
    slug: "car-inspection-airoli",
    name: "Airoli",
    zone: "navi-mumbai",
    aka: ["Airoli East", "Airoli Smart City", "Mindspace Airoli"],
    landmarks: ["Airoli Smart City", "Mindspace Airoli", "Airoli Creek", "Navi Mumbai suburban line"],
    travelNote: "About 50 minutes from Churchgate station",
    intro:
      "Airoli is a major office node with an extensive, long-running redevelopment programme. A great deal of the new stock arriving here is brand new, which makes it one of the higher-volume PDI belts in Navi Mumbai.",
    factors: [
      {
        title: "Large volume of new car deliveries",
        text: "Airoli's office and redevelopment projects mean a constant flow of new-car handovers, often on weekends. Weekends are the busiest time here, so book ahead."
      },
      {
        title: "Redevelopment handover condition",
        text: "Cars handed over during tower construction sometimes sit in open holding areas. We check for dust ingress, paint fade, seal condition and battery state in those cases."
      },
      {
        title: "Creek-side moisture",
        text: "Proximity to the creek means salt-laden air. Early underbody corrosion and damp at the boot floor are the things we look for first in this belt."
      }
    ],
    faqs: [
      {
        q: "What is the most common PDI finding in Airoli?",
        a: "Cosmetic panel repair and repaint on bumper corners and fenders, plus dust and water contamination from open storage before handover. Both are documented with photographs."
      },
      {
        q: "Do you inspect during construction-phase handovers?",
        a: "Yes. We ask that the car be moved to a firm, lit, uncovered spot so the readings are accurate even when the handover is happening in a construction zone."
      },
      {
        q: "Are weekend slots available in Airoli?",
        a: "Yes, weekends are when most handovers happen and they fill first. Message a day or two ahead for a confirmed slot."
      },
      {
        q: "Do you also do used-car inspections in Airoli?",
        a: "Yes. Both pre-delivery inspection for new cars and pre-purchase inspection for used cars are available across all of Navi Mumbai."
      }
    ]
  },
  {
    slug: "car-inspection-taloja",
    name: "Taloja",
    zone: "navi-mumbai",
    aka: ["Taloja MIDC", "Taloja Phase I and II", "Taloja Bypass"],
    landmarks: ["Taloja MIDC", "Taloja Bypass", "Dombivli to Taloja Road", "Taloja Phase III"],
    travelNote: "About 55 minutes from Churchgate station",
    intro:
      "Taloja is an industrial township in MIDC with a large and growing residential catchment. Vehicle volumes here are high, and the industrial setting introduces a specific risk: vehicles that have been used as pool, demo or staff vehicles before retail delivery.",
    factors: [
      {
        title: "Demo and pool vehicle risk",
        text: "In an industrial belt, showroom display and pool cars often carry genuine usage before delivery. We test wear consistency against the odometer, which is how a disguised high-mileage car gets caught."
      },
      {
        title: "Industrial dust and pollution",
        text: "Dust and industrial pollution load the air filter and brake dust quickly. A neglected air filter and brake dust build-up are common findings on cars delivered straight out of this belt."
      },
      {
        title: "Distance and timing",
        text: "Taloja is one of the further Navi Mumbai points for us. Same-day slots are usually possible, but late-evening bookings are better for morning appointments."
      }
    ],
    faqs: [
      {
        q: "How do you detect a high-mileage car sold as low-mileage?",
        a: "We compare the odometer reading with driver seat bolster wear, pedal and steering wear, clutch and brake wear, interior wear, and the wear marks at jacking points. A mismatch is a Major Issue."
      },
      {
        q: `What is the ${checklistPoints}-point checklist?`,
        a: `The report has ${reportSections} sections and ${gradedChecks} graded vehicle checks, with customer and vehicle details, photo evidence, a condition summary and inspector sign-off.`
      },
      {
        q: "Do you inspect cars at Taloja MIDC premises?",
        a: "Yes, wherever the car is. Send the exact gate and building, plus a contact person on site."
      },
      {
        q: "How much does it cost in Taloja?",
        a: "Pricing depends on the package and starts at ₹999, the same as every other location we cover. There is no travel surcharge."
      }
    ]
  },
  {
    slug: "car-inspection-kharghar",
    name: "Kharghar",
    zone: "navi-mumbai",
    aka: ["Kharghar sectors", "Central Park Kharghar", "Belpada"],
    landmarks: ["Central Park", "ISKCON Temple Kharghar", "Kharghar railway station", "CIDCO sectors"],
    travelNote: "About 55 minutes from Churchgate station",
    intro:
      "Kharghar is the best-planned CIDCO sector township in Navi Mumbai, with wide roads, landscaped central parks and consistent new housing. It is a high-volume PDI market and one of the easier belts to inspect in properly.",
    factors: [
      {
        title: "Planned township, clean inspection conditions",
        text: "Wide sector roads, driveways and covered parking mean Kharghar inspections produce the most reliable readings of anywhere in Navi Mumbai."
      },
      {
        title: "High new housing delivery rate",
        text: "New possession homes mean a steady stream of first deliveries, often with the buyer inspecting for the first time. We keep the walkthrough simple and practical."
      },
      {
        title: "CIDCO sector-society process",
        text: "Society gate and parking rules are strict, so the inspection slot needs to be booked with the society in advance. We will give you a realistic time window."
      }
    ],
    faqs: [
      {
        q: "Why should I inspect before paying the token amount?",
        a: "Because before the token payment the dealer has every incentive to fix what you find. After payment, the negotiation changes completely. The report arrives within 15 minutes, so you can act immediately."
      },
      {
        q: "Do you inspect cars parked in a covered Kharghar society basement?",
        a: "Yes. We bring our own lighting, though we will still ask for the car to be moved into the nearest lit open bay for accurate paint readings."
      },
      {
        q: "Is there any travel charge for Kharghar?",
        a: "No. All of Navi Mumbai is in the standard service area, and inspection starts at ₹999."
      },
      {
        q: "What does your report say about a new car's condition?",
        a: `Grades for applicable vehicle checks across ${technicalSections} sections, an overall condition grade, written remarks, and photo evidence, delivered as a PDF within 15 minutes.`
      }
    ]
  },
  {
    slug: "car-inspection-kalundre",
    name: "Kalundre",
    zone: "navi-mumbai",
    aka: ["Kalundre village", "Digha", "Chirle", "Kopar Kharghar"],
    landmarks: ["Kopar Kharghar railway station", "Digha", "Chirle", "Panvel Creek belt"],
    travelNote: "About 55 minutes from Churchgate station",
    intro:
      "Kalundre and the villages around Kopar Kharghar sit between Kharghar and Panvel, a pocket with a mix of older housing, new township land and light industry. It is less served by showrooms, so pre-purchase inspection is the dominant request.",
    factors: [
      {
        title: "Pre-purchase dominated",
        text: "With fewer new-car showrooms, most Kalundre work is pre-purchase inspection of used cars, often bought from dealers in Panvel or Vashi. Repaint, accident history and odometer integrity are the focus."
      },
      {
        title: "Panvel creek moisture",
        text: "Proximity to the creek means humid conditions. We check for early corrosion on underbody metal, damp at the boot floor and cabin carpet, and air-conditioning performance."
      },
      {
        title: "Uneven and rural surfaces",
        text: "Parts of this belt have unpaved internal roads. Firm, level ground matters for paint thickness readings, so we confirm the inspection spot with you first."
      }
    ],
    faqs: [
      {
        q: "Do you cover Kopar Kharghar?",
        a: "Yes, Kopar Kharghar and the Kalundre, Digha and Chirle areas are all in our Navi Mumbai service area."
      },
      {
        q: "What does a pre-purchase inspection include?",
        a: "Paint thickness across all panels, panel gap and alignment, underbody for rust and flood traces, engine bay for leaks and tampering, odometer verification, tyre condition, and a full functional check of electricals, with photos of every finding."
      },
      {
        q: "Can you inspect without me present?",
        a: "Yes, and that is common. Send the registration number or VIN, the location and a contact person on site, and the photo-backed report will reach you within 15 minutes."
      },
      {
        q: "Is the report useful for negotiating price?",
        a: "That is the main purpose. Every finding is graded OK, Minor Issue or Major Issue and photographed, so you can point at specific defects rather than argue in general terms."
      }
    ]
  },
  {
    slug: "car-inspection-ulwe",
    name: "Ulwe",
    zone: "navi-mumbai",
    aka: ["Ulwe node", "Ulwe City", "Ulwe sectors"],
    landmarks: ["Ulwe node", "Ulwe railway station", "Ulwe City sectors", "Navi Mumbai airport project area"],
    travelNote: "About 60 minutes from Churchgate station",
    intro:
      "Ulwe is Navi Mumbai's fastest-developing node, with new sector layouts and major infrastructure projects landing on land that was farmland until recently. New car demand here is rising fast, and inspection conditions are still improving.",
    factors: [
      {
        title: "Rapidly changing landscape",
        text: "New sectors, under-construction roads and limited lit parking in parts of Ulwe. We confirm the inspection surface in advance so the readings are not affected by dust or uneven ground."
      },
      {
        title: "New and lightly used stock",
        text: "Much of the stock here is very new, and the risk profile is different from a used car: delivery damage, transit scuffs, incomplete battery charging and accessory fitment quality."
      },
      {
        title: "Project and fleet handovers",
        text: "With large projects and workforce housing coming up, fleet and company car deliveries are a growing share of the work here."
      }
    ],
    faqs: [
      {
        q: "Do you inspect new cars in Ulwe?",
        a: "Yes, pre-delivery inspection is the main service here. Book before you make the token payment or sign the delivery papers."
      },
      {
        q: "What should be checked on a lightly used new car?",
        a: "Transit damage, panel paint and gap consistency, tyre manufacturing dates, battery and charging state, underbody scrapes from loading ramps, and full accessory and functional checks."
      },
      {
        q: "How do I get a confirmed slot in Ulwe?",
        a: "Message us a day ahead with the car details and location. We run 8:00 AM to 9:00 PM every day and will confirm the slot, the inspector and the inspection point."
      },
      {
        q: "Do you charge extra because Ulwe is far?",
        a: "No. Price depends on the package only. Every location in Mumbai, Palghar, Navi Mumbai, Thane and Kalyan is in the standard service area."
      }
    ]
  },
  {
    slug: "car-inspection-panvel",
    name: "Panvel",
    zone: "navi-mumbai",
    aka: ["Panvel Junction", "CIDCO MIDC Panvel", "Old Panvel"],
    landmarks: ["Panvel Junction", "Panvel MIDC", "Indian Railways diesel loco shed", "Khanda Colony"],
    travelNote: "About 60 minutes from Churchgate station",
    intro:
      "Panvel is one of the largest industrial townships in India and the northern gateway to Navi Mumbai. Vehicle volumes are very high, and both new-car PDI and used-car pre-purchase inspections are common, with the MIDC premises being a frequent inspection address.",
    factors: [
      {
        title: "Industrial premises inspections",
        text: "Many Panvel inspections happen inside MIDC premises with tight security rules and gate timings. Send the gate, the company name and the visiting hours when you book."
      },
      {
        title: "Heavy commercial context",
        text: "Being next to one of Indian Railways' major diesel locomotive facilities and a large industrial base means a lot of commercial and staff vehicle use. Wear patterns on these cars are genuine and heavy."
      },
      {
        title: "Water ingress on low ground",
        text: "Panvel has low-lying pockets that flood in heavy monsoon. Water ingress checks are standard on every pre-purchase inspection in this belt."
      }
    ],
    faqs: [
      {
        q: "Can you inspect inside an MIDC premises in Panvel?",
        a: "Yes. Send the company name, gate and visiting hours in advance, along with a contact person on site, so entry is smooth."
      },
      {
        q: "What is the biggest risk when buying a used car in Panvel?",
        a: "Heavy commercial or fleet usage disguised as low mileage. Wear consistency checks against the odometer catch this more reliably than asking the seller directly."
      },
      {
        q: "How do you verify the VIN?",
        a: "We photograph the VIN plate and record it in the report, along with the odometer reading. Both are documented so you have a permanent record of the car you bought."
      },
      {
        q: "Do you cover Khanda Colony and Old Panvel?",
        a: "Yes, all of Panvel is in the standard service area with inspection starting at ₹999."
      }
    ]
  }
];
