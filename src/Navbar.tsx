// src/Navbar.tsx
import React, { useRef, useState } from "react";

const Navbar: React.FC = () => {
  const [isProductOpen, setIsProductOpen] = useState(false);
  const [isResourcesOpen, setIsResourcesOpen] = useState(false);

  const productHoverTimeout = useRef<number | null>(null);
  const resourcesHoverTimeout = useRef<number | null>(null);

  // FEATURES DROPDOWN HANDLERS
  const handleProductEnter = () => {
    if (productHoverTimeout.current) {
      window.clearTimeout(productHoverTimeout.current);
      productHoverTimeout.current = null;
    }
    setIsProductOpen(true);
  };

  const handleProductLeave = () => {
    if (productHoverTimeout.current) {
      window.clearTimeout(productHoverTimeout.current);
    }
    productHoverTimeout.current = window.setTimeout(() => {
      setIsProductOpen(false);
    }, 120);
  };

  // RESOURCES DROPDOWN HANDLERS
  const handleResourcesEnter = () => {
    if (resourcesHoverTimeout.current) {
      window.clearTimeout(resourcesHoverTimeout.current);
      resourcesHoverTimeout.current = null;
    }
    setIsResourcesOpen(true);
  };

  const handleResourcesLeave = () => {
    if (resourcesHoverTimeout.current) {
      window.clearTimeout(resourcesHoverTimeout.current);
    }
    resourcesHoverTimeout.current = window.setTimeout(() => {
      setIsResourcesOpen(false);
    }, 120);
  };

  const navigateTo = (path: string) => {
    window.location.href = path;
  };

  const scrollToEarlyAccess = () => {
    document.getElementById("early-access")?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    // sticky + higher z-index
    <header className="sticky top-0 z-40 border-b border-violet-100 bg-white/80 backdrop-blur-xl">
      <div className="container flex h-16 items-center justify-between">
        {/* Logo */}
        <div
          className="flex cursor-pointer items-center gap-2"
          onClick={() => navigateTo("/")}
        >
          <div className="flex h-9 w-9 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-primary via-brand-neon to-brand-accent shadow-soft">
            <span className="text-lg font-semibold text-white">S</span>
          </div>
          <div>
            <div className="text-sm font-semibold tracking-wide">
              SmartScreen
            </div>
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
            <button className="flex items-center gap-1 font-medium text-gray-800 hover:text-brand-dark">
              Features
              <span className="text-[10px] text-slate-600">▾</span>
            </button>

            <div
              className={`absolute left-0 top-full mt-2 w-72 rounded-2xl border border-violet-100 bg-white/95 p-4 shadow-lg transition-all ${
                isProductOpen
                  ? "pointer-events-auto translate-y-0 opacity-100"
                  : "pointer-events-none translate-y-2 opacity-0"
              }`}
            >
              <div className="mb-3 text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-600">
                SmartScreen modules
              </div>

              <ul className="space-y-3 text-[13px]">
                {/* Job management → feature page */}
                <li
                  className="flex cursor-pointer gap-3"
                  onClick={() => navigateTo("/features/job-management")}
                >
                  <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-violet-50 text-[14px] text-violet-700">
                    🗂
                  </div>
                  <div>
                    <div className="font-medium text-brand-dark">
                      Job management
                    </div>
                    <div className="text-[11px] text-slate-600">
                      Create, track, and prioritise every JD in one place.
                    </div>
                  </div>
                </li>

                {/* Candidate intelligence → feature page */}
                <li
                  className="flex cursor-pointer gap-3"
                  onClick={() =>
                    navigateTo("/features/candidate-intelligence")
                  }
                >
                  <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-sky-50 text-[14px] text-sky-700">
                    👤
                  </div>
                  <div>
                    <div className="font-medium text-brand-dark">
                      Candidate intelligence
                    </div>
                    <div className="text-[11px] text-slate-600">
                      Bulk upload resumes, auto-tag skills, see fitment.
                    </div>
                  </div>
                </li>

                <li
                  className="flex cursor-pointer gap-3"
                  onClick={() => navigateTo("/features/applications")}
                >
                  <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-emerald-50 text-[14px] text-emerald-700">
                    🔄
                  </div>
                  <div>
                    <div className="font-medium text-brand-dark">
                      Applications & workflows
                    </div>
                    <div className="text-[11px] text-slate-600">
                      Custom stages per client & role, notes, timeline.
                    </div>
                  </div>
                </li>

                <li
                  className="flex cursor-pointer gap-3"
                  onClick={() => navigateTo("/features/assistant")}
                >
                  <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-pink-50 text-[14px] text-pink-700">
                    🤖
                  </div>
                  <div>
                    <div className="font-medium text-brand-dark">
                      AI assistant
                    </div>
                    <div className="text-[11px] text-slate-600">
                      Ask anything about jobs, candidates, workflows.
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          {/* Use cases → /use-cases */}
          <button
            className="font-medium text-gray-800 hover:text-brand-dark"
            onClick={() => navigateTo("/use-cases")}
          >
            Use cases
          </button>

          {/* Resources dropdown */}
          <div
            className="relative"
            onMouseEnter={handleResourcesEnter}
            onMouseLeave={handleResourcesLeave}
          >
            <button className="flex items-center gap-1 font-medium text-gray-800 hover:text-brand-dark">
              Resources
              <span className="text-[10px] text-slate-600">▾</span>
            </button>

            <div
              className={`absolute left-0 top-full mt-2 w-72 rounded-2xl border border-violet-100 bg-white/95 p-4 shadow-lg transition-all ${
                isResourcesOpen
                  ? "pointer-events-auto translate-y-0 opacity-100"
                  : "pointer-events-none translate-y-2 opacity-0"
              }`}
            >
              <div className="mb-3 text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-600">
                Learn & explore
              </div>

              <ul className="space-y-3 text-[13px]">
                <li
                  className="flex cursor-pointer flex-col gap-0.5"
                  onClick={() => navigateTo("/blog")}
                >
                  <span className="font-medium text-brand-dark">Blog</span>
                  <span className="text-[11px] text-slate-600">
                    Short, practical reads on hiring, AI & workflows.
                  </span>
                </li>

                <li
                  className="flex cursor-pointer flex-col gap-0.5"
                  onClick={() => navigateTo("/faq")}
                >
                  <span className="font-medium text-brand-dark">FAQ</span>
                  <span className="text-[11px] text-slate-600">
                    Common questions about product, data & security.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        {/* Right actions */}
        <div className="flex items-center gap-3">
          <button className="hidden text-sm font-medium text-gray-800 hover:text-brand-dark md:inline-flex">
            Sign in
          </button>
          <button
            onClick={scrollToEarlyAccess}
            className="relative overflow-hidden rounded-full bg-brand-primary px-4 py-1.5 text-xs font-semibold text-white shadow-soft hover:bg-brand-primaryLight md:px-5 md:py-2 md:text-sm"
          >
            <span className="relative z-10">Get early access</span>
            <span className="pointer-events-none absolute inset-0 overflow-hidden rounded-full">
              <span className="animate-sheen absolute inset-y-0 w-1/2 bg-gradient-to-r from-white/0 via-white/40 to-white/0" />
            </span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
