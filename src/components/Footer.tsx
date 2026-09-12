"use client";

import React from "react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { ApertureSVG } from "@/components/ApertureSVG";
import { Phone, MapPin, Clock, ShieldCheck, ChevronRight, Eye } from "lucide-react";

export const Footer: React.FC = () => {
  const { t, lang } = useLanguage();

  return (
    <footer className="relative bg-[#151A1C] text-[#DFE3E6] pt-16 pb-24 sm:pb-16 border-t-4 border-[#0B5C8A] overflow-hidden">
      {/* Aperture Watermark Background */}
      <div className="absolute -right-20 -bottom-20 opacity-10 pointer-events-none">
        <ApertureSVG size={500} strokeColor="#DFE3E6" opacity={0.8} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-[#2C3133]">
          {/* Column 1: Hospital Profile & Ethics (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full border border-[#A1D3FF]/30 bg-[#0B5C8A]/20 flex items-center justify-center text-[#A1D3FF]">
                <Eye className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-xl font-bold font-serif text-[#FFFFFF] tracking-tight">
                  {lang === "ta" ? "ஸ்ரீ ஆண்டவர் கண் மருத்துவமனை" : "Shri Andavar Eye Care"}
                </h3>
                <p className="text-xs text-[#A1D3FF] font-medium">
                  {lang === "ta" ? "& விழித்திரை மையம் • பொள்ளாச்சி" : "& Retina Centre • Pollachi"}
                </p>
              </div>
            </div>

            <p className="text-sm text-[#C0C7D0] leading-relaxed pr-4">
              {t(
                "A specialized ophthalmic and vitreoretinal centre founded on the principle of single-surgeon accountability. The doctor who examines your eyes conducts the surgery and personally manages all post-operative follow-ups.",
                "ஒற்றை அறுவை சிகிச்சை நிபுணர் பொறுப்புணர்வின் கீழ் இயங்கும் சிறப்பு கண் மற்றும் விழித்திரை மையம். ஆரம்ப பரிசோதனை முதல் அறுவை சிகிச்சை மற்றும் பின்தொடர் சிகிச்சை வரை மருத்துவரே நேரடியாக மேற்கொள்கிறார்."
              )}
            </p>

            {/* Surgeon Badge */}
            <div className="p-3.5 bg-[#1F2427] border border-[#2C3133] rounded space-y-1">
              <div className="flex items-center gap-2 text-xs font-bold text-[#A1D3FF]">
                <ShieldCheck className="w-4 h-4 text-[#2E7D5B]" />
                <span>Dr. A. Raghuram, MBBS, DO, DNB, FICO (UK), FRCS (Glasgow)</span>
              </div>
              <p className="text-xs text-[#717880]">
                {t(
                  "Chief Vitreoretinal Surgeon & Medical Director • Reg. No. TN-MED-621428",
                  "தலைமை விழித்திரை அறுவை சிகிச்சை நிபுணர் • பதிவு எண்: TN-MED-621428"
                )}
              </p>
            </div>

            <div className="flex items-center gap-2 text-xs text-[#88D6AF]">
              <span className="w-2 h-2 rounded-full bg-[#2E7D5B]" />
              <span>{t("Empanelled: CMCHIS, TN Pensioners & Star Health TPAs", "முதலமைச்சர் காப்பீடு & தனியார் காப்பீடுகள் அனுமதிக்கப்பட்டது")}</span>
            </div>
          </div>

          {/* Column 2: Clinical Services (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-base font-bold font-serif text-[#FFFFFF] tracking-wide uppercase border-b border-[#2C3133] pb-2">
              {t("Specialties & Surgeries", "சிகிச்சைகள்")}
            </h4>
            <ul className="space-y-2 text-sm text-[#C0C7D0]">
              <li>
                <Link
                  href="/treatments/cataract-surgery"
                  className="hover:text-[#A1D3FF] flex items-center gap-1.5 transition-colors"
                >
                  <ChevronRight className="w-3.5 h-3.5 text-[#0B5C8A]" />
                  <span>{t("MICS Cataract Surgery (Day-Care)", "கேடராக்ட் அறுவை சிகிச்சை")}</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/treatments"
                  className="hover:text-[#A1D3FF] flex items-center gap-1.5 transition-colors"
                >
                  <ChevronRight className="w-3.5 h-3.5 text-[#0B5C8A]" />
                  <span>{t("Vitreoretinal & Flashes / Floaters", "விழித்திரை குறைபாடுகள்")}</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/treatments"
                  className="hover:text-[#A1D3FF] flex items-center gap-1.5 transition-colors"
                >
                  <ChevronRight className="w-3.5 h-3.5 text-[#0B5C8A]" />
                  <span>{t("Diabetic Retinopathy & Macula Care", "சர்க்கரை நோய் கண் சிகிச்சை")}</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/treatments"
                  className="hover:text-[#A1D3FF] flex items-center gap-1.5 transition-colors"
                >
                  <ChevronRight className="w-3.5 h-3.5 text-[#0B5C8A]" />
                  <span>{t("Glaucoma IOP & Laser SLT", "க்ளௌகோமா கண் அழுத்தம்")}</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/schemes"
                  className="hover:text-[#A1D3FF] flex items-center gap-1.5 transition-colors text-[#FFB778]"
                >
                  <ChevronRight className="w-3.5 h-3.5 text-[#B8722C]" />
                  <span className="font-semibold">{t("CMCHIS 100% Cashless Guide", "முதலமைச்சர் காப்பீட்டு வழிகாட்டி")}</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="hover:text-[#A1D3FF] flex items-center gap-1.5 transition-colors"
                >
                  <ChevronRight className="w-3.5 h-3.5 text-[#0B5C8A]" />
                  <span>{t("Single-Surgeon Accountability Code", "ஒற்றை மருத்துவர் கொள்கை")}</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact & Timings (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="text-base font-bold font-serif text-[#FFFFFF] tracking-wide uppercase border-b border-[#2C3133] pb-2">
              {t("Hospital Wayfinding & Hours", "மருத்துவமனை முகவரி & நேரம்")}
            </h4>

            <div className="space-y-3 text-sm text-[#C0C7D0]">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-5 h-5 text-[#A1D3FF] shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium text-[#FFFFFF]">
                    No. 73, Palladam Road, Opposite LMHSS School,
                  </p>
                  <p className="text-[#C0C7D0]">T. Kottampatti, Pollachi – 642002, Tamil Nadu.</p>
                  <p className="text-xs text-[#FFB778] mt-0.5">
                    {t("★ Landmark: Opposite Lourdes Mount School (Direct Bus Stop)", "★ அடையாளம்: LMHSS பள்ளி எதிரில்")}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <Clock className="w-5 h-5 text-[#88D6AF] shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-[#FFFFFF]">
                    {t("Consulting Sessions (Mon – Sat):", "ஆலோசனை நேரம் (திங்கள் - சனி):")}
                  </p>
                  <p className="text-xs text-[#DFE3E6]">
                    {t("Morning: 10:00 AM – 2:00 PM", "காலை: 10:00 - 2:00")}
                  </p>
                  <p className="text-xs text-[#DFE3E6]">
                    {t("Evening: 5:00 PM – 7:00 PM", "மாலை: 5:00 - 7:00")}
                  </p>
                  <p className="text-xs text-[#FFB4A8] font-semibold mt-0.5">
                    {t("Sunday: Closed (Emergency on call)", "ஞாயிறு: விடுமுறை (அவசர பிரிவு இயங்கும்)")}
                  </p>
                </div>
              </div>

              <div className="pt-2 border-t border-[#2C3133] space-y-1.5">
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-[#A1D3FF]" />
                  <span className="text-xs text-[#717880]">{t("OPD Desk:", "ஓ.பி.டி:")}</span>
                  <a href="tel:04259221000" className="text-sm font-bold text-[#FFFFFF] hover:text-[#A1D3FF]">
                    04259 221 000
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-xs text-[#FFB778] font-semibold">{t("24/7 Trauma:", "24/7 அவசரம்:")}</span>
                  <a href="tel:04259222444" className="text-sm font-bold text-[#FFB778] hover:underline">
                    04259 222444
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-xs text-[#DFE3E6]">{t("Mobile / WhatsApp:", "கைபேசி / வாட்ஸ்அப்:")}</span>
                  <a href="tel:9442056767" className="text-sm font-semibold text-[#FFFFFF] hover:text-[#A1D3FF]">
                    +91 94420 56767
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Rights & Disclaimers */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#717880]">
          <p>
            © {new Date().getFullYear()} Shri Andavar Eye Care and Retina Centre. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <span>NABH Guideline Adherent</span>
            <span>•</span>
            <span>Single-Surgeon Ethical Standard</span>
            <span>•</span>
            <span>Pollachi, Tamil Nadu</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
