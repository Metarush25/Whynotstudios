import { motion } from "framer-motion";
import { useState } from "react";

// All brand logos from assets – imported and mapped to brand names
import goProLogo from "@/assets/Brand logos Why Not Studios/go pro.png";
import redbullLogo from "@/assets/Brand logos Why Not Studios/redbull logo.jpeg";
import freshpikLogo from "@/assets/Brand logos Why Not Studios/Freshpik logo.png";
import socialsLogo from "@/assets/Brand logos Why Not Studios/Socials logo.png";
import xto10xLogo from "@/assets/Brand logos Why Not Studios/x to 10x.png";
import creativeDignityLogo from "@/assets/Brand logos Why Not Studios/ceative-dignity-logo.png";
import lldcLogo from "@/assets/Brand logos Why Not Studios/LLDC Bhhuj.png";
import industreeLogo from "@/assets/Brand logos Why Not Studios/Logo-Industree-Square-Transparent.png";
import googleStartupsLogo from "@/assets/Brand logos Why Not Studios/Logo_for_Google_for_Startups_page.png";
import growthSchoolLogo from "@/assets/Brand logos Why Not Studios/GrowthSchool-Logo.png";
import rebalanceLogo from "@/assets/Brand logos Why Not Studios/rebalance_logo.jpg";

const brands = [
  { name: "GoPro", logo: goProLogo },
  { name: "Red Bull", logo: redbullLogo },
  { name: "Freshpik", logo: freshpikLogo },
  { name: "Socials", logo: socialsLogo },
  { name: "X to 10x", logo: xto10xLogo },
  { name: "Creative Dignity", logo: creativeDignityLogo },
  { name: "LLDC Bhuj", logo: lldcLogo },
  { name: "Industree", logo: industreeLogo },
  { name: "Google for Startups", logo: googleStartupsLogo },
  { name: "GrowthSchool", logo: growthSchoolLogo },
  { name: "Rebalance", logo: rebalanceLogo },
];

const LOGO_BOX_SIZE = "h-14 w-28 md:h-16 md:w-32"; // fixed size per logo for consistency

function BrandLogo({ brand }: { brand: (typeof brands)[0] }) {
  const [errored, setErrored] = useState(false);

  if (errored) {
    return (
      <div className={`${LOGO_BOX_SIZE} flex items-center justify-center shrink-0`}>
        <span className="text-primary/50 text-sm font-semibold whitespace-nowrap text-center">
          {brand.name}
        </span>
      </div>
    );
  }

  return (
    <div className={`${LOGO_BOX_SIZE} flex items-center justify-center shrink-0`}>
      <img
        src={brand.logo}
        alt={brand.name}
        className="max-h-full max-w-full w-auto h-auto object-contain"
        onError={() => setErrored(true)}
      />
    </div>
  );
}

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

      <div className="flex overflow-hidden bg-white py-8">
  <motion.div
    className="flex gap-10 items-center whitespace-nowrap"
    animate={{ x: ["0%", "-50%"] }}
    transition={{
      duration: 15, // control speed here
      repeat: Infinity,
      ease: "linear",
    }}
  >
    {[...brands, ...brands].map((brand, i) => (
      <BrandLogo key={i} brand={brand} />
    ))}
  </motion.div>
</div>
    </section>
  );
}
