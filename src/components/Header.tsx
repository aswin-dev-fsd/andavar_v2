"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLanguage } from "@/context/LanguageContext";
import { OpenNowPill } from "@/components/OpenNowPill";
import { ConsultationModal } from "@/components/ConsultationModal";
import { Phone, Menu, X, Globe, Eye } from "lucide-react";

export const Header: React.FC = () => {
  const pathname = usePathname();
  const { lang, toggleLang, t } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  const navLinks = [
    { href: "/", labelEn: "Home", labelTa: "முகப்பு" },
    { href: "/treatments", labelEn: "Specialties", labelTa: "சிகிச்சைகள்" },
    { href: "/treatments/cataract-surgery", labelEn: "Cataract (MICS)", labelTa: "கேடராக்ட் (MICS)" },
    { href: "/schemes", labelEn: "Govt Schemes & TPA", labelTa: "காப்பீடு" },
    { href: "/about", labelEn: "About Surgeon & Visit", labelTa: "மருத்துவர்" },
  ];

  return (
    <>
      <header className="sticky top-0 z-40 w-full bg-[#FFFFFF]/95 backdrop-blur-md border-b border-[#E2DACE] transition-all">
        {/* Top Emergency & Doctor Accreditation Sub-bar */}
        <div className="bg-[#151A1C] text-[#FBF8F3] px-4 py-1.5 text-xs">
          <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
            <div className="flex items-center gap-2">
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#2E7D5B]" />
              <span className="text-[#A1D3FF] font-medium tracking-wide">
                {t(
                  "Single-Surgeon Accountability • Dr. A. Raghuram (MBBS, DO, DNB, FICO UK, FRCS Glasgow)",
                  "ஒற்றை அறுவை சிகிச்சை நிபுணர் • டாக்டர் ஏ. ரகுராம் (FRCS Glasgow)"
                )}
              </span>
              <span className="hidden md:inline text-[#717880]">|</span>
              <span className="hidden md:inline text-[#DFE3E6]">TN-MED-621428</span>
            </div>

            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1.5 text-[#FFB778]">
                <span className="font-semibold">{t("24/7 Eye Trauma:", "24/7 அவசர உதவி:")}</span>
                <a href="tel:04259222444" className="underline font-bold hover:text-[#FFFFFF]">
                  04259 222444
                </a>
              </div>
              <span className="text-[#717880]">•</span>
              <a
                href="https://maps.google.com/?q=Shri+Andavar+Eye+Care+Pollachi"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline text-[#DFE3E6]"
              >
                {t("Opp. LMHSS School, Palladam Rd", "LMHSS பள்ளி எதிரில், பல்லடம் ரோடு")}
              </a>
            </div>
          </div>
        </div>

        {/* Main Navbar */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-[74px] flex items-center justify-between gap-4">
          {/* Brand Logo & Name */}
          <Link href="/" className="flex items-center gap-3 shrink-0 group">
            {/* Aperture Monogram Icon */}
            <div className="w-10 h-10 rounded-full border border-[#0B5C8A]/30 bg-[#EFF3F5] flex items-center justify-center text-[#0B5C8A] group-hover:bg-[#0B5C8A] group-hover:text-[#FFFFFF] transition-colors relative shadow-xs">
              <Eye className="w-5 h-5" />
              <div className="absolute inset-0 rounded-full border border-[#0B5C8A]/20 scale-125 pointer-events-none" />
            </div>

            <div className="flex flex-col">
              <span className="font-serif font-bold text-lg sm:text-xl text-[#151A1C] leading-tight tracking-tight">
                {lang === "ta" ? "ஸ்ரீ ஆண்டவர் கண் மருத்துவமனை" : "Shri Andavar Eye Care"}
              </span>
              <span className="text-[11px] sm:text-xs text-[#0B5C8A] font-medium tracking-wide">
                {lang === "ta"
                  ? "பொள்ளாச்சி"
                  : "& Retina Centre • Pollachi"}
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-3 py-2 rounded text-sm font-semibold transition-colors ${
                    isActive
                      ? "text-[#0B5C8A] bg-[#EFF3F5] font-bold border-b-2 border-[#0B5C8A]"
                      : "text-[#151A1C] hover:text-[#0B5C8A] hover:bg-[#FBF8F3]"
                  }`}
                >
                  {lang === "ta" ? link.labelTa : link.labelEn}
                </Link>
              );
            })}
          </nav>

          {/* Right Action Items */}
          <div className="flex items-center gap-1.5 sm:gap-3 shrink-0">
            {/* Live Open Now Pill (Hidden on mobile header to save space) */}
            <div className="hidden xl:block">
              <OpenNowPill />
            </div>

            {/* Language Switcher */}
            <button
              onClick={toggleLang}
              className="px-2 sm:px-2.5 py-1.5 rounded border border-[#E2DACE] bg-[#FBF8F3] hover:bg-[#F5EFE5] text-[#151A1C] text-xs font-bold tracking-wider uppercase transition-colors flex items-center gap-1.5 cursor-pointer shrink-0"
              title="Toggle English / தமிழ்"
              aria-label="Toggle language"
            >
              <Globe className="w-4 h-4 sm:w-3.5 sm:h-3.5 text-[#0B5C8A]" />
              <span className="hidden sm:inline-block">{lang === "en" ? "தமிழ்" : "English"}</span>
            </button>



            {/* Book Consultation Primary Button */}
            <button
              onClick={() => setModalOpen(true)}
              className="hidden sm:inline-flex items-center justify-center px-4 sm:px-5 py-2.5 bg-[#0B5C8A] hover:bg-[#08486D] text-[#FFFFFF] text-sm font-bold rounded shadow-xs transition-colors cursor-pointer shrink-0"
            >
              {t("Book OPD Token", "முன்பதிவு")}
            </button>

            {/* Mobile Hamburger Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-1.5 sm:p-2 text-[#151A1C] hover:bg-[#EFF3F5] rounded transition-colors shrink-0 -mr-1"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#FFFFFF] border-b border-[#E2DACE] px-4 pt-3 pb-6 space-y-3 shadow-lg animate-in slide-in-from-top-2 duration-200">
            <div className="pb-2 border-b border-[#E2DACE]">
              <OpenNowPill />
            </div>

            <nav className="flex flex-col space-y-1">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`px-3 py-2.5 rounded text-base font-semibold ${
                      isActive
                        ? "text-[#0B5C8A] bg-[#EFF3F5] font-bold"
                        : "text-[#151A1C] hover:bg-[#FBF8F3]"
                    }`}
                  >
                    {lang === "ta" ? link.labelTa : link.labelEn}
                  </Link>
                );
              })}
            </nav>

            <div className="pt-2 border-t border-[#E2DACE] flex flex-col gap-2">
              <button
                onClick={() => {
                  setModalOpen(true);
                  setMobileMenuOpen(false);
                }}
                className="w-full py-2.5 text-center font-bold text-sm text-[#FFFFFF] bg-[#0B5C8A] hover:bg-[#08486D] rounded flex items-center justify-center gap-2 transition-colors"
              >
                {t("Book OPD Token", "முன்பதிவு")}
              </button>

              <a
                href="tel:04259221000"
                className="w-full py-2.5 text-center font-bold text-sm text-[#0B5C8A] border border-[#0B5C8A] rounded bg-[#EFF3F5] flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4" />
                <span>04259 221 000 (OPD Desk)</span>
              </a>

              <a
                href="tel:04259222444"
                className="w-full py-2.5 text-center font-bold text-sm text-[#B8722C] border border-[#B8722C]/40 rounded bg-[#FDF8F3] flex items-center justify-center gap-2"
              >
                <span>⚡ 04259 222444 (24/7 Eye Trauma)</span>
              </a>
            </div>
          </div>
        )}
      </header>

      {/* Consultation Modal */}
      <ConsultationModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
};
