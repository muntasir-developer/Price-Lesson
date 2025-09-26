"use client";
import React, { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const Navbar: React.FC = () => {
  const [open, setOpen] = useState(false);
  const menuItems = ["Home", "About", "Courses", "Contact"];

  const GradientBorderButton = () => (
    <button
      className="glassy-gradient-button px-6 py-2 rounded-full font-semibold text-white
      bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500
      bg-clip-text text-transparent
      border border-white/30
      hover:shadow-[0_0_20px_rgba(255,255,255,0.6)]
      transition-all duration-300"
    >
      Start Learning
    </button>
  );

  return (
    <>
      {/* NAVBAR */}
      <nav
        className="
          fixed top-6 left-1/2 -translate-x-1/2 w-[92%] max-w-6xl
          bg-white/5 backdrop-blur-3xl border border-white/30
          shadow-[0_4px_60px_rgba(255,255,255,0.1)]
          px-6 py-4 flex justify-between items-center z-50
          rounded-full md:rounded-3xl
        "
      >
        {/* Logo */}
        <div className="flex items-center">
          <img
            src="./image/logo.png" // replace with your logo path
            alt="Price Lesson Logo"
            className="md:h-12 h-9 w-auto " // clean futuristic white glow
          />
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-10 text-white/80 text-lg font-medium">
          {menuItems.map((item) => (
            <li key={item} className="relative group">
              <Link
                href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                className="
                  transition-all duration-300
                  relative px-1
                  after:content-[''] after:absolute after:left-0 after:bottom-0
                  after:w-0 after:h-[2px] after:bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500
                  after:transition-all after:duration-500 after:rounded
                  group-hover:after:w-full
                  hover:text-white
                  hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.7)]
                "
              >
                {item}
              </Link>
            </li>
          ))}
        </ul>

        {/* Desktop Button */}
        <div className="hidden md:block">
          <GradientBorderButton />
        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-white/80 hover:text-white transition"
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      {/* Blurry Overlay */}
      {open && (
        <div
          onClick={() => setOpen(false)}
          className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40 md:hidden"
        />
      )}

      {/* Mobile Menu */}
      {open && (
        <div
          className="
      fixed left-1/2 -translate-x-1/2 w-[92%] max-w-md
      p-6 rounded-3xl bg-white/20 backdrop-blur-3xl border border-white/30
      shadow-[0_0_40px_rgba(255,255,255,0.25)]
      flex flex-col items-center space-y-6 animate-slide-down z-50
    "
          style={{ top: "calc(6rem + 24px)" }} // adjusts below nav
        >
          {menuItems.map((item) => (
            <Link
              key={item}
              href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
              className="
          relative px-1 text-lg font-semibold text-white/90
          hover:text-white hover:drop-shadow-[0_0_15px_rgba(255,255,255,0.7)]
          after:content-[''] after:absolute after:left-0 after:bottom-0
          after:w-0 after:h-[2px] after:bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500
          after:transition-all after:duration-500 after:rounded
          hover:after:w-full
          transition-all duration-300
        "
              onClick={() => setOpen(false)}
            >
              {item}
            </Link>
          ))}
          <div className="pt-2">
            <GradientBorderButton />
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
