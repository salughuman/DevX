import React from "react";
import { motion } from "framer-motion";
const Navbar = () => {
  return (


    
// <nav class="  w-full z-20 top-0 left-0">
//   <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
//   <a href="!#" class="flex items-center">
//       <img src="./devx-logo.webp" class="h-16 w-24 mr-3" alt="Logo"/>
//       {/* <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Flowbite</span> */}
//   </a>
//   <div class="flex md:order-2">
//       <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Get started</button>
//       <button data-collapse-toggle="navbar-sticky" type="button" class="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-sticky" aria-expanded="false">
//         <span class="sr-only">Open main menu</span>
//         <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
//       </button>
//   </div>
//   <div class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
//     <ul class="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
//       <li>
//         <a href="#" class="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500" aria-current="page">Home</a>
//       </li>
//       <li>
//         <a href="#" class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">About</a>
//       </li>
//       <li>
//         <a href="#" class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Services</a>
//       </li>
//       <li>
//         <a href="#" class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Contact</a>
//       </li>
//     </ul>
//   </div>
//   </div>
// </nav>



    <nav className="flex justify-center py-5 items-center lg:gap-96 md:gap-12 w-auto mx-auto bg-transparent ">
      <div className="   ">
        <img
          className=" h-14 w-24 cursor-pointer"
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
            <button className="peer px-5 py-2 inline-flex justify-center w-full text-white">
              SERVICES
            </button>

            <div className="hidden origin-top-right absolute -right-10 text-black rounded-lg overflow-hidden peer-hover:flex hover:flex w-[200px] flex-col gap-y-2 bg-white drop-shadow-lg">
              <a
                className="px-5 mt-2 py-3 w-[97%] mx-auto text-[16px] rounded-lg hover:bg-secondary-100"
                href="#"
              >
                WEB DESIGN
              </a>
              <a
                className="px-5 py-3 w-[97%] mx-auto rounded-lg text-[16px]  hover:bg-secondary-100"
                href="#"
              >
                SEO
              </a>
              <a
                className="px-5 mb-2 py-3 w-[97%] text-[16px] mx-auto rounded-lg  hover:bg-secondary-100"
                href="#"
              >
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
