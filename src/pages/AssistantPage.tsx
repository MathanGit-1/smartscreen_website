// src/pages/AssistantPage.tsx
import React, { useState, useEffect } from "react";
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

const AnimatedAssistantConsole: React.FC = () => {
  const exchanges = [
    {
      question: "Show open Java developer roles in Chennai.",
      answer:
        "Here are 12 open Java roles in Chennai, sorted by priority and age.",
    },
    {
      question: "Which JDs are awaiting hiring manager review?",
      answer:
        "5 JDs are pending manager review — 3 for Client A and 2 for Client C.",
    },
    {
      question: "Best-fit candidates for Senior Java in Bangalore.",
      answer:
        "I found 18 candidates with 5+ years experience that match your Senior Java skills.",
    },
    {
      question: "Where are we losing candidates in the funnel?",
      answer:
        "Most drop-offs are after the technical round for Java and Data roles.",
    },
  ];

  const TYPING_SPEED = 35;
  const PAUSE_AFTER_QUESTION = 650;
  const PAUSE_AFTER_ANSWER = 1400;

  type Phase = "typingQuestion" | "typingAnswer";

  const [pairIndex, setPairIndex] = useState(0);
  const [phase, setPhase] = useState<Phase>("typingQuestion");

  const [typedInput, setTypedInput] = useState("");
  const [typedAnswer, setTypedAnswer] = useState("");

  type ChatMessage = { id: number; role: "user" | "assistant"; text: string };
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [messageId, setMessageId] = useState(0);

  useEffect(() => {
    const current = exchanges[pairIndex];
    let timeout: number | undefined;

    if (phase === "typingQuestion") {
      if (typedInput.length < current.question.length) {
        timeout = window.setTimeout(() => {
          setTypedInput(current.question.slice(0, typedInput.length + 1));
        }, TYPING_SPEED);
      } else {
        timeout = window.setTimeout(() => {
          setMessages((prev) => [
            ...prev,
            { id: messageId, role: "user", text: current.question },
          ]);
          setMessageId((id) => id + 1);
          setTypedInput("");
          setPhase("typingAnswer");
        }, PAUSE_AFTER_QUESTION);
      }
    } else if (phase === "typingAnswer") {
      if (typedAnswer.length < current.answer.length) {
        timeout = window.setTimeout(() => {
          setTypedAnswer(current.answer.slice(0, typedAnswer.length + 1));
        }, TYPING_SPEED);
      } else {
        timeout = window.setTimeout(() => {
          setMessages((prev) => [
            ...prev,
            { id: messageId, role: "assistant", text: current.answer },
          ]);
          setMessageId((id) => id + 1);
          setTypedAnswer("");

          setPairIndex((prevIndex) => {
            const nextIndex = (prevIndex + 1) % exchanges.length;
            if (nextIndex === 0) setMessages([]); // fresh loop
            return nextIndex;
          });

          setPhase("typingQuestion");
        }, PAUSE_AFTER_ANSWER);
      }
    }

    return () => {
      if (timeout) window.clearTimeout(timeout);
    };
  }, [phase, typedInput, typedAnswer, pairIndex, exchanges, messageId]);

  const Caret = () => (
    <span className="ml-[2px] inline-block h-[1.1em] w-[8px] translate-y-[2px] bg-slate-100/90 animate-pulse" />
  );

  return (
    <div className="mx-auto mt-8 max-w-3xl text-left">
      <div
        className="relative flex h-[450px] md:h-[500px] flex-col overflow-hidden
                   rounded-2xl border border-violet-500/40 bg-slate-950/95
                   px-5 pt-4 pb-4 md:pt-5 md:pb-5
                   shadow-xl shadow-violet-900/40 backdrop-blur"
      >
        {/* neon orb background layers */}
        <div
          className="pointer-events-none absolute -left-16 top-4 h-40 w-40 rounded-full
                     bg-[radial-gradient(circle_at_center,_rgba(129,140,248,0.35),transparent_60%)]
                     blur-3xl opacity-80"
        />
        <div
          className="pointer-events-none absolute right-0 top-16 h-44 w-44 rounded-full
                     bg-[radial-gradient(circle_at_center,_rgba(236,72,153,0.32),transparent_60%)]
                     blur-[42px] opacity-80"
        />
        <div
          className="pointer-events-none absolute -bottom-12 left-1/2 h-48 w-56 -translate-x-1/2 rounded-full
                     bg-[radial-gradient(circle_at_center,_rgba(45,212,191,0.28),transparent_65%)]
                     blur-[46px] opacity-90"
        />

        {/* content wrapper to sit above orbs */}
        <div className="relative z-10 flex h-full flex-col">
          {/* header */}
          <div className="mb-3 flex items-center justify-between text-[11px] font-medium uppercase tracking-[0.18em] text-slate-300/90">
            <span className="inline-flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
              SmartScreen assistant
            </span>
            <span className="hidden md:inline text-[10px] text-slate-400">
              Powered by your SmartScreen data
            </span>
          </div>

          {/* chat area */}
          <div className="flex flex-1 flex-col justify-end space-y-2.5 text-[13px] md:text-sm">
            {messages.map((msg) =>
              msg.role === "user" ? (
                <div key={msg.id} className="flex justify-end">
                  <div className="flex max-w-[82%] flex-row-reverse items-start gap-2">
                    <div className="mt-[2px] flex h-6 w-6 items-center justify-center rounded-full bg-slate-900/90 text-[11px] font-semibold text-slate-200">
                      U
                    </div>
                    <div className="rounded-2xl bg-slate-900/95 px-3 py-1.5 text-slate-50 shadow-sm ring-1 ring-slate-700/70">
                      {msg.text}
                    </div>
                  </div>
                </div>
              ) : (
                <div key={msg.id} className="flex justify-start">
                  <div className="flex max-w-[82%] items-start gap-2">
                    <div className="mt-[2px] flex h-6 w-6 items-center justify-center rounded-full bg-violet-600 text-[11px] font-semibold text-white">
                      AI
                    </div>
                    <div className="rounded-2xl bg-violet-600/20 px-3 py-1.5 text-slate-100 ring-1 ring-violet-500/60">
                      {msg.text}
                    </div>
                  </div>
                </div>
              )
            )}

            {/* live typing of assistant answer */}
            {phase === "typingAnswer" && typedAnswer && (
              <div className="flex justify-start">
                <div className="flex max-w-[82%] items-start gap-2">
                  <div className="mt-[2px] flex h-6 w-6 items-center justify-center rounded-full bg-violet-600 text-[11px] font-semibold text-white">
                    AI
                  </div>
                  <div className="rounded-2xl bg-violet-600/20 px-3 py-1.5 text-slate-100 ring-1 ring-violet-500/60">
                    <span className="text-slate-200">
                      {typedAnswer}
                      <Caret />
                    </span>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* input bar */}
          <div className="mt-4 flex items-center gap-3 rounded-full border border-slate-700/80 bg-slate-950/95 px-4 py-2.5 text-[13px] text-slate-200">
            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-slate-900 text-[16px] leading-none">
              +
            </span>
            <div className="flex-1 overflow-hidden text-ellipsis whitespace-nowrap">
              {phase === "typingQuestion" ? (
                <span className="text-slate-100">
                  {typedInput}
                  <Caret />
                </span>
              ) : (
                <span className="text-slate-400">
                  Ask anything about jobs, candidates or applications…
                </span>
              )}
            </div>
                {/* SEND ICON */}
                <button
                className="
                    flex h-8 w-8 items-center justify-center rounded-full
                    bg-gradient-to-br from-violet-500 to-fuchsia-600
                    shadow-md shadow-violet-700/40 transition-all
                    hover:scale-105 hover:shadow-lg hover:shadow-fuchsia-700/40
                "
                >
                <svg
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    strokeWidth={2}
                    stroke='white'
                    className='h-4 w-4 -translate-x-[1px]'
                >
                    <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M5 12h14M12 5l7 7-7 7'
                    />
                </svg>
                </button>
          </div>
        </div>
      </div>
    </div>
  );
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

          {/* RIGHT: animated assistant orb + floating user questions */}
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
                  ease: "easeInOut",
                }}
              />

              {/* main blurred blob */}
              <motion.div
                className="assistant-blob"
                animate={{
                  opacity: [0.5, 0.7, 0.55],
                  scale: [1, 1.03, 0.98, 1],
                }}
                transition={{
                  duration: 9,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />

              {/* floating chips */}
              {/* LEFT chip – slightly above centre */}
              <div
                className="pointer-events-none absolute top-[26%] -left-14 z-10
                           flex items-center gap-2 rounded-full bg-white/95
                           px-3 py-1 text-[11px] shadow-lg ring-1 ring-slate-200/80"
              >
                <span
                  className="flex h-5 w-5 items-center justify-center rounded-full
                             bg-gradient-to-br from-sky-500 via-indigo-500 to-brand-primary
                             text-[10px] text-white"
                >
                  💭
                </span>
                <span className="whitespace-nowrap text-slate-700">
                  Show me all the open jobs?
                </span>
              </div>

              {/* RIGHT chip – slightly below centre */}
              <div
                className="pointer-events-none absolute top-[60%] -right-16 z-10
                           flex items-center gap-2 rounded-full bg-white/95
                           px-3 py-1 text-[11px] shadow-lg ring-1 ring-slate-200/80"
              >
                <span
                  className="flex h-5 w-5 items-center justify-center rounded-full
                             bg-gradient-to-br from-sky-500 via-indigo-500 to-brand-primary
                             text-[10px] text-white"
                >
                  💭
                </span>
                <span className="whitespace-nowrap text-slate-700">
                  Show me Java jobs?
                </span>
              </div>

              {/* BOTTOM chip – centred */}
              <div
                className="pointer-events-none absolute -bottom-7 left-1/2 z-10
                           flex -translate-x-1/2 items-center gap-2 rounded-full
                           bg-white/95 px-3 py-1 text-[11px] shadow-lg
                           ring-1 ring-slate-200/80"
              >
                <span
                  className="flex h-5 w-5 items-center justify-center rounded-full
                             bg-gradient-to-br from-sky-500 via-indigo-500 to-brand-primary
                             text-[10px] text-white"
                >
                  💭
                </span>
                <span className="whitespace-nowrap text-slate-700">
                  How many open jobs available?
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SECTION – WHAT CAN I ASK? (animated console + action categories) */}
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
              applies your rules, and returns clear answers.
            </motion.p>

            {/* 🔹 animated chat console */}
            <motion.div variants={fadeUp}>
              <AnimatedAssistantConsole />
            </motion.div>
          </motion.div>

          {/* Category cards – Jobs / Candidates / Applications */}
          <div className="mt-10 grid gap-6 md:grid-cols-3">
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
                  "“Best-fit candidates for Senior Java in Chennai.”",
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
                className="relative overflow-hidden rounded-3xl bg-slate-950/5 p-[1px] shadow-[0_24px_70px_rgba(15,23,42,0.10)] ring-1 ring-violet-100/80"
              >
                {/* soft neon hover wash */}
                <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/0 via-brand-neon/12 to-brand-accent/0 opacity-0 transition-opacity duration-300 hover:opacity-100" />
                <div className="relative h-full rounded-3xl bg-white/95 p-5 backdrop-blur">
                  <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-violet-50 px-3 py-0.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-violet-700">
                    <span
                      className={`inline-flex h-2 w-8 rounded-full bg-gradient-to-r ${color}`}
                    />
                    <span>{badge}</span>
                    <span className="ml-1 inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  </div>

                  <h3 className="text-[15px] md:text-base font-semibold text-slate-900">
                    {label}
                  </h3>

                  <ul className="mt-3 space-y-1.5 text-[13px] text-slate-600">
                    {examples.map((e) => (
                      <li key={e} className="flex items-start gap-2">
                        <span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-slate-400" />
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
