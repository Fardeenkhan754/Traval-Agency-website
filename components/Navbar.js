"use client";
import { useEffect, useState } from "react";

const links = [
  ["Services", "#services"],
  ["Destinations", "#destinations"],
  ["Reviews", "#reviews"],
  ["Contact", "#contact"],
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [solid, setSolid] = useState(false);

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${solid || open ? "bg-deep/95 shadow-lg backdrop-blur" : "bg-transparent"}`}
    >
      <nav
        className="container-x flex h-16 items-center justify-between text-white"
        aria-label="Main"
      >
        <a
          href="#"
          className="font-display text-xl font-semibold tracking-tight"
        >
          Airvanta
        </a>
        <ul className="hidden items-center gap-8 text-sm md:flex">
          {links.map(([l, h]) => (
            <li key={h}>
              <a
                href={h}
                className="text-white/80 transition hover:text-saffron"
              >
                {l}
              </a>
            </li>
          ))}
        </ul>
        <a href="#search" className="btn hidden !py-2 md:inline-flex">
          Plan a trip
        </a>
        <button
          className="md:hidden"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          <svg
            width="26"
            height="26"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          >
            {open ? (
              <path d="M6 6l12 12M18 6L6 18" />
            ) : (
              <path d="M4 7h16M4 12h16M4 17h16" />
            )}
          </svg>
        </button>
      </nav>
      {open && (
        <ul className="container-x flex flex-col gap-1 pb-5 text-white md:hidden">
          {links.map(([l, h]) => (
            <li key={h}>
              <a
                href={h}
                onClick={() => setOpen(false)}
                className="block rounded-lg px-2 py-3 hover:bg-white/10"
              >
                {l}
              </a>
            </li>
          ))}
          <li>
            <a
              href="#search"
              onClick={() => setOpen(false)}
              className="btn mt-2 w-full"
            >
              Plan a trip
            </a>
          </li>
        </ul>
      )}
    </header>
  );
}
