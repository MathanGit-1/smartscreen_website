// src/pages/FaqPage.tsx
import React from "react";
import { motion } from "framer-motion";

type FaqItem = {
  question: string;
  answer: string[];
};

type FaqSection = {
  title: string;
  items: FaqItem[];
};

const faqSections: FaqSection[] = [
  {
    title: "Product & Fit",
    items: [
      {
        question: "What is SmartScreen in simple terms?",
        answer: [
          "SmartScreen is an AI-powered hiring copilot that helps you go from messy resumes and JDs to clear, ranked shortlists. It sits on top of your existing hiring process and gives you structure: parsed JDs, parsed resumes, fitment scores, and one place to review candidates role by role."
        ]
      },
      {
        question: "Is SmartScreen an ATS or a job portal?",
        answer: [
          "SmartScreen is not a job portal and not yet a full ATS. It doesn’t replace your career site or job boards. Instead, it focuses on the most painful part of hiring: turning JDs and resumes into usable shortlists, understanding who fits where, and keeping your pipelines organised without endless sheets and emails."
        ]
      },
      {
        question: "What problems does SmartScreen solve first?",
        answer: [
          "We focus on reducing screening chaos: too many resumes, unclear fit for each JD, duplicate tracking in Excel, and difficulty explaining why a candidate is a good match. SmartScreen helps you parse JDs, bulk-upload resumes, see fitment scores, and review the strongest profiles first."
        ]
      },
      {
        question: "Who is SmartScreen designed for?",
        answer: [
          "SmartScreen is built for in-house HR teams, tech and non-tech recruiters, hiring managers who want more clarity, and staffing / agency teams that work across multiple clients. Early access is especially aimed at small and mid-size teams that feel the pain of manual screening every day."
        ]
      }
    ]
  },
  {
    title: "Features & Workflow",
    items: [
      {
        question: "How does JD–resume matching work in SmartScreen?",
        answer: [
          "You start by adding or uploading a job description. SmartScreen parses the JD to understand role context, responsibilities, and required skills.",
          "Then you upload candidate resumes. Each resume is parsed into structured data (skills, experience, responsibilities, domains, seniority). SmartScreen compares this against the JD and calculates a fitment score, along with key reasons why the profile is a strong, medium, or weak match."
        ]
      },
      {
        question: "Can I upload multiple resumes at once?",
        answer: [
          "Yes. SmartScreen is built for bulk workflows. You can upload multiple resumes for a role, or bulk-upload a pool of candidates. The system parses them in the background and surfaces structured profiles and fitment scores so you can start with the strongest matches first."
        ]
      },
      {
        question: "Does SmartScreen only work for tech roles?",
        answer: [
          "No. SmartScreen works for both tech and non-tech roles. For tech roles we focus more on skills, stacks, and depth of experience. For business and non-tech roles, we pay more attention to responsibilities, domains, seniority, and patterns in past experience. The goal is to make your existing recruiter intuition more repeatable, not to limit you to just keyword matching."
        ]
      },
      {
        question: "Can I reuse candidates across multiple roles or clients?",
        answer: [
          "Yes. Candidates are stored in a central, structured pool. You can reuse the same parsed profile across multiple JDs and, in agency scenarios, tag candidates against different clients or roles. This helps you quickly resurface ‘almost selected’ candidates when similar roles open again."
        ]
      }
    ]
  },
  {
    title: "AI, Scores & Control",
    items: [
      {
        question: "Will SmartScreen replace recruiters?",
        answer: [
          "No. SmartScreen is designed as a copilot, not a replacement. The AI handles repetitive work like parsing, matching, and initial ranking so recruiters can spend more time on conversations, stakeholder management, and decisions. Final calls on shortlists and offers always stay with your team."
        ]
      },
      {
        question: "How should I think about fitment scores?",
        answer: [
          "Fitment scores are decision support, not a verdict. They are meant to draw your attention to strong matches quickly and highlight potential risks or gaps. We recommend using the scores as a way to prioritise review, not as an automatic reject filter. Over time, as we tune the models with feedback, the scores become more helpful and consistent for your specific roles."
        ]
      },
      {
        question: "Does SmartScreen learn from our data?",
        answer: [
          "During early access, we may use high-level patterns (for example, which profiles were eventually shortlisted or hired) to improve your own matching quality. Each customer’s data lives in a separate database, and we don’t mix candidate data between customers. Any learning is applied in a privacy-preserving way."
        ]
      },
      {
        question: "Can I override or ignore AI suggestions?",
        answer: [
          "Yes. You always have full control. You can completely override rankings, add your own notes, or decide to move candidates forward even if their score is lower. SmartScreen is there to make your decisions easier and faster, not to lock you into a fixed rule set."
        ]
      }
    ]
  },
  {
    title: "Data, Privacy & Security",
    items: [
      {
        question: "How is candidate data stored?",
        answer: [
          "SmartScreen uses a per-customer database model. Each organisation’s data is stored in its own logical database, which keeps candidates, jobs, and notes strongly isolated between customers. The underlying infrastructure is hosted on secure cloud platforms with modern encryption and access controls."
        ]
      },
      {
        question: "Who inside SmartScreen can see our data?",
        answer: [
          "Access is strictly limited to the core engineering and support team, and only when required for debugging or support during early access. We do not browse candidate data casually, and we aim to keep access auditable and minimised."
        ]
      },
      {
        question: "Can we remove our data if we leave?",
        answer: [
          "Yes. If you decide to stop using SmartScreen, you can request export and deletion of your data. We can provide a structured export of candidates and jobs, and then perform a clean removal of your tenant database from our systems subject to any legal retention requirements."
        ]
      },
      {
        question: "Do you share data with third-party advertisers or data brokers?",
        answer: [
          "No. Candidate and client data is never shared with advertisers or data brokers. SmartScreen exists to power your hiring workflows, not to monetise your data in unrelated ways."
        ]
      }
    ]
  },
  {
    title: "Access, Setup & Pricing",
    items: [
      {
        question: "Who can join the early access program?",
        answer: [
          "Early access is open to teams that actively run hiring and feel the pain of manual screening — HR teams, recruiting agencies, and growing startups. We prioritise teams that are willing to share feedback and try SmartScreen on real roles so we can shape the product with you."
        ]
      },
      {
        question: "How do we get started?",
        answer: [
          "You can use the “Get early access” form on the website to share a bit about your team and hiring volume. We’ll reach out with next steps, walk you through a short demo, and, if there’s a good fit, help you start with a couple of live roles and existing resumes."
        ]
      },
      {
        question: "Do we need to migrate our entire ATS to use SmartScreen?",
        answer: [
          "No. In early access, most teams start by exporting resumes and JDs from their existing ATS or email, then running those through SmartScreen for better shortlists and visibility. There’s no big bang migration required to see value."
        ]
      },
      {
        question: "What does SmartScreen cost?",
        answer: [
          "During early access, pricing is kept simple and is tailored based on team size and usage. We don’t publish a public pricing page yet because we are still learning from different team sizes and use cases. When you apply for early access, we’ll share a clear, no-surprise pricing structure before you commit to anything."
        ]
      }
    ]
  }
];

const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0 }
};

const stagger = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12
    }
  }
};

const FaqPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#faf5ff] via-white to-[#f5f0ff] text-slate-900">
      {/* HERO – same background & size as UseCasesPage */}
<section
  className="relative overflow-hidden border-b border-violet-900/40
  bg-[radial-gradient(circle_at_top_left,_#134e4a_0%,_#1e1b4b_45%,_#0f172a_90%)]
  text-white"
>
  {/* teal glow left */}
  <div className="pointer-events-none absolute -left-40 top-10 h-80 w-80 
    rounded-full bg-[radial-gradient(circle,_rgba(45,212,191,0.40),transparent_70%)] blur-3xl" />

  {/* violet glow right */}
  <div className="pointer-events-none absolute -right-40 bottom-0 h-96 w-96 
    rounded-full bg-[radial-gradient(circle,_rgba(168,85,247,0.32),transparent_70%)] blur-3xl" />

  <div className="mx-auto flex min-h-[500px] max-w-4xl flex-col items-center justify-center px-4 py-16 text-center">
    <motion.div initial="hidden" animate="visible" variants={stagger}>
      <motion.p
        variants={fadeUp}
        className="text-[11px] font-semibold uppercase tracking-[0.24em] text-teal-200"
      >
        Resources · FAQ
      </motion.p>

      <motion.h1
        variants={fadeUp}
        className="mt-4 text-[32px] font-semibold leading-tight text-white md:text-[38px]"
      >
        Answers to common questions about{" "}
        <span className="bg-gradient-to-r from-teal-300 via-violet-300 to-sky-300 bg-clip-text text-transparent">
          SmartScreen.
        </span>
      </motion.h1>

      <motion.p
        variants={fadeUp}
        className="mx-auto mt-3 max-w-2xl text-[15px] leading-relaxed text-teal-100"
      >
        Everything you need to know about how SmartScreen fits into your hiring stack.
      </motion.p>
    </motion.div>
  </div>
</section>


      {/* SINGLE-COLUMN FAQ */}
      <section className="mx-auto max-w-4xl px-4 py-12 md:py-16 lg:px-0">
        <div className="space-y-8 md:space-y-9">
          {faqSections.map((section, index) => (
            <motion.div
              key={section.title}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.25, delay: index * 0.04 }}
              className="relative"
            >
              {/* soft glow behind section */}
              <div className="pointer-events-none absolute inset-0 -z-10 rounded-[32px] bg-gradient-to-br from-sky-500/10 via-indigo-500/8 to-violet-500/10 blur-xl" />

              <div className="rounded-[26px] border border-indigo-100 bg-gradient-to-r from-white via-[#f7f4ff] to-white p-5 shadow-sm shadow-indigo-100/70 backdrop-blur md:p-6">
                <h2 className="pb-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-slate-500">
                  {section.title}
                </h2>

                <div className="divide-y divide-slate-100">
                  {section.items.map((item) => (
                    <details
                      key={item.question}
                      className="group py-1 first:pt-0 last:pb-0"
                    >
                      <summary
                        className="flex cursor-pointer list-none items-stretch gap-3 rounded-2xl px-3 py-2 transition
                                   hover:bg-slate-50 group-open:bg-indigo-50/70"
                      >
                        <div className="flex-1">
                          <p className="text-[13px] font-semibold text-slate-900 group-open:text-indigo-800 md:text-[14px]">
                            {item.question}
                          </p>
                        </div>
                        <div
                          className="flex h-6 w-6 items-center justify-center rounded-full 
                                     bg-white shadow-sm border border-slate-300
                                     transition-all group-hover:border-indigo-400 group-open:border-indigo-500"
                        >
                          <svg
                            className="h-3.5 w-3.5 text-slate-600 transition-transform 
                                       group-hover:text-indigo-500 group-open:text-indigo-600 
                                       group-open:rotate-180"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path
                              fillRule="evenodd"
                              d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.24a.75.75 0 01-1.06 0L5.21 8.29a.75.75 0 01.02-1.08z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </div>
                      </summary>

                      <div className="mt-2 rounded-2xl bg-white/80 px-3 py-2.5 text-[13px] leading-relaxed text-slate-700 md:text-[13.5px]">
                        {item.answer.map((para, idx) => (
                          <p key={idx} className={idx > 0 ? "mt-2" : ""}>
                            {para}
                          </p>
                        ))}
                      </div>
                    </details>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* footer note */}
        <div className="mt-10 text-center text-[12px] text-slate-500 md:text-[13px]">
          Didn&apos;t find what you were looking for?{" "}
          <span className="font-medium text-indigo-600">
            Use the early access form to share your questions
          </span>{" "}
          and we&apos;ll include the most common ones here.
        </div>
      </section>
    </div>
  );
};

export default FaqPage;
