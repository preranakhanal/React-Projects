import React from 'react'

// This component displays contact information and a contact form

const Contact = () => {
  return (
    <div>
      <section id="contact" className="bg-gray-100 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-8">Contact Me</h2>
          <div className="flex flex-col md:flex-row justify-center items-center space-y-6 md:space-y-0 md:space-x-8">
            {/* Contact Info */}
            <div className="w-full md:w-1/3 bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Get in Touch</h3>
              <p className="text-gray-600 mb-4">Feel free to reach out via email or phone.</p>
              <p className="text-gray-800 font-bold">
                Email:{" "}
                <a href="mailto:prerana@gmail.com" className="text-blue-600 hover:underline">
                  prerana@gmail.com
                </a>
              </p>
              <p className="text-gray-800 font-bold mt-2">
                Phone:{" "}
                <a href="tel:+1234567890" className="text-blue-600 hover:underline">
                  +1 234 567 890
                </a>
              </p>
            </div>
            {/* Contact Form */}
            <div className="w-full md:w-2/3 bg-white p-6 rounded-lg shadow-md">
              <form>
                <div className="mb-4">
                  <label className="block text-gray-700 font-bold mb-2" htmlFor="name">
                    Name
                  </label>
                  <input
                    className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                    type="text"
                    id="name"
                    name="name"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700 font-bold mb-2" htmlFor="email">
                    Email
                  </label>
                  <input
                    className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                    type="email"
                    id="email"
                    name="email"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700 font-bold mb-2" htmlFor="message">
                    Message
                  </label>
                  <textarea
                    className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                    id="message"
                    name="message"
                    rows="4"
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="bg-blue-600 text-white px-6 py-2 rounded-lg font-bold hover:bg-blue-700 transition"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact