import type { Metadata } from "next";
import "./globals.css";
import { LanguageProvider } from "@/context/LanguageContext";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { StickyCallBar } from "@/components/StickyCallBar";

export const metadata: Metadata = {
  title: "Shri Andavar Eye Care & Retina Centre | Pollachi | Dr. A. Raghuram",
  description:
    "Specialized ophthalmic & vitreoretinal hospital in Pollachi led by Dr. A. Raghuram (FRCS Glasgow). Micro-incision cataract surgery (MICS), diabetic retinopathy, retinal detachment, glaucoma & 100% cashless CMCHIS empanelled.",
  keywords: [
    "Eye Hospital Pollachi",
    "Cataract Surgery Pollachi",
    "Retina Specialist Pollachi",
    "Dr A Raghuram Eye Doctor",
    "Shri Andavar Eye Care",
    "CMCHIS Eye Hospital Pollachi",
    "Diabetic Retinopathy Pollachi",
    "Best Eye Doctor Udumalpet Valparai Anaimalai",
  ],
  authors: [{ name: "Dr. A. Raghuram, FRCS Glasgow" }],
  openGraph: {
    title: "Shri Andavar Eye Care & Retina Centre | Pollachi",
    description:
      "Single-surgeon accountability in Pollachi: Micro-incision cataract surgery, vitreoretinal care, diabetic eye care, and 100% cashless CMCHIS coverage.",
    url: "https://shriandavareyecare.com",
    siteName: "Shri Andavar Eye Care and Retina Centre",
    locale: "en_IN",
    type: "website",
  },
  alternates: {
    canonical: "https://shriandavareyecare.com",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "MedicalOrganization",
      "@id": "https://shriandavareyecare.com/#organization",
      name: "Shri Andavar Eye Care and Retina Centre",
      alternateName: "ஸ்ரீ ஆண்டவர் கண் மற்றும் விழித்திரை மையம்",
      url: "https://shriandavareyecare.com",
      logo: "https://shriandavareyecare.com/assets/logo.png",
      telephone: ["04259 221 000", "+91 94420 56767", "04259 222444"],
      address: {
        "@type": "PostalAddress",
        streetAddress: "No. 73, Palladam Road, Opposite LMHSS School, T. Kottampatti",
        addressLocality: "Pollachi",
        addressRegion: "Tamil Nadu",
        postalCode: "642002",
        addressCountry: "IN",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: "10.6609",
        longitude: "77.0048",
      },
      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
          opens: "10:00",
          closes: "14:00",
        },
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
          opens: "17:00",
          closes: "19:00",
        },
      ],
      medicalSpecialty: ["Ophthalmology", "Optometry", "PlasticSurgery"],
      hasCredential: "TN-MED-621428",
    },
    {
      "@type": "Physician",
      "@id": "https://shriandavareyecare.com/#physician",
      name: "Dr. A. Raghuram",
      jobTitle: "Chief Vitreoretinal & Cataract Surgeon",
      medicalSpecialty: "Ophthalmology",
      worksFor: {
        "@id": "https://shriandavareyecare.com/#organization",
      },
      hasCredential: [
        "MBBS",
        "DO",
        "DNB Ophthalmology",
        "FICO (UK)",
        "FRCS (Glasgow)",
        "TN-MED-621428",
      ],
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased scroll-smooth overflow-x-hidden">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-[#FBF8F3] text-[#151A1C] text-[18px] selection:bg-[#0B5C8A] selection:text-[#FFFFFF] overflow-x-hidden">
        <LanguageProvider>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
          <StickyCallBar />
        </LanguageProvider>
      </body>
    </html>
  );
}
