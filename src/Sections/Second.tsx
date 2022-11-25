import React from "react";
import Rightarrow from "../assets/svg/Rightarrow";

const Second = () => {
  return (
    <div className="bg-[rgb(142,124,181)] w-full flex justify-between h-auto  text-[#FFFFFF]">
      <div className="text-[40px] font-medium  pl-[108px] pt-[93px] pb-[187px] pr-[130px] font-['Questrial'] lending-[140%]">
        The Freedom to Create <br />
        The Credit Card You Want
      </div>
      <div className="text-[16px] font-normal w-[492px] py-[93px] font-['Questrial'] mr-[111px]">
        <h1 className="lending-[150%]">
          That's why it comes with benefits & rewards chosen by you. Available
          in multiple designs, your card comes in a style selected by you. You
          can come back each year, to edit your benefits or update your style.
        </h1>
        <h1 className="mt-4 lending-[150%]">
          Your OneSync Credit Card stays true to you, year after year. It’s the
          only card you’ll ever need.
        </h1>
        <button className="mt-4 text-[20px] font-medium grid grid-cols-2 gap-4">
          <span className="underline">Get Started</span>{" "}
          <span className="mt-2">
            <Rightarrow />
          </span>
        </button>
      </div>
    </div>
  );
};

export default Second;
