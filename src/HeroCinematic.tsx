// src/HeroCinematic.tsx
import React, { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  MotionValue,
} from "framer-motion";

type Scene = {
  src: string;
  label: string;
  description: string;
};

const SCENES: Scene[] = [
  {
    src: "/hero-scenes/scene1.jpg.webp",
    label: "Overwhelmed recruiter",
    description: "Too many emails, resumes and sticky notes.",
  },
  {
    src: "/hero-scenes/scene2.jpg.webp",
    label: "Too many tools",
    description: "Job portals, LinkedIn, Excel and ATS all at once.",
  },
  {
    src: "/hero-scenes/scene3.jpg.webp",
    label: "Pressure from hiring managers",
    description: "Video calls and status questions without a clear view.",
  },
  {
    src: "/hero-scenes/scene4.jpg.webp",
    label: "Team misalignment",
    description: "HR team trying to sync WhatsApp, Excel and email.",
  },
  {
    src: "/hero-scenes/scene5.jpg.webp",
    label: "Downloads chaos",
    description: "Hundreds of CV files, all versions of the same profile.",
  },
  {
    src: "/hero-scenes/scene6.jpg.webp",
    label: "Burnout",
    description: "Recruiters exhausted by manual work and follow-ups.",
  },
  {
    src: "/hero-scenes/scene7.jpg.webp",
    label: "SmartScreen workspace",
    description: "Calm, AI-powered hiring workspace.\nChaos → under control.",
  },
];


type SceneLayerProps = {
  scene: Scene;
  index: number;
  total: number;
  scrollYProgress: MotionValue<number>;
};

const SceneLayer: React.FC<SceneLayerProps> = ({
  scene,
  index,
  total,
  scrollYProgress,
}) => {
  const start = index / total;
  const end = (index + 1) / total;

  // Fade in / hold / fade out
  const opacity = useTransform(
    scrollYProgress,
    [start - 0.08, start, end, end + 0.08],
    [0, 1, 1, index === total - 1 ? 1 : 0]
  );

  // Foreground portrait card motion
  const cardScale = useTransform(
    scrollYProgress,
    [start, end],
    [1.08, index === total - 1 ? 1 : 0.97]
  );
  const cardY = useTransform(scrollYProgress, [start, end], [16, -12]);

  // Background parallax (very subtle)
  const bgScale = useTransform(scrollYProgress, [start, end], [1.05, 1.15]);

  return (
    <motion.div
      style={{ opacity }}
      className="absolute inset-0 flex items-center justify-center"
    >
      {/* Blurred full-bleed background using the same image */}
      <motion.div
        style={{ scale: bgScale }}
        className="absolute inset-0 overflow-hidden rounded-[32px]"
      >
        <img
          src={scene.src}
          alt={scene.label}
          className="h-full w-full object-cover blur-[10px] brightness-[0.7] scale-110"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/45 via-black/20 to-black/55" />
      </motion.div>

      {/* Foreground portrait card */}
      <motion.div
        style={{ scale: cardScale, y: cardY }}
        className="relative z-10 flex h-full w-full items-center justify-center px-4"
      >
        <div className="relative aspect-[3/4] max-h-[80%] w-auto overflow-hidden rounded-[26px] border border-white/55 bg-black/70 shadow-[0_28px_80px_rgba(15,23,42,0.75)]">
          <img
            src={scene.src}
            alt={scene.label}
            className="h-full w-full object-cover"
          />

          {/* soft inner vignette */}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/35" />
        </div>

        {/* Caption bubble – anchored near bottom-left of the card */}
        <div className="pointer-events-none absolute bottom-7 left-6 max-w-xs rounded-2xl bg-black/65 px-3.5 py-2.5 text-xs text-slate-100 backdrop-blur-md sm:text-sm">
          <div className="flex items-center gap-2 text-[11px] font-medium uppercase tracking-[0.16em] text-slate-300">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
            {index < total - 1
              ? `Hiring chaos · Scene ${index + 1} / ${total}`
              : "After SmartScreen"}
          </div>
          <div className="mt-1.5 text-[13px] font-semibold text-white">
            {scene.label}
          </div>
          <p className="mt-0.5 whitespace-pre-line text-[11px] text-slate-200">
            {scene.description}
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
};

const HeroCinematic: React.FC = () => {
  const wrapperRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: wrapperRef,
    offset: ["start start", "end end"],
  });

  const totalScenes = SCENES.length;

  return (
    // Full scroll area – ~1 viewport per scene
    <section
      ref={wrapperRef}
      className="relative h-[720vh] bg-brand-light"
    >
      {/* Sticky viewport under the navbar (h-16) */}
      <div
        className="sticky top-16 flex items-center justify-center"
        style={{ height: "calc(100vh - 4rem)" }}
      >
        {/* soft gradient behind everything */}
        <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,_rgba(129,140,248,0.33),_transparent_55%),_radial-gradient(circle_at_bottom,_rgba(244,114,182,0.28),_transparent_55%)]" />

        {/* Scene stack */}
        <div className="relative h-full w-full">
          {SCENES.map((scene, index) => (
            <SceneLayer
              key={scene.label}
              scene={scene}
              index={index}
              total={totalScenes}
              scrollYProgress={scrollYProgress}
            />
          ))}

          {/* “Scroll” hint at the very beginning */}
          <motion.div
            className="pointer-events-none absolute inset-x-0 bottom-6 flex justify-center"
            style={{
              opacity: useTransform(
                scrollYProgress,
                [0, 0.06],
                [1, 0]
              ),
            }}
          >
            <div className="inline-flex items-center gap-2 rounded-full bg-black/55 px-3 py-1.5 text-[11px] text-slate-100 backdrop-blur-md">
              <span className="h-1 w-1 rounded-full bg-emerald-400" />
              Scroll to see how hiring teams move
              from chaos to SmartScreen.
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroCinematic;
