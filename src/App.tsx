// src/App.tsx
import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

// 🔹 NEW: real screenshots
import heroAssistantResponse from "./screenshots/hero-assistant-response.png";
import heroMatchingCandidates from "./screenshots/hero-matching-candidates.png";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

type PreviewKey = "jobs" | "candidates" | "video";
const PREVIEWS: PreviewKey[] = ["jobs", "candidates", "video"];

/* ----------------- Small preview components (bottom section) ----------------- */

const JobsPreview: React.FC = () => {
  const rows = [
    { title: "Senior Java Engineer", loc: "Chennai · Hybrid", apps: 42, fit: 91 },
    { title: "Frontend Developer", loc: "Remote · India", apps: 31, fit: 86 },
    { title: "Talent Acquisition Lead", loc: "Bangalore · Onsite", apps: 18, fit: 88 },
    { title: "HR Business Partner", loc: "Chennai · Hybrid", apps: 25, fit: 79 },
  ];

  return (
    <div className="flex h-full w-full flex-col rounded-2xl bg-white/90 p-3 text-[11px] text-slate-600">
      <div className="mb-2 flex items-center justify-between">
        <div className="flex gap-2">
          <span className="rounded-full bg-violet-50 px-2 py-1 text-[10px] font-medium text-violet-700">
            Open roles · 27
          </span>
          <span className="rounded-full bg-emerald-50 px-2 py-1 text-[10px] font-medium text-emerald-700">
            SLA on track
          </span>
        </div>
        <span className="text-[10px] text-slate-500">
          Filters: Location · Experience · Status
        </span>
      </div>

      <div className="mb-1 grid grid-cols-[1.5fr,1fr,0.7fr,0.7fr] gap-2 rounded-xl bg-slate-50 px-2 py-1 text-[10px] font-semibold text-slate-500">
        <span>Role</span>
        <span>Location</span>
        <span className="text-right">Candidates</span>
        <span className="text-right">Avg. fit</span>
      </div>

      <div className="space-y-1.5">
        {rows.map((row) => (
          <div
            key={row.title}
            className="grid grid-cols-[1.5fr,1fr,0.7fr,0.7fr] items-center gap-2 rounded-xl bg-violet-50/70 px-2 py-1.5 ring-1 ring-violet-100"
          >
            <div>
              <div className="text-[11px] font-medium text-brand-dark">{row.title}</div>
              <div className="mt-0.5 flex gap-2 text-[10px] text-slate-500">
                <span>{row.loc}</span>
                <span>5–8 yrs</span>
              </div>
            </div>
            <span className="text-[10px] text-slate-600">
              {row.loc.split("·")[0]}
            </span>
            <span className="text-right text-[10px] text-slate-600">
              {row.apps}
            </span>
            <div className="flex items-center justify-end gap-1">
              <span className="text-[10px] font-medium text-emerald-700">
                {row.fit}%
              </span>
              <div className="h-1.5 w-14 overflow-hidden rounded-full bg-emerald-100">
                <div
                  className="h-full rounded-full bg-emerald-500"
                  style={{ width: `${row.fit}%` }}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const CandidatesPreview: React.FC = () => {
  const candidates = [
    {
      name: "Priya R",
      role: "Senior Java Engineer",
      loc: "Chennai",
      fit: 94,
      stage: "Shortlisted",
    },
    {
      name: "Karthik S",
      role: "Frontend Developer",
      loc: "Remote",
      fit: 89,
      stage: "Screening",
    },
    {
      name: "Ananya M",
      role: "TA Lead",
      loc: "Bangalore",
      fit: 92,
      stage: "Interviewing",
    },
    {
      name: "Rahul D",
      role: "HRBP",
      loc: "Chennai",
      fit: 83,
      stage: "On hold",
    },
  ];

  const stageColor: Record<string, string> = {
    Shortlisted: "bg-emerald-50 text-emerald-700",
    Screening: "bg-sky-50 text-sky-700",
    Interviewing: "bg-violet-50 text-violet-700",
    "On hold": "bg-amber-50 text-amber-700",
  };

  return (
    <div className="flex h-full w-full flex-col rounded-2xl bg-white/90 p-3 text-[11px] text-slate-600">
      <div className="mb-2 flex items-center justify-between">
        <span className="rounded-full bg-violet-50 px-2 py-1 text-[10px] font-medium text-violet-700">
          Candidate pool · 148
        </span>
        <span className="text-[10px] text-slate-500">
          Filters: Skills · Location · Status
        </span>
      </div>

      <div className="space-y-1.5">
        {candidates.map((c) => (
          <div
            key={c.name}
            className="flex items-center justify-between rounded-xl bg-slate-50 px-2 py-1.5 ring-1 ring-slate-100"
          >
            <div className="flex items-center gap-2">
              <div className="flex h-7 w-7 items-center justify-center rounded-full bg-gradient-to-br from-brand-primary/80 to-brand-accent/80 text-[11px] font-semibold text-white">
                {c.name
                  .split(" ")
                  .map((x) => x[0])
                  .join("")}
              </div>
              <div>
                <div className="text-[11px] font-medium text-brand-dark">
                  {c.name}
                </div>
                <div className="mt-0.5 flex gap-2 text-[10px] text-slate-500">
                  <span>{c.role}</span>
                  <span>{c.loc}</span>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <span
                className={`rounded-full px-2 py-0.5 text-[10px] font-medium ${stageColor[c.stage]}`}
              >
                {c.stage}
              </span>
              <div className="flex items-center gap-1">
                <span className="text-[10px] font-medium text-emerald-700">
                  {c.fit}% fit
                </span>
                <div className="h-1.5 w-14 overflow-hidden rounded-full bg-emerald-100">
                  <div
                    className="h-full rounded-full bg-emerald-500"
                    style={{ width: `${c.fit}%` }}
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

/* ------------------------------------ APP ----------------------------------- */

type HeroSlide = {
  label: string;
  eyebrow: string;
  line1: string;
  line2: string;
  body: string;
};

const App: React.FC = () => {
  const [activePreview, setActivePreview] = useState<PreviewKey>("jobs");

  // smoother dropdown behaviour
  const [isProductOpen, setIsProductOpen] = useState(false);
  const productHoverTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(
    null
  );

  const handleProductEnter = () => {
    if (productHoverTimeoutRef.current) {
      clearTimeout(productHoverTimeoutRef.current);
      productHoverTimeoutRef.current = null;
    }
    setIsProductOpen(true);
  };

  const handleProductLeave = () => {
    if (productHoverTimeoutRef.current) {
      clearTimeout(productHoverTimeoutRef.current);
    }
    productHoverTimeoutRef.current = setTimeout(() => {
      setIsProductOpen(false);
      productHoverTimeoutRef.current = null;
    }, 120);
  };

  // HERO slides – line1 = black, line2 = gradient
  const heroSlides: HeroSlide[] = [
    {
      label: "From chaos to control",
      eyebrow: "Hiring today is messy",
      // tightened to stay in 2 lines
      line1: "Drowning in resumes.",
      line2: "Lost in Excel trackers.",
      body: "SmartScreen pulls every JD, resume, and status update into one AI workspace — so you always know what’s happening on each role in seconds.",
    },
    {
      // ✅ unchanged – this slide already looks good
      label: "Shortlists in minutes",
      eyebrow: "Too much time on manual screening",
      line1: "Still reading CVs one by one",
      line2: "just to build a shortlist?",
      body: "Upload job descriptions and bulk resumes, let SmartScreen parse skills and experience, and get ranked shortlists per role — so recruiters stop wasting hours on first-level screening.",
    },
    {
      label: "Assistant across your data",
      eyebrow: "Everyone asking you for updates",
      // tightened to 2 crisp lines
      line1: "Stop chasing updates.",
      line2: "Assistant answers instantly.",
      body: "SmartScreen’s AI assistant sits on top of jobs, candidates, and applications. Ask in plain English — “show best fits for this role”, “who moved stages this week” — and get answers from live data.",
    },
  ];

  const [heroIndex, setHeroIndex] = useState(0);
  const [heroDirection, setHeroDirection] = useState<1 | -1>(1);
  const [isHeroHovered, setIsHeroHovered] = useState(false); // 🔸 NEW
  const currentHero = heroSlides[heroIndex];

  const heroBullets: string[][] = [
    // Slide 1 – “Hiring today is messy”
    [
      "Resumes scattered across downloads, job portals, and email.",
      "Status updates buried in Excel sheets and WhatsApp chats.",
      "No single place that shows what’s happening on each role.",
    ],
    // Slide 2 – “Shortlists in minutes”
    [
      "Hours lost reading CVs line by line for every new role.",
      "Hard to compare skills, experience, and location at a glance.",
      "Strong candidates slip through with no AI-ranked shortlist.",
    ],
    // Slide 3 – “Assistant answers instantly”
    [
      "Everyone pings you for role, candidate, and offer updates.",
      "No instant answer when someone asks who moved stages this week.",
      "Updates spread across ATS, sheets, and chats instead of one assistant.",
    ],
  ];

  const previewLabelMap: Record<PreviewKey, string> = {
    jobs: "Jobs & openings",
    candidates: "Candidates & fitment",
    video: "Workflow demo",
  };

  /* Auto-advance bottom preview section */
  useEffect(() => {
    const interval = setInterval(() => {
      setActivePreview((current) => {
        const idx = PREVIEWS.indexOf(current);
        const next = PREVIEWS[(idx + 1) % PREVIEWS.length];
        return next;
      });
    }, 7000);
    return () => clearInterval(interval);
  }, []);

  /* Auto-advance HERO slides – now pausable on hover */
  useEffect(() => {
    if (isHeroHovered) return; // 🔸 pause when hovered

    const interval = setInterval(() => {
      setHeroDirection(1);
      setHeroIndex((idx) => (idx + 1) % heroSlides.length);
    }, 8000);

    return () => clearInterval(interval);
  }, [heroSlides.length, isHeroHovered]);

  const goHeroPrev = () => {
    setHeroDirection(-1);
    setHeroIndex((idx) => (idx - 1 + heroSlides.length) % heroSlides.length);
  };

  const goHeroNext = () => {
    setHeroDirection(1);
    setHeroIndex((idx) => (idx + 1) % heroSlides.length);
  };

  const goNextPreview = () => {
    setActivePreview((current) => {
      const idx = PREVIEWS.indexOf(current);
      return PREVIEWS[(idx + 1) % PREVIEWS.length];
    });
  };

  const goPrevPreview = () => {
    setActivePreview((current) => {
      const idx = PREVIEWS.indexOf(current);
      return PREVIEWS[(idx - 1 + PREVIEWS.length) % PREVIEWS.length];
    });
  };

  const heroSlideVariants = {
    enter: (direction: number) => ({
      opacity: 0,
      x: direction > 0 ? 60 : -60,
    }),
    center: {
      opacity: 1,
      x: 0,
    },
    exit: (direction: number) => ({
      opacity: 0,
      x: direction > 0 ? -60 : 60,
    }),
  };

  // 🔹 NEW: shared card variants for right hero panel – same axis as text
  const heroCardVariants = {
    enter: (direction: number) => ({
      opacity: 0,
      x: direction > 0 ? 60 : -60,
      scale: 0.96,
    }),
    center: {
      opacity: 1,
      x: 0,
      scale: 1,
    },
    exit: (direction: number) => ({
      opacity: 0,
      x: direction > 0 ? -60 : 60,
      scale: 0.96,
    }),
  };

  const handleHeroMouseEnter = () => setIsHeroHovered(true); // 🔸 NEW
  const handleHeroMouseLeave = () => setIsHeroHovered(false); // 🔸 NEW

  return (
    <div className="min-h-screen bg-brand-light text-brand-dark">
      {/* Soft global gradient */}
      <div className="pointer-events-none fixed inset-0 bg-hero-gradient opacity-70" />

      {/* NAVBAR */}
      <header className="relative z-20 border-b border-violet-100 bg-white/80 backdrop-blur-xl">
        <div className="container flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-primary via-brand-neon to-brand-accent shadow-soft">
              <span className="text-lg font-semibold text-white">S</span>
            </div>
            <div>
              <div className="text-sm font-semibold tracking-wide">
                SmartScreen
              </div>
              <div className="text-[11px] uppercase tracking-[0.18em] text-violet-500">
                AI Hiring Copilot
              </div>
            </div>
          </div>

          {/* Nav Links */}
          <nav className="hidden items-center gap-8 text-sm md:flex">
            {/* Product dropdown with softer icons + delayed hover */}
            <div
              className="relative"
              onMouseEnter={handleProductEnter}
              onMouseLeave={handleProductLeave}
            >
              <button className="flex items-center gap-1 font-medium text-slate-700 hover:text-brand-dark">
                Product
                <span className="text-[10px] text-slate-500">▾</span>
              </button>

              <div
                className={`absolute left-0 top-full mt-2 w-72 rounded-2xl border border-violet-100 bg-white/95 p-4 shadow-lg transition-all ${
                  isProductOpen
                    ? "pointer-events-auto translate-y-0 opacity-100"
                    : "pointer-events-none translate-y-2 opacity-0"
                }`}
              >
                <div className="mb-3 text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-400">
                  SmartScreen modules
                </div>

                <ul className="space-y-3 text-[13px]">
                  <li className="flex gap-3">
                    <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-violet-50 text-[14px] text-violet-700">
                      🗂
                    </div>
                    <div>
                      <div className="font-medium text-brand-dark">
                        Job management
                      </div>
                      <div className="text-[11px] text-slate-500">
                        Create, track, and prioritise every JD in one place.
                      </div>
                    </div>
                  </li>

                  <li className="flex gap-3">
                    <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-sky-50 text-[14px] text-sky-700">
                      👤
                    </div>
                    <div>
                      <div className="font-medium text-brand-dark">
                        Candidate intelligence
                      </div>
                      <div className="text-[11px] text-slate-500">
                        Bulk upload resumes, auto-tag skills, see fitment.
                      </div>
                    </div>
                  </li>

                  <li className="flex gap-3">
                    <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-emerald-50 text-[14px] text-emerald-700">
                      🔄
                    </div>
                    <div>
                      <div className="font-medium text-brand-dark">
                        Applications & workflows
                      </div>
                      <div className="text-[11px] text-slate-500">
                        Custom stages per client, notes, timeline.
                      </div>
                    </div>
                  </li>

                  <li className="flex gap-3">
                    <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-pink-50 text-[14px] text-pink-700">
                      🤖
                    </div>
                    <div>
                      <div className="font-medium text-brand-dark">
                        AI assistant
                      </div>
                      <div className="text-[11px] text-slate-500">
                        Ask anything about jobs, candidates, workflows.
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            <button className="font-medium text-slate-700 hover:text-brand-dark">
              Use cases
            </button>
            <button className="font-medium text-slate-700 hover:text-brand-dark">
              Pricing
            </button>
            <button className="font-medium text-slate-700 hover:text-brand-dark">
              Resources
            </button>
          </nav>

          {/* Right actions */}
          <div className="flex items-center gap-3">
            <button className="hidden text-sm font-medium text-slate-700 hover:text-brand-dark md:inline-flex">
              Sign in
            </button>
            <button className="relative overflow-hidden rounded-full bg-brand-primary px-4 py-1.5 text-xs font-semibold text-white shadow-soft hover:bg-brand-primaryLight md:px-5 md:py-2 md:text-sm">
              <span className="relative z-10">Get early access</span>
              <span className="pointer-events-none absolute inset-0 overflow-hidden rounded-full">
                <span className="animate-sheen absolute inset-y-0 w-1/2 bg-gradient-to-r from-white/0 via-white/40 to-white/0" />
              </span>
            </button>
          </div>
        </div>
      </header>

      <main className="relative z-10">
        {/* HERO with subtle image + slideshow */}
        <section
          className="relative overflow-hidden pt-16 pb-16
             md:pt-20 md:pb-20
             md:h-[720px] lg:h-[750px]
             md:flex md:items-start"
          onMouseEnter={handleHeroMouseEnter}
          onMouseLeave={handleHeroMouseLeave}
        >
          {/* Subtle background image inside hero */}
          <div
            className="pointer-events-none absolute inset-0 z-0 opacity-[0.12] mix-blend-soft-light"
            style={{
              backgroundImage:
                'url("https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=1600")',
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />

          {/* Hero arrows on full hero area */}
          <button
            type="button"
            onClick={goHeroPrev}
            className="absolute left-6 top-1/2 z-20 hidden -translate-y-1/2 rounded-full bg-white/80 p-2 shadow-soft hover:bg-violet-50 md:inline-flex"
          >
            <span className="text-sm text-violet-700">‹</span>
          </button>
          <button
            type="button"
            onClick={goHeroNext}
            className="absolute right-6 top-1/2 z-20 hidden -translate-y-1/2 rounded-full bg-white/80 p-2 shadow-soft hover:bg-violet-50 md:inline-flex"
          >
            <span className="text-sm text-violet-700">›</span>
          </button>

          <div className="container relative z-10 grid gap-12 md:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] md:items-start">
            {/* Hero text – eyebrow + static chips + animated body */}
            <div className="space-y-4 md:space-y-6 md:min-h-[320px]">
              {/* Eyebrow – gradient badge, no icons/rail */}
              <div className="relative inline-flex items-center">
                <div
                  className="inline-flex items-center rounded-full border border-violet-100/80
                    bg-gradient-to-r from-brand-primary/12 via-brand-neon/14 to-brand-accent/25
                    px-4 py-1.5 text-[11px] md:text-[12px] font-semibold
                    uppercase tracking-[0.22em] text-violet-900
                    shadow-[0_10px_30px_rgba(148,163,184,0.35)] backdrop-blur-sm"
                >
                  <span>{currentHero.eyebrow}</span>
                </div>
              </div>


              {/* Slide tabs – story chips (STATIC POSITION) */}
              <div className="flex flex-wrap items-center gap-2 text-xs">
                {heroSlides.map((slide, idx) => {
                  const isActive = idx === heroIndex;
                  return (
                    <button
                      key={slide.label}
                      type="button"
                      onClick={() => {
                        if (idx === heroIndex) return;
                        setHeroDirection(idx > heroIndex ? 1 : -1);
                        setHeroIndex(idx);
                      }}
                      className={`rounded-full border px-3 py-1 transition ${
                        isActive
                          ? "border-brand-primary/40 bg-brand-primary/10 text-brand-primary"
                          : "border-violet-100 bg-white/60 text-slate-500 hover:bg-white"
                      }`}
                    >
                      {slide.label}
                    </button>
                  );
                })}
              </div>

              {/* Animated part ONLY: heading, body, bullets, CTAs */}
              <AnimatePresence mode="wait" custom={heroDirection}>
                <motion.div
                  key={heroIndex}
                  custom={heroDirection}
                  variants={heroSlideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.45, ease: "easeOut" }}
                  className="space-y-6 md:space-y-7"
                >
                  {/* two explicit lines */}
                  <h1 className="max-w-xl text-3xl font-semibold leading-snug tracking-tight text-brand-dark sm:text-4xl md:text-5xl md:leading-[1.2]">
                    <span className="block">{currentHero.line1}</span>
                    <span className="mt-1 inline-block bg-gradient-to-r from-brand-primaryLight via-brand-neon to-brand-accent bg-clip-text pb-1.5 text-transparent">
                      {currentHero.line2}
                    </span>
                  </h1>

                  <p className="max-w-xl text-base text-slate-700 sm:text-lg">
                    {currentHero.body}
                  </p>

                  {/* Pain bullets – per slide, more prominent */}
                  <ul className="mt-3 space-y-2 text-[13px] text-slate-700">
                    {heroBullets[heroIndex].map((text) => (
                      <li key={text} className="flex items-start gap-3">
                        <span
                          className="mt-1 h-2 w-2 rounded-full bg-rose-400
                                    shadow-[0_0_0_4px_rgba(248,113,113,0.18)]"
                        />
                        <span>{text}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap items-center gap-4">
                    <button className="relative overflow-hidden rounded-full bg-gradient-to-r from-brand-primary via-brand-neon to-brand-accent px-6 py-2.5 text-sm font-semibold text-white shadow-soft hover:shadow-[0_18px_40px_rgba(124,58,237,0.45)]">
                      <span className="relative z-10">Get early access</span>
                      <span className="pointer-events-none absolute inset-0 overflow-hidden rounded-full">
                        <span className="animate-sheen absolute inset-y-0 w-1/2 bg-gradient-to-r from-white/0 via-white/40 to-white/0" />
                      </span>
                    </button>
                    <button className="inline-flex items-center gap-2 text-sm text-slate-700 hover:text-brand-dark">
                      <span className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-violet-200 bg-white/80">
                        ▶
                      </span>
                      Watch 60s overview
                    </button>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Hero mock UI card – depends on slide, shared axis with text */}
            <AnimatePresence mode="wait" custom={heroDirection}>
              <motion.div
                key={heroIndex}
                custom={heroDirection}
                variants={heroCardVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.45, ease: "easeOut" }}
                className="relative mt-4 md:mt-16 lg:mt-20"
              >
                <div className="relative">
                  <div className="absolute -top-10 -left-6 h-32 w-32 rounded-full bg-purple-300/60 blur-3xl animate-pulse-soft" />
                  <div className="absolute -bottom-10 -right-4 h-24 w-24 rounded-full bg-pink-300/60 blur-3xl animate-pulse-soft" />

                  {heroIndex === 0 ? (
                    /* Slide 1 – live pipeline + assistant, glossy card */
                    <div className="gradient-border rounded-3xl w-full max-w-[1120px] md:ml-6 lg:ml-10 origin-left md:scale-[1.08] lg:scale-[1.15]">
                      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-white/96 via-violet-50/90 to-pink-50/90 p-6 shadow-soft backdrop-blur-xl">
                        {/* faint overlay glows */}
                        <div className="pointer-events-none absolute -top-12 left-10 h-24 w-24 rounded-full bg-violet-300/35 blur-3xl" />
                        <div className="pointer-events-none absolute -bottom-16 right-4 h-28 w-28 rounded-full bg-pink-300/35 blur-3xl" />

                        {/* top bar */}
                        <div className="relative mb-3 flex items-center justify-between text-[11px] text-slate-500">
                          <div className="flex items-center gap-2">
                            <span className="inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400" />
                            <span className="font-medium text-slate-700">
                              Live pipeline overview
                            </span>
                            <span className="rounded-full bg-emerald-50 px-2 py-0.5 text-[10px] text-emerald-700">
                              27 open roles
                            </span>
                          </div>
                          <div className="flex items-center gap-1 rounded-full bg-white/70 px-2 py-0.5 shadow-sm">
                            <span className="h-1.5 w-1.5 rounded-full bg-violet-400" />
                            <span>Tech</span>
                            <span className="h-1 w-[1px] bg-violet-100" />
                            <span className="text-slate-400">Non-tech</span>
                          </div>
                        </div>

                        {/* main two-column layout */}
                        <div className="relative grid gap-4 md:grid-cols-[1.3fr_minmax(0,1fr)]">
                          {/* Jobs list column */}
                          <div className="space-y-2 rounded-2xl bg-white/80 p-3.5 ring-1 ring-violet-100">
                            <div className="mb-1 flex items-center justify-between text-[10px] font-medium text-slate-500">
                              <span>Role</span>
                              <div className="flex gap-4">
                                <span>Location</span>
                                <span className="text-right">Matches</span>
                              </div>
                            </div>

                            {[
                              "Senior Java Engineer",
                              "HR Business Partner",
                              "Frontend Developer",
                              "Talent Acquisition Lead",
                            ].map((title, idx) => (
                              <div
                                key={title}
                                className="flex items-center justify-between rounded-xl bg-violet-50/80 px-3 py-2.5 text-[11px] ring-1 ring-violet-100"
                              >
                                <div className="space-y-0.5">
                                  <div className="font-medium text-brand-dark">
                                    {title}
                                  </div>
                                  <div className="flex gap-2 text-[10px] text-slate-500">
                                    <span>Chennai · Hybrid</span>
                                    <span>5–8 yrs</span>
                                  </div>
                                </div>
                                <div className="flex flex-col items-end gap-1">
                                  <span className="rounded-full bg-emerald-100 px-2 py-0.5 text-[10px] text-emerald-700">
                                    23 matched
                                  </span>
                                  <div className="flex items-center gap-1 text-[10px] text-slate-500">
                                    <span>Fitment</span>
                                    <div className="h-1.5 w-14 overflow-hidden rounded-full bg-emerald-100">
                                      <div
                                        className="h-full rounded-full bg-emerald-500"
                                        style={{ width: `${72 + idx * 6}%` }}
                                      />
                                    </div>
                                    <span className="font-medium text-emerald-700">
                                      {72 + idx * 6}%
                                    </span>
                                  </div>
                                </div>
                              </div>
                            ))}
                          </div>

                          {/* Assistant column */}
                          <div className="space-y-3 rounded-2xl border border-violet-100 bg-gradient-to-b from-white/95 to-violet-50/90 p-3.5">
                            <div className="flex items-center justify-between text-[11px] text-slate-500">
                              <div className="flex items-center gap-2">
                                <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-gradient-to-tr from-brand-primary to-brand-neon text-[10px] text-white">
                                  AI
                                </span>
                                <span className="font-medium text-slate-700">
                                  SmartScreen Assistant
                                </span>
                              </div>
                              <span className="inline-flex items-center gap-1 text-emerald-600">
                                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                                Online
                              </span>
                            </div>

                            <div className="space-y-2 text-[11px]">
                              <div className="rounded-xl bg-white/90 p-2.5 text-slate-700 shadow-[0_10px_30px_rgba(15,23,42,0.06)]">
                                “Show me senior roles in Chennai with hybrid
                                work, sorted by fitment.”
                              </div>
                              <div className="rounded-xl bg-gradient-to-br from-brand-primary/10 via-brand-neon/10 to-brand-accent/10 p-2.5 text-brand-dark shadow-[0_16px_40px_rgba(124,58,237,0.25)]">
                                <div className="flex items-center justify-between text-[11px]">
                                  <span className="font-medium">
                                    Result · 6 roles found
                                  </span>
                                  <span className="rounded-full bg-white/40 px-2 py-0.5 text-[10px] text-violet-700">
                                    Filter: Chennai · Hybrid
                                  </span>
                                </div>
                                <ul className="mt-1.5 space-y-0.5 text-[10px] text-slate-800">
                                  <li>• Senior Java Engineer · 23 candidates</li>
                                  <li>• Frontend Developer · 18 candidates</li>
                                  <li>• Talent Acquisition Lead · 11 candidates</li>
                                </ul>
                              </div>
                            </div>

                            <div className="mt-1 flex items-center gap-1 rounded-full border border-violet-100 bg-white/80 px-2 py-1.5 text-[11px] text-slate-500">
                              <span className="text-slate-400">⊕</span>
                              <span className="truncate">
                                Ask anything about jobs, filters, or pipeline
                                health…
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ) : heroIndex === 1 ? (
                    /* Slide 2 — glossy premium mock UI */
                    <div className="gradient-border rounded-3xl w-full max-w-[1120px] md:ml-6 lg:ml-10 origin-left md:scale-[1.05]">
                      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-white/40 via-violet-50/30 to-pink-50/30 shadow-[0_18px_55px_rgba(124,58,237,0.28)] backdrop-blur-2xl p-6">
                        {/* Ambient glows — boosted gloss */}
                        <div className="pointer-events-none absolute -top-16 left-10 h-40 w-40 rounded-full bg-violet-300/50 blur-3xl" />
                        <div className="pointer-events-none absolute -bottom-16 right-4 h-36 w-36 rounded-full bg-pink-300/50 blur-3xl" />

                        {/* Browser chrome */}
                        <div className="flex items-center justify-between rounded-t-2xl border-b border-violet-100/50 bg-white/40 px-4 py-2 text-[11px] text-slate-600 backdrop-blur-xl">
                          <div className="flex items-center gap-1.5">
                            <span className="h-2.5 w-2.5 rounded-full bg-red-400/80" />
                            <span className="h-2.5 w-2.5 rounded-full bg-amber-300/80" />
                            <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/80" />
                          </div>

                          <div className="flex items-center gap-2 truncate">
                            <span className="rounded-full bg-white/70 px-2 py-0.5 text-[10px] text-violet-700">
                              Create application
                            </span>
                            <span className="truncate text-[11px] text-slate-600">
                              Matching candidates · SmartScreen (mock)
                            </span>
                          </div>

                          <span className="rounded-full bg-violet-600/90 px-2 py-0.5 text-[10px] font-medium text-white">
                            23 matches
                          </span>
                        </div>

                        {/* Inner glossy mock UI */}
                        <div className="relative rounded-b-3xl border border-violet-100/40 bg-gradient-to-br from-violet-50/40 via-white/55 to-pink-50/40 px-4 py-4 shadow-[0_22px_50px_rgba(15,23,42,0.22)] backdrop-blur-xl">
                          <div className="relative grid gap-3 rounded-2xl bg-white/75 p-3.5 shadow-[0_16px_40px_rgba(15,23,42,0.12)] md:grid-cols-[0.9fr,1.1fr]">
                            {/* Left – JD + upload summary */}
                            <div className="flex flex-col gap-3 border-r border-violet-100/70 pr-3">
                              <div className="flex items-center justify-between text-[11px] text-slate-600">
                                <span className="font-medium text-slate-800">
                                  Java Developer
                                </span>
                                <span className="rounded-full bg-violet-50 px-2 py-0.5 text-[10px] text-violet-700">
                                  New role
                                </span>
                              </div>

                              <div className="space-y-1.5 rounded-xl bg-slate-50/80 p-2.5 text-[10px] text-slate-600">
                                <div className="flex items-center justify-between">
                                  <span>Chennai · Hybrid · 5–8 yrs</span>
                                  <span className="rounded-full bg-white px-2 py-0.5 text-[9px] text-slate-500">
                                    JD parsed ✓
                                  </span>
                                </div>
                                <ul className="space-y-0.5">
                                  <li>• Core skills: Java, Spring Boot, Microservices</li>
                                  <li>• Nice to have: Kafka, AWS</li>
                                  <li>• Must not: only manual testing profiles</li>
                                </ul>
                              </div>

                              <div className="space-y-2 rounded-xl bg-violet-50/70 p-2.5 text-[10px]">
                                <div className="flex items-center justify-between">
                                  <span className="font-medium text-slate-700">
                                    Bulk resumes uploaded
                                  </span>
                                  <span className="rounded-full bg-white px-2 py-0.5 text-[9px] text-violet-700">
                                    120 CVs
                                  </span>
                                </div>
                                <div className="space-y-1 text-slate-600">
                                  <div className="flex items-center justify-between">
                                    <span>Parsed & tagged</span>
                                    <span className="text-emerald-600">96%</span>
                                  </div>
                                  <div className="h-1.5 w-full overflow-hidden rounded-full bg-emerald-100">
                                    <div className="h-full w-[96%] rounded-full bg-emerald-500" />
                                  </div>
                                  <p className="text-[9px] text-slate-500">
                                    SmartScreen reads skills, experience, and location from every CV.
                                  </p>
                                </div>
                              </div>
                            </div>

                            {/* Right – AI-ranked shortlist */}
                            <div className="flex flex-col gap-2">
                              <div className="flex items-center justify-between text-[11px]">
                                <div className="flex items-center gap-2">
                                  <span className="rounded-full bg-emerald-50 px-2 py-0.5 text-[10px] font-medium text-emerald-700">
                                    AI-ranked shortlist
                                  </span>
                                  <span className="text-slate-500">
                                    Top 10 of 120 candidates
                                  </span>
                                </div>
                                <span className="rounded-full bg-white/80 px-2 py-0.5 text-[9px] text-slate-500">
                                  Filter: skills · experience · location
                                </span>
                              </div>

                              <div className="grid grid-cols-[0.9fr,0.4fr,0.4fr] gap-2 rounded-xl bg-slate-50/90 px-2 py-1.5 text-[10px] font-medium text-slate-500">
                                <span>Candidate</span>
                                <span className="text-right">Fitment</span>
                                <span className="text-right">Stage</span>
                              </div>

                              <div className="space-y-1.5 text-[10px] text-slate-700">
                                {[
                                  { name: "Priya R", loc: "Chennai · 7 yrs", fit: 94, stage: "Shortlisted" },
                                  { name: "Karthik S", loc: "Remote · 6 yrs", fit: 91, stage: "Shortlisted" },
                                  { name: "Ananya M", loc: "Bangalore · 8 yrs", fit: 88, stage: "Interview" },
                                  { name: "Rahul D", loc: "Chennai · 5 yrs", fit: 84, stage: "Screening" },
                                ].map((c) => (
                                  <div
                                    key={c.name}
                                    className="flex items-center justify-between rounded-xl bg-white/90 px-2.5 py-1.5 ring-1 ring-violet-100"
                                  >
                                    <div className="flex flex-col">
                                      <span className="text-[10px] font-medium text-brand-dark">
                                        {c.name}
                                      </span>
                                      <span className="text-[9px] text-slate-500">
                                        {c.loc}
                                      </span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                      <div className="flex flex-col items-end">
                                        <span className="text-[10px] font-semibold text-emerald-700">
                                          {c.fit}% match
                                        </span>
                                        <div className="mt-0.5 h-1.5 w-16 overflow-hidden rounded-full bg-emerald-100">
                                          <div
                                            className="h-full rounded-full bg-emerald-500"
                                            style={{ width: `${c.fit}%` }}
                                          />
                                        </div>
                                      </div>
                                      <span
                                        className={`rounded-full px-2 py-0.5 text-[9px] ${
                                          c.stage === "Shortlisted"
                                            ? "bg-emerald-50 text-emerald-700"
                                            : c.stage === "Interview"
                                            ? "bg-violet-50 text-violet-700"
                                            : "bg-sky-50 text-sky-700"
                                        }`}
                                      >
                                        {c.stage}
                                      </span>
                                    </div>
                                  </div>
                                ))}
                              </div>

                              <div className="mt-1 flex items-center justify-between rounded-full bg-gradient-to-r from-violet-600 to-brand-accent px-3 py-1.5 text-[10px] font-medium text-white">
                                <span>Shortlist ready in under 60 seconds.</span>
                                <span className="rounded-full bg-black/20 px-2 py-0.5 text-[9px]">
                                  Re-rank · Refine filters · Export
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ) : (
                    /* Slide 3 – assistant mock, glossy card */
                    <div className="gradient-border rounded-3xl w-full max-w-[1120px] md:ml-6 lg:ml-10 origin-left md:scale-[1.1]">
                      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-white/96 via-violet-50/90 to-pink-50/90 px-6 py-8 shadow-soft">
                        {/* Ambient glows */}
                        <div className="pointer-events-none absolute -top-20 left-6 h-32 w-32 rounded-full bg-pink-300/50 blur-3xl" />
                        <div className="pointer-events-none absolute -bottom-20 right-6 h-36 w-36 rounded-full bg-violet-300/50 blur-3xl" />
                        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(248,250,252,0.4),_transparent_55%),_radial-gradient(circle_at_bottom,_rgba(244,114,182,0.35),_transparent_55%)] opacity-80" />

                        <div className="relative flex min-h-[260px] flex-col items-center justify-center gap-4 text-center text-slate-900">
                          {/* Animated neon blob – sits on light card */}
                          <div className="relative mb-3">
                            {/* soft haze behind */}
                            <div className="pointer-events-none absolute inset-[-18px] rounded-full bg-[radial-gradient(circle,_rgba(244,114,182,0.55),_transparent_55%)] blur-3xl opacity-90" />
                            <div className="neon-blob" />
                          </div>

                          {/* Title + subtitle */}
                          <div className="space-y-1">
                            <h3 className="text-lg font-semibold tracking-tight text-brand-dark">
                              SmartScreen Assistant
                            </h3>
                            <p className="max-w-md text-xs text-slate-700 sm:text-sm">
                              Ask about jobs, candidates, or applications in plain
                              English. The assistant answers from your live
                              SmartScreen data.
                            </p>
                          </div>

                          {/* Suggested prompts */}
                          <div className="mt-2 flex flex-wrap justify-center gap-2 text-[11px] sm:text-xs">
                            <button className="rounded-full border border-violet-100 bg-white/80 px-3 py-1 text-slate-700 hover:bg-white">
                              Show all open jobs
                            </button>
                            <button className="rounded-full border border-violet-100 bg-white/80 px-3 py-1 text-slate-700 hover:bg-white">
                              Jobs in Chennai
                            </button>
                            <button className="rounded-full border border-violet-100 bg-white/80 px-3 py-1 text-slate-700 hover:bg-white">
                              Who moved stages this week?
                            </button>
                          </div>

                          {/* Glassmorphism input bar – same theme colours */}
                          <div className="mt-6 flex w-full max-w-xl items-center rounded-full border border-violet-100 bg-white/80 px-4 py-2.5 text-left text-[13px] text-slate-700 shadow-[0_16px_40px_rgba(148,163,184,0.55)] backdrop-blur-xl">
                            <span className="mr-3 inline-flex h-7 w-7 items-center justify-center rounded-full bg-violet-100 text-[12px] text-brand-primary">
                              💬
                            </span>
                            <span className="flex-1 truncate">
                              Ask SmartScreen anything about your jobs or
                              pipeline…
                            </span>
                            <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-tr from-brand-primary via-brand-neon to-brand-accent text-[13px] font-semibold text-white shadow-soft">
                              <span className="-mr-[1px] translate-x-[1px]">
                                ➤
                              </span>
                            </span>
                          </div>

                          {/* Helper text below */}
                          <p className="mt-2 text-[11px] text-slate-600">
                            Also available as a small floating bubble inside the
                            SmartScreen app.
                          </p>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </section>
        {/* FEATURE CARDS */}
        <section className="relative border-t border-violet-100 bg-gradient-to-b from-brand-light via-[#f6f0ff] to-white py-16 md:py-20">
          {/* very subtle left/right lavender wash */}
          <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_left,_rgba(129,140,248,0.10),transparent_55%),_radial-gradient(circle_at_right,_rgba(236,72,153,0.10),transparent_55%)]" />
          <div className="container space-y-8 md:space-y-10">
            <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
              <div>
                <h2 className="text-2xl font-semibold text-brand-dark md:text-3xl">
                  Jobs, candidates, applications —
                  <span className="bg-gradient-to-r from-brand-primaryLight via-brand-neon to-brand-accent bg-clip-text text-transparent">
                    {" "}
                    finally connected.
                  </span>
                </h2>
                <p className="mt-3 max-w-2xl text-sm text-slate-600 md:text-base">
                  SmartScreen gives hiring teams a single system of record — from JD
                  creation to offer rollout — with AI helping at every step.
                </p>
              </div>
            </div>

            {/* cards */}
            <div className="relative">

              <div className="grid gap-7 lg:gap-8 md:grid-cols-2 xl:grid-cols-4">
                {[
                  {
                    title: "Job management",
                    chip: "Start with better JDs",
                    icon: "🗂",
                    iconBg:
                      "from-brand-primary/35 via-brand-neon/30 to-brand-accent/35",
                    points: [
                      "AI-powered JD parsing & clean structure",
                      "Auto-extracted skills, locations & tags",
                      "Priority & SLA tracking per role",
                    ],
                  },
                  {
                    title: "Candidate intelligence",
                    chip: "Know your pipeline",
                    icon: "👥",
                    iconBg: "from-sky-400/40 via-brand-neon/25 to-violet-500/40",
                    points: [
                      "Bulk resume upload with smart parsing",
                      "Skills, locations, tags & status in one view",
                      "Fitment scores on live roles",
                    ],
                  },
                  {
                    title: "Applications & workflows",
                    chip: "From screen to offer",
                    icon: "🔄",
                    iconBg:
                      "from-emerald-400/40 via-teal-400/35 to-brand-primary/35",
                    points: [
                      "Custom stages per client & role",
                      "Notes, feedback & collaboration in one trail",
                      "Timeline you can search in seconds",
                    ],
                  },
                  {
                    title: "AI assistant",
                    chip: "AI on every screen",
                    icon: "🤖",
                    iconBg:
                      "from-brand-primary/40 via-pink-400/40 to-brand-accent/40",
                    points: [
                      "Ask in plain English: jobs, candidates, offers",
                      "Answers powered by your live SmartScreen data",
                      "Shortcuts like “top 10 fits” or “stuck roles”",
                    ],
                  },
                ].map((card) => (
                <motion.div
                  key={card.title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  whileHover={{ scale: 1.05, y: -8 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 0.25 }}
                  className="group relative flex min-h-[230px] flex-col gap-4 overflow-hidden rounded-[26px]
                            border border-white/70 
                            bg-[#faf5ff]
                            px-6 py-5 
                            shadow-[0_12px_28px_rgba(15,23,42,0.15)]
                            hover:shadow-[0_25px_45px_rgba(0,0,0,0.18),0_8px_18px_rgba(0,0,0,0.12)]"
                >

                    {/* top glass highlight */}
                    <div className="pointer-events-none absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-white/80 via-white/0 to-transparent" />

                    {/* corner glow */}
                    <div className="pointer-events-none absolute -right-10 -top-10 h-24 w-24 rounded-full bg-gradient-to-br from-brand-primary/10 via-brand-neon/10 to-brand-accent/16 blur-2xl" />

                    <div className="relative flex flex-col gap-4">
                      <div className="flex items-center justify-between gap-3">
                        <span className="inline-flex w-fit rounded-full bg-white/80 px-3 py-1 text-[11px] font-medium text-violet-700 shadow-sm">
                          {card.chip}
                        </span>
                        <div
                          className={`flex h-9 w-9 items-center justify-center rounded-2xl bg-gradient-to-br ${card.iconBg} text-[18px] shadow-[0_0_18px_rgba(236,72,153,0.45)]`}
                        >
                          <span>{card.icon}</span>
                        </div>
                      </div>

                      <h3 className="text-lg font-semibold text-brand-dark">
                        {card.title}
                      </h3>

                      <ul className="space-y-2 text-sm text-slate-600">
                        {card.points.map((p) => (
                          <li key={p} className="flex gap-2">
                            <span className="mt-1 h-1.5 w-1.5 rounded-full bg-brand-accent/90" />
                            <span>{p}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* PRODUCT PREVIEW / CAROUSEL + VIDEO with arrows */}
        <section className="border-t border-violet-100 bg-brand-light/80 py-16 md:py-20">
          <div className="container space-y-10">
            <div className="grid gap-10 md:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] md:items-center">
              {/* Text column */}
              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-brand-dark md:text-3xl">
                  See SmartScreen in action.
                </h2>
                <p className="text-sm text-slate-600 md:text-base">
                  A rotating preview of how SmartScreen feels in real use —
                  your jobs board, candidate pool, and a quick workflow demo.
                  You can later plug in real screenshots or a Loom / MP4 of your
                  app.
                </p>
                <ul className="mt-2 space-y-2 text-sm text-slate-700">
                  <li className="flex gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-brand-primary" />
                    Jobs board view with fitment, locations, and SLA status.
                  </li>
                  <li className="flex gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-brand-accent" />
                    Candidate view showing stages, scores, and pipeline health.
                  </li>
                  <li className="flex gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-emerald-500" />
                    Workflow demo tab where you will later embed your real
                    video.
                  </li>
                </ul>
              </div>

              {/* Media column */}
              <motion.div
                initial={{ opacity: 0, y: 24, scale: 0.98 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="relative animate-float-slow"
              >
                {/* Glows */}
                <div className="absolute -left-10 -top-10 h-32 w-32 rounded-full bg-purple-300/40 blur-3xl" />
                <div className="absolute -right-10 -bottom-10 h-32 w-32 rounded-full bg-pink-300/40 blur-3xl" />

                {/* Glass card with browser chrome + carousel */}
                <div className="gradient-border relative overflow-hidden rounded-3xl border border-white/60 bg-white/60 shadow-soft backdrop-blur-xl">
                  {/* Browser chrome */}
                  <div className="flex items-center justify-between border-b border-violet-100/60 bg-white/70 px-4 py-2 text-xs text-slate-500">
                    <div className="flex items-center gap-1.5">
                      <span className="h-2.5 w-2.5 rounded-full bg-red-400/80" />
                      <span className="h-2.5 w-2.5 rounded-full bg-amber-300/80" />
                      <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/80" />
                    </div>
                    <div className="truncate text-[11px] text-slate-500">
                      {previewLabelMap[activePreview]} · smartscreen.ai
                    </div>
                    <span className="rounded-full bg-violet-50 px-2 py-0.5 text-[10px] text-violet-700">
                      Auto slideshow
                    </span>
                  </div>

                  {/* Carousel tabs */}
                  <div className="flex flex-wrap gap-2 border-b border-violet-100/60 bg-white/40 px-4 pb-2 pt-3 text-xs">
                    {[
                      { key: "jobs", label: "Jobs board" },
                      { key: "candidates", label: "Candidates view" },
                      { key: "video", label: "Workflow demo" },
                    ].map((item) => (
                      <button
                        key={item.key}
                        onClick={() => setActivePreview(item.key as PreviewKey)}
                        className={`rounded-full px-3 py-1 font-medium transition ${
                          activePreview === item.key
                            ? "bg-violet-600 text-white shadow-soft"
                            : "bg-white/70 text-slate-600 hover:bg-violet-50"
                        }`}
                      >
                        {item.label}
                      </button>
                    ))}
                  </div>

                  {/* Media area */}
                  <div className="relative px-4 pb-4 pt-3">
                    <div className="relative aspect-video overflow-hidden rounded-2xl border border-violet-100 bg-gradient-to-br from-violet-50 via-white to-pink-50">
                      {activePreview === "jobs" && (
                        <img
                          src={heroMatchingCandidates}
                          alt="SmartScreen jobs & matching candidates view"
                          className="h-full w-full object-cover"
                        />
                      )}
                      {activePreview === "candidates" && (
                        <img
                          src={heroAssistantResponse}
                          alt="SmartScreen AI assistant responding on hiring data"
                          className="h-full w-full object-cover"
                        />
                      )}
                      {activePreview === "video" && (
                        <video
                          className="h-full w-full rounded-2xl object-cover"
                          controls
                          poster="https://www.w3schools.com/html/pic_trulli.jpg"
                        >
                          <source
                            src="https://www.w3schools.com/html/mov_bbb.mp4"
                            type="video/mp4"
                          />
                          Your browser does not support the video tag.
                        </video>
                      )}

                      {/* Click overlay to go to video when on images */}
                      {activePreview !== "video" && (
                        <button
                          type="button"
                          onClick={() => setActivePreview("video")}
                          className="absolute inset-0 flex items:end justify:end bg-gradient-to-t from-black/15 via-black/0 to-transparent px-3 pb-3 text-[11px] text-white"
                        >
                          <span className="inline-flex items-center gap-2 rounded-full bg-black/30 px-3 py-1 backdrop-blur-sm">
                            <span className="flex h-5 w-5 items-center justify-center rounded-full bg-white/90 text-[10px] text-brand-primary">
                              ▶
                            </span>
                            <span>Click to watch workflow demo</span>
                          </span>
                        </button>
                      )}

                      {/* Left / Right arrows for this mini slider */}
                      <button
                        type="button"
                        onClick={goPrevPreview}
                        className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-white/80 p-2 shadow-soft hover:bg-violet-50"
                      >
                        <span className="text-xs text-violet-700">‹</span>
                      </button>
                      <button
                        type="button"
                        onClick={goNextPreview}
                        className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-white/80 p-2 shadow-soft hover:bg-violet-50"
                      >
                        <span className="text-xs text-violet-700">›</span>
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* HOW IT WORKS */}
        <section className="border-t border-violet-100 bg-brand-light/70 py-16 md:py-20">
          <div className="container space-y-10">
            <div className="text-center">
              <h2 className="text-2xl font-semibold text-brand-dark md:text-3xl">
                From raw resumes to confident hiring decisions
              </h2>
              <p className="mt-3 text-sm text-slate-600 md:text-base">
                Three simple steps — powered by SmartScreen&apos;s AI engine and
                workflow agent.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              {[
                {
                  step: "Step 1",
                  title: "Upload JDs & resumes",
                  desc: "Import job descriptions and bulk resumes from your sources. SmartScreen parses skills, experience, and intent automatically.",
                },
                {
                  step: "Step 2",
                  title: "Match & shortlist with AI",
                  desc: "See fitment scores, skills overlap, and location preferences in one place — shortlist in minutes, not days.",
                },
                {
                  step: "Step 3",
                  title: "Run the hiring workflow",
                  desc: "Move candidates across stages, leave notes, and let the assistant answer “what happened on this role?” on demand.",
                },
              ].map((card, idx) => (
                <motion.div
                  key={card.title}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 0.4, delay: idx * 0.08 }}
                  className="relative overflow-hidden rounded-3xl border border-violet-100 bg-white/90 p-6 shadow-soft"
                >
                  <div className="mb-3 text-xs font-medium uppercase tracking-[0.18em] text-violet-600">
                    {card.step}
                  </div>
                  <h3 className="text-lg font-semibold text-brand-dark">
                    {card.title}
                  </h3>
                  <p className="mt-2 text-sm text-slate-600">{card.desc}</p>
                  <div className="pointer-events-none absolute -right-8 -bottom-8 h-24 w-24 rounded-full bg-gradient-to-tr from-brand-primary/15 to-brand-neon/10 blur-2xl" />
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* MID CTA */}
        <section className="border-y border-violet-100 bg-gradient-to-r from-brand-primaryLight via-brand-neon to-brand-accent py-14">
          <div className="container flex flex-col items-center justify-between gap-6 text-center text-white md:flex-row md:text-left">
            <div className="space-y-2">
              <h2 className="text-2xl font-semibold md:text-3xl">
                Stop wrestling with spreadsheets and scattered tools.
              </h2>
              <p className="max-w-xl text-sm text-violet-100/95 md:text-base">
                Give your hiring team one place to run jobs, candidates, and
                decisions — with an AI assistant that actually understands your
                data.
              </p>
            </div>
            <button className="relative overflow-hidden rounded-full bg-white px-6 py-2.5 text-sm font-semibold text-brand-primary shadow-soft hover:bg-violet-50">
              <span className="relative z-10">
                Join the early access list
              </span>
              <span className="pointer-events-none absolute inset-0 overflow-hidden rounded-full">
                <span className="animate-sheen absolute inset-y-0 w-1/2 bg-gradient-to-r from-brand-primary/0 via-brand-primary/20 to-brand-primary/0" />
              </span>
            </button>
          </div>
        </section>

        {/* USE CASES */}
        <section className="bg-white py-16 md:py-20">
          <div className="container space-y-10">
            <div className="text-center">
              <h2 className="text-2xl font-semibold text-brand-dark md:text-3xl">
                Built for real hiring teams, not just “applicants”.
              </h2>
              <p className="mt-3 text-sm text-slate-600 md:text-base">
                HR, recruiters, consulting firms, and hiring managers all get
                what they need — without fighting the tool.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              {[
                {
                  title: "HR & talent leaders",
                  desc: "Get a live view of every role, pipeline, and stakeholder in one place. No more chasing updates on WhatsApp.",
                },
                {
                  title: "Recruiters",
                  desc: "Upload hundreds of resumes, auto-tag by skills and location, and shortlist with AI fitment instead of manual filtering.",
                },
                {
                  title: "Consulting & staffing firms",
                  desc: "Serve multiple clients from one workspace with clean separation — and find relevant candidates across all mandates instantly.",
                },
                {
                  title: "Hiring managers",
                  desc: "See only the best-fit candidates, plus a clear view of why they match. Give feedback in one place, not across 10 threads.",
                },
              ].map((card) => (
                <motion.div
                  key={card.title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.35 }}
                  className="relative overflow-hidden rounded-3xl border border-violet-100 bg-violet-50/60 p-5"
                >
                  <div className="absolute -top-10 -right-10 h-24 w-24 rounded-full bg-gradient-to-br from-brand-neon/25 to-brand-accent/20 blur-2xl" />
                  <div className="relative space-y-2">
                    <h3 className="text-base font-semibold text-brand-dark">
                      {card.title}
                    </h3>
                    <p className="text-sm text-slate-700">{card.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="border-t border-violet-100 bg-white py-10 text-sm text-slate-500">
          <div className="container flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div className="space-y-1">
              <div className="text-sm font-semibold text-brand-dark">
                SmartScreen.ai
              </div>
              <div className="text-xs text-slate-500">
                The AI-powered recruitment operating system.
              </div>
            </div>
            <div className="flex flex-wrap gap-4 text-xs text-slate-500">
              <button>Product</button>
              <button>Pricing</button>
              <button>About</button>
              <button>Contact</button>
              <button>Privacy</button>
              <button>Terms</button>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
};

export default App;
