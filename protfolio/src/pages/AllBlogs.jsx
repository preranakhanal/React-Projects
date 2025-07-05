import React from 'react';
import { Link } from 'react-router-dom';

const AllBlogs = () => {
  const allBlogPosts = [

    {
        title: "Hack The Box Academy: A Beginner's Guide to Linux Fundamentals",
        summary: "The Linux Fundamentals Box from Hack The Box Academy provides an excellent introduction to Linux systems for cybersecurity professionals and beginners.",
        category: "Ethical Hacking",
        readTime: "18 min read",
        categoryColor: "text-green-600",
        mediumUrl: "https://medium.com/@preranakhanal42/hack-the-box-academy-a-beginners-guide-to-linux-fundamentals-ffa462e51b0b"
      },
    {
      title: "File Inclusion Attack using DVWA",
      summary: "A comprehensive guide on file inclusion attacks, covering Local File Inclusion (LFI) and Remote File Inclusion (RFI) vulnerabilities using DVWA for practical demonstration.",
      category: "Cybersecurity",
      readTime: "3 min read",
      date: "Jun 16, 2024",
      mediumUrl: "https://medium.com/@preranakhanal42/file-inclusion-attack-using-dvwa-8e0a607cdcaf"
    },
    {
      title: "CSRF DVWA Walkthrough",
      summary: "Cross-Site Request Forgery attack demonstration and prevention techniques. Learn how CSRF attacks work and how to protect web applications from this vulnerability.",
      category: "Web Security",
      readTime: "6 min read",
      date: "Dec 27, 2023",
      mediumUrl: "https://medium.com/@preranakhanal42/csrf-dvwa-walkthrough-106b318c7b1f"
    },
    {
      title: "Keeper: Hack The Box Walkthrough",
      summary: "Complete walkthrough of the Keeper machine from Hack The Box. Detailed steps covering reconnaissance, exploitation, and privilege escalation techniques.",
      category: "Ethical Hacking",
      readTime: "8 min read",
      date: "Dec 19, 2023",
      mediumUrl: "https://medium.com/@preranakhanal42/keeper-hack-the-box-walkthrough-570c9a9dc9e9"
    },
    {
      title: "TryHackMe: Pickle Rick Walkthrough",
      summary: "Step-by-step solution for the Pickle Rick CTF challenge on TryHackMe. Learn web exploitation techniques and privilege escalation in this fun Rick and Morty themed room.",
      category: "CTF Writeup",
      readTime: "5 min read",
      date: "Dec 18, 2023",
      mediumUrl: "https://medium.com/@preranakhanal42/tryhackme-pickle-rick-walkthrough-587179c21ffc"
    },
    {
      title: "TryHackMe: RootMe CTF Writeup",
      summary: "Complete walkthrough of the RootMe machine challenge. Covers web application testing, file upload vulnerabilities, and Linux privilege escalation techniques.",
      category: "CTF Writeup",
      readTime: "7 min read",
      date: "Dec 18, 2023",
      mediumUrl: "https://medium.com/@preranakhanal42/tryhackme-rootme-ctf-writeup-2e4f98e13135"
    },
    {
      title: "DVWA: Command Execution",
      summary: "Learn about command injection vulnerabilities through practical examples using DVWA. Understand how attackers exploit command execution flaws and prevention methods.",
      category: "Cybersecurity",
      readTime: "4 min read",
      date: "Dec 13, 2023",
      mediumUrl: "https://medium.com/@preranakhanal42/dvwa-command-execution-8a6324d5f759"
    },
    {
      title: "SQL Injection Fundamentals",
      summary: "Deep dive into SQL injection attacks, covering different types of SQLi vulnerabilities and how to prevent them in web applications.",
      category: "Web Security",
      readTime: "10 min read",
      date: "Nov 28, 2023",
      mediumUrl: "https://medium.com/@preranakhanal42"
    },
    {
      title: "XSS Attack Vectors and Prevention",
      summary: "Comprehensive guide on Cross-Site Scripting (XSS) attacks, including stored, reflected, and DOM-based XSS with practical examples.",
      category: "Web Security",
      readTime: "8 min read",
      date: "Nov 15, 2023",
      mediumUrl: "https://medium.com/@preranakhanal42"
    },
    {
      title: "Linux Privilege Escalation Techniques",
      summary: "Essential techniques for privilege escalation in Linux systems during penetration testing and CTF challenges.",
      category: "Ethical Hacking",
      readTime: "12 min read",
      date: "Nov 02, 2023",
      mediumUrl: "https://medium.com/@preranakhanal42"
    },
    {
      title: "Web Application Reconnaissance",
      summary: "Complete guide on web application reconnaissance techniques for bug bounty hunting and penetration testing.",
      category: "Ethical Hacking",
      readTime: "15 min read",
      date: "Oct 20, 2023",
      mediumUrl: "https://medium.com/@preranakhanal42"
    },
    {
      title: "Buffer Overflow Exploitation",
      summary: "Understanding buffer overflow vulnerabilities and exploitation techniques with practical examples and mitigation strategies.",
      category: "Cybersecurity",
      readTime: "18 min read",
      date: "Oct 05, 2023",
      mediumUrl: "https://medium.com/@preranakhanal42"
    },
    {
      title: "Network Security Fundamentals",
      summary: "Introduction to network security concepts, protocols, and best practices for securing network infrastructure.",
      category: "Cybersecurity",
      readTime: "14 min read",
      date: "Sep 22, 2023",
      mediumUrl: "https://medium.com/@preranakhanal42"
    },
    {
      title: "Linux Fundamentals Part 3 — TryHackMe",
      summary: "Complete walkthrough of TryHackMe's Linux Fundamentals Part 3, covering advanced Linux commands, file permissions, and system administration tasks.",
      category: "CTF Writeup",
      readTime: "12 min read",
      date: "Oct 5, 2023",
      mediumUrl: "https://medium.com/@preranakhanal42/linux-fundamentals-part-3-tryhackme-abf0f4ce4373"
    },
    {
      title: "Linux Fundamentals Part 2 — TryHackMe",
      summary: "Comprehensive guide to TryHackMe's Linux Fundamentals Part 2, exploring file systems, processes, and essential Linux operations.",
      category: "CTF Writeup",
      readTime: "10 min read",
      date: "Oct 3, 2023",
      mediumUrl: "https://medium.com/@preranakhanal42/linux-fundamentals-part-2-tryhackme-c530fb20a805"
    },
    {
      title: "Linux Fundamentals Part 1 — TryHackMe",
      summary: "Introduction to Linux basics through TryHackMe's Linux Fundamentals Part 1, covering basic commands, navigation, and getting started with Linux.",
      category: "CTF Writeup",
      readTime: "8 min read",
      date: "Oct 1, 2023",
      mediumUrl: "https://medium.com/@preranakhanal42/linux-fundamentals-part-1-tryhackme-7b04b9759ab6"
    },
    {
      title: "OverTheWire — Bandit Walkthrough (Level 0-15)",
      summary: "In this blog post series, we will be addressing a 'CTF' known as Bandit, created by OverTheWire. This Linux wargame is designed to teach the basics of Linux command line.",
      category: "CTF Writeup",
      readTime: "15 min read",
      date: "Oct 4, 2023",
      mediumUrl: "https://medium.com/@preranakhanal42/overthewire-bandit-walkthrough-level-0-15-4b04a003dc58"
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50">
      {/* Navigation */}
      <nav className="bg-white/90 backdrop-blur-md shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <a href="/" className="flex items-center">
              <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white w-10 h-10 rounded-lg flex items-center justify-center font-bold text-lg">
                PK
              </div>
              <span className="ml-3 text-xl font-bold text-gray-800">Prerana Khanal</span>
            </a>
            <a 
              href="/"
              className="bg-indigo-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-indigo-700 transition-colors duration-300"
            >
              Back to Portfolio
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            All Blog Posts
          </h1>
          <p className="text-xl md:text-2xl mb-8 opacity-90">
            Cybersecurity and Web development insights, tutorials and ethical hacking writeups
          </p>
          <div className="flex items-center justify-center">
            <div className="bg-white/20 px-6 py-3 rounded-full">
              <span className="text-lg font-semibold">{allBlogPosts.length} Articles</span>
            </div>
          </div>
        </div>
      </div>

      {/* Blog Posts Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {allBlogPosts.map((post, index) => (
            <article key={index} className="group bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-500 hover:-translate-y-2 transform flex flex-col h-full">
              {/* Blog Content */}
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex items-center justify-between mb-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                    post.category === 'Cybersecurity' ? 'bg-red-100 text-red-700' :
                    post.category === 'Web Security' ? 'bg-purple-100 text-purple-700' :
                    post.category === 'Ethical Hacking' ? 'bg-green-100 text-green-700' :
                    post.category === 'CTF Writeup' ? 'bg-blue-100 text-blue-700' :
                    'bg-indigo-100 text-indigo-700'
                  }`}>
                    {post.category}
                  </span>
                  <span className="text-sm text-gray-500">{post.date}</span>
                </div>
                
                <h2 className="text-xl font-bold text-gray-900 mb-3 leading-tight group-hover:text-indigo-600 transition-colors duration-300">
                  {post.title}
                </h2>
                <p className="text-gray-600 text-sm leading-relaxed mb-4 flex-grow">
                  {post.summary}
                </p>
                
                <div className="flex items-center justify-between mt-auto">
                  <span className="text-sm text-gray-500">{post.readTime}</span>
                  <a
                    href={post.mediumUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-4 py-2 rounded-lg font-medium text-sm transition-all duration-300 hover:shadow-lg transform hover:scale-105 flex items-center gap-2"
                  >
                    Read Article
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Want to read more?
            </h3>
            <p className="text-gray-600 mb-6">
              Follow me on Medium for the latest cybersecurity insights and tutorials
            </p>
            <a 
              href="https://medium.com/@preranakhanal42" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-lg transition-all duration-300 transform hover:scale-105"
            >
              Follow on Medium
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllBlogs;
