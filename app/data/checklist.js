export const inspectionSections = [
  {
    title: "Buyer / Customer Details",
    type: "Booking info",
    description: "The basic details needed to schedule the inspection and deliver the report.",
    items: [
      "Buyer Name",
      "Mobile Number",
      "Email ID",
      "City"
    ]
  },
  {
    title: "Vehicle Details",
    type: "Vehicle identity",
    description: "Core vehicle identity, including VIN, registration number, manufacturing date and odometer reading.",
    items: [
      "Car Brand",
      "Car Make",
      "Car Model",
      "Variant",
      "Fuel Type",
      "Transmission",
      "Color",
      "VIN / Chassis Number",
      "Vehicle Number",
      "Manufacturing Date",
      "Odometer Reading"
    ]
  },
  {
    title: "Exterior Inspection",
    type: "Condition check",
    description: "Body panels, quarter panels, running boards, paint, lights, mirrors, sunroof and underbody on all sides.",
    graded: true,
    items: [
      "All Side View",
      "Front Grill",
      "Bonnet",
      "Front Bumper",
      "Left Headlight",
      "Right Headlight",
      "DRL Lights",
      "Fog Lamps",
      "Front Parking Sensors",
      "Left Fender",
      "Left Mirror",
      "Left Front Door",
      "Left Rear Door",
      "Left Quarter Panel",
      "Left Running Board",
      "Right Fender",
      "Right Mirror",
      "Right Front Door",
      "Right Rear Door",
      "Right Quarter Panel",
      "Right Running Board",
      "Rear Bumper",
      "Boot Lid",
      "Roof/Top",
      "Rear Camera",
      "Rear Parking Sensors",
      "Tail Lights",
      "Sunroof",
      "All-Side UnderBody"
    ]
  },
  {
    title: "Glass Check",
    type: "Condition check",
    description: "Front and rear windshields and side glass checked for cracks, chips and signs of replacement.",
    graded: true,
    items: [
      "Front Windshield",
      "Rear Windshield",
      "Left Side Glass",
      "Right Side Glass"
    ]
  },
  {
    title: "Tyre & Wheel Check",
    type: "Condition check",
    description: "All four tyres, spare wheel readiness, tread condition and tyre manufacturing date.",
    graded: true,
    referenceItems: ["Tyre Manufacturing Date"],
    items: [
      "Front Left Tyre",
      "Front Right Tyre",
      "Rear Left Tyre",
      "Rear Right Tyre",
      "Spare Wheel"
    ]
  },
  {
    title: "Interior Inspection",
    type: "Condition check",
    description: "Cabin wear, ventilated and electric seats, steering, cruise control, ADAS, infotainment, cameras, sensors, AC, wipers and boot space.",
    graded: true,
    items: [
      "Seat Condition",
      "Seat Ventilation",
      "Seat Electrical",
      "Seat Belts",
      "Dashboard Condition",
      "Steering Wheel/Panel",
      "Steering Controls",
      "Cruise Control",
      "Infotainment System",
      "Speakers",
      "Reverse / 360° Camera",
      "All Parking Sensors",
      "AC Cooling",
      "AC Vents",
      "AC Flap Motor",
      "AC Blower",
      "Cabin Lights",
      "Power Windows",
      "Central Locking",
      "ADAS",
      "Wipers",
      "Interior Condition",
      "Boot Space"
    ]
  },
  {
    title: "Drivetrain & Chassis",
    type: "Mechanical review",
    description: "Gearbox, clutch, gear selector, pedal assembly, brakes, ECM, axle or drive shaft and suspension.",
    graded: true,
    items: [
      "Gearbox Condition",
      "Clutch Condition",
      "Gear Selector",
      "Pedal Assembly",
      "Brake Condition",
      "ECM Malfunction",
      "Axle / Drive Shaft",
      "Suspension"
    ]
  },
  {
    title: "Under-Bonnet & Fluids",
    type: "Mechanical review",
    description: "Engine oil, sludge, wiring, noise, tappet cover, head gasket, belts and tensioner, coolant, brake fluid, battery, radiator and fan.",
    graded: true,
    items: [
      "Engine Oil Level",
      "Engine Sludge Mark",
      "Engine Wiring",
      "Engine Noise",
      "Tappet Cover",
      "Head Gasket",
      "Engine Belt",
      "Belt Tensioner",
      "Coolant Level",
      "Brake Fluid",
      "Battery Condition",
      "Radiator / Fan"
    ]
  },
  {
    title: "Electrical System",
    type: "Functional check",
    description: "Exterior lighting, indicators, hazards and horn.",
    graded: true,
    items: [
      "Headlights",
      "Indicators",
      "Fog Lamps",
      "Brake Lights",
      "Reverse Lights",
      "Hazard Lights",
      "Horn"
    ]
  },
  {
    title: "Photo Evidence",
    type: "Report evidence",
    description: "Photo sets for the exterior, interior, engine bay, odometer, VIN plate and instrument cluster.",
    items: [
      "Exterior Photos",
      "Interior Photos",
      "Engine Bay Photos",
      "Odometer Photo",
      "VIN Plate Photo",
      "Instrument Cluster Photos"
    ]
  },
  {
    title: "Final Result",
    type: "Condition rating",
    description: "Overall condition rated Excellent, Good, Minor Issues or Major Issues, with written remarks.",
    items: [
      "Overall Car Condition",
      "Remarks / Notes"
    ]
  },
  {
    title: "Report Details & Dealer Actions",
    type: "Report summary",
    description: "Inspection method, delivery readiness, prioritized dealer actions and inspection limitations.",
    supplemental: true,
    items: [
      "Inspection Type & Method",
      "Delivery Readiness Statement",
      "Prioritized Dealer Action Items",
      "Inspection Limitations"
    ]
  },
  {
    title: "Inspector Details",
    type: "Report closure",
    description: "Inspector identity, inspection date and sign-off.",
    items: [
      "Inspector Name",
      "Inspection Date",
      "Inspector Sign-off"
    ]
  }
].map((section, index) => ({
  ...section,
  gradedCount: section.graded ? section.items.length : 0,
  items: [...section.items, ...(section.referenceItems ?? [])],
  number: String(index + 1).padStart(2, "0")
}));

const technicalChecklist = inspectionSections.filter((section) => section.graded);
const countItems = (sections) => sections.reduce((total, section) => total + section.items.length, 0);

export const checklistPoints = countItems(inspectionSections.filter((section) => !section.supplemental));
export const checklistPointsLabel = `${Math.floor(checklistPoints / 10) * 10}+ point`;
export const reportItems = countItems(inspectionSections);
export const reportSections = inspectionSections.length;
export const technicalSections = technicalChecklist.length;
export const technicalItems = countItems(technicalChecklist);
export const gradedChecks = technicalChecklist.reduce((total, section) => total + section.gradedCount, 0);
