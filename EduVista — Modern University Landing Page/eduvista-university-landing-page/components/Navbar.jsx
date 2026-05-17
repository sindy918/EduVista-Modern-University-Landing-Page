"use client";

import { useState, useEffect } from "react";
import { Menu, X, GraduationCap, ArrowRight } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Programs", href: "#programs" },
    { name: "Why Us", href: "#why-choose-us" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "Contact", href: "#contact" },
  ];

  const handleScrollTo = (e, href) => {
    e.preventDefault();
    setIsOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/80 dark:bg-slate-900/80 backdrop-blur-md shadow-md py-4"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a
            href="#home"
            onClick={(e) => handleScrollTo(e, "#home")}
            className="flex items-center space-x-2 group focus:outline-none"
          >
            <div className="bg-gradient-to-tr from-indigo-600 to-purple-600 p-2 rounded-xl text-white shadow-lg shadow-indigo-500/20 group-hover:scale-105 transition-transform duration-300">
              <GraduationCap className="h-6 w-6" />
            </div>
            <span className="font-display font-bold text-2xl tracking-tight bg-gradient-to-r from-slate-900 to-indigo-950 dark:from-white dark:to-indigo-200 bg-clip-text text-transparent">
              EduVista
            </span>
          </a>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center space-x-8">
            <div className="flex space-x-6">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleScrollTo(e, link.href)}
                  className="font-sans font-medium text-slate-600 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-200 text-sm relative group py-2"
                >
                  {link.name}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-indigo-600 dark:bg-indigo-400 transition-all duration-300 group-hover:w-full"></span>
                </a>
              ))}
            </div>

            {/* CTA Button */}
            <a
              href="#contact"
              onClick={(e) => handleScrollTo(e, "#contact")}
              className="inline-flex items-center justify-center px-5 py-2.5 rounded-full font-sans font-semibold text-sm text-white bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 shadow-md shadow-indigo-500/10 hover:shadow-lg hover:shadow-indigo-500/20 hover:-translate-y-0.5 transition-all duration-200"
            >
              Apply Now
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-xl text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 focus:outline-none transition-colors duration-200"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden absolute top-full left-0 right-0 bg-white dark:bg-slate-900 border-b border-slate-100 dark:border-slate-800 shadow-xl transition-all duration-300 ${
          isOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2 pointer-events-none"
        }`}
      >
        <div className="px-4 pt-2 pb-6 space-y-2 sm:px-3">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleScrollTo(e, link.href)}
              className="block px-3 py-3 rounded-xl text-base font-semibold text-slate-700 dark:text-slate-200 hover:bg-indigo-50 dark:hover:bg-slate-800 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-200"
            >
              {link.name}
            </a>
          ))}
          <div className="pt-4 px-3">
            <a
              href="#contact"
              onClick={(e) => handleScrollTo(e, "#contact")}
              className="flex w-full items-center justify-center px-5 py-3 rounded-xl font-semibold text-white bg-gradient-to-r from-indigo-600 to-purple-600 shadow-lg shadow-indigo-500/20 hover:opacity-90 transition-opacity"
            >
              Apply Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
