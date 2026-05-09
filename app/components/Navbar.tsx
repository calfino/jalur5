"use client";
import { useState, useEffect } from "react";

const navLinks = [
  { label: "Beranda", href: "#home" },
  { label: "Tentang Kami", href: "#about" },
  { label: "Liputan", href: "#coverage" },
  { label: "Sosial Media", href: "#socials" },
  { label: "Harga", href: "#pricing" },
  { label: "Endorse", href: "#endorse" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-primary shadow-lg shadow-primary/30" : "bg-primary/90 backdrop-blur-md"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-2 group">
            <div className="w-8 h-8 rounded-lg bg-blue-400 flex items-center justify-center">
              <span className="text-primary font-black text-sm">J5</span>
            </div>
            <span className="text-white font-bold text-xl tracking-tight">
              Jalur<span className="text-blue-300">5</span>
            </span>
          </a>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-blue-100 hover:text-white hover:bg-blue-700/40 px-3 py-2 rounded-lg text-sm font-medium transition-all"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#endorse"
              className="ml-3 bg-blue-400 hover:bg-blue-300 text-primary font-semibold px-4 py-2 rounded-lg text-sm transition-all"
            >
              Pasang Iklan
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-white p-2 rounded-lg hover:bg-blue-700/40 transition"
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {menuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-primary border-t border-blue-700/40 px-4 pb-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="block text-blue-100 hover:text-white py-2 text-sm font-medium"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#endorse"
            onClick={() => setMenuOpen(false)}
            className="mt-2 block text-center bg-blue-400 hover:bg-blue-300 text-primary font-semibold px-4 py-2 rounded-lg text-sm transition-all"
          >
            Pasang Iklan
          </a>
        </div>
      )}
    </nav>
  );
}
