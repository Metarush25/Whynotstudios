import { motion } from "framer-motion";
import heroVideo from "@/assets/Hero-video.mp4";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen h-screen w-full overflow-hidden bg-[#40513B]"
    >
      {/* Full-screen video layer */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="min-h-full min-w-full h-full w-full object-cover"
        >
          <source src={heroVideo} type="video/mp4" />
        </video>
        {/* Dark green overlay for readability */}
        <div
          className="absolute inset-0 bg-[#40513B]/40"
          aria-hidden
        />
      </div>

      {/* Content: headline centered in viewport, tagline fixed at bottom */}
      <div className="relative z-10 h-full flex flex-col items-center px-4">
        {/* Headline: truly centered (flex-1 + flex center) */}
        <div className="flex-1 flex items-center justify-center w-full">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2 }}
          >
            <h1
              className="font-heading font-bold text-white leading-tight"
              style={{ fontFamily: "'Malinton', serif" }}
            >
              <span className="block text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl">
                Why Not
              </span>
              <span className="block text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl mt-1">
                Studios
              </span>
            </h1>
          </motion.div>
        </div>

        {/* Bottom tagline */}
        <p
          className="shrink-0 w-full max-w-md mx-auto pb-8 md:pb-10 text-base sm:text-lg md:text-xl lg:text-2xl font-normal text-[#FEFCF4] text-center"
          style={{ fontFamily: "'Montserrat', sans-serif" }}
        >
          Stories built to last, not scroll past.
        </p>
      </div>
    </section>
  );
}
