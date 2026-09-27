import { serviceFacts } from "./business";

const sharedChecklistSummary =
  "The inspection runs through 11 sections: buyer and vehicle details, exterior paint and panel alignment, glass, tyres and wheels, interior, engine bay, electrical system, photo evidence, final condition grading, and inspector sign-off. Every item is graded OK, Minor Issue or Major Issue.";

export const services = [
  {
    slug: "pre-delivery-inspection",
    summary:
      "Independent inspection of a new car at the dealership yard or stockyard before you pay the token amount or sign the delivery papers.",
    name: "Pre-Delivery Inspection (PDI) for new cars",
    navLabel: "Pre-Delivery Inspection",
    type: "Pre-Delivery Inspection",
    priceFrom: 999,
    metaTitle:
      "Car PDI Inspection in Mumbai | Pre-Delivery Check Before You Pay",
    metaDescription:
      "New car PDI in Mumbai, Palghar, Navi Mumbai, Thane and Kalyan. 84-point pre-delivery check with paint thickness, VIN and odometer verification. Report in 15 minutes. From ₹999.",
    h1: "Car Pre-Delivery Inspection (PDI) in Mumbai",
    heroIntro:
      "A pre-delivery inspection is an independent technical check of a new car, done at the dealership yard or stockyard, before you pay the token amount or sign the delivery papers. Our inspectors work for you, not the dealer, and the report reaches you within 15 minutes so you can decide while you are still standing at the counter.",
    heroPoints: [
      "Independent of the dealership and the brand",
      "84 checklist points across 11 sections",
      "VIN and odometer photographed and recorded",
      "Photo evidence for every finding",
      "Report within 15 minutes of inspection",
      "From ₹999, no travel charge in any service area"
    ],
    sections: [
      {
        h2: "When should you get a PDI done?",
        body: [
          "Get the inspection done before you make the token payment, not after. Before payment, the dealer has every reason to correct whatever we find, and often will. After payment and delivery, the same finding becomes your problem, and the negotiation is effectively over.",
          "The second most important moment is the handover itself. If your car is being held at a yard for a few days before delivery, book a second inspection at your society on the possession date. Cars pick up damage in exactly that window."
        ],
        list: []
      },
      {
        h2: "What our PDI actually checks",
        body: [
          "The same 84-point checklist is used for every car in every location, so a report from Vasai is directly comparable to one from Dadar. " + sharedChecklistSummary,
          "For a new car specifically, the following get the most attention, because they are the ones that get quietly fudged at the yard."
        ],
        list: [
          "Paint thickness and panel gap consistency across every panel, to catch repaint or a substituted panel",
          "Spare wheel paint code and matching against the car",
          "Glass, lights and trim for replacement or aftermarket fitment",
          "Tyre manufacturing dates, which should be recent and consistent across all four",
          "VIN plate and odometer reading, photographed for your records",
          "Engine bay fluid levels, battery condition and any sign of a disturbed service",
          "Full functional check of lights, horn, wipers, indicators, AC and power features",
          "Underbody look for transit scrapes, ramp impact marks and fluid leaks"
        ]
      },
      {
        h2: "What we look for on a new car",
        body: [
          "Most new-car PDI problems are not mechanical. They are cosmetic or administrative, and they are worth catching because they are cheap for the dealer to fix and expensive for you to live with."
        ],
        list: [
          "Repair and repaint on a bumper, fender, bonnet or boot lid, often after a parking incident in the yard",
          "Panel alignment gaps that are visibly uneven when the car is viewed from the side",
          "Odometer reading that does not match a brand new car's expected delivery mileage",
          "Old stock presented as new, visible in tyre manufacturing dates and battery age",
          "Accessories or trim that differ in finish from the specified variant",
          "Missing or non-functional features listed on the invoice"
        ]
      },
      {
        h2: "How our PDI process works",
        body: [
          "You send the vehicle details, the location and your preferred slot. We confirm a slot, an inspector name and the inspection point. The inspection takes 45 to 60 minutes. The report is sent on WhatsApp and email within 15 minutes, and the inspector walks you through the findings on site before leaving."
        ],
        list: [
          "Share vehicle details and location on WhatsApp or phone",
          "Confirm the slot and the inspection point with us",
          "Inspector completes the 84-point checklist on site",
          "Walkthrough of every finding and its photographs",
          "Decision-ready report on WhatsApp and email within 15 minutes"
        ]
      },
      {
        h2: "Our PDI pricing and timings",
        body: [
          "PDI starts at ₹999. The final price depends on the package and the vehicle, and it is confirmed before the slot is booked, so there are no surprise charges on the day. The price does not change for evening or weekend appointments, and there is no travel charge anywhere in our service area.",
          "We operate 8:00 AM to 9:00 PM every day. Same-day and same-evening slots are usually available, particularly in Thane, which is our base."
        ],
        list: [
          `Starting price: ${serviceFacts.priceFromLabel}`,
          "Inspection time on site: 45 to 60 minutes",
          "Report delivery: within 15 minutes of completion",
          "Open every day, 8:00 AM to 9:00 PM",
          "No travel charge across Mumbai, Palghar, Navi Mumbai, Thane and Kalyan"
        ]
      }
    ],
    faqs: [
      {
        q: "What is a pre-delivery inspection and when should I get one done?",
        a: "A pre-delivery inspection is an independent technical check of a new car before you pay the token amount or sign the delivery papers. It exists to catch repaint, panel damage, old stock, incorrect odometer reading and missing accessories while the dealer still has an incentive to fix them."
      },
      {
        q: "How much does a car PDI cost in Mumbai?",
        a: "A PDI starts at ₹999. The exact price depends on the package and vehicle and is confirmed when you book. There is no travel charge for any location we cover, and the price does not change for evening or weekend slots."
      },
      {
        q: "Should the dealership be involved in the inspection?",
        a: "It is normal for the dealer to allow access to the car in their own yard. The inspector works for you, and the report is written from the buyer's point of view, not the seller's."
      },
      {
        q: "How long does a PDI take and when do I get the report?",
        a: "The on-site inspection takes 45 to 60 minutes. The digital report with photo evidence is sent on WhatsApp and email within 15 minutes of the inspection finishing."
      },
      {
        q: "Can you inspect a car at a dealership stockyard?",
        a: "Yes. Most PDI bookings are at dealer yards and stockyards across Churchgate to Virar, Palghar, Navi Mumbai, Thane and Kalyan. Send the vehicle details and the yard address and we will schedule it."
      },
      {
        q: "What if the dealer refuses a PDI?",
        a: "Treat that as a finding in itself. A dealer unwilling to allow an independent inspection before payment is telling you something, and it is worth renegotiating or walking away."
      }
    ]
  },
  {
    slug: "pre-purchase-inspection",
    summary:
      "Independent inspection of a used car before you pay the seller, covering paint thickness, accident and flood history, odometer integrity and engine bay condition.",
    name: "Pre-Purchase Inspection for used cars",
    navLabel: "Pre-Purchase Inspection",
    type: "Pre-Purchase Inspection",
    priceFrom: 999,
    metaTitle:
      "Used Car Inspection in Mumbai | Pre-Purchase Check Before You Pay",
    metaDescription:
      "Used car pre-purchase inspection in Mumbai, Palghar, Navi Mumbai, Thane and Kalyan. Paint thickness, flood and accident check, odometer verification. Report in 15 minutes. From ₹999.",
    h1: "Used Car Pre-Purchase Inspection in Mumbai",
    heroIntro:
      "A pre-purchase inspection is an independent check of a used car, done before you pay the seller, wherever the car happens to be. It is the cheapest insurance in the entire car-buying process, because a single hidden defect such as an engine rebuild, a flood-damaged chassis or a reset odometer costs many times the inspection fee.",
    heroPoints: [
      "Independent of the seller and the dealer",
      "Accident, flood and repaint history checks",
      "Odometer and VIN verification with photographs",
      "Wear consistency checked against the claimed mileage",
      "Photo evidence for every finding",
      "From ₹999, no travel charge in any service area"
    ],
    sections: [
      {
        h2: "Why a used car pre-purchase inspection matters",
        body: [
          "Used car buyers in Mumbai routinely find out about the car's history after they have paid. The inspection moves that discovery to the point where the seller still cares, which is the only moment a report has real value.",
          "The most expensive problems are also the least visible from the outside. A repainted panel, a flood-damaged floor pan and a reset odometer all look fine in a ten-minute look. They do not survive a paint gauge, an underbody check and a wear-versus-mileage comparison."
        ],
        list: [
          "One identified engine, brake or chassis defect is usually worth several times the inspection fee",
          "Dealers and private sellers in this market regularly conceal flood and accident history",
          "A written, photographed report changes the price you should pay far more effectively than a verbal argument",
          "You keep the report permanently, with the VIN and odometer recorded"
        ]
      },
      {
        h2: "What our used car inspection checks",
        body: [
          sharedChecklistSummary +
            " For a used car, the paint, underbody, odometer and mechanical state checks carry most of the weight."
        ],
        list: [
          "Paint thickness reading on every panel, to identify repaint, filler build-up and panel replacement",
          "Panel gap and alignment measurement to reveal accident repair",
          "Underbody inspection for rust, structural deformation, fluid leaks and flood water line marks",
          "Evidence of flood or water ingress: damp boot carpet, seat base moisture, corroded bolts, compressed rear springs",
          "Engine bay for leaks, tampering, disturbed filters and inconsistent service condition",
          "VIN plate and odometer reading, photographed",
          "Wear consistency against the claimed mileage: driver seat, pedals, steering, clutch and brake wear",
          "Trim and interior consistency for the stated variant, to catch substituted parts",
          "Tyre condition and manufacturing dates",
          "Full functional check of lights, horn, wipers, AC, power windows, central locking and infotainment"
        ]
      },
      {
        h2: "How we detect a reset odometer",
        body: [
          "A reset odometer is the single most common deception in the used car market, and it is easy to detect if you know what to compare. We use four independent signals against each other rather than trusting the dial."
        ],
        list: [
          "Driver seat bolster and cushion wear",
          "Pedal, clutch and steering wheel wear",
          "Interior, wiper and seatbelt condition",
          "Wear patterns at the jacking points and on suspension components"
        ]
      },
      {
        h2: "Inspecting a car you cannot attend",
        body: [
          "A large share of our pre-purchase work is for buyers who are not in the city, or who bought a car sight unseen from a dealer or an online platform. This works well, provided you give us the registration number or VIN, an exact location, and a contact person on site. The report is designed to be readable by someone who never saw the car."
        ],
        list: [
          "Share the registration number or VIN",
          "Share an exact location pin and a contact person on site",
          "Report arrives on WhatsApp and email within 15 minutes",
          "Ask follow-up questions on WhatsApp if a finding needs explaining"
        ]
      },
      {
        h2: "Our pre-purchase pricing",
        body: [
          "Pre-purchase inspection starts at ₹999. The exact price depends on the package and the vehicle, and is confirmed before booking. There is no travel charge across Mumbai, Palghar, Navi Mumbai, Thane and Kalyan, and the price does not change for evening or weekend appointments."
        ],
        list: [
          `Starting price: ${serviceFacts.priceFromLabel}`,
          "Inspection time on site: 45 to 60 minutes",
          "Report delivery: within 15 minutes of completion",
          "Open every day, 8:00 AM to 9:00 PM"
        ]
      }
    ],
    faqs: [
      {
        q: "How much does a used car inspection cost in Mumbai?",
        a: "A pre-purchase inspection starts at ₹999. The exact price depends on the package and the vehicle, and it is confirmed before you book. There is no travel charge for any location we cover."
      },
      {
        q: "What does an inspector look for when buying a used car?",
        a: "Paint thickness on every panel, panel gaps and alignment, underbody rust and structural damage, flood damage traces, engine bay leaks and tampering, odometer consistency, VIN verification, trim consistency, tyre condition and a full functional check of all electricals."
      },
      {
        q: "How do you know if a used car has been in a flood?",
        a: "Damp or replaced boot carpet, seat base moisture, water line marks on underbody metal, corroded suspension and subframe bolts, compressed rear springs from load, residue in headliner or sunroof drain channels, and a musty smell that sellers rarely mention."
      },
      {
        q: "Can you inspect a used car before I pay a dealer?",
        a: "Yes, and that is the recommended arrangement. The report is written for the buyer, so you can act on it in the dealer's yard before any money changes hands."
      },
      {
        q: "Do you inspect cars bought from private sellers?",
        a: "Yes. Dealer yards, private homes and roadside locations all work. Send the registration number and the exact address when you book."
      },
      {
        q: "What should I do if the seller refuses an inspection?",
        a: "Walk away, or renegotiate hard. Refusing an independent inspection before payment is a strong signal that there is something to hide."
      }
    ]
  },
  {
    slug: "car-inspection-cost",
    summary:
      "What a PDI or pre-purchase inspection costs in Mumbai, what changes the price, and exactly what is included at every level.",
    name: "Car inspection cost and pricing",
    navLabel: "Inspection Cost",
    type: "Inspection Pricing",
    priceFrom: 999,
    metaTitle:
      "Car PDI Inspection Cost in Mumbai | Price from ₹999",
    metaDescription:
      "How much a car PDI or pre-purchase inspection costs in Mumbai, what changes the price, what is included from ₹999, and why the fee is worth it. No travel charge in any service area.",
    h1: "Car Inspection Cost in Mumbai",
    heroIntro:
      "Car PDI and pre-purchase inspection in Mumbai starts at ₹999, and the price depends on the package and the vehicle rather than the distance. Everything below is what the fee buys, what changes it, and what it costs you not to have it.",
    heroPoints: [
      `Starting at ${serviceFacts.priceFromLabel}`,
      "No travel charge in any service area",
      "Same price for evening and weekend slots",
      "Price confirmed before booking",
      "84 checklist points across 11 sections",
      "Report within 15 minutes, included"
    ],
    sections: [
      {
        h2: "What determines the price",
        body: [
          "Two things decide the fee: which package you choose and what kind of vehicle you are inspecting. Location never does. There is no travel charge anywhere in our service area, so a Virar inspection costs the same as a Thane one.",
          "The price is confirmed when you book, not on the day. We do not add fees for evening appointments, weekends or urgent slots."
        ],
        list: [
          "Which package you choose",
          "Vehicle type, size and condition, since larger and higher-mileage vehicles take longer",
          "Whether the inspection is at a dealer yard, a private home or an out-of-area pickup"
        ]
      },
      {
        h2: "What is included from ₹999",
        body: [
          "The entry package is a complete inspection, not a partial one. You get the full 84-point checklist across 11 sections, a grade for every item, written remarks, an overall condition grade, and photo evidence for every finding, delivered as a report within 15 minutes."
        ],
        list: [
          "All 11 checklist sections, 84 points, graded OK, Minor Issue or Major Issue",
          "Exterior paint, panel alignment, glass, tyres and wheels",
          "Interior condition, engine bay fluids and battery, full electrical functional check",
          "VIN plate and odometer photographed and recorded",
          "Photo evidence for every finding",
          "Digital report on WhatsApp and email within 15 minutes",
          "On-site walkthrough of the findings with the inspector"
        ]
      },
      {
        h2: "Why ₹999 is worth it before you pay",
        body: [
          "The inspection fee is small relative to what a single hidden defect costs. A coolant leak that becomes a head gasket job, a flood-damaged floor pan, or a clutch replacement on a car sold as near-new will each exceed the inspection fee several times over.",
          "The second argument is stronger: an independent report changes the price you pay. A photographed, graded finding is evidence. It is far more effective in a negotiation than a general claim that the car feels used."
        ],
        list: [
          "A single identified mechanical defect typically costs many times the inspection fee",
          "Findings are graded and photographed, so they work as negotiation evidence",
          "The report stays with you permanently, with VIN and odometer recorded",
          "Inspecting before payment keeps the seller's incentive to fix problems intact"
        ]
      },
      {
        h2: "Payment, timings and what is not charged",
        body: [
          "Payment can be made by UPI, cash or bank transfer, and it is normal to pay after reading the report. We operate 8:00 AM to 9:00 PM every day, including weekends."
        ],
        list: [
          "Payment modes: UPI, cash, bank transfer",
          "Open every day, 8:00 AM to 9:00 PM",
          "Same-day and same-evening slots usually available, especially in Thane",
          "No travel charge, no evening surcharge, no weekend surcharge",
          "Inspection time on site: 45 to 60 minutes"
        ]
      }
    ],
    faqs: [
      {
        q: "How much does a car PDI cost in Mumbai?",
        a: "A car PDI starts at ₹999. The exact price depends on the package and the vehicle, and it is confirmed before you book. There is no travel charge for any location in our service area."
      },
      {
        q: "Is the price different in Virar or Navi Mumbai compared to Thane?",
        a: "No. Pricing depends on the package, not the distance. Every location we cover, from Churchgate to Virar, Palghar, Navi Mumbai, Thane and Kalyan, is charged the same."
      },
      {
        q: "Do you charge extra for evening or weekend appointments?",
        a: "No. The price is confirmed with the package at booking and does not change for evening or weekend inspections."
      },
      {
        q: "When should I pay for the inspection?",
        a: "After reading the report, not before. Paying only after you have the findings is what keeps the inspection genuinely independent."
      },
      {
        q: "What payment methods do you accept?",
        a: "UPI, cash and bank transfer. The inspection is usually booked as a single payment covering the agreed package."
      },
      {
        q: "Is there a discount for multiple vehicles?",
        a: "Fleet and multi-vehicle inspections are quoted on the number of vehicles and locations. Send the list and we will price the whole batch."
      }
    ]
  },
  {
    slug: "what-we-check",
    summary:
      "The complete 84-point checklist across 11 sections, the OK / Minor Issue / Major Issue grading scale, and an honest note on what a PDI does not cover.",
    name: "What a PDI checks: the 84-point checklist",
    navLabel: "What We Check",
    type: "Inspection Checklist",
    priceFrom: 999,
    metaTitle:
      "What Does a Car PDI Check? 84-Point Checklist and Grading",
    metaDescription:
      "The full 84-point car PDI checklist across 11 sections: paint thickness, glass, tyres, interior, engine bay, electricals, underbody, photo evidence and condition grading. Mumbai, Palghar, Navi Mumbai, Thane, Kalyan.",
    h1: "What Does a Car PDI Check?",
    heroIntro:
      "Every CheckMate inspection runs through the same 84 checklist points across 11 sections, at every location, in the same grading format. Nothing is skipped because a car is a hatchback, and nothing is added because a car is a premium SUV. The checklist below is the complete list.",
    heroPoints: [
      "84 checklist points across 11 sections",
      "One grading scale: OK, Minor Issue, Major Issue",
      "Same checklist at all 56 locations",
      "Photo evidence for every finding",
      "VIN and odometer recorded",
      "Report within 15 minutes"
    ],
    sections: [
      {
        h2: "How the grading works",
        body: [
          "Every checklist item gets one of three grades, and the report closes with an overall condition rating. The scale is deliberately simple so it can be used in a negotiation without translation."
        ],
        list: [
          "OK: the item is in normal condition for the vehicle's age and mileage, with nothing to report",
          "Minor Issue: a defect or irregularity that does not affect safety or legality but should be corrected or priced in",
          "Major Issue: a defect that affects safety, legality or resale value, such as structural damage, a fuel or coolant leak, or brake failure risk"
        ]
      },
      {
        h2: "Why the same checklist matters",
        body: [
          "A checklist that changes from location to location is worthless as evidence, and it is also the reason many inspection reports cannot be compared. Because the same 84 points and the same grading scale are used in Churchgate, Virar, Palghar, Panvel, Thane and Kalyan, a report from one location can be compared directly with a report from another.",
          "It also means repeat customers accumulate a comparable history for the same car, which is how gradual change between inspections becomes visible."
        ],
        list: [
          "Identical grading scale at every location",
          "Photographs recorded against the specific finding, not a generic gallery",
          "VIN and odometer recorded on every report for your permanent record",
          "Written remarks in plain language, not diagnostic jargon"
        ]
      },
      {
        h2: "What is not covered",
        body: [
          "Being straight about the limits of a physical inspection matters more than claiming everything. A pre-delivery inspection is a physical, visual and functional check performed on site within about an hour. It is not a workshop diagnostic."
        ],
        list: [
          "No engine teardown, compression test or dyno measurement",
          "No OBD-II software scan beyond functional testing of visible systems",
          "No load-bearing suspension measurement on a road test",
          "No guarantee of future reliability, only evidence of present condition",
          "No legal or ownership document verification, which remains the buyer's responsibility"
        ]
      }
    ],
    faqs: [
      {
        q: "How many points are checked in a CheckMate PDI?",
        a: "84 checklist points across 11 sections: buyer details, vehicle details including VIN and odometer, exterior inspection, glass, tyres and wheels, interior, engine bay, electrical system, photo evidence, final result, and inspector details with sign-off."
      },
      {
        q: "What is the difference between Minor Issue and Major Issue?",
        a: "A Minor Issue does not affect safety or legality but should be corrected or priced in. A Major Issue affects safety, legality or resale value, such as structural or chassis damage, a fuel or coolant leak, or brake failure risk. Both are photographed and described in remarks."
      },
      {
        q: "Is a PDI the same as a full workshop diagnostic?",
        a: "No. A PDI is a physical, visual and functional check done on site in about an hour. It does not include teardown, compression testing or dyno measurement, and we do not claim otherwise."
      },
      {
        q: "Do you check the underbody?",
        a: "Yes. Visible rust on structural and suspension components, fluid leaks, flood water line marks, scrapes and deformation from impacts, and the condition of exhaust and fuel lines are all inspected and photographed."
      },
      {
        q: "How do you measure paint thickness?",
        a: "With a digital paint thickness gauge, readings are taken across each panel rather than at a single point, so repaint, filler build-up and panel replacement can be distinguished from factory paint variation. Adjacent panel comparisons matter as much as the absolute reading."
      }
    ]
  }
];

export const serviceBySlug = Object.fromEntries(
  services.map((service) => [service.slug, service])
);

export function getService(slug) {
  return serviceBySlug[slug] || null;
}
