const Skills = () => {
    const techSkills = [
      "Python",
      "JavaScript",
      "React",
      "Tailwind CSS",
      "Git & GitHub",
    ];
  
    const cyberSkills = [
      "Wireshark",
      "Nmap",
      "Burp Suite",
      "Kali Linux",
      "Metasploit",
    ];
  
    return (
      <section id="skills" className="py-16 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">My Skills</h2>
  
          {/* Tech Skills */}
          <div className="mb-10">
            <h3 className="text-xl font-semibold text-gray-700 mb-4">Tech Stack</h3>
            <div className="flex flex-wrap gap-4">
              {techSkills.map((skill, index) => (
                <span
                  key={index}
                  className="bg-indigo-100 text-indigo-800 px-4 py-2 rounded-full text-sm font-medium shadow-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
  
          {/* Cybersecurity Skills */}
          <div>
            <h3 className="text-xl font-semibold text-gray-700 mb-4">Cybersecurity Tools</h3>
            <div className="flex flex-wrap gap-4">
              {cyberSkills.map((skill, index) => (
                <span
                  key={index}
                  className="bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium shadow-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default Skills;
  