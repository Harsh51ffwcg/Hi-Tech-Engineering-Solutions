export default function About() {
  return (
    <section
      id="about"
      className="bg-[#0B1422] text-white py-28"
    >
      <div className="max-w-7xl mx-auto px-8">

        <div className="grid lg:grid-cols-2 gap-20 items-center">

          {/* Left */}

          <div>

            <div className="rounded-3xl overflow-hidden border border-white/10 shadow-2xl">

              <img
                src="/images/2.jpg"
                alt="About Hi Tech Engineering"
                className="w-full h-[500px] object-cover"
              />

            </div>

          </div>

          {/* Right */}

          <div>

            <p className="uppercase tracking-[0.35em] text-[#9FB4D0] text-sm mb-5">
              ABOUT US
            </p>

            <h2 className="text-5xl font-bold leading-tight mb-8">
              Engineering Solutions Built on Precision & Trust
            </h2>

            <p className="text-gray-300 text-lg leading-9 mb-8">
              Hi Tech Engineering Solutions specializes in premium metal
              fabrication, stainless steel works, commercial interiors,
              industrial structures, and customized engineering
              solutions. We combine skilled craftsmanship with modern
              technology to deliver projects that exceed expectations.
            </p>

            <div className="grid grid-cols-2 gap-5 mb-10">

              <div className="bg-white/5 rounded-2xl p-5 border border-white/10">
                ✅ Metal Fabrication
              </div>

              <div className="bg-white/5 rounded-2xl p-5 border border-white/10">
                ✅ Commercial Interiors
              </div>

              <div className="bg-white/5 rounded-2xl p-5 border border-white/10">
                ✅ Stainless Steel Works
              </div>

              <div className="bg-white/5 rounded-2xl p-5 border border-white/10">
                ✅ Industrial Engineering
              </div>

            </div>

            <a
              href="#services"
              className="inline-flex rounded-full bg-[#3D506B] px-8 py-4 font-semibold hover:bg-[#536B8A] transition"
            >
              Explore Services →
            </a>

          </div>

        </div>

      </div>
    </section>
  );
}