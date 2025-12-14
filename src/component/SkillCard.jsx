export default function SkillCard({ name, image, level }) {
  return (
    <div
      className="bg-[#262626] rounded-2xl p-6 flex flex-col items-center
      shadow-md hover:shadow-teal-500/30 transition duration-300
      hover:-translate-y-2"
    >
      <img
        src={image}
        alt={name}
        className="w-16 h-16 mb-4"
      />

      <h2 className="text-xl font-semibold mb-1 text-white">
        {name}
      </h2>

      <span className="text-sm px-3 py-1 rounded-full bg-teal-500/10 text-teal-400">
        {level}
      </span>
    </div>
  );
}
