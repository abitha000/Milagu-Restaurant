import { motion } from "framer-motion";
import ambienceImg from "@/assets/ambience.jpg";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={ambienceImg}
          alt="Milagu Restaurant Ambience"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-background/80" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-background/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="font-body text-sm md:text-base uppercase tracking-[0.3em] text-primary font-medium mb-6"
        >
          Authentic South Indian Non-Veg
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="font-display text-6xl md:text-8xl lg:text-9xl tracking-wider text-foreground leading-none mb-4"
        >
          WHERE PEPPER
          <br />
          <span className="text-primary">MEETS FIRE</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.6 }}
          className="font-body text-muted-foreground text-lg md:text-xl max-w-xl mx-auto mb-10 font-light"
        >
          Bold Tamil flavors. Roaring spice. Every dish tells a story forged in tradition.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href="#menu"
            className="inline-flex items-center justify-center px-8 py-4 bg-primary text-primary-foreground font-body font-semibold text-sm uppercase tracking-widest rounded-sm hover:bg-primary/90 transition-all duration-300 glow-red"
          >
            View Menu
          </a>
          <a
            href="#visit"
            className="inline-flex items-center justify-center px-8 py-4 border border-foreground/20 text-foreground font-body font-semibold text-sm uppercase tracking-widest rounded-sm hover:border-primary hover:text-primary transition-all duration-300"
          >
            Visit Us
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-[1px] h-12 bg-gradient-to-b from-primary to-transparent"
        />
      </motion.div>
    </section>
  );
};

export default HeroSection;
