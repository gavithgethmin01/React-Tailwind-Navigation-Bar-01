import React, { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("Home");

  const navLinks = [
    { name: "Home", href: "#" },
    { name: "Features", href: "#" },
    { name: "Pricing", href: "#" },
    { name: "About", href: "#" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-slate-900/80 backdrop-blur-md border-b border-slate-800 text-white transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        <div className="flex items-center gap-2 cursor-pointer group">
          <div className="w-9 h-9 bg-gradient-to-tr from-cyan-400 to-blue-600 rounded-xl flex items-center justify-center shadow-lg">
            <span className="font-black text-xl">A</span>
          </div>
          <span className="font-extrabold text-xl tracking-tight">
            Awesome<span className="text-cyan-400">Nav</span>
          </span>
        </div>
        <div className="hidden md:flex items-center space-x-1">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setActiveLink(link.name)}
              className={`px-4 py-2 rounded-lg text-sm font-medium ${activeLink === link.name ? "bg-slate-800 text-cyan-400" : "text-slate-300 hover:text-white"}`}
            >
              {link.name}
            </a>
          ))}
        </div>
        <div className="hidden md:flex items-center gap-4">
          <button className="text-sm text-slate-300 hover:text-white">
            Sign In
          </button>
          <button className="bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950 font-semibold text-sm px-4 py-2 rounded-lg">
            Get Started
          </button>
        </div>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 rounded-lg text-slate-400 hover:text-white"
        >
          <svg
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            />
          </svg>
        </button>
      </div>
      {isOpen && (
        <div className="md:hidden bg-slate-900 border-b border-slate-800 px-4 pt-2 pb-4 space-y-1">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => {
                setActiveLink(link.name);
                setIsOpen(false);
              }}
              className="block px-4 py-2.5 rounded-lg text-base"
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
