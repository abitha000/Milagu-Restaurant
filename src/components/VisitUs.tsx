import { motion } from "framer-motion";
import { MapPin, Phone, Clock, Mail } from "lucide-react";

const MAPS_LINK = "https://maps.app.goo.gl/Xa3y1BevvRRk7oLy6";

const VisitUs = () => {
  return (
    <section id="visit" className="section-padding bg-secondary/50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="font-body text-sm uppercase tracking-[0.3em] text-primary font-medium mb-4">
            Find Us
          </p>
          <h2 className="font-display text-5xl md:text-6xl text-foreground tracking-wide">
            VISIT <span className="text-primary">MILAGU</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="rounded-xl overflow-hidden aspect-[4/3] bg-card border border-border"
          >
            <iframe
              src="https://www.google.com/maps?q=Milagu+Restaurant&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Milagu Restaurant Location"
            />
          </motion.div>

          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="flex flex-col justify-center space-y-8"
          >
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                <MapPin size={20} className="text-primary" />
              </div>
              <div>
                <h3 className="font-display text-xl text-foreground tracking-wide mb-1">Location</h3>
                <p className="font-body text-sm text-muted-foreground">Milagu Restaurant, Tamil Nadu, India</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Phone size={20} className="text-primary" />
              </div>
              <div>
                <h3 className="font-display text-xl text-foreground tracking-wide mb-1">Call Us</h3>
                <a href="tel:+919940066552" className="font-body text-sm text-muted-foreground hover:text-primary transition-colors">
                  +91 99400 66552
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Mail size={20} className="text-primary" />
              </div>
              <div>
                <h3 className="font-display text-xl text-foreground tracking-wide mb-1">Email</h3>
                <a href="mailto:milagurestaurant@gmail.com" className="font-body text-sm text-muted-foreground hover:text-primary transition-colors">
                  milagurestaurant@gmail.com
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Clock size={20} className="text-primary" />
              </div>
              <div>
                <h3 className="font-display text-xl text-foreground tracking-wide mb-1">Hours</h3>
                <p className="font-body text-sm text-muted-foreground">Mon – Sun: 11:00 AM – 11:00 PM</p>
              </div>
            </div>

            <a
              href={MAPS_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 bg-primary text-primary-foreground font-body font-semibold text-sm uppercase tracking-widest rounded-sm hover:bg-primary/90 transition-all duration-300 glow-red w-fit"
            >
              Get Directions
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default VisitUs;
