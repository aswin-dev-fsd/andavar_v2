"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { ConsultationModal } from "@/components/ConsultationModal";
import {
  Eye,
  AlertTriangle,
  ShieldCheck,
  Clock,
  Glasses,
  CheckCircle2,
  ChevronRight,
  Phone,
  ArrowRight,
} from "lucide-react";

export default function TreatmentsPage() {
  const { t, lang } = useLanguage();
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedSpecialty, setSelectedSpecialty] = useState("cataract");

  const openBooking = (spec: string) => {
    setSelectedSpecialty(spec);
    setModalOpen(true);
  };

  const specialties = [
    {
      id: "cataract",
      titleEn: "Micro-Incision Cataract Surgery (MICS)",
      titleTa: "கேடராக்ட் அறுவை சிகிச்சை (MICS)",
      symptomEn: "Cloudy vision, glare around headlights, difficulty reading in dim light, faded colors.",
      symptomTa: "மங்கலான பார்வை, இரவு விளக்கு கூச்சம், மங்கலான வெளிச்சத்தில் படிக்க சிரமம், மங்கிய நிறங்கள்.",
      detailEn: "2.2mm self-sealing sutureless procedure. Ultrasonic phacoemulsification liquefies the clouded lens. Replaced with foldable Monofocal, Toric, or Multifocal IOL under topical drops (no injections). Walk in at 8:30 AM, home before noon.",
      detailTa: "2.2மிமீ துளை வழியே வலியின்றி செய்யப்படும் நவீன தையலில்லா அறுவை சிகிச்சை. ஊசி இல்லை. மோனோபோகல், டோரி அல்லது மல்டிபோகல் லென்ஸ் பொருத்தப்படும். அன்றைய தினமே வீடு திரும்பலாம்.",
      href: "/treatments/cataract-surgery",
      badgeEn: "Day-Care • 100% CMCHIS Cashless",
      badgeTa: "ஒரு நாள் சிகிச்சை • முதலமைச்சர் காப்பீடு",
      isPrimary: true,
    },
    {
      id: "retina",
      titleEn: "Vitreoretinal Diseases & Emergency Detachment Repair",
      titleTa: "விழித்திரை குறைபாடுகள் & அவசர சிகிச்சை",
      symptomEn: "Sudden shower of dark floaters, lightning-like flashes in peripheral vision, or a dark curtain advancing over the eye.",
      symptomTa: "திடீர் மிதக்கும் புள்ளிகள் (Floaters), பக்கவாட்டில் மின்னல் வெட்டு போன்ற வெளிச்சம், அல்லது கருப்பு திரை நகர்வது போன்ற உணர்வு.",
      detailEn: "Dr. Raghuram’s core surgical fellowship domain. Pollachi’s dedicated unit for high-resolution spectral-domain OCT, retinal laser photocoagulation, pneumatic retinopexy, and 25-gauge sutureless vitrectomy.",
      detailTa: "டாக்டர் ரகுராம் அவர்களின் சிறப்பு அறுவை சிகிச்சை பிரிவு. நவீன OCT ஸ்கேன், விழித்திரை லேசர் மற்றும் தையலில்லா 25G விட்ரெக்டமி அறுவை சிகிச்சை வசதி.",
      href: "/treatments",
      badgeEn: "24/7 Trauma Hotline: 04259 222444",
      badgeTa: "24/7 அவசர உதவி: 04259 222444",
      isAlert: true,
    },
    {
      id: "diabetic",
      titleEn: "Diabetic Retinopathy & Macular Oedema Protocol",
      titleTa: "சர்க்கரை நோய் விழித்திரை பாதிப்பு & சிகிச்சை",
      symptomEn: "Patients with diabetes (Type 1 or 2 for > 5 years), fluctuating blur, distortion of straight lines, or central dark patches.",
      symptomTa: "5+ வருட சர்க்கரை நோய் உள்ளவர்கள், நேர்கோடுகள் வளைந்து தெரிவது, பார்வையின் மையத்தில் இருண்ட புள்ளிகள்.",
      detailEn: "Systematic screening of microaneurysms, retinal haemorrhages, and maculopathy. Treatment includes precise green laser therapy and anti-VEGF injections administered personally by Dr. Raghuram.",
      detailTa: "சர்க்கரை நோயாளிகளுக்கான வருடாந்திர கண் பரிசோதனை, வீக்கத்திற்கான லேசர் மற்றும் ஊசி மருந்துகள் அனைத்தும் மருத்துவரே நேரடியாகச் செய்கிறார்.",
      href: "/treatments",
      badgeEn: "Annual Dilated Screening Essential",
      badgeTa: "வருடாந்திர பரிசோதனை அவசியம்",
    },
    {
      id: "glaucoma",
      titleEn: "Glaucoma Diagnostics, Tonometry & Laser SLT",
      titleTa: "க்ளௌகோமா (கண் அழுத்தம்) கண்டறிதல் & லேசர்",
      symptomEn: "Gradual subtle loss of side vision (tunnel view), occasional evening brow ache, seeing rainbow halos around bulbs.",
      symptomTa: "பக்கவாட்டு பார்வை படிப்படியாக குறைதல், மாலை நேர தலைவலி, விளக்குகளைச் சுற்றி வானவில் போன்ற வளையங்கள்.",
      detailEn: "Early detection before irreversible optic nerve damage occurs. Comprehensive evaluation using Goldmann applanation tonometry, central corneal pachymetry, Humphrey visual fields (HFA), and Selective Laser Trabeculoplasty (SLT).",
      detailTa: "பார்வை நரம்பு பாதிக்கப்படும் முன் துல்லியமாக கண் அழுத்தத்தைக் கண்டறியும் கோல்ட்மேன் டோனோமெட்ரி மற்றும் நவீன லேசர் (SLT) சிகிச்சை.",
      href: "/treatments",
      badgeEn: "Preserve Peripheral Vision",
      badgeTa: "பார்வை நரம்பு பாதுகாப்பு",
    },
    {
      id: "exam",
      titleEn: "Comprehensive Dilated Eye Examination",
      titleTa: "முழுமையான விழித்திரை மற்றும் கண் பரிசோதனை",
      symptomEn: "Routine checkup, sudden vision changes, eyestrain, headaches after screen reading, or seeking a second surgical opinion.",
      symptomTa: "வழக்கமான பரிசோதனை, கண் சோர்வு, கணினி பயன்பாட்டால் தலைவலி, அல்லது அறுவை சிகிச்சைக்கான மாற்று கருத்து.",
      detailEn: "A 45-minute structured evaluation including visual acuity, objective refraction, slit-lamp biomicroscopy, intraocular pressure measurement, and dilated peripheral retinal fundus examination.",
      detailTa: "கண் பவர், கண் அழுத்தம், கார்னியா மற்றும் விழித்திரை அனைத்தையும் 45 நிமிடங்களில் முழுமையாக ஆராயும் விரிவான பரிசோதனை.",
      href: "/treatments",
      badgeEn: "Allow 1.5 Hours with Dilation",
      badgeTa: "பரிசோதனைக்கு 1.5 மணி நேரம் ஆகும்",
    },
    {
      id: "optical",
      titleEn: "Medical Spectacle Dispensing & Low Vision Aids",
      titleTa: "மருத்துவ மூக்குக் கண்ணாடி & லோ விஷன் சாதனங்கள்",
      symptomEn: "Blurred reading, presbyopia in patients aged 40+, post-cataract fine reading assistance, or uncorrected cylindrical astigmatism.",
      symptomTa: "எழுத்துக்கள் மங்கலாகத் தெரிவது, 40 வயதுக்கு மேற்பட்டோருக்கான வெள்ளெழுத்து, அறுவை சிகிச்சைக்குப் பின் படிக்கும் கண்ணாடி.",
      detailEn: "Precision optical dispensing aligned with Dr. Raghuram’s exact refraction trial. Anti-reflective digital lenses, progressive lenses with zero distortion corridors, and magnified low-vision aids.",
      detailTa: "மருத்துவரின் நேரடி பரிந்துரைப்படி துல்லியமாக அளவிடப்பட்ட ப்ரோக்ரெசிவ் மற்றும் ஆண்டி-க்ளேர் மருத்துவக் கண்ணாடிகள்.",
      href: "/treatments",
      badgeEn: "Accurate Pupillary Alignment",
      badgeTa: "துல்லியமான கண் பார்வை அளவு",
    },
  ];

  return (
    <div className="bg-[#FBF8F3] min-h-screen py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Breadcrumb */}
        <nav className="text-xs text-[#717880] mb-4 flex items-center gap-1.5">
          <Link href="/" className="hover:text-[#0B5C8A]">
            {t("Home", "முகப்பு")}
          </Link>
          <span>/</span>
          <span className="text-[#151A1C] font-semibold">
            {t("Clinical Specialties", "சிகிச்சைப் பிரிவுகள்")}
          </span>
        </nav>

        {/* Page Hero */}
        <div className="max-w-3xl mb-12 space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-[#0B5C8A]">
            {t("Ophthalmic & Vitreoretinal Care", "கண் மற்றும் விழித்திரை சிகிச்சைகள்")}
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-serif text-[#151A1C] leading-tight">
            {t(
              "Clinical Specialties & Surgical Care in Pollachi",
              "சிறப்பு கண் சிகிச்சைகள் மற்றும் அறுவை சிகிச்சை பிரிவுகள்"
            )}
          </h1>
          <p className="text-base sm:text-lg text-[#41474F] leading-relaxed">
            {t(
              "Led exclusively by Dr. A. Raghuram (FRCS Glasgow). Every clinical evaluation, laser intervention, and microsurgery is conducted personally under single-surgeon accountability.",
              "டாக்டர் ஏ. ரகுராம் (FRCS Glasgow) அவர்களின் நேரடி மேற்பார்வையில் அனைத்து பரிசோதனைகளும், லேசர் சிகிச்சைகளும், அறுவை சிகிச்சைகளும் நடைபெறுகின்றன."
            )}
          </p>
        </div>

        {/* Specialties Grid (6 Cards) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {specialties.map((spec) => (
            <div
              key={spec.id}
              className={`bg-[#FFFFFF] border rounded-lg p-6 flex flex-col justify-between transition-all hover:shadow-md ${
                spec.isAlert
                  ? "border-[#B8722C]/40 hover:border-[#B8722C]"
                  : spec.isPrimary
                  ? "border-[#0B5C8A]/40 hover:border-[#0B5C8A]"
                  : "border-[#E2DACE] hover:border-[#0B5C8A]"
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span
                    className={`text-[11px] font-bold px-2 py-0.5 rounded ${
                      spec.isAlert
                        ? "bg-[#FDF8F3] text-[#B8722C]"
                        : spec.isPrimary
                        ? "bg-[#EFF7F3] text-[#2E7D5B]"
                        : "bg-[#EFF3F5] text-[#0B5C8A]"
                    }`}
                  >
                    {lang === "ta" ? spec.badgeTa : spec.badgeEn}
                  </span>
                </div>

                <h3 className="text-xl font-bold font-serif text-[#151A1C] mb-2 leading-snug">
                  {lang === "ta" ? spec.titleTa : spec.titleEn}
                </h3>

                {/* Symptom Box */}
                <div className="p-3 bg-[#FDF8F3] border-l-2 border-[#B8722C] rounded-r text-xs text-[#8D4F06] mb-3 leading-relaxed">
                  <span className="font-bold block mb-0.5">
                    {t("Common Symptoms:", "அறிகுறிகள்:")}
                  </span>
                  {lang === "ta" ? spec.symptomTa : spec.symptomEn}
                </div>

                <p className="text-xs text-[#41474F] leading-relaxed">
                  {lang === "ta" ? spec.detailTa : spec.detailEn}
                </p>
              </div>

              <div className="pt-5 mt-4 border-t border-[#F0F4F7] flex items-center justify-between gap-2">
                {spec.isPrimary ? (
                  <Link
                    href={spec.href}
                    className="flex-1 py-2 px-3 bg-[#0B5C8A] hover:bg-[#08486D] text-[#FFFFFF] text-xs font-bold rounded flex items-center justify-center gap-1.5 transition-colors"
                  >
                    <span>{t("Cataract Surgery Detail", "முழு விவரங்கள்")}</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </Link>
                ) : (
                  <button
                    onClick={() => openBooking(spec.id)}
                    className="flex-1 py-2 px-3 bg-[#EFF3F5] hover:bg-[#0B5C8A] hover:text-[#FFFFFF] text-[#0B5C8A] text-xs font-bold rounded flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
                  >
                    <span>{t("Book OPD Evaluation", "பரிசோதனை முன்பதிவு")}</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                )}

                <a
                  href="tel:04259221000"
                  className="p-2 border border-[#CBD5E1] text-[#0B5C8A] hover:bg-[#EFF3F5] rounded transition-colors"
                  title="Call Clinic"
                >
                  <Phone className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* "Not sure which is you?" Reassurance Strip */}
        <div className="mt-12 p-6 sm:p-8 bg-[#F5EFE5] border border-[#E2DACE] rounded-xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left">
            <h4 className="text-xl font-bold font-serif text-[#151A1C]">
              {t("Not sure which specialty applies to your condition?", "எந்தப் பிரிவில் பரிசோதிக்க வேண்டும் என்று தெரியவில்லையா?")}
            </h4>
            <p className="text-sm text-[#41474F] max-w-2xl">
              {t(
                "You do not need to diagnose yourself beforehand. Book a standard comprehensive outpatient consultation; Dr. Raghuram will conduct a complete slit-lamp and dilated retinal exam to advise you directly.",
                "நீங்கள் முன்கூட்டியே முடிவு செய்ய வேண்டியதில்லை. பொதுவான ஓ.பி.டி ஆலோசனைக்கு முன்பதிவு செய்தால், மருத்துவரே முழு பரிசோதனை செய்து உரிய வழிகாட்டுதலை வழங்குவார்."
              )}
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={() => openBooking("general")}
              className="px-6 py-3 bg-[#0B5C8A] hover:bg-[#08486D] text-[#FFFFFF] font-bold text-sm rounded shadow-xs transition-colors cursor-pointer"
            >
              {t("Book Comprehensive Exam", "பொது பரிசோதனை முன்பதிவு")}
            </button>
          </div>
        </div>
      </div>

      <ConsultationModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        defaultSpecialty={selectedSpecialty}
      />
    </div>
  );
}
