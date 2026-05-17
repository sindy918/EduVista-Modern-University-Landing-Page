"use client";

import { GraduationCap, MapPin, Phone, Mail, Clock } from "lucide-react";

// Inline Custom SVGs for Social Platforms (to comply with newer Lucide-React packages that omitted brand logos)
const TwitterIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
  </svg>
);

const LinkedinIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const InstagramIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

const GithubIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
  </svg>
);

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const handleScrollTo = (e, href) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const socials = [
    { name: "Twitter", href: "#", icon: TwitterIcon },
    { name: "LinkedIn", href: "#", icon: LinkedinIcon },
    { name: "Instagram", href: "#", icon: InstagramIcon },
    { name: "GitHub", href: "#", icon: GithubIcon },
  ];

  const academicLinks = [
    { name: "Computer Science", href: "#programs" },
    { name: "AI & Machine Learning", href: "#programs" },
    { name: "Data Science", href: "#programs" },
    { name: "Business Management", href: "#programs" },
    { name: "Research & Innovation", href: "#programs" },
    { name: "Design & Technology", href: "#programs" },
  ];

  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "About EduVista", href: "#about" },
    { name: "Academic Programs", href: "#programs" },
    { name: "Why Choose Us", href: "#why-choose-us" },
    { name: "Student Testimonials", href: "#testimonials" },
    { name: "Apply Online", href: "#contact" },
  ];

  return (
    <footer id="footer" className="bg-slate-950 text-slate-400 pt-20 pb-10 border-t border-slate-900 overflow-hidden relative">
      
      {/* Decorative Glow Blob */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-650/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-slate-900">
          
          {/* Brand/Socials Column (4 columns) */}
          <div className="lg:col-span-4 space-y-6">
            <a
              href="#home"
              onClick={(e) => handleScrollTo(e, "#home")}
              className="flex items-center space-x-2 group focus:outline-none"
            >
              <div className="bg-gradient-to-tr from-indigo-600 to-purple-600 p-2 rounded-xl text-white shadow-lg">
                <GraduationCap className="h-6 w-6" />
              </div>
              <span className="font-display font-bold text-2xl tracking-tight text-white">
                EduVista
              </span>
            </a>
            
            <p className="font-sans text-sm text-slate-450 leading-relaxed">
              EduVista University is committed to providing premium, career-focused higher education. We foster an environment of cutting-edge research, hands-on labs, and global leadership opportunities.
            </p>

            {/* Social Icons */}
            <div className="flex items-center space-x-4">
              {socials.map((social) => {
                const SocialIcon = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    onClick={(e) => {
                      e.preventDefault();
                      alert(`${social.name} Link Sandbox: Active! In production, this would route to our official institutional page.`);
                    }}
                    className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:bg-indigo-650 hover:border-indigo-600 hover:-translate-y-1 transition-all duration-255"
                    aria-label={social.name}
                  >
                    <SocialIcon className="h-4.5 w-4.5" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Academics Column (2.5 columns) */}
          <div className="lg:col-span-2 lg:col-start-6 space-y-6">
            <h4 className="font-display font-bold text-sm text-white uppercase tracking-wider">
              Academics
            </h4>
            <ul className="space-y-3">
              {academicLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => handleScrollTo(e, link.href)}
                    className="font-sans text-sm text-slate-400 hover:text-indigo-400 transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Navigation Column (2.5 columns) */}
          <div className="lg:col-span-2 space-y-6">
            <h4 className="font-display font-bold text-sm text-white uppercase tracking-wider">
              Navigation
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => handleScrollTo(e, link.href)}
                    className="font-sans text-sm text-slate-400 hover:text-indigo-400 transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details Column (3 columns) */}
          <div className="lg:col-span-3 space-y-6">
            <h4 className="font-display font-bold text-sm text-white uppercase tracking-wider">
              Contact Info
            </h4>
            <ul className="space-y-4 font-sans text-sm">
              <li className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-indigo-500 shrink-0 mt-0.5" />
                <span className="leading-relaxed">
                  100 EduVista Boulevard, Innovation Campus, Suite 400, NY 10001, United States.
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-indigo-500 shrink-0" />
                <span>+1 (800) 555-0199</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-indigo-500 shrink-0" />
                <a href="mailto:info@eduvista.edu" className="hover:text-indigo-400 transition-colors">
                  info@eduvista.edu
                </a>
              </li>
              <li className="flex items-start space-x-3 text-xs border-t border-slate-900 pt-3 mt-3">
                <Clock className="h-4.5 w-4.5 text-slate-500 shrink-0 mt-0.5" />
                <div>
                  <span className="block font-bold text-slate-350">Admissions Hours</span>
                  <span>Monday – Friday: 9:00 AM – 5:00 PM EST</span>
                </div>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between text-xs font-sans text-slate-500">
          <div>
            &copy; {currentYear} EduVista University. All Rights Reserved. Designed for Excellence.
          </div>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-slate-350 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-slate-350 transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-slate-350 transition-colors">Accreditation Info</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
