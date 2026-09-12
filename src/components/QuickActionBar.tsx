"use client";

import React from "react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { Calendar, PhoneCall, FileText, UserCheck, MapPin, ChevronRight } from "lucide-react";

interface QuickActionBarProps {
  onOpenBooking: () => void;
  onOpenSchemesDrawer: () => void;
}

export const QuickActionBar: React.FC<QuickActionBarProps> = ({
  onOpenBooking,
  onOpenSchemesDrawer,
}) => {
  const { t, lang } = useLanguage();

  return (
    <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 -mt-8 sm:-mt-12">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4">
        {/* Card 1: Book Consultation */}
        <button
          onClick={onOpenBooking}
          className="text-left bg-[#FFFFFF] hover:bg-[#FBF8F3] border border-[#E2DACE] hover:border-[#0B5C8A] p-4 sm:p-5 rounded-lg shadow-sm hover:shadow-md transition-all group flex flex-col justify-between cursor-pointer"
        >
          <div>
            <div className="w-10 h-10 rounded-full bg-[#EFF3F5] text-[#0B5C8A] group-hover:bg-[#0B5C8A] group-hover:text-[#FFFFFF] flex items-center justify-center transition-colors mb-3">
              <Calendar className="w-5 h-5" />
            </div>
            <h4 className="font-bold text-base text-[#151A1C] leading-snug">
              {t("Book OPD Consultation", "ஓ.பி.டி முன்பதிவு")}
            </h4>
            <p className="text-xs text-[#717880] mt-1 line-clamp-2">
              {t("Mon–Sat: 10am–2pm & 5pm–7pm", "காலை 10-2 & மாலை 5-7")}
            </p>
          </div>
          <div className="flex items-center text-xs font-bold text-[#0B5C8A] mt-3 pt-2 border-t border-[#F0F4F7]">
            <span>{t("Select Slot", "நேரம் தேர்வு")}</span>
            <ChevronRight className="w-3.5 h-3.5 ml-1 transition-transform group-hover:translate-x-1" />
          </div>
        </button>

        {/* Card 2: 24/7 Eye Trauma Hotline */}
        <a
          href="tel:04259222444"
          className="text-left bg-[#FFFFFF] hover:bg-[#FDF8F3] border border-[#E2DACE] hover:border-[#B8722C] p-4 sm:p-5 rounded-lg shadow-sm hover:shadow-md transition-all group flex flex-col justify-between cursor-pointer"
        >
          <div>
            <div className="w-10 h-10 rounded-full bg-[#FDF8F3] text-[#B8722C] group-hover:bg-[#B8722C] group-hover:text-[#FFFFFF] flex items-center justify-center transition-colors mb-3">
              <PhoneCall className="w-5 h-5" />
            </div>
            <div className="flex items-center gap-1.5 mb-0.5">
              <span className="w-2 h-2 rounded-full bg-[#B8722C] animate-ping" />
              <span className="text-[10px] font-bold text-[#B8722C] uppercase tracking-wider">
                {t("Emergency", "அவசர பிரிவு")}
              </span>
            </div>
            <h4 className="font-bold text-base text-[#151A1C] leading-snug">
              {t("24/7 Eye Trauma", "கண் அவசர உதவி")}
            </h4>
            <p className="text-xs text-[#717880] mt-1 font-mono font-semibold">
              04259 222444
            </p>
          </div>
          <div className="flex items-center text-xs font-bold text-[#B8722C] mt-3 pt-2 border-t border-[#F0F4F7]">
            <span>{t("Direct Dial", "உடனடி அழைப்பு")}</span>
            <ChevronRight className="w-3.5 h-3.5 ml-1 transition-transform group-hover:translate-x-1" />
          </div>
        </a>

        {/* Card 3: CMCHIS & Schemes Checklist */}
        <button
          onClick={onOpenSchemesDrawer}
          className="text-left bg-[#FFFFFF] hover:bg-[#EFF7F3] border border-[#E2DACE] hover:border-[#2E7D5B] p-4 sm:p-5 rounded-lg shadow-sm hover:shadow-md transition-all group flex flex-col justify-between cursor-pointer"
        >
          <div>
            <div className="w-10 h-10 rounded-full bg-[#EFF7F3] text-[#2E7D5B] group-hover:bg-[#2E7D5B] group-hover:text-[#FFFFFF] flex items-center justify-center transition-colors mb-3">
              <FileText className="w-5 h-5" />
            </div>
            <span className="inline-block px-1.5 py-0.5 bg-[#EFF7F3] text-[#2E7D5B] text-[10px] font-bold rounded mb-1">
              {t("100% Cashless", "முழு இலவசம்")}
            </span>
            <h4 className="font-bold text-base text-[#151A1C] leading-snug">
              {t("Govt Schemes Checklist", "அரசு காப்பீடு ஆவணங்கள்")}
            </h4>
            <p className="text-xs text-[#717880] mt-1 line-clamp-2">
              {t("CMCHIS & Pensioners Scheme", "ஸ்மார்ட் ரேஷன் அட்டை & ஓய்வூதியம்")}
            </p>
          </div>
          <div className="flex items-center text-xs font-bold text-[#2E7D5B] mt-3 pt-2 border-t border-[#F0F4F7]">
            <span>{t("View Papers to Bring", "ஆவணப் பட்டியல்")}</span>
            <ChevronRight className="w-3.5 h-3.5 ml-1 transition-transform group-hover:translate-x-1" />
          </div>
        </button>

        {/* Card 4: Surgeon Credentials */}
        <Link
          href="/about"
          className="text-left bg-[#FFFFFF] hover:bg-[#FBF8F3] border border-[#E2DACE] hover:border-[#0B5C8A] p-4 sm:p-5 rounded-lg shadow-sm hover:shadow-md transition-all group flex flex-col justify-between"
        >
          <div>
            <div className="w-10 h-10 rounded-full bg-[#EFF3F5] text-[#0B5C8A] group-hover:bg-[#0B5C8A] group-hover:text-[#FFFFFF] flex items-center justify-center transition-colors mb-3">
              <UserCheck className="w-5 h-5" />
            </div>
            <span className="text-[10px] font-bold text-[#0B5C8A] uppercase tracking-wider block mb-1">
              FRCS (Glasgow)
            </span>
            <h4 className="font-bold text-base text-[#151A1C] leading-snug">
              {t("Dr. A. Raghuram", "டாக்டர் ஏ. ரகுராம்")}
            </h4>
            <p className="text-xs text-[#717880] mt-1 line-clamp-2">
              {t("Single-Surgeon Accountability", "ஒற்றை மருத்துவர் தொடர் கவனிப்பு")}
            </p>
          </div>
          <div className="flex items-center text-xs font-bold text-[#0B5C8A] mt-3 pt-2 border-t border-[#F0F4F7]">
            <span>{t("Read Bio & Ethics", "விவரங்கள்")}</span>
            <ChevronRight className="w-3.5 h-3.5 ml-1 transition-transform group-hover:translate-x-1" />
          </div>
        </Link>

        {/* Card 5: Landmark Wayfinding */}
        <Link
          href="/about#landmark"
          className="col-span-2 md:col-span-1 lg:col-span-1 text-left bg-[#FFFFFF] hover:bg-[#FBF8F3] border border-[#E2DACE] hover:border-[#0B5C8A] p-4 sm:p-5 rounded-lg shadow-sm hover:shadow-md transition-all group flex flex-col justify-between"
        >
          <div>
            <div className="w-10 h-10 rounded-full bg-[#EFF3F5] text-[#0B5C8A] group-hover:bg-[#0B5C8A] group-hover:text-[#FFFFFF] flex items-center justify-center transition-colors mb-3">
              <MapPin className="w-5 h-5" />
            </div>
            <span className="text-[10px] font-bold text-[#2E7D5B] uppercase tracking-wider block mb-1">
              {t("Step-Free Ramp Access", "சாய்வுதளம் உள்ளது")}
            </span>
            <h4 className="font-bold text-base text-[#151A1C] leading-snug">
              {t("Find Hospital Landmark", "மருத்துவமனை இருப்பிடம்")}
            </h4>
            <p className="text-xs text-[#717880] mt-1 line-clamp-2">
              {t("Opp. LMHSS School, Palladam Rd", "LMHSS பள்ளி எதிரில், பல்லடம் ரோடு")}
            </p>
          </div>
          <div className="flex items-center text-xs font-bold text-[#0B5C8A] mt-3 pt-2 border-t border-[#F0F4F7]">
            <span>{t("Route Directions", "வழித்தடம்")}</span>
            <ChevronRight className="w-3.5 h-3.5 ml-1 transition-transform group-hover:translate-x-1" />
          </div>
        </Link>
      </div>
    </div>
  );
};
