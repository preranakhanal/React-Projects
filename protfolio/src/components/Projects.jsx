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
        className="w-full flex flex-col items-center justify-center bg-gradient-to-br from-blue-50 via-white to-pink-50 py-20 px-8"
      >
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="bg-indigo-100 text-indigo-600 px-4 py-2 rounded-full text-sm font-semibold">My Work</span>
          </div>
          <h2 className="text-5xl font-bold text-gray-800 mb-6">
            Featured <span className="text-indigo-600">Projects</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            A showcase of my work in cybersecurity, web development, and machine learning
          </p>
          <div className="flex items-center justify-center mt-8">
            <div className="w-12 h-1 bg-indigo-600 rounded-full"></div>
            <div className="w-3 h-3 bg-indigo-600 rounded-full mx-4"></div>
            <div className="w-12 h-1 bg-indigo-600 rounded-full"></div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl w-full">
          {projectData.map((project, index) => (
            <div key={index} className="group bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-500 hover:-translate-y-2 transform">
              {/* Project Header with Gradient */}
              
              
              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3 leading-tight group-hover:text-indigo-600 transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-6">
                  {project.description}
                </p>
                
                {/* Tech Stack Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="bg-indigo-100 text-indigo-700 px-3 py-1 rounded-full text-xs font-medium">
                    Python
                  </span>
                  <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-xs font-medium">
                    ML
                  </span>
                  <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-medium">
                    Security
                  </span>
                </div>
                
                {/* Project Actions */}
                <div className="flex gap-3">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-4 py-2 rounded-lg font-medium text-sm transition-all duration-300 hover:shadow-lg transform hover:scale-105 flex items-center justify-center gap-2"
                  >
                    View Project
                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                  <button className="bg-gray-100 hover:bg-gray-200 text-gray-700 px-4 py-2 rounded-lg font-medium text-sm transition-all duration-300 flex items-center justify-center">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* View All Projects CTA */}
        <div className="mt-16 text-center">
          <a 
            href="https://github.com/yourusername" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-lg transition-all duration-300 transform hover:scale-105"
          >
            View All Projects on GitHub
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </div>
      </section>
    );
  };
  
  export default Projects;
