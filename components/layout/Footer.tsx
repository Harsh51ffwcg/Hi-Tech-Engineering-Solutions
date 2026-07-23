import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#0B1420] text-white">

      {/* Top */}
      <div className="mx-auto max-w-7xl px-6 py-20">

        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3">

          {/* Company */}
          <div>

            <div className="mb-6 flex items-center gap-4">

              <Image
                src="/logo.jpeg"
                alt="Hi Tech Engineering Solutions"
                width={60}
                height={60}
                className="h-14 w-auto"
              />

              <div>
                <h3 className="text-xl font-bold">
                  Hi Tech
                </h3>

                <p className="text-sm text-gray-400">
                  Engineering Solutions
                </p>
              </div>

            </div>

            <p className="leading-7 text-gray-400">
              Delivering premium metal fabrication, stainless steel works,
              commercial interiors and industrial engineering solutions with
              precision, quality and innovation.
            </p>

          </div>

          {/* Quick Links */}
          <div>

            <h4 className="mb-6 text-xl font-semibold">
              Quick Links
            </h4>

            <ul className="space-y-4 text-gray-400">

              <li>
                <a
                  href="#about"
                  className="transition hover:text-white"
                >
                  About Us
                </a>
              </li>

              <li>
                <a
                  href="#services"
                  className="transition hover:text-white"
                >
                  Services
                </a>
              </li>

              <li>
                <a
                  href="#projects"
                  className="transition hover:text-white"
                >
                  Projects
                </a>
              </li>

              <li>
                <a
                  href="#contact"
                  className="transition hover:text-white"
                >
                  Contact
                </a>
              </li>

            </ul>

          </div>

          {/* Services */}
          <div>

            <h4 className="mb-6 text-xl font-semibold">
              Our Services
            </h4>

            <ul className="space-y-4 text-gray-400">

              <li>Metal Fabrication</li>

              <li>Commercial Interior Works</li>

              <li>Stainless Steel Fabrication</li>

              <li>Industrial Engineering</li>

              <li>Custom Engineering Solutions</li>

            </ul>

          </div>

        </div>

      </div>

      {/* Bottom */}
      <div className="border-t border-white/10">

        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-6 text-sm text-gray-500 md:flex-row">

          <p>
            © {new Date().getFullYear()} Hi Tech Engineering Solutions. All Rights Reserved.
          </p>

          <p>
            Designed & Developed by{" "}
            <span className="font-semibold text-white">
              Webynix Studio
            </span>
          </p>

        </div>

      </div>

    </footer>
  );
}
