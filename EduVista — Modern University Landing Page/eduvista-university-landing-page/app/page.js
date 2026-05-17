"use client";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Programs from "@/components/Programs";
import WhyChooseUs from "@/components/WhyChooseUs";
import Testimonials from "@/components/Testimonials";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="relative min-h-screen flex flex-col bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 selection:bg-indigo-500 selection:text-white overflow-hidden">
      {/* Navbar */}
      <Navbar />

      {/* Main Sections */}
      <main className="flex-grow">
        {/* Hero Section */}
        <Hero />

        {/* About Section */}
        <About />

        {/* Programs Section */}
        <Programs />

        {/* Why Choose Us Section */}
        <WhyChooseUs />

        {/* Testimonials Section */}
        <Testimonials />

        {/* Call To Action Section */}
        <CTA />
      </main>

      {/* Footer Section */}
      <Footer />
    </div>
  );
}
