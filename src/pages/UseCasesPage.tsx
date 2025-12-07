// src/pages/UseCasesPage.tsx
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
    transition: {
      staggerChildren: 0.12,
    },
  },
};

type VisualVariant =
  | "hr-control"
  | "tech-skills"
  | "business-intuition"
  | "ta-dashboard"
  | "agency-graph";

interface UseCase {
  badge: string;
  tone: string;
  headline: string;
  problemPoints: string[];
  solutionPoints: string[];
  visual: VisualVariant;
}

const useCases: UseCase[] = [
  {
    badge: "HR Managers",
    tone: "Keep hiring under control",
    headline: "One live workspace for every role and its candidates.",
    problemPoints: [
      "Status scattered across Excel, email, and WhatsApp.",
      "Hard to see where each role is stuck.",
      "Too much time spent following up with recruiters & managers.",
    ],
    solutionPoints: [
      "Single workspace to see every open job and its shortlisted candidates.",
      "Stage-wise view of each candidate for every role, so you know who’s pending where.",
      "Clear fitment scores and statuses that cut down “what’s the latest?” follow-ups.",
    ],
    visual: "hr-control",
  },
  {
    badge: "Tech Recruiters",
    tone: "Shortlist real skills, not just keywords",
    headline: "From resume chaos to ranked, skill-verified shortlists.",
    problemPoints: [
      "Hundreds of similar-looking resumes per tech role.",
      "Risk of missing strong candidates hidden in the pile.",
      "Context-switching between job portals, folders, and sheets.",
    ],
    solutionPoints: [
      "AI parses every resume and tags real tech skills.",
      "Fitment scores for each candidate against each JD.",
      "Ranked shortlist with fitment scores and key skills shown side-by-side.",
    ],
    visual: "tech-skills",
  },
  {
    badge: "Non-Tech / Business Recruiters",
    tone: "Make intuition repeatable",
    headline: "From guesswork to clear, responsibility-based matches.",
    problemPoints: [
      "Overlap of roles like HRBP, Operations, and Generalist.",
      "Hard to explain why one profile is better than another.",
      "Managers ask for justification on every CV you share.",
    ],
    solutionPoints: [
      "AI reads responsibilities, domain, and role nature for each profile.",
      "Shows experience patterns that match each JD, beyond just keywords.",
      "Highlights overlapping responsibilities, industries, and seniority across profiles.",
    ],
    visual: "business-intuition",
  },
  {
    badge: "TA Heads & Founders",
    tone: "See hiring like a control room",
    headline: "All jobs, all stages, all candidates — one shared view.",
    problemPoints: [
      "No single snapshot of all live roles and pipelines.",
      "Difficult to measure recruiter performance fairly.",
      "Leadership updates take hours to compile before reviews.",
    ],
    solutionPoints: [
      "Consolidated view of all active roles, their stages, and top candidates.",
      "Filters by recruiter, client, and status so you can review pipelines without chasing updates.",
      "Shared live view you can open in reviews so everyone sees the same, up-to-date data.",
    ],
    visual: "ta-dashboard",
  },
  {
    badge: "Staffing / Agency Teams",
    tone: "Reuse talent across clients",
    headline: "From scattered candidate pools to one reusable talent space.",
    problemPoints: [
      "Same candidate fits multiple clients but data is scattered.",
      "Hard to track submissions, feedback, and TAT per client.",
      "Too much work rebuilding shortlists from scratch.",
    ],
    solutionPoints: [
      "Central candidate pool across all your client accounts.",
      "Tagging by client, role, seniority, and outcome.",
      "Easily resurface “almost selected” candidates when a similar role opens.",
    ],
    visual: "agency-graph",
  },
];

interface UseCaseVisualProps {
  variant: VisualVariant;
}

const UseCaseVisual: React.FC<UseCaseVisualProps> = ({ variant }) => {
  return (
    <div className="relative md:min-h-[230px]">
      {/* glow frame */}
      <div className="absolute -inset-3 rounded-[26px] bg-gradient-to-br from-fuchsia-500/14 via-violet-500/10 to-sky-500/14 blur-xl" />

      <div className="relative flex h-full flex-col gap-3 rounded-[22px] border border-violet-100 bg-gradient-to-br from-white via-[#f9f5ff] to-slate-50/80 p-4 shadow-inner shadow-violet-100/80">
        {/* window chrome */}
        <div className="mb-2 flex items-center justify-between gap-2">
          <div className="flex items-center gap-1.5">
            <span className="h-2 w-2 rounded-full bg-rose-300" />
            <span className="h-2 w-2 rounded-full bg-amber-300" />
            <span className="h-2 w-2 rounded-full bg-emerald-300" />
          </div>
          <div className="flex items-center gap-2 rounded-full bg-slate-900/90 px-2 py-1 text-[10px] text-slate-100 shadow-lg shadow-slate-900/40">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
            {variant === "ta-dashboard"
              ? "Org-wide view"
              : variant === "agency-graph"
              ? "Multi-client snapshot"
              : "Live pipeline snapshot"}
          </div>
        </div>

        {/* body changes per variant */}
        {variant === "hr-control" && (
          <div className="grid flex-1 gap-3 md:grid-cols-2">
            {/* left: assistant summary */}
            <div className="flex flex-col gap-2">
              <div className="rounded-xl border border-violet-100 bg-gradient-to-br from-slate-50 to-white px-3 py-2.5 text-[11px] shadow-sm">
                <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-violet-500">
                  Daily hiring summary
                </p>
                <ul className="mt-2 space-y-1.5 text-[10px] text-slate-600">
                  <li>• 7 roles moved stages today.</li>
                  <li>• 3 roles have no interviews booked.</li>
                  <li>• 2 offers pending approvals.</li>
                </ul>
              </div>
              <div className="flex flex-wrap gap-1.5 text-[10px]">
                <span className="rounded-full bg-violet-50 px-2 py-1 text-violet-700">
                  Role status
                </span>
                <span className="rounded-full bg-sky-50 px-2 py-1 text-sky-700">
                  Bottlenecks
                </span>
              </div>
            </div>

            {/* right: simple stage counts */}
            <div className="grid grid-cols-2 gap-2 text-[10px]">
              {[
                ["Applied", "42", "bg-slate-50"],
                ["Screening", "18", "bg-blue-50"],
                ["Interview", "9", "bg-amber-50"],
                ["Offer", "3", "bg-emerald-50"],
              ].map(([stage, count, bg]) => (
                <div
                  key={stage}
                  className={`rounded-lg border border-slate-100 ${bg} px-2 py-2`}
                >
                  <p className="text-[9px] text-slate-500">{stage}</p>
                  <p className="text-[13px] font-semibold text-slate-900">
                    {count}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        {variant === "tech-skills" && (
          <div className="grid flex-1 gap-3 md:grid-cols-2">
            {/* left: skills matrix */}
            <div className="rounded-xl border border-violet-100 bg-white/95 p-2.5 text-[10px] shadow-sm">
              <p className="mb-1 text-[10px] font-semibold text-slate-800">
                Skills vs candidates
              </p>
              <div className="space-y-1.5">
                {[
                  ["Senior Java Engineer", "Java", "Spring", "Microservices"],
                  ["Backend Engineer", "Node", "SQL", "REST"],
                ].map(([role, s1, s2, s3]) => (
                  <div
                    key={role}
                    className="rounded-lg bg-slate-50/80 px-2 py-1.5 ring-1 ring-slate-100"
                  >
                    <p className="truncate text-[10px] font-medium text-slate-800">
                      {role}
                    </p>
                    <div className="mt-1 flex flex-wrap gap-1">
                      {[s1, s2, s3].map((s) => (
                        <span
                          key={s}
                          className="rounded-full bg-violet-50 px-1.5 py-0.5 text-[9px] text-violet-700"
                        >
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* right: fitment bars */}
            <div className="flex flex-col gap-2">
              {["Arun K", "Divya R", "Sameer P"].map((name, i) => (
                <div
                  key={name}
                  className="rounded-lg bg-white/90 px-2 py-1.5 shadow-sm ring-1 ring-slate-100"
                >
                  <div className="flex items-center justify-between gap-2">
                    <span className="truncate text-[10px] text-slate-800">
                      {name}
                    </span>
                    <span className="text-[10px] text-slate-500">
                      {i === 0 ? "88% fit" : i === 1 ? "81% fit" : "73% fit"}
                    </span>
                  </div>
                  <div className="mt-1 h-1.5 overflow-hidden rounded-full bg-slate-100">
                    <div
                      className={`h-full rounded-full bg-gradient-to-r from-emerald-400 via-violet-500 to-sky-500 ${
                        i === 0 ? "w-[88%]" : i === 1 ? "w-[81%]" : "w-[73%]"
                      }`}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {variant === "business-intuition" && (
          <div className="grid flex-1 gap-3 md:grid-cols-2">
            {/* left: role story */}
            <div className="rounded-xl border border-amber-100 bg-gradient-to-br from-amber-50 to-white px-3 py-2.5 text-[10px]">
              <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-amber-600">
                Role narrative
              </p>
              <p className="mt-1 text-slate-700">
                “Looking for HRBP with exposure to fast-scaling teams, policy
                design, and stakeholder management.”
              </p>
              <ul className="mt-2 space-y-1.5 text-slate-600">
                <li>• 6 candidates match the narrative strongly.</li>
                <li>• 3 candidates have partial overlap.</li>
              </ul>
            </div>

            {/* right: candidate cards */}
            <div className="space-y-2 text-[10px]">
              {["Meera · HRBP", "Rahul · Ops Lead", "Kavya · HR Generalist"].map(
                (label, i) => (
                  <div
                    key={label}
                    className="rounded-lg bg-white px-2 py-1.5 shadow-sm ring-1 ring-slate-100"
                  >
                    <div className="flex items-center justify-between gap-2">
                      <span className="truncate text-[10px] text-slate-800">
                        {label}
                      </span>
                      <span className="rounded-full bg-emerald-50 px-1.5 py-0.5 text-[9px] text-emerald-700">
                        {i === 0 ? "Strong match" : i === 1 ? "Good fit" : "Maybe"}
                      </span>
                    </div>
                    <p className="mt-1 truncate text-[9px] text-slate-500">
                      {i === 0
                        ? "Policies · HRBP · Stakeholder mgmt"
                        : i === 1
                        ? "Ops · People mgmt · Shift planning"
                        : "Generalist · Payroll · Queries"}
                    </p>
                  </div>
                )
              )}
            </div>
          </div>
        )}

        {variant === "ta-dashboard" && (
          <div className="grid flex-1 gap-3 md:grid-cols-2">
            {/* left: metrics */}
            <div className="grid grid-cols-2 gap-2 text-[10px]">
              {[
                ["Open roles", "24"],
                ["This week hires", "5"],
                ["Avg days to fill", "22"],
                ["Drop-off rate", "9%"],
              ].map(([label, value]) => (
                <div
                  key={label}
                  className="rounded-lg border border-violet-100 bg-white/95 px-2 py-2 shadow-sm"
                >
                  <p className="text-[9px] text-slate-500">{label}</p>
                  <p className="text-[13px] font-semibold text-slate-900">
                    {value}
                  </p>
                </div>
              ))}
            </div>

            {/* right: mini trend chart */}
            <div className="flex flex-col justify-between rounded-xl border border-slate-100 bg-slate-50/70 px-3 py-2.5 text-[10px]">
              <p className="mb-1 text-[10px] font-semibold text-slate-8
00">
                Weekly pipeline health
              </p>
              <div className="mt-1 flex h-14 items-end gap-1.5">
                {[40, 55, 45, 70, 65].map((h, i) => (
                  <div key={i} className="flex-1 rounded-full bg-slate-200">
                    <div
                      style={{ height: `${h}%` }}
                      className="w-full rounded-full bg-gradient-to-t from-violet-500 to-sky-400"
                    />
                  </div>
                ))}
              </div>
              <p className="mt-2 text-[9px] text-slate-500">
                Interviews and offers trending up vs last week.
              </p>
            </div>
          </div>
        )}

        {variant === "agency-graph" && (
          <div className="grid flex-1 gap-3 md:grid-cols-2">
            {/* left: client tiles */}
            <div className="grid grid-cols-2 gap-2 text-[10px]">
              {[
                ["Fintech Co", "12 active"],
                ["SaaS Startup", "7 active"],
                ["Manufacturing", "5 active"],
                ["Banking", "9 active"],
              ].map(([client, roles]) => (
                <div
                  key={client}
                  className="rounded-lg border border-slate-100 bg-white px-2 py-2 shadow-sm"
                >
                  <p className="truncate text-[10px] font-medium text-slate-8
00">
                    {client}
                  </p>
                  <p className="text-[9px] text-slate-500">{roles} roles</p>
                </div>
              ))}
            </div>

            {/* right: reusable talent chips */}
            <div className="rounded-xl border border-emerald-100 bg-gradient-to-br from-emerald-50 to-white px-3 py-2.5 text-[10px]">
              <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-emerald-700">
                Reusable talent
              </p>
              <div className="mt-2 flex flex-wrap gap-1.5">
                {[
                  "Senior Java – almost selected",
                  "HRBP – client shortlist",
                  "Data Analyst – 2nd round",
                  "Sales Lead – strong fit",
                ].map((label) => (
                  <span
                    key={label}
                    className="rounded-full bg-white/80 px-2 py-0.5 text-[9px] text-emerald-800 ring-1 ring-emerald-200"
                  >
                    {label}
                  </span>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

const UseCasesPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#faf5ff] via-white to-[#f5f0ff] text-slate-900">
      {/* HERO – dark premium gradient */}
      <section
        className="relative overflow-hidden border-b border-violet-900/40
        bg-[radial-gradient(circle_at_top_left,_#4c1d95_0%,_#1e1b4b_45%,_#0f172a_90%)]
        text-white"
      >
        {/* purple glow left */}
        <div className="pointer-events-none absolute -left-40 top-10 h-80 w-80 rounded-full bg-[radial-gradient(circle_at_center,_rgba(168,85,247,0.35),transparent_70%)] blur-3xl" />
        {/* blue glow right */}
        <div className="pointer-events-none absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-[radial-gradient(circle_at_center,_rgba(56,189,248,0.32),transparent_70%)] blur-3xl" />

        <div className="mx-auto flex min-h-[500px] max-w-4xl flex-col items-center justify-center px-4 py-16 text-center">
          <motion.div initial="hidden" animate="visible" variants={stagger}>
            {/* badge */}
            <motion.div
              variants={fadeUp}
              className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.18em] text-violet-200 backdrop-blur"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
              Designed for real hiring teams
            </motion.div>

            {/* heading */}
            <motion.h1
              variants={fadeUp}
              className="mt-4 text-[32px] font-semibold leading-tight text-white md:text-[38px]"
            >
              Use cases where{" "}
              <span className="bg-gradient-to-r from-fuchsia-300 via-violet-300 to-sky-300 bg-clip-text text-transparent">
                SmartScreen
              </span>{" "}
              feels like an unfair advantage.
            </motion.h1>

            {/* description */}
            <motion.p
              variants={fadeUp}
              className="mx-auto mt-3 max-w-2xl text-[15px] leading-relaxed text-violet-200"
            >
              Each scenario below maps directly to SmartScreen modules like Job
              Management, Candidate Intelligence, Applications, and our AI
              Assistant — so visitors can see exactly how it fits into their
              day-to-day hiring.
            </motion.p>

            {/* buttons */}
            <motion.div
              variants={fadeUp}
              className="mt-8 flex flex-wrap justify-center gap-4"
            >
              <button
                onClick={() => {
                  const el = document.getElementById("early-access");
                  if (el) el.scrollIntoView({ behavior: "smooth" });
                }}
                className="rounded-full bg-gradient-to-r from-fuchsia-500 via-violet-500 to-sky-500 px-6 py-2.5 text-sm font-semibold text-white shadow-lg shadow-fuchsia-500/40 hover:brightness-110"
              >
                Get early access
              </button>

              <button
                onClick={() => {
                  const el = document.getElementById("use-case-list");
                  if (el) el.scrollIntoView({ behavior: "smooth" });
                }}
                className="rounded-full border border-white/20 bg-white/10 px-5 py-2 text-xs font-medium text-violet-100 backdrop-blur hover:bg-white/20"
              >
                Browse all use cases
              </button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* USE CASES */}
      <section
        id="use-case-list"
        className="border-b border-violet-100 bg-gradient-to-b from-white via-[#faf5ff] to-[#f5f0ff] py-14 md:py-18"
      >
        <div className="mx-auto max-w-6xl px-4 lg:px-0">
          <div className="mb-8 flex flex-wrap items-center justify-between gap-3">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-violet-500">
                WHO IS IT FOR
              </p>
              <h2 className="mt-2 text-lg font-semibold text-slate-900 md:text-xl">
                Different teams, same SmartScreen workspace.
              </h2>
            </div>
            <p className="max-w-md text-xs text-slate-600 md:text-[13px]">
              Each of these examples connects directly to a SmartScreen module
              — Job Management, Candidate Intelligence, Applications, or Agency
              mode — so visitors can recognise their own workflow instantly.
            </p>
          </div>

          <div className="flex flex-col gap-10 md:gap-12">
            {useCases.map((uc, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <motion.div
                  key={uc.badge}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.25 }}
                  variants={stagger}
                  className="relative"
                >
                  {/* gradient frame */}
                  <div className="absolute inset-x-[-6px] top-4 bottom-[-6px] -z-10 rounded-[30px] bg-gradient-to-r from-fuchsia-500/12 via-violet-500/10 to-sky-500/12 blur-xl" />

                  <div className="relative grid items-stretch gap-8 rounded-[26px] bg-white/90 p-5 shadow-[0_22px_60px_rgba(15,23,42,0.16)] ring-1 ring-violet-100/80 backdrop-blur md:grid-cols-2 md:p-7">
                    {/* Text column */}
                    <motion.div
                      variants={fadeUp}
                      className={isEven ? "" : "md:order-2"}
                    >
                      <div className="inline-flex items-center gap-2 rounded-full bg-violet-50 px-3 py-1 text-[11px] font-medium text-violet-700">
                        <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                        {uc.badge}
                      </div>
                      <p className="mt-3 text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-500">
                        {uc.tone}
                      </p>
                      <h3 className="mt-1 text-[19px] font-semibold text-slate-900 md:text-[21px]">
                        {uc.headline}
                      </h3>

                      <div className="mt-4 grid gap-3 text-sm text-slate-700 md:grid-cols-2 md:gap-4">
                        <div className="rounded-2xl bg-gradient-to-br from-rose-50 to-rose-50/40 p-3.5 ring-1 ring-rose-100/70">
                          <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-rose-500">
                            Today&apos;s pain
                          </p>
                          <ul className="mt-2 space-y-1.5 text-xs leading-relaxed text-slate-700 md:text-[13px]">
                            {uc.problemPoints.map((p) => (
                              <li key={p} className="flex gap-2">
                                <span className="mt-[5px] h-1.5 w-1.5 flex-shrink-0 rounded-full bg-rose-400" />
                                <span>{p}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div className="rounded-2xl bg-gradient-to-br from-emerald-50 to-emerald-50/40 p-3.5 ring-1 ring-emerald-100/70">
                          <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-emerald-600">
                            With SmartScreen
                          </p>
                          <ul className="mt-2 space-y-1.5 text-xs leading-relaxed text-slate-700 md:text-[13px]">
                            {uc.solutionPoints.map((p) => (
                              <li key={p} className="flex gap-2">
                                <span className="mt-[5px] h-1.5 w-1.5 flex-shrink-0 rounded-full bg-emerald-500" />
                                <span>{p}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      <div className="mt-5 flex flex-wrap items-center gap-2 text-[11px] text-slate-500">
                        <span className="inline-flex items-center gap-1 rounded-full bg-slate-50 px-2.5 py-1">
                          <span className="h-1.5 w-1.5 rounded-full bg-violet-500" />
                          Built from existing SmartScreen features — no extra
                          setup.
                        </span>
                      </div>
                    </motion.div>

                    {/* Visual column – unique per use case */}
                    <motion.div
                      variants={fadeUp}
                      className={isEven ? "" : "md:order-1"}
                    >
                      <UseCaseVisual variant={uc.visual} />
                    </motion.div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FINAL CTA + EARLY ACCESS FORM */}
      <section className="bg-gradient-to-b from-[#f5f0ff] via-white to-white py-16 md:py-20">
        <div className="mx-auto max-w-4xl px-4 text-center lg:px-0">
          <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-violet-500">
            READY WHEN YOU ARE
          </p>
          <h2 className="mt-3 text-xl font-semibold text-slate-900 md:text-[24px]">
            Turn these use cases into your daily hiring workflow.
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-slate-600 md:text-[15px]">
            SmartScreen is in early access with a small set of teams. Tell us a
            bit about your hiring setup, and we&apos;ll share a tailored demo
            that matches the use cases most relevant to you.
          </p>
        </div>

        <div id="early-access" className="mt-8">
          <GetEarlyAccessSection />
        </div>
      </section>
    </div>
  );
};

export default UseCasesPage;
