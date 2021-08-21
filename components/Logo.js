import React from "react";
import Link from "next/link";

export default function Logo({ logoURL }) {
  return (
    <Link href="/">
      <a className="text-lg font-medium h-12 transform-gpu scale-105" href="#">
        <img className="h-full antialiased" src={logoURL} alt="" width="auto" />
      </a>
    </Link>
  );
}
