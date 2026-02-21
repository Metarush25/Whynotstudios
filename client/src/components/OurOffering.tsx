import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

const HOVER_COOLDOWN_MS = 480;

const OFFERINGS = [
  {
    titlePrefix: "Laying the",
    titleMain: "Foundation",
    cardColor: "bg-[#40513B]",
    bullets: [
      { text: "Scriptwriting & storyboarding", bold: "Scriptwriting" },
      { text: "Location scouting & permits", bold: "permits" },
      { text: "Equipment & Crew Planning", bold: "Planning" },
      { text: "Budget Management", bold: "Budget" },
    ],
  },
  {
    titlePrefix: "Bringing life to",
    titleMain: "Your Vision",
    cardColor: "bg-[#A03A13]",
    bullets: [
      { text: "Scriptwriting & storyboarding", bold: "Scriptwriting" },
      { text: "Location scouting & permits", bold: "permits" },
      { text: "Equipment & Crew Planning", bold: "Planning" },
      { text: "Budget Management", bold: "Budget" },
    ],
  },
  {
    titlePrefix: "Crafting the",
    titleMain: "Narration",
    cardColor: "bg-[#d4a84a]",
    bullets: [
      { text: "Scriptwriting & storyboarding", bold: "Scriptwriting" },
      { text: "Location scouting & permits", bold: "permits" },
      { text: "Equipment & Crew Planning", bold: "Planning" },
      { text: "Budget Management", bold: "Budget" },
    ],
  },
];

// Same behaviour for all three: active card always center (x: 0), others flank left/right
function getCardPosition(
  index: number,
  activeIndex: number
): { x: number; y: number; rotate: number; zIndex: number } {
  const isActive = index === activeIndex;
  if (isActive) return { x: 0, y: 0, rotate: 0, zIndex: 30 };
  if (index < activeIndex) {
    // Left side (one or two cards)
    const z = index === 0 ? 5 : 15;
    const x = activeIndex === 2 ? (index === 0 ? -300 : -260) : -280;
    return { x, y: 16, rotate: -12, zIndex: z };
  }
  // Right side (one or two cards)
  const z = index === 2 ? 5 : 15;
  const x = activeIndex === 0 ? (index === 1 ? 260 : 300) : 280;
  return { x, y: 16, rotate: 12, zIndex: z };
}

function BulletItem({
  text,
  bold,
}: {
  text: string;
  bold: string;
}) {
  const parts = text.split(bold);
  return (
    <li className="flex items-baseline gap-1">
      {parts[0]}
      <span className="font-bold">{bold}</span>
      {parts[1]}
    </li>
  );
}

export default function OurOffering() {
  const [activeIndex, setActiveIndex] = useState(0);
  const lastChangeRef = useRef(0);

  const handleCardEnter = (index: number) => {
    const now = Date.now();
    if (now - lastChangeRef.current < HOVER_COOLDOWN_MS) return;
    if (index === activeIndex) return;
    lastChangeRef.current = now;
    setActiveIndex(index);
  };

  return (
    <section
      id="our-offering"
      className="relative py-20 md:py-28 overflow-hidden min-h-[520px] md:min-h-[600px] flex items-center"
    >
      {/* Background image */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url(/offering-bg.png)" }}
        aria-hidden
      />
      <div className="absolute inset-0 z-[1] bg-black/50" aria-hidden />
      {/* Starburst decorations */}
      <div
        className="absolute bottom-0 left-0 w-64 h-64 md:w-80 md:h-80 opacity-20 pointer-events-none z-[2]"
        aria-hidden
      >
        <svg viewBox="0 0 200 200" className="w-full h-full text-primary">
          <path
            d="M100 20 L105 100 L100 180 L95 100 Z M20 100 L100 95 L180 100 L100 105 Z M45 45 L95 100 L45 155 L55 100 Z M155 45 L105 100 L155 155 L145 100 Z"
            fill="currentColor"
          />
        </svg>
      </div>
      <div
        className="absolute top-0 right-0 w-64 h-64 md:w-80 md:h-80 opacity-20 pointer-events-none rotate-180 z-[2]"
        aria-hidden
      >
        <svg viewBox="0 0 200 200" className="w-full h-full text-primary">
          <path
            d="M100 20 L105 100 L100 180 L95 100 Z M20 100 L100 95 L180 100 L100 105 Z M45 45 L95 100 L45 155 L55 100 Z M155 45 L105 100 L155 155 L145 100 Z"
            fill="currentColor"
          />
        </svg>
      </div>

      <div className="container mx-auto px-6 md:px-10 max-w-6xl relative z-10">
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-12 md:mb-16 text-center">
          Our Offering
        </h2>

        <div className="relative h-[360px] md:h-[380px]">
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex justify-center items-center w-0 h-0">
            {OFFERINGS.map((item, index) => {
              const isActive = activeIndex === index;
              const pos = getCardPosition(index, activeIndex);

              return (
                <motion.div
                  key={index}
                  onMouseEnter={() => handleCardEnter(index)}
                  className="absolute cursor-pointer select-none rounded-2xl overflow-hidden shadow-2xl origin-center"
                  initial={false}
                  animate={{
                    width: isActive ? 340 : 200,
                    height: isActive ? 340 : 170,
                    x: pos.x - (isActive ? 170 : 100),
                    y: pos.y - (isActive ? 170 : 85),
                    rotate: pos.rotate,
                    zIndex: pos.zIndex,
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 260,
                    damping: 32,
                  }}
                  style={{ left: 0, top: 0 }}
                >
                <div
                  className={`w-full h-full flex flex-col text-white ${
                    item.cardColor
                  } ${isActive ? "p-5 md:p-6 pb-4" : "p-4 md:p-5"}`}
                >
                  <div className="mb-1">
                    <div className="text-sm md:text-base text-white/90 font-body font-normal">
                      {item.titlePrefix}
                    </div>
                    <h3 className="text-2xl md:text-3xl font-heading font-bold leading-tight">
                      {item.titleMain}
                    </h3>
                  </div>

                  <AnimatePresence mode="wait">
                    {isActive ? (
                      <motion.div
                        key="content"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.22 }}
                        className="overflow-hidden mt-2 min-h-0"
                      >
                        <div className="flex items-center gap-2 mb-3">
                          <span className="w-1.5 h-1.5 rounded-full bg-white shrink-0" />
                          <span className="flex-1 border-t border-white/70" />
                        </div>
                        <ul className="space-y-1 text-sm md:text-base text-white/95 font-body list-none pl-0">
                          {item.bullets.map((bullet, i) => (
                            <BulletItem
                              key={i}
                              text={bullet.text}
                              bold={bullet.bold}
                            />
                          ))}
                        </ul>
                      </motion.div>
                    ) : null}
                  </AnimatePresence>
                </div>
              </motion.div>
            );
          })}
          </div>
        </div>
      </div>
    </section>
  );
}
