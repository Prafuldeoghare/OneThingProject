import React from "react";

const Footer = () => {
  return (
    <div className='bg-[#12193B] w-full h-auto font-["Questrial"]'>
      <div className="w-full ">
        <p className="text-2xl text-white text-center pt-14 font-medium leading-10">
          OneSync Credit Card
        </p>
        <p className="text-sm text-white text-center">Experience Freedom</p>
      </div>
      <div className="flex justify-center pt-[48px] pb-[65px]">
        <button className=" bg-[#7C7EB5] px-10 py-2 rounded-[46px] text-[18px] text-white  font-medium">
          Get Started
        </button>
      </div>
      <div className="divide-y "></div>
      <div className="mt-[65px] ">
        <div className="flex justify-evenly gap-6 pb-[80px] text-white">
          <div className="">
            <p className="mb-6">Manage Your Card</p>
            <p className="mb-6">Track Your Application</p>
            <p>Contact Us</p>
          </div>
          <div>
            <p className="mb-6">Manage Your Card</p>
            <p className="mb-6">Track Your Application</p>
            <p>Contact Us</p>
          </div>
          <div>
            <p className="mb-6">Manage Your Card</p>
            <p className="mb-6">Track Your Application</p>
            <p>Contact Us</p>
          </div>
          <div>
            <p className="mb-6">Manage Your Card</p>
            <p className="mb-6">Track Your Application</p>
            <p>Contact Us</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
