import React, { useState } from "react";
import { CubeIcon } from "@heroicons/react/outline";
import { NumberPlayers } from "./PlayerCount";
import { server } from "../config";

export default function About() {
  const [hidden, setHidden] = useState(true);

  const copy = async () => {
    await navigator.clipboard.writeText(server.ip);
    setHidden(false);
  };

  return (
    <div className="relative bg-white" id="about">
      <div className="relative overflow-hidden container mx-auto py-32 px-6 lg:px-4">
        <div className="relative flex flex-col lg:flex-row lg:space-x-20 space-y-12  text-center lg:text-left">
          <div className="w-full lg:w-1/2 space-y-5">
            <h1 className="text-3xl lg:text-4xl font-bold">
              About <span className="text-pink-500">Cube Anarchy</span>
            </h1>
            <p className="text-lg text-gray-600 max-w-prose leading-relaxed">
              Cube began an as tight-knit community enthusiastic about a vanilla
              gameplay experience and wanted to play on a server without the
              overhead of operating a public server. Cube has since grown from a
              whitelisted only server to now an invite-only server where new
              players are vetted by current players. Currently, our network only
              features vanilla SMP, but we routinely get community feedback to
              improve and introduce new gameplay mechanics into the network.
            </p>
          </div>
          <div className="w-full lg:w-1/2 flex flex-col space-y-6 my-auto text-2xl">
            <h2 className="font-medium uppercase">Play now!</h2>
            <div className="flex flex-col lg:flex-row justify-center lg:justify-start items-center space-x-4 space-y-4 lg:space-y-0">
              <button
                className="inline-flex px-5 py-4 space-x-3 items-center bg-red-400 hover:bg-red-500 transition ease-in-out text-white"
                onClick={copy}
              >
                <CubeIcon className="h-8 w-8 opacity-75" />
                <span className="uppercase custom-font text-3xl">
                  {server.ip}
                </span>
              </button>
              <span
                className={`${
                  hidden ? "hidden" : ""
                } text-lg font-medium text-gray-400`}
              >
                IP Copied to Clipboard!
              </span>
            </div>
            <div className="uppercase">
              <span className="text-red-400">
                <NumberPlayers />
              </span>{" "}
              players online
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
