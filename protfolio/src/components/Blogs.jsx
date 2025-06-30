const Blogs = () => {
    const blogPosts = [
      {
        title: "Understanding Phishing Attacks",
        summary: "A beginner-friendly guide to how phishing works and how to avoid getting scammed online.",
      },
      {
        title: "My Journey into Ethical Hacking",
        summary: "Sharing my story and what inspired me to pursue cybersecurity and hacking responsibly.",
      },
      {
        title: "Top 5 Tools Every Cybersecurity Student Should Know",
        summary: "Wireshark, Nmap, Burp Suite, and more. Here are my go-to tools and why I love them.",
      },
      {
        title: "The Importance of Cyber Hygiene",
        summary: "Simple steps to keep your online presence secure and protect your personal information.",
      },
      {
        title: "Exploring the Dark Web: My Experience",
        summary: "A look into the dark web and what I learned about cybersecurity and anonymity.",
      },
      {
        title: "Building a Home Lab for Ethical Hacking",
        summary: "How to set up a safe environment for practicing your hacking skills.",
      },
    ];
  
    return (
      <section
        id="blogs"
        className="w-full min-h-screen flex flex-col items-center justify-center bg-white py-12 px-4"
      >
        <h2 className="text-4xl font-bold text-gray-800 mb-8">
          My <span className="text-gray-600">Blogs</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl w-full">
          {blogPosts.map((post, index) => (
            <div key={index} className="bg-gray-100 rounded-lg shadow-lg p-6 hover:bg-gray-200 transition">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">{post.title}</h3>
              <p className="text-gray-600">
                {post.summary}
              </p>
              <a
                href="#"
                className="text-gray-800 hover:text-gray-600 font-semibold transition"
              >
                Read More
              </a>
            </div>
          ))}
        </div>
      </section>
    );
  };
  
  export default Blogs;
