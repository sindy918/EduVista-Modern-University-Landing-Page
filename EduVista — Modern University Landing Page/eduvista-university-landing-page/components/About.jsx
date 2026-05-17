"use client";

import { CheckCircle2, Award, Calendar, BookOpen, Briefcase, GraduationCap } from "lucide-react";

export default function About() {
  const stats = [
    {
      value: "17+",
      label: "Colleges",
      description: "Covering Tech, Medicine, Business, Humanities & Law.",
      icon: GraduationCap,
      color: "from-blue-500 to-indigo-600",
      shadow: "shadow-blue-500/10",
    },
    {
      value: "3",
      label: "Elite Schools",
      description: "Undergraduate, Graduate & Advanced Research.",
      icon: BookOpen,
      color: "from-purple-500 to-pink-600",
      shadow: "shadow-purple-500/10",
    },
    {
      value: "Since 1965",
      label: "Legacy",
      description: "60+ years of educational excellence and leadership.",
      icon: Calendar,
      color: "from-indigo-500 to-purple-600",
      shadow: "shadow-indigo-500/10",
    },
    {
      value: "100%",
      label: "Career-Focused",
      description: "Practical project-based curriculum and active mentoring.",
      icon: Briefcase,
      color: "from-emerald-500 to-teal-600",
      shadow: "shadow-emerald-500/10",
    },
  ];

  const benefits = [
    "Dual-degree global pathway programs.",
    "Fully-funded student startup incubator.",
    "State-of-the-art laboratory infrastructure.",
    "24/7 access to digital libraries & course reserves.",
  ];

  return (
    <section id="about" className="py-24 bg-white dark:bg-slate-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="font-sans text-xs font-bold tracking-widest text-indigo-600 dark:text-indigo-400 uppercase">
            About Our University
          </h2>
          <p className="font-display font-extrabold text-3xl sm:text-4xl text-slate-900 dark:text-white tracking-tight">
            Nurturing Leaders, Innovators, and Pioneers since 1965
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto rounded-full mt-4"></div>
        </div>

        {/* Two Column Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Core Philosophy */}
          <div className="lg:col-span-5 space-y-6">
            <h3 className="font-display font-bold text-2xl text-slate-900 dark:text-white leading-snug">
              A Modern Institution Rooted in Legacy, Reimagined for Tomorrow
            </h3>
            
            <p className="font-sans text-slate-600 dark:text-slate-350 leading-relaxed">
              At EduVista University, we don't just teach courses; we craft trajectories. We combine academic rigor with immersive industry partnerships to ensure our students graduate not just with a degree, but with a competitive advantage.
            </p>
            
            <p className="font-sans text-slate-600 dark:text-slate-350 leading-relaxed">
              Our campus serves as a thriving ecosystem of researchers, builders, and change-makers working together to tackle some of the world's most complex challenges in computing, business, design, and science.
            </p>

            <ul className="space-y-3 pt-4">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-center space-x-3 text-slate-700 dark:text-slate-200">
                  <CheckCircle2 className="h-5 w-5 text-indigo-500 shrink-0" />
                  <span className="font-sans font-medium text-sm">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Column: Stats Grid (4 Cards) */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <div
                  key={index}
                  className={`relative p-6 rounded-3xl bg-slate-50 dark:bg-slate-950 border border-slate-100 dark:border-slate-850 hover:border-indigo-100 dark:hover:border-indigo-900/40 hover:shadow-xl ${stat.shadow} hover:-translate-y-1 transition-all duration-300 group`}
                >
                  {/* Floating Gradient Circle Background on Hover */}
                  <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-indigo-500/5 to-purple-500/5 rounded-bl-full group-hover:scale-110 transition-transform duration-300 pointer-events-none"></div>

                  <div className="flex items-center justify-between mb-4">
                    <div className={`p-3 rounded-2xl bg-gradient-to-tr ${stat.color} text-white shadow-lg`}>
                      <IconComponent className="h-6 w-6" />
                    </div>
                  </div>

                  <div className="font-display font-extrabold text-3xl text-slate-900 dark:text-white tracking-tight mb-1">
                    {stat.value}
                  </div>
                  
                  <div className="font-sans font-bold text-slate-800 dark:text-slate-250 text-sm mb-2">
                    {stat.label}
                  </div>
                  
                  <p className="font-sans text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                    {stat.description}
                  </p>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
