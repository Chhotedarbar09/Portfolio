import SkillCard from "../component/SkillCard";
import { skillsData } from "../data/skillsData";

export default function Skills() {
  return (
    <div className="min-h-screen pt-24 px-6 bg-[#1e1e1e]">
      
      <h1 className="text-4xl font-bold text-center text-teal-400 mb-4">
        My Skills
      </h1>

      <p className="text-center text-gray-400 mb-12">
        Technologies I use to build modern web applications
      </p>

      <div className="max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
        {skillsData.map((skill, index) => (
          <SkillCard
            key={index}
            name={skill.name}
            image={skill.image}
            level={skill.level}
          />
        ))}
      </div>
    </div>
  );
}
