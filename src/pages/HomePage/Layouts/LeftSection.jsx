import React from "react";
import { FlipWords } from "../../../components/ui/flip-words";
import { useRef } from "react";
import VariableProximity from "../../../components/ui/variable-proximity";
import SkillsModel from "../../../components/SkillsModel";

const LeftSection = () => {
  const containerRef = useRef(null);
  const words = ["Md Faiz Alam", "Devloper"];
  return (
    <div className="">
      <div className="p-5">
        <div className="text-4xl text-center md:text-left font-bold text-[#7FC8A9] pb-2">
          I am <FlipWords words={words} />
        </div>
        <div
          // className="py-4 text-center md:text-left"
          ref={containerRef}
          style={{ position: "relative" }}
        >
          <VariableProximity
            label={
              "sdafjhdsgfjdhsagfjshafgdhjsafgdsjhafgdsajhfgjhgchj jhd gfjdhs jdsg jdhfg dhsg faksjfga jf gdsjkdsjgf sdakfgdsa kdsjgdskfgdsk fdsgjkh"
            }
            className={"variable-proximity-demo"}
            fromFontVariationSettings="'wght' 400, 'opsz' 9"
            toFontVariationSettings="'wght' 1000, 'opsz' 40"
            containerRef={containerRef}
            radius={100}
            falloff="linear"
          />
        </div>
        <div className="flex gap-2 justify-center md:justify-start">
          <button class="relative flex items-center px-6 py-3 overflow-hidden font-medium transition-all bg-indigo-500 rounded-md group">
            <span class="absolute top-0 right-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-indigo-700 rounded group-hover:-mr-4 group-hover:-mt-4">
              <span class="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-[#7FC8A9]"></span>
            </span>
            <span class="absolute bottom-0 rotate-180 left-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-indigo-700 rounded group-hover:-ml-4 group-hover:-mb-4">
              <span class="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-[#7FC8A9]"></span>
            </span>
            <span class="absolute bottom-0 left-0 w-full h-full transition-all duration-500 ease-in-out delay-200 -translate-x-full bg-indigo-600 rounded-md group-hover:translate-x-0"></span>
            <span class="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-white">
              Resume
            </span>
          </button>
          <button class="relative flex items-center px-6 py-3 overflow-hidden font-medium transition-all bg-indigo-500 rounded-md group">
            <span class="absolute top-0 right-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-indigo-700 rounded group-hover:-mr-4 group-hover:-mt-4">
              <span class="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-[#7FC8A9]"></span>
            </span>
            <span class="absolute bottom-0 rotate-180 left-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-indigo-700 rounded group-hover:-ml-4 group-hover:-mb-4">
              <span class="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-[#7FC8A9]"></span>
            </span>
            <span class="absolute bottom-0 left-0 w-full h-full transition-all duration-500 ease-in-out delay-200 -translate-x-full bg-indigo-600 rounded-md group-hover:translate-x-0"></span>
            <span class="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-white">
              Hire Me
            </span>
          </button>
          <SkillsModel />
        </div>
      </div>
    </div>
  );
};

export default LeftSection;
