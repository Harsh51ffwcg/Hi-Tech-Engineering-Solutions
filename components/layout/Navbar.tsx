"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#08111D]/70 backdrop-blur-xl border-b border-white/10 shadow-2xl py-4"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-8 flex items-center justify-between">

        {/* Logo */}

        <a href="#" className="flex items-center">
          <Image
            src="/images/company/logo.png"
            alt="Hi Tech Engineering Solutions"
            width={80}
            height={60}
            priority
            className="object-contain"
          />
        </a>

        {/* Navigation */}

        <nav className="hidden lg:flex items-center gap-10">

          <a
            href="#about"
            className="text-white/90 hover:text-[#9FB4D0] transition duration-300 font-medium"
          >
            About
          </a>

          <a
            href="#services"
            className="text-white/90 hover:text-[#9FB4D0] transition duration-300 font-medium"
          >
            Services
          </a>

          <a
            href="#projects"
            className="text-white/90 hover:text-[#9FB4D0] transition duration-300 font-medium"
          >
            Projects
          </a>

          <a
            href="#process"
            className="text-white/90 hover:text-[#9FB4D0] transition duration-300 font-medium"
          >
            Process
          </a>

          <a
            href="#contact"
            className="text-white/90 hover:text-[#9FB4D0] transition duration-300 font-medium"
          >
            Contact
          </a>

        </nav>

        {/* Button */}

        <a
          href="#contact"
          className="hidden lg:inline-flex items-center rounded-full bg-[#3D506B] px-7 py-3 text-white font-semibold transition-all duration-300 hover:bg-[#536B8A] hover:scale-105 hover:shadow-xl"
        >
          Get Quote
        </a>

      </div>
    </header>
  );
}