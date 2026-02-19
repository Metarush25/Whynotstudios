import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Navbar from "@/components/Navbar";

export default function Story() {
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  // Slow horizontal movement
  const x = useTransform(
    scrollYProgress,
    [0, 1],
    ["60%", "-150%"]  // starts right, ends slightly left
  );

  const text = "Everyone has a story, why not tell it better?";
  const letters = text.split("");

  return (
    <>
      <Navbar />

      <section
        ref={sectionRef}
        className="relative h-[-1150vh] bg-[#A03A13]"
      >
        <div className="sticky top-0 h-screen flex items-center overflow-hidden">

          <motion.h1
            style={{ x }}
            className="text-[8vw] font-heading text-[#F2E9CD] whitespace-nowrap px-16 flex"
          >
            {letters.map((letter, i) => {
              const y = useTransform(
                scrollYProgress,
                [0, 1],
                [i % 2 === 0 ? -12 : 12, 0]
              );

              const rotate = useTransform(
                scrollYProgress,
                [0, 1],
                [i % 3 === 0 ? -6 : 6, 0]
              );

              return (
                <motion.span
                  key={i}
                  style={{ y, rotate }}
                  className="inline-block whitespace-pre"
                >
                  {letter}
                </motion.span>
              );
            })}
          </motion.h1>

        </div>
      </section>
    </>
  );
}
