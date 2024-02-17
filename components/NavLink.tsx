"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const NavLink = ({
  href,
  label,
  className,
}: {
  href: string;
  label: string;
  className?: string;
}) => {
  const pathname = usePathname();

  return (
    <Link
      href={href}
      className={`py-3 text-gray-700 hover:text-teal transition-colors relative block after:block after:absolute after:left-0 after:h-0.5 
      after:bg-teal after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:hover:origin-center ${className}
        ${
          pathname === href
            ? "after:scale-x-100 after:origin-center text-teal"
            : "after:scale-x-0 after:origin-center text-gray-700"
        }
      `}
    >
      {label}
    </Link>
  );
};

export default NavLink;
