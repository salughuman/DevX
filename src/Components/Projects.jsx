import React from "react";
import project1 from "../../public/img/project-1.png";
import project2 from "../../public/img/project-2.png";
import project3 from "../../public/img/project-3.png";
import project4 from "../../public/img/project-4.png";
import project5 from "../../public/img/project-5.png";
import project6 from "../../public/img/project-6.png";

const Projects = () => {
  return (
    
    <div className=" bg-black py-16">
      
      <div>
        <p className=" font-lato font-bold text-[50px] md:text-[90px] text-white text-center">
          <span className="text-red-700">PRO</span>JECTS
        </p>
      </div>
      <p className="text-center mt-10 font-normal text-[#D3D3D3] text-[24px] leading-9">
        Edit this Description of Projects.
      </p>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-10 p-12 md:p-32">
        <div className="relative">
          <img className=" h-72 max-w-full rounded-lg" src={project1} alt="" />
          <div className="absolute top-0 left-0 w-full h-full bg-opacity-70 rounded-lg 
          backdrop-filter backdrop-brightness-50 opacity-0 hover:opacity-100 flex flex-col justify-center items-center">
            <a href="https://www.designproof.agency/" target="_blank">
              <button className="bg-pink-500 text-white px-4 py-2 rounded-md">
                Go to Website
              </button>
            </a>
            {/* <p className="text-white text-center"></p> */}
          </div>
        </div>
        
        
        <div className="relative">
          <img className=" h-72 max-w-full rounded-lg" src={project2} alt="" />
          <div className="absolute top-0 left-0 w-full h-full bg-opacity-70 rounded-lg backdrop-filter backdrop-brightness-50 opacity-0 hover:opacity-100 flex flex-col justify-center items-center">
            <a href="https://www.aviationsafetymanagement.com.au/" target="_blank">
              <button className="bg-pink-500 text-white px-4 py-2 rounded-md">
                Go to Website
              </button>
            </a>
            {/* <p className="text-white text-center"></p> */}
          </div>
        </div>

        <div className="relative">
          <img className=" h-72 max-w-full rounded-lg" src={project3} alt="" />
          <div className="absolute top-0 left-0 w-full h-full bg-opacity-70 rounded-lg backdrop-filter backdrop-brightness-50 opacity-0 hover:opacity-100 flex flex-col justify-center items-center">
            <a href="https://ghouliesnft.com/" target="_blank">
              <button className="bg-pink-500 text-white px-4 py-2 rounded-md">
                Go to Website
              </button>
            </a>
            {/* <p className="text-white text-center"></p> */}
          </div>
        </div>

        <div className="relative">
          <img className=" h-72 max-w-full rounded-lg" src={project4} alt="" />
          <div className="absolute top-0 left-0 w-full h-full bg-opacity-70 rounded-lg backdrop-filter backdrop-brightness-50 opacity-0 hover:opacity-100 flex flex-col justify-center items-center">
            <a href="https://www.poisonpog.com/home/  " target="_blank">
              <button className="bg-pink-500 text-white px-4 py-2 rounded-md">
                Go to Website
              </button>
            </a>
            {/* <p className="text-white text-center"></p> */}
          </div>
        </div>

        <div className="relative">
          <img className=" h-72 max-w-full rounded-lg" src={project5} alt="" />
          <div className="absolute top-0 left-0 w-full h-full bg-opacity-70 rounded-lg backdrop-filter backdrop-brightness-50 opacity-0 hover:opacity-100 flex flex-col justify-center items-center">
            <a href="https://bummer.in/" target="_blank">
              <button className="bg-pink-500 text-white px-4 py-2 rounded-md">
                Go to Website
              </button>
            </a>
            {/* <p className="text-white text-center"></p> */}
          </div>
        </div>

        <div className="relative">
          <img className=" h-72 max-w-full rounded-lg" src={project6} alt="" />
          <div className="absolute top-0 left-0 w-full h-full bg-opacity-70 rounded-lg backdrop-filter backdrop-brightness-50 opacity-0 hover:opacity-100 flex flex-col justify-center items-center">
            <a href="https://tavecchiacoin.com/" target="_blank">
              <button className="bg-pink-500 text-white px-4 py-2 rounded-md">
                Go to Website
              </button>
            </a>
            {/* <p className="text-white text-center"></p> */}
          </div>
        </div>
      </div>

      {/* <div class="grid grid-cols-2 md:grid-cols-4 gap-4 p-36">
        <div class="grid gap-4">

        <div className="relative">
            <img
              className=" h-48 max-w-full rounded-lg"
              src={project2}
              alt=""
            />
            <div className="absolute top-0 left-0 w-full h-full bg-opacity-70 rounded-lg backdrop-filter backdrop-brightness-50 opacity-0 hover:opacity-100 flex flex-col justify-center items-center">
              <a href="https://www.designproof.agency/" target="_blank">
                <button className="bg-pink-500 text-white px-4 py-2 rounded-md mb-2">
                    Go to Website
                </button>
              </a>
              <p className="text-white text-center"></p>
            </div>
          </div>

           <div className="relative">
            <img
              className="h-auto max-w-full rounded-lg"
              src={project1}
              alt=""
            />
            <div className="absolute top-0 left-0 w-full h-full bg-opacity-70 rounded-lg backdrop-filter backdrop-brightness-50 opacity-0 hover:opacity-100 flex flex-col justify-center items-center">
              <a href="https://www.designproof.agency/" target="_blank">
                <button className="bg-pink-500 text-white px-4 py-2 rounded-md mb-2">
                    Go to Website
                </button>
              </a>
              <p className="text-white text-center"></p>
            </div>
          </div>

          <div className="relative">
            <img
              className="h-auto max-w-full rounded-lg"
              src={project1}
              alt=""
            />
            <div className="absolute top-0 left-0 w-full h-full bg-opacity-70 rounded-lg backdrop-filter backdrop-brightness-50 opacity-0 hover:opacity-100 flex flex-col justify-center items-center">
              <a href="https://www.designproof.agency/" target="_blank">
                <button className="bg-pink-500 text-white px-4 py-2 rounded-md mb-2">
                    Go to Website
                </button>
              </a>
              <p className="text-white text-center"></p>
            </div>
          </div>
        </div>
        <div class="grid gap-24 pt-8">
            
          <div className="relative">
            <img
              className="h-auto max-w-full rounded-lg"
              src={project1}
              alt=""
            />
            <div className="absolute top-0 left-0 w-full h-full bg-opacity-70 rounded-lg backdrop-filter backdrop-brightness-50 opacity-0 hover:opacity-100 flex flex-col justify-center items-center">
              <a href="https://www.designproof.agency/" target="_blank">
                <button className="bg-pink-500 text-white px-4 py-2 rounded-md mb-2">
                    Go to Website
                </button>
              </a>
              <p className="text-white text-center"></p>
            </div>
          </div>

          <div className="relative">
            <img
              className="h-auto max-w-full rounded-lg"
              src={project1}
              alt=""
            />
            <div className="absolute top-0 left-0 w-full h-full bg-opacity-70 rounded-lg backdrop-filter backdrop-brightness-50 opacity-0 hover:opacity-100 flex flex-col justify-center items-center">
              <a href="https://www.designproof.agency/" target="_blank">
                <button className="bg-pink-500 text-white px-4 py-2 rounded-md mb-2">
                    Go to Website
                </button>
              </a>
              <p className="text-white text-center"></p>
            </div>
          </div>

           <div className="relative">
            <img
              className="h-auto max-w-full rounded-lg"
              src={project1}
              alt=""
            />
            <div className="absolute top-0 left-0 w-full h-full bg-opacity-70 rounded-lg backdrop-filter backdrop-brightness-50 opacity-0 hover:opacity-100 flex flex-col justify-center items-center">
              <a href="https://www.designproof.agency/" target="_blank">
                <button className="bg-pink-500 text-white px-4 py-2 rounded-md mb-2">
                    Go to Website
                </button>
              </a>
              <p className="text-white text-center"></p>
            </div>
          </div>

        </div>
        <div class="grid gap-4">
          
        <div className="relative">
            <img
              className="h-auto max-w-full rounded-lg"
              src={project1}
              alt=""
            />
            <div className="absolute top-0 left-0 w-full h-full bg-opacity-70 rounded-lg backdrop-filter backdrop-brightness-50 opacity-0 hover:opacity-100 flex flex-col justify-center items-center">
              <a href="https://www.designproof.agency/" target="_blank">
                <button className="bg-pink-500 text-white px-4 py-2 rounded-md mb-2">
                    Go to Website
                </button>
              </a>
              <p className="text-white text-center"></p>
            </div>
          </div>

           <div className="relative">
            <img
              className="h-auto max-w-full rounded-lg"
              src={project1}
              alt=""
            />
            <div className="absolute top-0 left-0 w-full h-full bg-opacity-70 rounded-lg backdrop-filter backdrop-brightness-50 opacity-0 hover:opacity-100 flex flex-col justify-center items-center">
              <a href="https://www.designproof.agency/" target="_blank">
                <button className="bg-pink-500 text-white px-4 py-2 rounded-md mb-2">
                    Go to Website
                </button>
              </a>
              <p className="text-white text-center"></p>
            </div>
          </div>

          <div className="relative">
            <img
              className="h-auto max-w-full rounded-lg"
              src={project1}
              alt=""
            />
            <div className="absolute top-0 left-0 w-full h-full bg-opacity-70 rounded-lg backdrop-filter backdrop-brightness-50 opacity-0 hover:opacity-100 flex flex-col justify-center items-center">
              <a href="https://www.designproof.agency/" target="_blank">
                <button className="bg-pink-500 text-white px-4 py-2 rounded-md mb-2">
                    Go to Website
                </button>
              </a>
              <p className="text-white text-center"></p>
            </div>
          </div>


        </div>
        <div class="grid gap-16">
          
        <div className="relative">
            <img
              className="h-auto max-w-full rounded-lg"
              src={project1}
              alt=""
            />
            <div className="absolute top-0 left-0 w-full h-full bg-opacity-70 rounded-lg backdrop-filter backdrop-brightness-50 opacity-0 hover:opacity-100 flex flex-col justify-center items-center">
              <a href="https://www.designproof.agency/" target="_blank">
                <button className="bg-pink-500 text-white px-4 py-2 rounded-md mb-2">
                    Go to Website
                </button>
              </a>
              <p className="text-white text-center"></p>
            </div>
          </div>

          <div className="relative">
            <img
              className="h-auto max-w-full rounded-lg"
              src={project1}
              alt=""
            />
            <div className="absolute top-0 left-0 w-full h-full bg-opacity-70 rounded-lg backdrop-filter backdrop-brightness-50 opacity-0 hover:opacity-100 flex flex-col justify-center items-center">
              <a href="https://www.designproof.agency/" target="_blank">
                <button className="bg-pink-500 text-white px-4 py-2 rounded-md mb-2">
                    Go to Website
                </button>
              </a>
              <p className="text-white text-center"></p>
            </div>
          </div>

          <div className="relative">
            <img
              className="h-auto max-w-full rounded-lg"
              src={project1}
              alt=""
            />
            <div className="absolute top-0 left-0 w-full h-full bg-opacity-70 rounded-lg backdrop-filter backdrop-brightness-50 opacity-0 hover:opacity-100 flex flex-col justify-center items-center">
              <a href="https://www.designproof.agency/" target="_blank">
                <button className="bg-pink-500 text-white px-4 py-2 rounded-md mb-2">
                    Go to Website
                </button>
              </a>
              <p className="text-white text-center"></p>
            </div>
          </div>


        </div>
      </div> */}
    </div>
  );
};
export default Projects;
