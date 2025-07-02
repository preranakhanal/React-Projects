import { 
  SiPython, 
  SiJavascript, 
  SiReact, 
  SiTailwindcss, 
  SiGit,
  SiLinux
} from 'react-icons/si';

const Skills = () => {
    const techSkills = [
      { name: "Python", icon: SiPython, color: "text-blue-500" },
      { name: "JavaScript", icon: SiJavascript, color: "text-yellow-500" },
      { name: "React", icon: SiReact, color: "text-blue-400" },
      { name: "Tailwind CSS", icon: SiTailwindcss, color: "text-teal-500" },
      { name: "Git & GitHub", icon: SiGit, color: "text-orange-500" },
      { name: "Linux", icon: SiLinux, color: "text-gray-300" },
    ];
  
  
    return (
      <section id="skills" className="py-16 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">Skills</h2>
  
          {/* Tech Skills */}
          <div className="mb-10">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl w-full">
              {techSkills.map((skill, index) => {
                const IconComponent = skill.icon;  
                return (
                  <div
                    key={index}
                    className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition-all duration-300 hover:-translate-y-1 flex items-center gap-4"
                  >
                    <div className="flex-shrink-0">
                      <IconComponent className={`text-3xl ${skill.color}`} />
                    </div>
                    <span className="text-gray-900 text-base font-semibold">
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
  