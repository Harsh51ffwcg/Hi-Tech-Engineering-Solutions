import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#0B1118] border-t border-[#24364D]">
      <div className="max-w-7xl mx-auto px-6 py-20">

        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-14">

          {/* Company */}

          <div>

            <h2 className="text-3xl font-bold text-white">
              HI<span className="text-[#6F8DB3]">TECH</span>
            </h2>

            <p className="text-gray-400 mt-6 leading-8">
              Hi Tech Engineering Solutions specializes in premium metal
              fabrication, stainless steel works, commercial interior fit-outs
              and custom engineering solutions built with precision and
              reliability.
            </p>

            <div className="flex gap-4 mt-8">

              <a
                href="#"
                className="w-11 h-11 rounded-full bg-[#24364D] flex items-center justify-center hover:bg-[#3D5674] transition"
              >
                <FaFacebookF size={18} />
              </a>

              <a
                href="#"
                className="w-11 h-11 rounded-full bg-[#24364D] flex items-center justify-center hover:bg-[#3D5674] transition"
              >
                <FaInstagram size={18} />
              </a>

              <a
                href="#"
                className="w-11 h-11 rounded-full bg-[#24364D] flex items-center justify-center hover:bg-[#3D5674] transition"
              >
                <FaLinkedinIn size={18} />
              </a>

            </div>

          </div>

          {/* Quick Links */}

          <div>

            <h3 className="text-white text-xl font-semibold mb-6">
              Quick Links
            </h3>

            <div className="space-y-4">

              <Link href="#about" className="block text-gray-400 hover:text-white transition">
                About
              </Link>

              <Link href="#services" className="block text-gray-400 hover:text-white transition">
                Services
              </Link>

              <Link href="#projects" className="block text-gray-400 hover:text-white transition">
                Projects
              </Link>

              <Link href="#contact" className="block text-gray-400 hover:text-white transition">
                Contact
              </Link>

            </div>

          </div>

          {/* Services */}

          <div>

            <h3 className="text-white text-xl font-semibold mb-6">
              Our Services
            </h3>

            <div className="space-y-4 text-gray-400">

              <p>Metal Fabrication</p>
              <p>Commercial Interiors</p>
              <p>Stainless Steel Works</p>
              <p>Commercial Furniture</p>
              <p>Factory Manufactured Products</p>

            </div>

          </div>

          {/* Contact */}

          <div>

            <h3 className="text-white text-xl font-semibold mb-6">
              Contact
            </h3>

            <div className="space-y-6">

              <div className="flex gap-4">

                <Phone className="text-[#6F8DB3]" />

                <div>
                  <p className="text-gray-400">
                    +91 XXXXX XXXXX
                  </p>
                </div>

              </div>

              <div className="flex gap-4">

                <Mail className="text-[#6F8DB3]" />

                <div>
                  <p className="text-gray-400">
                    info@hitech.com
                  </p>
                </div>

              </div>

              <div className="flex gap-4">

                <MapPin className="text-[#6F8DB3]" />

                <div>
                  <p className="text-gray-400">
                    Your Office Address
                  </p>
                </div>

              </div>

            </div>

          </div>

        </div>

        <div className="border-t border-[#24364D] mt-16 pt-8 flex flex-col md:flex-row justify-between items-center">

          <p className="text-gray-500">
            © 2026 Hi Tech Engineering Solutions. All rights reserved.
          </p>

          <p className="text-gray-500 mt-4 md:mt-0">
            Designed & Developed by Webynix Studio
          </p>

        </div>

      </div>
    </footer>
  );
}