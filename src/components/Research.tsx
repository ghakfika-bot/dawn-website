import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";

const researchItems = [
  {
    date: "March 12, 2026",
    title: "Modern Pedagogy in the Digital Age",
    description:
      "An analysis of how hybrid learning models affect cognitive retention and social development in secondary education environments...",
    tags: ["Hybrid Learning", "Case Study"],
  },
  {
    date: "January 28, 2026",
    title: "Inclusive Classroom Strategies",
    description:
      "Proposing a new framework for universal design for learning (UDL) that prioritizes neurodivergent student engagement...",
    tags: ["UDL", "Inclusivity"],
  },
  {
    date: "December 04, 2025",
    title: "Sociology of the Virtual Desk",
    description:
      "A qualitative study exploring the identity formation of students within virtual reality classrooms and decentralized networks...",
    tags: ["Sociology", "VR"],
  },
];

export default function Research() {
  return (
    <section className="bg-surface-container-low py-32 px-8 md:px-16" id="blog">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div className="max-w-2xl">
            <h2 className="serif-display text-4xl md:text-5xl mb-6">
              Research & Insights
            </h2>
            <p className="font-sans text-on-surface-variant">
              A curated collection of academic explorations focusing on the
              evolution of educational frameworks and digital inclusivity.
            </p>
          </div>
          <div className="bg-primary/5 px-6 py-2 rounded-full">
            <span className="text-primary font-sans font-semibold">
              2026 Archive
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {researchItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-surface-container-lowest p-8 rounded-xl hover:shadow-xl transition-all duration-500 flex flex-col h-full border border-outline-variant/10"
            >
              <span className="font-sans text-xs text-on-surface-variant/60 tracking-widest uppercase mb-4">
                {item.date}
              </span>
              <h3 className="serif-display text-2xl mb-4 group-hover:text-primary transition-colors">
                {item.title}
              </h3>
              <p className="font-sans text-sm text-on-surface-variant leading-relaxed flex-grow mb-8">
                {item.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                {item.tags.map((tag) => (
                  <span
                    key={tag}
                    className="bg-primary-container text-on-primary-container px-3 py-1 rounded text-xs"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <a
                className="inline-flex items-center text-primary font-sans font-bold text-sm"
                href="#"
              >
                Read Abstract <ArrowUpRight className="ml-1 w-4 h-4" />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
