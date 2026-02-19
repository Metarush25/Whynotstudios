import { motion } from "framer-motion";

const brands = [
  { name: "GoPro", logo: "https://commons.wikimedia.org/wiki/File:GoPro_logo_light.svg" },
  { name: "Red Bull", logo: "https://upload.wikimedia.org/wikipedia/en/thumb/f/f5/Red_Bull_Racing_logo.svg/1200px-Red_Bull_Racing_logo.svg.png" },
  { name: "Freshpik", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Apple_logo_black.svg/1667px-Apple_logo_black.svg.png" },
  { name: "Social", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Tesla_Motors.svg/1200px-Tesla_Motors.svg.png" },
  { name: "xto10x", logo: "https://upload.wikimedia.org/wikipedia/en/thumb/f/f5/Red_Bull_Racing_logo.svg/1200px-Red_Bull_Racing_logo.svg.png" },
];

export default function Brands() {
  return (
    <section id="brands" className="py-20 bg-background overflow-hidden border-y border-primary/5">
      <div className="container mx-auto px-6 mb-12 flex flex-col md:flex-row justify-between items-end gap-4">
        <div>
          <h3 className="text-3xl font-heading text-primary lowercase leading-[0.9]">brands that asked why not.</h3>
        </div>
        <p className="text-primary/60 text-sm max-w-xs italic font-medium">
          Trusted by global giants to tell stories that matter.
        </p>
      </div>
      
      <div className="flex overflow-hidden group">
        <motion.div 
          animate={{ x: [0, -1000] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="flex gap-20 items-center min-w-full"
        >
          {[...brands, ...brands].map((brand, i) => (
            <img 
              key={i} 
              src={brand.logo} 
              alt={brand.name} 
              className="h-8 md:h-12 w-auto opacity-30 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-500"
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
