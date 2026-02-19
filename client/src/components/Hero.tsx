import { motion } from "framer-motion";
import { Link } from "react-scroll";
import { ArrowRight } from "lucide-react";
import heroVideo from "@assets/generated_videos/cinematic_camera_lens_racking_focus_in_dark_studio.mp4";

export default function Hero() {
  return (
    <section id="hero" className="relative h-screen w-full overflow-hidden">
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover opacity-30 grayscale brightness-150 contrast-75"
        >
          <source src={heroVideo} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-white/40 mix-blend-overlay" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-transparent to-background" />
      </div>
      <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-4">
        <motion.div
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2 }}
        >
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-heading text-primary mb-8 flex flex-col leading-[0.9] lowercase">
            why not <span className="text-primary/80 italic">studios</span>
          </h1>
          <p className="max-w-2xl mx-auto text-primary/80 text-xl font-medium leading-relaxed mb-12">
            Everyone has a story, why not tell it better?
          </p>
        </motion.div>
      </div>
    </section>
  );
}
