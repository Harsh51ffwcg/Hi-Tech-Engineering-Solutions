export default function Services() {
  const services = [
    {
      title: "Metal Fabrication",
      description:
        "Custom fabrication for industrial, commercial, and residential projects.",
      icon: "⚙️",
    },
    {
      title: "Stainless Steel Works",
      description:
        "Premium SS railings, gates, kitchen solutions, and custom structures.",
      icon: "🔩",
    },
    {
      title: "Commercial Interiors",
      description:
        "Complete office, showroom, and commercial interior solutions.",
      icon: "🏢",
    },
    {
      title: "Industrial Engineering",
      description:
        "Heavy-duty engineering solutions built for performance and durability.",
      icon: "🏗️",
    },
    {
      title: "Custom Projects",
      description:
        "Tailor-made engineering solutions designed for unique client requirements.",
      icon: "📐",
    },
    {
      title: "Maintenance & Support",
      description:
        "Reliable maintenance services ensuring long-term operational efficiency.",
      icon: "🛠️",
    },
  ];

  return (
    <section
      id="services"
      className="bg-[#101B2D] py-28 text-white"
    >
      <div className="max-w-7xl mx-auto px-8">

        <div className="text-center mb-16">

          <p className="uppercase tracking-[0.4em] text-[#9FB4D0] mb-4">
            OUR SERVICES
          </p>

          <h2 className="text-5xl font-bold">
            Engineering Solutions We Offer
          </h2>

        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {services.map((service) => (
            <div
              key={service.title}
              className="rounded-3xl border border-white/10 bg-white/5 p-8 hover:bg-[#3D506B]/30 hover:-translate-y-2 transition-all duration-300"
            >
              <div className="text-5xl mb-6">
                {service.icon}
              </div>

              <h3 className="text-2xl font-semibold mb-4">
                {service.title}
              </h3>

              <p className="text-gray-300 leading-8">
                {service.description}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}