// src/pages/ApplicationsPage.tsx
import React from "react";
import { motion } from "framer-motion";
import GetEarlyAccessSection from "../GetEarlyAccessSection";
// 🔹 TODO: point this to your actual Applications / pipeline screenshot
import applicationsHeroImage from "../screenshots/applications-hero.png";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const stagger = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.14 },
  },
};

const ApplicationsPage: React.FC = () => {
  const scrollToEarlyAccess = () => {
    document.getElementById("early-access")?.scrollIntoView({
      behavior: "smooth",
    });
  };

    const applicationStages = [
    {
        code: "APPLIED",
        label: "Applied",
        eyebrow: "Stage 1 · New application",
        summary:
        "A new candidate applies to a role or is added by the recruiter — they appear instantly on the applications board.",
        impact: "No more missed applications sitting in inboxes or spreadsheets.",
        icon: "📝",
        gradient: "from-violet-500 via-fuchsia-500 to-pink-500",
    },
    {
        code: "IN_REVIEW",
        label: "In review",
        eyebrow: "Stage 2 · In review",
        summary:
        "Recruiters and hiring managers review the profile, notes and fitment score in one place.",
        impact:
        "Everyone sees the same context — no parallel versions or scattered feedback.",
        icon: "👀",
        gradient: "from-sky-500 via-indigo-500 to-violet-500",
    },
    {
        code: "INTERVIEW",
        label: "Interview",
        eyebrow: "Stage 3 · Interviewing",
        summary:
        "Panels, rounds and feedback are logged against the same application timeline.",
        impact:
        "Panel feedback never lives in chats or screenshots — it stays attached to the candidate.",
        icon: "🎯",
        gradient: "from-cyan-500 via-sky-500 to-emerald-500",
    },
    {
        code: "OFFER",
        label: "Offer",
        eyebrow: "Stage 4 · Offer",
        summary:
        "Offer details, CTC, start date and negotiation notes sit on the same board column.",
        impact:
        "Offer status is visible to everyone — no more ‘Did we roll out the offer?’ messages.",
        icon: "📜",
        gradient: "from-amber-400 via-orange-500 to-rose-500",
    },
    {
        code: "HIRED",
        label: "Hired",
        eyebrow: "Stage 5 · Joined",
        summary:
        "Once the candidate accepts and joins, SmartScreen closes the loop with a clear hired trail.",
        impact:
        "Clean funnel analytics from applied → hired for every JD and client.",
        icon: "✨",
        gradient: "from-emerald-500 via-teal-500 to-sky-500",
    },
    {
        code: "REJECTED",
        label: "Rejected / Withdrawn",
        eyebrow: "Side path · Rejected / withdrawn",
        summary:
        "If a candidate is rejected or withdraws, the decision and reason are captured on the same timeline.",
        impact:
        "Future searches stay clean — you know who was tried for which role and why it didn’t move ahead.",
        icon: "⚪",
        gradient: "from-slate-400 via-slate-500 to-slate-600",
    },
    ];



  return (
    <div className="min-h-screen bg-gradient-to-b from-[#f4ecff] via-[#faf5ff] to-[#fdf8ff] text-slate-900">
      {/* HERO – same dark cinematic band as other feature pages */}
      <section
        className="relative overflow-hidden border-b border-violet-900/40
                   bg-[radial-gradient(circle_at_top,_#7e22ce_0,_#050818_55%)]
                   pt-16 pb-16 md:pt-20 md:pb-20
                   md:min-h-[660px] lg:min-h-[720px]"
      >
        {/* subtle side glow (mirrors Job / Candidate family) */}
        <div className="pointer-events-none absolute -left-[18%] bottom-[-20%] h-80 w-80 rounded-full bg-[radial-gradient(circle_at_center,_rgba(56,189,248,0.38),transparent_60%)] blur-3xl" />
        <div className="pointer-events-none absolute -right-[18%] top-[-18%] h-72 w-72 rounded-full bg-[radial-gradient(circle_at_center,_rgba(236,72,153,0.42),transparent_60%)] blur-3xl" />

        <div className="relative mx-auto flex max-w-6xl flex-col gap-12 px-4 md:flex-row md:items-center lg:px-0">
          {/* LEFT: illustration – kanban applications board */}
          <motion.div
            className="md:w-[50%]"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
          >
            <div className="relative mx-auto max-w-md">
              {/* glass frame */}
              <div className="rounded-[28px] bg-white/8 p-[3px] shadow-soft ring-1 ring-violet-500/40 backdrop-blur">
                <div className="relative overflow-hidden rounded-[24px] bg-slate-900/80">
                  <img
                    src={applicationsHeroImage}
                    alt="SmartScreen applications pipeline illustration"
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>

              {/* floating chip – stage movement */}
              <div className="pointer-events-none absolute -right-10 top-8 hidden w-44 rounded-2xl bg-white/95 p-3 text-[11px] shadow-lg ring-1 ring-violet-100/80 backdrop-blur lg:block">
                <div className="mb-1 flex items-center gap-2">
                  <span className="flex h-5 w-5 items-center justify-center rounded-full bg-violet-600 text-[10px] text-white">
                    ⇄
                  </span>
                  <span className="font-semibold text-slate-900">
                    Drag & move stages
                  </span>
                </div>
                <p className="text-[10px] text-slate-600">
                  Move candidates from New → Screened → Interview → Offer in
                  one board.
                </p>
              </div>

              {/* floating chip – fitment score */}
              <div className="pointer-events-none absolute -left-10 bottom-6 hidden w-40 rounded-2xl bg-white/95 p-3 text-[11px] shadow-lg ring-1 ring-emerald-100/80 backdrop-blur lg:block">
                <div className="mb-1 flex items-center gap-2">
                  <span className="flex h-4 w-4 items-center justify-center rounded-full bg-emerald-500 text-[9px] text-white">
                    87
                  </span>
                  <span className="font-semibold text-slate-900">
                    Fitment score
                  </span>
                </div>
                <p className="text-[10px] text-slate-600">
                  AI highlights which candidates to prioritise in each stage.
                </p>
              </div>
            </div>
          </motion.div>

          {/* RIGHT: concise copy */}
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
              <span className="text-violet-200/80">· Applications</span>
            </motion.div>

            <motion.h1
              variants={fadeUp}
              className="mt-4 text-3xl font-semibold leading-tight text-slate-50 md:text-4xl"
            >
              See every application move from{" "}
              <span className="text-brand-accent">New to Offer</span> in one
              clean board.
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="mt-3 max-w-xl text-sm md:text-[15px] text-slate-200/90"
            >
              SmartScreen turns scattered updates into a single view of all
              applications — with stages, fitment scores and feedback in one
              place, so hiring teams don’t chase status on email and chats.
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
                View sample pipeline
              </button>
            </motion.div>

            <motion.ul
              variants={fadeUp}
              className="mt-5 space-y-2 text-xs md:text-sm text-slate-200/85"
            >
              <li className="flex items-start gap-2">
                <span className="mt-1 inline-block h-1.5 w-1.5 flex-none rounded-full bg-brand-accent" />
                One board for all applications — grouped by stage, role or
                recruiter.
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 inline-block h-1.5 w-1.5 flex-none rounded-full bg-emerald-400" />
                AI fitment scores help teams prioritise who to move forward
                first.
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 inline-block h-1.5 w-1.5 flex-none rounded-full bg-sky-400" />
                Feedback, notes and status changes stay attached to each
                application.
              </li>
            </motion.ul>
          </motion.div>
        </div>
      </section>

{/* APPLICATIONS – ZIGZAG TIMELINE */}
<section className="relative border-t border-violet-100 bg-gradient-to-b from-[#f7f2ff] via-[#fbf6ff] to-[#fff7ff] py-16 md:py-24">
  <div className="mx-auto max-w-5xl px-4 lg:px-0">
    {/* Heading */}
    <div className="text-center">
      <p className="text-xs font-semibold tracking-[0.22em] text-brand-primary/80">
        LIVE APPLICATIONS JOURNEY
      </p>
      <h2 className="mt-3 text-2xl md:text-[28px] font-semibold text-slate-900">
        One clean timeline — from <span className="text-brand-primary">Applied</span> to{" "}
        <span className="text-brand-accent">Hired</span>.
      </h2>
      <p className="mx-auto mt-3 max-w-2xl text-sm md:text-[15px] leading-relaxed text-slate-600">
        Every application moves through the same, visible journey — so hiring teams always
        know who's where, what happened last, and what needs to move next.
      </p>
    </div>

    {/* ---------- MOBILE STACKED ---------- */}
    <div className="mt-10 space-y-8 md:hidden">
      {/* 1 */}
      <div className="flex gap-4">
        <div className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-full
                        bg-gradient-to-br from-brand-primary to-brand-accent text-[11px]
                        font-semibold tracking-[0.16em] text-white shadow-[0_10px_30px_rgba(88,28,135,0.35)]">
          1
        </div>
        <div className="flex-1 rounded-2xl bg-white/90 px-4 py-3 shadow-[0_16px_40px_rgba(15,23,42,0.08)]">
          <div className="flex items-start gap-3">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full
                            bg-gradient-to-br from-brand-primary to-brand-accent
                            shadow-[0_0_18px_rgba(120,48,255,0.45)] text-white">
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="3" y="4" width="18" height="14" rx="2" />
                <path d="M9 9l4 6 1-3 3-1-8-2z" />
              </svg>
            </div>
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-brand-primary/80">
                Stage 1 · Applied
              </p>
              <h3 className="mt-1 text-sm font-semibold text-slate-900">
                Applications land in one clean lane.
              </h3>
              <p className="mt-2 text-sm text-slate-600">
                Every new candidate is associated to the JD instantly — no more inbox
                hunting or spreadsheets to see who applied where.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* 2 */}
      <div className="flex gap-4">
        <div className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-full
                        bg-gradient-to-br from-emerald-500 to-teal-400 text-[11px]
                        font-semibold tracking-[0.16em] text-white shadow-[0_10px_30px_rgba(16,185,129,0.30)]">
          2
        </div>
        <div className="flex-1 rounded-2xl bg-white/90 px-4 py-3 shadow-[0_16px_40px_rgba(15,23,42,0.08)]">
          <div className="flex items-start gap-3">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full
                            bg-gradient-to-br from-emerald-500 to-teal-400
                            shadow-[0_0_18px_rgba(16,185,129,0.45)] text-white">
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="8" cy="9" r="3" /><circle cx="16" cy="9" r="3" />
                <path d="M4 18c0-3 2-5 4-5s4 2 4 5" />
                <path d="M12 18c0-3 2-5 4-5s4 2 4 5" />
              </svg>
            </div>
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-emerald-600/80">
                Stage 2 · In review
              </p>
              <h3 className="mt-1 text-sm font-semibold text-slate-900">
                Recruiter / hiring manager review in sync.
              </h3>
              <p className="mt-2 text-sm text-slate-600">
                Notes, fitment score and owner stay visible on the same timeline.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* 3 */}
      <div className="flex gap-4">
        <div className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-full
                        bg-gradient-to-br from-sky-500 to-indigo-500 text-[11px]
                        font-semibold tracking-[0.16em] text-white shadow-[0_10px_30px_rgba(56,189,248,0.30)]">
          3
        </div>
        <div className="flex-1 rounded-2xl bg-white/90 px-4 py-3 shadow-[0_16px_40px_rgba(15,23,42,0.08)]">
          <div className="flex items-start gap-3">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full
                            bg-gradient-to-br from-sky-500 to-indigo-500
                            shadow-[0_0_18px_rgba(56,189,248,0.45)] text-white">
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M4 6h16v9H9l-4 4v-4H4z" />
                <path d="M8 10h8" />
              </svg>
            </div>
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-sky-600/80">
                Stage 3 · Interview
              </p>
              <h3 className="mt-1 text-sm font-semibold text-slate-900">
                Panels, slots and feedback stay attached.
              </h3>
              <p className="mt-2 text-sm text-slate-600">
                No more scattered screenshots — every round stays in one place.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* 4 */}
      <div className="flex gap-4">
        <div className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-full
                        bg-gradient-to-br from-fuchsia-500 to-rose-500 text-[11px]
                        font-semibold tracking-[0.16em] text-white shadow-[0_10px_30px_rgba(236,72,153,0.30)]">
          4
        </div>
        <div className="flex-1 rounded-2xl bg-white/90 px-4 py-3 shadow-[0_16px_40px_rgba(15,23,42,0.08)]">
          <div className="flex items-start gap-3">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full
                            bg-gradient-to-br from-fuchsia-500 to-rose-500
                            shadow-[0_0_18px_rgba(236,72,153,0.45)] text-white">
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M7 4h8l4 4v12H7z" />
                <path d="M15 4v4h4" />
                <path d="M10 13h5M10 17h3" />
              </svg>
            </div>
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-pink-600/80">
                Stage 4 · Offer
              </p>
              <h3 className="mt-1 text-sm font-semibold text-slate-900">
                Offer, CTC and terms in one track.
              </h3>
              <p className="mt-2 text-sm text-slate-600">
                Negotiations and approvals stay together.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* 5 */}
      <div className="flex gap-4">
        <div className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-full
                        bg-gradient-to-br from-emerald-500 to-brand-primary text-[11px]
                        font-semibold tracking-[0.16em] text-white shadow-[0_10px_30px_rgba(16,185,129,0.32)]">
          5
        </div>
        <div className="flex-1 rounded-2xl bg-white/90 px-4 py-3 shadow-[0_16px_40px_rgba(15,23,42,0.08)]">
          <div className="flex items-start gap-3">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full
                            bg-gradient-to-br from-emerald-500 to-brand-primary
                            shadow-[0_0_18px_rgba(16,185,129,0.45)] text-white">
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="9" r="3.5" />
                <path d="M8 4h8l-1 4" />
                <path d="M8.5 14L9 20l3-2 3 2 .5-6" />
              </svg>
            </div>
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-emerald-600/80">
                Stage 5 · Hired
              </p>
              <h3 className="mt-1 text-sm font-semibold text-slate-900">
                Timeline closes the loop.
              </h3>
              <p className="mt-2 text-sm text-slate-600">
                Clean history ready for analytics and insights.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* 6 */}
      <div className="flex gap-4">
        <div className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-full
                        bg-gradient-to-br from-rose-500 to-slate-600 text-[11px]
                        font-semibold tracking-[0.16em] text-white shadow-[0_10px_30px_rgba(248,113,113,0.30)]">
          6
        </div>
        <div className="flex-1 rounded-2xl bg-white/90 px-4 py-3 shadow-[0_16px_40px_rgba(15,23,42,0.08)]">
          <div className="flex items-start gap-3">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full
                            bg-gradient-to-br from-rose-500 to-slate-600
                            shadow-[0_0_18px_rgba(248,113,113,0.45)] text-white">
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="7" />
                <path d="M9.5 9.5l5 5M14.5 9.5l-5 5" />
              </svg>
            </div>
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-rose-600/80">
                Rejected / Withdrawn
              </p>
              <h3 className="mt-1 text-sm font-semibold text-slate-900">
                Decisions stay visible.
              </h3>
              <p className="mt-2 text-sm text-slate-600">
                Reasons and context remain attached for future searches.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* ---------- DESKTOP ZIGZAG (WIDER CARDS, LOCKED ROUND ICONS) ---------- */}
    <div className="relative mt-16 hidden md:grid md:[grid-template-columns:1.15fr_auto_1.15fr] md:gap-x-12 md:gap-y-20">
      {/* vertical rail */}
      <div className="pointer-events-none absolute inset-y-0 left-1/2 -translate-x-1/2 border-l-2 border-dashed border-violet-200" />

      {/* Row 1 */}
      <div className="flex items-center justify-end">
        <div className="w-full max-w-md rounded-2xl bg-white/95 px-6 py-4 shadow-xl">
          <div className="flex items-center gap-4">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full aspect-square
                            bg-gradient-to-br from-brand-primary to-brand-accent
                            shadow-[0_0_18px_rgba(120,48,255,0.45)] text-white">
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="3" y="4" width="18" height="14" rx="2" />
                <path d="M9 9l4 6 1-3 3-1-8-2z" />
              </svg>
            </div>
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-brand-primary/80">
                Stage 1 · Applied
              </p>
              <h3 className="mt-1 text-sm font-semibold text-slate-900">
                Applications land in one clean lane.
              </h3>
              <p className="mt-2 text-sm text-slate-600">
                Every new candidate is associated to the JD instantly — no more inbox hunting or spreadsheets.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="relative flex items-center justify-center">
        <div className="relative">
          <div className="flex h-16 w-16 items-center justify-center rounded-full
                          bg-gradient-to-br from-brand-primary to-brand-accent
                          text-white font-semibold shadow-xl">
            1
          </div>
          <div className="absolute top-1/2 right-full w-12 -translate-y-1/2 border-t-2 border-dashed border-violet-200" />
        </div>
      </div>
      <div />

      {/* Row 2 */}
      <div />
      <div className="relative flex items-center justify-center">
        <div className="relative">
          <div className="flex h-16 w-16 items-center justify-center rounded-full
                          bg-gradient-to-br from-emerald-500 to-teal-400
                          text-white font-semibold shadow-xl">
            2
          </div>
          <div className="absolute top-1/2 left-full w-12 -translate-y-1/2 border-t-2 border-dashed border-emerald-200" />
        </div>
      </div>
      <div className="flex items-center justify-start">
        <div className="w-full max-w-md rounded-2xl bg-white/95 px-6 py-4 text-right shadow-xl">
          <div className="flex flex-row-reverse items-center gap-4">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full aspect-square
                            bg-gradient-to-br from-emerald-500 to-teal-400
                            shadow-[0_0_18px_rgba(16,185,129,0.45)] text-white">
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="8" cy="9" r="3" /><circle cx="16" cy="9" r="3" />
                <path d="M4 18c0-3 2-5 4-5s4 2 4 5" />
                <path d="M12 18c0-3 2-5 4-5s4 2 4 5" />
              </svg>
            </div>
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-emerald-600/80">
                Stage 2 · In review
              </p>
              <h3 className="mt-1 text-sm font-semibold text-slate-900">
                Recruiter / hiring manager review in sync.
              </h3>
              <p className="mt-2 text-sm text-slate-600">
                Notes, fitment score and owner stay visible on the same timeline.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Row 3 */}
      <div className="flex items-center justify-end">
        <div className="w-full max-w-md rounded-2xl bg-white/95 px-6 py-4 shadow-xl">
          <div className="flex items-center gap-4">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full aspect-square
                            bg-gradient-to-br from-sky-500 to-indigo-500
                            shadow-[0_0_18px_rgba(56,189,248,0.45)] text-white">
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M4 6h16v9H9l-4 4v-4H4z" />
                <path d="M8 10h8" />
              </svg>
            </div>
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-sky-600/80">
                Stage 3 · Interview
              </p>
              <h3 className="mt-1 text-sm font-semibold text-slate-900">
                Panels, slots and feedback stay attached.
              </h3>
              <p className="mt-2 text-sm text-slate-600">
                No more scattered screenshots — every round stays in one place.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="relative flex items-center justify-center">
        <div className="relative">
          <div className="flex h-16 w-16 items-center justify-center rounded-full
                          bg-gradient-to-br from-sky-500 to-indigo-500
                          text-white font-semibold shadow-xl">
            3
          </div>
          <div className="absolute top-1/2 right-full w-12 -translate-y-1/2 border-t-2 border-dashed border-sky-200" />
        </div>
      </div>
      <div />

      {/* Row 4 */}
      <div />
      <div className="relative flex items-center justify-center">
        <div className="relative">
          <div className="flex h-16 w-16 items-center justify-center rounded-full
                          bg-gradient-to-br from-fuchsia-500 to-rose-500
                          text-white font-semibold shadow-xl">
            4
          </div>
          <div className="absolute top-1/2 left-full w-12 -translate-y-1/2 border-t-2 border-dashed border-pink-200" />
        </div>
      </div>
      <div className="flex items-center justify-start">
        <div className="w-full max-w-md rounded-2xl bg-white/95 px-6 py-4 text-right shadow-xl">
          <div className="flex flex-row-reverse items-center gap-4">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full aspect-square
                            bg-gradient-to-br from-fuchsia-500 to-rose-500
                            shadow-[0_0_18px_rgba(236,72,153,0.45)] text-white">
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M7 4h8l4 4v12H7z" />
                <path d="M15 4v4h4" />
                <path d="M10 13h5M10 17h3" />
              </svg>
            </div>
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-pink-600/80">
                Stage 4 · Offer
              </p>
              <h3 className="mt-1 text-sm font-semibold text-slate-900">
                Offer, CTC and terms in one track.
              </h3>
              <p className="mt-2 text-sm text-slate-600">
                Negotiations and approvals stay together.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Row 5 */}
      <div className="flex items-center justify-end">
        <div className="w-full max-w-md rounded-2xl bg-white/95 px-6 py-4 shadow-xl">
          <div className="flex items-center gap-4">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full aspect-square
                            bg-gradient-to-br from-emerald-500 to-brand-primary
                            shadow-[0_0_18px_rgba(16,185,129,0.45)] text-white">
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="9" r="3.5" />
                <path d="M8 4h8l-1 4" />
                <path d="M8.5 14L9 20l3-2 3 2 .5-6" />
              </svg>
            </div>
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-emerald-600/80">
                Stage 5 · Hired
              </p>
              <h3 className="mt-1 text-sm font-semibold text-slate-900">
                Timeline closes the loop.
              </h3>
              <p className="mt-2 text-sm text-slate-600">
                Clean history ready for analytics and insights.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="relative flex items-center justify-center">
        <div className="relative">
          <div className="flex h-16 w-16 items-center justify-center rounded-full
                          bg-gradient-to-br from-emerald-500 to-brand-primary
                          text-white font-semibold shadow-xl">
            5
          </div>
          <div className="absolute top-1/2 right-full w-12 -translate-y-1/2 border-t-2 border-dashed border-emerald-200" />
        </div>
      </div>
      <div />

      {/* Row 6 */}
      <div />
      <div className="relative flex items-center justify-center">
        <div className="relative">
          <div className="flex h-16 w-16 items-center justify-center rounded-full
                          bg-gradient-to-br from-rose-500 to-slate-600
                          text-white font-semibold shadow-xl">
            6
          </div>
          <div className="absolute top-1/2 left-full w-12 -translate-y-1/2 border-t-2 border-dashed border-rose-200" />
        </div>
      </div>
      <div className="flex items-center justify-start">
        <div className="w-full max-w-md rounded-2xl bg-white/95 px-6 py-4 text-right shadow-xl">
          <div className="flex flex-row-reverse items-center gap-4">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full aspect-square
                            bg-gradient-to-br from-rose-500 to-slate-600
                            shadow-[0_0_18px_rgba(248,113,113,0.45)] text-white">
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="7" />
                <path d="M9.5 9.5l5 5M14.5 9.5l-5 5" />
              </svg>
            </div>
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-rose-600/80">
                Rejected / Withdrawn
              </p>
              <h3 className="mt-1 text-sm font-semibold text-slate-900">
                Decisions stay visible.
              </h3>
              <p className="mt-2 text-sm text-slate-600">
                Reasons and context remain attached for future searches.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* Footer */}
    <p className="mt-12 text-center text-[11px] text-slate-500">
      Every move — Applied → In review → Interview → Offer → Hired (or Rejected / Withdrawn) — sits on one live applications timeline.
    </p>
  </div>
</section>



      {/* STAGE-BASED WORKFLOW – UNIQUE LAYOUT */}
      <section className="border-b border-violet-100 bg-gradient-to-b from-[#fdf8ff] via-white to-[#f2f4ff] py-16 md:py-20">
        <div className="mx-auto max-w-5xl px-4 lg:px-0">
          <div className="text-center">
            <h3 className="text-[13px] font-semibold uppercase tracking-[0.2em] text-violet-500">
              How Applications work in SmartScreen
            </h3>
            <p className="mt-2 text-sm text-slate-600 md:text-[15px]">
              From a candidate showing interest to a signed offer — with every
              touchpoint captured on the same board.
            </p>
          </div>

          {/* Horizontal stage cards (different from Job workflow + Candidate rail) */}
          <div className="mt-8 grid gap-4 md:grid-cols-4">
            {[
              {
                step: "Stage 1",
                chipColor: "bg-violet-600",
                title: "New & In review",
                body: "All newly applied or sourced candidates land in one place with basic info and fitment preview.",
              },
              {
                step: "Stage 2",
                chipColor: "bg-sky-500",
                title: "Screened & shortlisted",
                body: "Recruiters log screening outcomes, notes and ratings — so you can quickly see who moves ahead.",
              },
              {
                step: "Stage 3",
                chipColor: "bg-amber-500",
                title: "Interviews & feedback",
                body: "Interview rounds, feedback and decisions stay attached to the application instead of scattered.",
              },
              {
                step: "Stage 4",
                chipColor: "bg-emerald-500",
                title: "Offer & closure",
                body: "Offer details, joining dates and closure reasons are captured cleanly for future analytics.",
              },
            ].map(({ step, chipColor, title, body }) => (
              <div
                key={title}
                className="group flex flex-col rounded-3xl bg-white/95 p-4 text-sm shadow-soft ring-1 ring-violet-100/80 transition-transform duration-200 hover:-translate-y-1 hover:shadow-lg"
              >
                <div
                  className={`mb-3 inline-flex h-7 w-7 items-center justify-center rounded-full text-xs font-semibold text-white ${chipColor}`}
                >
                  {step.split(" ")[1]}
                </div>
                <h4 className="mb-1 text-[14px] font-semibold text-slate-900">
                  {title}
                </h4>
                <p className="text-[13px] text-slate-600">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURE GRID – APPLICATIONS */}
      <section className="border-b border-violet-100 bg-gradient-to-b from-[#faf5ff] via-white to-[#f3f4ff] py-16 md:py-20">
        <div className="mx-auto max-w-5xl px-4 lg:px-0">
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-slate-900">
            Keep every application, stage and decision in one place.
          </h2>
          <p className="mt-3 max-w-2xl text-sm md:text-[15px] text-slate-600">
            The Applications module brings structure to how candidates move
            through your hiring funnel — and makes it easy to see what’s
            stuck, who’s waiting and where offers are slowing down.
          </p>

          <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Kanban-style applications board",
                desc: "Visualise candidates by stage for each role and drag them as they move through the funnel.",
                badge: "Pipeline view",
              },
              {
                title: "AI fitment scores in each stage",
                desc: "Let SmartScreen highlight the best-fit candidates so your team knows who to focus on first.",
                badge: "Prioritisation",
              },
              {
                title: "Centralised feedback & notes",
                desc: "Interview feedback, recruiter notes and hiring manager comments stay with each application.",
                badge: "Context",
              },
              {
                title: "Stage SLAs & bottleneck visibility",
                desc: "Spot where candidates are getting stuck — like long gaps between screening and interviews.",
                badge: "Insights",
              },
              {
                title: "Multi-role collaboration",
                desc: "Recruiters, coordinators and hiring managers all work from the same source of truth.",
                badge: "Teamwork",
              },
              {
                title: "Closure & analytics-ready data",
                desc: "Capture reasons for rejection or drop-off so future searches become smarter over time.",
                badge: "Learning loop",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="group relative overflow-hidden rounded-3xl bg-white/90 p-[1px] shadow-soft ring-1 ring-violet-100/80 backdrop-blur transition-transform duration-200 hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/0 via-brand-neon/12 to-brand-accent/0 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <div className="relative h-full rounded-3xl bg-white/95 p-5">
                  <div className="mb-3 inline-flex items-center rounded-full bg-violet-50 px-3 py-0.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-violet-700">
                    {item.badge}
                  </div>
                  <h3 className="text-[15px] md:text-base font-semibold text-slate-900">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-[13px] md:text-sm leading-relaxed text-slate-600">
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
              Give your team one live view of every application.
            </h2>
            <p className="mt-3 text-sm text-white/90">
              Start with Applications — then connect it with Job Management and
              Candidate Intelligence so SmartScreen can power your entire hiring
              funnel end-to-end.
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
              We onboard only a limited number of teams in each batch.
            </div>
          </div>
        </div>
      </section>

      {/* shared early access form */}
      <GetEarlyAccessSection />
    </div>
  );
};

export default ApplicationsPage;
