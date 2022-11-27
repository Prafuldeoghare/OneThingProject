import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import RollerIcon from "../assets/svg/RollerIcon";
import "../Components/Slider.css";

const CreditCard = () => {
  let baseUrl = "/public/images/card";
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    customPaging: function (i: any) {
      return (
        <a className="">
          <img className="" src={`${baseUrl}/abstract0${i + 1}.jpg`} />
        </a>
      );
    },
  };
  return (
    <div className=" w-full h-[480px] grid grid-cols-12 bg-[#F7F3FF]">
      <div className="col-span-6 px-[40px]">
        <div className="h-[480px] w-[600px] pl-[100px] pt-[35px] max-[375px]:w-[300px]">
          <Carousel
            width={"350px"}
            className=""
            autoPlay
            infiniteLoop
            showArrows={false}
            showIndicators={false}
            showStatus={false}
            thumbWidth={80}
          >
            <div className="">
              <img src="/public/images/card/abstract01.jpg" />
            </div>
            <div>
              <img className="" src="/public/images/card2.png" />
            </div>
            <div>
              <img src="/public/images/card3.png" />
            </div>
            <div>
              <img src="/public/images/card4.png" />
            </div>
          </Carousel>
        </div>
      </div>
      <div className="col-span-6">
        <div className=" w-[495px] pt-[72px]">
          <RollerIcon />
          <h1 className="mt-[16px] text-[40px] font-medium">
            Select Your Style
          </h1>
          <p className="mt-[16px] text-[24px] font-normal">
            Match your card to your personality. Whether you like a minimal look
            or something that catches everyone’s eyes, we’ve got a style for
            you. You can update your style every year, for a small fee{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CreditCard;
