import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

type PreviewKey = 'jobs' | 'candidates' | 'video';
const PREVIEWS: PreviewKey[] = ['jobs', 'candidates', 'video'];

/* ----------------- Small preview components (bottom section) ----------------- */

const JobsPreview: React.FC = () => {
  const rows = [
    { title: 'Senior Java Engineer', loc: 'Chennai · Hybrid', apps: 42, fit: 91 },
    { title: 'Frontend Developer', loc: 'Remote · India', apps: 31, fit: 86 },
    { title: 'Talent Acquisition Lead', loc: 'Bangalore · Onsite', apps: 18, fit: 88 },
    { title: 'HR Business Partner', loc: 'Chennai · Hybrid', apps: 25, fit: 79 },
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

      <div className="mb-1 grid grid-cols-[1.5fr,1fr,0.7fr,0.7fr] gap-2 rounded-xl bg-slate-50 px-2 py-1 font-semibold text-[10px] text-slate-500">
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
            <span className="text-[10px] text-slate-600">{row.loc.split('·')[0]}</span>
            <span className="text-right text-[10px] text-slate-600">{row.apps}</span>
            <div className="flex items-center justify-end gap-1">
              <span className="text-[10px] font-medium text-emerald-700">{row.fit}%</span>
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
    { name: 'Priya R', role: 'Senior Java Engineer', loc: 'Chennai', fit: 94, stage: 'Shortlisted' },
    { name: 'Karthik S', role: 'Frontend Developer', loc: 'Remote', fit: 89, stage: 'Screening' },
    { name: 'Ananya M', role: 'TA Lead', loc: 'Bangalore', fit: 92, stage: 'Interviewing' },
    { name: 'Rahul D', role: 'HRBP', loc: 'Chennai', fit: 83, stage: 'On hold' },
  ];

  const stageColor: Record<string, string> = {
    Shortlisted: 'bg-emerald-50 text-emerald-700',
    Screening: 'bg-sky-50 text-sky-700',
    Interviewing: 'bg-violet-50 text-violet-700',
    'On hold': 'bg-amber-50 text-amber-700',
  };

  return (
    <div className="flex h-full w-full flex-col rounded-2xl bg-white/90 p-3 text-[11px] text-slate-600">
      <div className="mb-2 flex items-center justify-between">
        <span className="rounded-full bg-violet-50 px-2 py-1 text-[10px] font-medium text-violet-700">
          Candidate pool · 148
        </span>
        <span className="text-[10px] text-slate-500">Filters: Skills · Location · Status</span>
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
                  .split(' ')
                  .map((x) => x[0])
                  .join('')}
              </div>
              <div>
                <div className="text-[11px] font-medium text-brand-dark">{c.name}</div>
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
                <span className="text-[10px] font-medium text-emerald-700">{c.fit}% fit</span>
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

const App: React.FC = () => {
  const [activePreview, setActivePreview] = useState<PreviewKey>('jobs');

  // smoother dropdown behaviour
  const [isProductOpen, setIsProductOpen] = useState(false);
  const productHoverTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

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

  // Hero slideshow data – product site
  const heroSlides = [
    {
      label: 'Unified workspace',
      eyebrow: 'AI hiring copilot for HR & TA teams',
      titleMain: 'One AI workspace for jobs,',
      titleHighlight: 'candidates, and applications.',
      body: 'SmartScreen connects job descriptions, resumes, and application workflows into a single AI-powered system of record — so your team always knows what is happening on every role.',
    },
    {
      label: 'Shortlists in minutes',
      eyebrow: 'From raw resumes to shortlists',
      titleMain: 'Turn piles of CVs',
      titleHighlight: 'into ranked shortlists in minutes.',
      body: 'Upload JDs and bulk resumes, let SmartScreen parse skills and experience, and get ranked shortlists for every role — ready to share with hiring managers without manual filtering.',
    },
    {
      label: 'Assistant across data',
      eyebrow: 'AI assistant across your pipeline',
      titleMain: 'Give every recruiter',
      titleHighlight: 'an AI copilot that understands your data.',
      body: 'Ask questions like “who is the best fit for this role?” or “what changed on this job last week?” and get answers powered by live jobs, candidates, and applications — not static reports.',
    },
  ];

  const [heroIndex, setHeroIndex] = useState(0);
  const [heroDirection, setHeroDirection] = useState<1 | -1>(1);
  const currentHero = heroSlides[heroIndex];

  const previewLabelMap: Record<PreviewKey, string> = {
    jobs: 'Jobs & openings',
    candidates: 'Candidates & fitment',
    video: 'Workflow demo',
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

  /* Auto-advance HERO slides */
  useEffect(() => {
    const interval = setInterval(() => {
      setHeroDirection(1);
      setHeroIndex((idx) => (idx + 1) % heroSlides.length);
    }, 8000);
    return () => clearInterval(interval);
  }, [heroSlides.length]);

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
              <div className="text-sm font-semibold tracking-wide">SmartScreen</div>
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
              <button className="flex items-center gap-1 text-slate-700 font-medium hover:text-brand-dark">
                Product
                <span className="text-[10px] text-slate-500">▾</span>
              </button>

              <div
                className={`absolute left-0 top-full mt-2 w-72 rounded-2xl border border-violet-100 bg-white/95 p-4 shadow-lg transition-all ${
                  isProductOpen
                    ? 'opacity-100 translate-y-0 pointer-events-auto'
                    : 'opacity-0 translate-y-2 pointer-events-none'
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
                      <div className="font-medium text-brand-dark">Job management</div>
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
                      <div className="font-medium text-brand-dark">Candidate intelligence</div>
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
                      <div className="font-medium text-brand-dark">Applications & workflows</div>
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
                      <div className="font-medium text-brand-dark">AI assistant</div>
                      <div className="text-[11px] text-slate-500">
                        Ask anything about jobs, candidates, workflows.
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            <button className="text-slate-700 font-medium hover:text-brand-dark">Use cases</button>
            <button className="text-slate-700 font-medium hover:text-brand-dark">Pricing</button>
            <button className="text-slate-700 font-medium hover:text-brand-dark">Resources</button>
          </nav>

          {/* Right actions */}
          <div className="flex items-center gap-3">
            <button className="hidden text-sm text-slate-700 font-medium hover:text-brand-dark md:inline-flex">
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
        <section className="relative pt-16 pb-20 md:pt-24 md:pb-28 overflow-hidden">
          {/* Subtle background image inside hero */}
          <div
            className="pointer-events-none absolute inset-0 z-0 opacity-[0.12] mix-blend-soft-light"
            style={{
              backgroundImage:
                'url("https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=1600")',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
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

          <div className="container relative z-10 grid gap-12 md:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] md:items-center">
            {/* Hero text – sliding carousel */}
            <AnimatePresence mode="wait" custom={heroDirection}>
              <motion.div
                key={heroIndex}
                custom={heroDirection}
                variants={heroSlideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.45, ease: 'easeOut' }}
                className="space-y-8"
              >
                <div className="inline-flex items-center gap-2 rounded-full border border-violet-100 bg-white/70 px-3 py-1 text-[11px] font-medium text-violet-700 shadow-soft">
                  <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-gradient-to-tr from-brand-primary to-brand-neon text-[10px] text-white">
                    ●
                  </span>
                  <span className="uppercase tracking-[0.18em]">
                    {currentHero.eyebrow}
                  </span>
                  <span className="ml-2 rounded-full bg-violet-50 px-2 py-0.5 text-[10px] text-violet-600">
                    Slide {heroIndex + 1} of {heroSlides.length}
                  </span>
                </div>

                <h1 className="text-4xl font-semibold leading-tight tracking-tight text-brand-dark sm:text-5xl md:text-6xl">
                  {currentHero.titleMain}
                  <span className="block bg-gradient-to-r from-brand-primaryLight via-brand-neon to-brand-accent bg-clip-text text-transparent">
                    {currentHero.titleHighlight}
                  </span>
                </h1>

                <p className="max-w-xl text-base text-slate-700 sm:text-lg">
                  {currentHero.body}
                </p>

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

                {/* Slide tabs */}
                <div className="mt-3 flex flex-wrap items-center gap-2 text-xs">
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
                            ? 'border-brand-primary/40 bg-brand-primary/10 text-brand-primary'
                            : 'border-violet-100 bg-white/60 text-slate-500 hover:bg-white'
                        }`}
                      >
                        {slide.label}
                      </button>
                    );
                  })}
                </div>

                <div className="flex flex-wrap gap-4 text-xs text-slate-600">
                  <div className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                    AI JD parsing & skill extraction
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
                    Candidate search & fitment scores
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-pink-400" />
                    AI assistant across your data
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Hero mock UI card – no zoom */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: 'easeOut' }}
            >
              <div className="relative">
                <div className="absolute -top-10 -left-6 h-32 w-32 rounded-full bg-purple-300/60 blur-3xl animate-pulse-soft" />
                <div className="absolute -bottom-10 -right-4 h-24 w-24 rounded-full bg-pink-300/60 blur-3xl animate-pulse-soft" />

                <div className="gradient-border rounded-3xl">
                  <div className="relative rounded-3xl bg-white/90 p-4 shadow-soft backdrop-blur-xl">
                    {/* Top bar */}
                    <div className="mb-4 flex items-center justify-between">
                      <div className="flex items-center gap-2 text-xs text-slate-500">
                        <span className="h-2 w-2 rounded-full bg-emerald-400" />
                        Live roles · 27 open
                      </div>
                      <div className="flex gap-1.5">
                        <span className="h-1.5 w-8 rounded-full bg-violet-100" />
                        <span className="h-1.5 w-4 rounded-full bg-violet-200" />
                      </div>
                    </div>

                    {/* Fake grid */}
                    <div className="grid gap-4 md:grid-cols-[1.25fr_minmax(0,1fr)]">
                      {/* Jobs list */}
                      <div className="space-y-3">
                        {[
                          'Senior Java Engineer',
                          'HR Business Partner',
                          'Frontend Developer',
                          'Talent Acquisition Lead',
                        ].map((title, idx) => (
                          <div
                            key={title}
                            className="flex items-center justify-between rounded-2xl bg-violet-50/80 px-3 py-2.5 text-xs ring-1 ring-violet-100"
                          >
                            <div className="space-y-0.5">
                              <div className="font-medium text-brand-dark">{title}</div>
                              <div className="flex gap-2 text-[11px] text-slate-500">
                                <span>Chennai · Hybrid</span>
                                <span>5–8 yrs</span>
                              </div>
                            </div>
                            <div className="flex flex-col items-end gap-1">
                              <span className="rounded-full bg-emerald-100 px-2 py-0.5 text-[11px] text-emerald-700">
                                23 matched
                              </span>
                              <span className="text-[10px] text-slate-500">
                                Fitment: {(72 + idx * 6)}%
                              </span>
                            </div>
                          </div>
                        ))}
                      </div>

                      {/* Assistant mini panel */}
                      <div className="space-y-3 rounded-2xl border border-violet-100 bg-gradient-to-b from-white/95 to-violet-50/90 p-3">
                        <div className="flex items-center justify-between text-[11px] text-slate-500">
                          <span>SmartScreen Assistant</span>
                          <span className="inline-flex items-center gap-1 text-emerald-600">
                            ●
                            <span className="text-[10px]">Online</span>
                          </span>
                        </div>

                        <div className="space-y-2 text-[11px]">
                          <div className="rounded-xl bg-white/90 p-2.5 text-slate-700">
                            “Show me open senior roles in Chennai with hybrid work mode.”
                          </div>
                          <div className="rounded-xl bg-gradient-to-br from-brand-primary/10 via-brand-neon/10 to-brand-accent/10 p-2.5 text-brand-dark">
                            Found <span className="font-semibold">6 roles</span> matching:
                            <ul className="mt-1 list-disc pl-4 text-[10px] text-slate-700">
                              <li>Senior Java Engineer · 23 candidates</li>
                              <li>Frontend Developer · 18 candidates</li>
                              <li>Talent Acquisition Lead · 11 candidates</li>
                            </ul>
                          </div>
                        </div>

                        <div className="mt-1 flex items-center gap-1 rounded-full border border-violet-100 bg-white/80 px-2 py-1.5 text-[11px] text-slate-500">
                          <span className="text-slate-400">⊕</span>
                          Ask anything about jobs, candidates, or pipelines…
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* FEATURE CARDS */}
        <section className="border-t border-violet-100 bg-white/70 py-16 md:py-20">
          <div className="container space-y-10">
            <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
              <div>
                <h2 className="text-2xl font-semibold text-brand-dark md:text-3xl">
                  Jobs, candidates, applications —
                  <span className="bg-gradient-to-r from-brand-primaryLight via-brand-neon to-brand-accent bg-clip-text text-transparent">
                    {' '}
                    finally connected.
                  </span>
                </h2>
                <p className="mt-3 max-w-2xl text-sm text-slate-600 md:text-base">
                  SmartScreen gives hiring teams a single system of record — from JD creation
                  to offer rollout — with AI helping at every step.
                </p>
              </div>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              {[
                {
                  title: 'Job management',
                  chip: 'Start with better JDs',
                  points: [
                    'AI-powered JD parsing',
                    'Auto-extracted skills & tags',
                    'Priority & SLA tracking',
                  ],
                },
                {
                  title: 'Candidate intelligence',
                  chip: 'Know your pipeline',
                  points: [
                    'Bulk resume upload',
                    'Skills, locations, tags, status',
                    'Fitment scores in one view',
                  ],
                },
                {
                  title: 'Applications & workflows',
                  chip: 'From screen to offer',
                  points: [
                    'Custom stages per client',
                    'Notes & collaboration',
                    'Timeline you can search',
                  ],
                },
              ].map((card) => (
                <motion.div
                  key={card.title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 0.4 }}
                  className="relative overflow-hidden rounded-3xl border border-violet-100 bg-white/90 p-5 shadow-soft backdrop-blur-xl"
                >
                  <div className="absolute -right-10 -top-10 h-24 w-24 rounded-full bg-gradient-to-br from-brand-primary/15 to-brand-neon/10 blur-2xl" />
                  <div className="relative flex flex-col gap-4">
                    <span className="inline-flex w-fit rounded-full bg-violet-50 px-3 py-1 text-[11px] font-medium text-violet-700">
                      {card.chip}
                    </span>
                    <h3 className="text-lg font-semibold text-brand-dark">{card.title}</h3>
                    <ul className="space-y-2 text-sm text-slate-600">
                      {card.points.map((p) => (
                        <li key={p} className="flex gap-2">
                          <span className="mt-1 h-1.5 w-1.5 rounded-full bg-brand-accent" />
                          <span>{p}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
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
                  A rotating preview of how SmartScreen feels in real use — your jobs
                  board, candidate pool, and a quick workflow demo. You can later plug in
                  real screenshots or a Loom / MP4 of your app.
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
                    Workflow demo tab where you will later embed your real video.
                  </li>
                </ul>
              </div>

              {/* Media column */}
              <motion.div
                initial={{ opacity: 0, y: 24, scale: 0.98 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
                className="relative animate-float-slow"
              >
                {/* Glows */}
                <div className="absolute -left-10 -top-10 h-32 w-32 rounded-full bg-purple-300/40 blur-3xl" />
                <div className="absolute -right-10 -bottom-10 h-32 w-32 rounded-full bg-pink-300/40 blur-3xl" />

                {/* Glass card with browser chrome + carousel */}
                <div className="relative overflow-hidden rounded-3xl border border-white/60 bg-white/60 shadow-soft backdrop-blur-xl gradient-border">
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
                  <div className="flex flex-wrap gap-2 border-b border-violet-100/60 bg-white/40 px-4 pt-3 pb-2 text-xs">
                    {[
                      { key: 'jobs', label: 'Jobs board' },
                      { key: 'candidates', label: 'Candidates view' },
                      { key: 'video', label: 'Workflow demo' },
                    ].map((item) => (
                      <button
                        key={item.key}
                        onClick={() => setActivePreview(item.key as PreviewKey)}
                        className={`rounded-full px-3 py-1 font-medium transition ${
                          activePreview === item.key
                            ? 'bg-violet-600 text-white shadow-soft'
                            : 'bg-white/70 text-slate-600 hover:bg-violet-50'
                        }`}
                      >
                        {item.label}
                      </button>
                    ))}
                  </div>

                  {/* Media area */}
                  <div className="relative px-4 pb-4 pt-3">
                    <div className="relative aspect-video overflow-hidden rounded-2xl border border-violet-100 bg-gradient-to-br from-violet-50 via-white to-pink-50">
                      {activePreview === 'jobs' && <JobsPreview />}
                      {activePreview === 'candidates' && <CandidatesPreview />}
                      {activePreview === 'video' && (
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
                      {activePreview !== 'video' && (
                        <button
                          type="button"
                          onClick={() => setActivePreview('video')}
                          className="absolute inset-0 flex items-end justify-end bg-gradient-to-t from-black/15 via-black/0 to-transparent px-3 pb-3 text-[11px] text-white"
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
                Three simple steps — powered by SmartScreen&apos;s AI engine and workflow
                agent.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              {[
                {
                  step: 'Step 1',
                  title: 'Upload JDs & resumes',
                  desc: 'Import job descriptions and bulk resumes from your sources. SmartScreen parses skills, experience, and intent automatically.',
                },
                {
                  step: 'Step 2',
                  title: 'Match & shortlist with AI',
                  desc: 'See fitment scores, skills overlap, and location preferences in one place — shortlist in minutes, not days.',
                },
                {
                  step: 'Step 3',
                  title: 'Run the hiring workflow',
                  desc: 'Move candidates across stages, leave notes, and let the assistant answer “what happened on this role?” on demand.',
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
                  <h3 className="text-lg font-semibold text-brand-dark">{card.title}</h3>
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
                Give your hiring team one place to run jobs, candidates, and decisions —
                with an AI assistant that actually understands your data.
              </p>
            </div>
            <button className="relative overflow-hidden rounded-full bg-white px-6 py-2.5 text-sm font-semibold text-brand-primary shadow-soft hover:bg-violet-50">
              <span className="relative z-10">Join the early access list</span>
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
                HR, recruiters, consulting firms, and hiring managers all get what they
                need — without fighting the tool.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              {[
                {
                  title: 'HR & talent leaders',
                  desc: 'Get a live view of every role, pipeline, and stakeholder in one place. No more chasing updates on WhatsApp.',
                },
                {
                  title: 'Recruiters',
                  desc: 'Upload hundreds of resumes, auto-tag by skills and location, and shortlist with AI fitment instead of manual filtering.',
                },
                {
                  title: 'Consulting & staffing firms',
                  desc: 'Serve multiple clients from one workspace with clean separation — and find relevant candidates across all mandates instantly.',
                },
                {
                  title: 'Hiring managers',
                  desc: 'See only the best-fit candidates, plus a clear view of why they match. Give feedback in one place, not across 10 threads.',
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
                    <h3 className="text-base font-semibold text-brand-dark">{card.title}</h3>
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
              <div className="text-sm font-semibold text-brand-dark">SmartScreen.ai</div>
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
