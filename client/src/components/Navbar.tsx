import { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { Menu, X, Smile } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Portfolio", to: "portfolio" },
    { name: "Brands", to: "brands" },
    { name: "About", to: "about" },
    { name: "Contact", to: "contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/90 backdrop-blur-md py-4 border-b border-primary/10" : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <Link
          to="hero"
          smooth={true}
          className="text-xl md:text-2xl font-heading font-black tracking-tighter text-primary cursor-pointer flex items-center gap-1"
        >
          WHY NOT<span className="text-secondary">?</span>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.to}
              smooth={true}
              offset={-80}
              className="text-xs uppercase font-bold tracking-widest text-primary/70 hover:text-secondary transition-colors cursor-pointer"
            >
              {link.name}
            </Link>
          ))}
          <Link
            to="contact"
            smooth={true}
            className="px-5 py-2 bg-primary text-background font-bold hover:bg-secondary transition-all duration-300 text-xs uppercase tracking-widest cursor-pointer"
          >
            Say Hi!
          </Link>
        </div>

        <button
          className="md:hidden text-primary"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 100 }}
            className="fixed inset-0 bg-background z-50 flex flex-col items-center justify-center gap-8 md:hidden"
          >
            <button className="absolute top-6 right-6" onClick={() => setIsOpen(false)}><X /></button>
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.to}
                smooth={true}
                offset={-80}
                onClick={() => setIsOpen(false)}
                className="text-3xl font-heading font-bold text-primary hover:text-secondary transition-colors cursor-pointer"
              >
                {link.name}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
