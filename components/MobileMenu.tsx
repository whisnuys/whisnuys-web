"use client";

import { navLinks, socialLinks } from "@/constant";
import { Menu, Phone, X } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";
import NavLink from "./NavLink";
import Image from "next/image";

const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="tablet:hidden">
      <button
        className="text-gray-700 hover:text-teal transition-colors"
        onClick={toggleMenu}
      >
        <Menu />
      </button>

      <div
        className={`w-full h-full flex flex-col bg-grey-1000 fixed top-0 left-0 z-50 transition-all duration-300 ease-in-out transform
                ${isOpen ? "translate-x-0" : "-translate-x-full"}
        `}
      >
        <div className="w-full flex items-center justify-between h-20 max-width border-b border-peach">
          <Link href={"/"}>
            <Image
              src="/icons/logo.svg"
              width={50}
              height={50}
              alt="whisnuys."
            />
          </Link>
          <button
            className="text-gray-700 hover:text-teal transition-colors"
            onClick={toggleMenu}
          >
            <X />
          </button>
        </div>
        <nav className="flex flex-col items-center justify-center flex-1 gap-10">
          <ul className="flex items-center flex-col gap-5">
            {navLinks.map((link, index) => (
              <li key={index} onClick={toggleMenu}>
                <NavLink
                  href={link.url}
                  label={link.label}
                  className="text-3xl"
                />
              </li>
            ))}
          </ul>
          <Link href={"/contact"} className="btn btn-primary">
            <Phone size={22} />
            Contact Me
          </Link>
        </nav>

        <div className="w-full h-20 flex items-center justify-between max-width border-t border-peach">
          {socialLinks.map((link, index) => (
            // eslint-disable-next-line react/jsx-key
            <a
              href={link.url}
              key={index}
              target="_blank"
              className="text-grey-700 hover:text-teal transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
