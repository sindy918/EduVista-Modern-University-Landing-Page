# EduVista — Modern University Landing Page

EduVista is a premium, high-fidelity, and fully responsive university landing page built as a professional internship submission. It is inspired by modern higher-education models and reimagines academic portals with state-of-the-art UI/UX patterns, vibrant typography, smooth micro-animations, and custom card layouts.

---

## 🌟 Live Demo & Visuals
- **Premium Styling**: Sleek glassmorphism, responsive menus, custom gradient glows, and active-interactive state designs.
- **Modern Typography**: Inter & Outfit Google Fonts embedded directly into the page for visual contrast.
- **Fluid Layout**: Transitions and hover scales applied on all action cards.

---

## 🛠️ Tech Stack
- **Framework**: [Next.js](https://nextjs.org/) (App Router, React 19)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/) (Native CSS theme configurations and custom animations)
- **Icons**: [Lucide React](https://lucide.dev/) (Modern, scalable stroke icons)
- **Tooling**: ESLint, PostCSS

---

## 📂 Project Structure
The repository is lightweight, containing only the required source files to remain 100% **GitHub-Ready** and easy to evaluate.

```text
eduvista-university-landing-page/
  ├── app/
  │   ├── globals.css      # Custom scrollbar, Google Fonts, Tailwind v4 theme definitions
  │   ├── layout.js        # Global viewport, SEO meta titles, keywords & description
  │   └── page.js          # Sequential assembly of sections
  ├── components/
  │   ├── Navbar.jsx       # Backdrop-blur fixed header, active scroll triggers, responsive hamburger
  │   ├── Hero.jsx         # Title, dual CTA buttons, active student metrics visual dashboard
  │   ├── About.jsx        # Philosophy & 4 interactive stats cards (Colleges, Schools, Legacy, Tech)
  │   ├── Programs.jsx     # 6 course cards (CS, AI & ML, Data Science, Business, Research, Design)
  │   ├── WhyChooseUs.jsx  # Split-grid layout covering the 6 institutional pillars & rankings
  │   ├── Testimonials.jsx # 3 achiever reviews detailing names, programs, quote reviews & company placements
  │   ├── CTA.jsx          # Radial glowing signup card with brochure download and sandbox buttons
  │   └── Footer.jsx       # 4-column structured footer with socials, site map, and contact hours
  ├── public/              # Lightweight static assets
  ├── .gitignore           # Ignores node_modules, .next, builds, env files, and logs
  ├── package.json         # Direct dependency listing
  ├── tailwind.config.js   # Tailwind compliance configuration
  ├── postcss.config.js    # PostCSS compiling rules
  └── README.md            # Project documentation & assignment notes
```

---

## ✨ Key Features & Sections
1. **Interactive Navigation Bar**: Fixed scroll-detection that scales down and blurs from transparent to an opaque background. Provides smooth anchor-scrolling to all sections.
2. **Glow-Blob Hero Section**: Features custom abstract backgrounds, strong value propositions, fast stats (Placement rate, Student ratio), and a mock-up interactive "NextGen Portal Card" displaying real-time AI progression metrics.
3. **Interactive Stats Cards**: Hover-scaling stat blocks containing customized badges, legacy milestones, and specialized icons representing undergraduate/graduate fields.
4. **Rich Academic Programs**: 6 modern grid-cards featuring academic specs, sub-specializations, duration badges, and specific lab partnerships.
5. **Why Choose Us Grid**: A beautiful split-column block highlighting major university credentials (employability ratings, global partners) beside the 6 core pillars.
6. **Student Success Testimonials**: Custom quote blocks containing star ratings, quote graphics, and gradient initials avatars showcasing actual job placements at Microsoft, Spotify, and Airbnb.
7. **Admissions CTA**: A radial-glow banner with a quick checkmark list of application benefits (no fee, fast submission), a live sandbox action alert, and a catalog download.
8. **Structured Sitemap Footer**: A dark theme sitemap dividing internal pages, contact details, social profiles, operational hours, and copyright info.

---

## 🚀 How to Run Locally

### 1. Prerequisites
Ensure you have [Node.js](https://nodejs.org/) (v18.0.0 or higher) and [npm](https://www.npmjs.com/) installed on your machine.

### 2. Clone and Navigate
Clone this repository to your local drive and change directory into the project folder:
```bash
cd eduvista-university-landing-page
```

### 3. Install Dependencies
Install all required package versions listed inside `package.json`:
```bash
npm install
```

### 4. Start Development Server
Run the local dev server:
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser to inspect the application.

### 5. Build for Production (Optional)
To build a highly optimized production bundle and check for lint errors:
```bash
npm run build
npm run start
```

---

## 📌 Assignment Submission Notes
- **Lightweight Package**: Standard build cache folder (`.next/`), node modules (`node_modules/`), and platform configurations have been omitted via `.gitignore` to comply with grading specifications and facilitate clean uploads.
- **Responsive Proof**: Fully validated across standard resolutions (320px mobile-small up to 1440px+ ultra-widescreen desktop screens).
- **SEO Ready**: Uses unique element IDs for integration test validation, semantic headings (`<h1>` strictly restricted to the Hero section), and meta tags.
