// src/pages/AssistantPage.tsx
import React from "react";
import { motion } from "framer-motion";
import GetEarlyAccessSection from "../GetEarlyAccessSection";

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

const AssistantPage: React.FC = () => {
  const scrollToEarlyAccess = () => {
    document.getElementById("early-access")?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#f4ecff] via-[#faf5ff] to-[#fdf8ff] text-slate-900">
      {/* HERO – dark cinematic band for AI Assistant (same family as other modules) */}
      <section
        className="relative overflow-hidden border-b border-violet-900/40
                   bg-[radial-gradient(circle_at_top,_#7e22ce_0,_#050818_55%)]
                   pt-16 pb-16 md:pt-20 md:pb-20
                   md:min-h-[660px] lg:min-h-[720px]"
      >
        {/* soft side glows */}
        <div className="pointer-events-none absolute -left-[18%] bottom-[-20%] h-80 w-80 rounded-full bg-[radial-gradient(circle_at_center,_rgba(56,189,248,0.4),transparent_60%)] blur-3xl" />
        <div className="pointer-events-none absolute -right-[18%] top-[-18%] h-72 w-72 rounded-full bg-[radial-gradient(circle_at_center,_rgba(236,72,153,0.45),transparent_60%)] blur-3xl" />

        <div className="relative mx-auto flex max-w-6xl flex-col gap-12 px-4 md:flex-row md:items-center lg:px-0">
          {/* LEFT: copy + CTAs + question chips */}
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
              <span className="text-violet-200/80">· AI assistant</span>
            </motion.div>

            <motion.h1
              variants={fadeUp}
              className="mt-4 text-3xl font-semibold leading-tight text-slate-50 md:text-4xl"
            >
              Ask one assistant about{" "}
              <span className="text-brand-accent">every job, candidate</span>{" "}
              and application.
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="mt-3 max-w-xl text-sm md:text-[15px] text-slate-200/90"
            >
              SmartScreen Assistant sits on top of your actual hiring data — so
              instead of clicking through boards and filters, you can just ask
              questions and get answers with context.
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
                See sample conversations
              </button>
            </motion.div>

            {/* suggested questions – feel interactive without real chat */}
            <motion.div
              variants={fadeUp}
              className="mt-7 grid gap-2 text-[11px] md:text-[12px] text-slate-200/90 sm:grid-cols-2"
            >
              {[
                "Show all open Java roles in Chennai this week.",
                "Who are the best-fit candidates for the Senior QA role?",
                "Summarise feedback for the last two offers rolled out.",
                "Which JDs are waiting on hiring manager review?",
              ].map((q) => (
                <div
                  key={q}
                  className="flex items-center gap-2 rounded-2xl bg-white/5 px-3 py-2 shadow-sm ring-1 ring-white/10 backdrop-blur-sm"
                >
                  <span className="flex h-5 w-5 items-center justify-center rounded-full bg-violet-500/90 text-[10px] text-white">
                    ?
                  </span>
                  <span>{q}</span>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* RIGHT: ONLY the animated orb on hero panel (no card, no floating chips) */}
            <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="md:w-[50%] flex items-center justify-center md:justify-end"
            >
            <div className="relative h-[220px] w-[220px] md:h-[260px] md:w-[260px]">

                {/* soft breathing halo */}
                <motion.div
                className="assistant-blob-breathe"
                animate={{ opacity: [0.15, 0.32, 0.15], scale: [1, 1.05, 1] }}
                transition={{
                    duration: 7,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
                />

                {/* main blurred blob */}
                <motion.div
                className="assistant-blob"
                animate={{ opacity: [0.5, 0.7, 0.55], scale: [1, 1.03, 0.98, 1] }}
                transition={{
                    duration: 9,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
                />
            </div>
            </motion.div>


        </div>
      </section>

      {/* SECTION – WHAT CAN I ASK? (grouped by module) */}
      <section className="border-b border-violet-100 bg-white py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-4 lg:px-0">
          <motion.div
            className="text-center"
            variants={stagger}
            initial="hidden"
            animate="visible"
          >
            <motion.h2
              variants={fadeUp}
              className="text-sm font-semibold uppercase tracking-[0.25em] text-violet-500"
            >
              What the SmartScreen Assistant can answer
            </motion.h2>
            <motion.p
              variants={fadeUp}
              className="mt-3 text-2xl md:text-3xl font-semibold tracking-tight text-slate-900"
            >
              One place to ask about jobs, candidates and applications.
            </motion.p>
            <motion.p
              variants={fadeUp}
              className="mt-2 max-w-2xl mx-auto text-sm md:text-[15px] text-slate-600"
            >
              Instead of jumping between boards and filters, your team can just
              ask questions — the assistant fetches live data from SmartScreen,
              applies your rules, and get the response.
            </motion.p>
          </motion.div>

          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {[
              {
                label: "Jobs & demand",
                badge: "Jobs",
                color: "from-violet-500 to-brand-primary",
                examples: [
                  "“Show open Product Manager roles in Bangalore.”",
                  "“Which JDs are awaiting hiring manager review?”",
                  "“Summarise all open roles for Client A.”",
                ],
              },
              {
                label: "Candidates & pipelines",
                badge: "Candidates",
                color: "from-emerald-500 to-teal-500",
                examples: [
                  "“Best-fit candidates for Senior Java in Chennai?”",
                  "“Candidates tagged ‘Product companies’ + ‘Notice ≤ 30 days’.”",
                  "“Who did we interview for the last Data Engineer role?”",
                ],
              },
              {
                label: "Applications & status",
                badge: "Applications",
                color: "from-sky-500 to-fuchsia-500",
                examples: [
                  "“Where are we losing candidates in the funnel?”",
                  "“Show offers rolled out this month and their status.”",
                  "“Which interviews don’t have feedback yet?”",
                ],
              },
            ].map(({ label, badge, color, examples }) => (
              <div
                key={label}
                className="relative overflow-hidden rounded-3xl bg-white/90 p-[1px] shadow-soft ring-1 ring-violet-100/80 backdrop-blur"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/0 via-brand-neon/10 to-brand-accent/0 opacity-0 transition-opacity duration-300 hover:opacity-100" />
                <div className="relative h-full rounded-3xl bg-white/95 p-5">
                  <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-violet-50 px-3 py-0.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-violet-700">
                    <span
                      className={`inline-flex h-2 w-8 rounded-full bg-gradient-to-r ${color}`}
                    />
                    <span>{badge}</span>
                  </div>
                  <h3 className="text-[15px] md:text-base font-semibold text-slate-900">
                    {label}
                  </h3>
                  <ul className="mt-3 space-y-1.5 text-[13px] text-slate-600">
                    {examples.map((e) => (
                      <li key={e} className="flex items-start gap-2">
                        <span className="mt-1 inline-block h-1 w-1 rounded-full bg-slate-400" />
                        <span>{e}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION – HOW IT WORKS STRIP */}
      <section className="border-b border-violet-100 bg-gradient-to-b from-[#faf5ff] via-white to-[#f2f4ff] py-16 md:py-20">
        <div className="mx-auto max-w-5xl px-4 lg:px-0">
          <motion.div
            className="text-center"
            variants={stagger}
            initial="hidden"
            animate="visible"
          >
            <motion.h3
              variants={fadeUp}
              className="text-[13px] font-semibold uppercase tracking-[0.2em] text-violet-500"
            >
              How the assistant works behind the scenes
            </motion.h3>
            <motion.p
              variants={fadeUp}
              className="mt-2 text-sm md:text-[15px] text-slate-600"
            >
              Under the hood, SmartScreen Assistant uses your own data, strict
              permissions and tool-style actions — so answers stay relevant and
              safe for hiring.
            </motion.p>
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="mt-8 rounded-3xl bg-gradient-to-r from-violet-600/10 via-fuchsia-500/10 to-emerald-400/10 p-[1px] shadow-soft"
          >
            <div className="flex flex-col items-stretch gap-4 rounded-[22px] bg-white/95 px-5 py-5 text-[13px] text-slate-700 md:flex-row md:px-7 md:py-6">
              <div className="flex flex-1 items-start gap-3">
                <span className="mt-0.5 flex h-8 w-8 items-center justify-center rounded-full bg-violet-600 text-xs font-semibold text-white">
                  1
                </span>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-violet-600">
                    Understands the question
                  </p>
                  <p className="mt-1">
                    The assistant interprets the intent — like “open jobs in
                    Chennai” or “offers this month” — and figures out which
                    SmartScreen data it needs.
                  </p>
                </div>
              </div>

              <div className="hidden h-px w-full bg-gradient-to-r from-slate-200 via-slate-300 to-slate-200 md:block md:h-auto md:w-px" />

              <div className="flex flex-1 items-start gap-3">
                <span className="mt-0.5 flex h-8 w-8 items-center justify-center rounded-full bg-sky-500 text-xs font-semibold text-white">
                  2
                </span>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-sky-600">
                    Calls tools with permissions
                  </p>
                  <p className="mt-1">
                    It uses internal tools (like “list jobs”, “find candidates”
                    or “get applications”) that honour your client, role and
                    data-access rules.
                  </p>
                </div>
              </div>

              <div className="hidden h-px w-full bg-gradient-to-r from-slate-200 via-slate-300 to-slate-200 md:block md:h-auto md:w-px" />

              <div className="flex flex-1 items-start gap-3">
                <span className="mt-0.5 flex h-8 w-8 items-center justify-center rounded-full bg-emerald-500 text-xs font-semibold text-white">
                  3
                </span>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-emerald-600">
                    Returns clear, traceable answers
                  </p>
                  <p className="mt-1">
                    Results come back as conversational answers with links or
                    counts your team can verify — not vague “AI guesses”.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SECTION – FEATURE GRID */}
      <section className="border-b border-violet-100 bg-gradient-to-b from-[#fdf8ff] via-white to-[#f2f4ff] py-16 md:py-20">
        <div className="mx-auto max-w-5xl px-4 lg:px-0">
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-slate-900">
            An assistant designed for hiring teams, not generic chat.
          </h2>
          <p className="mt-3 max-w-2xl text-sm md:text-[15px] text-slate-600">
            SmartScreen Assistant is wired into your jobs, candidates and
            applications — with clear guardrails so teams can rely on every
            answer.
          </p>

          <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Deeply integrated with SmartScreen",
                desc: "Built on top of your existing Jobs, Candidates and Applications modules — no separate setup.",
                badge: "Connected",
              },
              {
                title: "Role & client aware",
                desc: "Managers, recruiters and viewers see answers only from the clients and data they have access to.",
                badge: "Permissions",
              },
              {
                title: "Explainable answers",
                desc: "Answers reference underlying jobs, candidates or applications — so you can click through and verify.",
                badge: "Trust",
              },
              {
                title: "Safe with internal data",
                desc: "Requests are routed through tools that respect your data boundaries instead of free-form browsing.",
                badge: "Safety",
              },
              {
                title: "Reusable prompts & shortcuts",
                desc: "Save common queries like “Weekly open roles summary” as one-click shortcuts for the team.",
                badge: "Speed",
              },
              {
                title: "Works beside or full-screen",
                desc: "Use the assistant as a floating helper inside modules, or in full-screen mode for deeper analysis.",
                badge: "Flexible UI",
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

      {/* CTA – same pattern as other modules */}
      <section className="bg-gradient-to-r from-brand-primary via-brand-neon to-brand-accent py-12 text-white">
        <div className="mx-auto flex max-w-5xl flex-col items-center gap-8 px-4 md:flex-row md:items-center md:justify-between lg:px-0">
          <div className="md:max-w-xl">
            <h2 className="text-2xl font-semibold md:text-3xl">
              Let your team ask questions instead of building reports.
            </h2>
            <p className="mt-3 text-sm text-white/90">
              Start with the SmartScreen Assistant on top of your existing
              modules, and give recruiters, managers and leaders a faster way to
              see what&apos;s really happening in hiring.
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

export default AssistantPage;
