import React from "react";
import { Disclosure, Transition} from '@headlessui/react'
import { motion } from "framer-motion";
const Faq = () => {
  const faq = [
    {
      number: 1,
      question: "What is Fancy best component?",
      answer:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque veritatis deserunt, praesentium impedit provident amet laudantium quibusdam a saepe atque odio, quidem quia eos ab aperiam quos! Officia, ducimus temporibus!",
    },
    {
      number: 2,
      question: "What is Fancy best component?",
      answer:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque veritatis deserunt, praesentium impedit provident amet laudantium quibusdam a saepe atque odio, quidem quia eos ab aperiam quos! Officia, ducimus temporibus!",
    },
    {
      number: 3,
      question: "What is Fancy best component?",
      answer:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque veritatis deserunt, praesentium impedit provident amet laudantium quibusdam a saepe atque odio, quidem quia eos ab aperiam quos! Officia, ducimus temporibus!",
    },
    {
      number: 4,
      question: "What is Fancy best component?",
      answer:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque veritatis deserunt, praesentium impedit provident amet laudantium quibusdam a saepe atque odio, quidem quia eos ab aperiam quos! Officia, ducimus temporibus!",
    }
  ];

  return (
    <div className=" container xl:w-screen h-auto mx-auto  bg-primary-100 my-20 mb-64">
      <div className="mx-auto mb-8 text-center max-w-screen-sm lg:mb-16">
          <h2 className="mb-4 text-5xl font-Raleway tracking-tight font-bold text-white">Frequently asked questions</h2>
          <p className="font-light text-gray-500 sm:text-xl dark:text-gray-400">Eu feugiat pretium nibh ipsum consequat nisl. Aenean sed adipiscing diam donec adipiscing tristique risus.</p>
      </div> 

      <dl className="mx-auto mb-10 p-2 max-w-6xl flex flex-col items-center">
        {faq.map((faq, i) => (
          <Disclosure key={faq.number}>
            {({ open }) => (
              <>
                <motion.dt
                  className={`group w-full border-b-2 border-gray-500 text-white ${ open && " text-white"}`}
                  initial={{y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1}}
            viewport={{ once: false, amount: 0.001 }}
            transition={{ duration: 0.5, delay: i * 0.1}}>
                  <Disclosure.Button className="py-5 font-Raleway my-5 px-3 w-full flex justify-between items-center">
                    <span className="text-lg md:text-3xl text-left">
                      {faq.question}
                    </span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      className={`${
                        open && "transform rotate-180 text-white"
                      } flex-shrink-0 ml-2 w-7 h-7 text-white group-hover:text-gray-300`}
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                      />
                    </svg>
                  </Disclosure.Button>
                </motion.dt>
                

                <dd className="w-full text-base text-white">
                <Transition
        enter="transition duration-100 ease-in"
        enterFrom="transform scale-95 opacity-0"
        enterTo="transform scale-100 opacity-100"
        leave="transition duration-75 ease-out"
        leaveFrom="transform scale-100 opacity-100"
        leaveTo="transform scale-95 opacity-0"
      >
                  <Disclosure.Panel className="px-4 pt-4 pb-2 font-Raleway text-lg">
                    {faq.answer}
                  </Disclosure.Panel>
                  </Transition>
                </dd>
              </>
            )}
          </Disclosure>
        ))}
      </dl>
    </div>
  );
};

export default Faq;
