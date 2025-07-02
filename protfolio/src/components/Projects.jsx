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
        className="w-full flex flex-col items-center justify-center bg-white py-16 px-8"
      >
        <h2 className="text-4xl font-bold text-gray-800 mb-8">
          <span className="text-gray-600">Projects</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl w-full">
          {projectData.map((project, index) => (
            <div key={index} className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition-all duration-300 hover:-translate-y-1">
              <h3 className="text-xl font-bold text-gray-900 mb-3 leading-tight">{project.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">{project.description}</p>
              <div className="pt-3 border-t border-gray-100">
                <a
                  href={project.link}
                  className="text-indigo-600 hover:text-indigo-700 font-medium text-sm transition-colors duration-200 flex items-center group"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Project
                  <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  };
  
  export default Projects;
