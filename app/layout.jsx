import { Inter, Sora } from "next/font/google";
import "./globals.css";

import { JsonLd } from "@/components/json-ld";
import { serviceFacts, siteConfig } from "@/app/data/business";
import { serviceAreaSummary } from "@/app/data/locations";
import { faqItems, processSteps } from "@/app/site-data";
import {
  faqSchema,
  graph,
  howToSchema,
  llmsTxtSchema,
  organizationSchema,
  serviceSchema,
  websiteSchema
} from "@/app/data/schema";

const headingFont = Sora({
  subsets: ["latin"],
  variable: "--font-heading",
  weight: ["600", "700"],
  display: "swap"
});

const bodyFont = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["400", "500", "600"],
  display: "swap"
});

const homeDescription = `Independent on-site car PDI and pre-purchase inspection in ${serviceAreaSummary.count} areas across Mumbai, Palghar, Navi Mumbai, Thane and Kalyan. ${serviceFacts.checklistPointsLabel} checklist across ${serviceFacts.checklistSections} sections, photo evidence for every finding, report in ${serviceFacts.reportDeliveryMinutes} minutes. From ${serviceFacts.priceFromLabel}, no travel charge.`;

export const metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `Car PDI Inspection Mumbai, Palghar & Navi Mumbai | CheckMate PDI | From ${serviceFacts.priceFromLabel}`,
    template: "%s | CheckMate PDI"
  },
  description: homeDescription,
  applicationName: siteConfig.name,
  authors: [{ name: siteConfig.name, url: siteConfig.url }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  keywords: [
    "car PDI inspection Mumbai",
    "car inspection Palghar",
    "car inspection Navi Mumbai",
    "pre-delivery inspection Mumbai",
    "used car inspection Mumbai",
    "pre-purchase car inspection Thane",
    "car PDI Virar",
    "car PDI Thane",
    "checkmatepdi"
  ],
  category: "Automotive",
  alternates: {
    canonical: siteConfig.url,
    types: {
      "text/plain": "/llms.txt"
    }
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1
    },
    "max-image-preview": "large",
    "max-snippet": -1,
    "max-video-preview": -1
  },
  formatDetection: { telephone: true, email: true, address: false },
  openGraph: {
    title: `Car PDI Inspection in Mumbai, Palghar & Navi Mumbai | CheckMate PDI`,
    description: homeDescription,
    url: siteConfig.url,
    siteName: siteConfig.name,
    images: [
      {
        url: "/Checkmatepdilogo.png",
        width: 800,
        height: 600,
        alt: "CheckMate PDI Exxpert car inspection"
      }
    ],
    locale: siteConfig.locale,
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: `Car PDI Inspection Mumbai | CheckMate PDI | From ${serviceFacts.priceFromLabel}`,
    description: homeDescription,
    images: ["/Checkmatepdilogo.png"]
  }
};

const pdiService = serviceSchema({
  name: "Pre-Delivery Car Inspection (PDI)",
  serviceType: "Pre-Delivery Inspection",
  description: `On-site 84-point pre-delivery inspection of a new car at a dealership yard or stockyard, with photo evidence for every finding and a digital report within ${serviceFacts.reportDeliveryMinutes} minutes. Available in ${serviceAreaSummary.count} areas across Mumbai, Palghar, Navi Mumbai, Thane and Kalyan. From ${serviceFacts.priceFromLabel}.`,
  path: "/services/pre-delivery-inspection"
});

const prePurchaseService = serviceSchema({
  name: "Pre-Purchase Used Car Inspection",
  serviceType: "Pre-Purchase Inspection",
  description: `Independent used car inspection before you pay the seller, covering paint thickness, accident and flood history, odometer verification, engine bay condition and a full functional check. Report within ${serviceFacts.reportDeliveryMinutes} minutes. From ${serviceFacts.priceFromLabel}, no travel charge.`,
  path: "/services/pre-purchase-inspection"
});

const jsonLd = graph([
  organizationSchema(),
  websiteSchema(),
  llmsTxtSchema(),
  pdiService,
  prePurchaseService,
  faqSchema(faqItems, "/"),
  howToSchema({
    name: "How to book a car PDI inspection with CheckMate PDI",
    description:
      "Five steps from sharing your vehicle details to receiving the inspection report on WhatsApp and email.",
    path: "/services/pre-delivery-inspection",
    steps: processSteps
  })
]);

export default function RootLayout({ children }) {
  return (
    <html lang={siteConfig.language}>
      <head>
        <JsonLd data={jsonLd} />
        <meta name="geo.region" content="IN-MH" />
        <meta name="geo.placename" content="Mumbai" />
      </head>
      <body className={`${headingFont.variable} ${bodyFont.variable}`}>{children}</body>
    </html>
  );
}
