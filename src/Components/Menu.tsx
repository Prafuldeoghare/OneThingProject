import React from "react";

function Menu() {
  return (
    <div className="w-full h-auto">
      <div className="w-full flex justify-between items-center">
        <div className="text-[20px] py-4 px-6 bg-[#000000] text-[#ffffff] leading-5 font-bold font-['Exo']">
          AFC Inc.
        </div>
        <ul className="list-none flex items-center text-base font-medium">
          <li className="mx-5 font-['Roboto'] text-[#262A2F]">
            Track Application
          </li>
          <li className="mx-5 font-['Roboto'] text-[#262A2F]">
            Manage My Card
          </li>
          <li className="mx-5 font-['Roboto'] text-[#262A2F]">FAQs</li>
          <li className="mx-5 py-2 px-6 font-['Roboto'] bg-[#F2707C] text-[#ffffff] rounded-sm">
            Get Started
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Menu;
