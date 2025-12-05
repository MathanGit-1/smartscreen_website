/* src\pages\JobManagementPage.tsx */
import React from "react";
import { motion } from "framer-motion";
import heroJobsScreenshot from "../screenshots/hero-matching-candidates.png"; // change if you have a dedicated jobs image

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const stagger = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const JobManagementPage: React.FC = () => {
  const handleScrollToEarlyAccess = () => {
    const el = document.getElementById("early-access");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#f5f0ff] via-white to-[#faf5ff] text-slate-900">
      {/* HERO */}
      <section className="relative overflow-hidden border-b border-violet-100">
        {/* soft background glow */}
        <div className="pointer-events-none absolute inset-x-[-20%] top-[-25%] h-[260px] bg-[radial-gradient(circle_at_top,_rgba(124,58,237,0.25),transparent_60%)] opacity-90" />

        <div className="relative mx-auto flex max-w-6xl flex-col gap-12 px-4 pb-16 pt-20 md:flex-row md:items-center md:pb-24 md:pt-24 lg:px-0">
          {/* Left copy */}
          <motion.div
            className="md:w-1/2"
            variants={stagger}
            initial="hidden"
            animate="visible"
          >
            <motion.div
              variants={fadeUp}
              className="inline-flex items-center gap-2 rounded-full bg-white/80 px-3 py-1 text-xs font-medium text-brand-primary shadow-sm ring-1 ring-violet-100 backdrop-blur"
            >
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-emerald-400" />
              SmartScreen modules
              <span className="text-slate-500">· Job management</span>
            </motion.div>

            <motion.h1
              variants={fadeUp}
              className="mt-4 text-3xl font-semibold leading-tight text-slate-900 md:text-4xl lg:text-5xl"
            >
              Job management that doesn&apos;t live in Word docs and Excel
              sheets.
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="mt-4 max-w-xl text-sm md:text-base text-slate-600"
            >
              SmartScreen turns every job description into a clean,
              AI-structured role with skills, locations, tags, SLAs, and a live
              hiring pipeline — so your team always knows what&apos;s happening
              on each role.
            </motion.p>

            <motion.div
              variants={fadeUp}
              className="mt-6 flex flex-wrap items-center gap-3"
            >
              <button
                type="button"
                onClick={handleScrollToEarlyAccess}
                className="relative overflow-hidden rounded-full bg-gradient-to-r from-brand-primary via-brand-neon to-brand-accent px-6 py-2.5 text-sm font-semibold text-white shadow-soft"
              >
                <span className="relative z-10">Get early access</span>
                <span className="pointer-events-none absolute inset-0 overflow-hidden rounded-full">
                  <span className="animate-sheen absolute inset-y-0 w-1/2 bg-gradient-to-r from-white/0 via-white/35 to-white/0" />
                </span>
              </button>

              <button
                type="button"
                className="rounded-full border border-violet-200 bg-white/80 px-5 py-2.5 text-xs md:text-sm font-medium text-brand-primary shadow-sm hover:bg-violet-50"
              >
                Watch 60s overview
              </button>
            </motion.div>

            <motion.ul
              variants={fadeUp}
              className="mt-6 grid gap-2 text-xs md:text-sm text-slate-600"
            >
              <li className="flex items-start gap-2">
                <span className="mt-1 inline-block h-1.5 w-1.5 flex-none rounded-full bg-brand-accent" />
                AI-parsed JDs with auto-structured sections &amp; role metadata.
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 inline-block h-1.5 w-1.5 flex-none rounded-full bg-emerald-400" />
                Skills, locations, tags, priority &amp; SLA — all in one place.
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 inline-block h-1.5 w-1.5 flex-none rounded-full bg-sky-400" />
                Live pipeline view for each job — no more status hunting.
              </li>
            </motion.ul>
          </motion.div>

          {/* Right visual */}
          <motion.div
            className="md:w-1/2"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
          >
            <div className="relative mx-auto max-w-md">
              {/* glow */}
              <div className="pointer-events-none absolute inset-[-18%] rounded-[30px] bg-[radial-gradient(circle_at_top,_rgba(236,72,153,0.4),transparent_60%)] opacity-80 blur-2xl" />
              <div className="relative rounded-3xl bg-white/90 p-3 shadow-soft ring-1 ring-violet-100 backdrop-blur">
                <div className="rounded-2xl bg-slate-50 p-3">
                  <img
                    src={heroJobsScreenshot}
                    alt="SmartScreen job management preview"
                    className="w-full rounded-2xl border border-violet-100 shadow-md"
                  />
                </div>
                <div className="mt-3 grid grid-cols-3 gap-2 text-[10px] text-slate-600">
                  <div className="rounded-xl bg-violet-50 px-2 py-2">
                    <div className="text-[10px] font-semibold text-slate-800">
                      AI JD parsing
                    </div>
                    <div>Paste a JD, get a structured role in seconds.</div>
                  </div>
                  <div className="rounded-xl bg-emerald-50 px-2 py-2">
                    <div className="text-[10px] font-semibold text-slate-800">
                      Skills &amp; tags
                    </div>
                    <div>Auto-extracted skills, locations &amp; tags.</div>
                  </div>
                  <div className="rounded-xl bg-sky-50 px-2 py-2">
                    <div className="text-[10px] font-semibold text-slate-800">
                      Live pipeline
                    </div>
                    <div>Track status and SLA for each role.</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* PROBLEM → SOLUTION */}
      <section className="border-b border-violet-100 bg-white/70">
        <div className="mx-auto flex max-w-5xl flex-col gap-8 px-4 py-14 md:flex-row lg:px-0">
          <div className="md:w-1/2">
            <h2 className="text-sm font-semibold uppercase tracking-wide text-brand-primary">
              Before SmartScreen
            </h2>
            <p className="mt-2 text-lg font-semibold text-slate-900">
              Job details scattered everywhere, no single source of truth.
            </p>
            <ul className="mt-4 space-y-2 text-sm text-slate-600">
              <li>• JDs live in email threads, Docs and PDFs.</li>
              <li>• Recruiters track role status in private sheets.</li>
              <li>• No consistent view of priority or SLA per job.</li>
            </ul>
          </div>
          <div className="md:w-1/2">
            <h2 className="text-sm font-semibold uppercase tracking-wide text-emerald-600">
              With SmartScreen Job Management
            </h2>
            <p className="mt-2 text-lg font-semibold text-slate-900">
              Every role is structured, trackable, and easy to search.
            </p>
            <ul className="mt-4 space-y-2 text-sm text-slate-600">
              <li>• All JDs sit in one AI-structured workspace.</li>
              <li>• Priority, SLA, and hiring owner captured for every role.</li>
              <li>• Live pipeline view and history per job.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* 4-STEP FLOW */}
      <section className="border-b border-violet-100 bg-gradient-to-b from-[#f8f4ff] to-white">
        <div className="mx-auto max-w-5xl px-4 py-14 lg:px-0">
          <h2 className="text-center text-2xl font-semibold text-slate-900 md:text-3xl">
            How Job Management works in SmartScreen
          </h2>
          <p className="mt-3 text-center text-sm text-slate-600">
            From raw JD text to a live, trackable role in four simple steps.
          </p>

          <div className="mt-8 grid gap-4 md:grid-cols-4">
            {[
              {
                step: "1",
                title: "Capture the JD",
                desc: "Paste, upload, or type in the JD. SmartScreen parses title, level, location, and responsibilities.",
              },
              {
                step: "2",
                title: "Review structured role",
                desc: "Auto-extracted skills, locations, tags and must-haves. Tweak fields in a clean layout.",
              },
              {
                step: "3",
                title: "Set priority & SLA",
                desc: "Define priority, SLA, and hiring owner so everyone knows how urgent the role is.",
              },
              {
                step: "4",
                title: "Track with live pipeline",
                desc: "See candidates, stages, and status for each job in one view, with the assistant on top.",
              },
            ].map((item) => (
              <div
                key={item.step}
                className="flex flex-col rounded-2xl bg-white/90 p-4 shadow-sm ring-1 ring-violet-100"
              >
                <div className="flex items-center gap-2">
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-brand-primary text-xs font-semibold text-white">
                    {item.step}
                  </span>
                  <span className="text-sm font-semibold text-slate-900">
                    {item.title}
                  </span>
                </div>
                <p className="mt-2 text-xs md:text-sm text-slate-600">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURE GRID */}
      <section className="border-b border-violet-100 bg-white">
        <div className="mx-auto max-w-5xl px-4 py-14 lg:px-0">
          <h2 className="text-2xl font-semibold text-slate-900 md:text-3xl">
            Everything you need to run jobs properly.
          </h2>
          <p className="mt-3 max-w-2xl text-sm text-slate-600">
            SmartScreen is built for hiring teams, not generic project tools.
            Each job comes with the structure and context you actually need.
          </p>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {[
              {
                title: "AI-powered JD parsing",
                desc: "Paste or upload a JD and SmartScreen structures it into clean fields automatically.",
              },
              {
                title: "Skills, locations & tags",
                desc: "Auto-detected skills, locations and custom tags make every role searchable and match-ready.",
              },
              {
                title: "Priority & SLA per role",
                desc: "Mark jobs as critical, standard or backlog, with target fill timelines.",
              },
              {
                title: "Custom role templates",
                desc: "Save templates for recurring roles so your team never starts from scratch.",
              },
              {
                title: "Notes & collaboration",
                desc: "Attach notes, comments and feedback directly on the job record.",
              },
              {
                title: "Status & health at a glance",
                desc: "See ageing, pipeline health and next actions for each role from one board.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-2xl bg-slate-50 p-4 text-sm text-slate-700 ring-1 ring-slate-100"
              >
                <h3 className="text-sm font-semibold text-slate-900">
                  {item.title}
                </h3>
                <p className="mt-1 text-xs md:text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* OUTCOMES + CTA */}
      <section className="bg-gradient-to-r from-brand-primary via-brand-neon to-brand-accent py-12 text-white">
        <div className="mx-auto flex max-w-5xl flex-col items-center gap-8 px-4 text-center lg:px-0 md:flex-row md:text-left">
          <div className="md:w-2/3">
            <h2 className="text-2xl font-semibold md:text-3xl">
              Ready to bring all your jobs into one clean workspace?
            </h2>
            <p className="mt-3 text-sm text-white/90">
              Start with Job Management, then connect candidates, applications
              and the AI assistant — all inside SmartScreen.
            </p>
            <div className="mt-5 flex flex-wrap items-center justify-center gap-3 md:justify-start">
              <button
                type="button"
                onClick={handleScrollToEarlyAccess}
                className="relative overflow-hidden rounded-full bg-white px-6 py-2.5 text-sm font-semibold text-brand-primary shadow-soft"
              >
                <span className="relative z-10">Get early access</span>
              </button>
              <span className="text-xs text-white/80">
                No credit card. We review every request manually.
              </span>
            </div>
          </div>

          <div className="grid w-full gap-3 text-xs md:w-1/3">
            <div className="rounded-2xl bg-white/10 px-4 py-3">
              <div className="text-[11px] uppercase tracking-wide text-white/60">
                JD creation time
              </div>
              <div className="mt-1 text-lg font-semibold">3× faster</div>
              <div className="mt-1 text-white/80">
                JDs created from templates and parsed from existing docs.
              </div>
            </div>
            <div className="rounded-2xl bg-white/10 px-4 py-3">
              <div className="text-[11px] uppercase tracking-wide text-white/60">
                Visibility
              </div>
              <div className="mt-1 text-lg font-semibold">One source of truth</div>
              <div className="mt-1 text-white/80">
                Everyone sees the same status, SLA and owner per role.
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default JobManagementPage;
