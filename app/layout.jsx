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
  title: "CheckMate PDI Expert | Premium Car Inspection Reports",
  description:
    "Independent pre-purchase and pre-delivery car inspection with photo evidence, structured reports, and report delivery within 15 minutes."
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${headingFont.variable} ${bodyFont.variable}`}>{children}</body>
    </html>
  );
}
