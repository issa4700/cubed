import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

export default function NavItem({ item }) {
  const router = useRouter();
  const isCurrentPath = item.href == router.pathname;

  return (
    <li>
      <Link href={item.href}>
        <a
          className={`font-medium border-0 ${
            isCurrentPath
              ? "border-b-2 text-gray-900"
              : "hover:border-b-2 hover:text-gray-900 text-gray-500"
          }  border-red-400  transition ease-in-out duration-200 text-lg`}
        >
          {item.name}
        </a>
      </Link>
    </li>
  );
}

export function MobileNavItem({ item }) {
  const router = useRouter();
  const isCurrentPath = item.href == router.pathname;

  return (
    <li>
      <Link href={item.href}>
        <a
          className={`${
            isCurrentPath ? "text-gray-900 font-bold" : "text-gray-500"
          } block p-4 text-xl hover:bg-gray-50  rounded`}
        >
          {item.name}
        </a>
      </Link>
    </li>
  );
}
