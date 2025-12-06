// src/pages/CandidateManagementPage.tsx
import React from "react";
import { motion } from "framer-motion";
import GetEarlyAccessSection from "../GetEarlyAccessSection";
// 🔹 Replace this with your actual image path
import candidateIntelligenceHero from "../screenshots/candidate-intelligence-hero.png";
import candidateLensIcon from "../screenshots/lens-icon.png";
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
const scrollToEarlyAccess = () => {
  const el = document.getElementById("early-access");
  if (el) {
    el.scrollIntoView({ behavior: "smooth" });
  }
};
const CandidateManagementPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      {/* HERO – dark cinematic band for Candidate Intelligence */}
      <section
        className="relative overflow-hidden border-b border-violet-900/40
                   bg-[radial-gradient(circle_at_top,_#7e22ce_0,_#050818_55%)]
                   pt-16 pb-16 md:pt-20 md:pb-20
                   md:min-h-[660px] lg:min-h-[720px]
                   md:flex md:items-center md:justify-center"
      >
        {/* shared side glow (same family as Job Management) */}
        <div className="pointer-events-none absolute -left-[18%] bottom-[-20%] h-80 w-80 rounded-full bg-[radial-gradient(circle_at_center,_rgba(56,189,248,0.35),transparent_60%)] blur-3xl" />

        {/* BACKGROUND MAGNIFY ICON — brighter + more glow */}
        <motion.img
        aria-hidden="true"
        src={candidateLensIcon}
        className="
            pointer-events-none absolute
            top-[18%]
            left-[12%]
            h-[620px] w-[620px]
            opacity-[0.32]               /* increased from 0.22 → more visible */
            brightness-200               /* increased from 150 */
            saturate-200                 /* richer colors */
            drop-shadow-[0_0_45px_rgba(236,72,153,0.35)]
            drop-shadow-[0_0_55px_rgba(56,189,248,0.25)]
            blur-[0px]                   /* removed blur so details appear clearer */
            mix-blend-screen
            select-none
        "
        animate={{ scale: [1, 1.04, 1] }}
        transition={{ duration: 14, repeat: Infinity, repeatType: 'reverse' }}
        />



                {/* CENTERED CONTENT */}
                <div className="relative mx-auto flex max-w-4xl flex-col items-center justify-center px-4 text-center lg:px-0">
                <motion.div
                    className="w-full"
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
                    <span className="text-violet-200/80">· Candidate intelligence</span>
                    </motion.div>

                    <motion.h1
                    variants={fadeUp}
                    className="mt-4 text-3xl font-semibold leading-tight text-slate-50 md:text-4xl"
                    >
                    Turn raw resumes into a living{" "}
                    <span className="text-brand-accent">talent graph.</span>
                    </motion.h1>

                    <motion.p
                    variants={fadeUp}
                    className="mt-3 text-sm md:text-[15px] text-slate-200/90"
                    >
                    SmartScreen auto-parses resumes, tags skills and experience, and
                    builds rich candidate profiles — so your team can search, shortlist
                    and reuse talent in seconds instead of starting from scratch for
                    every role.
                    </motion.p>

                    <motion.div
                    variants={fadeUp}
                    className="mt-6 flex flex-wrap items-center justify-center gap-3"
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
                        See how candidate search works
                    </button>
                    </motion.div>
                        <motion.ul
                        variants={fadeUp}
                        className="mt-6 w-full flex flex-col items-center"
                        >
                        <div className="w-full max-w-[520px] text-left space-y-2 text-white">
                            <li className="flex items-start gap-2">
                            <span className="mt-1 inline-block h-1.5 w-1.5 flex-none rounded-full bg-brand-accent" />
                            <span>Bulk upload resumes from job boards, email or folders.</span>
                            </li>

                            <li className="flex items-start gap-2">
                            <span className="mt-1 inline-block h-1.5 w-1.5 flex-none rounded-full bg-emerald-400" />
                            <span>AI normalises skills, titles and experience across formats.</span>
                            </li>

                            <li className="flex items-start gap-2">
                            <span className="mt-1 inline-block h-1.5 w-1.5 flex-none rounded-full bg-sky-400" />
                            <span>
                                Every candidate becomes searchable — by skills, tags, locations and past roles.
                            </span>
                            </li>
                        </div>
                        </motion.ul>
                </motion.div>
                </div>
            </section>
{/* VERTICAL STORY – FROM RESUME CHAOS TO TALENT GRAPH */}
<section className="relative border-b border-violet-100 bg-white py-24 md:py-28 lg:py-32">
  {/* background image + soft glows */}
  <div className="pointer-events-none absolute inset-0 -z-10">
    {/* soft global glow */}
    <div className="absolute inset-x-0 top-0 h-64 bg-[radial-gradient(circle_at_top,_rgba(129,140,248,0.22),transparent_65%)]" />
    <div className="absolute inset-x-0 bottom-0 h-64 bg-[radial-gradient(circle_at_bottom,_rgba(79,70,229,0.18),transparent_65%)]" />
    {/* candidate-intel network illustration (replace with your own file) */}
    <div className="absolute inset-0 bg-[url('/images/candidate-intel-network.svg')] bg-top bg-no-repeat bg-[length:1100px_auto] opacity-35" />
  </div>

  <div className="mx-auto flex max-w-5xl flex-col gap-14 px-4 lg:px-0">
    {/* -------------------------------- */}
    {/*            HEADING BLOCK         */}
    {/* -------------------------------- */}
    <div className="relative mx-auto max-w-3xl text-center">
      {/* pill label – darker chip */}
      <div className="inline-flex items-center justify-center rounded-full border border-violet-700/70 bg-violet-700 px-4 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-violet-50 shadow-sm shadow-violet-500/30">
        Candidate Intelligence · Workflow
      </div>

      <h2 className="mt-4 text-[11px] font-semibold uppercase tracking-[0.28em] text-violet-500">
        How SmartScreen sees every candidate
      </h2>

      <p className="mt-3 text-[22px] md:text-[26px] font-semibold tracking-tight text-slate-900">
        Resumes become rich profiles, then reusable talent pools.
      </p>

      <p className="mt-2 text-[13px] md:text-sm text-slate-600">
        From raw uploads to normalised, tagged and reusable candidate profiles — all in a single, searchable view.
      </p>
    </div>

    {/* -------------------------------- */}
    {/*         RAIL + STEPS BLOCK       */}
    {/* -------------------------------- */}
    <div className="relative mx-auto max-w-4xl">
      {/* rail line */}
      <div
        className="pointer-events-none absolute top-10 bottom-10 left-[28px] w-px
                   bg-gradient-to-b from-violet-400 via-cyan-400 to-emerald-400 opacity-90
                   md:left-[30px]"
      />

      {/* rail glow */}
      <div
        className="pointer-events-none absolute top-10 bottom-10 left-[26px] w-4 rounded-full
                   bg-gradient-to-b from-violet-500/10 via-cyan-400/10 to-emerald-400/10 blur-xl
                   md:left-[28px]"
      />

      {/* steps */}
      <div className="space-y-14 md:space-y-16">
        {[
          {
            id: 1,
            chipBg: "from-brand-primary to-brand-accent",
            glow: "shadow-[0_0_28px_rgba(124,58,237,0.55)]",
            pillColor: "from-violet-500 to-pink-500",
            eyebrow: "text-violet-600",
            eyebrowLabel: "Step 1 · Capture",
            cardRing: "ring-violet-100/80",
            title: "Ingest resumes from every channel.",
            body:
              "Upload PDFs, DOCX or ZIP files from job boards, agencies, referrals or email threads. SmartScreen keeps originals safe and centralises all candidate data instantly.",
          },
          {
            id: 2,
            chipBg: "from-cyan-400 to-sky-500",
            glow: "shadow-[0_0_28px_rgba(56,189,248,0.55)]",
            pillColor: "from-cyan-400 to-sky-500",
            eyebrow: "text-cyan-600",
            eyebrowLabel: "Step 2 · Normalise",
            cardRing: "ring-cyan-100/80",
            title: "AI turns messy resumes into structured profiles.",
            body:
              "Titles, skills, experience bands, locations and companies are standardised — so variations like “Sr Java Dev”, “Senior Software Engineer (Java)” and “Backend Engineer — Java” all map to the same meaning.",
          },
          {
            id: 3,
            chipBg: "from-emerald-400 to-teal-500",
            glow: "shadow-[0_0_28px_rgba(16,185,129,0.55)]",
            pillColor: "from-emerald-400 to-teal-500",
            eyebrow: "text-emerald-600",
            eyebrowLabel: "Step 3 · Enrich & Tag",
            cardRing: "ring-emerald-100/80",
            title: "AI enriches profiles with skills, tags and signals.",
            body:
              "Smart hints auto-suggest relevant skills, seniority, location, shift preferences and role-fit signals — helping you build reusable talent pools in seconds.",
          },
          {
            id: 4,
            chipBg: "from-amber-400 to-orange-500",
            glow: "shadow-[0_0_28px_rgba(245,158,11,0.55)]",
            pillColor: "from-amber-400 to-orange-500",
            eyebrow: "text-amber-600",
            eyebrowLabel: "Step 4 · Reuse & Shortlist",
            cardRing: "ring-amber-100/80",
            title: "Search once, reuse for every new role.",
            body:
              "When a JD arrives, SmartScreen immediately surfaces matching candidates using tags, history and fitment signals — so you never restart a search from zero.",
          },
        ].map(
          (
            {
              id,
              chipBg,
              glow,
              pillColor,
              eyebrow,
              eyebrowLabel,
              cardRing,
              title,
              body,
            },
            index,
          ) => (
            <div
              key={id}
              className="grid grid-cols-[70px,minmax(0,1fr)] items-center gap-12
                         md:grid-cols-[80px,minmax(0,1fr)] md:gap-16"
            >
              {/* LEFT – circles (keep colors) */}
              <div className="relative flex w-[56px] items-center justify-center md:w-[60px]">
                <div
                  className={`
                    flex h-9 w-9 items-center justify-center
                    rounded-full bg-gradient-to-br ${chipBg}
                    text-xs font-semibold text-white
                    ring-2 ring-white/40 ${glow}
                  `}
                >
                  {index + 1}
                </div>
              </div>

              {/* RIGHT – cards */}
              <div
                className={`
                  flex min-h-[150px] flex-col justify-center
                  rounded-3xl bg-gradient-to-br from-white to-slate-50
                  p-5 md:p-6 shadow-soft ${cardRing}
                  backdrop-blur-sm
                  transition-transform transition-shadow duration-300
                  hover:-translate-y-0.5 hover:shadow-lg
                `}
              >
                <div
                  className={`
                    mb-2 flex items-center gap-2 text-[11px]
                    font-semibold uppercase tracking-[0.18em] ${eyebrow}
                  `}
                >
                  <span
                    className={`
                      inline-flex h-1.5 w-8 rounded-full
                      bg-gradient-to-r ${pillColor} opacity-80
                    `}
                  />
                  <span>{eyebrowLabel}</span>
                </div>

                <h3 className="text-[16px] md:text-[18px] font-semibold text-slate-900">
                  {title}
                </h3>

                <p className="mt-2 text-[13px] md:text-[14px] leading-relaxed text-slate-600">
                  {body}
                </p>
              </div>
            </div>
          ),
        )}
      </div>
    </div>
  </div>
</section>


      {/* FEATURE GRID – CANDIDATE INTELLIGENCE */}
      <section className="border-b border-violet-100 bg-gradient-to-b from-[#faf5ff] via-white to-[#f3f4ff] py-16 md:py-20">
        <div className="mx-auto max-w-5xl px-4 lg:px-0">
          <h2 className="text-[22px] font-semibold text-slate-900 md:text-[26px]">
            All the intelligence your team needs on every candidate.
          </h2>
          <p className="mt-3 max-w-2xl text-[13px] text-slate-600 md:text-[14px]">
            Candidate Management in SmartScreen keeps profiles consistent across
            clients and roles — with deep search, tags, notes and history that
            your whole team can trust.
          </p>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {[
              {
                title: "Unified candidate profiles",
                desc: "One profile per candidate across roles, clients and recruiters — no duplicate records or lost context.",
                badge: "Single source of truth",
              },
              {
                title: "Skills & experience search",
                desc: "Filter by skills, years of experience, locations, notice period and work preferences in seconds.",
                badge: "Deep search",
              },
              {
                title: "Reusable talent pools",
                desc: "Group candidates into pools like ‘Java · Product companies · Chennai’ and reuse them for future roles.",
                badge: "Pipelines",
              },
              {
                title: "Interaction history",
                desc: "Track who spoke to the candidate, when, and what was discussed — right inside the profile.",
                badge: "Context",
              },
              {
                title: "Notes & internal feedback",
                desc: "Capture recruiter notes, concerns and hiring manager feedback without messy email threads.",
                badge: "Collaboration",
              },
              {
                title: "Compliance-friendly storage",
                desc: "Centralised profiles make it easier to manage data retention, consent and access across the team.",
                badge: "Control",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="group relative overflow-hidden rounded-3xl bg-white/90 p-[1px] shadow-soft ring-1 ring-violet-100/70 backdrop-blur"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/0 via-brand-neon/10 to-brand-accent/0 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <div className="relative h-full rounded-3xl bg-white/95 p-4 md:p-5">
                  <div className="mb-2 inline-flex items-center rounded-full bg-violet-50 px-2.5 py-0.5 text-[10px] font-medium text-violet-700">
                    {item.badge}
                  </div>
                  <h3 className="text-[14px] font-semibold text-slate-900">
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

      {/* CTA + SHARED EARLY ACCESS FORM */}
      <section className="border-b border-violet-200 bg-gradient-to-r from-brand-primary to-brand-accent py-10 text-center text-white">
        <div className="mx-auto flex max-w-4xl flex-col items-center gap-4 px-4">
          <h2 className="text-xl font-semibold md:text-2xl">
            Build a real talent graph instead of folders full of resumes.
          </h2>
          <p className="max-w-2xl text-[13px] text-white/90 md:text-[14px]">
            Start with Candidate Intelligence — then plug in Job Management and
            Applications to see the full hiring picture in one place.
          </p>
          <div className="flex flex-wrap items-center gap-3">
            <button
              onClick={() =>
                document
                  .getElementById("early-access")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="relative overflow-hidden rounded-full bg-white px-5 py-2 text-sm font-semibold text-brand-primary shadow-soft hover:bg-violet-50"
            >
              <span className="relative z-10">Get early access</span>
              <span className="pointer-events-none absolute inset-0 overflow-hidden rounded-full">
                <span className="animate-sheen absolute inset-y-0 w-1/2 bg-gradient-to-r from-brand-primary/0 via-brand-primary/25 to-brand-primary/0" />
              </span>
            </button>
            <div className="rounded-full bg-white/10 px-3 py-1 text-[11px] text-white/90">
              We only onboard a small number of teams in each batch.
            </div>
          </div>
        </div>
      </section>

      {/* shared early access form */}
      <GetEarlyAccessSection />
    </div>
  );
};

export default CandidateManagementPage;
