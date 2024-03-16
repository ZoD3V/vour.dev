import React, { useState } from "react";
import { close, logo, menu,iconHeader } from "../assets";
import { navLinks } from "../constants";
import { motion } from "framer-motion";
import { navVariants,slideIn } from "../utils/motions";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <motion.nav
    variants={navVariants}
    initial="hidden"
    whileInView="show"
    viewport={{once:true}}
    className="w-full flex justify-between py-6 items-center navbar">
      <img src={iconHeader} alt="vour.dev" className="w-[124px] h-[32px]" />

      <ul className="list-none sm:flex hidden justify-end flex-1 items-center">
        {navLinks.map((nav, index) => (
          <li
            className={`font-poppins font-normal cursor-pointer text-[18px] text-white ${
              index === navLinks.length - 1 ? "mr-0" : "mr-10"
            } ${
              nav.id === "contact-us"
                ? "py-2 px-3 blue-button !text-black rounded-md"
                : "bg-none"
            }`}
            key={nav.id}
          >
            <a href={`#${nav.id}`}>{nav.title}</a>
          </li>
        ))}
      </ul>

      <div className="sm:hidden flex flex-1 justify-end items-center cursor-pointer">
        <img
          src={toggle ? close : menu}
          alt="menu"
          className="w-[28px] h-[28px] object-contain"
          onClick={() => setToggle((prev) => !prev)}
        />
      </div>

      <div
        className={`${
          toggle ? "flex" : "hidden"
        } p-7 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar sm:hidden z-[90]`}
      >
        <ul className="list-none flex flex-col justify-center flex-1 items-center">
          {navLinks.map((nav, index) => (
            <li
              className={`font-poppins font-normal cursor-pointer text-[18px] text-white ${
                index === navLinks.length - 1 ? "mb-0" : "mb-4"
              }`}
              key={nav.id}
            >
              <a href={`#${nav.id}`}>{nav.title}</a>
            </li>
          ))}
        </ul>
      </div>
    </motion.nav>
  );
};

export default Navbar;
