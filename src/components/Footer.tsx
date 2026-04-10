export default function Footer() {
  return (
    <footer className="w-full py-12 bg-surface-container-low">
      <div className="flex flex-col md:flex-row justify-between items-center max-w-7xl mx-auto px-8 md:px-16 gap-6">
        <div className="flex flex-col items-center md:items-start gap-2">
          <span className="font-serif italic text-lg text-primary">Dawn Yve</span>
          <p className="font-sans text-sm tracking-wide text-on-surface-variant">
            © 2024 Dawn Yve. Scholar & Educator.
          </p>
        </div>
        <div className="flex gap-8">
          <a
            className="text-primary/70 hover:text-primary transition-all font-sans text-sm tracking-wide active:translate-y-[-2px]"
            href="#"
          >
            LinkedIn
          </a>
          <a
            className="text-primary/70 hover:text-primary transition-all font-sans text-sm tracking-wide active:translate-y-[-2px]"
            href="#"
          >
            Twitter
          </a>
          <a
            className="text-primary/70 hover:text-primary transition-all font-sans text-sm tracking-wide active:translate-y-[-2px]"
            href="#"
          >
            Instagram
          </a>
        </div>
      </div>
    </footer>
  );
}
