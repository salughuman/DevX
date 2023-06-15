import React, { useState } from "react";
import { motion } from "framer-motion";

function Mobnav() {
  const menu = [
    {
      id: 1,
      href: "#link",
      name: "Home",
    },
    {
      id: 2,
      href: "#link",
      name: "Products",
    },
    {
      id: 3,
      href: "#link",
      name: "Services",
    },
    {
      id: 4,
      href: "#link",
      name: "Contact",
    },
    {
      id: 5,
      href: "#link",
      name: "Pricing",
    },
  ];
  const [open, setOpen] = useState(false);
  const handleNav = () => {
    setOpen(!open);
  };
  return (
    <header className="bg-primary-100 w-full py-3">
      <nav className="flex justify-between items-center mx-4">
        <div>
          <img className="h-6 cursor-pointer" src="./1.svg" alt="..." />
        </div>
        <div className={!open ? "hidden" : "absolute top-0 bg-primary-200 text-white underline underline-offset-8 z-30 h-screen min-h-[60vh] left-0 w-full flex items-center px-5"}>
          <ul className="font-bogart flex flex-col mx-auto items-start gap-8">
            {menu.map((item, i) => (
              <motion.li
                className="border-b-2 border-white"
                key={item.id}
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: false, threshold: 0.001 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <a href={item.href}>{item.name}</a>
              </motion.li>
            ))}
          </ul>
        </div>
        <div className="flex items-center gap-6">
          <div className="z-50" onClick={handleNav}>
            <button
              onClick={() => setOpen(!open)}
              className="flex flex-col w-8 cursor-pointer active:outline-none focus:outline-none"
            >
              <span
                className={`bg-white rounded-xl w-1/2 h-1.5 my-0.5 transition-all duration-500 ${
                  open && "origin-bottom transform-bgr1S-s1"
                }`}
                aria-hidden="true"
              />
              <span
                className={`bg-white rounded-xl w-full h-1.5 my-0.5 transition-all duration-500 ${
                  open && "origin-top transform-bgr1S-s2"
                }`}
                aria-hidden="true"
              />
              <span
                className={`bg-white rounded-xl w-3/4 h-1.5 my-0.5 transition-all duration-500 ${
                  open && "origin-bottom transform-bgr1S-s3"
                }`}
                aria-hidden="true"
              />
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Mobnav;
