"use client";

import { ArrowRight, BookOpen, Compass, Award, Users, Star } from "lucide-react";

export default function Hero() {
  const handleScrollTo = (e, href) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-32 pb-24 overflow-hidden bg-slate-50 dark:bg-slate-950"
    >
      {/* Decorative Glow Blobs */}
      <div className="absolute top-1/4 left-1/10 w-96 h-96 bg-indigo-400/20 dark:bg-indigo-600/10 rounded-full blur-3xl animate-pulse-slow"></div>
      <div className="absolute bottom-1/4 right-1/10 w-96 h-96 bg-purple-400/20 dark:bg-purple-600/10 rounded-full blur-3xl animate-float"></div>

      {/* Decorative grid pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] dark:bg-[radial-gradient(#334155_1px,transparent_1px)] [background-size:24px_24px] opacity-40"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Text Content Area (5 columns on desktop) */}
          <div className="lg:col-span-7 flex flex-col space-y-8 text-left animate-fade-in-up">
            
            {/* Tagline Badge */}
            <div className="inline-flex items-center self-start space-x-2 px-4 py-1.5 rounded-full border border-indigo-100 dark:border-indigo-900/50 bg-indigo-50/50 dark:bg-indigo-950/30 text-indigo-700 dark:text-indigo-300">
              <Award className="h-4 w-4 text-indigo-600 dark:text-indigo-400" />
              <span className="font-sans text-xs font-semibold tracking-wide uppercase">
                Accredited Class-A University
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl tracking-tight text-slate-900 dark:text-white leading-[1.1]">
              Shape Your Future with{" "}
              <span className="bg-gradient-to-r from-indigo-600 via-indigo-500 to-purple-600 bg-clip-text text-transparent">
                World-Class
              </span>{" "}
              Education
            </h1>

            {/* Supporting Paragraph */}
            <p className="font-sans text-lg text-slate-600 dark:text-slate-300 max-w-2xl leading-relaxed">
              EduVista University brings you industry-aligned programs, expert faculty, and immersive learning technologies designed to accelerate your career. Empowering leaders since 1965.
            </p>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <a
                href="#contact"
                onClick={(e) => handleScrollTo(e, "#contact")}
                className="inline-flex items-center justify-center px-8 py-4 rounded-full font-sans font-semibold text-white bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-50 hover:to-purple-500 shadow-xl shadow-indigo-500/25 hover:shadow-indigo-500/35 hover:-translate-y-0.5 transition-all duration-200"
              >
                Apply Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
              <a
                href="#programs"
                onClick={(e) => handleScrollTo(e, "#programs")}
                className="inline-flex items-center justify-center px-8 py-4 rounded-full font-sans font-semibold text-slate-700 dark:text-slate-200 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-850 shadow-md hover:-translate-y-0.5 transition-all duration-200"
              >
                <BookOpen className="mr-2 h-5 w-5 text-indigo-600 dark:text-indigo-400" />
                Explore Programs
              </a>
            </div>

            {/* Fast Stats Row */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-slate-200/60 dark:border-slate-800/60">
              <div>
                <div className="font-display font-extrabold text-2xl sm:text-3xl text-indigo-600 dark:text-indigo-400">
                  98%
                </div>
                <div className="font-sans text-xs font-medium text-slate-500 dark:text-slate-400 mt-1">
                  Placement Rate
                </div>
              </div>
              <div>
                <div className="font-display font-extrabold text-2xl sm:text-3xl text-indigo-600 dark:text-indigo-400">
                  150+
                </div>
                <div className="font-sans text-xs font-medium text-slate-500 dark:text-slate-400 mt-1">
                  Global Partners
                </div>
              </div>
              <div>
                <div className="font-display font-extrabold text-2xl sm:text-3xl text-indigo-600 dark:text-indigo-400">
                  15:1
                </div>
                <div className="font-sans text-xs font-medium text-slate-500 dark:text-slate-400 mt-1">
                  Student Ratio
                </div>
              </div>
            </div>

          </div>

          {/* Graphical Card Mockups (5 columns on desktop) */}
          <div className="lg:col-span-5 relative flex justify-center items-center h-full min-h-[380px] sm:min-h-[480px]">
            {/* Visual Frame */}
            <div className="relative w-full max-w-md bg-white dark:bg-slate-900 rounded-3xl shadow-2xl p-6 border border-slate-100 dark:border-slate-800/80 animate-float">
              
              {/* Card Header */}
              <div className="flex items-center justify-between pb-6 border-b border-slate-100 dark:border-slate-800/80">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-full bg-indigo-50 dark:bg-indigo-950/50 flex items-center justify-center">
                    <Compass className="h-5 w-5 text-indigo-600 dark:text-indigo-400" />
                  </div>
                  <div>
                    <h3 className="font-sans font-bold text-slate-900 dark:text-white text-sm">
                      NextGen Dashboard
                    </h3>
                    <p className="font-sans text-xs text-slate-400">Student Portal</p>
                  </div>
                </div>
                <span className="px-2.5 py-1 rounded-full text-xs font-semibold bg-emerald-50 dark:bg-emerald-950/30 text-emerald-600 dark:text-emerald-450 flex items-center">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mr-1.5 animate-pulse"></span>
                  Active Now
                </span>
              </div>

              {/* Card Content: Program Progression */}
              <div className="space-y-6 pt-6">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-sans text-sm font-semibold text-slate-700 dark:text-slate-300">
                      B.Tech in Artificial Intelligence
                    </span>
                    <span className="font-sans text-xs font-bold text-indigo-600 dark:text-indigo-400">
                      78% Done
                    </span>
                  </div>
                  <div className="w-full h-2.5 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full w-[78%]"></div>
                  </div>
                </div>

                {/* Grid stats */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-950 border border-slate-100 dark:border-slate-850">
                    <Users className="h-5 w-5 text-purple-500 mb-2" />
                    <div className="font-display font-bold text-lg text-slate-800 dark:text-white">
                      12,450+
                    </div>
                    <div className="font-sans text-[10px] text-slate-400 font-medium">
                      Alumni Network
                    </div>
                  </div>
                  <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-950 border border-slate-100 dark:border-slate-850">
                    <BookOpen className="h-5 w-5 text-indigo-500 mb-2" />
                    <div className="font-display font-bold text-lg text-slate-800 dark:text-white">
                      420+
                    </div>
                    <div className="font-sans text-[10px] text-slate-400 font-medium">
                      Research Papers
                    </div>
                  </div>
                </div>

                {/* Testimonial Snippet inside mockup */}
                <div className="p-4 rounded-2xl bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-indigo-950/20 dark:to-purple-950/20 border border-indigo-100/50 dark:border-indigo-900/30 flex items-start space-x-3">
                  <div className="w-8 h-8 rounded-full bg-indigo-600 text-white flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                    AR
                  </div>
                  <div>
                    <div className="flex items-center space-x-1 mb-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-3 w-3 fill-amber-400 text-amber-400" />
                      ))}
                    </div>
                    <p className="font-sans text-xs italic text-slate-600 dark:text-slate-350 leading-relaxed">
                      "EduVista's mentorship led me directly to my dream role at Google."
                    </p>
                    <span className="font-sans text-[10px] font-bold text-slate-800 dark:text-slate-200 mt-1 block">
                      Anya Roy, Software Engineer
                    </span>
                  </div>
                </div>

              </div>

            </div>

            {/* Glowing decorative rings */}
            <div className="absolute -z-10 -bottom-6 -left-6 w-32 h-32 bg-indigo-500/10 rounded-full blur-xl animate-pulse"></div>
            <div className="absolute -z-10 -top-6 -right-6 w-32 h-32 bg-purple-500/10 rounded-full blur-xl animate-bounce"></div>
          </div>

        </div>
      </div>
    </section>
  );
}
