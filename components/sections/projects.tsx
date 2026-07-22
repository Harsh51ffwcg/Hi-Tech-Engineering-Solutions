export default function Projects() {
  const projects = [
    {
      title: "Industrial Shed",
      image: "/images/projects/project1.jpeg",
    },
    {
      title: "Commercial Interior",
      image: "/images/projects/project2.jpeg",
    },
    {
      title: "Steel Fabrication",
      image: "/images/projects/project3.jpeg",
    },
    {
      title: "Modern Staircase",
      image: "/images/projects/project4.jpeg",
    },
    {
      title: "Glass & SS Railing",
      image: "/images/projects/project5.jpeg",
    },
    {
      title: "Custom Engineering(On Site/From Factory)",
      image: "/images/projects/project6.png",
    },
  ];

  return (
    <section
      id="projects"
      className="bg-[#0B1422] py-28 text-white"
    >
      <div className="max-w-7xl mx-auto px-8">

        <div className="text-center mb-16">

          <p className="uppercase tracking-[0.4em] text-[#9FB4D0] mb-4">
            OUR PROJECTS
          </p>

          <h2 className="text-5xl font-bold">
            Recent Engineering Works
          </h2>

        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {projects.map((project) => (
            <div
              key={project.title}
              className="group overflow-hidden rounded-3xl border border-white/10 bg-[#162232]"
            >
              <img
                src={project.image}
                alt={project.title}
                className="h-72 w-full object-cover transition-transform duration-500 group-hover:scale-110"
              />

              <div className="p-6">

                <h3 className="text-2xl font-semibold">
                  {project.title}
                </h3>

                <p className="mt-3 text-gray-400">
                  Premium engineering solutions with precision and quality.
                </p>

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}