import React from "react";
import LeftSection from "./Layouts/LeftSection";
import RightSection from "./Layouts/RightSection";

const HomePage = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between ">
      <div className="w-full md:w-[50%]">
        <LeftSection />
      </div>
      <div className="w-full md:w-[50%]">
        <RightSection />
      </div>
    </div>
  );
};

export default HomePage;
