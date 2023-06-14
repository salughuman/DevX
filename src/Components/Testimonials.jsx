
import React, { useState } from 'react'


const Testimonials = () => {
  
  const people = [
    {
      name: "Adam Negan",
      role: "CEO of Bismart Enterprise",
      picture: "https://fancytailwind.com/static/profile13-9abe52b1e8851f9e4afde349f2789d3e.jpg",
      testimony: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur aliquid, illo reiciendis voluptatum asperiores.",
    },
    {
      name: "Shanon Brown",
      role: "Senior programmer of Fancy Studio",
      picture: "https://fancytailwind.com/static/profile16-3468a6740e58a45b951142454acb94d0.jpg",
      testimony: "Amet ipsam nam architecto doloribus earum asperiores voluptates minus quibusdam culpa!",
    }
  ]
  const [current, setCurrent] = useState(0)
  const previousTestimony = () => current > 0 ? setCurrent(current - 1) : setCurrent(people.length - 1)
  const nextTestimony = () => current < people.length -1 ? setCurrent(current + 1) : setCurrent(0)

  return (
    <div className="mx-auto py-14 px-4 w-full bg-primary-100">
      <div className="mx-auto mb-8 text-center max-w-screen-sm lg:mb-16">
      <h2 className=" text-dynamic font-raleway tracking-tight font-bold text-white ">What our clients say</h2>
          <p className="font-light text-gray-500 sm:text-xl dark:text-gray-400">Eu feugiat pretium nibh ipsum consequat nisl. Aenean sed adipiscing diam donec adipiscing tristique risus.</p>
      </div> 
      <div className="relative mx-auto w-full h-80 max-w-5xl flex shadow-xl">
        <div className="z-10 relative py-10 pl-8 pr-2 w-full min-h-360px rounded md:rounded-r-none bg-[#7e22cd] bg-opacity-70 md:bg-opacity-100 text-white">
          <div className="mx-auto max-w-2xl flex flex-col">
          
            <div className="flex-shrink-0">
              <svg className="w-10 lg:w-12 h-10 lg:h-12" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/></svg>
            </div>
        
            <p className="text-xl font-Raleway sm:text-2xl lg:text-3xl font-extrabold leading-normal">{people[current].testimony}</p>
           
            <h3 className="mt-2 text-base font-bold">{people[current].name}</h3>
           
            <p className="text-sm">{people[current].role}</p>
          </div>
        </div>  
        <div className="z-10 absolute -bottom-5 right-1/2 md:-right-3 py-1 px-3 space-x-3 flex bg-secondary-100 text-black transform translate-x-1/2 md:translate-x-0">
          <button type="button" aria-label="previous" className="flex-shrink-0 hover:text-gray-600" onClick={previousTestimony}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18" />
</svg>

</button> 
          <button type="button" aria-label="next" className="flex-shrink-0 hover:text-gray-600" onClick={nextTestimony}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
</svg>
</button>
        </div>

      </div>
    </div>
  )
}

export default Testimonials
