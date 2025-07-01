const Blogs = () => {
    const blogPosts = [
      {
        title: "Your First Medium Article Title",
        summary: "Brief description of your first article...",
        category: "Tech", // Change to appropriate category
        readTime: "5 min read",
        categoryColor: "text-purple-600",
        mediumUrl: "https://medium.com/@yourusername/your-article-slug"
      },
      {
        title: "Your Second Medium Article Title",
        summary: "Brief description of your second article...",
        category: "Development",
        readTime: "8 min read",
        categoryColor: "text-blue-600",
        mediumUrl: "https://medium.com/@yourusername/your-second-article-slug"
      },
      {
        title: "Your Third Medium Article Title",
        summary: "Brief description of your third article...",
        category: "Programming",
        readTime: "6 min read",
        categoryColor: "text-green-600",
        mediumUrl: "https://medium.com/@yourusername/your-third-article-slug"
      },
      // Add more of your Medium articles here
    ];
  
    return (
      <section
        id="blogs"
        className="w-full min-h-screen flex flex-col items-center justify-center bg-gray-50 py-12 px-4"
      >
        <h2 className="text-4xl font-bold text-gray-800 mb-12">
          My <span className="text-indigo-600">Blogs</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl w-full">
          {blogPosts.map((post, index) => (
            <div key={index} className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition-all duration-300 hover:-translate-y-1">
              {/* Category Tag */}
              <div className="mb-4">
                <span className={`text-sm font-medium ${post.categoryColor} bg-gray-50 px-3 py-1 rounded-full`}>
                  {post.category}
                </span>
              </div>
              
              {/* Title */}
              <h3 className="text-xl font-bold text-gray-900 mb-3 leading-tight">
                {post.title}
              </h3>
              
              {/* Summary */}
              <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3">
                {post.summary}
              </p>
              
              {/* Footer */}
              <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                <a
                  href={post.mediumUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-indigo-600 hover:text-indigo-700 font-medium text-sm transition-colors duration-200 flex items-center group"
                >
                  Read on Medium 
                  <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
                <span className="text-xs text-gray-500 font-medium">
                  {post.readTime}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  };
  
  export default Blogs;
