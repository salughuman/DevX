import React from "react";
import { motion } from "framer-motion";
const Navbar = () => {
  return (
    <nav className="flex justify-between py-5 items-center w-full mx-auto bg-transparent ">
      <div className=" ml-20 ">
        <img
          className=" h-12 w-20 cursor-pointer"
          src="./devx-logo.webp"
          alt="..."
        />
      </div>
      <div className="nav-links absolute top-[55px] md:static md:min-h-fit min-h-[60vh] left-0 w-1/3 mx-8 flex items-center px-5  ">
        <ul className=" font-inter text-white flex md:flex-row flex-col md:items-center md:gap-[1vw] gap-8 ">
          <li>
            <a
              href="#link"
              className="group relative inline-block p-1 text-base font-lato text-[14px]   outline-none no-underline tracking-wider  focus:outline-none "
            >
              HOME
              <span
                className="absolute -bottom-1.5 left-0 w-full h-1.5 bg-secondary-100 rounded-2xl opacity-0 rotate-0 transition-all  duration-300 transform ease-in-out  group-hover:opacity-100 group-hover:rotate-2 "
                aria-hidden="true"
              />
            </a>
          </li>
          <li className="relative inline-block text-center">
            <button className="peer px-5 py-2 inline-flex justify-center w-full text-white">SERVICES</button>

            <div className="hidden origin-top-right absolute -right-10 text-black rounded-lg overflow-hidden peer-hover:flex hover:flex w-[200px] flex-col gap-y-2 bg-white drop-shadow-lg">
              <a className="px-5 mt-2 py-3 w-[97%] mx-auto text-[16px] rounded-lg hover:bg-secondary-100" href="#">
                WEB DESIGN
              </a>
              <a className="px-5 py-3 w-[97%] mx-auto rounded-lg text-[16px]  hover:bg-secondary-100" href="#">
                SEO
              </a>
              <a className="px-5 mb-2 py-3 w-[97%] text-[16px] mx-auto rounded-lg  hover:bg-secondary-100" href="#">
              COPYWRITING
              </a>
            </div>
          </li>
          <li>
            <a
              href="#link"
              className="group relative inline-block p-1 outline-none no-underline  font-lato text-[14px] tracking-wide focus:outline-none "
            >
              PROJECTS
              <span
                className="absolute -bottom-1.5 left-0 w-full h-1.5 bg-red-700 rounded-2xl opacity-0 rotate-0 transition-all  duration-300 transform ease-in-out  group-hover:opacity-100 group-hover:rotate-2 "
                aria-hidden="true"
              />
            </a>
          </li>
        </ul>
        <div className="flex items-center mx-10">
          <motion.button
            className=" bg-secondary-100 font-lato w-32 rounded-sm text-black text-sm font-semibold md:text-xs px-5 py-2 "
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97, x: "-2px", y: "2px" }}
          >
            Get a Quote
          </motion.button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
