"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { SchemesDrawer } from "@/components/SchemesDrawer";
import { ConsultationModal } from "@/components/ConsultationModal";
import {
  ShieldCheck,
  FileCheck,
  CheckCircle2,
  Phone,
  Clock,
  HelpCircle,
  AlertCircle,
  FileText,
  Building,
  Printer,
} from "lucide-react";

export default function SchemesPage() {
  const { t, lang } = useLanguage();
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (idx: number) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

  const faqs = [
    {
      qEn: "Can I upgrade to a premium Toric or Multifocal lens under CMCHIS?",
      qTa: "முதலமைச்சர் காப்பீட்டில் மல்டிபோகல் அல்லது டோரிக் லென்ஸ் பொருத்த முடியுமா?",
      aEn: "Government CMCHIS strictly authorizes high-quality standard monofocal foldable lenses providing crystal-clear distance sight. Government guidelines do not permit partial co-payments for premium multifocal lenses. If you desire presbyopia or astigmatism correction, our team will provide a transparent, all-inclusive private self-pay estimate with zero pressure.",
      aTa: "அரசு விதிகளின்படி முதலமைச்சர் காப்பீட்டில் உயர்தர மோனோபோகல் லென்ஸ் மட்டுமே முழு இலவசமாக அனுமதிக்கப்படும். கூடுதல் கட்டணம் செலுத்தி மல்டிபோகல் லென்ஸ் பொருத்த அரசு விதிகளில் அனுமதியில்லை. உங்களுக்கு மல்டிபோகல் லென்ஸ் தேவைப்பட்டால், வெளிப்படையான தனிநபர் கட்டண விவரங்களை எங்கள் அலுவலகத்தில் அறிந்து கொள்ளலாம்.",
    },
    {
      qEn: "What if my name spelling in my Aadhaar does not match my Smart Ration Card?",
      qTa: "ரேஷன் கார்டிலும் ஆதாரிலும் பெயர் எழுத்துப் பிழை இருந்தால் என்ன செய்வது?",
      aEn: "Minor spelling variations between your Ration Card and Aadhaar can be resolved directly at our desk using biometric OTP authentication or a simple signed declaration. Our ground-floor liaison officer assists elderly patients on the spot so you do not have to make repeated trips.",
      aTa: "ஆதார் மற்றும் ரேஷன் கார்டில் உள்ள சிறிய எழுத்துப் பிழைகளை எங்களது உதவி மையத்திலேயே கைரேகை அல்லது OTP சரிபார்ப்பு மூலம் உடனடியாகத் தீர்க்க முடியும். இதற்காக உங்களை அலைக்கழிக்க மாட்டோம்.",
    },
    {
      qEn: "How long does private TPA cashless approval take?",
      qTa: "தனியார் இன்சூரன்ஸ் (TPA) அனுமதி பெற எவ்வளவு நேரம் ஆகும்?",
      aEn: "We submit clinical notes, biometry, and diagnostic photos electronically within 90 minutes of examination by Dr. Raghuram. Most insurers (Star Health, MediAssist, Vidal Health) grant initial cashless approval within 2 to 4 hours.",
      aTa: "டாக்டர் ரகுராம் பரிசோதனை செய்த 90 நிமிடங்களில் ஆவணங்கள் ஆன்லைனில் பதிவேற்றப்படும். ஸ்டார் ஹெல்த், மீடியாசிஸ்ட் போன்ற நிறுவனங்கள் பொதுவாக 2 முதல் 4 மணி நேரத்திற்குள் அனுமதி வழங்கிவிடும்.",
    },
    {
      qEn: "Are vitrectomy surgery and retinal anti-VEGF injections covered under CMCHIS?",
      qTa: "விழித்திரை அறுவை சிகிச்சை மற்றும் ஊசி மருந்துகள் முதலமைச்சர் திட்டத்தில் வருமா?",
      aEn: "Yes. Specific advanced vitreoretinal interventions and diabetic macular injections are covered under specialized CMCHIS codes, subject to pre-authorization review by the government medical board. Dr. Raghuram personally submits your fundus photographs and OCT scans for sanction.",
      aTa: "ஆம். குறிப்பிட்ட சில விழித்திரை அறுவை சிகிச்சைகளும், ஊசி மருந்துகளும் அரசு மருத்துவக் குழுவின் முன் அனுமதியுடன் முதலமைச்சர் திட்டத்தின் கீழ் இலவசமாகச் செய்யப்படுகின்றன.",
    },
    {
      qEn: "Can family members accompany the elderly patient during day-care surgery?",
      qTa: "அறுவை சிகிச்சையின் போது குடும்பத்தினர் உடன் தங்கலாமா?",
      aEn: "Yes. Every senior cataract patient is entitled to one accompanying family member or caregiver in our ground-floor day-care lounge. Wheelchair assistance and complimentary refreshments are provided.",
      aTa: "ஆம். முதியோர்களுக்கு உதவியாக ஒருவர் எப்போதும் உடன் இருக்கலாம். சக்கர நாற்காலி வசதியும் மருத்துவமனையில் உண்டு.",
    },
  ];

  return (
    <div className="bg-[#FBF8F3] min-h-screen py-10 sm:py-14 text-[#151A1C]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Breadcrumb */}
        <nav className="text-xs text-[#717880] mb-6 flex items-center gap-1.5">
          <Link href="/" className="hover:text-[#0B5C8A]">
            {t("Home", "முகப்பு")}
          </Link>
          <span>/</span>
          <span className="text-[#151A1C] font-semibold">
            {t("Govt Schemes & Insurance", "அரசு திட்டங்கள் & காப்பீடு")}
          </span>
        </nav>

        {/* Administrative Hero */}
        <div className="bg-[#FFFFFF] border-2 border-[#E2DACE] rounded-xl p-6 sm:p-10 mb-12 shadow-sm">
          <div className="max-w-3xl space-y-4">
            <span className="inline-block px-3 py-1 bg-[#EFF7F3] text-[#2E7D5B] text-xs font-bold rounded uppercase tracking-wider">
              {t("Liaison Desk Active Today (Mon–Sat 9:30 AM – 5:30 PM)", "காப்பீட்டு உதவி மையம் இயங்குகிறது")}
            </span>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-serif text-[#151A1C] leading-tight">
              {lang === "ta"
                ? "Government Schemes & Cashless Insurance / அரசு நலத்திட்டங்கள் மற்றும் காப்பீடு"
                : "Government Schemes & Cashless Insurance"}
            </h1>

            <p className="text-base sm:text-lg text-[#41474F] leading-relaxed">
              {t(
                "100% cashless cataract & eye surgeries for eligible Smart Ration Card holders, pensioners, and insured families across Pollachi, Anaimalai, Udumalpet, and Valparai. Upfront clarity with zero unexpected counter bills.",
                "ஸ்மார்ட் ரேஷன் அட்டைதாரர்கள், அரசு ஓய்வூதியதாரர்கள் மற்றும் தனியார் காப்பீடு உள்ளவர்களுக்கு முழுமையான கட்டணமில்லா கண் அறுவை சிகிச்சை வசதி. வெளியேறும் போது மறைமுகக் கட்டணங்கள் ஏதுமில்லை."
              )}
            </p>

            {/* Live Liaison Alert Box */}
            <div className="p-4 bg-[#EFF7F3] border border-[#2E7D5B]/30 rounded-lg flex items-center justify-between flex-wrap gap-4 text-xs sm:text-sm">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#2E7D5B] pulse-dot" />
                <span className="font-bold text-[#151A1C]">
                  {t("Schemes Liaison Desk Open Now", "காப்பீட்டு உதவி மையம் இயங்குகிறது:")}
                </span>
                <span className="text-[#41474F]">
                  {t("Ground Floor, Opp. In-House Pharmacy", "தரைத்தளம்")}
                </span>
              </div>

              <div className="flex items-center gap-3 font-semibold">
                <a href="tel:04259221000" className="text-[#0B5C8A] hover:underline flex items-center gap-1">
                  <Phone className="w-4 h-4" />
                  <span>04259 221 000</span>
                </a>
              </div>
            </div>

            {/* Quick Action Button */}
            <div className="pt-2 flex flex-wrap items-center gap-3">
              <button
                onClick={() => setDrawerOpen(true)}
                className="px-6 py-3 bg-[#2E7D5B] hover:bg-[#236348] text-[#FFFFFF] font-bold text-sm rounded shadow-xs transition-colors flex items-center gap-2 cursor-pointer"
              >
                <FileCheck className="w-4 h-4" />
                <span>{t("Open Interactive Document Checklist", "கொண்டு வர வேண்டிய ஆவணங்கள் சரிபார்க்க")}</span>
              </button>

              <button
                onClick={() => setModalOpen(true)}
                className="px-5 py-3 bg-[#EFF3F5] hover:bg-[#0B5C8A] hover:text-[#FFFFFF] text-[#0B5C8A] font-bold text-sm rounded transition-colors cursor-pointer"
              >
                {t("Book OPD Pre-Check", "முன்பதிவு செய்ய")}
              </button>
            </div>
          </div>
        </div>

        {/* ───────────────────────────────────────────────────────────
            2. THREE MAJOR EMPANELLED SCHEME CARDS
            ─────────────────────────────────────────────────────────── */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-14">
          {/* Card 1: CMCHIS */}
          <div className="bg-[#FFFFFF] border-2 border-[#2E7D5B]/50 rounded-xl p-6 flex flex-col justify-between shadow-xs">
            <div>
              <span className="inline-block px-2.5 py-0.5 bg-[#EFF7F3] text-[#2E7D5B] text-xs font-bold rounded mb-3">
                {t("100% Cashless Govt Scheme", "100% அரசு இலவச திட்டம்")}
              </span>
              <h3 className="text-xl font-bold font-serif text-[#151A1C]">
                {t("CMCHIS (Kalaignar Kaappeettu Thittam)", "முதலமைச்சரின் விரிவான மருத்துவக் காப்பீட்டுத் திட்டம்")}
              </h3>
              <p className="text-xs text-[#41474F] mt-2 leading-relaxed">
                {t(
                  "Complete coverage for sutureless micro-incision cataract surgery (MICS), US-FDA approved foldable lens, preoperative tests, post-op medications, and reviews. Zero out-of-pocket payment.",
                  "தையலில்லா கேடராக்ட் அறுவை சிகிச்சை, நவீன மடிக்கக்கூடிய லென்ஸ், மருந்துகள் மற்றும் பின்தொடர் பரிசோதனைகள் அனைத்தும் முழு இலவசம்."
                )}
              </p>

              <div className="mt-4 pt-4 border-t border-[#F0F4F7] space-y-2">
                <span className="text-xs font-bold text-[#151A1C] block uppercase tracking-wider">
                  {t("Documents to Bring (2 Sets of Photocopies):", "கொண்டு வர வேண்டிய ஆவணங்கள்:")}
                </span>
                <ul className="space-y-1.5 text-xs text-[#41474F]">
                  <li className="flex items-start gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#2E7D5B] shrink-0 mt-0.5" />
                    <span>{t("Original Smart Family Card (Ration Card)", "அசல் ஸ்மார்ட் குடும்ப அட்டை (ரேஷன் கார்டு)")}</span>
                  </li>
                  <li className="flex items-start gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#2E7D5B] shrink-0 mt-0.5" />
                    <span>{t("Patient's Original Aadhaar Card", "நோயாளி அசல் ஆதார் அட்டை")}</span>
                  </li>
                  <li className="flex items-start gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#2E7D5B] shrink-0 mt-0.5" />
                    <span>{t("CMCHIS URN Card or Income Certificate (if available)", "காப்பீட்டு அட்டை அல்லது வருமானச் சான்றிதழ்")}</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="pt-6 mt-4">
              <button
                onClick={() => setDrawerOpen(true)}
                className="w-full py-2.5 bg-[#EFF7F3] hover:bg-[#2E7D5B] hover:text-[#FFFFFF] text-[#2E7D5B] font-bold text-xs rounded transition-colors cursor-pointer"
              >
                {t("View CMCHIS Tick Checklist", "ஆவணப் பட்டியல் சரிபார்க்க")}
              </button>
            </div>
          </div>

          {/* Card 2: Pensioners */}
          <div className="bg-[#FFFFFF] border-2 border-[#0B5C8A]/40 rounded-xl p-6 flex flex-col justify-between shadow-xs">
            <div>
              <span className="inline-block px-2.5 py-0.5 bg-[#EFF3F5] text-[#0B5C8A] text-xs font-bold rounded mb-3">
                {t("TN State Govt Approved", "அரசு ஓய்வூதியதாரர்கள் திட்டம்")}
              </span>
              <h3 className="text-xl font-bold font-serif text-[#151A1C]">
                {t("TN Government Pensioners Scheme", "ஓய்வூதியதாரர்கள் மருத்துவக் காப்பீட்டுத் திட்டம்")}
              </h3>
              <p className="text-xs text-[#41474F] mt-2 leading-relaxed">
                {t(
                  "Cashless day-care surgery for retired Tamil Nadu government staff, school teachers, transport corporation staff, and their eligible spouses.",
                  "ஓய்வுபெற்ற தமிழக அரசு ஊழியர்கள், ஆசிரியர்கள் மற்றும் அவர்களின் வாழ்க்கைத்துணைக்கான கட்டணமில்லா கண் அறுவை சிகிச்சை."
                )}
              </p>

              <div className="mt-4 pt-4 border-t border-[#F0F4F7] space-y-2">
                <span className="text-xs font-bold text-[#151A1C] block uppercase tracking-wider">
                  {t("Documents to Bring:", "கொண்டு வர வேண்டிய ஆவணங்கள்:")}
                </span>
                <ul className="space-y-1.5 text-xs text-[#41474F]">
                  <li className="flex items-start gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#0B5C8A] shrink-0 mt-0.5" />
                    <span>{t("Pension Payment Order (PPO) booklet or digital copy", "PPO (ஓய்வூதிய ஆணை) நகல்")}</span>
                  </li>
                  <li className="flex items-start gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#0B5C8A] shrink-0 mt-0.5" />
                    <span>{t("Pensioner Identity Card / New Smart Card", "ஓய்வூதிய அடையாள அட்டை")}</span>
                  </li>
                  <li className="flex items-start gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#0B5C8A] shrink-0 mt-0.5" />
                    <span>{t("Aadhaar Card of Pensioner & Spouse", "ஆதார் அட்டை & புகைப்படங்கள்")}</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="pt-6 mt-4">
              <button
                onClick={() => setDrawerOpen(true)}
                className="w-full py-2.5 bg-[#EFF3F5] hover:bg-[#0B5C8A] hover:text-[#FFFFFF] text-[#0B5C8A] font-bold text-xs rounded transition-colors cursor-pointer"
              >
                {t("View Pensioner Tick Checklist", "ஆவணப் பட்டியல் சரிபார்க்க")}
              </button>
            </div>
          </div>

          {/* Card 3: Private TPAs */}
          <div className="bg-[#FFFFFF] border border-[#E2DACE] rounded-xl p-6 flex flex-col justify-between shadow-xs">
            <div>
              <span className="inline-block px-2.5 py-0.5 bg-[#FDF8F3] text-[#B8722C] text-xs font-bold rounded mb-3">
                {t("Star Health & Major TPAs", "தனியார் காப்பீடுகள்")}
              </span>
              <h3 className="text-xl font-bold font-serif text-[#151A1C]">
                {t("Private Health Insurance & TPAs", "தனியார் மெடிக்ளைம் & TPAs")}
              </h3>
              <p className="text-xs text-[#41474F] mt-2 leading-relaxed">
                {t(
                  "Empanelled with Star Health, MediAssist, Vidal Health, ICICI Lombard, Care Health, and HDFC ERGO. Digital pre-auth submitted within 2 hours of exam.",
                  "ஸ்டார் ஹெல்த் மற்றும் அனைத்து முன்னணி நிறுவனங்களின் பாலிசிகளுக்கு 2 மணி நேரத்தில் நேரடி ஆன்லைன் அனுமதி."
                )}
              </p>

              <div className="mt-4 pt-4 border-t border-[#F0F4F7] space-y-2">
                <span className="text-xs font-bold text-[#151A1C] block uppercase tracking-wider">
                  {t("Documents to Bring:", "கொண்டு வர வேண்டிய ஆவணங்கள்:")}
                </span>
                <ul className="space-y-1.5 text-xs text-[#41474F]">
                  <li className="flex items-start gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#B8722C] shrink-0 mt-0.5" />
                    <span>{t("Active Insurance Card / Policy Schedule", "இன்சூரன்ஸ் பாலிசி அட்டை")}</span>
                  </li>
                  <li className="flex items-start gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#B8722C] shrink-0 mt-0.5" />
                    <span>{t("Employee/Corporate ID & Aadhaar Card", "பாலிசிதாரர் அடையாள அட்டை")}</span>
                  </li>
                  <li className="flex items-start gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#B8722C] shrink-0 mt-0.5" />
                    <span>{t("Cancelled cheque of policyholder", "ரத்து செய்யப்பட்ட வங்கி காசோலை")}</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="pt-6 mt-4">
              <button
                onClick={() => setDrawerOpen(true)}
                className="w-full py-2.5 bg-[#F5EFE5] hover:bg-[#0B5C8A] hover:text-[#FFFFFF] text-[#151A1C] font-bold text-xs rounded transition-colors cursor-pointer"
              >
                {t("View TPA Tick Checklist", "ஆவணப் பட்டியல் சரிபார்க்க")}
              </button>
            </div>
          </div>
        </div>

        {/* ───────────────────────────────────────────────────────────
            3. "IF YOU HAVE NO SCHEME" UPFRONT HONEST FEE GUARANTEE
            ─────────────────────────────────────────────────────────── */}
        <section className="mb-14 p-6 sm:p-10 bg-[#FFFFFF] border-2 border-[#E2DACE] rounded-xl shadow-xs">
          <div className="max-w-3xl space-y-3 mb-6">
            <span className="text-xs font-bold uppercase tracking-widest text-[#0B5C8A]">
              {t("Self-Pay Patients / நேரடி கட்டண வெளிப்படைத்தன்மை", "கட்டண வெளிப்படைத்தன்மை")}
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold font-serif text-[#151A1C]">
              {t("If You Have No Scheme: Upfront Single-Fee Guarantee", "காப்பீடு ஏதும் இல்லாதவர்களுக்கு: வெளிப்படையான ஒரே கட்டணம்")}
            </h2>
            <p className="text-sm text-[#41474F] leading-relaxed">
              {t(
                "We believe in financial dignity for every patient. Before dilation or admission, you receive an itemized, single written figure that covers everything. Zero surprise line items on discharge.",
                "அறுவை சிகிச்சைக்கு முன்பே மொத்த செலவும் எழுத்துப்பூர்வமாக தெரிவிக்கப்படும். வெளியேறும் போது கூடுதல் கட்டணங்கள் ஏதும் இருக்காது."
              )}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-sm">
            <div className="p-4 bg-[#EFF7F3] border border-[#2E7D5B]/30 rounded-lg space-y-2">
              <span className="font-bold text-[#2E7D5B] block text-sm">
                ✓ {t("What is 100% Included in Your Quote:", "கட்டணத்தில் உள்ளடங்கியவை:")}
              </span>
              <ul className="space-y-1.5 text-[#151A1C]">
                <li>• {t("Pre-operative optical biometry & corneal curvature mapping", "அறுவை சிகிச்சைக்கு முந்தைய லென்ஸ் கணக்கீடு")}</li>
                <li>• {t("Sterile laminar airflow operating theatre charges", "நவீன ஆபரேஷன் தியேட்டர் கட்டணம்")}</li>
                <li>• {t("Microsurgeon fee (Dr. A. Raghuram personal surgery)", "டாக்டர் ரகுராம் அவர்களின் அறுவை சிகிச்சை கட்டணம்")}</li>
                <li>• {t("Selected US-FDA approved foldable intraocular lens (IOL)", "தேர்வு செய்யப்பட்ட தரமான லென்ஸ்")}</li>
                <li>• {t("Post-operative eye drop medication starter pack", "அறுவை சிகிச்சைக்குப் பின் பயன்படுத்தும் மருந்து தொகுப்பு")}</li>
                <li>• {t("First 3 scheduled follow-up slit-lamp reviews", "முதல் 3 பின்தொடர் பரிசோதனைகள்")}</li>
              </ul>
            </div>

            <div className="p-4 bg-[#FDF8F3] border border-[#B8722C]/30 rounded-lg space-y-2">
              <span className="font-bold text-[#B8722C] block text-sm">
                ✕ {t("What We NEVER Separately Charge (Zero Hidden Fees):", "நாங்கள் தனியாக கட்டணம் வசூலிக்காதவை:")}
              </span>
              <ul className="space-y-1.5 text-[#41474F]">
                <li>• {t("No separate blade or micro-port charges", "பிளேடு அல்லது நுண்துளை கருவிகளுக்கு தனிக் கட்டணம் இல்லை")}</li>
                <li>• {t("No viscoelastic fluid or draping surcharges", "மருத்துவ திரவங்கள் மற்றும் துணிகளுக்கு தனிக் கட்டணம் இல்லை")}</li>
                <li>• {t("No unscheduled nursing or tray preparation fees", "செவிலியர் அல்லது தட்டு கட்டணம் இல்லை")}</li>
                <li>• {t("No discharge certificate or documentation surcharge", "டிஸ்சார்ஜ் ஆவணக் கட்டணம் இல்லை")}</li>
              </ul>
            </div>
          </div>
        </section>

        {/* ───────────────────────────────────────────────────────────
            4. 5 ESSENTIAL SCHEMES FAQS
            ─────────────────────────────────────────────────────────── */}
        <section className="mb-14">
          <div className="max-w-2xl mb-8">
            <span className="text-xs font-bold uppercase tracking-widest text-[#0B5C8A]">
              {t("Common Counter Questions / அடிக்கடி கேட்கப்படும் கேள்விகள்", "கேள்வி - பதில்")}
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold font-serif text-[#151A1C] mt-1">
              {t("5 Essential Schemes & Insurance FAQs", "காப்பீடு தொடர்பான 5 முக்கிய கேள்விகள்")}
            </h2>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className="bg-[#FFFFFF] border border-[#E2DACE] rounded-lg overflow-hidden transition-all"
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 font-bold text-sm sm:text-base text-[#151A1C] hover:bg-[#FBF8F3] transition-colors cursor-pointer"
                >
                  <span>{lang === "ta" ? faq.qTa : faq.qEn}</span>
                  <span className="text-[#0B5C8A] shrink-0 font-mono text-lg">
                    {openFaq === idx ? "−" : "+"}
                  </span>
                </button>

                {openFaq === idx && (
                  <div className="p-4 sm:p-5 pt-0 text-xs sm:text-sm text-[#41474F] leading-relaxed border-t border-[#F0F4F7] bg-[#FBF8F3]">
                    {lang === "ta" ? faq.aTa : faq.aEn}
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* ───────────────────────────────────────────────────────────
            5. DIRECT HELP DESK & CONTACT STRIP
            ─────────────────────────────────────────────────────────── */}
        <div className="p-8 bg-[#151A1C] text-[#FFFFFF] rounded-xl flex flex-col md:flex-row items-center justify-between gap-6 border-l-4 border-[#2E7D5B]">
          <div className="space-y-1.5 text-center md:text-left">
            <h4 className="text-2xl font-bold font-serif text-[#FFFFFF]">
              {t("Have Questions About Your Smart Card or Policy?", "காப்பீடு பற்றி சந்தேகங்கள் உள்ளதா?")}
            </h4>
            <p className="text-sm text-[#C0C7D0]">
              {t(
                "Call our ground-floor Schemes Liaison Officer directly • Mon–Sat 9:30 AM – 5:30 PM",
                "எங்கள் காப்பீட்டு உதவி மைய அதிகாரியை நேரடியாக அழைக்கவும்"
              )}
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <a
              href="tel:04259221000"
              className="px-6 py-3 bg-[#2E7D5B] hover:bg-[#236348] text-[#FFFFFF] font-bold text-sm rounded flex items-center gap-2 transition-colors cursor-pointer"
            >
              <Phone className="w-4 h-4" />
              <span>04259 221 000</span>
            </a>
            <button
              onClick={() => setDrawerOpen(true)}
              className="px-5 py-3 bg-[#2C3133] hover:bg-[#41474F] text-[#FFFFFF] font-bold text-sm rounded transition-colors cursor-pointer"
            >
              {t("Open Tick Checklist", "ஆவணப் பட்டியல்")}
            </button>
          </div>
        </div>
      </div>

      <SchemesDrawer isOpen={drawerOpen} onClose={() => setDrawerOpen(false)} />
      <ConsultationModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </div>
  );
}
