import React from "react";
import { FlipWords } from "../../../components/ui/flip-words";
import { useRef } from "react";
import SkillsModel from "../../../components/SkillsModel";
import BlurText from "../../../components/ui/blurText";
import { handleResumeDownload } from "../../../utils/resume";

const LeftSection = () => {
  // const handleDownload = () => {
  //   const link = document.createElement("a");
  //   link.href = "/resume.pdf";
  //   link.download = "Md_Faiz.pdf";
  //   document.body.appendChild(link);
  //   link.click();
  //   document.body.removeChild(link);
  // };
  // const handleAnimationComplete = () => {
  //   console.log("Animation completed!");
  // };
  const words = ["Md Faiz Alam", "Software Devloper"];
  return (
    <div className="">
      <div className="p-5">
        <div className="text-4xl text-center md:text-left font-bold text-[#7FC8A9] pb-2">
          I am <FlipWords words={words} />
        </div>
        <div className="py-4 text-center md:text-left">
          <BlurText
            text="Passionate about building impactful web experiences, I specialize in crafting modern, user-friendly applications using cutting-edge technologies. Always eager to learn, solve problems, and turn ideas into reality through clean and efficient code."
            delay={150}
            animateBy="letters" // "letters" or "words"
            direction="bottom" // "top" or "bottom"
            threshold={0.2}
            // onAnimationComplete={handleAnimationComplete}
          />
        </div>
        <div className="flex gap-2 justify-center md:justify-start">
          <button
            onClick={handleResumeDownload}
            class="group relative px-6 py-1 rounded-lg bg-gradient-to-br from-yellow-400 via-amber-500 to-yellow-600 text-black font-bold tracking-wider uppercase text-sm hover:from-yellow-500 hover:via-amber-600 hover:to-yellow-700 transform hover:rotate-1 transition-all duration-300 ease-out shadow-[0_0_20px_rgba(251,191,36,0.5)] hover:shadow-[0_0_30px_rgba(251,191,36,0.7)] active:scale-90 overflow-hidden before:absolute before:inset-0 before:rounded-lg before:border-2 before:border-amber-400/50 before:transition-all before:duration-300 hover:before:border-amber-300 hover:before:scale-105 cursor-pointer"
          >
            <span class="flex items-center gap-2 relative z-10 ">
              <svg
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
                class="w-4 h-4"
              >
                <path
                  stroke-linecap="round"
                  stroke-width="2"
                  d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4"
                ></path>
              </svg>
              <span class="text-xl">Hire Me</span>
              <svg
                viewBox="0 0 24 24"
                stroke="currentColor"
                fill="none"
                class="w-4 h-4 transition-transform duration-500 group-hover:translate-x-2"
              >
                <path
                  d="M5 12h14m-7-7l7 7-7 7"
                  stroke-width="2.5"
                  stroke-linejoin="round"
                  stroke-linecap="round"
                ></path>
              </svg>
            </span>
            <div class="absolute inset-0 rounded-lg opacity-50 group-hover:opacity-80 transition-opacity duration-300 bg-gradient-to-tl from-amber-200/40 via-transparent to-transparent"></div>
            <div class="absolute -left-full top-0 h-full w-full bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:translate-x-[200%] transition-transform duration-700 ease-out"></div>
          </button>
          <SkillsModel />
        </div>
      </div>
    </div>
  );
};

export default LeftSection;
