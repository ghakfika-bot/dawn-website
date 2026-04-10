import { motion } from "motion/react";

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md">
      <div className="flex justify-between items-center max-w-7xl mx-auto px-8 md:px-16 h-20">
        <a className="font-serif text-2xl font-bold text-primary" href="#">
          Dawn Yve
        </a>
        <div className="hidden md:flex items-center gap-10 font-serif text-lg tracking-tight">
          <a className="text-primary border-b-2 border-primary pb-1" href="#home">
            Home
          </a>
          <a
            className="text-primary/60 hover:text-primary transition-colors"
            href="#blog"
          >
            Blog
          </a>
          <a
            className="text-primary/60 hover:text-primary transition-colors"
            href="#contact"
          >
            Contact
          </a>
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
