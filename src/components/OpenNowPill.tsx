"use client";

import React, { useState, useEffect } from "react";
import { useLanguage } from "@/context/LanguageContext";

export const OpenNowPill: React.FC<{ compact?: boolean; className?: string }> = ({
  compact = false,
  className = "",
}) => {
  const { t, lang } = useLanguage();
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [statusText, setStatusText] = useState<string>("");

  useEffect(() => {
    const checkClinicHours = () => {
      // Get current date & time in IST (Indian Standard Time)
      const now = new Date();
      const istString = now.toLocaleString("en-US", { timeZone: "Asia/Kolkata" });
      const istDate = new Date(istString);

      const day = istDate.getDay(); // 0 = Sunday, 1 = Monday, ... 6 = Saturday
      const hour = istDate.getHours();
      const minutes = istDate.getMinutes();
      const currentTime = hour * 60 + minutes;

      // Monday (1) through Saturday (6)
      const isWeekday = day >= 1 && day <= 6;
      // Session 1: 10:00 AM (600 mins) to 2:00 PM (840 mins)
      const isMorningSession = currentTime >= 600 && currentTime < 840;
      // Session 2: 5:00 PM (1020 mins) to 7:00 PM (1140 mins)
      const isEveningSession = currentTime >= 1020 && currentTime < 1140;

      if (isWeekday && (isMorningSession || isEveningSession)) {
        setIsOpen(true);
        if (lang === "ta") {
          setStatusText(
            isMorningSession
              ? "மருத்துவர் ஓ.பி.டியில் உள்ளார் • காலை 10:00 - 2:00"
              : "மருத்துவர் ஓ.பி.டியில் உள்ளார் • மாலை 5:00 - 7:00"
          );
        } else {
          setStatusText(
            isMorningSession
              ? "Surgeon in Clinic Today • OPD 10:00 AM – 2:00 PM"
              : "Surgeon in Clinic Today • OPD 5:00 PM – 7:00 PM"
          );
        }
      } else {
        setIsOpen(false);
        if (day === 0) {
          // Sunday
          setStatusText(
            lang === "ta"
              ? "ஞாயிறு விடுமுறை • அவசர உதவி: 04259 222444"
              : "Sunday Closed • 24/7 Trauma: 04259 222444"
          );
        } else if (currentTime < 600) {
          // Before 10:00 AM
          setStatusText(
            lang === "ta"
              ? "அடுத்த ஓ.பி.டி: இன்று காலை 10:00 மணிக்கு"
              : "Next OPD Session: Today 10:00 AM"
          );
        } else if (currentTime < 1020) {
          // Between 2:00 PM and 5:00 PM
          setStatusText(
            lang === "ta"
              ? "மதிய இடைவேளை • மாலை ஓ.பி.டி 5:00 மணிக்கு"
              : "Midday Break • Evening OPD opens 5:00 PM"
          );
        } else {
          // After 7:00 PM
          setStatusText(
            lang === "ta"
              ? "ஓ.பி.டி முடிந்தது • நாளை காலை 10:00 மணிக்கு"
              : "OPD Closed for Today • Tomorrow 10:00 AM"
          );
        }
      }
    };

    checkClinicHours();
    const interval = setInterval(checkClinicHours, 60000); // refresh every minute
    return () => clearInterval(interval);
  }, [lang]);

  if (compact) {
    return (
      <div
        className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold tracking-wide border ${
          isOpen
            ? "bg-[#EFF7F3] text-[#2E7D5B] border-[#2E7D5B]/30"
            : "bg-[#FDF8F3] text-[#B8722C] border-[#B8722C]/30"
        } ${className}`}
        title={statusText}
      >
        <span
          className={`w-2 h-2 rounded-full ${
            isOpen ? "bg-[#2E7D5B] pulse-dot" : "bg-[#B8722C]"
          }`}
        />
        <span>{isOpen ? (lang === "ta" ? "கிளினிக் திறந்துள்ளது" : "Clinic Open Now") : (lang === "ta" ? "ஓ.பி.டி முடிந்தது" : "OPD Closed")}</span>
      </div>
    );
  }

  return (
    <div
      className={`inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full text-[13px] font-medium tracking-wide border transition-all ${
        isOpen
          ? "bg-[#EFF7F3] text-[#2E7D5B] border-[#2E7D5B]/30"
          : "bg-[#FDF8F3] text-[#B8722C] border-[#B8722C]/30"
      } ${className}`}
    >
      <span
        className={`w-2.5 h-2.5 rounded-full shrink-0 ${
          isOpen ? "bg-[#2E7D5B] pulse-dot shadow-[0_0_8px_rgba(46,125,91,0.5)]" : "bg-[#B8722C]"
        }`}
      />
      <span className="font-semibold">{statusText}</span>
    </div>
  );
};
