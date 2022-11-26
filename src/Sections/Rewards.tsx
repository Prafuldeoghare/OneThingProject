import React from "react";
import StarIcon from "../assets/StarIcon";
import "../Components/Slider.css";
import Slider from "infinite-react-carousel";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      item: React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement>,
        HTMLElement
      >;
    }
  }
}

const Rewards = () => {
  let slider = "h-[250px] m-auto relative w-[50%] grid items-center";
  let slide_track = "flex w-[calc(250px*18)]";
  let slide = "h-[200px] w-[250px] flex items-center p-[15px]";

  const settings = {
    arrows: false,
    autoplay: true,
    autoplaySpeed: 500,
    slidesToShow: 3,
    gutter: 50,
    duration: 3000,
  };

  return (
    <div className="w-full flex h-[608px] bg-[#FFE4E7]">
      <div className="w-[47%] ">
        <div className="flex flex-col items-start w-[587px] pl-[108px] pt-[136px]">
          <StarIcon />
          <div className="pl-[10px]">
            <h1 className="pt-[16px] text-[40px] font-medium">
              Choose Your Rewards
            </h1>
            <p className="pt-[16px] text-[24px] font-normal">
              Match your card to your lifestyle. We’ve got benefits from across
              brands & categories for you to choose from. Each benefit has an
              attached fee. Just add the ones you like to your card.
            </p>
          </div>
        </div>
      </div>
      <div className="w-[36%] relative ml-[9px]  flex justify-center items-center ">
        <div className="marquee absolute h-full">
          <ul className="marquee-content">
            <li className="mr-[72px]">
              <img src="/public/images/slideShow.png" alt="" />
            </li>
            <li className="mr-[72px]">
              <img src="/public/images/slideShow.png" alt="" />
            </li>
            <li className="mr-[72px]">
              <img src="/public/images/slideShow.png" alt="" />
            </li>
            <li className="mr-[72px]">
              <img src="/public/images/slideShow.png" alt="" />
            </li>
            <li className="mr-[72px]">
              <img src="/public/images/slideShow.png" alt="" />
            </li>
            <li className="mr-[72px]">
              <img src="/public/images/slideShow.png" alt="" />
            </li>
            <li className="mr-[72px]">
              <img src="/public/images/slideShow.png" alt="" />
            </li>
            <li className="mr-[72px]">
              <img src="/public/images/slideShow.png" alt="" />
            </li>
            <li className="mr-[72px]">
              <img src="/public/images/slideShow.png" alt="" />
            </li>
            <li className="mr-[72px]">
              <img src="/public/images/slideShow.png" alt="" />
            </li>
            <li className="mr-[72px]">
              <img src="/public/images/slideShow.png" alt="" />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Rewards;
