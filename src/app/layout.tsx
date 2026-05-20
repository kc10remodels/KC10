import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "KC10 Remodels & Residential Painting | Premium Residential Painting",
  description:
    "Award-winning residential painting services. Transform your home with KC10 Remodels & Residential Painting — precision craftsmanship, premium materials, and guaranteed results.",
  keywords: "residential painting, house painting, interior painting, exterior painting, KC10 Remodels & Residential Painting",
  openGraph: {
    title: "KC10 Remodels & Residential Painting | Premium Residential Painting",
    description: "Transform your home with precision craftsmanship and premium materials.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-poppins antialiased">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
