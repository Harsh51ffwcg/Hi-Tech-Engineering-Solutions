"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative overflow-hidden text-white min-h-screen">

      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 h-full w-full object-cover"
      >
        <source src="/videos/hero.mp4" type="video/mp4" />
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-[#0E1726]/75"></div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-28">

        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-20">

          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <p className="mb-8 text-sm uppercase tracking-[0.45em] text-[#A8BED8]">
              Metal Fabrication • Interior Fit-Outs
            </p>

            <h1 className="text-4xl font-black leading-[0.9] sm:text-5xl lg:text-7xl xl:text-8xl">
              ENGINEERING
              <br />
              BUILT FOR
              <br />
              <span className="text-[#9FB4D0]">
                EXCELLENCE
              </span>
            </h1>

            <p className="mt-10 max-w-xl text-base leading-9 text-gray-300 md:text-xl">
              Hi Tech Engineering Solutions delivers premium metal
              fabrication, stainless steel works, commercial interiors,
              factory engineering, and customized industrial solutions.
            </p>

            <div className="mt-12 flex flex-col gap-4 sm:flex-row">

              <a
                href="#projects"
                className="group inline-flex items-center justify-center rounded-full bg-[#3D506B] px-8 py-4 font-semibold text-white transition-all duration-300 hover:bg-[#536B8A] hover:shadow-xl"
              >
                Explore Projects
                <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </a>

              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-full border border-white/30 bg-white/10 px-8 py-4 font-semibold text-white backdrop-blur-md transition-all duration-300 hover:bg-white hover:text-black"
              >
                Request a Quote
              </a>

            </div>

          </motion.div>

          {/* RIGHT */}
          <motion.div
            className="flex justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
          >
            <motion.div
              className="relative"
              animate={{
                y: [0, -15, 0],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                repeatType: "loop",
              }}
            >

              {/* Glow */}
              <div className="absolute -inset-8 rounded-full bg-[#6D8AAF]/30 blur-3xl"></div>

              {/* Image Circle */}
              

            </motion.div>
          </motion.div>

        </div>

      </div>

    </section>
  );
}