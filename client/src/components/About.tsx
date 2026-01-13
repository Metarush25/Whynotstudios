import { motion } from "framer-motion";
import { Check, Smile } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-24 bg-primary/5 relative">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-5xl md:text-6xl font-heading text-primary mb-8 leading-[0.9] lowercase">
              a studio for the <span className="text-primary/80 italic">unconventional</span>.
            </h3>
            <p className="text-primary/70 text-lg font-medium leading-relaxed mb-6">
              Why Not Studios isn't your average production house. We're a collective of rebels who believe that "good enough" is the enemy of "legendary."
            </p>
            <p className="text-primary/70 text-lg font-medium leading-relaxed mb-10">
              We ditched the corporate rulebook to focus on raw, authentic storytelling. Whether it's a global ad or an intimate doc, we bring a "Why Not?" attitude to every frame.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                " 8K Sensors",
                "Guerilla-Style Agility",
                "Bespoke Soundscapes",
                "Color with Character"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 bg-white p-4 shadow-sm">
                  <Smile className="w-5 h-5 text-secondary" />
                  <span className="text-primary font-bold text-sm uppercase tracking-tight">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotate: 2 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-[4/5] bg-white p-4 shadow-2xl shadow-primary/20 rotate-2 hover:rotate-0 transition-transform duration-500">
               <div className="w-full h-full bg-primary/10 flex flex-col items-center justify-center p-10 border border-primary/5">
                  <div className="text-secondary mb-4"><Smile size={80} strokeWidth={1} /></div>
                  <span className="font-heading text-4xl text-primary font-black text-center mb-2">WHY NOT?</span>
                  <p className="text-center text-primary/40 text-xs uppercase tracking-widest leading-relaxed">
                    Captured by humans,<br />For humans.<br />Est. 2024
                  </p>
               </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
