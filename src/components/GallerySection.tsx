import { motion } from "framer-motion";
import biryaniImg from "@/assets/biryani.jpg";
import thaliImg from "@/assets/thali.jpg";
import pakodaImg from "@/assets/pakoda.jpg";
import dosaImg from "@/assets/dosa.jpg";
import curryImg from "@/assets/curry-pot.jpg";
import crabImg from "@/assets/crab.jpg";
import kheemaImg from "@/assets/kheema-pav.jpg";
import parathaImg from "@/assets/paratha.jpg";
import ambienceImg from "@/assets/ambience.jpg";

const images = [
  { src: biryaniImg, alt: "Nalli Biryani", span: "col-span-2 row-span-2" },
  { src: pakodaImg, alt: "Onion Pakoda", span: "" },
  { src: dosaImg, alt: "Kari Dosa", span: "" },
  { src: crabImg, alt: "Crab Masala", span: "col-span-2" },
  { src: curryImg, alt: "Nalli Kuzhambu", span: "" },
  { src: parathaImg, alt: "Egg Parotta", span: "" },
  { src: thaliImg, alt: "Non-Veg Meals", span: "" },
  { src: kheemaImg, alt: "Chicken Chukka", span: "" },
  { src: ambienceImg, alt: "Restaurant Interior", span: "col-span-2" },
];

const GallerySection = () => {
  return (
    <section id="gallery" className="section-padding bg-secondary/50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="font-body text-sm uppercase tracking-[0.3em] text-primary font-medium mb-4">
            The Experience
          </p>
          <h2 className="font-display text-5xl md:text-6xl text-foreground tracking-wide">
            A FEAST FOR <span className="text-primary">THE EYES</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 auto-rows-[200px] md:auto-rows-[220px]">
          {images.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className={`group rounded-lg overflow-hidden ${img.span}`}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
