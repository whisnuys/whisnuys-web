import { contactDetails, navLinks, socialLinks } from "@/constant";
import Link from "next/link";
import React from "react";
import NavLink from "./NavLink";
import Image from "next/image";

const Footer = () => {
  return (
    <footer
      className="py-10 border-t border-peach max-width"
      data-aos="fade-up"
      data-aos-delay="100"
    >
      <div className="flex items-center justify-between">
        <Link href={"/"} className="text-teal text-xl font-semibold">
          <Image src="/icons/logo.svg" width={50} height={50} alt="whisnuys." />
        </Link>
        <nav className="flex gap-12 max-tablet:hidden">
          <ul className="flex items-center gap-8">
            {navLinks.map((link, index) => (
              <li key={index}>
                <NavLink href={link.url} label={link.label} />
              </li>
            ))}
          </ul>
        </nav>
        <div className="flex gap-3">
          {socialLinks.map((link, index) => (
            <a
              href={link.url}
              key={index}
              className="w-10 h-10 bg-teal text-white flex items-center justify-center rounded"
            >
              <link.icon strokeWidth={0} fill="currentColor" />
            </a>
          ))}
        </div>
      </div>

      <div className="w-max border border-peach p-5 mx-auto flex gap-5 tablet:gap-10 flex-col tablet:flex-row items-center rounded-lg mt-5">
        {contactDetails.map((detail, index) => (
          <div key={index} className="flex gap-3 items-center text-teal">
            <detail.icon size={20} />
            <p className="text-grey-600">{detail.text}</p>
          </div>
        ))}
      </div>

      <p className="mt-8 text-grey-600 text-center text-sm">
        &copy; {new Date().getFullYear()} whisnuys. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
