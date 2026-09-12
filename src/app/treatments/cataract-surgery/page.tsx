"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { ConsultationModal } from "@/components/ConsultationModal";
import { SchemesDrawer } from "@/components/SchemesDrawer";
import {
  CheckCircle2,
  Calendar,
  Phone,
  Clock,
  ShieldCheck,
  ChevronRight,
  Eye,
  AlertCircle,
  HelpCircle,
  ArrowRight,
  FileCheck,
} from "lucide-react";

export default function CataractSurgeryPage() {
  const { t, lang } = useLanguage();
  const [modalOpen, setModalOpen] = useState(false);
  const [schemesDrawerOpen, setSchemesDrawerOpen] = useState(false);
  const [selectedLens, setSelectedLens] = useState("monofocal");

  return (
    <div className="bg-[#FBF8F3] min-h-screen py-10 sm:py-14 text-[#151A1C]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Breadcrumb */}
        <nav className="text-xs text-[#717880] mb-6 flex items-center gap-1.5">
          <Link href="/" className="hover:text-[#0B5C8A]">
            {t("Home", "முகப்பு")}
          </Link>
          <span>/</span>
          <Link href="/treatments" className="hover:text-[#0B5C8A]">
            {t("Specialties", "சிகிச்சைகள்")}
          </Link>
          <span>/</span>
          <span className="text-[#151A1C] font-semibold">
            {t("MICS Cataract Surgery", "கேடராக்ட் அறுவை சிகிச்சை")}
          </span>
        </nav>

        {/* ───────────────────────────────────────────────────────────
            1. TREATMENT HERO SECTION
            ─────────────────────────────────────────────────────────── */}
        <div className="bg-[#FFFFFF] border-2 border-[#E2DACE] rounded-xl p-6 sm:p-10 mb-12 shadow-sm">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#EFF3F5] text-[#0B5C8A] text-xs font-bold uppercase tracking-wider">
              <span>{t("Day-Care Ophthalmology", "ஒரு நாள் கண் அறுவை சிகிச்சை")}</span>
              <span>•</span>
              <span>{t("Single-Surgeon Accountability", "மருத்துவரின் நேரடி கவனிப்பு")}</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-serif text-[#151A1C] leading-tight">
              {lang === "ta"
                ? "Micro-Incision Cataract Surgery (MICS) / கேடராக்ட் அறுவை சிகிச்சை"
                : "Micro-Incision Cataract Surgery (MICS)"}
            </h1>

            <p className="text-lg text-[#41474F] leading-relaxed">
              {t(
                "Single-surgeon accountability from first slit-lamp exam to final post-op check. Sutureless 2.2mm micro-incision phacoemulsification with topical anaesthesia eye drops. No needle injections. Walk in at 8:30 AM, home before noon.",
                "முதல் பரிசோதனை முதல் அறுவை சிகிச்சை வரை டாக்டர் ஏ. ரகுராம் அவர்களே நேரடியாகச் செய்கிறார். ஊசி இல்லாத சொட்டு மருந்து முறை. 2.2மிமீ தையலில்லா நுண்துளை அறுவை சிகிச்சை. காலையில் வந்து மதியம் வீடு திரும்பலாம்."
              )}
            </p>

            {/* Quick Metrics */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
              <div className="p-3 bg-[#FBF8F3] border border-[#E2DACE] rounded flex items-center gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-[#2E7D5B] shrink-0" />
                <div className="text-xs">
                  <span className="font-bold text-[#151A1C] block">2.2mm Micro-Port</span>
                  <span className="text-[#717880]">{t("Self-sealing, zero stitches", "சுய மூடல், தையல் இல்லை")}</span>
                </div>
              </div>

              <div className="p-3 bg-[#FBF8F3] border border-[#E2DACE] rounded flex items-center gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-[#2E7D5B] shrink-0" />
                <div className="text-xs">
                  <span className="font-bold text-[#151A1C] block">{t("Topical Drops Only", "சொட்டு மருந்து முறை")}</span>
                  <span className="text-[#717880]">{t("Zero needle injections", "ஊசி போடப்படுவதில்லை")}</span>
                </div>
              </div>

              <div className="p-3 bg-[#EFF7F3] border border-[#2E7D5B]/40 rounded flex items-center gap-2.5">
                <ShieldCheck className="w-5 h-5 text-[#2E7D5B] shrink-0" />
                <div className="text-xs">
                  <span className="font-bold text-[#2E7D5B] block">{t("100% CMCHIS Cashless", "முதலமைச்சர் காப்பீடு")}</span>
                  <span className="text-[#717880]">{t("Foldable lens included", "மடிக்கக்கூடிய லென்ஸ்")}</span>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <button
                onClick={() => setModalOpen(true)}
                className="px-6 py-3.5 bg-[#0B5C8A] hover:bg-[#08486D] text-[#FFFFFF] font-bold text-sm rounded shadow-xs transition-colors flex items-center gap-2 cursor-pointer"
              >
                <Calendar className="w-4 h-4" />
                <span>{t("Schedule Cataract Evaluation", "பரிசோதனை முன்பதிவு")}</span>
              </button>

              <button
                onClick={() => setSchemesDrawerOpen(true)}
                className="px-5 py-3.5 bg-[#FFFFFF] hover:bg-[#F5EFE5] text-[#2E7D5B] border-1.5 border-[#2E7D5B] font-bold text-sm rounded transition-colors flex items-center gap-2 cursor-pointer"
              >
                <FileCheck className="w-4 h-4" />
                <span>{t("Check CMCHIS / Insurance Eligibility", "காப்பீட்டு ஆவணங்கள் பார்க்க")}</span>
              </button>
            </div>
          </div>
        </div>

        {/* ───────────────────────────────────────────────────────────
            2. DAY-CARE SURGERY PATIENT JOURNEY TIMELINE
            ─────────────────────────────────────────────────────────── */}
        <section className="mb-14">
          <div className="max-w-3xl mb-8">
            <span className="text-xs font-bold uppercase tracking-widest text-[#0B5C8A]">
              {t("Day-Care Surgery Timeline / நாள் அட்டவணை", "அறுவை சிகிச்சை நாள் அட்டவணை")}
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold font-serif text-[#151A1C] mt-1">
              {t("In by morning, home by lunch.", "காலையில் வந்து மதியம் வீடு திரும்பலாம்.")}
            </h2>
            <p className="text-sm text-[#41474F] mt-1">
              {t(
                "You do not stay overnight. Every stage of your 3-hour morning visit is planned for safety and low anxiety:",
                "மருத்துவமனையில் இரவில் தங்க வேண்டிய அவசியமில்லை. அன்றைய தின கால அட்டவணை:"
              )}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="p-5 bg-[#FFFFFF] border border-[#E2DACE] rounded-lg relative">
              <span className="text-xl font-bold font-serif text-[#0B5C8A]">08:30 AM</span>
              <h4 className="font-bold text-base text-[#151A1C] mt-2">
                {t("1. Check-In & Biometry", "1. பதிவு & பரிசோதனை")}
              </h4>
              <p className="text-xs text-[#41474F] mt-1.5 leading-relaxed">
                {t(
                  "Arrive with an accompanying family member. Dr. Raghuram cross-checks your optical A-scan biometry and verifies the sealed IOL lens power barcode.",
                  "குடும்பத்தினருடன் வருகை. லென்ஸ் எண் மற்றும் கண் அழுத்தம் மீண்டும் இறுதி சரிபார்ப்பு செய்யப்படும்."
                )}
              </p>
            </div>

            <div className="p-5 bg-[#FFFFFF] border border-[#E2DACE] rounded-lg relative">
              <span className="text-xl font-bold font-serif text-[#0B5C8A]">09:15 AM</span>
              <h4 className="font-bold text-base text-[#151A1C] mt-2">
                {t("2. Topical Drops (No Injections)", "2. சொட்டு மருந்து முறை")}
              </h4>
              <p className="text-xs text-[#41474F] mt-1.5 leading-relaxed">
                {t(
                  "Gentle topical anaesthetic drops numb the cornea completely. No peribulbar needles, zero facial nerve blocks, zero bruising.",
                  "கண்ணில் சொட்டு மருந்து மட்டுமே இடப்படும். கண்களின் பின்னால் ஊசிகள் எதுவும் போடப்படுவதில்லை."
                )}
              </p>
            </div>

            <div className="p-5 bg-[#EFF7F3] border border-[#2E7D5B]/40 rounded-lg relative">
              <span className="text-xl font-bold font-serif text-[#2E7D5B]">09:45 AM</span>
              <h4 className="font-bold text-base text-[#151A1C] mt-2">
                {t("3. 15-Minute MICS Phaco", "3. 15 நிமிட நுண்துளை அறுவை சிகிச்சை")}
              </h4>
              <p className="text-xs text-[#41474F] mt-1.5 leading-relaxed">
                {t(
                  "Dr. Raghuram personally performs cold ultrasound phacoemulsification through a 2.2mm micro-port. The foldable IOL is implanted smoothly.",
                  "டாக்டர் ரகுராம் அவர்களே 2.2மிமீ துளை வழியே லென்ஸை மாற்றி அமைக்கிறார். வலி இல்லாத விரைவு முறை."
                )}
              </p>
            </div>

            <div className="p-5 bg-[#FFFFFF] border border-[#E2DACE] rounded-lg relative">
              <span className="text-xl font-bold font-serif text-[#0B5C8A]">11:30 AM</span>
              <h4 className="font-bold text-base text-[#151A1C] mt-2">
                {t("4. Discharge with Shield", "4. வீடு திரும்புதல்")}
              </h4>
              <p className="text-xs text-[#41474F] mt-1.5 leading-relaxed">
                {t(
                  "A clear protective eye shield is placed. You receive printed bilingual post-op drop instructions and walk home with your family.",
                  "பாதுகாப்பு கவசம் பொருத்தப்பட்டு, தமிழ் மருந்து அட்டவணையுடன் மதிய உணவிற்குள் வீடு செல்லலாம்."
                )}
              </p>
            </div>
          </div>
        </section>

        {/* ───────────────────────────────────────────────────────────
            3. SURGICAL EYE ANATOMY & LENS REPLACEMENT DIAGRAM
            ─────────────────────────────────────────────────────────── */}
        <section className="mb-14 p-6 sm:p-8 bg-[#FFFFFF] border border-[#E2DACE] rounded-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-6 space-y-4">
              <span className="text-xs font-bold uppercase tracking-widest text-[#0B5C8A]">
                {t("Surgical Mechanism / செயல்முறை விளக்கம்", "செயல்முறை விளக்கம்")}
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold font-serif text-[#151A1C]">
                {t("How Micro-Incision Phacoemulsification Works", "2.2மிமீ நுண்துளை அறுவை சிகிச்சை எவ்வாறு செய்யப்படுகிறது?")}
              </h3>
              <p className="text-sm text-[#41474F] leading-relaxed">
                {t(
                  "A cataract is not a growth over the eye; it is the natural lens inside your eye becoming cloudy with age. Through a microscopic 2.2mm corneal tunnel, ultrasonic waves gently dissolve the cloudy lens matter, leaving the natural capsular bag clean.",
                  "கேடராக்ட் என்பது கண்ணின் மேல் வளரும் சதை அல்ல; வயது முதிர்வினால் கண்ணின் உள்ளே இருக்கும் இயற்கை லென்ஸ் மங்குவதே ஆகும். 2.2மிமீ நுண்துளை வழியே அல்ட்ராசவுண்ட் அலைகள் மூலம் அது அகற்றப்பட்டு, புதிய மடிக்கக்கூடிய லென்ஸ் பொருத்தப்படுகிறது."
                )}
              </p>

              <div className="space-y-2 text-xs text-[#151A1C]">
                <div className="p-2.5 bg-[#FBF8F3] border border-[#E2DACE] rounded flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#0B5C8A]" />
                  <span>{t("1. 2.2mm Self-Sealing Corneal Tunnel (No Sutures)", "1. 2.2மிமீ தானாக மூடிக்கொள்ளும் மைக்ரோ போர்ட்")}</span>
                </div>
                <div className="p-2.5 bg-[#FBF8F3] border border-[#E2DACE] rounded flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#B8722C]" />
                  <span>{t("2. Ultrasound Phaco Liquefaction of Clouded Lens", "2. அல்ட்ராசவுண்ட் மூலம் மங்கிய லென்ஸ் நீக்கம்")}</span>
                </div>
                <div className="p-2.5 bg-[#EFF7F3] border border-[#2E7D5B]/30 rounded flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#2E7D5B]" />
                  <span>{t("3. Foldable Hydrophobic IOL Unfolding in Capsular Bag", "3. மடிக்கக்கூடிய செயற்கை லென்ஸ் (IOL) பொருத்துதல்")}</span>
                </div>
              </div>
            </div>

            {/* Medical SVG Graphic Container */}
            <div className="lg:col-span-6 flex items-center justify-center p-6 bg-[#EFF3F5] border border-[#CBD5E1] rounded-lg">
              <svg
                viewBox="0 0 400 240"
                className="w-full max-w-sm h-auto"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Sclera & Cornea Contour */}
                <path
                  d="M 50 120 C 50 40, 200 30, 260 50 C 310 70, 360 120, 360 120 C 360 120, 310 170, 260 190 C 200 210, 50 200, 50 120 Z"
                  stroke="#151A1C"
                  strokeWidth="2.5"
                  fill="#FFFFFF"
                />
                {/* Cornea Dome */}
                <path
                  d="M 330 80 C 375 100, 375 140, 330 160"
                  stroke="#0B5C8A"
                  strokeWidth="3"
                  strokeDasharray="4 2"
                />
                {/* 2.2mm Micro Incision Marker */}
                <line x1="345" y1="95" x2="320" y2="105" stroke="#B8722C" strokeWidth="3" />
                <circle cx="345" cy="95" r="4" fill="#B8722C" />

                {/* Natural Capsular Bag */}
                <ellipse cx="230" cy="120" rx="38" ry="46" stroke="#717880" strokeWidth="1.5" strokeDasharray="3 3" fill="#F0F4F7" />

                {/* Foldable IOL Lens Inside */}
                <ellipse cx="230" cy="120" rx="18" ry="28" fill="#0B5C8A" fillOpacity="0.85" />
                {/* Haptics (Arms) */}
                <path d="M 230 92 C 200 70, 215 60, 220 58" stroke="#0B5C8A" strokeWidth="2.5" strokeLinecap="round" />
                <path d="M 230 148 C 260 170, 245 180, 240 182" stroke="#0B5C8A" strokeWidth="2.5" strokeLinecap="round" />

                {/* Retinal Fundus Band in Back */}
                <path d="M 60 70 C 55 95, 55 145, 60 170" stroke="#B8722C" strokeWidth="4" strokeLinecap="round" />

                {/* Diagram Labels */}
                <text x="315" y="70" fill="#B8722C" fontSize="11" fontWeight="bold">2.2mm Micro-Port</text>
                <text x="200" y="42" fill="#0B5C8A" fontSize="11" fontWeight="bold">Foldable IOL Haptic</text>
                <text x="210" y="124" fill="#FFFFFF" fontSize="10" fontWeight="bold">Clear IOL</text>
                <text x="18" y="124" fill="#8D4F06" fontSize="11" fontWeight="bold">Retina</text>
              </svg>
            </div>
          </div>
        </section>

        {/* ───────────────────────────────────────────────────────────
            4. TRANSPARENT IOL LENS COMPARISON GRID (3 CARDS)
            ─────────────────────────────────────────────────────────── */}
        <section className="mb-14">
          <div className="max-w-3xl mb-8">
            <span className="text-xs font-bold uppercase tracking-widest text-[#0B5C8A]">
              {t("Intraocular Lens Choices / லென்ஸ் வகைகள்", "லென்ஸ் ஒப்பீடு")}
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold font-serif text-[#151A1C] mt-1">
              {t("Transparent IOL Lens Comparison", "வெளிப்படையான லென்ஸ் ஒப்பீடு")}
            </h2>
            <p className="text-sm text-[#41474F] mt-1">
              {t(
                "We provide honest clinical recommendations based on your corneal curvature and retinal health. No commercial upselling.",
                "உங்கள் கண்களின் அமைப்பு மற்றும் தேவைக்கேற்ப வெளிப்படையான மருத்துவ பரிந்துரை. வணிக ரீதியான கட்டாயங்கள் எதுவும் இல்லை."
              )}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Lens 1: Monofocal */}
            <div className="bg-[#FFFFFF] border-2 border-[#2E7D5B]/40 rounded-xl p-6 flex flex-col justify-between shadow-xs">
              <div>
                <span className="inline-block px-2.5 py-0.5 bg-[#EFF7F3] text-[#2E7D5B] text-xs font-bold rounded mb-3">
                  {t("100% CMCHIS Cashless Approved", "முதலமைச்சர் காப்பீட்டில் முழு இலவசம்")}
                </span>
                <h3 className="text-xl font-bold font-serif text-[#151A1C]">
                  {t("Standard Foldable Monofocal", "மோனோபோகல் லென்ஸ்")}
                </h3>
                <p className="text-xs text-[#41474F] mt-2 leading-relaxed">
                  {t(
                    "Calibrated for crystal-clear distant vision (television, driving, temple visits). Simple reading glasses required for newspapers and mobile screens.",
                    "தொலைதூர பார்வை மிகத் தெளிவாகத் தெரியும் (டிவி, வாகனம் ஓட்டுதல்). புத்தகம் மற்றும் கைபேசி படிக்க கண்ணாடி தேவைப்படும்."
                  )}
                </p>

                <div className="mt-4 pt-4 border-t border-[#F0F4F7] space-y-2 text-xs">
                  <div className="flex items-center justify-between">
                    <span className="text-[#717880]">{t("Distance Clarity:", "தூர பார்வை:")}</span>
                    <span className="font-bold text-[#2E7D5B]">★★★★★ {t("Crystal", "மிக தெளிவு")}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-[#717880]">{t("Reading Glasses:", "படிக்கும் கண்ணாடி:")}</span>
                    <span className="font-semibold text-[#151A1C]">{t("Required (+2.00 D)", "தேவைப்படும்")}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-[#717880]">{t("Night Glare / Halos:", "இரவு ஒளி கூச்சம்:")}</span>
                    <span className="font-semibold text-[#2E7D5B]">{t("None (Zero glare)", "இல்லை")}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-[#717880]">{t("Govt Scheme:", "அரசு காப்பீடு:")}</span>
                    <span className="font-bold text-[#2E7D5B]">{t("100% Covered", "முழு அனுமதி")}</span>
                  </div>
                </div>
              </div>

              <div className="pt-6 mt-4">
                <button
                  onClick={() => {
                    setSelectedLens("monofocal");
                    setModalOpen(true);
                  }}
                  className="w-full py-2.5 bg-[#EFF7F3] hover:bg-[#2E7D5B] hover:text-[#FFFFFF] text-[#2E7D5B] font-bold text-xs rounded transition-colors cursor-pointer"
                >
                  {t("Select Monofocal Evaluation", "மோனோபோகல் தேர்வு")}
                </button>
              </div>
            </div>

            {/* Lens 2: Toric */}
            <div className="bg-[#FFFFFF] border-2 border-[#0B5C8A]/40 rounded-xl p-6 flex flex-col justify-between shadow-xs">
              <div>
                <span className="inline-block px-2.5 py-0.5 bg-[#EFF3F5] text-[#0B5C8A] text-xs font-bold rounded mb-3">
                  {t("Astigmatism Neutralizing", "சிலிண்டர் பவர் சரிசெய்தல்")}
                </span>
                <h3 className="text-xl font-bold font-serif text-[#151A1C]">
                  {t("Toric Astigmatism Correcting", "டோரிக் லென்ஸ் (Toric)")}
                </h3>
                <p className="text-xs text-[#41474F] mt-2 leading-relaxed">
                  {t(
                    "Neutralizes pre-existing cylindrical cornea astigmatism. Eliminates blur and distorted distance vision without needing distance spectacles.",
                    "கார்னியா வளைவினால் ஏற்படும் சிலிண்டர் கண் பவரை முழுமையாக நீக்கி தொலைதூர பார்வையைத் தெளிவாக்கும்."
                  )}
                </p>

                <div className="mt-4 pt-4 border-t border-[#F0F4F7] space-y-2 text-xs">
                  <div className="flex items-center justify-between">
                    <span className="text-[#717880]">{t("Distance Clarity:", "தூர பார்வை:")}</span>
                    <span className="font-bold text-[#0B5C8A]">★★★★★ {t("High Definition", "HD தெளிவு")}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-[#717880]">{t("Cylinder Correction:", "சிலிண்டர் நீக்கம்:")}</span>
                    <span className="font-bold text-[#2E7D5B]">{t("100% Corrected", "முழுமை")}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-[#717880]">{t("Reading Glasses:", "படிக்கும் கண்ணாடி:")}</span>
                    <span className="font-semibold text-[#151A1C]">{t("Required for near", "அருகில் மட்டும்")}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-[#717880]">{t("Private Insurance:", "தனியார் காப்பீடு:")}</span>
                    <span className="font-bold text-[#0B5C8A]">{t("Pre-Auth Eligible", "அனுமதி உண்டு")}</span>
                  </div>
                </div>
              </div>

              <div className="pt-6 mt-4">
                <button
                  onClick={() => {
                    setSelectedLens("toric");
                    setModalOpen(true);
                  }}
                  className="w-full py-2.5 bg-[#EFF3F5] hover:bg-[#0B5C8A] hover:text-[#FFFFFF] text-[#0B5C8A] font-bold text-xs rounded transition-colors cursor-pointer"
                >
                  {t("Select Toric Evaluation", "டோரிக் தேர்வு")}
                </button>
              </div>
            </div>

            {/* Lens 3: Multifocal / EDOF */}
            <div className="bg-[#FFFFFF] border border-[#E2DACE] rounded-xl p-6 flex flex-col justify-between shadow-xs">
              <div>
                <span className="inline-block px-2.5 py-0.5 bg-[#FDF8F3] text-[#B8722C] text-xs font-bold rounded mb-3">
                  {t("Near & Far Independence", "முழு சுதந்திர பார்வை")}
                </span>
                <h3 className="text-xl font-bold font-serif text-[#151A1C]">
                  {t("Multifocal & EDOF", "மல்டிபோகல் & EDOF லென்ஸ்")}
                </h3>
                <p className="text-xs text-[#41474F] mt-2 leading-relaxed">
                  {t(
                    "Engineered with optical concentric diffractive rings for patients desiring complete freedom from reading and computer spectacles.",
                    "கண்ணாடி இன்றி படிக்கவும், கணினி பார்க்கவும், தூரப் பார்வைக்கும் உதவும் நவீன மல்டிபோகல் லென்ஸ்."
                  )}
                </p>

                <div className="mt-4 pt-4 border-t border-[#F0F4F7] space-y-2 text-xs">
                  <div className="flex items-center justify-between">
                    <span className="text-[#717880]">{t("Distance Clarity:", "தூர பார்வை:")}</span>
                    <span className="font-bold text-[#151A1C]">★★★★☆ {t("Sharp", "தெளிவு")}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-[#717880]">{t("Reading Glasses:", "படிக்கும் கண்ணாடி:")}</span>
                    <span className="font-bold text-[#2E7D5B]">{t("Not Required (95%)", "தேவையில்லை")}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-[#717880]">{t("Night Driving Halos:", "இரவு வளையங்கள்:")}</span>
                    <span className="text-[#B8722C] font-semibold">{t("Mild temporary rings", "லேசான கூச்சம்")}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-[#717880]">{t("Candidate Check:", "தகுதி பரிசோதனை:")}</span>
                    <span className="font-semibold text-[#0B5C8A]">{t("OCT Macula Mandatory", "OCT பரிசோதனை அவசியம்")}</span>
                  </div>
                </div>
              </div>

              <div className="pt-6 mt-4">
                <button
                  onClick={() => {
                    setSelectedLens("multifocal");
                    setModalOpen(true);
                  }}
                  className="w-full py-2.5 bg-[#F5EFE5] hover:bg-[#0B5C8A] hover:text-[#FFFFFF] text-[#151A1C] font-bold text-xs rounded transition-colors cursor-pointer"
                >
                  {t("Select Multifocal Evaluation", "மல்டிபோகல் தேர்வு")}
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* ───────────────────────────────────────────────────────────
            5. "WORTH KNOWING: 4 CATARACT MYTHS DISPELLED"
            ─────────────────────────────────────────────────────────── */}
        <section className="mb-14 p-6 sm:p-10 bg-[#FFFFFF] border border-[#E2DACE] rounded-xl">
          <div className="max-w-2xl mb-8">
            <span className="text-xs font-bold uppercase tracking-widest text-[#0B5C8A]">
              {t("Patient Clarity / சந்தேகங்களும் உண்மைகளும்", "சந்தேகங்களும் உண்மைகளும்")}
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold font-serif text-[#151A1C] mt-1">
              {t("Worth Knowing: 4 Common Cataract Myths Dispelled", "கேடராக்ட் அறுவை சிகிச்சை பற்றிய 4 பொதுவான தவறான கருத்துக்கள்")}
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-4 bg-[#FBF8F3] border border-[#E2DACE] rounded-lg space-y-1.5">
              <p className="font-bold text-sm text-[#B8722C]">
                {t("Myth 1: 'Does cataract surgery require painful injections around the eye?'", "தவறான கருத்து 1: கண்ணில் ஊசி போடுவார்களா?")}
              </p>
              <p className="text-xs text-[#41474F] leading-relaxed">
                {t(
                  "Fact: At Shri Andavar, 100% of routine MICS procedures are done under topical anaesthesia eye drops. Zero needles, zero pain, and zero black-eye bruising.",
                  "உண்மை: கண்ணில் சொட்டு மருந்து மட்டுமே விடப்படும். எவ்வித ஊசிகளோ வலியோ இருக்காது."
                )}
              </p>
            </div>

            <div className="p-4 bg-[#FBF8F3] border border-[#E2DACE] rounded-lg space-y-1.5">
              <p className="font-bold text-sm text-[#B8722C]">
                {t("Myth 2: 'Do I have to wait until the cataract is fully mature/ripe?'", "தவறான கருத்து 2: புரை முற்றும் வரை காத்திருக்க வேண்டுமா?")}
              </p>
              <p className="text-xs text-[#41474F] leading-relaxed">
                {t(
                  "Fact: No. Waiting until a cataract hardens increases ultrasound energy required and delays recovery. MICS is safest and fastest when performed when early blur begins.",
                  "உண்மை: தேவையில்லை. ஆரம்ப நிலையிலேயே அறுவை சிகிச்சை செய்வது விரைவான பார்வையைத் தரும்."
                )}
              </p>
            </div>

            <div className="p-4 bg-[#FBF8F3] border border-[#E2DACE] rounded-lg space-y-1.5">
              <p className="font-bold text-sm text-[#B8722C]">
                {t("Myth 3: 'Will a junior doctor or trainee perform my surgery?'", "தவறான கருத்து 3: பயிற்சி மருத்துவர்கள் செய்வார்களா?")}
              </p>
              <p className="text-xs text-[#41474F] leading-relaxed">
                {t(
                  "Fact: Never. Dr. A. Raghuram personally performs every single surgery from corneal entry to lens placement. Single-surgeon accountability is our core guarantee.",
                  "உண்மை: டாக்டர் ஏ. ரகுராம் அவர்களே ஒவ்வொரு அறுவை சிகிச்சையையும் நேரடியாகச் செய்கிறார்."
                )}
              </p>
            </div>

            <div className="p-4 bg-[#FBF8F3] border border-[#E2DACE] rounded-lg space-y-1.5">
              <p className="font-bold text-sm text-[#B8722C]">
                {t("Myth 4: 'Is complete bed rest required for weeks?'", "தவறான கருத்து 4: பல வாரங்கள் படுக்கையில் ஓய்வெடுக்க வேண்டுமா?")}
              </p>
              <p className="text-xs text-[#41474F] leading-relaxed">
                {t(
                  "Fact: Normal light activities, walking, and television viewing can resume within 24 hours. Only direct head baths and rubbing the eye are avoided for 2 weeks.",
                  "உண்மை: மறுநாளே வழக்கமான பணிகளையும் டிவி பார்ப்பதையும் தொடங்கலாம். 2 வாரங்களுக்கு கண்ணில் தண்ணீர் படாமல் பார்த்துக் கொண்டால் போதும்."
                )}
              </p>
            </div>
          </div>
        </section>

        {/* ───────────────────────────────────────────────────────────
            6. DIRECT APPOINTMENT & CONTACT BANNER
            ─────────────────────────────────────────────────────────── */}
        <div className="p-8 bg-[#151A1C] text-[#FFFFFF] rounded-xl flex flex-col md:flex-row items-center justify-between gap-6 border-l-4 border-[#0B5C8A]">
          <div className="space-y-1.5 text-center md:text-left">
            <h4 className="text-2xl font-bold font-serif text-[#FFFFFF]">
              {t("Schedule Your Cataract Evaluation", "கேடராக்ட் பரிசோதனைக்கு முன்பதிவு")}
            </h4>
            <p className="text-sm text-[#C0C7D0]">
              {t(
                "Direct slit-lamp biometry evaluation with Dr. Raghuram • No long hospital queues",
                "டாக்டர் ரகுராம் அவர்களிடம் நேரடி கண் பரிசோதனை"
              )}
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <button
              onClick={() => setModalOpen(true)}
              className="px-6 py-3 bg-[#0B5C8A] hover:bg-[#08486D] text-[#FFFFFF] font-bold text-sm rounded transition-colors cursor-pointer"
            >
              {t("Book OPD Slot", "முன்பதிவு செய்ய")}
            </button>
            <a
              href="tel:04259221000"
              className="px-5 py-3 bg-[#2C3133] hover:bg-[#41474F] text-[#FFFFFF] font-bold text-sm rounded flex items-center gap-1.5 transition-colors"
            >
              <Phone className="w-4 h-4 text-[#A1D3FF]" />
              <span>04259 221 000</span>
            </a>
          </div>
        </div>
      </div>

      <ConsultationModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        defaultSpecialty="cataract"
      />
      <SchemesDrawer
        isOpen={schemesDrawerOpen}
        onClose={() => setSchemesDrawerOpen(false)}
      />
    </div>
  );
}
