import localFont from "next/font/local";
import "./globals.css";

const headingFont = localFont({
  src: "./fonts/bahnschrift.ttf",
  variable: "--font-heading",
  display: "swap"
});

const bodyFont = localFont({
  src: [
    {
      path: "./fonts/corbel.ttf",
      weight: "400",
      style: "normal"
    },
    {
      path: "./fonts/corbelb.ttf",
      weight: "700",
      style: "normal"
    }
  ],
  variable: "--font-body",
  display: "swap"
});

export const metadata = {
  title: "CheckMate PDI Expert | Premium Car Inspection Reports",
  description:
    "Independent pre-purchase and pre-delivery car inspection with photo evidence, structured reports, and same-day buyer clarity."
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${headingFont.variable} ${bodyFont.variable}`}>{children}</body>
    </html>
  );
}
