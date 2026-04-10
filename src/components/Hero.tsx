import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-[90vh] flex items-center px-8 md:px-16 max-w-7xl mx-auto py-20"
    >
      <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="md:col-span-7"
        >
          <span className="font-sans text-sm tracking-[0.2em] uppercase text-on-surface-variant mb-6 block">
            BS Education Student & Researcher
          </span>
          <h1 className="serif-display text-6xl md:text-8xl leading-tight mb-8 tracking-tighter text-on-background">
            Archiving the <br />{" "}
            <span className="italic text-primary">Future of Pedagogy.</span>
          </h1>
          <p className="font-sans text-lg text-on-surface-variant max-w-xl leading-relaxed mb-10">
            Dawn Yve is an educator-in-training dedicated to the intersection of
            inclusive design and modern learning environments. Exploring how
            digital empathy reshapes the classroom.
          </p>
          <div className="flex flex-wrap gap-6 items-center">
            <button className="bg-gradient-to-r from-primary to-primary-dim text-on-primary px-8 py-4 rounded-full font-sans font-medium hover:opacity-90 transition-opacity active:scale-95 duration-150">
              Download CV
            </button>
            <a
              className="text-primary font-sans font-medium flex items-center gap-2 group"
              href="#blog"
            >
              Latest Research
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
          className="md:col-span-5 relative"
        >
          <div className="aspect-[4/5] bg-surface-container-low rounded-xl overflow-hidden shadow-2xl shadow-on-surface/5 transform md:translate-y-12">
            <img
              alt="Portrait of a focused female student in a minimalist study space"
              className="w-full h-full object-cover grayscale-[30%] hover:grayscale-0 transition-all duration-700"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBl960FPdUyrkA35DOmSvw42EQmsc-Y9ghCLP4qJ5o2UkNHgwk-CXva0RyMd1pbPcqfI2Rz2Z8vGAJKG0PamYRivFobPX68pVsBryNss5GEdGu8uNYovIee4P9bHc-KRLh-uCTn5GcxJBHpbAmiR3PSyZ58xGkZGKZNEfYOjWDaEEctna7BJde1uospXLtw2fYeKaTKPyhNBMxm6bUxWl4H0hdAK7i9egiu9oDGqUtP4MnyrUksROl4TX88ahqBEu5Rh5YsO9wSVGE"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-primary-container rounded-full -z-10 opacity-50 blur-2xl"></div>
        </motion.div>
      </div>
    </section>
  );
}
