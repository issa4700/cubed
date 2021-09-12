import React from "react";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import PlayerCount from "../PlayerCount";
import CTAButton from "./CTAButton";
import Logo from "../Logo";
import NavItem, { MobileNavItem } from "./NavItem";
import { meta, server, nav } from "../../config";

export default function Navbar() {
  const [toggle, setToggle] = useState(false);
  const { logo, CTA } = meta;

  const router = useRouter();
  useEffect(() => {
    setToggle(false);
  }, [router.pathname]);

  return (
    <section className="py-4">
      <div className="container px-6 mx-auto">
        <nav>
          <div className="flex justify-between items-center">
            <div className="flex">
              <Logo logoURL={logo} />
            </div>
            <div>
              <ul className="hidden lg:flex lg:ml-auto lg:space-x-12 lg:items-center lg:w-auto">
                {nav?.items?.map((item) => {
                  return <NavItem item={item} key={item.name} />;
                })}
              </ul>
            </div>
            <div className="lg:hidden">
              <button
                onClick={() => setToggle(!toggle)}
                className="navbar-burger flex items-center p-3 hover:bg-gray-50 rounded"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>

            <div className="hidden lg:flex items-center space-x-4">
              {nav?.playerCount && <PlayerCount />}
              <div className="hidden lg:block">
                {nav?.CTAButton?.enabled && (
                  <CTAButton label={CTA.label} href={CTA.href} />
                )}
              </div>
            </div>
          </div>
        </nav>
      </div>

      {/* Mobile Nav */}
      <div className={`${toggle ? "" : "hidden"} relative z-50`}>
        <div className="fixed inset-0 bg-gray-800 opacity-25"></div>
        <nav className="fixed top-0 left-0 bottom-0 flex flex-col w-full max-w-sm py-4 px-6 bg-white border-r overflow-y-auto">
          <div className="flex items-center mb-8 justify-between">
            <Logo logoURL={logo} />
            <button onClick={() => setToggle(!toggle)} name="toggle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <div>
            <ul className="space-y-1">
              {nav?.items?.map((item) => {
                return <MobileNavItem item={item} key={item.name} />;
              })}
            </ul>
          </div>
          <div className="mt-auto">
            <div className="pt-6">
              {nav?.CTAButton?.enabled && (
                <CTAButton label={CTA.label} href={CTA.href} mobile={true} />
              )}
            </div>
            <div className="flex flex-col mt-6 mb-4 text-sm text-center text-gray-400">
              {nav?.playerCount && <PlayerCount />}
              <span>Play using {server.ip}</span>
            </div>
          </div>
        </nav>
      </div>
    </section>
  );
}
