"use client";

import React, { useState, useEffect } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { Phone, Navigation, AlertTriangle } from "lucide-react";

export const StickyCallBar: React.FC = () => {
  const { t, lang } = useLanguage();
  const [isClinicOpen, setIsClinicOpen] = useState(true);

  useEffect(() => {
    const checkHours = () => {
      const now = new Date();
      const istString = now.toLocaleString("en-US", { timeZone: "Asia/Kolkata" });
      const ist = new Date(istString);
      const day = ist.getDay(); // 0 = Sun, 1-6 = Mon-Sat
      const minutes = ist.getHours() * 60 + ist.getMinutes();

      const openMorning = minutes >= 600 && minutes < 840; // 10:00 - 14:00
      const openEvening = minutes >= 1020 && minutes < 1140; // 17:00 - 19:00
      setIsClinicOpen(day >= 1 && day <= 6 && (openMorning || openEvening));
    };

    checkHours();
    const interval = setInterval(checkHours, 60000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#FFFFFF] border-t border-[#E2DACE] shadow-[0_-4px_20px_rgba(21,26,28,0.12)] p-2.5 pb-[max(0.625rem,env(safe-area-inset-bottom))] transition-transform">
      <div className="grid grid-cols-2 gap-2">
        {/* Left Action: Direct Phone Call */}
        {isClinicOpen ? (
          <a
            href="tel:04259221000"
            className="flex items-center justify-center gap-2 h-12 bg-[#0B5C8A] active:bg-[#08486D] text-[#FFFFFF] font-bold text-sm rounded shadow-xs transition-colors cursor-pointer"
          >
            <Phone className="w-4 h-4 shrink-0" />
            <span className="truncate">
              {lang === "ta" ? "அழைக்க: 221000" : "Call Desk: 221 000"}
            </span>
          </a>
        ) : (
          <a
            href="tel:04259222444"
            className="flex items-center justify-center gap-1.5 h-12 bg-[#B8722C] active:bg-[#8D4F06] text-[#FFFFFF] font-bold text-xs rounded shadow-xs transition-colors cursor-pointer"
          >
            <AlertTriangle className="w-4 h-4 shrink-0" />
            <span className="truncate">
              {lang === "ta" ? "அவசரம்: 222444" : "24/7 Trauma: 222444"}
            </span>
          </a>
        )}

        {/* Right Action: Directions */}
        <a
          href="https://maps.google.com/?q=Shri+Andavar+Eye+Care+Pollachi"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 h-12 bg-[#F0F4F7] hover:bg-[#E2DACE] active:bg-[#DFE3E6] text-[#151A1C] border border-[#CBD5E1] font-bold text-sm rounded transition-colors cursor-pointer"
        >
          <Navigation className="w-4 h-4 text-[#0B5C8A] shrink-0" />
          <span>{lang === "ta" ? "வழித்தடம் (Map)" : "Directions"}</span>
        </a>
      </div>
    </div>
  );
};
