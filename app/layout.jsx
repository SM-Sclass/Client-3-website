import { Inter, Sora } from "next/font/google";
import "./globals.css";

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

export const metadata = {
  metadataBase: new URL("https://checkmatepdi.com"),
  title: "Car PDI Inspection Thane, Mumbai | Pre-Delivery & Pre-Purchase Checks from ₹999 | CheckMate PDI",
  description:
    "Independent car PDI & pre-purchase inspection across Mumbai's western line and Thane–Kalyan belt. 350+ point checklist, photo evidence, report in 15 min. Starting ₹999.",
  keywords: [
    "Car PDI Inspection Mumbai",
    "Car PDI Thane",
    "Pre delivery inspection car Mumbai",
    "Used car inspection Mumbai",
    "PDI inspector Thane",
    "CheckMate PDI Exxpert",
    "Pre purchase car inspection Thane Kalyan"
  ],
  alternates: {
    canonical: "https://checkmatepdi.com"
  },
  openGraph: {
    title: "Car PDI Inspection Thane, Mumbai | CheckMate PDI",
    description: "Independent 350+ point car PDI & pre-purchase inspection across Mumbai and Thane. Photo evidence & 15-min digital report. From ₹999.",
    url: "https://checkmatepdi.com",
    siteName: "CheckMate PDI Exxpert",
    images: [
      {
        url: "/Checkmatepdilogo.png",
        width: 800,
        height: 600,
        alt: "CheckMate PDI Exxpert Logo"
      }
    ],
    locale: "en_IN",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Car PDI Inspection Thane, Mumbai | CheckMate PDI",
    description: "Independent 350+ point car PDI & pre-purchase inspection across Mumbai and Thane.",
    images: ["/Checkmatepdilogo.png"]
  }
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "AutomotiveBusiness",
      "@id": "https://checkmatepdi.com/#organization",
      "name": "CheckMate PDI Exxpert",
      "url": "https://checkmatepdi.com",
      "logo": "https://checkmatepdi.com/Checkmatepdilogo.png",
      "telephone": "+917039935536",
      "email": "checkmate.pdiexxpert@gmail.com",
      "priceRange": "₹999 - ₹4999",
      "description": "Independent car PDI & pre-purchase inspection service across Mumbai's western line and Thane–Kalyan belt. 350+ point checklist, photo evidence, report delivered in 15 min.",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Thane",
        "addressRegion": "Maharashtra",
        "addressCountry": "IN"
      },
      "areaServed": [
        "Thane", "Kalwa", "Mumbra", "Kalyan", "Dombivli", "Diva", "Thakurli",
        "Churchgate", "Marine Lines", "Charni Road", "Grant Road", "Mumbai Central",
        "Mahalaxmi", "Lower Parel", "Prabhadevi", "Dadar", "Mahim", "Bandra",
        "Khar", "Santacruz", "Vile Parle", "Andheri", "Jogeshwari", "Goregaon",
        "Malad", "Kandivali", "Borivali", "Dahisar", "Mira Road", "Bhayandar",
        "Naigaon", "Vasai Road", "Nallasopara", "Virar"
      ],
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "5.0",
        "reviewCount": "3"
      },
      "review": [
        {
          "@type": "Review",
          "author": { "@type": "Person", "name": "Rahul S." },
          "datePublished": "2026-05-15",
          "reviewBody": "Engine lock broken discovered during inspection. Fixed the issue before delivery.",
          "reviewRating": { "@type": "Rating", "ratingValue": "5" }
        },
        {
          "@type": "Review",
          "author": { "@type": "Person", "name": "Vikram M." },
          "datePublished": "2026-09-10",
          "reviewBody": "Repair and repaint work found on a new car. Customer rejected damaged unit and took delivery of a fresh car.",
          "reviewRating": { "@type": "Rating", "ratingValue": "5" }
        },
        {
          "@type": "Review",
          "author": { "@type": "Person", "name": "Neha K." },
          "datePublished": "2026-04-20",
          "reviewBody": "Trunk was replaced and repainted. Received compensation before delivery.",
          "reviewRating": { "@type": "Rating", "ratingValue": "5" }
        }
      ]
    },
    {
      "@type": "Service",
      "@id": "https://checkmatepdi.com/#pdi-service",
      "name": "Pre-Delivery Car Inspection (PDI)",
      "provider": { "@id": "https://checkmatepdi.com/#organization" },
      "areaServed": "Mumbai Western Line and Thane-Kalyan Belt",
      "description": "350+ point on-site pre-delivery inspection for new cars with digital report in 15 minutes.",
      "offers": {
        "@type": "Offer",
        "price": "999",
        "priceCurrency": "INR"
      }
    },
    {
      "@type": "Service",
      "@id": "https://checkmatepdi.com/#ppi-service",
      "name": "Pre-Purchase Used Car Inspection",
      "provider": { "@id": "https://checkmatepdi.com/#organization" },
      "areaServed": "Mumbai Western Line and Thane-Kalyan Belt",
      "description": "Detailed pre-purchase evaluation for used cars covering paint thickness, engine leaks, flood damage, and chassis integrity.",
      "offers": {
        "@type": "Offer",
        "price": "999",
        "priceCurrency": "INR"
      }
    },
    {
      "@type": "FAQPage",
      "@id": "https://checkmatepdi.com/#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What is a Car PDI (Pre-Delivery Inspection)?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A Pre-Delivery Inspection (PDI) is a comprehensive 350+ point check performed on a new or used car before final payment or handover. It checks paint thickness, engine fluids, electricals, odometer readings, and detects hidden repaint/accident history."
          }
        },
        {
          "@type": "Question",
          "name": "How much does a CheckMate PDI cost?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Our independent car PDI inspections start at ₹999. Every package includes a full 350+ point checklist, photo evidence of defects, and a digital report delivered within 15 minutes."
          }
        },
        {
          "@type": "Question",
          "name": "Which areas in Mumbai and Thane do you cover?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We provide on-site inspections across Churchgate to Virar (Western Line) and Thane to Kalyan (including Kalwa, Mumbra, Dombivli, Diva, and Thakurli)."
          }
        },
        {
          "@type": "Question",
          "name": "How long does the inspection take and when do I get the report?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "On-site physical inspection takes 45 to 60 minutes. Your complete digital report with photo evidence is sent via WhatsApp and Email within 15 minutes of completion."
          }
        }
      ]
    }
  ]
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${headingFont.variable} ${bodyFont.variable}`}>{children}</body>
    </html>
  );
}
