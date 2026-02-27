import { motion } from "framer-motion";
import biryaniImg from "@/assets/biryani.jpg";
import curryPotImg from "@/assets/curry-pot.jpg";
import crabImg from "@/assets/crab.jpg";
import pakodaImg from "@/assets/pakoda.jpg";
import dosaImg from "@/assets/dosa.jpg";
import kheemaImg from "@/assets/kheema-pav.jpg";

const dishes = [
  {
    name: "Milagu Spl Nalli Biryani",
    description: "Bone marrow-infused rice layered with slow-cooked nalli, pepper, and saffron. Our crown jewel.",
    image: biryaniImg,
    badge: "Chef's Special",
  },
  {
    name: "Naatu Kozhi Nallennai Pepper Roast",
    description: "Country chicken roasted in cold-pressed sesame oil with cracked black pepper and curry leaves.",
    image: curryPotImg,
  },
  {
    name: "Vanjiram Tawa Fry",
    description: "Seer fish marinated in red chili masala, seared on a hot tawa until golden and crisp.",
    image: crabImg,
  },
  {
    name: "Madurai Mutton Kola Urundai",
    description: "Hand-rolled mutton keema balls infused with fennel and star anise, deep fried to perfection.",
    image: pakodaImg,
  },
  {
    name: "Kari Dosa",
    description: "Thin, crispy dosa stuffed with spiced mutton keema — a Milagu original that keeps them coming back.",
    image: dosaImg,
    badge: "Best Seller",
  },
  {
    name: "Chicken Pepper Chukka",
    description: "Dry-roasted chicken chunks tossed in freshly ground pepper and shallots. Bold and addictive.",
    image: kheemaImg,
  },
];

const SignatureDishes = () => {
  return (
    <section id="specials" className="section-padding bg-secondary/50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="font-body text-sm uppercase tracking-[0.3em] text-primary font-medium mb-4">
            Signature Plates
          </p>
          <h2 className="font-display text-5xl md:text-6xl text-foreground tracking-wide">
            THE DISHES THAT <span className="text-primary">DEFINE US</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {dishes.map((dish, i) => (
            <motion.div
              key={dish.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative bg-card rounded-lg overflow-hidden hover-lift cursor-default"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={dish.image}
                  alt={dish.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
              </div>

              {dish.badge && (
                <span className="absolute top-4 left-4 px-3 py-1 bg-accent text-accent-foreground font-body text-xs font-semibold uppercase tracking-wider rounded-sm">
                  {dish.badge}
                </span>
              )}

              <div className="p-6">
                <h3 className="font-display text-2xl text-foreground tracking-wide mb-2">
                  {dish.name}
                </h3>
                <p className="font-body text-sm text-muted-foreground font-light leading-relaxed">
                  {dish.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SignatureDishes;
