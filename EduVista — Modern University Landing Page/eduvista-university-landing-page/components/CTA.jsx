"use client";

import { useState } from "react";
import { CheckCircle2, ShieldCheck, Send, Check } from "lucide-react";

export default function CTA() {
  // Form State
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    program: "",
    message: "",
  });

  // Validation & Submission States
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Program Options matching our academic catalog
  const programs = [
    "Computer Science",
    "AI & Machine Learning",
    "Data Science",
    "Business Management",
    "Research & Innovation",
    "Design & Technology",
  ];

  const perks = [
    "No application processing fee",
    "5-minute simple online submission",
    "Priority review & scholarship screening",
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    // Clear error for this field if user started typing
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.fullName.trim()) newErrors.fullName = "Full Name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email Address is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone Number is required";
    } else if (!/^\+?[0-9\s-]{7,15}$/.test(formData.phone)) {
      newErrors.phone = "Please enter a valid phone number";
    }
    if (!formData.program) newErrors.program = "Please select an interested program";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    // Simulate API request
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({
        fullName: "",
        email: "",
        phone: "",
        program: "",
        message: "",
      });
    }, 1200);
  };

  return (
    <section id="contact" className="py-24 bg-white dark:bg-slate-900 overflow-hidden relative">
      {/* Decorative Glow Blobs */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-5xl h-96 bg-gradient-to-tr from-indigo-500/10 to-purple-500/10 rounded-full blur-3xl -z-10 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Dual Column CTA + Form Container */}
        <div className="relative rounded-[40px] bg-gradient-to-br from-indigo-950 via-slate-950 to-purple-950 p-8 sm:p-12 lg:p-16 shadow-2xl overflow-hidden border border-indigo-900/40">
          
          {/* Subtle background grid pattern */}
          <div className="absolute inset-0 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:20px_20px] opacity-5 pointer-events-none"></div>
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            
            {/* Left Column: Call to Action Details (5 columns) */}
            <div className="lg:col-span-5 space-y-6 text-left">
              
              {/* Admissions status label */}
              <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full border border-indigo-500/30 bg-indigo-500/10 text-indigo-300">
                <ShieldCheck className="h-4 w-4" />
                <span className="font-sans text-xs font-semibold uppercase tracking-wider">
                  Fall 2026 Admissions Open
                </span>
              </div>

              {/* Main Headline */}
              <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight leading-tight">
                Start Your Future With EduVista
              </h2>

              {/* Paragraph support */}
              <p className="font-sans text-base text-indigo-200 leading-relaxed">
                Join a global community of innovators, researchers, and professional builders. Fill out the application form on the right and take the first step toward securing an industry-aligned higher education today.
              </p>

              {/* Application Perks list */}
              <div className="space-y-3 pt-2">
                {perks.map((perk, index) => (
                  <div key={index} className="flex items-center space-x-3 text-indigo-200 text-sm font-sans font-medium">
                    <CheckCircle2 className="h-5 w-5 text-emerald-400 shrink-0" />
                    <span>{perk}</span>
                  </div>
                ))}
              </div>

              {/* Quick Helper Note */}
              <div className="pt-6 border-t border-indigo-900/60 text-indigo-300/80 space-y-2 text-xs font-sans">
                <p>
                  Need assistance? Contact our Admissions Office directly:
                </p>
                <p className="font-bold text-white">
                  Email: <span className="underline hover:text-indigo-200 cursor-pointer">admissions@eduvista.edu</span>
                </p>
                <p className="font-bold text-white">
                  Phone: <span>+1 (800) 555-0199</span>
                </p>
              </div>

            </div>

            {/* Right Column: Interactive Application Form (7 columns) */}
            <div className="lg:col-span-7 bg-white/10 dark:bg-slate-900/40 backdrop-blur-md border border-white/15 rounded-3xl p-6 sm:p-8 relative">
              
              {isSubmitted ? (
                // Success Confirmation State
                <div className="py-12 px-4 text-center space-y-6 flex flex-col items-center justify-center animate-fade-in-up">
                  <div className="w-16 h-16 rounded-full bg-emerald-500 text-white flex items-center justify-center shadow-lg shadow-emerald-500/20">
                    <Check className="h-8 w-8 stroke-[3]" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-display font-extrabold text-2xl text-white tracking-tight">
                      Application Submitted!
                    </h3>
                    <p className="font-sans text-sm text-indigo-200 leading-relaxed max-w-sm">
                      Thank you! Your application request has been submitted successfully. Our academic advisors will review your details and contact you soon.
                    </p>
                  </div>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="inline-flex items-center justify-center px-6 py-2.5 rounded-full font-sans font-semibold text-xs text-slate-950 bg-white hover:bg-slate-100 transition-colors"
                  >
                    Submit Another Application
                  </button>
                </div>
              ) : (
                // Input Form State
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="text-left mb-6">
                    <h3 className="font-display font-extrabold text-xl sm:text-2xl text-white tracking-tight">
                      Apply for Admission
                    </h3>
                    <p className="font-sans text-xs sm:text-sm text-indigo-200 mt-1">
                      Fill out the form and our admissions team will contact you soon.
                    </p>
                  </div>

                  {/* Full Name field */}
                  <div className="text-left space-y-1">
                    <label htmlFor="fullName" className="block font-sans text-xs font-bold text-indigo-200 uppercase tracking-wider">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="fullName"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      placeholder="e.g. John Doe"
                      className={`w-full px-4 py-3 rounded-xl bg-slate-950/40 border text-white placeholder-slate-500 focus:outline-none focus:ring-2 transition-all font-sans text-sm ${
                        errors.fullName
                          ? "border-rose-500 focus:ring-rose-500/50"
                          : "border-white/10 focus:border-indigo-500 focus:ring-indigo-500/50"
                      }`}
                    />
                    {errors.fullName && (
                      <p className="font-sans text-[11px] text-rose-400 font-semibold">{errors.fullName}</p>
                    )}
                  </div>

                  {/* Dual Column Input: Email & Phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Email Address */}
                    <div className="text-left space-y-1">
                      <label htmlFor="email" className="block font-sans text-xs font-bold text-indigo-200 uppercase tracking-wider">
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="john@example.com"
                        className={`w-full px-4 py-3 rounded-xl bg-slate-950/40 border text-white placeholder-slate-500 focus:outline-none focus:ring-2 transition-all font-sans text-sm ${
                          errors.email
                            ? "border-rose-500 focus:ring-rose-500/50"
                            : "border-white/10 focus:border-indigo-500 focus:ring-indigo-500/50"
                        }`}
                      />
                      {errors.email && (
                        <p className="font-sans text-[11px] text-rose-400 font-semibold">{errors.email}</p>
                      )}
                    </div>

                    {/* Phone Number */}
                    <div className="text-left space-y-1">
                      <label htmlFor="phone" className="block font-sans text-xs font-bold text-indigo-200 uppercase tracking-wider">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="+1 (555) 000-0000"
                        className={`w-full px-4 py-3 rounded-xl bg-slate-950/40 border text-white placeholder-slate-500 focus:outline-none focus:ring-2 transition-all font-sans text-sm ${
                          errors.phone
                            ? "border-rose-500 focus:ring-rose-500/50"
                            : "border-white/10 focus:border-indigo-500 focus:ring-indigo-500/50"
                        }`}
                      />
                      {errors.phone && (
                        <p className="font-sans text-[11px] text-rose-400 font-semibold">{errors.phone}</p>
                      )}
                    </div>
                  </div>

                  {/* Interested Program Select Dropdown */}
                  <div className="text-left space-y-1">
                    <label htmlFor="program" className="block font-sans text-xs font-bold text-indigo-200 uppercase tracking-wider">
                      Interested Program
                    </label>
                    <div className="relative">
                      <select
                        id="program"
                        name="program"
                        value={formData.program}
                        onChange={handleInputChange}
                        className={`w-full px-4 py-3 rounded-xl bg-slate-950/70 border text-white focus:outline-none focus:ring-2 transition-all font-sans text-sm appearance-none cursor-pointer ${
                          errors.program
                            ? "border-rose-500 focus:ring-rose-500/50"
                            : "border-white/10 focus:border-indigo-500 focus:ring-indigo-500/50"
                        }`}
                      >
                        <option value="" disabled className="bg-slate-950 text-slate-500">
                          Select a specialized program...
                        </option>
                        {programs.map((prog, index) => (
                          <option key={index} value={prog} className="bg-slate-950 text-white">
                            {prog}
                          </option>
                        ))}
                      </select>
                      {/* Custom dropdown caret */}
                      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-indigo-350">
                        <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                          <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                        </svg>
                      </div>
                    </div>
                    {errors.program && (
                      <p className="font-sans text-[11px] text-rose-400 font-semibold">{errors.program}</p>
                    )}
                  </div>

                  {/* Message field */}
                  <div className="text-left space-y-1">
                    <label htmlFor="message" className="block font-sans text-xs font-bold text-indigo-200 uppercase tracking-wider">
                      Message / Remarks (Optional)
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Share any specific questions or request scholarship details..."
                      rows="3"
                      className="w-full px-4 py-3 rounded-xl bg-slate-950/40 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/50 transition-all font-sans text-sm resize-none"
                    ></textarea>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full inline-flex items-center justify-center px-8 py-4 rounded-xl font-sans font-semibold text-sm text-slate-950 bg-white hover:bg-slate-100 shadow-xl disabled:opacity-50 disabled:cursor-not-allowed hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200"
                  >
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-3 h-4 w-4 text-slate-950" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Processing Application...
                      </>
                    ) : (
                      <>
                        Submit Application
                        <Send className="ml-2 h-4 w-4" />
                      </>
                    )}
                  </button>
                </form>
              )}

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
