import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Flame } from "lucide-react";
import { menuData } from "@/data/menuData";

const MenuSection = () => {
  const [activeCategory, setActiveCategory] = useState(menuData[0].category);

  const activeItems = menuData.find((c) => c.category === activeCategory)?.items ?? [];

  return (
    <section id="menu" className="section-padding bg-background">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="font-body text-sm uppercase tracking-[0.3em] text-primary font-medium mb-4">
            Our Menu
          </p>
          <h2 className="font-display text-5xl md:text-6xl text-foreground tracking-wide">
            EXPLORE THE <span className="text-primary">FULL SPREAD</span>
          </h2>
        </motion.div>

        {/* Category tabs - scrollable */}
        <div className="mb-10 overflow-x-auto pb-2 scrollbar-hide">
          <div className="flex gap-2 min-w-max justify-center">
            {menuData.map((cat) => (
              <button
                key={cat.category}
                onClick={() => setActiveCategory(cat.category)}
                className={`px-4 py-2 font-body text-xs uppercase tracking-wider rounded-sm transition-all duration-300 whitespace-nowrap ${
                  activeCategory === cat.category
                    ? "bg-primary text-primary-foreground"
                    : "bg-secondary text-muted-foreground hover:text-foreground hover:bg-muted"
                }`}
              >
                {cat.category}
              </button>
            ))}
          </div>
        </div>

        {/* Menu Items */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3"
          >
            {activeItems.map((item) => (
              <div
                key={item.name}
                className={`flex items-center gap-3 px-5 py-4 rounded-lg border transition-all duration-300 ${
                  item.isSpecial
                    ? "border-accent/30 bg-accent/5 hover:border-accent/60"
                    : "border-border hover:border-primary/30 bg-card/50"
                }`}
              >
                {item.isSpecial && (
                  <Flame size={16} className="text-accent flex-shrink-0" />
                )}
                <span
                  className={`font-body text-sm font-medium ${
                    item.isSpecial ? "text-accent" : "text-foreground"
                  }`}
                >
                  {item.name}
                </span>
              </div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default MenuSection;
