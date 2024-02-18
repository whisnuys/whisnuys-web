import { navLinks } from "@/constant";
import Link from "next/link";
import React from "react";
import NavLink from "./NavLink";
import Image from "next/image";
import { Phone } from "lucide-react";
import MobileMenu from "./MobileMenu";

const Header = () => {
  return (
    <header className="flex items-center justify-between h-20 max-width border-b border-peach">
      <Link href={"/"}>
        <Image src="/icons/logo.svg" width={50} height={50} alt="whisnuys." />
      </Link>
      <nav className="flex items-center gap-12 max-tablet:hidden">
        <ul className="flex items-center gap-8">
          {navLinks.map((link, index) => (
            <li key={index}>
              <NavLink href={link.url} label={link.label} />
            </li>
          ))}
        </ul>
      </nav>
      <MobileMenu />
    </header>
  );
};

export default Header;
