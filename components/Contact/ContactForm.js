import React from "react";
import Iframe from "react-iframe";

export default function ContactForm() {
  return (
    <div className="container px-5 py-8 md:py-20 mx-auto flex">
      <div className="lg:w-1/3 md:w-1/2 bg-white p-8 lg:p-12 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10 shadow-md">
        <h2 className="text-gray-900 text-xl lg:text-3xl mb-1 font-medium">
          Contact Us
        </h2>
        <p className="leading-relaxed mb-5 text-gray-600">
          Please use this form for any inquiries except those regarding bans or
          whitelist applications.
        </p>
        <div className="relative mb-4">
          <label htmlFor="email" className="leading-7 text-sm text-gray-600">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="w-full bg-white  border border-gray-300 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
          />
        </div>
        <div className="relative mb-4">
          <label htmlFor="ign" className="leading-7 text-sm text-gray-600">
            <abbr title="In-game Name">IGN</abbr>
          </label>
          <input
            type="text"
            id="ign"
            name="ign"
            className="w-full bg-white  border border-gray-300 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
          />
        </div>
        <div className="relative mb-4">
          <label htmlFor="message" className="leading-7 text-sm text-gray-600">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            className="w-full bg-white  border border-gray-300 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 h-36 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
          ></textarea>
        </div>
        <button className="text-white bg-red-400 border-0 py-2 px-6 focus:outline-none hover:bg-red-500 text-lg">
          Submit
        </button>
        <p className="text-xs text-gray-500 mt-3">
          We only use your email for communication purposes. We hate spam too!
        </p>
      </div>
    </div>
  );
}
