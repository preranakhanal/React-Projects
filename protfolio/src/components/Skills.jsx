import { 
  SiPython, 
  SiJavascript, 
  SiReact, 
  SiTailwindcss, 
  SiGit 
} from 'react-icons/si';

const Skills = () => {
    const techSkills = [
      { name: "Python", icon: SiPython, color: "text-blue-500" },
      { name: "JavaScript", icon: SiJavascript, color: "text-yellow-500" },
      { name: "React", icon: SiReact, color: "text-blue-400" },
      { name: "Tailwind CSS", icon: SiTailwindcss, color: "text-teal-500" },
      { name: "Git & GitHub", icon: SiGit, color: "text-orange-500" },
    ];
  
  
    return (
      <section id="skills" className="py-16 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">My Skills</h2>
  
          {/* Tech Skills */}
          <div className="mb-10">
            <h3 className="text-xl font-semibold text-gray-700 mb-6">Tech Stack</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
              {techSkills.map((skill, index) => {
                const IconComponent = skill.icon;
                return (
                  <div
                    key={index}
                    className="bg-gray-900 border border-gray-700 rounded-lg p-6 flex flex-col items-center justify-center text-center transition-all duration-300 hover:border-indigo-500 hover:shadow-lg hover:shadow-indigo-500/20 hover:scale-105"
                  >
                    <IconComponent className={`text-4xl mb-3 ${skill.color}`} />
                    <span className="text-white text-sm font-medium">
                      {skill.name}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
  
         
        </div>
      </section>
    );
  };
  
  export default Skills;
  