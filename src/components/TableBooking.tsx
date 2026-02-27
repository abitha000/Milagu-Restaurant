import { useState } from "react";
import { motion } from "framer-motion";

const WHATSAPP_NUMBER = "919940066552";

const TableBooking = () => {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    date: "",
    time: "",
    guests: "",
    requests: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const message = [
      "Table Reservation Request",
      "",
      `Name: ${form.name}`,
      `Phone: ${form.phone}`,
      `Date: ${form.date}`,
      `Time: ${form.time}`,
      `Number of Guests: ${form.guests}`,
      form.requests ? `Special Requests: ${form.requests}` : "",
      "",
      "Sent via Milagu Restaurant Website",
    ]
      .filter(Boolean)
      .join("\n");

    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  return (
    <section id="booking" className="section-padding bg-background">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="font-body text-sm uppercase tracking-[0.3em] text-primary font-medium mb-4">
            Reserve Your Spot
          </p>
          <h2 className="font-display text-5xl md:text-6xl text-foreground tracking-wide">
            BOOK A <span className="text-primary">TABLE</span>
          </h2>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          onSubmit={handleSubmit}
          className="space-y-5 bg-card rounded-xl p-6 md:p-10 border border-border"
        >
          <div className="grid sm:grid-cols-2 gap-5">
            <div>
              <label className="font-body text-xs uppercase tracking-wider text-muted-foreground mb-2 block">
                Full Name
              </label>
              <input
                type="text"
                name="name"
                required
                value={form.name}
                onChange={handleChange}
                placeholder="Your name"
                className="w-full bg-secondary border border-border rounded-sm px-4 py-3 font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
              />
            </div>
            <div>
              <label className="font-body text-xs uppercase tracking-wider text-muted-foreground mb-2 block">
                Phone Number
              </label>
              <input
                type="tel"
                name="phone"
                required
                value={form.phone}
                onChange={handleChange}
                placeholder="+91 XXXXX XXXXX"
                className="w-full bg-secondary border border-border rounded-sm px-4 py-3 font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
              />
            </div>
          </div>

          <div className="grid sm:grid-cols-3 gap-5">
            <div>
              <label className="font-body text-xs uppercase tracking-wider text-muted-foreground mb-2 block">
                Date
              </label>
              <input
                type="date"
                name="date"
                required
                value={form.date}
                onChange={handleChange}
                className="w-full bg-secondary border border-border rounded-sm px-4 py-3 font-body text-sm text-foreground focus:outline-none focus:border-primary transition-colors"
              />
            </div>
            <div>
              <label className="font-body text-xs uppercase tracking-wider text-muted-foreground mb-2 block">
                Time
              </label>
              <input
                type="time"
                name="time"
                required
                value={form.time}
                onChange={handleChange}
                className="w-full bg-secondary border border-border rounded-sm px-4 py-3 font-body text-sm text-foreground focus:outline-none focus:border-primary transition-colors"
              />
            </div>
            <div>
              <label className="font-body text-xs uppercase tracking-wider text-muted-foreground mb-2 block">
                Guests
              </label>
              <select
                name="guests"
                required
                value={form.guests}
                onChange={handleChange}
                className="w-full bg-secondary border border-border rounded-sm px-4 py-3 font-body text-sm text-foreground focus:outline-none focus:border-primary transition-colors"
              >
                <option value="">Select</option>
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((n) => (
                  <option key={n} value={n}>
                    {n} {n === 1 ? "Guest" : "Guests"}
                  </option>
                ))}
                <option value="10+">10+ Guests</option>
              </select>
            </div>
          </div>

          <div>
            <label className="font-body text-xs uppercase tracking-wider text-muted-foreground mb-2 block">
              Special Requests (Optional)
            </label>
            <textarea
              name="requests"
              value={form.requests}
              onChange={handleChange}
              rows={3}
              placeholder="Any dietary requirements or special arrangements"
              className="w-full bg-secondary border border-border rounded-sm px-4 py-3 font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors resize-none"
            />
          </div>

          <button
            type="submit"
            className="w-full py-4 bg-primary text-primary-foreground font-body font-semibold text-sm uppercase tracking-widest rounded-sm hover:bg-primary/90 transition-all duration-300 glow-red"
          >
            Reserve via WhatsApp
          </button>

          <p className="text-center font-body text-xs text-muted-foreground">
            You will be redirected to WhatsApp to confirm your reservation.
          </p>
        </motion.form>
      </div>
    </section>
  );
};

export default TableBooking;
