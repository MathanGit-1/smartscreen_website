// src/pages/JobManagementPage.tsx
import React from "react";
import { motion } from "framer-motion";
// TODO: point this to your actual job list or create-job screenshot
import jobManagementHeroImage from "../screenshots/job-management-hero.png"; // TODO: point to your actual illustration

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

const stagger = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.14 },
  },
};

const JobManagementPage: React.FC = () => {
  const scrollToEarlyAccess = () => {
    document.getElementById("early-access")?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#f4ecff] via-[#faf5ff] to-[#fdf8ff] text-slate-900">
      {/* HERO – dark cinematic band for Job Management */}
      <section className="relative overflow-hidden border-b border-violet-900/40 bg-[radial-gradient(circle_at_top,_#7e22ce_0,_#050818_55%)] pb-16 pt-16 md:pb-20 md:pt-20">
        {/* subtle side glow only (no top band) */}
        <div className="pointer-events-none absolute -right-[18%] bottom-[-20%] h-80 w-80 rounded-full bg-[radial-gradient(circle_at_center,_rgba(56,189,248,0.4),transparent_60%)] blur-3xl" />

        <div className="relative mx-auto flex max-w-6xl flex-col gap-12 px-4 md:flex-row md:items-center lg:px-0">
          {/* LEFT: concise copy */}
          <motion.div
            className="md:w-[50%]"
            variants={stagger}
            initial="hidden"
            animate="visible"
          >
            <motion.div
              variants={fadeUp}
              className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-[11px] font-medium text-violet-100 shadow-sm ring-1 ring-violet-400/50 backdrop-blur"
            >
              <span className="inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400" />
              SmartScreen modules
              <span className="text-violet-200/80">· Job management</span>
            </motion.div>

            <motion.h1
              variants={fadeUp}
              className="mt-4 text-3xl font-semibold leading-tight text-slate-50 md:text-4xl"
            >
              Keep every job in one clean, AI-ready workspace.
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="mt-3 max-w-xl text-sm md:text-[15px] text-slate-200/90"
            >
              No more hunting through docs, sheets and chats. SmartScreen gives
              hiring teams a single place to create, review and track every open
              role — with the right fields filled in from day one.
            </motion.p>

            <motion.div
              variants={fadeUp}
              className="mt-6 flex flex-wrap items-center gap-3"
            >
              <button
                type="button"
                onClick={scrollToEarlyAccess}
                className="relative overflow-hidden rounded-full bg-gradient-to-r from-brand-primary via-brand-neon to-brand-accent px-6 py-2.5 text-sm font-semibold text-white shadow-soft"
              >
                <span className="relative z-10">Get early access</span>
                <span className="pointer-events-none absolute inset-0 overflow-hidden rounded-full">
                  <span className="animate-sheen absolute inset-y-0 w-1/2 bg-gradient-to-r from-white/0 via-white/40 to-white/0" />
                </span>
              </button>

              <button
                type="button"
                className="rounded-full border border-violet-400/70 bg-white/5 px-5 py-2.5 text-xs md:text-sm font-medium text-violet-100 shadow-sm hover:bg-white/10"
              >
                Watch 60s overview
              </button>
            </motion.div>

            <motion.ul
              variants={fadeUp}
              className="mt-5 space-y-2 text-xs md:text-sm text-slate-200/85"
            >
              <li className="flex items-start gap-2">
                <span className="mt-1 inline-block h-1.5 w-1.5 flex-none rounded-full bg-brand-accent" />
                AI parses JDs into structured fields — title, client, location,
                skills and more.
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 inline-block h-1.5 w-1.5 flex-none rounded-full bg-emerald-400" />
                Every job uses the same standard fields, so reports and search
                actually work.
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 inline-block h-1.5 w-1.5 flex-none rounded-full bg-sky-400" />
                Priority, openings and status are always visible on a single
                board.
              </li>
            </motion.ul>
          </motion.div>

          {/* RIGHT: illustration + floating chips */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="md:w-[50%]"
          >
            <div className="relative mx-auto max-w-md">
              {/* glass frame around illustration */}
              <div className="rounded-[28px] bg-white/8 p-[3px] shadow-soft ring-1 ring-violet-500/40 backdrop-blur">
                <div className="relative overflow-hidden rounded-[24px] bg-slate-900/80">
                  <img
                    src={jobManagementHeroImage}
                    alt="SmartScreen job management illustration"
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>

              {/* floating chip – JD pre-fill */}
              <div className="pointer-events-none absolute -left-10 top-10 hidden w-40 rounded-2xl bg-white/95 p-3 text-[11px] shadow-lg ring-1 ring-violet-100/80 backdrop-blur lg:block">
                <div className="mb-1 flex items-center gap-2">
                  <span className="flex h-5 w-5 items-center justify-center rounded-full bg-violet-600 text-[10px] text-white">
                    AI
                  </span>
                  <span className="font-semibold text-slate-900">
                    JD pre-fill
                  </span>
                </div>
                <p className="text-[10px] text-slate-600">
                  Drop a JD and SmartScreen fills job fields in seconds.
                </p>
              </div>

              {/* floating chip – clean structure */}
              <div className="pointer-events-none absolute -right-10 bottom-6 hidden w-40 rounded-2xl bg-white/95 p-3 text-[11px] shadow-lg ring-1 ring-emerald-100/80 backdrop-blur lg:block">
                <div className="mb-1 flex items-center gap-2">
                  <span className="flex h-4 w-4 items-center justify-center rounded-full bg-emerald-500 text-[9px] text-white">
                    ✓
                  </span>
                  <span className="font-semibold text-slate-900">
                    Clean structure
                  </span>
                </div>
                <p className="text-[10px] text-slate-600">
                  Title, client, location, department, skills &amp; openings in
                  one consistent format.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>



      {/* WHY TEAMS SWITCH + HOW IT WORKS */}
      <section className="relative border-b border-violet-100 bg-gradient-to-b from-[#f8f4ff] via-[#fbf7ff] to-white py-16 md:py-20">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-32 bg-[radial-gradient(circle_at_top,_rgba(129,140,248,0.25),transparent_60%)] opacity-80" />

        <div className="relative mx-auto flex max-w-6xl flex-col gap-12 px-4 lg:px-0">
          {/* Section heading */}
          <motion.div
            className="text-center"
            variants={stagger}
            initial="hidden"
            animate="visible"
          >
            <motion.h2
              variants={fadeUp}
              className="text-xs font-semibold uppercase tracking-[0.25em] text-violet-500"
            >
              Why teams switch to SmartScreen
            </motion.h2>
            <motion.p
              variants={fadeUp}
              className="mt-3 text-2xl font-semibold tracking-tight text-slate-900"
            >
              Job details move from scattered notes to one structured workspace.
            </motion.p>
          </motion.div>

          {/* 1) BEFORE / AFTER COMPARISON */}
          <motion.div
            className="grid gap-6 md:grid-cols-2"
            variants={stagger}
            initial="hidden"
            animate="visible"
          >
            {/* Before SmartScreen */}
            <motion.div
              variants={fadeUp}
              className="relative overflow-hidden rounded-3xl bg-white/90 p-6 text-sm shadow-soft ring-1 ring-rose-100"
            >
              <div className="mb-3 inline-flex items-center rounded-full bg-rose-50 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-rose-500">
                Before SmartScreen
              </div>
              <p className="mb-3 text-[13px] font-medium text-slate-900">
                Job details scattered, no single source of truth.
              </p>
              <ul className="space-y-1.5 text-[13px] text-slate-600">
                <li>• JDs live in email threads, Docs and shared folders.</li>
                <li>
                  • Recruiters track role status in private Excel sheets or
                  WhatsApp notes.
                </li>
                <li>• No consistent fields — every recruiter has their own format.</li>
              </ul>
            </motion.div>

            {/* With SmartScreen */}
            <motion.div
              variants={fadeUp}
              className="relative overflow-hidden rounded-3xl bg-white/95 p-6 text-sm shadow-soft ring-1 ring-emerald-100"
            >
              <div className="mb-3 inline-flex items-center rounded-full bg-emerald-50 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-emerald-600">
                With SmartScreen Job Management
              </div>
              <p className="mb-3 text-[13px] font-medium text-slate-900">
                Every role is structured, trackable and easy to search.
              </p>
              <ul className="space-y-1.5 text-[13px] text-slate-600">
                <li>
                  • All JDs sit in one AI-structured workspace with standard
                  fields.
                </li>
                <li>
                  • Priority, openings, target date & hiring manager captured
                  for every role.
                </li>
                <li>
                  • The Jobs board gives instant visibility into demand and
                  status.
                </li>
              </ul>
            </motion.div>
          </motion.div>

          {/* 2) MINI FLOW STRIP */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="mx-auto w-full max-w-3xl rounded-3xl bg-gradient-to-r from-violet-600/10 via-fuchsia-500/10 to-emerald-400/10 p-[1px] shadow-soft"
          >
            <div className="flex flex-col items-center justify-between gap-4 rounded-[22px] bg-white/90 px-5 py-4 text-[12px] text-slate-700 md:flex-row md:px-7">
              <div className="flex items-center gap-2">
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-violet-600 text-[13px] text-white">
                  📄
                </span>
                <span className="font-medium text-slate-900">Drop JD file</span>
              </div>
              <span className="hidden text-slate-400 md:inline">➜</span>

              <div className="flex items-center gap-2">
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-sky-500 text-[13px] text-white">
                  🤖
                </span>
                <span className="font-medium text-slate-900">AI parses &amp; maps fields</span>
              </div>
              <span className="hidden text-slate-400 md:inline">➜</span>

            <div className="flex items-center gap-2">
            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-emerald-500 text-[13px] text-white">
                🎯
            </span>
            <span className="font-medium text-slate-900">
                Ready for candidate matching
            </span>
            </div>
            </div>
          </motion.div>

          {/* 3) 4-STEP WORKFLOW */}
          <motion.div
            variants={stagger}
            initial="hidden"
            animate="visible"
            className="space-y-6"
          >
            <motion.div
              variants={fadeUp}
              className="text-center"
            >
              <h3 className="text-[13px] font-semibold uppercase tracking-[0.2em] text-violet-500">
                How Job Management works in SmartScreen
              </h3>
              <p className="mt-2 text-sm text-slate-600 md:text-[15px]">
                From a raw JD file to a clean, publish-ready role — with full
                visibility for your team.
              </p>
            </motion.div>

            <motion.div
              variants={fadeUp}
              className="grid gap-4 md:grid-cols-4"
            >
              {/* Step 1 */}
              <div className="group flex flex-col rounded-3xl bg-white/95 p-4 text-sm shadow-soft ring-1 ring-violet-100 transition-transform duration-200 hover:-translate-y-1 hover:shadow-lg">
                <div className="mb-3 inline-flex h-7 w-7 items-center justify-center rounded-full bg-violet-600 text-xs font-semibold text-white">
                  1
                </div>
                <h4 className="mb-1 text-[13px] font-semibold text-slate-900">
                  Drop the JD
                </h4>
                <p className="text-[12px] text-slate-600">
                  Upload a JD file or paste the description. SmartScreen
                  captures title, client, location and more.
                </p>
              </div>

              {/* Step 2 */}
              <div className="group flex flex-col rounded-3xl bg-white/95 p-4 text-sm shadow-soft ring-1 ring-violet-100 transition-transform duration-200 hover:-translate-y-1 hover:shadow-lg">
                <div className="mb-3 inline-flex h-7 w-7 items-center justify-center rounded-full bg-sky-500 text-xs font-semibold text-white">
                  2
                </div>
                <h4 className="mb-1 text-[13px] font-semibold text-slate-900">
                  AI pre-fills fields
                </h4>
                <p className="text-[12px] text-slate-600">
                  Job type, department, skills and tags auto-filled — you keep
                  full control before saving.
                </p>
              </div>

              {/* Step 3 */}
              <div className="group flex flex-col rounded-3xl bg-white/95 p-4 text-sm shadow-soft ring-1 ring-violet-100 transition-transform duration-200 hover:-translate-y-1 hover:shadow-lg">
                <div className="mb-3 inline-flex h-7 w-7 items-center justify-center rounded-full bg-amber-500 text-xs font-semibold text-white">
                  3
                </div>
                <h4 className="mb-1 text-[13px] font-semibold text-slate-900">
                  Set priority &amp; openings
                </h4>
                <p className="text-[12px] text-slate-600">
                  Mark how urgent the role is, how many openings you have, and
                  who owns the hiring.
                </p>
              </div>

                {/* Step 4 */}
                <div className="group flex flex-col rounded-3xl bg-white/95 p-4 text-sm shadow-soft ring-1 ring-violet-100 transition-transform duration-200 hover:-translate-y-1 hover:shadow-lg">
                <div className="mb-3 inline-flex h-7 w-7 items-center justify-center rounded-full bg-emerald-500 text-xs font-semibold text-white">
                    4
                </div>
                <h4 className="mb-1 text-[13px] font-semibold text-slate-900">
                    Ready for candidate matching
                </h4>
                <p className="text-[12px] text-slate-600">
                    Once the role is saved, SmartScreen prepares it instantly for AI-powered 
                    candidate matching — helping you shortlist faster.
                </p>
                </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* FEATURE GRID */}
      <section className="border-b border-violet-100 bg-gradient-to-b from-[#fdf8ff] via-white to-[#f2f4ff] py-16 md:py-20">
        <div className="mx-auto max-w-5xl px-4 lg:px-0">
          <h2 className="text-2xl font-semibold text-slate-900 md:text-3xl">
            Everything you need to run jobs properly.
          </h2>
          <p className="mt-3 max-w-2xl text-sm text-slate-600">
            SmartScreen is built for hiring, not generic project tracking. Job
            Management standardises how your team creates, reviews and tracks
            roles.
          </p>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {[
              {
                title: "AI-powered JD parsing",
                desc: "Drop a JD file and let SmartScreen extract role basics, client context and key responsibilities.",
                badge: "AI parsing",
              },
              {
                title: "Standardised fields",
                desc: "Title, client, office, department, work mode, industry, job type and more — captured the same way every time.",
                badge: "Consistency",
              },
              {
                title: "Skills & tags",
                desc: "Required skills can be typed or auto-suggested, making candidate matching much easier later.",
                badge: "Match-ready",
              },
              {
                title: "Priority & demand tracking",
                desc: "Highlight critical roles with high priority and keep an eye on openings per job.",
                badge: "Visibility",
              },
              {
                title: "Job templates",
                desc: "Save templates for recurring roles so you never start from a blank JD again.",
                badge: "Speed",
              },
              {
                title: "Audit-friendly history",
                desc: "Notes and changes stay with the job, so you can always see how a role evolved over time.",
                badge: "Traceability",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="group relative overflow-hidden rounded-3xl bg-white/90 p-[1px] shadow-soft ring-1 ring-violet-100/80 backdrop-blur"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/0 via-brand-neon/10 to-brand-accent/0 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <div className="relative h-full rounded-3xl bg-white/90 p-4">
                  <div className="mb-2 inline-flex items-center rounded-full bg-violet-50 px-2 py-0.5 text-[10px] font-medium text-violet-700">
                    {item.badge}
                  </div>
                  <h3 className="text-sm font-semibold text-slate-900">
                    {item.title}
                  </h3>
                  <p className="mt-1 text-[13px] text-slate-600">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-brand-primary via-brand-neon to-brand-accent py-12 text-white">
        <div className="mx-auto flex max-w-5xl flex-col items-center gap-8 px-4 md:flex-row md:items-center md:justify-between lg:px-0">
          <div className="md:max-w-xl">
            <h2 className="text-2xl font-semibold md:text-3xl">
              Bring all your jobs into one clean, AI-structured workspace.
            </h2>
            <p className="mt-3 text-sm text-white/90">
              Start with Job Management. Then plug in Candidates and
              Applications to let SmartScreen make the rest of your hiring
              workflow just as structured.
            </p>
          </div>

          <div className="flex flex-col items-center gap-3 md:items-end">
            <button
              type="button"
              onClick={scrollToEarlyAccess}
              className="relative overflow-hidden rounded-full bg-white px-6 py-2.5 text-sm font-semibold text-brand-primary shadow-soft"
            >
              <span className="relative z-10">Get early access</span>
              <span className="pointer-events-none absolute inset-0 overflow-hidden rounded-full">
                <span className="animate-sheen absolute inset-y-0 w-1/2 bg-gradient-to-r from-brand-primary/0 via-brand-primary/30 to-brand-primary/0" />
              </span>
            </button>
            <div className="rounded-full bg-white/10 px-3 py-1 text-[11px] text-white/90">
              We manually review every request — no spam, no generic blasts.
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default JobManagementPage;
