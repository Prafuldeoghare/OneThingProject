import React, { useState } from "react";
import Accordian from "../Components/Accordian";

function Faq() {
  return (
    <div className="w-full h-auto relative my-20">
      <div className="w-full text-center text-[32px] text-[#000000] leading-[150%] font-medium font-['Roboto'] mb-8">
        FAQs
      </div>
      <div className="w-full flex flex-col items-center">
        <div className="w-[1200px] h-auto my-4">
          <Accordian
            title={"Who’s eligible for the Card?"}
            description={` If you’re between 23-60 years of age, have a monthly income of ₹25,000
                or more, and have never defaulted on a credit card or loan payment,
                we’d encourage you to apply. However, your application will be
                declined if your location isn’t serviceable or if your credit score is
                low.`}
          />
        </div>
        <div className="w-[1200px] h-auto my-4">
          <Accordian
            title={"Is my location serviceable?"}
            description={` If you’re between 23-60 years of age, have a monthly income of ₹25,000
                or more, and have never defaulted on a credit card or loan payment,
                we’d encourage you to apply. However, your application will be
                declined if your location isn’t serviceable or if your credit score is
                low.`}
          />
        </div>
        <div className="w-[1200px] h-auto my-4">
          <Accordian
            title={"What if I don’t want to pay at all?"}
            description={` If you’re between 23-60 years of age, have a monthly income of ₹25,000
                or more, and have never defaulted on a credit card or loan payment,
                we’d encourage you to apply. However, your application will be
                declined if your location isn’t serviceable or if your credit score is
                low.`}
          />
        </div>
        <div className="w-[1200px] h-auto my-4">
          <Accordian
            title={"What happens after I’ve build my card?"}
            description={` If you’re between 23-60 years of age, have a monthly income of ₹25,000
                or more, and have never defaulted on a credit card or loan payment,
                we’d encourage you to apply. However, your application will be
                declined if your location isn’t serviceable or if your credit score is
                low.`}
          />
        </div>
      </div>
    </div>
  );
}

export default Faq;
