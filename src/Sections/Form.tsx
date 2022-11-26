import React from "react";
import Eligibility from "../assets/Eligibility";
import InputField from "../Components/InputField";

const Form = () => {
  return (
    <div className="flex">
      <div className=" flex flex-col gap-y-16 pl-[200px] pt-[64px] left-3 h-[479px] w-[732px] bg-[#BFE1FF]">
        <div>
          <InputField
            placeholder={"Enter your phone number"}
            style="drop-shadow-lg"
          />
        </div>
        <div>
          <InputField
            placeholder={"Enter your PAN number"}
            style="opacity-[0.8] drop-shadow-lg"
          />
        </div>
        <div>
          <InputField
            placeholder={"Enter your Address"}
            style="opacity-[0.5] drop-shadow-lg"
          />
        </div>
      </div>
      <div className="h-[479px] relative  w-[calc(100%-732px)] bg-[#FFFFFF]">
        <div className="pl-[102px] absolute pt-[126px] ">
          <Eligibility />
          <h1 className="pt-[16px] text-[40px] font-medium">
            Fill Eligibility Form
          </h1>
          <p className="text-[24px] font-normal">
            Tell us about yourself, to find out if <br /> you’re eligible to
            apply.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Form;
