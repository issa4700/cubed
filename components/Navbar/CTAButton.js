import React from "react";
import Link from "next/link";

export default function CTAButton({ label, href, mobile }) {
  return (
    <Link href={href}>
      <a
        className={`${
          mobile ? "w-full text-center border-red-400 border-2" : ""
        } flex justify-center items-center py-3 px-5 font-bold text-gray-700 leading-normal hover:text-white hover:bg-red-400 border  transition duration-200`}
      >
        <span>{label}</span>
      </a>
    </Link>
  );
}
