"use client";

import React, { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { X, Phone, Calendar, Clock, CheckCircle2, AlertCircle } from "lucide-react";

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultSpecialty?: string;
}

export const ConsultationModal: React.FC<ConsultationModalProps> = ({
  isOpen,
  onClose,
  defaultSpecialty = "",
}) => {
  const { lang, t } = useLanguage();
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    session: "morning",
    specialty: defaultSpecialty || "cataract",
    notes: "",
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      // simulate submission
    }, 800);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#151A1C]/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-lg bg-[#FFFFFF] border border-[#E2DACE] rounded-lg shadow-2xl p-6 sm:p-8 overflow-hidden text-[#151A1C]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-[#717880] hover:text-[#151A1C] hover:bg-[#F5EFE5] rounded-full transition-colors"
          aria-label="Close dialog"
        >
          <X className="w-5 h-5" />
        </button>

        {!submitted ? (
          <>
            <div className="mb-6">
              <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#0B5C8A] mb-1">
                <span>{t("Single-Surgeon Clinic", "ஒற்றை அறுவை சிகிச்சை நிபுணர்")}</span>
                <span>•</span>
                <span>{t("Dr. A. Raghuram", "டாக்டர் ஏ. ரகுராம்")}</span>
              </div>
              <h3 className="text-2xl font-bold font-serif text-[#151A1C]">
                {t("Request OPD Consultation Token", "ஓ.பி.டி ஆலோசனை முன்பதிவு")}
              </h3>
              <p className="text-sm text-[#41474F] mt-1">
                {t(
                  "We confirm tokens on the same day. For same-day eye injuries or trauma, please dial 04259 222444 directly.",
                  "அதே நாளில் முன்பதிவு உறுதி செய்யப்படும். அவசர கண் காயங்களுக்கு நேரடியாக 04259 222444 அழைக்கவும்."
                )}
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-semibold text-[#151A1C] mb-1">
                  {t("Patient Full Name", "நோயாளி பெயர்")} *
                </label>
                <input
                  type="text"
                  required
                  placeholder={t("e.g. K. Palanisamy", "எ.கா. கே. பழனிசாமி")}
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded border border-[#CBD5E1] focus:outline-none focus:border-[#0B5C8A] focus:ring-2 focus:ring-[#0B5C8A]/20 text-base"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-[#151A1C] mb-1">
                  {t("Mobile Phone Number", "கைபேசி எண்")} *
                </label>
                <div className="flex">
                  <span className="inline-flex items-center px-3 text-sm text-[#41474F] bg-[#F0F4F7] border border-r-0 border-[#CBD5E1] rounded-l">
                    +91
                  </span>
                  <input
                    type="tel"
                    required
                    pattern="[0-9]{10}"
                    maxLength={10}
                    placeholder="94420 00000"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-r border border-[#CBD5E1] focus:outline-none focus:border-[#0B5C8A] focus:ring-2 focus:ring-[#0B5C8A]/20 text-base"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-sm font-semibold text-[#151A1C] mb-1">
                    {t("Consulting Session", "ஆலோசனை நேரம்")}
                  </label>
                  <select
                    value={formData.session}
                    onChange={(e) => setFormData({ ...formData, session: e.target.value })}
                    className="w-full px-3 py-2.5 rounded border border-[#CBD5E1] focus:outline-none focus:border-[#0B5C8A] text-sm bg-[#FFFFFF]"
                  >
                    <option value="morning">{t("Morning (10:00 AM – 2:00 PM)", "காலை (10:00 - 2:00)")}</option>
                    <option value="evening">{t("Evening (5:00 PM – 7:00 PM)", "மாலை (5:00 - 7:00)")}</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-[#151A1C] mb-1">
                    {t("Primary Concern", "முக்கிய சிகிச்சை")}
                  </label>
                  <select
                    value={formData.specialty}
                    onChange={(e) => setFormData({ ...formData, specialty: e.target.value })}
                    className="w-full px-3 py-2.5 rounded border border-[#CBD5E1] focus:outline-none focus:border-[#0B5C8A] text-sm bg-[#FFFFFF]"
                  >
                    <option value="cataract">{t("Cataract (MICS Surgery)", "கேடராக்ட் அறுவை சிகிச்சை")}</option>
                    <option value="retina">{t("Retina / Flashes / Floaters", "விழித்திரை / ஃப்ளாஷ்கள்")}</option>
                    <option value="diabetes">{t("Diabetic Retinopathy", "சர்க்கரை நோய் கண் பரிசோதனை")}</option>
                    <option value="glaucoma">{t("Glaucoma / Eye Pressure", "க்ளௌகோமா கண் அழுத்தம்")}</option>
                    <option value="general">{t("Comprehensive Eye Checkup", "பொது கண் பரிசோதனை")}</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-[#151A1C] mb-1">
                  {t("Optional Notes / Government Scheme details", "கூடுதல் விவரங்கள் (காப்பீடு / குறிப்புகள்)")}
                </label>
                <textarea
                  rows={2}
                  placeholder={t("e.g. CMCHIS Smart Card holder, blurry right eye", "எ.கா. முதலமைச்சர் காப்பீட்டு அட்டை உள்ளது")}
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  className="w-full px-3.5 py-2 rounded border border-[#CBD5E1] focus:outline-none focus:border-[#0B5C8A] text-sm"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3 px-4 bg-[#0B5C8A] hover:bg-[#08486D] text-[#FFFFFF] font-bold text-base rounded transition-colors shadow-sm cursor-pointer"
                >
                  {t("Submit OPD Token Request", "முன்பதிவு கோரிக்கையை சமர்ப்பிக்கவும்")}
                </button>
              </div>

              <div className="flex items-center justify-between text-xs text-[#717880] pt-2 border-t border-[#E2DACE]">
                <span className="flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5 text-[#2E7D5B]" />
                  {t("Mon–Sat: 10am-2pm, 5pm-7pm", "திங்கள்-சனி: 10-2, 5-7")}
                </span>
                <a
                  href="tel:04259221000"
                  className="inline-flex items-center gap-1 font-semibold text-[#0B5C8A] hover:underline"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>04259 221 000</span>
                </a>
              </div>
            </form>
          </>
        ) : (
          <div className="text-center py-8 space-y-4">
            <div className="w-14 h-14 bg-[#EFF7F3] text-[#2E7D5B] rounded-full flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h4 className="text-2xl font-bold font-serif text-[#151A1C]">
              {t("Token Request Received", "முன்பதிவு கோரிக்கை பெறப்பட்டது")}
            </h4>
            <p className="text-sm text-[#41474F] max-w-sm mx-auto">
              {t(
                `Thank you, ${formData.name}. Our outpatient desk will call your number (${formData.phone}) within 45 minutes during clinic hours to confirm your token time.`,
                `நன்றி, ${formData.name}. உங்கள் கைபேசி எண்ணுக்கு (${formData.phone}) 45 நிமிடங்களுக்குள் எங்கள் மருத்துவமனை ஊழியர் அழைத்து நேரத்தை உறுதி செய்வார்.`
              )}
            </p>
            <div className="p-4 bg-[#FBF8F3] border border-[#E2DACE] rounded text-xs text-left space-y-1">
              <p className="font-semibold text-[#151A1C]">
                {t("Visit Note for Dilated Examination:", "பரிசோதனைக்கு வருபவர்களுக்கு:")}
              </p>
              <p className="text-[#41474F]">
                {t(
                  "• Please come with an accompanying driver/family member if undergoing dilated retinal checks.",
                  "• விழித்திரை சொட்டு மருந்து போடப்படுவதால் உடன் ஒருவரை அழைத்து வரவும்."
                )}
              </p>
              <p className="text-[#41474F]">
                {t(
                  "• Location: No. 73, Palladam Road, Opposite LMHSS School, Pollachi.",
                  "• இடம்: எண் 73, பல்லடம் ரோடு, LMHSS பள்ளி எதிரில், பொள்ளாச்சி."
                )}
              </p>
            </div>
            <button
              onClick={() => {
                setSubmitted(false);
                onClose();
              }}
              className="px-6 py-2.5 bg-[#0B5C8A] text-[#FFFFFF] font-semibold text-sm rounded hover:bg-[#08486D] transition-colors"
            >
              {t("Done", "சரி")}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
