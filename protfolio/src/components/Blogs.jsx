import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Section, Card, Badge, Button } from './ui';

const Blogs = () => {
    const [showAllBlogs, setShowAllBlogs] = useState(false);
    const blogPosts = [
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
        categoryColor: "text-red-600",
        mediumUrl: "https://medium.com/@preranakhanal42/file-inclusion-attack-using-dvwa-8e0a607cdcaf"
      },
      {
        title: "CSRF DVWA Walkthrough",
        summary: "Cross-Site Request Forgery attack demonstration and prevention techniques. Learn how CSRF attacks work and how to protect web applications from this vulnerability.",
        category: "Web Security",
        readTime: "6 min read",
        categoryColor: "text-purple-600",
        mediumUrl: "https://medium.com/@preranakhanal42/csrf-dvwa-walkthrough-106b318c7b1f"
      },
      {
        title: "Keeper: Hack The Box Walkthrough",
        summary: "Complete walkthrough of the Keeper machine from Hack The Box. Detailed steps covering reconnaissance, exploitation, and privilege escalation techniques.",
        category: "Ethical Hacking",
        readTime: "8 min read",
        categoryColor: "text-green-600",
        mediumUrl: "https://medium.com/@preranakhanal42/keeper-hack-the-box-walkthrough-570c9a9dc9e9"
      },
      {
        title: "TryHackMe: Pickle Rick Walkthrough",
        summary: "Step-by-step solution for the Pickle Rick CTF challenge on TryHackMe. Learn web exploitation techniques and privilege escalation in this fun Rick and Morty themed room.",
        category: "CTF Writeup",
        readTime: "5 min read",
        categoryColor: "text-blue-600",
        mediumUrl: "https://medium.com/@preranakhanal42/tryhackme-pickle-rick-walkthrough-587179c21ffc"
      },
      {
        title: "TryHackMe: RootMe CTF Writeup",
        summary: "Complete walkthrough of the RootMe machine challenge. Covers web application testing, file upload vulnerabilities, and Linux privilege escalation techniques.",
        category: "CTF Writeup",
        readTime: "7 min read",
        categoryColor: "text-indigo-600",
        mediumUrl: "https://medium.com/@preranakhanal42/tryhackme-rootme-ctf-writeup-2e4f98e13135"
      },
      {
        title: "DVWA: Command Execution",
        summary: "Learn about command injection vulnerabilities through practical examples using DVWA. Understand how attackers exploit command execution flaws and prevention methods.",
        category: "Cybersecurity",
        readTime: "4 min read",
        categoryColor: "text-red-600",
        mediumUrl: "https://medium.com/@preranakhanal42/dvwa-command-execution-8a6324d5f759"
      },
      // Additional blogs that will be shown after clicking "Show More"
      
    ];
  
    return (
      <Section
        id="blogs"
        background="gradient"
        badge="My Writings"
        title={<>Featured <span className="text-indigo-600">Blogs</span></>}
        subtitle="Sharing insights, tutorials, and writeups about cybersecurity, ethical hacking, and penetration testing"
      >
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl w-full">
          {(showAllBlogs ? blogPosts : blogPosts.slice(0, 6)).map((post, index) => (
            <Card key={index} className="group flex flex-col h-full">
              {/* Blog Header with Gradient */}
             
              
              {/* Blog Content */}
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-gray-900 mb-3 leading-tight group-hover:text-indigo-600 transition-colors duration-300">
                  {post.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-6 flex-grow">
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
                <div className="flex gap-3 mt-auto">
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
            </Card>
          ))}
        </div>
        
        {/* View All Blogs CTA */}
        <div className="mt-16 text-center">
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
            <Button
              href="https://medium.com/@preranakhanal42"
              target="_blank"
              rel="noopener noreferrer"
              variant="primary"
              size="xl"
              icon={
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              }
            >
              View All Articles on Medium
            </Button>
            
            {!showAllBlogs && blogPosts.length > 6 && (
              <Button
                onClick={() => setShowAllBlogs(true)}
                variant="primary"
                size="xl"
                icon={
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                }
              >
                Show More Blogs
              </Button>
            )}
            
            {showAllBlogs && (
              <Button
                onClick={() => setShowAllBlogs(false)}
                variant="outline"
                size="xl"
                icon={
                  <svg className="w-5 h-5 transform rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                }
              >
                Show Less
              </Button>
            )}
          </div>
        </div>
      </Section>
    );
  };
  
  export default Blogs;
