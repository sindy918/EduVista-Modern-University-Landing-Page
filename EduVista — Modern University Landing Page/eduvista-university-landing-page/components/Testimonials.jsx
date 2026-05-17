"use client";

import { Quote, Star } from "lucide-react";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Aarav Mehta",
      role: "Software Engineer at Microsoft",
      program: "B.Tech Computer Science, Class of 2024",
      quote: "The curriculum at EduVista was extremely aligned with modern engineering requirements. The hand-on lab work and capstone projects prepared me directly for technical challenges at Microsoft. The mentors didn't just teach theory; they taught us how to build robust, scalable solutions.",
      initials: "AM",
      color: "from-blue-600 to-indigo-650",
      rating: 5,
    },
    {
      name: "Elena Rostova",
      role: "Data Scientist at Spotify",
      program: "M.S. Data Science, Class of 2023",
      quote: "I absolutely loved the research-driven pedagogy at EduVista. Access to top-tier high-performance GPU clusters and continuous support from leading industry researchers allowed me to build deep learning models that truly stood out in my recruitment applications. The cohort was outstanding!",
      initials: "ER",
      color: "from-purple-600 to-indigo-650",
      rating: 5,
    },
    {
      name: "Marcus Thorne",
      role: "Product Designer at Airbnb",
      program: "B.Des Design & Tech, Class of 2024",
      quote: "EduVista bridges the gap between technical programming and human-centric UI/UX design beautifully. The interdisciplinary design studio workspaces gave me full creative freedom to build physical and virtual product experiences, directly leading to my direct recruitment by Airbnb.",
      initials: "MT",
      color: "from-pink-600 to-purple-600",
      rating: 5,
    },
  ];

  return (
    <section id="testimonials" className="py-24 bg-slate-50 dark:bg-slate-950 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <h2 className="font-sans text-xs font-bold tracking-widest text-indigo-600 dark:text-indigo-400 uppercase">
            Testimonials
          </h2>
          <p className="font-display font-extrabold text-3xl sm:text-4xl text-slate-900 dark:text-white tracking-tight">
            Hear What Our Achievers Say About Us
          </p>
          <p className="font-sans text-slate-500 dark:text-slate-400 text-sm max-w-2xl mx-auto">
            Read first-hand accounts from recent graduates who turned their academic pursuits at EduVista into outstanding global careers.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto rounded-full mt-4"></div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, index) => (
            <div
              key={index}
              className="relative flex flex-col justify-between p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 group"
            >
              {/* Floating Quote Icon */}
              <div className="absolute top-6 right-8 text-indigo-100 dark:text-slate-800 group-hover:text-indigo-200 dark:group-hover:text-slate-700 transition-colors duration-300">
                <Quote className="h-10 w-10 fill-current" />
              </div>

              <div className="space-y-6">
                {/* Rating stars */}
                <div className="flex items-center space-x-1">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>

                {/* Quote Text */}
                <p className="font-sans text-sm text-slate-650 dark:text-slate-350 leading-relaxed italic relative z-10">
                  "{t.quote}"
                </p>
              </div>

              {/* Profile Bio */}
              <div className="pt-6 mt-8 border-t border-slate-100 dark:border-slate-800 flex items-center space-x-4">
                {/* Custom Avatar with Initials & Gradient */}
                <div className={`w-12 h-12 rounded-full bg-gradient-to-tr ${t.color} text-white font-display font-extrabold text-sm flex items-center justify-center shadow-md shrink-0`}>
                  {t.initials}
                </div>
                <div>
                  <h4 className="font-sans font-bold text-slate-900 dark:text-white text-sm">
                    {t.name}
                  </h4>
                  <div className="font-sans text-xs text-indigo-600 dark:text-indigo-400 font-semibold mb-0.5">
                    {t.role}
                  </div>
                  <div className="font-sans text-[10px] text-slate-400 font-medium">
                    {t.program}
                  </div>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
