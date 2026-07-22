export default function Industries() {
  const industries = [
    "Commercial Buildings",
    "Industrial Plants",
    "Hotels & Restaurants",
    "Hospitals",
    "Retail Stores",
    "Corporate Offices",
    "Educational Institutions",
    "Warehouses",
  ];

  return (
    <section
      id="industries"
      className="bg-[#F8FAFC] py-24"
    >
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">
          <p className="uppercase tracking-[6px] text-[#64748B] text-sm font-semibold">
            Industries We Serve
          </p>

          <h2 className="text-5xl font-bold text-[#24364D] mt-4">
            Trusted Across Multiple Sectors
          </h2>

          <p className="text-gray-600 mt-6 max-w-3xl mx-auto text-lg">
            Hi Tech Engineering Solutions provides premium engineering,
            fabrication and interior fit-out services for businesses across
            diverse industries.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {industries.map((industry) => (
            <div
              key={industry}
              className="bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition duration-300 border border-gray-100"
            >
              <div className="w-14 h-14 rounded-full bg-[#24364D] text-white flex items-center justify-center text-2xl mb-6">
                ✓
              </div>

              <h3 className="text-xl font-semibold text-[#24364D]">
                {industry}
              </h3>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}