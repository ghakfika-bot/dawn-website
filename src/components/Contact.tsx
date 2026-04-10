import { motion } from "motion/react";
import { Mail, MapPin } from "lucide-react";

export default function Contact() {
  return (
    <section className="py-32 px-8 md:px-16 max-w-7xl mx-auto" id="contact">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="serif-display text-5xl mb-8">Get in Touch</h2>
          <p className="font-sans text-lg text-on-surface-variant mb-12">
            I am always open to discussing research collaborations, educational
            guest speaking, or mentorship opportunities. Let's start a
            conversation.
          </p>
          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-primary-container rounded-full flex items-center justify-center text-primary">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-sans font-bold">Email</h4>
                <p className="text-on-surface-variant">hello@dawnyve.edu</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-primary-container rounded-full flex items-center justify-center text-primary">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-sans font-bold">Based in</h4>
                <p className="text-on-surface-variant">
                  Metropolitan Education District
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-surface-container-low p-10 rounded-xl"
        >
          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div className="space-y-2">
              <label
                className="font-sans text-sm font-bold text-on-surface-variant"
                htmlFor="name"
              >
                Full Name
              </label>
              <input
                className="w-full bg-surface-container-lowest border border-outline-variant/20 rounded-lg p-4 focus:ring-2 focus:ring-primary focus:border-transparent transition-all outline-none"
                id="name"
                placeholder="John Doe"
                type="text"
              />
            </div>
            <div className="space-y-2">
              <label
                className="font-sans text-sm font-bold text-on-surface-variant"
                htmlFor="email"
              >
                Email Address
              </label>
              <input
                className="w-full bg-surface-container-lowest border border-outline-variant/20 rounded-lg p-4 focus:ring-2 focus:ring-primary focus:border-transparent transition-all outline-none"
                id="email"
                placeholder="john@example.com"
                type="email"
              />
            </div>
            <div className="space-y-2">
              <label
                className="font-sans text-sm font-bold text-on-surface-variant"
                htmlFor="message"
              >
                Message
              </label>
              <textarea
                className="w-full bg-surface-container-lowest border border-outline-variant/20 rounded-lg p-4 focus:ring-2 focus:ring-primary focus:border-transparent transition-all outline-none"
                id="message"
                placeholder="Tell me about your project..."
                rows={5}
              ></textarea>
            </div>
            <button
              className="w-full bg-gradient-to-r from-primary to-primary-dim text-on-primary py-4 rounded-full font-sans font-bold tracking-wide hover:opacity-90 transition-all active:scale-95"
              type="submit"
            >
              Send Message
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
