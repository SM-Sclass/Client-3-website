import { Inter, Sora } from "next/font/google";
import Script from "next/script";
import "./globals.css";

import { JsonLd } from "@/components/json-ld";
import { Icon } from "@/components/icon";
import { SiteHeader } from "@/components/site-header";
import { contactConfig, serviceFacts, siteConfig, whatsappLink } from "@/app/data/business";
import { serviceAreaSummary } from "@/app/data/locations";
import { processSteps } from "@/app/site-data";
import {
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

const homeTitle = "Car PDI & Used Car Inspection in Mumbai | CheckMate PDI";
const homeDescription = `Book an on-site new car PDI or used car inspection in Mumbai, Palghar, Navi Mumbai, Thane or Kalyan. ${serviceFacts.checklistPointsLabel} checklist and photo report. From ${serviceFacts.priceFromLabel}.`;

export const metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: homeTitle,
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
    title: homeTitle,
    description: homeDescription,
    url: siteConfig.url,
    siteName: siteConfig.name,
    images: [
      {
        url: "/assets/inspection-proof-02.jpeg",
        width: 1280,
        height: 960,
        alt: "Land Rover Defender from a CheckMate PDI inspection"
      }
    ],
    locale: siteConfig.locale,
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: homeTitle,
    description: homeDescription,
    images: ["/assets/inspection-proof-02.jpeg"]
  }
};

const pdiService = serviceSchema({
  name: "Pre-Delivery Car Inspection (PDI)",
  serviceType: "Pre-Delivery Inspection",
  description: `On-site ${serviceFacts.checklistPointsLabel} pre-delivery inspection of a new car at a dealership yard or stockyard, with photo evidence for every finding and a digital report within ${serviceFacts.reportDeliveryMinutes} minutes. Available in ${serviceAreaSummary.count} areas across Mumbai, Palghar, Navi Mumbai, Thane and Kalyan. From ${serviceFacts.priceFromLabel}.`,
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
        <Script id="google-tag-init" strategy="beforeInteractive">
          {`window.dataLayer = window.dataLayer || [];
function gtag(){window.dataLayer.push(arguments);}
gtag('js', new Date());`}
        </Script>
        <Script
          src="https://www.googletagmanager.com/gtm.js?id=GTM-P9DQGBWJ"
          strategy="beforeInteractive"
        />
        <JsonLd data={jsonLd} />
        <meta name="geo.region" content="IN-MH" />
        <meta name="geo.placename" content="Mumbai" />
      </head>
      <body className={`${headingFont.variable} ${bodyFont.variable}`}>
        <SiteHeader />
        {children}
        <aside className="booking-dock" aria-label="Book an inspection">
          <a className="button button-call" href={`tel:${contactConfig.phone}`}>
            <Icon className="button-icon" name="phone" />
            Call to book
          </a>
          <a
            className="button button-solid"
            href={whatsappLink("Hi, I'd like to book a car inspection. Can you confirm pricing and availability?")}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon className="button-icon" name="whatsapp" />
            WhatsApp
          </a>
        </aside>
      </body>
    </html>
  );
}
