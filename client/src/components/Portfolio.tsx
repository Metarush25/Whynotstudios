import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import weddingImg from "@assets/generated_images/wedding_videography_cinematic_shot.png";
import corporateImg from "@assets/generated_images/corporate_event_videography_professional.png";
import musicImg from "@assets/generated_images/music_video_production_neon.png";
import docImg from "@assets/generated_images/documentary_filmmaking_nature.png";
import commercialImg from "@assets/generated_images/commercial_product_studio_shot.png";

const categories = [
  {
    id: 1,
    title: "Wild Hearts",
    category: "[ WEDDING FILMS ]",
    image: weddingImg,
    duration: "2W",
  },
  {
    id: 2,
    title: "Neon Pulse",
    category: "[ MUSIC VIDEOS ]",
    image: musicImg,
    duration: "3M",
  },
  {
    id: 3,
    title: "Apex Corp",
    category: "[ CORPORATE DOCS ]",
    image: corporateImg,
    duration: "2Y",
  },
  {
    id: 4,
    title: "Smartbeans",
    category: "[ VISUAL IDENTITY ]",
    image: docImg,
    duration: "2M",
  },
  {
    id: 5,
    title: "Luxury Time",
    category: "[ BRAND FILMS ]",
    image: commercialImg,
    duration: "1M",
  },
];

export default function Portfolio() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  return (
    <section 
      id="portfolio" 
      ref={containerRef} 
      className="relative h-screen bg-background border-b border-primary/5 flex items-center justify-center overflow-hidden"
    >
      <div className="w-full flex flex-col items-center justify-center">
        {/* Title stays fixed */}
        <div className="absolute top-12 left-6 md:left-20 z-30">
          <h3 className="text-5xl md:text-7xl font-heading text-primary leading-[0.9] lowercase">
            latest <span className="text-primary/70 italic">dispatches</span>
          </h3>
        </div>

        {/* Animation Layer */}
        <div className="relative w-full max-w-7xl flex items-center justify-center px-4 md:px-10">
          <div className="relative w-full h-[600px] flex items-center justify-center">
            {categories.map((item, index) => {
              // Exact spread: 1:1 mapping from 0 to 1
              const spacing = 280; 
              const finalX = (index - 2) * spacing;
              
              const x = useTransform(scrollYProgress, [0.4, 0.6], [0, finalX]);
              const rotate = useTransform(scrollYProgress, [0.4, 0.6], [0, (index - 2) * 5]);
              const y = useTransform(scrollYProgress, [0.4, 0.6], [0, (index % 2 === 0 ? -15 : 15)]);
              const opacity = useTransform(scrollYProgress, [0.35, 0.45], [0, 1]);

              return (
                <motion.div
                  key={item.id}
                  style={{
                    x,
                    y,
                    rotate,
                    opacity,
                    zIndex: index + 1,
                    position: "absolute",
                    clipPath: "polygon(0% 5%, 5% 5%, 5% 0%, 10% 0%, 10% 5%, 15% 5%, 15% 0%, 20% 0%, 20% 5%, 25% 5%, 25% 0%, 30% 0%, 30% 5%, 35% 5%, 35% 0%, 40% 0%, 40% 5%, 45% 5%, 45% 0%, 50% 0%, 50% 5%, 55% 5%, 55% 0%, 60% 0%, 60% 5%, 65% 5%, 65% 0%, 70% 0%, 70% 5%, 75% 5%, 75% 0%, 80% 0%, 80% 5%, 85% 5%, 85% 0%, 90% 0%, 90% 5%, 95% 5%, 95% 0%, 100% 0%, 100% 5%, 100% 10%, 95% 10%, 95% 15%, 100% 15%, 100% 20%, 95% 20%, 95% 25%, 100% 25%, 100% 30%, 95% 30%, 95% 35%, 100% 35%, 100% 40%, 95% 40%, 95% 45%, 100% 45%, 100% 50%, 95% 50%, 95% 55%, 100% 55%, 100% 60%, 95% 60%, 95% 65%, 100% 65%, 100% 70%, 95% 70%, 95% 75%, 100% 75%, 100% 80%, 95% 80%, 95% 85%, 100% 85%, 100% 90%, 95% 90%, 95% 95%, 100% 95%, 100% 100%, 95% 100%, 95% 95%, 90% 95%, 90% 100%, 85% 100%, 85% 95%, 80% 95%, 80% 100%, 75% 100%, 75% 95%, 70% 95%, 70% 100%, 65% 100%, 65% 95%, 60% 95%, 60% 100%, 55% 100%, 55% 95%, 50% 95%, 50% 100%, 45% 100%, 45% 95%, 40% 95%, 40% 100%, 35% 100%, 35% 95%, 30% 95%, 30% 100%, 25% 100%, 25% 95%, 20% 95%, 20% 100%, 15% 100%, 15% 95%, 10% 95%, 10% 100%, 5% 100%, 5% 95%, 0% 95%, 0% 90%, 5% 90%, 5% 85%, 0% 85%, 0% 80%, 5% 80%, 5% 75%, 0% 75%, 0% 70%, 5% 70%, 5% 65%, 0% 65%, 0% 60%, 5% 60%, 5% 55%, 0% 55%, 0% 50%, 5% 50%, 5% 45%, 0% 45%, 0% 40%, 5% 40%, 5% 35%, 0% 35%, 0% 30%, 5% 30%, 5% 25%, 0% 25%, 0% 20%, 5% 20%, 5% 15%, 0% 15%, 0% 10%, 5% 10%, 5% 5%, 0% 5%)",
                  }}
                  className="w-[180px] md:w-[240px] lg:w-[280px] bg-white p-4 md:p-5 shadow-2xl shadow-primary/20 group cursor-pointer border-4 border-primary/20 hover:border-primary/40 transition-colors"
                >
                  <div className="relative aspect-[4/3] overflow-hidden mb-3 bg-primary/10">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover grayscale brightness-110 contrast-125 group-hover:scale-105 transition-all duration-500"
                    />
                  </div>
                  
                  <div className="flex flex-col border-t border-primary/10 pt-3">
                    <h4 className="text-lg md:text-xl lg:text-2xl font-heading font-black text-primary leading-tight mb-1 lowercase">
                      {item.title}
                    </h4>
                    <div className="flex justify-between items-end">
                      <span className="text-[8px] md:text-[10px] uppercase font-black tracking-tighter text-secondary leading-none">
                        {item.category}
                      </span>
                      <span className="text-xl md:text-2xl lg:text-3xl font-heading font-black text-primary leading-none">
                        {item.duration}
                      </span>
                    </div>
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
