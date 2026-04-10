import { useState, useEffect } from "react";
import { motion } from "motion/react";

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "-20% 0px -70% 0px",
      threshold: 0,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    const sections = ["home", "blog", "contact"];
    sections.forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  const navLinks = [
    { name: "Home", href: "#home", id: "home" },
    { name: "Blog", href: "#blog", id: "blog" },
    { name: "Contact", href: "#contact", id: "contact" },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md">
      <div className="flex justify-between items-center max-w-7xl mx-auto px-8 md:px-16 h-20">
        <a className="font-serif text-2xl font-bold text-primary" href="#">
          Dawn Yve
        </a>
        <div className="hidden md:flex items-center gap-10 font-serif text-lg tracking-tight">
          {navLinks.map((link) => (
            <a
              key={link.id}
              className={`transition-all duration-300 pb-1 ${
                activeSection === link.id
                  ? "text-primary border-b-2 border-primary"
                  : "text-primary/60 hover:text-primary"
              }`}
              href={link.href}
            >
              {link.name}
            </a>
          ))}
        </div>
        <div className="md:hidden">
          <button className="text-primary">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="4" x2="20" y1="12" y2="12" />
              <line x1="4" x2="20" y1="6" y2="6" />
              <line x1="4" x2="20" y1="18" y2="18" />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
}
