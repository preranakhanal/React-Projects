import { 
  SiPython, 
  SiJavascript, 
  SiReact, 
  SiTailwindcss, 
  SiGit,
  SiLinux
} from 'react-icons/si';
import { Section, Card, Badge, Button } from './ui';

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
    <Section 
      id="skills" 
      background="gradient"
      badge="Tech Stack"
      title={<>Skills & <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">Technologies</span></>}
      subtitle="The tools and technologies I work with to create amazing digital experiences"
    >
      <div className="max-w-7xl mx-auto">
        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {techSkills.map((skill, index) => {
            const IconComponent = skill.icon;  
            return (
              <Card
                key={index}
                className="bg-indigo-50 hover:bg-indigo-100 transition-all duration-300"
                hover={true}
                padding="lg"
              >
                {/* Skill Icon */}
                <div className="mb-4">
                  <div className="w-12 h-12 bg-indigo-600 rounded-xl flex items-center justify-center">
                    <IconComponent className="text-white text-2xl" />
                  </div>
                </div>
                
                {/* Skill Name */}
                <h3 className="text-xl font-bold text-indigo-600 mb-3">
                  {skill.name}
                </h3>
                
                {/* Skill Description */}
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                  {skill.name === 'Python' ? 'Backend development, data analysis, and machine learning projects' :
                   skill.name === 'JavaScript' ? 'Interactive web applications and dynamic user interfaces' :
                   skill.name === 'React' ? 'Modern component-based UI development and state management' :
                   skill.name === 'Tailwind CSS' ? 'Utility-first CSS framework for rapid UI development' :
                   skill.name === 'Git & GitHub' ? 'Version control and collaborative development workflows' :
                   'Unix/Linux systems administration and command-line proficiency'}
                </p>
                
                {/* Proficiency Dots */}
                <div className="flex items-center gap-3">
                  <span className="text-sm font-medium text-gray-600">Proficiency:</span>
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <div
                        key={i}
                        className={`w-2 h-2 rounded-full ${
                          i < (skill.name === 'Python' ? 5 : 
                               skill.name === 'JavaScript' ? 4 :
                               skill.name === 'React' ? 4 :
                               skill.name === 'Tailwind CSS' ? 3 :
                               skill.name === 'Git & GitHub' ? 4 : 3)
                            ? 'bg-indigo-600'
                            : 'bg-gray-300'
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
        
        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center gap-4 bg-white/80 backdrop-blur-sm px-8 py-4 rounded-full shadow-lg">
            <div className="flex -space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full flex items-center justify-center">
                <SiPython className="text-white text-sm" />
              </div>
              <div className="w-8 h-8 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full flex items-center justify-center">
                <SiJavascript className="text-white text-sm" />
              </div>
              <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center">
                <SiReact className="text-white text-sm" />
              </div>
            </div>
            <span className="text-gray-700 font-medium">Ready to build something amazing together</span>
            <Button
              href="#contact"
              variant="primary"
              size="md"
            >
              Let's Talk
            </Button>
          </div>
        </div>
      </div>
    </Section>
  );
  };
  
  export default Skills;
  