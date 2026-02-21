import { motion, AnimatePresence, useInView } from "framer-motion";
import { useState, useEffect, useRef } from "react";

// -----------------------------------------
// CONSTANTS
// -----------------------------------------
// Phrase segments with colors for Phase 1 ticker
const PHRASE_SEGMENTS: { text: string; color: string }[] = [
  { text: "everyone tells a story, ", color: "#FFFFFF" },
  { text: "why not ", color: "#FE9B31" },
  { text: "tell it better?", color: "#F2E9CD" },
];

const COLORS = {
  cream: "#F2E9CD",
  orange: "#FE9B31",
  white: "#FFFFFF",
};

// Build flat list of characters with color for ticker
function getTickerChars(): { char: string; color: string }[] {
  const chars: { char: string; color: string }[] = [];
  for (const seg of PHRASE_SEGMENTS) {
    for (const char of seg.text) chars.push({ char, color: seg.color });
  }
  return chars;
}

const TICKER_CHARS = getTickerChars();

// Phase 1: one marquee interval (medium speed) then short hold, then Phase 2
const MARQUEE_DURATION_S = 2.5;
const PHASE1_DURATION_MS = Math.round(MARQUEE_DURATION_S * 1000) + 500;
const MARQUEE_FROM_RIGHT_PX = 420;

// -----------------------------------------
// ICON COMPONENTS
// -----------------------------------------

function HandIcon({ className }: { className?: string }) {
  return (
    <svg width="28" height="27" viewBox="0 0 7 7" fill="none" className={className}>
      <ellipse cx="3.5" cy="3.5" rx="2.2" ry="2.1" fill="#CDEEB7" />
      <path d="M1 2.5 Q2 1 3.5 2 Q5 3 6 4" stroke="#3F9258" strokeWidth="0.7" fill="none" />
    </svg>
  );
}

function WaveIcon({ className }: { className?: string }) {
  return (
    <svg width="12" height="8" viewBox="0 0 3 2" className={className}>
      <path d="M0 1 Q0.75 0 1.5 1 Q2.25 2 3 1" stroke="#337CDA" strokeWidth="0.5" fill="none" />
    </svg>
  );
}

function CameraIcon({ className }: { className?: string }) {
  return (
    <svg width="28" height="23" viewBox="0 0 7 6" fill="none" className={className}>
      <rect
        x="0.5"
        y="0.5"
        width="6"
        height="5"
        rx="0.5"
        fill="#E76725"
        stroke="#F2D8CD"
        strokeWidth="0.9"
      />
      <circle cx="3.5" cy="2.8" r="0.8" fill="#F2D8CD" />
    </svg>
  );
}

// -----------------------------------------
// ANIMATION VARIANTS
// -----------------------------------------

// Phase 1 — letter dance: wave stagger so all letters dance in sequence
const DANCE_STAGGER_S = 0.055;

// Shared layout: headline/ticker area + fixed underline + fixed base text
const HEADLINE_CLASS =
  "text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-heading font-bold leading-tight";

const BASE_PARAGRAPH =
  "Your story isn't just what you say — it's what people see, feel, and remember!";

// Phase 2 — Headline spring entrance
const headlineVariant = {
  hidden: { x: 80, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      type: "spring" as const,
      stiffness: 70,
      damping: 18,
    },
  },
};

// -----------------------------------------
// MAIN COMPONENT
// -----------------------------------------

export default function Story() {
  const [showFinal, setShowFinal] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { amount: 0.25, once: false });

  // Phase 1 runs (slow ticker); then switch to Phase 2 after full duration.
  // Reset when leaving view so animation can replay when scrolling back.
  useEffect(() => {
    if (!isInView) {
      setShowFinal(false);
      return;
    }
    const t = setTimeout(() => setShowFinal(true), PHASE1_DURATION_MS);
    return () => clearTimeout(t);
  }, [isInView]);

  return (
    <section
      id="story"
      ref={sectionRef}
      className="relative min-h-screen w-full bg-[#A03A13] flex items-center justify-center px-6 md:px-20 py-16 overflow-hidden"
    >
      <div className="relative w-full max-w-[1920px] mx-auto flex items-center justify-center min-h-[60vh]">
        <AnimatePresence mode="wait">
          {!showFinal ? (
            // -----------------------------------------
            // PHASE 1 — marquee: whole line from right at medium speed, 1 interval then stop; all letters dancing
            // -----------------------------------------
            <motion.div
              key="flowing"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              exit={{ opacity: 0, transition: { duration: 0.35 } }}
              className="flex flex-col gap-10 md:gap-16 w-full"
            >
              {/* Marquee: same slot as Phase 2 headline — slides in from right, stops on that line */}
              <div className="relative">
                <div className="w-full flex justify-start overflow-x-hidden">
                  <motion.h1
                    className={`${HEADLINE_CLASS} flex flex-nowrap justify-start overflow-visible tracking-tight`}
                    initial={{ x: MARQUEE_FROM_RIGHT_PX, opacity: 0 }}
                    animate={
                      isInView
                        ? { x: 0, opacity: 1 }
                        : { x: MARQUEE_FROM_RIGHT_PX, opacity: 0 }
                    }
                    transition={{
                      x: {
                        duration: MARQUEE_DURATION_S,
                        ease: [0.25, 0.46, 0.45, 0.94],
                      },
                      opacity: { duration: 0.3 },
                    }}
                  >
                    {TICKER_CHARS.map(({ char, color }, i) => (
                      <motion.span
                        key={i}
                        style={{ color }}
                        className="inline-block"
                        animate={
                          isInView
                            ? {
                                y: [0, -7, 4, 0],
                                rotate: [0, 5, -5, 0],
                              }
                            : { y: 0, rotate: 0 }
                        }
                        transition={{
                          y: {
                            duration: 0.65,
                            delay: i * DANCE_STAGGER_S,
                            repeat: 5,
                            repeatDelay: 0.08,
                          },
                          rotate: {
                            duration: 0.65,
                            delay: i * DANCE_STAGGER_S,
                            repeat: 5,
                            repeatDelay: 0.08,
                          },
                        }}
                      >
                        {char === " " ? "\u00A0" : char}
                      </motion.span>
                    ))}
                  </motion.h1>
                </div>
              </div>

              {/* Underline — fixed, same as Phase 2 */}
              <div className="w-full max-w-[700px] border-t border-[#FE9B31]" />

              {/* Base text — fixed in both phases */}
              <p className="max-w-[500px] text-[#F2E9CD] text-xl md:text-2xl leading-7 font-normal">
                {BASE_PARAGRAPH}
              </p>
            </motion.div>
          ) : (
            // -----------------------------------------
            // PHASE 2 — headline + icons, same underline + base text
            // -----------------------------------------
            <motion.div
              key="final"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4 }}
              className="flex flex-col gap-10 md:gap-16 w-full"
            >
              {/* Headline */}
              <motion.div
                variants={headlineVariant}
                initial="hidden"
                animate="visible"
                className="relative"
              >
                <h2 className={`${HEADLINE_CLASS} text-[#F2E9CD]`}>
                  <span className="text-[#FE9B31]">why not </span>
                  <span>tell it better?</span>
                </h2>

                {/* Floating Icons */}
                <span className="absolute -top-1 -left-2 md:left-4">
                  <HandIcon className="w-6 h-6 md:w-7 md:h-7" />
                </span>

                <span className="absolute bottom-0 left-1/2 md:left-[58%]">
                  <WaveIcon className="w-3 h-2" />
                </span>

                <span className="absolute -top-1 right-4 md:right-20">
                  <CameraIcon className="w-6 h-5 md:w-7 md:h-6" />
                </span>
              </motion.div>

              {/* Underline — fixed, same as Phase 1 */}
              <motion.div
                className="w-full max-w-[700px] border-t border-[#FE9B31] origin-left"
                initial={{ scaleX: 0, opacity: 0 }}
                animate={{ scaleX: 1, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              />

              {/* Base text — fixed in both phases */}
              <motion.p
                initial={{ x: 40, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.35 }}
                className="max-w-[500px] text-[#F2E9CD] text-xl md:text-2xl leading-7 font-normal"
              >
                {BASE_PARAGRAPH}
              </motion.p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}