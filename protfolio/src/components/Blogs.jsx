import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Blogs = () => {
    const [showAllBlogs, setShowAllBlogs] = useState(false);
    const blogPosts = [
      {
        title: "File Inclusion Attack using DVWA",
        summary: "A comprehensive guide on file inclusion attacks, covering Local File Inclusion (LFI) and Remote File Inclusion (RFI) vulnerabilities using DVWA for practical demonstration.",
        category: "Cybersecurity",
        readTime: "3 min read",
        categoryColor: "text-red-600",
        mediumUrl: "https://medium.com/@preranakhanal" // Update with your actual Medium URL
      },
      {
        title: "CSRF DVWA Walkthrough",
        summary: "Cross-Site Request Forgery attack demonstration and prevention techniques. Learn how CSRF attacks work and how to protect web applications from this vulnerability.",
        category: "Web Security",
        readTime: "6 min read",
        categoryColor: "text-purple-600",
        mediumUrl: "https://medium.com/@preranakhanal"
      },
      {
        title: "Keeper: Hack The Box Walkthrough",
        summary: "Complete walkthrough of the Keeper machine from Hack The Box. Detailed steps covering reconnaissance, exploitation, and privilege escalation techniques.",
        category: "Ethical Hacking",
        readTime: "8 min read",
        categoryColor: "text-green-600",
        mediumUrl: "https://medium.com/@preranakhanal"
      },
      {
        title: "TryHackMe: Pickle Rick Walkthrough",
        summary: "Step-by-step solution for the Pickle Rick CTF challenge on TryHackMe. Learn web exploitation techniques and privilege escalation in this fun Rick and Morty themed room.",
        category: "CTF Writeup",
        readTime: "5 min read",
        categoryColor: "text-blue-600",
        mediumUrl: "https://medium.com/@preranakhanal"
      },
      {
        title: "TryHackMe: RootMe CTF Writeup",
        summary: "Complete walkthrough of the RootMe machine challenge. Covers web application testing, file upload vulnerabilities, and Linux privilege escalation techniques.",
        category: "CTF Writeup",
        readTime: "7 min read",
        categoryColor: "text-indigo-600",
        mediumUrl: "https://medium.com/@preranakhanal"
      },
      {
        title: "DVWA: Command Execution",
        summary: "Learn about command injection vulnerabilities through practical examples using DVWA. Understand how attackers exploit command execution flaws and prevention methods.",
        category: "Cybersecurity",
        readTime: "4 min read",
        categoryColor: "text-red-600",
        mediumUrl: "https://medium.com/@preranakhanal"
      },
      // Additional blogs that will be shown after clicking "Show More"
      {
        title: "SQL Injection Fundamentals",
        summary: "Deep dive into SQL injection attacks, covering different types of SQLi vulnerabilities and how to prevent them in web applications.",
        category: "Web Security",
        readTime: "10 min read",
        categoryColor: "text-purple-600",
        mediumUrl: "https://medium.com/@preranakhanal"
      },
      {
        title: "XSS Attack Vectors and Prevention",
        summary: "Comprehensive guide on Cross-Site Scripting (XSS) attacks, including stored, reflected, and DOM-based XSS with practical examples.",
        category: "Web Security",
        readTime: "8 min read",
        categoryColor: "text-purple-600",
        mediumUrl: "https://medium.com/@preranakhanal"
      },
      {
        title: "Linux Privilege Escalation Techniques",
        summary: "Essential techniques for privilege escalation in Linux systems during penetration testing and CTF challenges.",
        category: "Ethical Hacking",
        readTime: "12 min read",
        categoryColor: "text-green-600",
        mediumUrl: "https://medium.com/@preranakhanal"
      },
      // Add more of your Medium articles here
    ];
  
    return (
      <section
        id="blogs"
        className="w-full flex flex-col items-center justify-center bg-gradient-to-br from-indigo-50 via-white to-purple-50 py-20 px-8"
      >
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="bg-indigo-100 text-indigo-600 px-4 py-2 rounded-full text-sm font-semibold">My Writings</span>
          </div>
          <h2 className="text-5xl font-bold text-gray-800 mb-6">
            Featured <span className="text-indigo-600">Blogs</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Sharing insights, tutorials, and writeups about cybersecurity, ethical hacking, and penetration testing
          </p>
          <div className="flex items-center justify-center mt-8">
            <div className="w-12 h-1 bg-indigo-600 rounded-full"></div>
            <div className="w-3 h-3 bg-indigo-600 rounded-full mx-4"></div>
            <div className="w-12 h-1 bg-indigo-600 rounded-full"></div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl w-full">
          {(showAllBlogs ? blogPosts : blogPosts.slice(0, 6)).map((post, index) => (
            <div key={index} className="group bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-500 hover:-translate-y-2 transform">
              {/* Blog Header with Gradient */}
             
              
              {/* Blog Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3 leading-tight group-hover:text-indigo-600 transition-colors duration-300">
                  {post.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-6">
                  {post.summary}
                </p>
                
                {/* Category Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                    post.category === 'Cybersecurity' ? 'bg-red-100 text-red-700' :
                    post.category === 'Web Security' ? 'bg-purple-100 text-purple-700' :
                    post.category === 'Ethical Hacking' ? 'bg-green-100 text-green-700' :
                    post.category === 'CTF Writeup' ? 'bg-blue-100 text-blue-700' :
                    'bg-indigo-100 text-indigo-700'
                  }`}>
                    {post.category}
                  </span>
                  <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs font-medium">
                    {post.readTime}
                  </span>
                </div>
                
                {/* Blog Actions */}
                <div className="flex gap-3">
                  <a
                    href={post.mediumUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-4 py-2 rounded-lg font-medium text-sm transition-all duration-300 hover:shadow-lg transform hover:scale-105 flex items-center justify-center gap-2"
                  >
                    Read on Medium
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
        
        {/* View All Blogs CTA */}
        <div className="mt-16 text-center">
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
            <a 
              href="https://medium.com/@preranakhanal" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-lg transition-all duration-300 transform hover:scale-105"
            >
              View All Articles on Medium
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
            
            {!showAllBlogs && blogPosts.length > 6 && (
              <Link
                to="/blogs"
                className="inline-flex items-center gap-2 bg-white border-2 border-indigo-600 text-indigo-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-indigo-600 hover:text-white hover:shadow-lg transition-all duration-300 transform hover:scale-105"
              >
                Show More Blogs
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </Link>
            )}
            
            {showAllBlogs && (
              <button
                onClick={() => setShowAllBlogs(false)}
                className="inline-flex items-center gap-2 bg-white border-2 border-gray-400 text-gray-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 hover:shadow-lg transition-all duration-300 transform hover:scale-105"
              >
                Show Less
                <svg className="w-5 h-5 transform rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            )}
          </div>
        </div>
      </section>
    );
  };
  
  export default Blogs;
