import React from "react";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="text-gray-600 bg-gray-50 body-font antialiased max-h-screen">
      <div className="container mx-auto flex lg:px-6 md:flex-row flex-col-reverse items-center">
        <div className="lg:flex-grow md:w-1/2 ">
          <img
            className="mr-auto object-cover object-center md:mt-10"
            alt="hero"
            src="/hero/hero.png"
            height="600px"
          />
        </div>
        <div className="lg:flex-grow lg:max-w-lg lg:w-full md:w-1/2 w-5/6 md:pr-4 flex-col lg:items-start md:text-right mb-6 md:mb-0 mt-8 lg:-mt-36 items-center text-center lg:space-y-12">
          <h1 className="lg:text-6xl text-3xl mb-4 font-bold text-gray-900">
            The Ultimate Anarchy Server
          </h1>
          <p className="mb-8 leading-relaxed text-gray-500 text-xl">
            We are a whitelisted anarchy server with an{" "}
            <span className="text-pink-500">infinite world</span> and{" "}
            <span className="text-pink-500">no rules</span>. We only have one
            exception: no lag machines.
          </p>
          <div className="flex flex-col-reverse md:flex-row justify-center md:justify-end md:space-x-4">
            <button className="font-medium text-sm px-5 lg:text-base py-4 lg:px-8 lg:py-4 text-gray-500 hover:text-gray-700 transition ease-in-out">
              Apply for Whitelist
            </button>
            <Link href="#about">
              <button className="text-gray-900 uppercase font-medium text-sm px-5 lg:text-base py-4 lg:px-8 lg:py-4 bg-yellow-300 hover:bg-yellow-400 transition ease-in-out">
                Play Now
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
