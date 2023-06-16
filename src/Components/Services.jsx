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
    <section className="py-20 p-14 bg-gray-400">
      <div className="mx-auto flex flex-wrap justify-center bg-white max-w-7xl">
        <div className="w-full md:w-1/2 text-black">
          <div className="text-center md:text-left py-32 px-8 md:px-24">
            <p className="text-sm font-semibold pb-5">DESIGN MADE SIMPLE</p>
            <h1 className="text-2xl md:text-4xl">Web Design</h1>
            <p className="md:w-96 pb-3">
              Our unique web design capabilities allow us to work with business
              owners across industries to create minimalistic, highly-engaging
              websites.
            </p>
            <LEARNMORE>LEARN MORE</LEARNMORE>
          </div>
        </div>
        <div className="w-full md:w-1/2">
          <div className="text-center py-8 md:py-0">
            <Lottie animationData={webdesign} />
          </div>
        </div>
      </div>
      <div className="mx-auto flex flex-wrap justify-center my-32 bg-white max-w-7xl">
        <div className="w-full md:w-1/2">
          <div className="text-center md:py-0">
            <div className="w-72 mx-auto md:my-28">
              <Lottie animationData={seo} />
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/2 text-black">
          <div className="text-center md:text-left py-32 px-8 md:px-24">
            <p className="text-sm font-semibold pb-5">
              INCREASE YOUR ORGANIC TRAFFIC
            </p>
            <h1 className="text-2xl md:text-4xl">SEO</h1>
            <p className="md:w-96 pb-3">
              Our forensic approach to SEO strategy and implementation will
              dramatically improve your visibility on Google and other search
              engines to drive next-level business value.
            </p>
            <LEARNMORE>LEARN MORE</LEARNMORE>
          </div>
        </div>
      </div>
      <div className="mx-auto flex flex-wrap justify-center bg-white max-w-7xl">
        <div className="w-full md:w-1/2 text-black">
          <div className="text-center md:text-left py-32 px-8 md:px-24">
            <p className="text-sm font-semibold pb-5">ONLY THE RIGHT WORDS</p>
            <h1 className="text-2xl md:text-4xl">Copywriting</h1>
            <p className="md:w-96 pb-3">
              As SEO content strategists and writers, we craft in-brand messaging
              that drives qualified web traffic, builds customer trust, offers
              unique value, elicits engagements, and helps grow your business.
            </p>
            <LEARNMORE>LEARN MORE</LEARNMORE>
          </div>
        </div>
        <div className="w-full md:w-1/2 lg:pl-16 lg:pt-5">
          <div className="text-center lg:w-96 py-8 md:py-0">
            <Lottie animationData={code} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
