import React from "react";
import LeftSection from "./Layouts/LeftSection";
import RightSection from "./Layouts/RightSection";
import { TextHoverEffect } from "../../components/ui/text-hover-effect";

const HomePage = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between md:mt-15">
      <div className="absolute w-full mx-auto text-center">
        <TextHoverEffect text="FAIZ" />
      </div>
      <div className="w-full md:w-[50%] md:p-5">
        <LeftSection />
      </div>
      <div className="w-full md:w-[50%] z-10">
        <RightSection />
      </div>
    </div>
  );
};

export default HomePage;
