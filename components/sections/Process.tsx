export default function Process() {
  const steps = [
    {
      number: "01",
      title: "Consultation",
      description: "Understanding your project requirements and objectives.",
    },
    {
      number: "02",
      title: "Planning & Design",
      description: "Creating precise engineering plans and material selection.",
    },
    {
      number: "03",
      title: "Fabrication(On Site/From Factory)",
      description: "Manufacturing with precision using premium materials.",
    },
    {
      number: "04",
      title: "Installation",
      description: "Professional on-site installation by skilled experts.",
    },
    {
      number: "05",
      title: "Quality Inspection",
      description: "Final inspection to ensure exceptional quality standards.",
    },
  ];

  return (
    <section
      id="process"
      className="bg-[#101B2D] py-28 text-white"
    >
      <div className="max-w-7xl mx-auto px-8">

        <div className="text-center mb-16">
          <p className="uppercase tracking-[0.4em] text-[#9FB4D0] mb-4">
            OUR PROCESS
          </p>

          <h2 className="text-5xl font-bold">
            How We Work
          </h2>

          <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
            Every project follows a structured workflow to ensure quality,
            efficiency, and timely delivery.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">

          {steps.map((step) => (
            <div
              key={step.number}
              className="relative rounded-3xl bg-white/5 border border-white/10 p-8 text-center hover:bg-[#3D506B]/30 transition-all duration-300"
            >
              <div className="text-6xl font-black text-[#6D8AAF] mb-6">
                {step.number}
              </div>

              <h3 className="text-2xl font-semibold mb-4">
                {step.title}
              </h3>

              <p className="text-gray-300 leading-7">
                {step.description}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}