import { Instagram, Phone, Mail } from "lucide-react";
import logoImg from "@/assets/logo.jpg";

const RestaurantFooter = () => {
  return (
    <footer className="bg-card border-t border-border py-12 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-10 items-start">
          {/* Brand */}
          <div className="flex flex-col items-start gap-4">
            <div className="flex items-center gap-3">
              <img src={logoImg} alt="Milagu" className="w-10 h-10 rounded-lg object-contain" />
              <span className="font-display text-2xl tracking-wider text-foreground">MILAGU</span>
            </div>
            <p className="font-body text-sm text-muted-foreground font-light max-w-xs">
              Authentic South Indian non-veg. Bold flavors rooted in Tamil tradition.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-lg tracking-wider text-foreground mb-4">QUICK LINKS</h4>
            <div className="flex flex-col gap-2">
              {["Home", "About", "Menu", "Gallery", "Book a Table", "Visit Us"].map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase().replace(/ /g, "")}`}
                  className="font-body text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>

          {/* Contact & Social */}
          <div>
            <h4 className="font-display text-lg tracking-wider text-foreground mb-4">CONNECT</h4>
            <div className="space-y-3">
              <a href="tel:+919940066552" className="flex items-center gap-2 font-body text-sm text-muted-foreground hover:text-primary transition-colors">
                <Phone size={14} /> +91 99400 66552
              </a>
              <a href="mailto:milagurestaurant@gmail.com" className="flex items-center gap-2 font-body text-sm text-muted-foreground hover:text-primary transition-colors">
                <Mail size={14} /> milagurestaurant@gmail.com
              </a>
            </div>
            <div className="flex gap-4 mt-6">
              <a
                href="https://www.instagram.com/milagu_restaurant?igsh=ZjV0d3k1N2VxY2Np"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all duration-300"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
              <a
                href="https://wa.me/919940066552"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all duration-300"
                aria-label="WhatsApp"
              >
                <Phone size={18} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-10 pt-6 text-center">
          <p className="font-body text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} Milagu Restaurant. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default RestaurantFooter;
