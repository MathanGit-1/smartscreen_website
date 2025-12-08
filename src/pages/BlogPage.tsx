// src/pages/BlogPage.tsx
import React, { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type BlogPost = {
  slug: string;
  title: string;
  subtitle?: string;
  date: string;
  readingTime: string;
  category: string;
  excerpt: string;
  content: string[];
};

const BLOG_POSTS: BlogPost[] = [
  {
    slug: "future-of-hiring-ai-first-recruiter",
    title: "The Future of Hiring: Why AI Will Become Your First Recruiter",
    subtitle:
      "AI is quietly becoming the most reliable teammate in every hiring team.",
    date: "December 2025",
    readingTime: "7 min read",
    category: "AI in Hiring",
    excerpt:
      "Hiring is moving from manual, resume-heavy work to AI-assisted decision-making. Early adopters will hire faster, with more confidence, and far less chaos.",
    content: [
      "Hiring today feels harder than ever. Recruiters are drowning in resumes, hiring managers are busy, and candidates expect instant responses. At the same time, teams are under pressure to move faster while making better decisions.",
      "This is exactly where AI is quietly transforming the hiring workflow. Instead of being a flashy add-on, AI is becoming the first teammate every recruiter relies on for structure, speed, and clarity.",
      "AI is particularly good at the repetitive work humans hate: reading hundreds of resumes, extracting skills, clustering experience, and ranking profiles. Tasks that used to take hours can now be completed in seconds, without losing consistency.",
      "The biggest advantage is not just speed but consistency. Two recruiters reading the same resume may interpret it differently. An AI model, on the other hand, evaluates skills, experience, seniority, and domain match in the same way every time.",
      "Modern hiring is no longer about collecting more resumes. It is about building a living talent graph where every candidate, skill, and interaction is structured and searchable. AI turns your database from a resume folder into a decision engine.",
      "AI will not replace recruiters. Instead, companies that use AI in hiring will start to outperform those that don’t. Recruiters who lean on AI can spend their time on conversations, storytelling, and judgment — the parts of hiring humans are uniquely good at.",
      "In the next few years, AI will quietly become the operating system of hiring. Tools like SmartScreen are being built to support this future, acting as always-on co-pilots that keep your pipeline moving and your decisions consistent."
    ]
  },
  {
    slug: "why-job-descriptions-fail-and-how-ai-fixes-them",
    title: "Why Job Descriptions Fail (And How AI Can Fix Them)",
    subtitle:
      "Your JD is your first pitch to candidates — and most teams are underestimating it.",
    date: "December 2025",
    readingTime: "6 min read",
    category: "Job Descriptions",
    excerpt:
      "Most job descriptions are recycled, vague, or overloaded. AI can help teams create clear, fair, and attractive JDs in minutes instead of hours.",
    content: [
      "Job descriptions are supposed to attract the right people, but in many teams they have become an afterthought. A hiring manager shares an old document; someone edits the title and a few bullets; and the JD is pushed live without much thought.",
      "The result is predictable: vague responsibilities, outdated skills, confusing expectations, and a tone that feels more like a compliance document than an invitation to apply.",
      "AI can dramatically improve this experience. Instead of starting from a blank page or a random template, teams can feed a rough outline to an AI assistant and receive a clear, structured, role-specific JD in seconds.",
      "A good AI-powered JD focuses on three things: clarity of responsibilities, the right level of detail in skills, and a tone that speaks directly to the kind of candidate you want to attract. It removes generic fluff like “work in a fast-paced environment” and replaces it with concrete outcomes.",
      "Another important area is bias. Certain words or phrases can unintentionally discourage specific groups from applying. AI can help scan for gendered language, age signals, and exclusionary wording, suggesting more inclusive alternatives.",
      "Most importantly, AI ensures consistency across roles. If you hire for multiple similar positions, AI can help you keep seniority, expectations, and language aligned — making it easier for candidates and internal teams to understand the differences between roles.",
      "Over time, your JDs become living assets that are easy to update, easy to adapt, and tightly connected to your actual hiring data. Instead of being a bottleneck, they become a quiet superpower in your hiring funnel."
    ]
  },
  {
    slug: "hidden-cost-of-slow-hiring",
    title: "The Hidden Cost of Slow Hiring (And How AI Speeds It Up)",
    subtitle:
      "Delayed decisions don’t just lose candidates — they quietly hurt your business.",
    date: "November 2025",
    readingTime: "6 min read",
    category: "Hiring Speed",
    excerpt:
      "Every extra week in your hiring process increases the chance of losing your best candidates. AI helps teams move from weeks of manual work to days of structured decision-making.",
    content: [
      "Slow hiring is expensive in ways that are not always visible. Projects slip, teams absorb extra workload, and candidates silently move on to faster companies. By the time the effect is felt, the opportunity has already been lost.",
      "The root causes of slow hiring are usually the same: manual resume screening, unclear ownership, scattered information, and slow feedback loops. These are all problems that AI is well-suited to help with.",
      "AI-powered tools can read and interpret hundreds of resumes in seconds, rank candidates based on skill and relevance, and present a short, prioritized list to hiring managers. This means the team can spend time evaluating the top 10 profiles instead of scanning the first 150.",
      "AI can also keep your process moving by generating summaries for busy stakeholders. A concise, well-structured candidate brief makes it far more likely that a hiring manager will review profiles quickly and share feedback.",
      "Another hidden advantage is coordination. AI can help remind teams of pending actions, highlight candidates who have been stuck at a stage for too long, and even suggest next steps.",
      "When these pieces come together, the effect is dramatic: shorter time-to-fill, fewer dropped candidates, and a smoother experience for everyone. In a competitive market, speed is not a luxury — it is a signal of how you operate as a company.",
      "Combining structured workflows with AI assistance is one of the fastest ways to reduce hiring drag without adding more people to the process."
    ]
  },
  {
    slug: "recruiter-productivity-new-advantage",
    title: "Recruiter Productivity: The New Competitive Advantage",
    subtitle: "More headcount is not the answer — better leverage is.",
    date: "November 2025",
    readingTime: "7 min read",
    category: "Recruiter Productivity",
    excerpt:
      "High-performing hiring teams don’t simply work harder — they design systems where recruiters spend most of their time on meaningful conversations, not manual admin.",
    content: [
      "Recruiters today are expected to be sourcers, marketers, project managers, analysts, and relationship builders. That is a lot to ask from one role, especially when much of the day is still spent doing manual updates and repetitive tasks.",
      "The most successful teams are not the ones with the largest recruiting headcount. Instead, they are the ones that design systems to give each recruiter maximum leverage.",
      "AI and structured hiring tools play a big role here. When resume parsing, candidate matching, and JD cleanup are handled by the system, recruiters reclaim hours each week that can be redirected to higher-value work.",
      "This includes building strong candidate relationships, coaching hiring managers, improving interview processes, and shaping hiring strategy. These are areas where human nuance matters and where technology acts as an amplifier, not a replacement.",
      "Productivity in recruiting should not mean ‘doing more tasks in less time’. It should mean ‘spending more of your time on the work that actually moves hires forward’. That shift requires both better tools and a conscious redesign of how the hiring workflow operates.",
      "An AI-assisted platform like SmartScreen helps teams make this shift. Instead of being buried in details, recruiters get a clean picture of which roles need attention, which candidates are most promising, and what should happen next.",
      "Over time, this compounding productivity edge becomes a key competitive advantage, especially in markets where talent is scarce and hiring urgency is high."
    ]
  },
  {
    slug: "ai-resume-parsing-explained-simply",
    title: "AI Resume Parsing: How It Works (Explained Simply)",
    subtitle: "What actually happens when a resume turns into structured data?",
    date: "October 2025",
    readingTime: "6 min read",
    category: "AI in Hiring",
    excerpt:
      "Many tools claim to use AI for parsing, but what does that really mean? Here’s a simple breakdown of how resumes become structured, searchable data.",
    content: [
      "Most people think of resume parsing as ‘reading the text and filling some fields’. In reality, modern parsing goes much deeper and uses multiple layers of AI to understand context, relationships, and patterns.",
      "The first step is extraction. The system pulls text from PDFs, DOCX files, and sometimes even images. This sounds simple, but messy layouts and different formats make it a non-trivial problem.",
      "The second step is understanding. AI models identify entities such as names, locations, companies, job titles, dates, skills, tools, and education. They also try to understand which parts of the text belong together, such as a role, its company, and the period of employment.",
      "Next, the parsed data is mapped into a consistent internal structure. This is where ‘Software Engineer’, ‘SDE’, and ‘Developer’ might all be normalized into a standard job type, while technology stacks and skills are grouped logically.",
      "Finally, the structured resume can be compared to a job description. Instead of matching only on keywords, the system can consider seniority, recency of experience, skill depth, and domain relevance.",
      "The end result is that recruiters are no longer staring at raw documents. They are looking at a rich, searchable profile that can be scored, filtered, and compared in a consistent way.",
      "This is the foundation on which the rest of AI-driven hiring workflows are built."
    ]
  },
  {
    slug: "why-candidates-drop-off-and-how-ai-helps",
    title: "Why Candidates Drop Off (And How AI Reduces It)",
    subtitle:
      "Silence in your pipeline is often a process problem, not a candidate problem.",
    date: "October 2025",
    readingTime: "6 min read",
    category: "Candidate Experience",
    excerpt:
      "Drop-offs rarely happen suddenly. They build up through slow responses, unclear next steps, and scattered communication. AI can help teams spot and fix these patterns early.",
    content: [
      "Most teams notice candidate drop-off only when a promising profile stops replying. By then, it is usually too late. The candidate has mentally moved on to other opportunities.",
      "Drop-off is often a symptom of a process that feels slow, confusing, or inconsistent from the candidate’s point of view. Long gaps between stages, no clarity on what happens next, and generic communication all contribute to disengagement.",
      "AI can reduce this in several ways. It can suggest timely follow-ups, help generate clear and personalized messages, and highlight candidates who have been waiting at a stage for too long.",
      "It can also help teams improve upstream elements like job descriptions, expectations, and interview communication. When information is clear and timely, candidates are far more likely to stay engaged.",
      "Another quiet benefit is that AI can bring structure to feedback. Even if a candidate is not selected, a concise explanation delivered quickly leaves a much better impression than silence.",
      "Over time, these improvements compound into a stronger reputation. Candidates remember companies that respect their time and communicate clearly — and they talk about those experiences in their networks.",
      "Reducing drop-off is one of the most effective ways to protect your hiring funnel without increasing sourcing volume."
    ]
  },
  {
    slug: "rise-of-talent-intelligence-platforms",
    title: "The Rise of Talent Intelligence Platforms",
    subtitle: "Your resume database can do more than just store files.",
    date: "September 2025",
    readingTime: "7 min read",
    category: "Talent Intelligence",
    excerpt:
      "Traditional ATS tools focus on storage and tracking. Talent intelligence platforms focus on understanding and decision support — turning your past data into future advantage.",
    content: [
      "For a long time, the main job of an ATS was to store resumes and track stages. This is useful, but it barely scratches the surface of what is possible with modern data and AI.",
      "Talent intelligence platforms go further. Instead of treating resumes as static documents, they treat them as nodes in a rich graph of skills, experiences, and outcomes.",
      "This allows teams to answer questions like: Who are our strongest past candidates for a new role? Which skills tend to correlate with successful hires? Where are the gaps in our pipeline for a particular job family?",
      "AI models can analyze patterns in your historical hiring data and surface insights that are hard to see manually. For example, you may discover that hires with a certain combination of skills and company types tend to ramp up faster.",
      "The practical impact is that your database stops being a graveyard of old applicants. It becomes a living asset you can tap into each time a new role opens.",
      "Platforms like SmartScreen are being built with this mindset. The goal is not just to store candidate information, but to help teams understand it, reuse it, and act on it.",
      "As more companies adopt this approach, talent intelligence will shift from being a ‘nice-to-have’ to a baseline expectation in modern hiring stacks."
    ]
  },
  {
    slug: "how-startups-hire-without-hr-team",
    title: "How Startups Can Build Hiring Systems Without an HR Team",
    subtitle:
      "You don’t need a full HR department to run a serious hiring process.",
    date: "September 2025",
    readingTime: "6 min read",
    category: "Startups",
    excerpt:
      "Early-stage startups often delay formal hiring systems because they lack a dedicated HR team. With AI and lightweight workflows, you can run a structured process from day one.",
    content: [
      "Founders at early-stage startups juggle many roles: product, sales, support, and often recruiting. It is tempting to treat hiring as an ad-hoc activity until the team grows large enough to justify a dedicated HR function.",
      "The problem is that early hires are usually the most important ones. A chaotic process at this stage can lead to mismatches that are expensive to fix later.",
      "The good news is that you do not need a large HR team to run a professional hiring process. What you need is a clear workflow and tools that handle the heavy lifting.",
      "AI can help founders generate JDs, evaluate resumes, and keep track of candidate progress without building custom spreadsheets for every role.",
      "A simple, consistent pipeline — from ‘Applied’ to ‘Offer’ — combined with structured evaluations and basic automation can take you a long way.",
      "As you grow, the same system can be handed over to a dedicated recruiter or HR team without being rebuilt from scratch.",
      "SmartScreen is designed with this path in mind: simple enough for a founder to use on day one, and powerful enough to scale with the team."
    ]
  },
  {
    slug: "candidate-feedback-most-overlooked-step",
    title: "The Most Overlooked Step in Hiring: Candidate Feedback",
    subtitle:
      "How you close the loop says as much about your brand as your offer letter.",
    date: "August 2025",
    readingTime: "6 min read",
    category: "Candidate Experience",
    excerpt:
      "Most candidates remember one thing long after the process ends: whether the company respected their time and communicated clearly — especially when the answer was no.",
    content: [
      "Companies invest heavily in sourcing and interviewing, but the final step — sharing feedback — is often neglected. Candidates are left waiting for updates that never come, or receive vague responses that don’t acknowledge their effort.",
      "This is more than just a courtesy issue. The way you close the loop with candidates directly affects how they perceive your brand and whether they would consider applying again.",
      "AI can make it easier to deliver timely, thoughtful feedback at scale. It can help draft messages based on interview notes, suggest phrasing that is clear but respectful, and ensure no one is accidentally left without a response.",
      "Even a short, honest explanation is better than silence. Candidates appreciate knowing where they stood and what influenced the decision.",
      "Teams that build this discipline into their process stand out. They create a reputation for fairness and professionalism that can attract stronger candidates over time.",
      "With the help of tools like SmartScreen, structured feedback can, over time, become a natural part of the workflow rather than an optional extra step.",
      "In competitive markets, how you say ‘no’ can matter almost as much as how you say ‘yes’."
    ]
  },
  {
    slug: "what-candidates-really-want-data-not-opinion",
    title: "What Candidates Really Look For (Based on Data, Not Opinions)",
    subtitle: "Clarity beats hype. Structure beats perks.",
    date: "August 2025",
    readingTime: "7 min read",
    category: "Hiring Insights",
    excerpt:
      "There is a lot of guesswork about what candidates want. Data consistently points to a few fundamentals: clarity, fairness, growth, and responsiveness.",
    content: [
      "It is easy to assume that candidates mainly care about perks, logos, or fancy offices. In reality, survey after survey shows a different set of priorities.",
      "Candidates consistently value clear expectations, growth opportunities, respectful communication, and fair evaluation more than cosmetics.",
      "This means your hiring process itself is part of the value proposition. A messy, unclear, or slow process sends a signal that day-to-day work might feel the same.",
      "AI and structured workflows can help teams deliver a more predictable experience. Clear JDs, transparent stages, timely updates, and consistent evaluations all contribute to trust.",
      "When candidates know what to expect, they can focus on showing their best work instead of trying to decode the process.",
      "Companies that invest in this clarity often find that they don’t need to ‘oversell’ roles. The experience of going through the process becomes part of the reason candidates want to join.",
      "SmartScreen’s goal is to help teams create that kind of experience by combining clean workflows with AI assistance at each step."
    ]
  }
];

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0 }
};

const BlogPage: React.FC = () => {
  const [selectedSlug, setSelectedSlug] = useState<string>(
    BLOG_POSTS[0]?.slug
  );

  const selectedPost = useMemo(
    () => BLOG_POSTS.find((p) => p.slug === selectedSlug) ?? BLOG_POSTS[0],
    [selectedSlug]
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#faf5ff] via-white to-[#f5f0ff] text-slate-900">
      {/* HERO – same background & size family as UseCases / FAQ */}
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
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-indigo-200">
              Resources · Blog
            </p>
            <h1 className="mt-3 text-2xl font-semibold leading-tight text-white md:text-[30px]">
              Hiring, AI, and talent systems —{" "}
              <span className="bg-gradient-to-r from-sky-400 via-indigo-300 to-violet-300 bg-clip-text text-transparent">
                in plain language.
              </span>
            </h1>
            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-violet-200 md:text-[15px]">
              Short, practical reads on how modern recruiting teams use AI,
              structure, and better workflows to hire faster — and how
              SmartScreen is being built to support that shift without adding
              more chaos.
            </p>
          </motion.div>
        </div>
      </section>

      {/* CONTENT */}
      <section className="mx-auto max-w-6xl px-4 py-10 md:py-14 lg:px-0">
        <div className="grid items-start gap-8 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,1.75fr)]">
          {/* LEFT: Post list */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35 }}
            className="relative"
          >
            {/* subtle gradient frame */}
            <div className="absolute inset-0 -z-10 rounded-[26px] bg-gradient-to-br from-sky-500/10 via-indigo-500/8 to-violet-500/10 blur-xl" />
            <aside className="space-y-4 rounded-3xl border border-indigo-100 bg-white/90 p-4 shadow-sm shadow-indigo-100/70 backdrop-blur md:p-5">
              <div className="flex items-center justify-between">
                <h2 className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">
                  All posts
                </h2>
                <span className="rounded-full bg-indigo-50 px-2.5 py-1 text-[11px] font-medium text-indigo-700">
                  {BLOG_POSTS.length} articles
                </span>
              </div>

              <div className="mt-2 space-y-2">
                {BLOG_POSTS.map((post) => {
                  const isActive = post.slug === selectedSlug;
                  return (
                    <button
                      key={post.slug}
                      type="button"
                      onClick={() => setSelectedSlug(post.slug)}
                      className={`group w-full rounded-2xl border px-3.5 py-3 text-left transition-all ${
                        isActive
                          ? "border-indigo-400 bg-indigo-50/90 shadow-sm shadow-indigo-100"
                          : "border-indigo-100/80 bg-white/90 hover:border-indigo-300 hover:bg-indigo-50/70"
                      }`}
                    >
                      <p className="text-[11px] font-medium text-indigo-600">
                        {post.category}
                      </p>
                      <p className="mt-1 text-[13px] font-semibold text-slate-900 group-hover:text-indigo-800">
                        {post.title}
                      </p>
                      <p className="mt-1 line-clamp-2 text-[12px] text-slate-600">
                        {post.excerpt}
                      </p>
                      <div className="mt-2 flex items-center gap-2 text-[11px] text-slate-500">
                        <span>{post.date}</span>
                        <span className="h-1 w-1 rounded-full bg-slate-300" />
                        <span>{post.readingTime}</span>
                      </div>
                    </button>
                  );
                })}
              </div>
            </aside>
          </motion.div>

          {/* RIGHT: Selected article */}
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedPost.slug}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              exit={{ opacity: 0, y: 10 }}
              transition={{ duration: 0.25 }}
              className="relative"
            >
              {/* glow frame behind article */}
              <div className="pointer-events-none absolute inset-0 -z-10 rounded-[30px] bg-gradient-to-br from-indigo-500/10 via-sky-500/8 to-violet-500/10 blur-xl" />
              <article className="rounded-3xl border border-indigo-100 bg-white/95 p-5 shadow-soft-lg shadow-slate-200/70 backdrop-blur md:p-7">
                <div className="flex flex-wrap items-center gap-2 text-[11px] text-slate-500">
                  <span className="rounded-full bg-indigo-50 px-2 py-1 font-medium text-indigo-700">
                    {selectedPost.category}
                  </span>
                  <span>{selectedPost.date}</span>
                  <span className="h-1 w-1 rounded-full bg-slate-300" />
                  <span>{selectedPost.readingTime}</span>
                </div>

                <h2 className="mt-3 text-xl font-semibold leading-snug text-slate-900 md:text-[24px]">
                  {selectedPost.title}
                </h2>
                {selectedPost.subtitle && (
                  <p className="mt-2 text-sm text-slate-600 md:text-[15px]">
                    {selectedPost.subtitle}
                  </p>
                )}

                <div className="mt-6 space-y-4 text-[13px] leading-relaxed text-slate-700 md:text-[14px]">
                  {selectedPost.content.map((para, idx) => (
                    <p key={idx}>{para}</p>
                  ))}
                </div>
              </article>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>
    </div>
  );
};

export default BlogPage;
