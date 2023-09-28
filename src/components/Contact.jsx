import React from "react";
import Header from "./Header";

const Contact = () => {
  return (
    <section>
      <Header />
      <div className="container mx-auto mt-4">
        <h1 className="text-4xl font-bold mb-4 text-center">Contact Us</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <p className="text-lg font-semibold mb-2">Contact Information:</p>
            <ul className="list-disc ml-6">
              <li>Email: aiverse@vishnu.edu.in</li>
              <li>Phone: +916305347387</li>
              <li>Address: Vishnupur, Bhimavaram-2, Bhimavaram, Andhra Pradesh 534202</li>
            </ul>
          </div>
          <div>
            <form className="flex flex-col">
              <label className="text-lg font-semibold mb-2" htmlFor="name">
                Your Name:
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="border rounded-md py-2 px-4 mb-4"
                placeholder="John Doe"
                required
              />
              <label className="text-lg font-semibold mb-2" htmlFor="email">
                Your Email:
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="border rounded-md py-2 px-4 mb-4"
                placeholder="john@example.com"
                required
              />
              <label className="text-lg font-semibold mb-2" htmlFor="message">
                Message:
              </label>
              <textarea
                id="message"
                name="message"
                rows="4"
                className="border rounded-md py-2 px-4 mb-4"
                placeholder="Write your message here..."
                required
              />
              <button
                type="submit"
                className="bg-teal-800 text-white py-2 px-4 rounded-lg shadow-md hover:bg-teal-500 transition-colors duration-300 ease-in-out"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
