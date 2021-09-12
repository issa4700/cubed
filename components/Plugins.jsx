import React from "react";

const plugins = [
  "Bookshelf",
  "BungeeSafeGuard",
  "EssentialsX",
  "hsrails",
  "Pl3xMap",
];

export default function Plugins() {
  return (
    <section className="text-gray-600 body-font">
      <div className="container flex flex-wrap px-5 py-24 mx-auto items-center">
        <div className="md:w-1/2 md:pr-12 md:py-8 md:border-r md:border-b-0 mb-10 md:mb-0 pb-10 border-b border-gray-200">
          <h1 className="text-3xl lg:text-4xl font-bold title-font mb-2 text-gray-900">
            Minimal plugins
          </h1>
          <p className="leading-relaxed text-lg text-gray-600 max-w-prose">
            We wanted to keep the player experience as vanilla as possible; only
            using plugins that are essential or ones that we believe would
            enhance the player experience without significantly altering
            gameplay.
          </p>
        </div>
        <div className="flex flex-col md:w-1/2 md:pl-12">
          <h2 className="uppercase font-semibold text-gray-800 tracking-wider text-sm mb-3">
            Plugins in use
          </h2>
          <ul className="flex flex-wrap list-none -mb-1">
            {plugins.map((plugin, i) => (
              <li key={i} className="lg:w-1/3 mb-1 w-1/2">
                <span className="text-gray-600 hover:text-gray-800">
                  {plugin}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
