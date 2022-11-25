import React from "react";
import HeroC from "../Components/HeroC";
import Menu from "../Components/Menu";

function Hero() {
  return (
    <div className="w-full h-auto px-[108px] py-[27px] pb-20">
      <Menu />
      <HeroC />
    </div>
  );
}

export default Hero;
