"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "#about", label: "Про нас" },
    { href: "#menu", label: "Меню" },
    { href: "#gallery", label: "Галерея" },
    { href: "#reservation", label: "Бронювання" },
    { href: "#contact", label: "Контакти" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md" : "bg-transparent"
      }`}
    >
      <div className="flex items-center justify-between p-6 max-w-7xl mx-auto border-b border-black/10">
        <h1 className="text-3xl font-bold tracking-widest">EliteTaste</h1>
        <nav className="hidden md:block">
          <ul className="flex gap-8 uppercase text-sm">
            {navLinks.map(({ href, label }) => (
              <li key={href}>
                <Link href={href} className="hover:opacity-70 transition">
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <button
          className="md:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <nav className="md:hidden px-6 pb-4 bg-white border-t border-black">
          <ul className="flex flex-col gap-4 uppercase text-sm">
            {navLinks.map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  className="block py-2 border-b"
                  onClick={() => setOpen(false)}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
