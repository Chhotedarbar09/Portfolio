const projects = [
  {
    id: 1,
    title: "Fast Food Website",
    desc: "Responsive food ordering UI built with React and Tailwind.",
    tech: ["React", "Tailwind", "Responsive"],
  },
  {
    id: 2,
    title: "Todo App",
    desc: "Task manager app using Redux Toolkit and localStorage.",
    tech: ["React", "Redux Toolkit"],
  },
  {
    id: 3,
    title: "Portfolio Website",
    desc: "Modern portfolio with dark theme and GitHub Pages deploy.",
    tech: ["Vite", "React", "Tailwind"],
  },
  {
    id: 4,
    title: "Music Player UI",
    desc: "Clean UI for a web music player with custom controls.",
    tech: ["React", "CSS"],
  },
];

export default function Projects() {
  return (
    <section className="py-2">
      <h2 className="text-2xl font-bold mb-4 text-teal-400">
        Projects
      </h2>

      {/* Horizontal scroll cards with snap */}
      <div className="flex gap-6 overflow-x-auto snap-x snap-mandatory pb-3 -mx-2 px-2">
        {projects.map((project) => (
          <div
            key={project.id}
            className="min-w-[260px] max-w-xs bg-[#1c1c1c] border border-gray-700 rounded-xl p-5 snap-center shrink-0 hover:border-teal-400 hover:-translate-y-1 transition-transform"
          >
            <h3 className="text-lg font-semibold text-white mb-2">
              {project.title}
            </h3>
            <p className="text-sm text-gray-400 mb-3">
              {project.desc}
            </p>

            <div className="flex flex-wrap gap-2 mb-4">
              {project.tech.map((t) => (
                <span
                  key={t}
                  className="text-[11px] px-2 py-1 rounded-full bg-teal-500/10 text-teal-300 border border-teal-500/30"
                >
                  {t}
                </span>
              ))}
            </div>

            <button className="px-4 py-2 text-xs rounded-full border border-teal-400 text-teal-400 hover:bg-teal-400 hover:text-black transition">
              View Details
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
