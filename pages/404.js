import React from "react";

export default function Custom404() {
  return (
    <div className="absolute flex items-center justify-center h-full w-full">
      <div className="flex flex-col md:flex-row items-center md:space-x-12 text-center md:text-left px-4">
        <h1 className="custom-font text-9xl">404</h1>
        <div>
          <h2 className="text-3xl font-medium">Oh no!</h2>
          <p className="max-w-prose text-lg text-gray-600">
            We can’t find the page you’re looking for.
          </p>
        </div>
      </div>
    </div>
  );
}
