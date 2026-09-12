"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { ApertureSVG } from "@/components/ApertureSVG";
import { QuickActionBar } from "@/components/QuickActionBar";
import { SchemesDrawer } from "@/components/SchemesDrawer";
import { ConsultationModal } from "@/components/ConsultationModal";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { AnimatedCounter } from "@/components/animations/AnimatedCounter";
import { ParallaxWrapper } from "@/components/animations/ParallaxWrapper";
import {
  Phone,
  Calendar,
  ShieldCheck,
  CheckCircle2,
  ChevronRight,
  Clock,
  MapPin,
  FileCheck,
  Award,
  AlertTriangle,
  ArrowRight,
  Eye,
} from "lucide-react";

export default function HomePage() {
  const { t, lang } = useLanguage();
  const [bookingOpen, setBookingOpen] = useState(false);
  const [schemesDrawerOpen, setSchemesDrawerOpen] = useState(false);
  const [activeSpecialty, setActiveSpecialty] = useState("cataract");

  const openBookingWithSpecialty = (spec: string) => {
    setActiveSpecialty(spec);
    setBookingOpen(true);
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#FBF8F3]">
      {/* ───────────────────────────────────────────────────────────
          1. HERO SECTION (Warm ground, single-surgeon authority)
          ─────────────────────────────────────────────────────────── */}
      <section className="relative pt-12 pb-20 sm:pt-16 sm:pb-28 overflow-hidden bg-[#FBF8F3] border-b border-[#E2DACE]">
        {/* Aperture Concentric Background Rings */}
        <ParallaxWrapper offset={30} className="absolute -top-16 -right-16 opacity-35 pointer-events-none hidden md:block">
          <ApertureSVG size={520} strokeColor="#0B5C8A" opacity={0.2} />
        </ParallaxWrapper>
        <ParallaxWrapper offset={-20} className="absolute top-1/2 left-0 -translate-y-1/2 opacity-25 pointer-events-none">
          <ApertureSVG size={360} strokeColor="#B8722C" opacity={0.15} />
        </ParallaxWrapper>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            {/* Hero Left Column (7 cols) */}
            <ScrollReveal className="lg:col-span-7 space-y-6">
              {/* Trust Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EFF3F5] border border-[#0B5C8A]/20 text-[#0B5C8A] text-xs sm:text-sm font-semibold tracking-wide shadow-2xs">
                <span className="w-2 h-2 rounded-full bg-[#2E7D5B] pulse-dot" />
                <span>
                  {t(
                    "Single-Surgeon Continuity • Pollachi Since 2013",
                    "ஒற்றை மருத்துவர் பொறுப்பு • பொள்ளாச்சி"
                  )}
                </span>
              </div>

              {/* Main Headline */}
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[54px] font-serif font-bold text-[#151A1C] leading-[1.18] tracking-tight">
                {lang === "ta"
                  ? "உங்கள் கண்களைப் பரிசோதிக்கும் அதே மருத்துவரே அறுவை சிகிச்சையையும் செய்கிறார்."
                  : "The doctor who examines your eyes is the one who operates."}
              </h1>

              {/* Sub-lede */}
              <p className="text-lg sm:text-xl text-[#41474F] leading-relaxed max-w-2xl">
                {t(
                  "No rotating junior doctors. No trainees. Dr. A. Raghuram personally conducts your first slit-lamp exam, performs your micro-incision surgery, and reviews your eye at every post-op visit.",
                  "சுழலும் பயிற்சி மருத்துவர்கள் இல்லை. முதல் கண் பரிசோதனை, நுண்துளை அறுவை சிகிச்சை மற்றும் ஒவ்வொரு பின்தொடர் சந்திப்பையும் டாக்டர் ஏ. ரகுராம் அவர்களே நேரடியாக மேற்கொள்கிறார்."
                )}
              </p>

              {/* Clinical Hero Key Badges */}
              <div className="flex flex-wrap gap-2.5 pt-1 text-xs sm:text-sm font-semibold text-[#151A1C]">
                <div className="flex items-center gap-1.5 px-3 py-1.5 bg-[#FFFFFF] border border-[#E2DACE] rounded">
                  <CheckCircle2 className="w-4 h-4 text-[#2E7D5B]" />
                  <span>{t("2.2mm Sutureless MICS", "2.2மிமீ தையலில்லா அறுவை சிகிச்சை")}</span>
                </div>
                <div className="flex items-center gap-1.5 px-3 py-1.5 bg-[#FFFFFF] border border-[#E2DACE] rounded">
                  <CheckCircle2 className="w-4 h-4 text-[#2E7D5B]" />
                  <span>{t("Topical Drops (Zero Injections)", "வலி இல்லாத சொட்டு மருந்து முறை")}</span>
                </div>
                <div className="flex items-center gap-1.5 px-3 py-1.5 bg-[#EFF7F3] border border-[#2E7D5B]/40 text-[#2E7D5B] rounded">
                  <ShieldCheck className="w-4 h-4" />
                  <span>{t("CMCHIS 100% Cashless", "முதலமைச்சர் காப்பீடு")}</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-3 flex flex-wrap items-center gap-3 sm:gap-4">
                <button
                  onClick={() => openBookingWithSpecialty("cataract")}
                  className="px-6 sm:px-8 py-3.5 bg-[#0B5C8A] hover:bg-[#08486D] text-[#FFFFFF] font-bold text-base rounded shadow-sm transition-all flex items-center gap-2 cursor-pointer"
                >
                  <Calendar className="w-5 h-5" />
                  <span>{t("Book OPD Consultation", "ஆலோசனை முன்பதிவு")}</span>
                </button>

                <a
                  href="tel:04259221000"
                  className="px-5 sm:px-6 py-3.5 bg-[#FFFFFF] hover:bg-[#F5EFE5] text-[#0B5C8A] border-1.5 border-[#0B5C8A] font-bold text-base rounded transition-colors flex items-center gap-2"
                >
                  <Phone className="w-4 h-4" />
                  <span>04259 221 000</span>
                </a>
              </div>

              {/* Consultation Timings Callout */}
              <div className="pt-2 flex items-center gap-2 text-xs text-[#717880]">
                <Clock className="w-4 h-4 text-[#2E7D5B]" />
                <span>
                  {t(
                    "Clinic Hours: Mon–Sat 10:00 AM – 2:00 PM & 5:00 PM – 7:00 PM (Sunday Closed)",
                    "பார்வை நேரம்: திங்கள்-சனி காலை 10-2 & மாலை 5-7 (ஞாயிறு விடுமுறை)"
                  )}
                </span>
              </div>
            </ScrollReveal>

            {/* Hero Right Column: Surgeon Credential Card (5 cols) */}
            <ScrollReveal delay={0.2} direction="left" className="lg:col-span-5">
              <div className="relative bg-[#FFFFFF] border-2 border-[#E2DACE] rounded-lg p-6 sm:p-7 shadow-md">
                {/* Accent Top Border */}
                <div className="absolute top-0 left-0 right-0 h-1.5 bg-[#0B5C8A] rounded-t-md" />

                <div className="flex items-start gap-4 pb-5 border-b border-[#E2DACE]">
                  {/* Doctor Portrait */}
                  <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-full overflow-hidden border-2 border-[#0B5C8A] shrink-0 shadow-sm">
                    <Image
                      src="/assets/dr_murugan.jpg"
                      alt="Dr. A. Raghuram, Chief Surgeon"
                      fill
                      className="object-cover object-top"
                      priority
                    />
                  </div>

                  <div>
                    <span className="inline-block px-2 py-0.5 bg-[#EFF3F5] text-[#0B5C8A] text-xs font-bold rounded mb-1">
                      {t("Chief Vitreoretinal Surgeon", "தலைமை விழித்திரை அறுவை சிகிச்சை நிபுணர்")}
                    </span>
                    <h3 className="text-xl font-bold font-serif text-[#151A1C]">
                      Dr. A. Raghuram
                    </h3>
                    <p className="text-xs text-[#0B5C8A] font-semibold mt-0.5">
                      MBBS, DO, DNB, FICO (UK), FRCS (Glasgow)
                    </p>
                    <p className="text-[11px] text-[#717880] mt-1">
                      TN Medical Council Reg. No. TN-MED-621428
                    </p>
                  </div>
                </div>

                {/* Surgeon's Ethical Pledge */}
                <div className="py-4 space-y-2 text-xs text-[#41474F] leading-relaxed">
                  <div className="p-3 bg-[#FBF8F3] border border-[#E2DACE] rounded italic text-[#151A1C]">
                    &ldquo;
                    {t(
                      "At large chain hospitals, you are seen by whoever is scheduled on shift. At Shri Andavar, you see me. I examine you, I perform the surgery, and I review your progress at every visit.",
                      "பெரிய மருத்துவமனைகளில் யார் பணியில் உள்ளார்களோ அவரே பார்ப்பார். ஆனால் இங்கு நான் மட்டுமே உங்களைப் பரிசோதித்து, நானே அறுவை சிகிச்சை செய்து, தொடர்ந்து கண்காணிக்கிறேன்."
                    )}
                    &rdquo;
                  </div>

                  <ul className="space-y-1.5 pt-1 text-[#151A1C]">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#2E7D5B] shrink-0" />
                      <span>{t("22+ Years Advanced Ophthalmic Microsurgery", "22+ ஆண்டுகள் அறுவை சிகிச்சை அனுபவம்")}</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#2E7D5B] shrink-0" />
                      <span>{t("Fellow, Royal College of Physicians & Surgeons of Glasgow", "கிளாஸ்கோ ராயல் கல்லூரி உறுப்பினர்")}</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#2E7D5B] shrink-0" />
                      <span>{t("Zero commercial sales targets or commission", "வணிக ரீதியான இலக்குகள் இல்லை")}</span>
                    </li>
                  </ul>
                </div>

                <div className="pt-3 border-t border-[#E2DACE] flex items-center justify-between">
                  <Link
                    href="/about"
                    className="text-xs font-bold text-[#0B5C8A] hover:underline flex items-center gap-1"
                  >
                    <span>{t("Read Dr. Raghuram's Profile & Oath", "மருத்துவர் பற்றி மேலும் படிக்க")}</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </Link>
                  <span className="text-[11px] text-[#717880]">Pollachi, TN</span>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ───────────────────────────────────────────────────────────
          2. PSG-STYLE QUICK UTILITY ACTION BAR (5 CARDS)
          ─────────────────────────────────────────────────────────── */}
      <QuickActionBar
        onOpenBooking={() => openBookingWithSpecialty("cataract")}
        onOpenSchemesDrawer={() => setSchemesDrawerOpen(true)}
      />

      {/* ───────────────────────────────────────────────────────────
          3. 4-CELL CLINICAL FACT STRIP
          ─────────────────────────────────────────────────────────── */}
      <section className="py-12 border-b border-[#E2DACE] bg-[#FFFFFF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 text-center divide-y sm:divide-y-0 sm:divide-x divide-[#E2DACE]">
            <ScrollReveal delay={0} className="pt-4 sm:pt-0 px-3">
              <p className="text-3xl sm:text-4xl font-bold font-serif text-[#0B5C8A]">
                <AnimatedCounter value={13} suffix="+" /> Years
              </p>
              <p className="text-sm font-semibold text-[#151A1C] mt-1">
                {t("In Pollachi", "பொள்ளாச்சியில்")}
              </p>
              <p className="text-xs text-[#717880] mt-0.5">
                {t("Serving Anaimalai, Udumalpet & Valparai", "ஆனைமலை, உடுமலை & வால்பாறை மக்கள்")}
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.1} className="pt-4 sm:pt-0 px-3">
              <p className="text-3xl sm:text-4xl font-bold font-serif text-[#0B5C8A]">
                <AnimatedCounter value={2.2} decimals={1} suffix=" mm" />
              </p>
              <p className="text-sm font-semibold text-[#151A1C] mt-1">
                {t("Micro-Incision (MICS)", "நுண்துளை அறுவை சிகிச்சை")}
              </p>
              <p className="text-xs text-[#717880] mt-0.5">
                {t("Zero stitches, rapid next-day visual recovery", "தையல் இல்லை, விரைவான பார்வை மீட்சி")}
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.2} className="pt-4 sm:pt-0 px-3">
              <p className="text-3xl sm:text-4xl font-bold font-serif text-[#2E7D5B]">
                <AnimatedCounter value={100} suffix="%" />
              </p>
              <p className="text-sm font-semibold text-[#151A1C] mt-1">
                {t("Cashless CMCHIS", "முதலமைச்சர் காப்பீடு")}
              </p>
              <p className="text-xs text-[#717880] mt-0.5">
                {t("Full package for smart ration card holders", "ஸ்மார்ட் ரேஷன் அட்டைதாரர்களுக்கு இலவசம்")}
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.3} className="pt-4 sm:pt-0 px-3">
              <p className="text-3xl sm:text-4xl font-bold font-serif text-[#B8722C]">Single Surgeon</p>
              <p className="text-sm font-semibold text-[#151A1C] mt-1">
                {t("100% Continuity", "முழுமையான மருத்துவர் பொறுப்பு")}
              </p>
              <p className="text-xs text-[#717880] mt-0.5">
                {t("Exam, surgery & reviews by Dr. Raghuram", "அனைத்தும் டாக்டர் ரகுராம் அவர்களே செய்கிறார்")}
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ───────────────────────────────────────────────────────────
          4. SYMPTOM-LED SPECIALTIES GRID (Aradhana Benchmark)
          ─────────────────────────────────────────────────────────── */}
      <section className="py-16 sm:py-24 bg-[#FBF8F3] border-b border-[#E2DACE]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div className="space-y-2">
              <span className="text-xs font-bold uppercase tracking-widest text-[#0B5C8A]">
                {t("Clinical Specialties / நீங்கள் உணரும் அறிகுறிகள்", "மருத்துவப் பிரிவுகள்")}
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold font-serif text-[#151A1C]">
                {t("What symptoms are you noticing?", "உங்கள் கண்களில் என்ன பிரச்சனை?")}
              </h2>
              <p className="text-base text-[#41474F] max-w-xl">
                {t(
                  "Choose what you are experiencing to see the surgical protocol and transparent pricing.",
                  "உங்கள் அறிகுறியைத் தேர்ந்தெடுத்து அதற்குரிய சிகிச்சை விவரங்களைத் தெரிந்து கொள்ளுங்கள்."
                )}
              </p>
            </div>

            <Link
              href="/treatments"
              className="inline-flex items-center gap-1.5 text-sm font-bold text-[#0B5C8A] hover:underline"
            >
              <span>{t("View All 6 Clinical Specialties", "அனைத்து சிகிச்சைகளும் பார்க்க")}</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* 4 Core Symptom Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Card 1: Cataract */}
            <ScrollReveal delay={0} className="bg-[#FFFFFF] border border-[#E2DACE] rounded-lg p-6 flex flex-col justify-between hover:border-[#0B5C8A] hover:shadow-md transition-all group">
              <div>
                <div className="p-2.5 bg-[#EFF3F5] text-[#0B5C8A] rounded w-fit mb-4">
                  <Eye className="w-6 h-6" />
                </div>
                <div className="p-2 bg-[#FDF8F3] border-l-2 border-[#B8722C] text-xs font-semibold text-[#8D4F06] mb-3">
                  {t("Symptom: Cloudy view, glare at night, faded colors", "அறிகுறி: பார்வை மங்குதல், இரவு வெளிச்ச கூச்சம்")}
                </div>
                <h3 className="text-xl font-bold font-serif text-[#151A1C]">
                  {t("Micro-Incision Cataract (MICS)", "கேடராக்ட் அறுவை சிகிச்சை")}
                </h3>
                <p className="text-xs text-[#41474F] mt-2 leading-relaxed">
                  {t(
                    "2.2mm self-sealing micro-port. Zero injections, zero stitches. In by 8:30 AM, home by 11:30 AM. Monofocal, Toric, and Multifocal IOLs.",
                    "2.2மிமீ நுண்துளை தையலில்லா அறுவை சிகிச்சை. ஊசி இல்லை. காலையில் வந்து மதியம் வீடு திரும்பலாம்."
                  )}
                </p>
                <div className="mt-3 flex items-center gap-2 text-xs font-semibold text-[#2E7D5B]">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>{t("100% CMCHIS Cashless Available", "முதலமைச்சர் காப்பீட்டில் இலவசம்")}</span>
                </div>
              </div>

              <div className="pt-5 mt-4 border-t border-[#F0F4F7]">
                <Link
                  href="/treatments/cataract-surgery"
                  className="w-full py-2 px-3 bg-[#EFF3F5] group-hover:bg-[#0B5C8A] group-hover:text-[#FFFFFF] text-[#0B5C8A] font-bold text-xs rounded flex items-center justify-center gap-1.5 transition-colors"
                >
                  <span>{t("View Timeline & Lens Options", "லென்ஸ் வகைகள் & விவரங்கள்")}</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </ScrollReveal>

            {/* Card 2: Vitreo-Retina */}
            <ScrollReveal delay={0.1} className="bg-[#FFFFFF] border border-[#E2DACE] rounded-lg p-6 flex flex-col justify-between hover:border-[#B8722C] hover:shadow-md transition-all group">
              <div>
                <div className="p-2.5 bg-[#FDF8F3] text-[#B8722C] rounded w-fit mb-4">
                  <AlertTriangle className="w-6 h-6" />
                </div>
                <div className="p-2 bg-[#FDF8F3] border-l-2 border-[#B8722C] text-xs font-semibold text-[#8D4F06] mb-3">
                  {t("Urgent: Flashes of light, dark curtain over vision", "அவசரம்: மின்னல் போன்ற வெளிச்சம், கருப்பு திரை")}
                </div>
                <h3 className="text-xl font-bold font-serif text-[#151A1C]">
                  {t("Vitreoretinal Care & Detachment", "விழித்திரை சிகிச்சை & அறுவை சிகிச்சை")}
                </h3>
                <p className="text-xs text-[#41474F] mt-2 leading-relaxed">
                  {t(
                    "Pollachi's specialized surgical vitreo-retina unit. High-resolution optical coherence tomography (OCT) and sutureless vitrectomy.",
                    "பொள்ளாச்சியின் சிறப்பு விழித்திரை பிரிவு. நவீன OCT ஸ்கேன் மற்றும் தையலில்லா விட்ரெக்டமி சிகிச்சை."
                  )}
                </p>
                <div className="mt-3 flex items-center gap-2 text-xs font-semibold text-[#B8722C]">
                  <span>⚡ 24/7 Trauma Hotline: 04259 222444</span>
                </div>
              </div>

              <div className="pt-5 mt-4 border-t border-[#F0F4F7]">
                <Link
                  href="/treatments"
                  className="w-full py-2 px-3 bg-[#FDF8F3] group-hover:bg-[#B8722C] group-hover:text-[#FFFFFF] text-[#B8722C] font-bold text-xs rounded flex items-center justify-center gap-1.5 transition-colors"
                >
                  <span>{t("Retina Triage Protocol", "விழித்திரை சிகிச்சை முறைகள்")}</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </ScrollReveal>

            {/* Card 3: Diabetic Retinopathy */}
            <ScrollReveal delay={0.2} className="bg-[#FFFFFF] border border-[#E2DACE] rounded-lg p-6 flex flex-col justify-between hover:border-[#0B5C8A] hover:shadow-md transition-all group">
              <div>
                <div className="p-2.5 bg-[#EFF3F5] text-[#0B5C8A] rounded w-fit mb-4">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <div className="p-2 bg-[#FDF8F3] border-l-2 border-[#B8722C] text-xs font-semibold text-[#8D4F06] mb-3">
                  {t("Notice: Diabetic for 5+ years, fluctuating blur", "சர்க்கரை நோய் 5+ வருடங்கள், மங்கலான பார்வை")}
                </div>
                <h3 className="text-xl font-bold font-serif text-[#151A1C]">
                  {t("Diabetic Retinopathy & Macula", "சர்க்கரை நோய் கண் பாதிப்பு")}
                </h3>
                <p className="text-xs text-[#41474F] mt-2 leading-relaxed">
                  {t(
                    "Early prevention for microaneurysms and macular oedema. Green laser photocoagulation and anti-VEGF injections administered personally.",
                    "விழித்திரை ரத்தக்கசிவு மற்றும் வீக்கத்திற்கான சிறப்பு லேசர் மற்றும் ஊசி மருந்துகள்."
                  )}
                </p>
                <div className="mt-3 flex items-center gap-2 text-xs font-semibold text-[#2E7D5B]">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>{t("Annual Dilated Fundus Exam", "வருடாந்திர விழித்திரை பரிசோதனை")}</span>
                </div>
              </div>

              <div className="pt-5 mt-4 border-t border-[#F0F4F7]">
                <Link
                  href="/treatments"
                  className="w-full py-2 px-3 bg-[#EFF3F5] group-hover:bg-[#0B5C8A] group-hover:text-[#FFFFFF] text-[#0B5C8A] font-bold text-xs rounded flex items-center justify-center gap-1.5 transition-colors"
                >
                  <span>{t("Diabetic Screening Protocol", "சர்க்கரை நோய் பரிசோதனை")}</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </ScrollReveal>

            {/* Card 4: Glaucoma */}
            <ScrollReveal delay={0.3} className="bg-[#FFFFFF] border border-[#E2DACE] rounded-lg p-6 flex flex-col justify-between hover:border-[#0B5C8A] hover:shadow-md transition-all group">
              <div>
                <div className="p-2.5 bg-[#EFF3F5] text-[#0B5C8A] rounded w-fit mb-4">
                  <Clock className="w-6 h-6" />
                </div>
                <div className="p-2 bg-[#FDF8F3] border-l-2 border-[#B8722C] text-xs font-semibold text-[#8D4F06] mb-3">
                  {t("Subtle: Evening brow ache, rainbow halos, tunnel view", "அறிகுறி: மாலை நேர தலைவலி, வெளிச்ச வளையங்கள்")}
                </div>
                <h3 className="text-xl font-bold font-serif text-[#151A1C]">
                  {t("Glaucoma & Laser SLT", "க்ளௌகோமா கண் அழுத்தம்")}
                </h3>
                <p className="text-xs text-[#41474F] mt-2 leading-relaxed">
                  {t(
                    "Goldmann applanation tonometry, automated visual fields (HFA), and Selective Laser Trabeculoplasty (SLT) to safeguard peripheral sight.",
                    "கண் அழுத்தத்தை அளந்து பார்வை நரம்பைப் பாதுகாக்கும் நவீன பரிசோதனை மற்றும் லேசர் சிகிச்சை."
                  )}
                </p>
                <div className="mt-3 flex items-center gap-2 text-xs font-semibold text-[#2E7D5B]">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>{t("Painless Goldmann Tonometry", "வலியில்லாத கண் அழுத்த பரிசோதனை")}</span>
                </div>
              </div>

              <div className="pt-5 mt-4 border-t border-[#F0F4F7]">
                <Link
                  href="/treatments"
                  className="w-full py-2 px-3 bg-[#EFF3F5] group-hover:bg-[#0B5C8A] group-hover:text-[#FFFFFF] text-[#0B5C8A] font-bold text-xs rounded flex items-center justify-center gap-1.5 transition-colors"
                >
                  <span>{t("Glaucoma Care Guide", "க்ளௌகோமா விவரங்கள்")}</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ───────────────────────────────────────────────────────────
          5. DAY-CARE CATARACT TIMELINE OVERVIEW ("In by Morning, Home by Lunch")
          ─────────────────────────────────────────────────────────── */}
      <section className="py-16 sm:py-24 bg-[#FFFFFF] border-b border-[#E2DACE]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-[#0B5C8A]">
              {t("Day-Care Surgery / ஒரு நாள் சிகிச்சை", "நாள் அறுவை சிகிச்சை முறை")}
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold font-serif text-[#151A1C] mt-2">
              {t("In by morning, home by lunch.", "காலையில் வந்து மதியம் வீடு திரும்பலாம்.")}
            </h2>
            <p className="text-base text-[#41474F] mt-2">
              {t(
                "Cataract surgery at Shri Andavar does not require overnight hospital stays or painful needle blocks. Here is what your morning looks like:",
                "ஸ்ரீ ஆண்டவர் மருத்துவமனையில் கண் அறுவை சிகிச்சைக்கு இரவில் தங்க வேண்டிய அவசியமில்லை. அன்றைய தின கால அட்டவணை:"
              )}
            </p>
          </div>

          {/* 4-Step Horizontal Timeline Grid */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <ScrollReveal delay={0} className="p-5 bg-[#FBF8F3] border border-[#E2DACE] rounded-lg relative">
              <span className="text-2xl font-bold font-serif text-[#0B5C8A]">08:30 AM</span>
              <h4 className="font-bold text-base text-[#151A1C] mt-2">
                {t("1. Check-In & Biometry", "1. பதிவு & பரிசோதனை")}
              </h4>
              <p className="text-xs text-[#41474F] mt-1.5 leading-relaxed">
                {t(
                  "Arrive with an accompanying family member. Dr. Raghuram cross-checks your optical A-scan biometry and IOL lens serial number.",
                  "குடும்பத்தினருடன் வருகை. லென்ஸ் எண் மற்றும் விழித்திரை நிலை மீண்டும் பரிசோதிக்கப்படும்."
                )}
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.1} className="p-5 bg-[#FBF8F3] border border-[#E2DACE] rounded-lg relative">
              <span className="text-2xl font-bold font-serif text-[#0B5C8A]">09:15 AM</span>
              <h4 className="font-bold text-base text-[#151A1C] mt-2">
                {t("2. Anaesthetic Eye Drops", "2. சொட்டு மருந்து")}
              </h4>
              <p className="text-xs text-[#41474F] mt-1.5 leading-relaxed">
                {t(
                  "Gentle topical drops numb the eye completely. Zero needle injections behind the eye. Zero facial patches or heavy bandages.",
                  "கண்ணில் சொட்டு மருந்து மட்டுமே இடப்படும். கண்களில் எவ்வித ஊசிகளும் போடப்படுவதில்லை."
                )}
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.2} className="p-5 bg-[#EFF7F3] border border-[#2E7D5B]/40 rounded-lg relative">
              <span className="text-2xl font-bold font-serif text-[#2E7D5B]">09:45 AM</span>
              <h4 className="font-bold text-base text-[#151A1C] mt-2">
                {t("3. 15-Minute MICS Surgery", "3. 15 நிமிட நுண்துளை அறுவை சிகிச்சை")}
              </h4>
              <p className="text-xs text-[#41474F] mt-1.5 leading-relaxed">
                {t(
                  "Dr. Raghuram personally emulsifies the cloudy lens through a 2.2mm micro-port and unfolds the selected foldable lens. 100% painless.",
                  "டாக்டர் ரகுராம் அவர்களே 2.2மிமீ துளை வழியே லென்ஸை மாற்றி அமைக்கிறார். வலியில்லா விரைவு முறை."
                )}
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.3} className="p-5 bg-[#FBF8F3] border border-[#E2DACE] rounded-lg relative">
              <span className="text-2xl font-bold font-serif text-[#0B5C8A]">11:30 AM</span>
              <h4 className="font-bold text-base text-[#151A1C] mt-2">
                {t("4. Discharge with Shield", "4. வீடு திரும்புதல்")}
              </h4>
              <p className="text-xs text-[#41474F] mt-1.5 leading-relaxed">
                {t(
                  "A transparent protective shield is fitted. You receive your bilingual eye drop schedule and walk out comfortably with your family.",
                  "பாதுகாப்பு கவசம் பொருத்தப்பட்டு, மருந்து அட்டவணையுடன் மதிய உணவிற்குள் வீடு செல்லலாம்."
                )}
              </p>
            </ScrollReveal>
          </div>

          <div className="mt-8 text-center">
            <Link
              href="/treatments/cataract-surgery"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#0B5C8A] text-[#FFFFFF] font-bold text-sm rounded hover:bg-[#08486D] transition-colors"
            >
              <span>{t("Learn More About Cataract Recovery & Lens Types", "கேடராக்ட் அறுவை சிகிச்சை பற்றி விரிவாக அறிய")}</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ───────────────────────────────────────────────────────────
          6. UPFRONT REASSURANCE & SCHEMES BANNER (PSG + Aradhana Standards)
          ─────────────────────────────────────────────────────────── */}
      <section className="py-16 sm:py-20 bg-[#F5EFE5] border-b border-[#E2DACE]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <ScrollReveal className="bg-[#FFFFFF] border-2 border-[#E2DACE] rounded-xl p-8 sm:p-12 shadow-sm">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-8 space-y-4">
                <span className="inline-block px-3 py-1 bg-[#EFF7F3] text-[#2E7D5B] text-xs font-bold rounded">
                  {t("Empanelled Government & Private Insurance Center", "அரசு மற்றும் தனியார் காப்பீடு அங்கீகாரம்")}
                </span>
                <h3 className="text-2xl sm:text-3xl font-bold font-serif text-[#151A1C]">
                  {t(
                    "Zero out-of-pocket expenses under CMCHIS. Transparent single written quote for self-pay.",
                    "முதலமைச்சர் காப்பீட்டில் முழு இலவசம். நேரடி கட்டணத்திற்கு வெளிப்படையான விலை."
                  )}
                </h3>
                <p className="text-sm sm:text-base text-[#41474F] leading-relaxed">
                  {t(
                    "Whether you hold a Tamil Nadu Smart Family Card, a State Government Pensioner PPO, or a private policy (Star Health, MediAssist, Vidal), our on-site liaison desk processes your papers before surgery. No surprise consumable bills on discharge.",
                    "ஸ்மார்ட் ரேஷன் அட்டை, ஓய்வூதிய அட்டை அல்லது தனியார் காப்பீடு எதுவாக இருந்தாலும் எங்கள் உதவி மையம் உடனடியாக அனுமதி பெறும். வெளியேறும் போது மறைமுக கட்டணங்கள் எதுவும் இல்லை."
                  )}
                </p>

                <div className="flex flex-wrap gap-4 pt-2 text-xs font-bold text-[#151A1C]">
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-[#2E7D5B]" />
                    <span>CMCHIS (முதலமைச்சர் காப்பீடு)</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-[#2E7D5B]" />
                    <span>TN Pensioners Health Scheme</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-[#2E7D5B]" />
                    <span>Star Health & All Major TPAs</span>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-4 flex flex-col gap-3">
                <button
                  onClick={() => setSchemesDrawerOpen(true)}
                  className="w-full py-3.5 px-4 bg-[#2E7D5B] hover:bg-[#236348] text-[#FFFFFF] font-bold text-sm rounded flex items-center justify-center gap-2 transition-colors cursor-pointer shadow-xs"
                >
                  <FileCheck className="w-4 h-4" />
                  <span>{t("Check Papers to Bring (Checklist)", "கொண்டு வர வேண்டிய ஆவணங்கள்")}</span>
                </button>

                <Link
                  href="/schemes"
                  className="w-full py-3.5 px-4 bg-[#FBF8F3] hover:bg-[#E2DACE] text-[#0B5C8A] border border-[#CBD5E1] font-bold text-sm rounded flex items-center justify-center gap-2 transition-colors"
                >
                  <span>{t("Read Full Schemes & Insurance Guide", "முழு காப்பீட்டு வழிகாட்டி")}</span>
                  <ChevronRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ───────────────────────────────────────────────────────────
          7. LANDMARK & VISIT WAYFINDING
          ─────────────────────────────────────────────────────────── */}
      <section className="py-16 sm:py-24 bg-[#FBF8F3]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <ScrollReveal direction="right" className="lg:col-span-6 space-y-5">
              <span className="text-xs font-bold uppercase tracking-widest text-[#0B5C8A]">
                {t("Pollachi Wayfinding / இருப்பிடம்", "மருத்துவமனை இருப்பிடம்")}
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold font-serif text-[#151A1C]">
                {t(
                  "Opposite LMHSS School, Palladam Road.",
                  "பல்லடம் ரோடு, LMHSS பள்ளி எதிரில்."
                )}
              </h2>
              <p className="text-base text-[#41474F] leading-relaxed">
                {t(
                  "Easily accessible for patients arriving from Pollachi town, Anaimalai, Udumalpet, Kinathukadavu, and Valparai. Step-free wheelchair ramp directly from the car park into the consultation suites.",
                  "பொள்ளாச்சி நகரம், ஆனைமலை, உடுமலை, கிணத்துக்கடவு மற்றும் வால்பாறை மக்கள் எளிதில் அடையும் இடம். சக்கர நாற்காலி மற்றும் ஆம்புலன்ஸ் நேரடி வசதி உள்ளது."
                )}
              </p>

              <div className="p-4 bg-[#FFFFFF] border border-[#E2DACE] rounded-lg space-y-2 text-sm text-[#151A1C]">
                <div className="flex items-center gap-2 font-bold text-[#0B5C8A]">
                  <MapPin className="w-5 h-5" />
                  <span>No. 73, Palladam Road, T. Kottampatti, Pollachi – 642002</span>
                </div>
                <p className="text-xs text-[#717880]">
                  {t(
                    "★ Landmark: Directly Opposite Lourdes Mount Higher Secondary School. Flat auto fare (₹40–₹50) from Pollachi Old / New Bus Stand.",
                    "★ அடையாளம்: LMHSS பள்ளி எதிரில். பேருந்து நிலையத்திலிருந்து 1.4 கி.மீ (ஆட்டோவில் 6-8 நிமிடம்)."
                  )}
                </p>
              </div>

              <div className="flex flex-wrap gap-4 pt-1">
                <a
                  href="https://maps.google.com/?q=Shri+Andavar+Eye+Care+Pollachi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-[#0B5C8A] hover:bg-[#08486D] text-[#FFFFFF] font-bold text-sm rounded flex items-center gap-2 transition-colors"
                >
                  <MapPin className="w-4 h-4" />
                  <span>{t("Open Google Maps Navigation", "கூகுள் மேப் வழித்தடம்")}</span>
                </a>

                <a
                  href="tel:04259221000"
                  className="px-5 py-3 bg-[#FFFFFF] hover:bg-[#F5EFE5] text-[#151A1C] border border-[#CBD5E1] font-bold text-sm rounded flex items-center gap-2 transition-colors"
                >
                  <Phone className="w-4 h-4 text-[#0B5C8A]" />
                  <span>{t("Call Desk for Directions", "வழிகாட்ட அழைக்க")}</span>
                </a>
              </div>
            </ScrollReveal>

            {/* Visual Transit Card */}
            <ScrollReveal direction="left" delay={0.2} className="lg:col-span-6">
              <div className="bg-[#EFF3F5] border border-[#CBD5E1] rounded-xl p-6 sm:p-8 space-y-4">
                <h3 className="text-lg font-bold font-serif text-[#151A1C]">
                  {t("Transit Routes to Hospital", "பயண வழிகாட்டி")}
                </h3>

                <div className="space-y-3 text-xs sm:text-sm">
                  <div className="p-3 bg-[#FFFFFF] rounded border border-[#E2DACE]">
                    <span className="font-bold text-[#0B5C8A] block mb-1">
                      {t("From Pollachi Central Bus Stand (1.4 km):", "பொள்ளாச்சி பேருந்து நிலையத்திலிருந்து:")}
                    </span>
                    <p className="text-[#41474F]">
                      {t(
                        "Take any town bus towards Palladam / Sulur and alight at LMHSS School bus stop. Autos take 6 minutes.",
                        "பல்லடம் செல்லும் நகரப் பேருந்தில் ஏறி LMHSS பள்ளி நிறுத்தத்தில் இறங்கவும்."
                      )}
                    </p>
                  </div>

                  <div className="p-3 bg-[#FFFFFF] rounded border border-[#E2DACE]">
                    <span className="font-bold text-[#0B5C8A] block mb-1">
                      {t("From Udumalpet / Madathukulam Highway:", "உடுமலை / மடத்துக்குளம் பகுதியிலிருந்து:")}
                    </span>
                    <p className="text-[#41474F]">
                      {t(
                        "Take the bypass directly into Palladam Road avoiding main bazaar traffic. Hospital is on the left opposite school grounds.",
                        "நகர நெரிசலைத் தவிர்த்து பல்லடம் சாலைக்கு நேரடியாக வரலாம்."
                      )}
                    </p>
                  </div>

                  <div className="p-3 bg-[#FFFFFF] rounded border border-[#E2DACE]">
                    <span className="font-bold text-[#0B5C8A] block mb-1">
                      {t("From Valparai / Anaimalai:", "வால்பாறை / ஆனைமலை பகுதியிலிருந்து:")}
                    </span>
                    <p className="text-[#41474F]">
                      {t(
                        "Descend via ghat road to Pollachi Central, then follow Palladam Road for 1.4 km.",
                        "பொள்ளாச்சி வழியாக பல்லடம் சாலையில் 1.4 கி.மீ தொலைவில் மருத்துவமனை அமைந்துள்ளது."
                      )}
                    </p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Modals & Slide Drawers */}
      <ConsultationModal
        isOpen={bookingOpen}
        onClose={() => setBookingOpen(false)}
        defaultSpecialty={activeSpecialty}
      />
      <SchemesDrawer
        isOpen={schemesDrawerOpen}
        onClose={() => setSchemesDrawerOpen(false)}
      />
    </div>
  );
}
