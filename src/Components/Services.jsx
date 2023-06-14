import React from "react";
import Lottie from "lottie-react";
import webdesign from "../assets/web-design.json";
import seo from "../assets/seo.json";
import code from "../assets/code.json";
import styled from "styled-components";

const LEARNMORE = styled.button`
background-color: rgb(218, 78, 162);
color: white;
font-weight: 500;
width: 130px;
padding: 10px;
border: none;
border-radius: 5px;
cursor: pointer;
&:hover {
  background-color: rgb(218, 78, 162);
  opacity: 0.8;
}
`;

const Services = () => {
  return (
    <section className="my-10 ">
      <p className=" font-normal text-[24px] mx-auto text-center text-[#FFFFFF] leading-9 font-lato sm:text-xl ">
        From custom web design to content writing and search engine optimisation
        (SEO), our range of creative digital services will help you stand out
        online.
      </p>

      <div className=" mx-auto  flex flex-wrap  justify-center  bg-white  max-w-7xl lg:h-[550px] sm:h-auto md:border-[0.5px] border-gray-600">
        <div className=" h-full font-lato w-1/2 flex flex-col justify-start gap-y-8 px-24 py-32 text-black ">
          <p className="  text-[12px] font-semibold">DESIGN MADE SIMPLE</p>
          <h1 className=" text-[26px] ">Web Design</h1>
          <p className=" w-96">
            Our unique web design capabilities allow us to work with business
            owners across industries to create minimalistic, highly-engaging
            websites.
          </p>
          <LEARNMORE>
            <button> LEARN MORE</button>
          </LEARNMORE>

        </div>
        <div className="text-center inline-flex content-center h-full w-1/2 text-gray-500 bg-slate-50 dark:text-gray-400=">
          <Lottie animationData={webdesign} />
        </div>
      </div>
      <div className=" mx-auto  flex flex-wrap  justify-center my-32  bg-white  max-w-7xl lg:h-[550px] sm:h-auto md:border-[0.5px] border-gray-600">
        <div className="text-center h-full w-1/2 text-gray-500 bg-slate-50 dark:text-gray-400=">
          <div className=" h-64 w-96 inline-flex content-center justify-center items-center my-28 drop-shadow-2xl">
            <Lottie animationData={seo} />
          </div>
        </div>
        <div className=" h-full font-lato w-1/2 flex flex-col justify-start gap-y-8 px-24 py-32 text-black">
          <p className="  text-[12px] font-semibold">
            INCREASE YOUR ORGANIC TRAFFIC
          </p>
          <h1 className=" text-[26px] ">SEO</h1>
          <p className=" w-96">
            Our forensic approach to SEO strategy and implementation will
            dramatically improve your visibility on Google and other search
            engines to drive next-level business value.
          </p>
          <LEARNMORE>
            <button> LEARN MORE</button>
          </LEARNMORE>
        </div>
      </div>
      <div className=" mx-auto  flex flex-wrap  justify-center  bg-white  max-w-7xl lg:h-[550px] sm:h-auto md:border-[0.5px] border-gray-600">
        <div className=" h-full font-lato w-1/2 flex flex-col justify-start gap-y-8 px-24 py-32 text-black ">
          <p className="  text-[12px] font-semibold">ONLY THE RIGHT WORDS</p>
          <h1 className=" text-[26px] ">Copywriting</h1>
          <p className=" w-96">
            As SEO content strategists and writers, we craft in-brand messaging
            that drives qualified web traffic, builds customer trust, offers
            unique value, elicits engagements, and helps grow your business.
          </p>
          <LEARNMORE>
            <button> LEARN MORE</button>
          </LEARNMORE>
        </div>
        <div className="text-center inline-flex content-center h-full w-1/2 grayscale text-gray-500 bg-slate-50 dark:text-gray-400=">
          <Lottie animationData={code} />
        </div>
      </div>
    </section>
  );
};

export default Services;
