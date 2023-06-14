import React from "react";
import project1 from "../../public/img/project-1.png";

const Projects = () => {
  return (
    <div className=" bg-black p-36">
      <div>
        <p className=" font-lato font-bold text-[90px] text-white text-center">
          <span className="text-red-700">PRO</span>JECTS
        </p>
      </div>
      <p className="text-center mt-10 font-normal text-[#D3D3D3] text-[24px] leading-9">
        Edit this Description of Projects.
      </p>
      <div class="grid grid-cols-2 md:grid-cols-4 gap-4 p-36">
        <div class="grid gap-4">
          <div>
            <img
              class="h-auto max-w-full rounded-lg"
              src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-1.jpg"
              alt=""
            />
          </div>

          <div>
            <img
              class="h-auto max-w-full rounded-lg"
              src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-1.jpg"
              alt=""
            />
          </div>

          <div>
            <img
              class="h-auto max-w-full rounded-lg"
              src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-2.jpg"
              alt=""
            />
          </div>
        </div>
        <div class="grid gap-4">
            
          <div className="relative">
            <img
              className="h-auto max-w-full rounded-lg hover:opacity-70"
              src={project1}
              alt=""
            />
            <div className="absolute top-0 left-0 w-full h-full bg-opacity-70 backdrop-filter backdrop-blur-sm opacity-0 hover:opacity-100 flex flex-col justify-center items-center">
              <button className="bg-blue-500 text-white px-4 py-2 rounded-md mb-2">
                Button
              </button>
              <p className="text-white text-center">Description goes here</p>
            </div>
          </div>

          <div>
            <img
              class="h-auto max-w-full rounded-lg"
              src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-4.jpg"
              alt=""
            />
          </div>
          <div>
            <img
              class="h-auto max-w-full rounded-lg"
              src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-5.jpg"
              alt=""
            />
          </div>
        </div>
        <div class="grid gap-4">
          <div>
            <img
              class="h-auto max-w-full rounded-lg"
              src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-6.jpg"
              alt=""
            />
          </div>
          <div>
            <img
              class="h-auto max-w-full rounded-lg"
              src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-7.jpg"
              alt=""
            />
          </div>
          <div>
            <img
              class="h-auto max-w-full rounded-lg"
              src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-8.jpg"
              alt=""
            />
          </div>
        </div>
        <div class="grid gap-4">
          <div>
            <img
              class="h-auto max-w-full rounded-lg"
              src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-9.jpg"
              alt=""
            />
          </div>
          <div>
            <img
              class="h-auto max-w-full rounded-lg"
              src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-10.jpg"
              alt=""
            />
          </div>
          <div>
            <img
              class="h-auto max-w-full rounded-lg"
              src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-11.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Projects;
