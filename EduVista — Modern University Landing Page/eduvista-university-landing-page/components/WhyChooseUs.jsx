"use client";

import { Award, BookOpen, Users, Code, Target, Building2, Lightbulb, CheckCircle } from "lucide-react";

export default function WhyChooseUs() {
  const pillars = [
    {
      title: "Industry-Focused Curriculum",
      description: "Co-developed with tech giants and industry leaders. We regularly update our syllabi to align with immediate, in-demand technical competencies.",
      icon: BookOpen,
      color: "from-blue-500 to-indigo-500",
      bgLight: "bg-blue-50 dark:bg-blue-950/20",
      textDark: "text-blue-600 dark:text-blue-400",
    },
    {
      title: "Expert Ivy-League Faculty",
      description: "Learn from distinguished professors holding PhDs from world-renowned institutions and active industry practitioners sharing real-world insights.",
      icon: Users,
      color: "from-indigo-500 to-purple-500",
      bgLight: "bg-indigo-50 dark:bg-indigo-950/20",
      textDark: "text-indigo-600 dark:text-indigo-400",
    },
    {
      title: "100% Practical Projects",
      description: "Bridge the gap between theory and execution through semester-long capstones, hackathons, and immersive lab-based technical assignments.",
      icon: Code,
      color: "from-purple-500 to-pink-500",
      bgLight: "bg-purple-50 dark:bg-purple-950/20",
      textDark: "text-purple-600 dark:text-purple-400",
    },
    {
      title: "Guaranteed Placement Support",
      description: "Our active Career Hub offers 1-on-1 resume polishing, interview training, and priority hiring paths with over 250+ Fortune 500 partners.",
      icon: Target,
      color: "from-emerald-500 to-teal-500",
      bgLight: "bg-emerald-50 dark:bg-emerald-950/20",
      textDark: "text-emerald-600 dark:text-emerald-450",
    },
    {
      title: "State-of-the-Art Modern Campus",
      description: "Equipped with advanced GPU computing labs, VR exploration chambers, smart tech-enabled study halls, and creative hubspaces.",
      icon: Building2,
      color: "from-amber-500 to-orange-500",
      bgLight: "bg-amber-50 dark:bg-amber-950/20",
      textDark: "text-amber-600 dark:text-amber-400",
    },
    {
      title: "Innovation-Driven Learning",
      description: "Secure dedicated student venture funding, receive patent-filing guidance, and access our seed-stage startup incubator workspace.",
      icon: Lightbulb,
      color: "from-pink-500 to-rose-500",
      bgLight: "bg-pink-50 dark:bg-pink-950/20",
      textDark: "text-pink-600 dark:text-pink-400",
    },
  ];

  return (
    <section id="why-choose-us" className="py-24 bg-white dark:bg-slate-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* Sticky Left Column (5 columns) */}
          <div className="lg:col-span-5 lg:sticky lg:top-28 space-y-8">
            <div className="space-y-4">
              <h2 className="font-sans text-xs font-bold tracking-widest text-indigo-600 dark:text-indigo-400 uppercase">
                Why EduVista?
              </h2>
              <p className="font-display font-extrabold text-3xl sm:text-4xl text-slate-900 dark:text-white tracking-tight leading-tight">
                Setting New Standards in Advanced Higher Education
              </p>
              <div className="w-16 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full mt-4"></div>
            </div>

            <p className="font-sans text-slate-600 dark:text-slate-350 leading-relaxed">
              EduVista is dedicated to providing an academic experience that is highly engaging, outcome-driven, and meticulously designed for modern professional roles. We empower our students to think critically, experiment fearlessly, and lead global teams.
            </p>

            {/* Quick Achievements list */}
            <div className="space-y-4 pt-4 border-t border-slate-100 dark:border-slate-800">
              <div className="flex items-start space-x-3">
                <CheckCircle className="h-5 w-5 text-indigo-600 dark:text-indigo-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-sans font-bold text-slate-800 dark:text-slate-200 text-sm">
                    Ranked #1 for Graduate Employability
                  </h4>
                  <p className="font-sans text-xs text-slate-500 dark:text-slate-400">
                    Named by the National Educational Council, 2025.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="h-5 w-5 text-indigo-600 dark:text-indigo-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-sans font-bold text-slate-800 dark:text-slate-200 text-sm">
                    Global Academic Collaborations
                  </h4>
                  <p className="font-sans text-xs text-slate-500 dark:text-slate-400">
                    Dual programs in partnership with elite international institutions.
                  </p>
                </div>
              </div>
            </div>
            
          </div>

          {/* Pillars Grid Right Column (7 columns) */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {pillars.map((pillar, index) => {
              const PillarIcon = pillar.icon;
              return (
                <div
                  key={index}
                  className="p-6 rounded-3xl bg-slate-50 dark:bg-slate-950 border border-slate-100 dark:border-slate-850 hover:border-indigo-100 dark:hover:border-indigo-900/40 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className={`p-3 rounded-2xl ${pillar.bgLight} ${pillar.textDark} group-hover:scale-110 transition-transform duration-350`}>
                      <PillarIcon className="h-6 w-6" />
                    </div>
                  </div>

                  <h3 className="font-display font-bold text-base text-slate-900 dark:text-white mb-2 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                    {pillar.title}
                  </h3>

                  <p className="font-sans text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                    {pillar.description}
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
