import React, { useState } from "react";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

export default function GetEarlyAccessSection() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    role: "",
    hiringVolume: "",
    useCases: [] as string[],
    message: "",
    consent: false,
  });

  const [submitted, setSubmitted] = useState(false);

  const useCaseOptions = [
    "JD Parsing",
    "Resume Parsing",
    "Fitment Scoring",
    "Workflow Automation",
    "AI Assistant",
  ];

  const handleChange = (key: string, value: any) => {
    setForm((prev) => ({ ...prev, [key]: value }));
  };

  const toggleUseCase = (item: string) => {
    setForm((prev) => {
      const exists = prev.useCases.includes(item);
      return {
        ...prev,
        useCases: exists
          ? prev.useCases.filter((x) => x !== item)
          : [...prev.useCases, item],
      };
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Later you will replace this with a real API call
    console.log("FORM DATA:", form);
    setSubmitted(true);
  };

  return (
    <section
      id="early-access"
      className="relative overflow-hidden py-24 md:py-32
                 bg-gradient-to-b from-[#190a2d] via-[#130726] to-[#0b051a]"
    >
      {/* FLOATING NEON BLOBS */}
      <div
        className="pointer-events-none absolute -top-40 left-0 h-96 w-96
                   rounded-full bg-[radial-gradient(circle,rgba(236,72,153,0.35),transparent_70%)]
                   blur-3xl opacity-70"
      />
      <div
        className="pointer-events-none absolute -bottom-40 right-0 h-96 w-96
                   rounded-full bg-[radial-gradient(circle,rgba(124,58,237,0.35),transparent_70%)]
                   blur-3xl opacity-70"
      />

      <div className="relative container mx-auto px-6 max-w-6xl space-y-16">
        {/* TEXT HEADER */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          variants={fadeUp}
          className="text-center space-y-4"
        >
          <h2 className="text-3xl md:text-4xl font-semibold text-white">
            Get Early Access
          </h2>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            We’re onboarding a limited set of teams to shape the next
            generation of hiring workflow. Join early and help define SmartScreen.
          </p>
        </motion.div>

        {/* BENEFITS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {[
            {
              title: "Priority onboarding",
              desc: "Personalized setup & support.",
            },
            {
              title: "Full product access",
              desc: "Try every feature before public launch.",
            },
            {
              title: "Direct feedback channel",
              desc: "Influence the product roadmap.",
            },
          ].map((item, idx) => (
            <motion.div
              key={idx}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              variants={fadeUp}
              className="space-y-1"
            >
              <h4 className="text-white font-medium text-lg">{item.title}</h4>
              <p className="text-white/60 text-sm">{item.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* FORM CARD */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
          className="mx-auto max-w-3xl"
        >
          <div
            className="relative rounded-3xl p-[1px]
                       bg-gradient-to-br from-[#ec4899] to-[#7c3aed] shadow-xl"
          >
            <div className="rounded-3xl bg-white/95 backdrop-blur-xl p-10">
              {!submitted ? (
                <form onSubmit={handleSubmit} className="space-y-8">
                  {/* GRID ROWS */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <Input
                      label="Full Name"
                      value={form.name}
                      onChange={(v) => handleChange("name", v)}
                      required
                    />
                    <Input
                      label="Work Email"
                      value={form.email}
                      onChange={(v) => handleChange("email", v)}
                      required
                    />
                    <Input
                      label="Company Name"
                      value={form.company}
                      onChange={(v) => handleChange("company", v)}
                      required
                    />
                    <Input
                      label="Role / Title"
                      value={form.role}
                      onChange={(v) => handleChange("role", v)}
                      required
                    />
                  </div>

                  {/* HIRING VOLUME */}
                  <div>
                    <label className="text-sm font-medium text-gray-700">
                      Monthly Hiring Volume
                    </label>
                    <select
                      className="mt-2 w-full rounded-xl border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500"
                      value={form.hiringVolume}
                      onChange={(e) =>
                        handleChange("hiringVolume", e.target.value)
                      }
                      required
                    >
                      <option value="">Select...</option>
                      <option value="1-5">1–5</option>
                      <option value="6-20">6–20</option>
                      <option value="20-50">20–50</option>
                      <option value="50+">50+</option>
                    </select>
                  </div>

                  {/* USE CASES */}
                  <div>
                    <label className="text-sm font-medium text-gray-700">
                      Use Cases (optional)
                    </label>
                    <div className="mt-3 flex flex-wrap gap-3">
                      {useCaseOptions.map((uc) => {
                        const active = form.useCases.includes(uc);
                        return (
                          <button
                            type="button"
                            key={uc}
                            onClick={() => toggleUseCase(uc)}
                            className={`px-4 py-2 rounded-full text-sm border transition
                              ${
                                active
                                  ? "bg-purple-600 text-white border-purple-600"
                                  : "bg-white text-gray-600 border-gray-300 hover:bg-gray-100"
                              }
                          `}
                          >
                            {uc}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* MESSAGE */}
                  <div>
                    <label className="text-sm font-medium text-gray-700">
                      Message (optional)
                    </label>
                    <textarea
                      rows={4}
                      className="mt-2 w-full rounded-xl border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500"
                      value={form.message}
                      onChange={(e) =>
                        handleChange("message", e.target.value)
                      }
                    />
                  </div>

                  {/* CONSENT */}
                  <div className="flex items-start gap-3">
                    <input
                      type="checkbox"
                      className="mt-1 h-4 w-4"
                      checked={form.consent}
                      onChange={(e) =>
                        handleChange("consent", e.target.checked)
                      }
                      required
                    />
                    <span className="text-sm text-gray-700">
                      I agree to be contacted about SmartScreen.
                    </span>
                  </div>

                  {/* SUBMIT */}
                  <button
                    type="submit"
                    className="w-full rounded-xl bg-purple-600 text-white py-3
                               font-medium hover:bg-purple-700 transition"
                  >
                    Request Early Access
                  </button>
                </form>
              ) : (
                <div className="text-center py-16">
                  <h3 className="text-2xl font-semibold text-gray-800">
                    Thank you!
                  </h3>
                  <p className="text-gray-600 mt-2">
                    We’ll contact you within 24 hours.
                  </p>
                </div>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ------------------------ SMALL INPUT COMPONENT ------------------------ */

function Input({
  label,
  value,
  onChange,
  required = false,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  required?: boolean;
}) {
  return (
    <div>
      <label className="text-sm font-medium text-gray-700">{label}</label>
      <input
        required={required}
        className="mt-2 w-full rounded-xl border border-gray-300 px-4 py-3
                   focus:outline-none focus:ring-2 focus:ring-purple-500"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
}
