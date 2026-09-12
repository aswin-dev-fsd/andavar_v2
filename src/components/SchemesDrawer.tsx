"use client";

import React, { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { X, CheckSquare, Square, Phone, FileCheck, ShieldCheck, Printer, AlertCircle } from "lucide-react";

interface SchemesDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SchemesDrawer: React.FC<SchemesDrawerProps> = ({ isOpen, onClose }) => {
  const { t, lang } = useLanguage();
  const [activeTab, setActiveTab] = useState<"cmchis" | "pensioner" | "private">("cmchis");
  const [checkedItems, setCheckedItems] = useState<Record<string, boolean>>({});

  if (!isOpen) return null;

  const toggleCheck = (id: string) => {
    setCheckedItems((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const schemeData = {
    cmchis: {
      titleEn: "CMCHIS (Chief Minister's Comprehensive Health Insurance)",
      titleTa: "தமிழ்நாடு முதலமைச்சரின் விரிவான மருத்துவக் காப்பீட்டுத் திட்டம்",
      badgeEn: "100% Cashless Package for Eligible Smart Cards",
      badgeTa: "முழு கட்டணமில்லா சிகிச்சை (ஸ்மார்ட் கார்டு)",
      descEn: "Covers sutureless day-care cataract surgery (MICS), US-FDA approved foldable lens, pre-op tests, post-op medications, and follow-ups. Zero out-of-pocket payment.",
      descTa: "கேடராக்ட் அறுவை சிகிச்சை, நவீன மடிக்கக்கூடிய லென்ஸ், மருந்துகள் மற்றும் பின்தொடர் பரிசோதனைகள் அனைத்தும் முழுமையாக இலவசம்.",
      items: [
        { id: "cm_1", textEn: "Original Smart Family Ration Card + 2 Photocopies", textTa: "அசல் ஸ்மார்ட் குடும்ப அட்டை (ரேஷன் கார்டு) + 2 நகல்கள்" },
        { id: "cm_2", textEn: "Patient's Original Aadhaar Card linked with active mobile OTP", textTa: "நோயாளி அசல் ஆதார் அட்டை (OTP வரும் கைபேசி எண்ணுடன்)" },
        { id: "cm_3", textEn: "Chief Minister Scheme URN Card or Income Certificate (if available)", textTa: "காப்பீட்டு அட்டை (URN எண்) அல்லது வருமானச் சான்றிதழ் நகல்" },
        { id: "cm_4", textEn: "Previous optical prescriptions or diabetes fasting sugar slips", textTa: "முந்தைய கண் கண்ணாடி சீட்டு அல்லது சர்க்கரை அளவு பரிசோதனை சீட்டு" },
      ],
      noteEn: "Our ground-floor Schemes Liaison Officer processes pre-authorization directly on the same morning.",
      noteTa: "எங்கள் மருத்துவமனையிலேயே காலை வேளையில் நேரடியாக அரசு அனுமதி (Pre-auth) பெறப்படும்.",
    },
    pensioner: {
      titleEn: "Tamil Nadu Government Pensioners Health Scheme",
      titleTa: "தமிழ்நாடு அரசு ஓய்வூதியதாரர்கள் மருத்துவக் காப்பீட்டுத் திட்டம்",
      badgeEn: "Empanelled for State Govt Pensioners & Spouses",
      badgeTa: "அரசு ஓய்வூதியதாரர்கள் & குடும்பத்தினருக்கான திட்டம்",
      descEn: "Cashless eye surgical procedures for retired Tamil Nadu government employees, teachers, transport corporation staff, and their eligible spouses.",
      descTa: "ஓய்வுபெற்ற அரசு ஊழியர்கள் மற்றும் ஆசிரியர்களுக்கான கட்டணமில்லா கண் அறுவை சிகிச்சை.",
      items: [
        { id: "pen_1", textEn: "Pension Payment Order (PPO) booklet copy or Digital PPO slip", textTa: "PPO (ஓய்வூதிய ஆணை) புத்தக நகல் அல்லது டிஜிட்டல் PPO சீட்டு" },
        { id: "pen_2", textEn: "Pensioner Identity Card / New Smart Pensioner Card", textTa: "ஓய்வூதிய அடையாள அட்டை" },
        { id: "pen_3", textEn: "Aadhaar Card of Pensioner and Spouse (Patient)", textTa: "ஓய்வூதியதாரர் மற்றும் நோயாளியின் ஆதார் அட்டை" },
        { id: "pen_4", textEn: "Recent passport-size photograph (2 copies)", textTa: "சமீபத்திய பாஸ்போர்ட் அளவு புகைப்படம் (2 நகல்கள்)" },
      ],
      noteEn: "Fast-track authorization available on all working days from 9:30 AM.",
      noteTa: "திங்கள் முதல் சனி வரை காலை 9:30 மணி முதல் துரித அனுமதி அளிக்கப்படும்.",
    },
    private: {
      titleEn: "Private Health Insurance & Cashless TPAs",
      titleTa: "தனியார் மருத்துவக் காப்பீடு & TPAs",
      badgeEn: "Star Health, MediAssist, Vidal, ICICI Lombard & more",
      badgeTa: "ஸ்டார் ஹெல்த், மீடியாசிஸ்ட் மற்றும் அனைத்து நிறுவனங்கள்",
      descEn: "Direct digital pre-authorization filed within 2 hours of clinical examination by Dr. Raghuram.",
      descTa: "டாக்டர் ரகுராம் பரிசோதனை செய்த 2 மணி நேரத்திற்குள் ஆன்லைன் மூலம் க்ளைம் அனுமதி சமர்ப்பிக்கப்படும்.",
      items: [
        { id: "pri_1", textEn: "Active Health Insurance Policy Card or TPA E-Card with Policy Number", textTa: "நடைமுறையில் உள்ள இன்சூரன்ஸ் கார்டு அல்லது பாலிசி நகல்" },
        { id: "pri_2", textEn: "Policy Proposer Employee/Corporate ID & Patient Aadhaar Card", textTa: "பாலிசிதாரர் அடையாள அட்டை மற்றும் நோயாளியின் ஆதார்" },
        { id: "pri_3", textEn: "Past 2 years medical history records (Diabetes, BP, Cardiac notes)", textTa: "கடந்த 2 வருட சர்க்கரை, ரத்த அழுத்த சிகிச்சை ஆவணங்கள்" },
        { id: "pri_4", textEn: "Cancelled Cheque of primary policyholder for security", textTa: "பாலிசிதாரரின் ரத்து செய்யப்பட்ட வங்கி காசோலை (Cancelled Cheque)" },
      ],
      noteEn: "Dedicated insurance desk coordinator handles all queries with your TPA.",
      noteTa: "எங்கள் இன்சூரன்ஸ் ஒருங்கிணைப்பாளர் அனைத்து பணிகளையும் கவனித்துக் கொள்வார்.",
    },
  };

  const current = schemeData[activeTab];

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-[#151A1C]/60 backdrop-blur-xs animate-in fade-in duration-200">
      {/* Drawer Overlay backdrop */}
      <div className="flex-1 hidden sm:block" onClick={onClose} />

      {/* Drawer Content */}
      <div className="w-full sm:max-w-xl bg-[#FFFFFF] h-full shadow-2xl flex flex-col border-l border-[#E2DACE] overflow-hidden">
        {/* Header */}
        <div className="p-5 bg-[#151A1C] text-[#FFFFFF] flex items-center justify-between border-b border-[#2C3133]">
          <div className="flex items-center gap-2.5">
            <FileCheck className="w-6 h-6 text-[#2E7D5B]" />
            <div>
              <h3 className="text-lg font-bold font-serif text-[#FFFFFF]">
                {t("Schemes & Cashless Checklist", "காப்பீட்டு ஆவணங்கள் வழிகாட்டி")}
              </h3>
              <p className="text-xs text-[#A1D3FF]">
                {t("Bring these exact papers before travelling to Pollachi", "மருத்துவமனைக்கு வரும் முன் கொண்டு வர வேண்டியவை")}
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-[#C0C7D0] hover:text-[#FFFFFF] hover:bg-[#2C3133] rounded-full transition-colors"
            aria-label="Close drawer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Selector */}
        <div className="flex border-b border-[#E2DACE] bg-[#F0F4F7] text-xs sm:text-sm font-semibold">
          <button
            onClick={() => setActiveTab("cmchis")}
            className={`flex-1 py-3 px-2 text-center transition-colors cursor-pointer border-b-2 ${
              activeTab === "cmchis"
                ? "bg-[#FFFFFF] text-[#0B5C8A] border-[#0B5C8A] font-bold"
                : "text-[#41474F] hover:text-[#151A1C] border-transparent"
            }`}
          >
            CMCHIS (Govt)
          </button>
          <button
            onClick={() => setActiveTab("pensioner")}
            className={`flex-1 py-3 px-2 text-center transition-colors cursor-pointer border-b-2 ${
              activeTab === "pensioner"
                ? "bg-[#FFFFFF] text-[#0B5C8A] border-[#0B5C8A] font-bold"
                : "text-[#41474F] hover:text-[#151A1C] border-transparent"
            }`}
          >
            {t("Pensioners", "ஓய்வூதியம்")}
          </button>
          <button
            onClick={() => setActiveTab("private")}
            className={`flex-1 py-3 px-2 text-center transition-colors cursor-pointer border-b-2 ${
              activeTab === "private"
                ? "bg-[#FFFFFF] text-[#0B5C8A] border-[#0B5C8A] font-bold"
                : "text-[#41474F] hover:text-[#151A1C] border-transparent"
            }`}
          >
            Star / TPAs
          </button>
        </div>

        {/* Body content */}
        <div className="flex-1 overflow-y-auto p-5 sm:p-6 space-y-6 text-[#151A1C]">
          {/* Scheme Banner */}
          <div className="p-4 bg-[#EFF7F3] border border-[#2E7D5B]/30 rounded-lg">
            <span className="inline-block px-2 py-0.5 bg-[#2E7D5B] text-[#FFFFFF] text-[11px] font-bold rounded mb-2">
              {lang === "ta" ? current.badgeTa : current.badgeEn}
            </span>
            <h4 className="font-bold text-base text-[#151A1C]">
              {lang === "ta" ? current.titleTa : current.titleEn}
            </h4>
            <p className="text-xs text-[#41474F] mt-1.5 leading-relaxed">
              {lang === "ta" ? current.descTa : current.descEn}
            </p>
          </div>

          {/* Interactive Checklist */}
          <div>
            <div className="flex items-center justify-between mb-3">
              <h5 className="font-bold text-sm text-[#151A1C] uppercase tracking-wide">
                {t("Documents Checklist (Tick As You Pack)", "கையில் எடுக்க வேண்டிய ஆவணங்கள்:")}
              </h5>
              <span className="text-xs text-[#717880]">
                {Object.values(checkedItems).filter(Boolean).length} / {current.items.length} {t("Packed", "தயார்")}
              </span>
            </div>

            <div className="space-y-2.5">
              {current.items.map((item) => {
                const isChecked = !!checkedItems[item.id];
                return (
                  <div
                    key={item.id}
                    onClick={() => toggleCheck(item.id)}
                    className={`p-3.5 rounded border transition-all flex items-start gap-3 cursor-pointer select-none ${
                      isChecked
                        ? "bg-[#EFF7F3] border-[#2E7D5B]/40 text-[#151A1C]"
                        : "bg-[#FFFFFF] border-[#E2DACE] hover:border-[#0B5C8A]/40 text-[#41474F]"
                    }`}
                  >
                    <div className="mt-0.5 text-[#2E7D5B] shrink-0">
                      {isChecked ? (
                        <CheckSquare className="w-5 h-5 text-[#2E7D5B]" />
                      ) : (
                        <Square className="w-5 h-5 text-[#CBD5E1]" />
                      )}
                    </div>
                    <span className={`text-sm leading-snug ${isChecked ? "line-through text-[#717880]" : "font-medium"}`}>
                      {lang === "ta" ? item.textTa : item.textEn}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Scheme Helpdesk Note */}
          <div className="p-3.5 bg-[#F0F4F7] border border-[#CBD5E1] rounded text-xs space-y-1">
            <div className="flex items-center gap-1.5 font-bold text-[#0B5C8A]">
              <ShieldCheck className="w-4 h-4" />
              <span>{t("Schemes Helpdesk Assistance", "நேரடி உதவி மையம்")}</span>
            </div>
            <p className="text-[#41474F]">
              {lang === "ta" ? current.noteTa : current.noteEn}
            </p>
          </div>

          {/* Upfront reassurance for self-pay */}
          <div className="p-3.5 bg-[#FDF8F3] border border-[#B8722C]/30 rounded text-xs space-y-1">
            <p className="font-bold text-[#B8722C]">
              {t("Don't have an active government scheme or private policy?", "காப்பீடு ஏதும் இல்லையா?")}
            </p>
            <p className="text-[#41474F]">
              {t(
                "We provide an all-inclusive single written estimate before dilation. Zero separate consumable charges or surprise discharge bills.",
                "முழுமையான வெளிப்படையான கட்டணம் முன்பே எழுத்துப்பூர்வமாக தெரிவிக்கப்படும். மறைமுக கூடுதல் கட்டணங்கள் ஏதுமில்லை."
              )}
            </p>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="p-4 bg-[#FBF8F3] border-t border-[#E2DACE] space-y-2">
          <div className="flex items-center gap-2">
            <a
              href="tel:04259221000"
              className="flex-1 py-3 bg-[#0B5C8A] hover:bg-[#08486D] text-[#FFFFFF] font-bold text-sm rounded flex items-center justify-center gap-2 transition-colors cursor-pointer"
            >
              <Phone className="w-4 h-4" />
              <span>{t("Call Scheme Officer: 221 000", "அதிகாரியை அழைக்க: 221 000")}</span>
            </a>
            <button
              onClick={() => window.print()}
              className="px-3.5 py-3 bg-[#FFFFFF] border border-[#CBD5E1] hover:bg-[#F0F4F7] text-[#151A1C] text-sm rounded flex items-center justify-center transition-colors cursor-pointer"
              title="Print checklist"
            >
              <Printer className="w-4 h-4 text-[#717880]" />
            </button>
          </div>
          <p className="text-[11px] text-center text-[#717880]">
            {t(
              "Ground Floor Helpdesk, Shri Andavar Eye Care, Opp. LMHSS School, Pollachi",
              "தரைத்தளம், ஸ்ரீ ஆண்டவர் கண் மருத்துவமனை, LMHSS பள்ளி எதிரில், பொள்ளாச்சி"
            )}
          </p>
        </div>
      </div>
    </div>
  );
};
