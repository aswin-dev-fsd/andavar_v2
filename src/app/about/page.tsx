"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { ConsultationModal } from "@/components/ConsultationModal";
import { ApertureSVG } from "@/components/ApertureSVG";
import {
  ShieldCheck,
  CheckCircle2,
  XCircle,
  MapPin,
  Clock,
  Phone,
  Calendar,
  Navigation,
  Car,
  Bus,
  AlertTriangle,
  Award,
} from "lucide-react";

export default function AboutPage() {
  const { t, lang } = useLanguage();
  const [modalOpen, setModalOpen] = useState(false);

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
            {t("About Surgeon & Hospital", "மருத்துவர் & மருத்துவமனை பற்றி")}
          </span>
        </nav>

        {/* ───────────────────────────────────────────────────────────
            1. NARRATIVE HERO: "A Hospital That Has Stayed in One Place"
            ─────────────────────────────────────────────────────────── */}
        <div className="bg-[#FFFFFF] border-2 border-[#E2DACE] rounded-xl p-6 sm:p-10 mb-12 shadow-sm relative overflow-hidden">
          <div className="absolute top-0 right-0 opacity-15 pointer-events-none hidden md:block">
            <ApertureSVG size={360} strokeColor="#0B5C8A" opacity={0.3} />
          </div>

          <div className="max-w-3xl space-y-4 relative z-10">
            <span className="inline-block px-3 py-1 bg-[#EFF3F5] text-[#0B5C8A] text-xs font-bold rounded uppercase tracking-wider">
              {t("Established in Pollachi Since 2013 • Reg. No. TN-MED-621428", "பொள்ளாச்சியில் 2013 முதல் • பதிவு எண்: TN-MED-621428")}
            </span>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-serif text-[#151A1C] leading-tight">
              {lang === "ta"
                ? "A Hospital That Has Stayed in One Place / எங்கள் வரலாறு மற்றும் மருத்துவர்"
                : "A Hospital That Has Stayed in One Place"}
            </h1>

            <p className="text-base sm:text-lg text-[#41474F] leading-relaxed">
              {t(
                "Founded on Palladam Road in Pollachi to bring tertiary vitreoretinal and micro-incision cataract surgery closer to families across the Anaimalai, Udumalpet, Kinathukadavu, and Valparai agricultural belts. No rotating doctors. No corporate sales targets.",
                "பொள்ளாச்சி மற்றும் சுற்றுவட்டார கிராமப்புற மக்களின் கண் பார்வைக்காக தொடங்கப்பட்ட சிறப்பு மருத்துவமனை. கார்ப்பரேட் விற்பனை இலக்குகள் இன்றி, முழுமையான மருத்துவ நெறிமுறைகளுடன் செயல்படுகிறது."
              )}
            </p>

            {/* Doctor Spotlight Box */}
            <div className="p-6 bg-[#FBF8F3] border border-[#E2DACE] rounded-lg mt-6">
              <div className="flex flex-col sm:flex-row items-start gap-5">
                <div className="relative w-24 h-24 rounded-full overflow-hidden border-2 border-[#0B5C8A] shrink-0 shadow-xs">
                  <Image
                    src="/assets/dr_murugan.jpg"
                    alt="Dr. A. Raghuram"
                    fill
                    className="object-cover object-top"
                  />
                </div>

                <div className="space-y-1.5 flex-1">
                  <div className="flex items-center gap-2">
                    <h3 className="text-xl font-bold font-serif text-[#151A1C]">
                      Dr. A. Raghuram
                    </h3>
                    <span className="px-2 py-0.5 bg-[#EFF7F3] text-[#2E7D5B] text-xs font-bold rounded">
                      FRCS Glasgow
                    </span>
                  </div>

                  <p className="text-xs font-semibold text-[#0B5C8A]">
                    MBBS, DO, DNB (Ophthalmology), FICO (UK), FRCS (Glasgow)
                  </p>
                  <p className="text-xs text-[#717880]">
                    Chief Vitreoretinal Surgeon & Medical Director • 22+ Years Surgical Excellence
                  </p>

                  <div className="p-3 bg-[#FFFFFF] border border-[#E2DACE] rounded text-xs text-[#41474F] italic mt-2">
                    &ldquo;
                    {t(
                      "The doctor who examines your eye is the doctor who holds the phaco handpiece in the operating theatre. No junior substitutes, no commission quotas.",
                      "உங்கள் கண்களைப் பரிசோதிக்கும் அதே மருத்துவரே ஆபரேஷன் தியேட்டரிலும் லென்ஸ் பொருத்துகிறார். பயிற்சி மருத்துவர்களிடம் மாற்றப்படுவதில்லை."
                    )}
                    &rdquo;
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ───────────────────────────────────────────────────────────
            2. THE SINGLE-SURGEON ACCOUNTABILITY CODE (COMPARISON TABLE)
            ─────────────────────────────────────────────────────────── */}
        <section className="mb-14">
          <div className="max-w-3xl mb-8 space-y-2">
            <span className="text-xs font-bold uppercase tracking-widest text-[#0B5C8A]">
              {t("Ethical Standard / எங்களின் கொள்கை", "எங்களின் கொள்கை")}
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold font-serif text-[#151A1C]">
              {t("The Single-Surgeon Accountability Code", "ஒற்றை மருத்துவர் பொறுப்புணர்வு நெறிமுறை")}
            </h2>
            <p className="text-sm text-[#41474F]">
              {t(
                "How patient care at Shri Andavar differs from multi-branch corporate chain hospitals:",
                "கார்ப்பரேட் மருத்துவமனைகளுக்கும் ஸ்ரீ ஆண்டவர் மருத்துவமனைக்கும் உள்ள வேறுபாடு:"
              )}
            </p>
          </div>

          <div className="bg-[#FFFFFF] border-2 border-[#E2DACE] rounded-xl overflow-hidden shadow-xs">
            <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-[#E2DACE]">
              {/* Corporate Eye Hospital Chains */}
              <div className="p-6 sm:p-8 space-y-4 bg-[#FDF8F3]/50">
                <div className="flex items-center gap-2 pb-3 border-b border-[#E2DACE]">
                  <XCircle className="w-5 h-5 text-[#BA1A1A]" />
                  <h4 className="font-bold text-base text-[#151A1C]">
                    {t("Corporate Eye Hospital Chains", "கார்ப்பரேட் கண் மருத்துவமனைகள்")}
                  </h4>
                </div>

                <div className="space-y-3 text-xs sm:text-sm text-[#41474F]">
                  <div className="flex items-start gap-2">
                    <span className="text-[#BA1A1A] font-bold">✕</span>
                    <div>
                      <span className="font-bold text-[#151A1C] block">{t("Rotating Duty Doctors", "சுழலும் மருத்துவர்கள்:")}</span>
                      <span>{t("Initial exam done by optometry technician or junior resident.", "ஆரம்ப பரிசோதனை பயிற்சி மருத்துவர்களால் செய்யப்படும்.")}</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-2">
                    <span className="text-[#BA1A1A] font-bold">✕</span>
                    <div>
                      <span className="font-bold text-[#151A1C] block">{t("Surgeon Hand-off", "அறுவை சிகிச்சைக்கு மாற்றப்படுதல்:")}</span>
                      <span>{t("Surgery performed by a rotating surgeon you have never met before.", "அறுவை சிகிச்சை வேறு ஒரு மருத்துவரால் செய்யப்படும்.")}</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-2">
                    <span className="text-[#BA1A1A] font-bold">✕</span>
                    <div>
                      <span className="font-bold text-[#151A1C] block">{t("Delegated Post-Op Reviews", "பின்தொடர் பரிசோதனை கைவிடுதல்:")}</span>
                      <span>{t("Day-1 and Day-7 checkups delegated to junior assistants.", "அறுவை சிகிச்சைக்குப் பின் உங்களை ஆபரேஷன் செய்த மருத்துவர் பார்க்க மாட்டார்.")}</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-2">
                    <span className="text-[#BA1A1A] font-bold">✕</span>
                    <div>
                      <span className="font-bold text-[#151A1C] block">{t("Hidden Consumable Surcharges", "மறைமுகக் கட்டணங்கள்:")}</span>
                      <span>{t("Surprise add-ons for blades, sterile drapes, and nurses on discharge.", "டிஸ்சார்ஜ் போது கூடுதல் கட்டணங்கள் வசூலிக்கப்படும்.")}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Shri Andavar Eye Care */}
              <div className="p-6 sm:p-8 space-y-4 bg-[#FFFFFF]">
                <div className="flex items-center gap-2 pb-3 border-b border-[#2E7D5B]/30">
                  <CheckCircle2 className="w-5 h-5 text-[#2E7D5B]" />
                  <h4 className="font-bold text-base text-[#2E7D5B]">
                    {t("Shri Andavar Eye Care (Our Standard)", "ஸ்ரீ ஆண்டவர் கண் மருத்துவமனை")}
                  </h4>
                </div>

                <div className="space-y-3 text-xs sm:text-sm text-[#151A1C]">
                  <div className="flex items-start gap-2">
                    <span className="text-[#2E7D5B] font-bold">✓</span>
                    <div>
                      <span className="font-bold text-[#151A1C] block">{t("Direct Surgeon Examination", "மருத்துவரின் நேரடி பரிசோதனை:")}</span>
                      <span className="text-[#41474F]">{t("Dr. Raghuram personally conducts your slit-lamp and dilated retinal evaluation.", "டாக்டர் ரகுராம் அவர்களே நேரடியாக முழு பரிசோதனையும் செய்கிறார்.")}</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-2">
                    <span className="text-[#2E7D5B] font-bold">✓</span>
                    <div>
                      <span className="font-bold text-[#151A1C] block">{t("Single Surgical Hands", "ஒற்றை அறுவை சிகிச்சை நிபுணர்:")}</span>
                      <span className="text-[#41474F]">{t("The same doctor who examined your eye holds the phaco probe in the OT.", "பரிசோதித்த அதே மருத்துவரே ஆபரேஷன் செய்கிறார்.")}</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-2">
                    <span className="text-[#2E7D5B] font-bold">✓</span>
                    <div>
                      <span className="font-bold text-[#151A1C] block">{t("Complete Post-Op Continuity", "பின்தொடர் கவனிப்பு முழுமை:")}</span>
                      <span className="text-[#41474F]">{t("Every single Day-1, Day-7, and Month-1 check is conducted by Dr. Raghuram personally.", "அனைத்து மறுபரிசோதனைகளையும் டாக்டர் ரகுராம் அவர்களே நேரடியாக மேற்கொள்கிறார்.")}</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-2">
                    <span className="text-[#2E7D5B] font-bold">✓</span>
                    <div>
                      <span className="font-bold text-[#151A1C] block">{t("Single Written Estimate", "முழுமையான ஒரே கட்டணம்:")}</span>
                      <span className="text-[#41474F]">{t("All-inclusive fee provided in writing before dilation. Zero consumable extras.", "அறுவை சிகிச்சைக்கு முன்பே மொத்த கட்டணமும் எழுத்துப்பூர்வமாக தெரிவிக்கப்படும்.")}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ───────────────────────────────────────────────────────────
            3. "FOUR THINGS THAT MAKE YOUR VISIT SHORTER"
            ─────────────────────────────────────────────────────────── */}
        <section className="mb-14 p-6 sm:p-10 bg-[#FFFFFF] border border-[#E2DACE] rounded-xl">
          <div className="max-w-2xl mb-8">
            <span className="text-xs font-bold uppercase tracking-widest text-[#0B5C8A]">
              {t("Patient & Caregiver Guidance / நோயாளி வழிகாட்டி", "நோயாளி வழிகாட்டி")}
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold font-serif text-[#151A1C] mt-1">
              {t("Four Things That Make Your Visit Shorter & Smoother", "உங்கள் பரிசோதனை சுலபமாக முடிய 4 குறிப்புகள்")}
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="p-4 bg-[#FBF8F3] border border-[#E2DACE] rounded-lg space-y-2">
              <span className="text-2xl font-bold font-serif text-[#0B5C8A]">1</span>
              <h5 className="font-bold text-sm text-[#151A1C]">
                {t("Bring an Accompanying Driver", "உடன் ஒருவரை அழைத்து வரவும்")}
              </h5>
              <p className="text-xs text-[#41474F] leading-relaxed">
                {t(
                  "Pupil dilation causes 3–4 hours of temporary blurred vision and sunlight glare. Do not drive a two-wheeler or car after the exam.",
                  "விழித்திரை சொட்டு மருந்து போடப்படுவதால் 3-4 மணி நேரம் பார்வை மங்கலாக இருக்கும். வாகனம் ஓட்டி வர வேண்டாம்."
                )}
              </p>
            </div>

            <div className="p-4 bg-[#FBF8F3] border border-[#E2DACE] rounded-lg space-y-2">
              <span className="text-2xl font-bold font-serif text-[#0B5C8A]">2</span>
              <h5 className="font-bold text-sm text-[#151A1C]">
                {t("Carry Existing Glasses & Sugar Logs", "பழைய கண்ணாடிகள் & சர்க்கரை சீட்டு")}
              </h5>
              <p className="text-xs text-[#41474F] leading-relaxed">
                {t(
                  "Please carry current distance/reading glasses, previous optical slips, and your most recent fasting blood sugar report.",
                  "தற்போதைய மூக்குக் கண்ணாடி மற்றும் சமீபத்திய சர்க்கரை அளவு பரிசோதனை சீட்டுகளை கொண்டு வரவும்."
                )}
              </p>
            </div>

            <div className="p-4 bg-[#FBF8F3] border border-[#E2DACE] rounded-lg space-y-2">
              <span className="text-2xl font-bold font-serif text-[#0B5C8A]">3</span>
              <h5 className="font-bold text-sm text-[#151A1C]">
                {t("Choose the Right Session Window", "சரியான நேரத்தைத் தேர்வு செய்யவும்")}
              </h5>
              <p className="text-xs text-[#41474F] leading-relaxed">
                {t(
                  "Morning (10:00 AM – 2:00 PM) is best for dilated retinal checks and A-scan biometry. Evening (5:00 PM – 7:00 PM) is ideal for swift reviews.",
                  "காலை 10-2 முழு பரிசோதனைக்கு சிறந்தது. மாலை 5-7 விரைவு மறுபரிசோதனைக்கு ஏற்றது."
                )}
              </p>
            </div>

            <div className="p-4 bg-[#EFF7F3] border border-[#2E7D5B]/40 rounded-lg space-y-2">
              <span className="text-2xl font-bold font-serif text-[#2E7D5B]">4</span>
              <h5 className="font-bold text-sm text-[#151A1C]">
                {t("Carry Smart Ration Card / Aadhaar", "ரேஷன் அட்டை & ஆதார்")}
              </h5>
              <p className="text-xs text-[#41474F] leading-relaxed">
                {t(
                  "For CMCHIS or insurance coverage, bring your original Smart Family Card and patient Aadhaar linked with mobile OTP.",
                  "முதலமைச்சர் காப்பீட்டுத் திட்டத்திற்கு ஸ்மார்ட் ரேஷன் கார்டு மற்றும் ஆதார் அட்டையைக் கொண்டு வரவும்."
                )}
              </p>
            </div>
          </div>
        </section>

        {/* ───────────────────────────────────────────────────────────
            4. PSG-BENCHMARK LANDMARK WAYFINDING & MAP
            ─────────────────────────────────────────────────────────── */}
        <section id="landmark" className="mb-14 scroll-mt-24">
          <div className="bg-[#FFFFFF] border-2 border-[#E2DACE] rounded-xl p-6 sm:p-10 shadow-xs">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              <div className="lg:col-span-6 space-y-4">
                <span className="text-xs font-bold uppercase tracking-widest text-[#0B5C8A]">
                  {t("Hospital Location / இருப்பிடம்", "இருப்பிடம்")}
                </span>
                <h3 className="text-2xl sm:text-3xl font-bold font-serif text-[#151A1C]">
                  {t("Opposite LMHSS School, Palladam Road", "பல்லடம் ரோடு, LMHSS பள்ளி எதிரில்")}
                </h3>
                <p className="text-sm text-[#41474F] leading-relaxed">
                  {t(
                    "Our hospital is situated on the main Palladam Road arterial stretch in Pollachi, directly opposite Lourdes Mount Higher Secondary School. Known to every town bus conductor and auto driver.",
                    "பொள்ளாச்சி முக்கிய பல்லடம் சாலையில் லூர்து அன்னை மேல்நிலைப் பள்ளி (LMHSS) எதிரில் அமைந்துள்ளது."
                  )}
                </p>

                <div className="p-4 bg-[#FBF8F3] border border-[#E2DACE] rounded-lg space-y-1.5 text-xs sm:text-sm">
                  <p className="font-bold text-[#0B5C8A]">
                    No. 73, Palladam Road, T. Kottampatti, Pollachi – 642002
                  </p>
                  <p className="text-[#717880]">
                    {t(
                      "• Just 1.4 km north of Pollachi Central Bus Stand (approx. 6–8 minutes by local auto; ₹40–₹50 fare).",
                      "• பொள்ளாச்சி பேருந்து நிலையத்திலிருந்து 1.4 கி.மீ (ஆட்டோவில் 6-8 நிமிடம்)."
                    )}
                  </p>
                  <p className="text-[#2E7D5B] font-semibold">
                    {t(
                      "• Step-free 1:12 wheelchair & stretcher ramp straight into the outpatient clinic.",
                      "• சக்கர நாற்காலி மற்றும் ஆம்புலன்ஸ் நேரடி வசதி உண்டு."
                    )}
                  </p>
                </div>

                <div className="pt-2 flex flex-wrap items-center gap-3">
                  <a
                    href="https://maps.google.com/?q=Shri+Andavar+Eye+Care+Pollachi"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 bg-[#0B5C8A] hover:bg-[#08486D] text-[#FFFFFF] font-bold text-sm rounded flex items-center gap-2 transition-colors cursor-pointer"
                  >
                    <Navigation className="w-4 h-4" />
                    <span>{t("Open Google Maps", "கூகுள் மேப் வழித்தடம்")}</span>
                  </a>

                  <a
                    href="tel:04259221000"
                    className="px-5 py-3 bg-[#F0F4F7] hover:bg-[#E2DACE] text-[#151A1C] border border-[#CBD5E1] font-bold text-sm rounded flex items-center gap-2 transition-colors"
                  >
                    <Phone className="w-4 h-4 text-[#0B5C8A]" />
                    <span>{t("Call Desk: 04259 221 000", "அழைக்க: 04259 221 000")}</span>
                  </a>
                </div>
              </div>

              {/* Transit Directions from 3 Hubs */}
              <div className="lg:col-span-6 space-y-3">
                <div className="p-4 bg-[#FBF8F3] border border-[#E2DACE] rounded-lg flex items-start gap-3">
                  <Bus className="w-5 h-5 text-[#0B5C8A] shrink-0 mt-0.5" />
                  <div className="text-xs sm:text-sm">
                    <span className="font-bold text-[#151A1C] block">
                      {t("From Pollachi Central Bus Stand & Railway Station:", "பொள்ளாச்சி பேருந்து & ரயில் நிலையத்திலிருந்து:")}
                    </span>
                    <p className="text-[#41474F] mt-0.5">
                      {t(
                        "Take any town bus towards Palladam / Sulur. Request the conductor to drop you at 'LMHSS School' stop. The hospital is right across the road.",
                        "பல்லடம் செல்லும் அனைத்து நகரப் பேருந்துகளும் LMHSS பள்ளி நிறுத்தத்தில் நிற்கும்."
                      )}
                    </p>
                  </div>
                </div>

                <div className="p-4 bg-[#FBF8F3] border border-[#E2DACE] rounded-lg flex items-start gap-3">
                  <Car className="w-5 h-5 text-[#0B5C8A] shrink-0 mt-0.5" />
                  <div className="text-xs sm:text-sm">
                    <span className="font-bold text-[#151A1C] block">
                      {t("From Udumalpet / Madathukulam Highway:", "உடுமலை / மடத்துக்குளம் சாலையிலிருந்து:")}
                    </span>
                    <p className="text-[#41474F] mt-0.5">
                      {t(
                        "Enter Pollachi town via bypass into Palladam Road directly. You will see our large green hospital signage on the left opposite the school.",
                        "நகர நெரிசலைத் தவிர்த்து பல்லடம் சாலைக்கு நேரடியாக வரலாம்."
                      )}
                    </p>
                  </div>
                </div>

                <div className="p-4 bg-[#FBF8F3] border border-[#E2DACE] rounded-lg flex items-start gap-3">
                  <Car className="w-5 h-5 text-[#0B5C8A] shrink-0 mt-0.5" />
                  <div className="text-xs sm:text-sm">
                    <span className="font-bold text-[#151A1C] block">
                      {t("From Valparai / Anaimalai Hills:", "வால்பாறை / ஆனைமலை பகுதியிலிருந்து:")}
                    </span>
                    <p className="text-[#41474F] mt-0.5">
                      {t(
                        "Descend the ghat road into Pollachi Central Junction, proceed onto Palladam Road avoiding bazaar gridlock.",
                        "பொள்ளாச்சி வழியாக பல்லடம் சாலையில் 1.4 கி.மீ தொலைவில் மருத்துவமனை அமைந்துள்ளது."
                      )}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ───────────────────────────────────────────────────────────
            5. DIRECT OPD TOKEN REQUEST STRIP
            ─────────────────────────────────────────────────────────── */}
        <div className="p-8 bg-[#151A1C] text-[#FFFFFF] rounded-xl flex flex-col md:flex-row items-center justify-between gap-6 border-l-4 border-[#0B5C8A]">
          <div className="space-y-1.5 text-center md:text-left">
            <h4 className="text-2xl font-bold font-serif text-[#FFFFFF]">
              {t("Request Your OPD Consultation Token", "ஓ.பி.டி ஆலோசனை முன்பதிவு")}
            </h4>
            <p className="text-sm text-[#C0C7D0]">
              {t(
                "Direct examination by Dr. A. Raghuram • Sessions: 10am–2pm & 5pm–7pm",
                "டாக்டர் ஏ. ரகுராம் அவர்களிடம் நேரடி கண் பரிசோதனை"
              )}
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <button
              onClick={() => setModalOpen(true)}
              className="px-6 py-3 bg-[#0B5C8A] hover:bg-[#08486D] text-[#FFFFFF] font-bold text-sm rounded transition-colors cursor-pointer"
            >
              {t("Book Consultation", "முன்பதிவு செய்ய")}
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

      <ConsultationModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </div>
  );
}
