import { motion } from "framer-motion";
import biryaniImg from "@/assets/biryani.jpg";
import thaliImg from "@/assets/thali.jpg";
import curryImg from "@/assets/curry-pot.jpg";

const AboutSection = () => {
  return (
    <section id="about" className="section-padding bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <p className="font-body text-sm uppercase tracking-[0.3em] text-primary font-medium mb-4">
              Our Story
            </p>
            <h2 className="font-display text-5xl md:text-6xl text-foreground tracking-wide mb-6">
              BORN FROM
              <br />
              <span className="text-primary">PEPPER & PRIDE</span>
            </h2>
            <div className="space-y-4 font-body text-muted-foreground font-light leading-relaxed">
              <p>
                Milagu is more than a name — it is an identity. In Tamil, "Milagu" means pepper,
                the king of spices that defines Chettinad and Kongu cuisine. Every grain of pepper
                we use carries centuries of culinary tradition.
              </p>
              <p>
                Our kitchen speaks the language of firewood, stone-ground masalas, and slow-cooked
                curries. From Nalli Biryani simmering in its own bone marrow to Nattu Kozhi roasted
                in fresh nallennai — this is food that remembers where it came from.
              </p>
              <p>
                No shortcuts. No compromises. Just bold, honest Tamil cooking.
              </p>
            </div>
          </motion.div>

          {/* Image Grid */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-2 gap-4"
          >
            <div className="space-y-4">
              <div className="rounded-lg overflow-hidden aspect-square">
                <img src={biryaniImg} alt="Biryani" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
              </div>
              <div className="rounded-lg overflow-hidden aspect-[4/3]">
                <img src={curryImg} alt="Curry" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
              </div>
            </div>
            <div className="pt-8">
              <div className="rounded-lg overflow-hidden aspect-[3/4]">
                <img src={thaliImg} alt="Thali" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
