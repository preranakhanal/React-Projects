const Projects = () => {
    const projectData = [
      {
        title: "Email Phishing Detection",
        description: "A machine learning model that detects phishing emails using NLP techniques and Random Forest.",
        link: "#", // replace with actual link later
      },
      {
        title: "Secure Chat Application",
        description: "A Python-based chat app using sockets and custom cryptographic algorithms for message encryption.",
        link: "#",
      },
      {
        title: "Phishing Awareness Chatbot",
        description: "An educational chatbot that teaches users to identify phishing using interactive quizzes.",
        link: "#",
      },
    ];
  
    return (
      <section
        id="projects"
        className="w-full min-h-screen flex flex-col items-center justify-center bg-white py-12 px-4"
      >
        <h2 className="text-4xl font-bold text-gray-800 mb-8">
          My <span className="text-gray-600">Projects</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl w-full">
          {projectData.map((project, index) => (
            <div key={index} className="bg-gray-100 rounded-lg shadow-lg p-6 hover:bg-gray-200 transition">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">{project.title}</h3>
              <p className="text-gray-600 mb-4">{project.description}</p>
              <a
                href={project.link}
                className="text-gray-800 hover:text-gray-600 font-semibold transition"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Project
              </a>
            </div>
          ))}
        </div>
      </section>
    );
  };
  
  export default Projects;
