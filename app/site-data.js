import { contactConfig, serviceFacts, whatsappLink } from "./data/business";

export const trustPillars = [
  {
    title: "Buyer-first inspection",
    text: "Reports are written for the buyer, not the seller, so your decisions are based on facts."
  },
  {
    title: "Visual evidence",
    text: "Each finding includes photos and clear notes so nothing is left to doubt."
  },
  {
    title: "Experienced field inspectors",
    text: "Certified inspectors follow a structured checklist rather than a quick walkaround."
  },
  {
    title: "Fast, usable delivery",
    text: "Your report arrives quickly in a format that is easy to review and share."
  }
];

export const processSteps = [
  {
    title: "Share Vehicle Details",
    text: "Send us the car details, location, and your preferred inspection slot."
  },
  {
    title: "Inspector Visit",
    text: `A certified inspector visits the vehicle and performs the full ${serviceFacts.checklistPointsLabel} check.`
  },
  {
    title: "Photo Report",
    text: "Every finding is documented with clear photo evidence."
  },
  {
    title: "Buy with Confidence",
    text: "Get your decision-ready report within 15 minutes and move forward with clarity."
  }
];


export const evidenceItems = [
  { label: "Front bumper scratch", status: "Minor Issue" },
  { label: "Right rear door paint fade", status: "Minor Issue" },
  { label: "Rear bumper dent", status: "Major Issue" },
  {
    label: "Scrap market / replaced engine",
    status: "Major Issue"
  },
  { label: "Tyre tread wear", status: "Minor Issue" }
];

export const reportMeta = [
  { label: "Report ID", value: "CM-24-05-27001" },
  { label: "Model", value: "Hyundai Creta SX(O)" },
  { label: "Fuel and Gearbox", value: "Diesel Automatic" },
  { label: "Odometer", value: "58,730 km" },
  { label: "VIN Number", value: "MAPB18BLM123456" },
  { label: "Inspection City", value: "Pune" }
];

export const sampleVehicle = {
  name: "Hyundai Creta",
  subtitle: "2020 SX(O) · Diesel · Automatic"
};

export const reportRemark =
  "Overall the vehicle is in good condition. Cosmetic wear is visible on select panels and one tyre shows minor tread loss, but the mechanical systems appear healthy and ready for a serious buyer review.";

export const professionalPoints = [
  {
    title: "Certified and experienced",
    text: "Inspectors know where hidden repair history and wear patterns usually show up first."
  },
  {
    title: "Digital report in minutes",
    text: "Reports are shared quickly so your buying decision does not lose momentum."
  },
  {
    title: "Remote buyer friendly",
    text: "Photo evidence and clear remarks help even when you are not standing next to the car."
  },
  {
    title: "Transparent communication",
    text: "The language stays practical, so the report reads like guidance instead of marketing."
  }
];

export const testimonial = {
  quote:
    "\"The report was detailed, easy to understand, and useful during negotiation. We knew what mattered before making payment.\"",
  name: "Rohit Mehta",
  location: "Pune, Maharashtra"
};

export const reviewItems = [
  {
    name: "Arjun Patel",
    rating: 5,
    carModel: "Hyundai Creta SX(O)",
    city: "Pune",
    problem: "Hidden front bumper leak and engine bay fluid trail discovered before delivery.",
    cost: "₹18,000",
    saved: "Avoided paying for a car with a developing coolant leak and possible head gasket issue.",
    photos: [
      "/assets/inspection-proof-01.jpeg",
      "/assets/inspection-proof-02.jpeg",
      "/assets/inspection-proof-03.jpeg",
      "/assets/inspection-proof-04.jpeg",
      "/assets/inspection-proof-05.jpeg",
      "/assets/inspection-proof-06.jpeg"
    ],
    date: "2 days ago"
  }
];

export const proofGalleryItems = [
  {
    title: "Exterior damage captured clearly",
    text: "Panel wear, paint issues, and dents are shown with enough detail for buyers to understand the condition before paying.",
    image: "/assets/inspection-proof-01.jpeg"
  },
  {
    title: "Interior wear and cabin condition",
    text: "Seat wear, trim condition, and cabin details are documented in a way that feels real and easy to trust.",
    image: "/assets/inspection-proof-02.jpeg"
  },
  {
    title: "Mechanical concern with evidence",
    text: "The report keeps engine bay and mechanical issues visible so nothing gets brushed aside during handover.",
    image: "/assets/inspection-proof-03.jpeg"
  },
  {
    title: "Tyre and wheel condition review",
    text: "Rubber wear and wheel condition are captured so buyers can see the practical risk before finalizing the deal.",
    image: "/assets/inspection-proof-04.jpeg"
  },
  {
    title: "Real-world inspection snapshot",
    text: "These are actual inspection moments that make the report feel grounded and relatable for a buyer reviewing options.",
    image: "/assets/inspection-proof-05.jpeg"
  },
  {
    title: "Documentation that supports decision-making",
    text: "Visual evidence is paired with the checklist so the buyer has both context and proof in one place.",
    image: "/assets/inspection-proof-06.jpeg"
  },
  {
    title: "Detailed proof for remote buyers",
    text: "Even when the buyer is not present, the images make the condition clear enough to act on confidently.",
    image: "/assets/inspection-proof-07.jpeg"
  },
  {
    title: "Clear evidence for negotiation",
    text: "The visuals help buyers point out concerns professionally and negotiate with facts rather than assumptions.",
    image: "/assets/inspection-proof-08.jpeg"
  },
  {
    title: "WhatsApp-ready inspection proof",
    text: "The same evidence can be shared instantly with the buyer, dealer, or family for a quicker decision.",
    image: "/assets/inspection-proof-09.jpeg"
  }
];

export const ctaChecklist = [
  "Pre-purchase and pre-delivery inspections",
  `${serviceFacts.checklistPointsLabel} inspection flow`,
  "Photo and VIN evidence",
  "Condition grading with remarks",
  "Digital report delivered within 15 minutes"
];

export const contactItems = [
  {
    label: "Mobile & WhatsApp",
    value: "+91 70399 35536",
    href: "https://wa.me/917039935536",
    icon: "phone"
  },
  {
    label: "Email",
    value: "checkmate.pdiexxpert@gmail.com",
    href: "mailto:checkmate.pdiexxpert@gmail.com",
    icon: "mail"
  },
  {
    label: "Website",
    value: "checkmatepdi.com",
    href: "https://checkmatepdi.com",
    icon: "search"
  },
  {
    label: "Instagram",
    value: "@Checkmate.pdiexxpert",
    href: "https://www.instagram.com/Checkmate.pdiexxpert",
    icon: "camera"
  },
  {
    label: "Facebook",
    value: "CheckMate PDI Exxpert",
    href: "https://www.facebook.com/profile.php?id=61573372995325",
    icon: "user"
  }
];

export const brandTagline = "गाड़ी लाओ, सो पूछो, CheckMate ज़रूर करें।";

export const serviceNotes = [
  "Ideal before token payment or final handover.",
  "Useful for both on-site buyers and remote buyers.",
  "Delivered in a simple, decision-ready digital format."
];

export const contactActions = [
  {
    label: "Call to book",
    href: `tel:${contactConfig.phone}`,
    icon: "phone",
    variant: "solid"
  },
  {
    label: "Message on WhatsApp",
    href: whatsappLink("Hi, I'd like to book a car inspection. Can you confirm pricing and availability?"),
    icon: "whatsapp",
    variant: "outline"
  }
];

export const proofGallery = [
  { image: '/assets/proofs/proof-1.jpeg', title: 'Engine Bay Inspection', desc: 'Engine cover lock is broken.' },
  { image: '/assets/proofs/proof-3.jpeg', title: 'Exterior Verification', desc: 'Checking panel gaps and paint thickness.' },
  { image: '/assets/proofs/proof-15.jpeg', title: 'Hood Inspection', desc: 'The hood is open and partially repainted.' },
  { image: '/assets/proofs/proof-10.jpeg', title: 'Paint Coating Gauge', desc: 'Detecting repaints or accidental damage.' },
  { image: '/assets/proofs/proof-8.jpeg', title: 'Underbody Check', desc: 'Checking for rust, leaks, or chassis damage.' }
];

export const verifiedReviews = [
  { name: 'Rahul S.', carModel: 'Land Rover Defender', city: 'Mumbai', rating: 5, date: 'May 2026', problem: 'Engine lock broken.', saved: 'Fixed the issue before delivery', photos: ['/assets/proofs/proof-4.jpeg', '/assets/proofs/proof-1.jpeg'] },
  { name: 'Vikram M.', carModel: 'Honda Elevate', city: 'Pune', rating: 5, date: 'September 2026', problem: 'Repair and repaint work found on a new car.', saved: 'Rejected damaged unit & got a fresh car', photos: ['/assets/proofs/proof-7.jpeg'] },
  { name: 'Neha K.', carModel: 'Urban Cruiser Hyryder', city: 'Navi Mumbai', rating: 5, date: 'April 2026', problem: 'Trunk was replaced and repainted.', saved: 'Received compensation before delivery', photos: ['/assets/proofs/proof-12.jpeg'] }
];

export const corridorPages = [
  { title: "South Mumbai", href: "/car-inspection-south-mumbai", desc: "Churchgate to Dadar & Mahim" },
  { title: "Bandra to Andheri", href: "/car-inspection-bandra-andheri", desc: "Bandra, Khar, Santacruz, Vile Parle, Andheri" },
  { title: "Goregaon to Borivali", href: "/car-inspection-goregaon-borivali", desc: "Goregaon, Malad, Kandivali, Borivali" },
  { title: "Mira Road to Virar", href: "/car-inspection-mira-virar", desc: "Mira Road, Bhayandar, Vasai, Virar" },
  { title: "Thane Corridor", href: "/car-inspection-thane", desc: "Thane West, Ghodbunder Rd, Kalwa, Mumbra" },
  { title: "Kalyan & Dombivli", href: "/car-inspection-kalyan-dombivli", desc: "Kalyan, Dombivli, Thakurli, Diva" }
];

export const faqItems = [
  {
    q: "What is a Car PDI (Pre-Delivery Inspection)?",
    a: `A Pre-Delivery Inspection (PDI) is a comprehensive ${serviceFacts.checklistPointsLabel} check performed on a new or used car before you make final payment or take delivery. Our certified inspectors verify panel alignment, paint thickness, engine health, electricals, odometer readings, and detect hidden transit or accident damage.`
  },
  {
    q: "How much does a CheckMate PDI cost?",
    a: `Our independent car PDI inspections start at ₹999. Every package includes a full ${serviceFacts.checklistPointsLabel} evaluation, high-resolution photo evidence of any issues found, and a decision-ready digital report delivered within 15 minutes of completion.`
  },
  {
    q: "Which areas in Mumbai and Thane do you cover?",
    a: "We cover the entire Mumbai Western Railway corridor (Churchgate to Virar) and the Thane–Kalyan belt, including Thane, Kalwa, Mumbra, Diva, Dombivli, Thakurli, and Kalyan."
  },
  {
    q: "How long does the inspection take and when do I get the report?",
    a: "On-site inspection takes approximately 45 to 60 minutes. Your complete digital report with photo evidence is sent via WhatsApp and Email within 15 minutes after inspection."
  },
  {
    q: "What points are checked during the PDI?",
    a: "We check 11 key categories: Buyer Details, Vehicle Identity (VIN & Odometer), Exterior Paint & Body Alignment, Glass & Windshields, Tyre Tread & Manufacturing Dates, Interior Cabin & Controls, Engine Bay Fluids & Battery, Electrical System, Underbody Check, Photo Evidence, and Final Condition Rating."
  }
];


