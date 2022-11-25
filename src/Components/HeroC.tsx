import React from "react";
import image from "../assets/gif.png";

function HeroC() {
  return (
    <div className="flex justify-between items-center mt-20">
      <div className="block">
        <h1 className="text-5xl leading-[130%] my-2 font-['Roboto'] font-medium">
          Build a Credit Card
          <br /> That is Definitely Yours
        </h1>
        <h1 className="text-[20px] leading-[150%] my-2 font-['Roboto'] font-normal">
          With the OneSync Credit Card you can customise your <br /> card the
          way you want
        </h1>
        <button className="text-lg text-[#ffffff] px-10 py-2 bg-[#F2707C] rounded-full mt-4 font-['Roboto']">
          Get Started
        </button>
      </div>
      <div>
        <img src={image} className="w-[600px] object-contain" />
      </div>
    </div>
  );
}

export default HeroC;
