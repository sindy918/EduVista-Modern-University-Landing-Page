"use client";

import { Cpu, Brain, Database, TrendingUp, FlaskConical, Palette, ArrowRight, Star } from "lucide-react";

export default function Programs() {
  const handleScrollTo = (e, href) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const programs = [
    {
      title: "Computer Science",
      icon: Cpu,
      description: "Master computational theory, systems architecture, compiler design, and software engineering methodologies.",
      tracks: ["Software Dev", "Cybersecurity", "Cloud Architecture"],
      duration: "4 Years",
      highlight: "100% Labs Oriented",
      color: "from-blue-500 to-indigo-500",
      bgLight: "bg-blue-50/50 dark:bg-blue-950/10",
      borderLight: "hover:border-blue-200 dark:hover:border-blue-900/40",
      textDark: "text-blue-600 dark:text-blue-400",
    },
    {
      title: "AI & Machine Learning",
      icon: Brain,
      description: "Dive deep into deep learning, computer vision, natural language processing, and robotic systems engineering.",
      tracks: ["Neural Networks", "NLP", "Robotic Systems"],
      duration: "4 Years",
      highlight: "Nvidia GPU Lab Access",
      color: "from-indigo-500 to-purple-500",
      bgLight: "bg-indigo-50/50 dark:bg-indigo-950/10",
      borderLight: "hover:border-indigo-200 dark:hover:border-indigo-900/40",
      textDark: "text-indigo-600 dark:text-indigo-400",
    },
    {
      title: "Data Science",
      icon: Database,
      description: "Learn advanced statistical inference, data warehousing, predictive analytics, and big data processing.",
      tracks: ["Big Data", "Predictive Analytics", "Data Viz"],
      duration: "4 Years",
      highlight: "Kaggle Partnership",
      color: "from-purple-500 to-pink-500",
      bgLight: "bg-purple-50/50 dark:bg-purple-950/10",
      borderLight: "hover:border-purple-200 dark:hover:border-purple-900/40",
      textDark: "text-purple-600 dark:text-purple-400",
    },
    {
      title: "Business Management",
      icon: TrendingUp,
      description: "Develop crucial leadership, global marketing strategy, corporate finance, and tech entrepreneurship expertise.",
      tracks: ["Tech Venture", "Corporate Finance", "Global Marketing"],
      duration: "3 Years",
      highlight: "Incubation Seed Funding",
      color: "from-emerald-500 to-teal-500",
      bgLight: "bg-emerald-50/50 dark:bg-emerald-950/10",
      borderLight: "hover:border-emerald-200 dark:hover:border-emerald-900/40",
      textDark: "text-emerald-600 dark:text-emerald-450",
    },
    {
      title: "Research & Innovation",
      icon: FlaskConical,
      description: "Conduct multidisciplinary science, write peer-reviewed publications, and incubate commercial patents.",
      tracks: ["Quantum Tech", "Bio-Computing", "Material Sciences"],
      duration: "Variable",
      highlight: "Fully Funded Fellowship",
      color: "from-amber-500 to-orange-500",
      bgLight: "bg-amber-50/50 dark:bg-amber-950/10",
      borderLight: "hover:border-amber-200 dark:hover:border-amber-900/40",
      textDark: "text-amber-600 dark:text-amber-400",
    },
    {
      title: "Design & Technology",
      icon: Palette,
      description: "Blend human-centric design, virtual reality, UX research, and physical computing into interactive products.",
      tracks: ["UI/UX Research", "AR/VR Design", "Interaction Dev"],
      duration: "4 Years",
      highlight: "Industry Design Studio",
      color: "from-pink-500 to-rose-500",
      bgLight: "bg-pink-50/50 dark:bg-pink-950/10",
      borderLight: "hover:border-pink-200 dark:hover:border-pink-900/40",
      textDark: "text-pink-600 dark:text-pink-400",
    },
  ];

  return (
    <section id="programs" className="py-24 bg-slate-50 dark:bg-slate-950 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <h2 className="font-sans text-xs font-bold tracking-widest text-indigo-600 dark:text-indigo-400 uppercase">
            Academic Fields
          </h2>
          <p className="font-display font-extrabold text-3xl sm:text-4xl text-slate-900 dark:text-white tracking-tight">
            Explore Our World-Class Professional Programs
          </p>
          <p className="font-sans text-slate-500 dark:text-slate-400 text-sm max-w-2xl mx-auto">
            Choose from a set of highly demanding disciplines carefully designed in collaboration with tier-1 tech firms and research agencies.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto rounded-full mt-4"></div>
        </div>

        {/* Programs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs.map((program, index) => {
            const Icon = program.icon;
            return (
              <div
                key={index}
                className={`relative flex flex-col justify-between p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-xl ${program.borderLight} hover:-translate-y-1.5 transition-all duration-300 group overflow-hidden`}
              >
                {/* Visual accent top edge */}
                <div className={`absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r ${program.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>

                <div>
                  {/* Icon and metadata */}
                  <div className="flex items-center justify-between mb-6">
                    <div className={`p-3 rounded-2xl ${program.bgLight} ${program.textDark} group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="h-6 w-6" />
                    </div>
                    
                    {/* Badge */}
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold bg-indigo-50 dark:bg-indigo-950/30 text-indigo-700 dark:text-indigo-300 border border-indigo-100/50 dark:border-indigo-900/30`}>
                      {program.duration}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="font-display font-bold text-xl text-slate-900 dark:text-white mb-3 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors duration-200">
                    {program.title}
                  </h3>

                  {/* Description */}
                  <p className="font-sans text-sm text-slate-500 dark:text-slate-400 leading-relaxed mb-6">
                    {program.description}
                  </p>

                  {/* Specialization Tracks */}
                  <div className="space-y-2 mb-6">
                    <div className="font-sans text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider mb-2">
                      Specialization Tracks
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {program.tracks.map((track, i) => (
                        <span
                          key={i}
                          className="font-sans text-xs font-medium px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-350"
                        >
                          {track}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Highlight/CTA Footer */}
                <div className="pt-6 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between mt-auto">
                  <div className="flex items-center space-x-1.5 text-xs font-bold text-emerald-600 dark:text-emerald-450">
                    <Star className="h-3.5 w-3.5 fill-current" />
                    <span>{program.highlight}</span>
                  </div>
                  <a
                    href="#contact"
                    onClick={(e) => handleScrollTo(e, "#contact")}
                    className="inline-flex items-center text-xs font-bold text-slate-700 dark:text-slate-350 group-hover:text-indigo-650 dark:group-hover:text-indigo-400 transition-colors"
                  >
                    Apply Now
                    <ArrowRight className="ml-1.5 h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
