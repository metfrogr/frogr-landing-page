import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import blackLogoImg from "../../../imports/Black_Logo.png";
import whiteLogoImg from "../../../imports/white-logo.png";

const navLinks = [
  { label: "How It Works", href: "#how-it-works" },
  { label: "Categories", href: "#categories" },
  { label: "For Workers", href: "#for-workers" },
  { label: "For Job Posters", href: "#for-employers" },
  { label: "FAQ", href: "#faq" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  function scrollTo(href: string) {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 backdrop-blur-md shadow-sm border-b border-black/5"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a href="#" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }}>
            <img
              src={scrolled ? blackLogoImg : whiteLogoImg}
              alt="Frogr"
              className="h-9 md:h-10 w-auto object-contain"
            />
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => scrollTo(link.href)}
                className={`text-sm transition-colors cursor-pointer ${
                  scrolled ? "text-neutral-700 hover:text-[#0b0b0b]" : "text-white/80 hover:text-white"
                }`}
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* CTA + hamburger */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => scrollTo("#formContainer")}
              className="hidden md:inline-flex items-center px-5 py-2.5 rounded-full bg-[#FFD02D] hover:bg-[#FFC400] text-[#0b0b0b] text-sm font-semibold transition-all hover:scale-105 shadow-md shadow-[#FFD02D]/30"
            >
              Join Waitlist
            </button>
            <button
              className="md:hidden p-2 rounded-xl"
              onClick={() => setMenuOpen((v) => !v)}
              aria-label="Toggle menu"
            >
              {menuOpen ? (
                <X className={`w-6 h-6 ${scrolled ? "text-neutral-800" : "text-white"}`} />
              ) : (
                <Menu className={`w-6 h-6 ${scrolled ? "text-neutral-800" : "text-white"}`} />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile slide-over */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-neutral-100 shadow-xl">
          <nav className="flex flex-col px-4 py-4 gap-1">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => scrollTo(link.href)}
                className="text-left px-4 py-3 rounded-xl text-neutral-800 hover:bg-neutral-50 text-sm font-medium transition-colors"
              >
                {link.label}
              </button>
            ))}
            <button
              onClick={() => scrollTo("#formContainer")}
              className="mt-2 w-full py-3 rounded-full bg-[#FFD02D] hover:bg-[#FFC400] text-[#0b0b0b] font-semibold text-sm transition-all"
            >
              Join Waitlist
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}
