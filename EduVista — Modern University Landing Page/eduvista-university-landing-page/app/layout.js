import "./globals.css";

export const viewport = {
  width: "device-width",
  initialScale: 1.0,
};

export const metadata = {
  title: "EduVista University — Shape Your Future with World-Class Higher Education",
  description:
    "EduVista University is a globally accredited, class-A higher education institution specializing in industry-aligned degrees in Computer Science, AI & Machine Learning, Data Science, Business, and Design. Empowering innovators since 1965.",
  keywords: [
    "EduVista University",
    "Modern Landing Page",
    "Computer Science Degree",
    "Artificial Intelligence Program",
    "Data Science College",
    "Business Management Studies",
    "Technology and Design School",
    "Higher Education Admissions",
  ],
  authors: [{ name: "EduVista Admissions" }],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-full scroll-smooth">
      <body className="min-h-full flex flex-col antialiased bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 selection:bg-indigo-500 selection:text-white">
        {children}
      </body>
    </html>
  );
}
