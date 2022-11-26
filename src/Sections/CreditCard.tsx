import React from "react";
import ImageGallery from "react-image-gallery";

const CreditCard = () => {
  const images = [
    {
      original: "https://picsum.photos/id/1018/1000/600/",
      thumbnail: "https://picsum.photos/id/1018/250/150/",
      originalHeight: "1112px",
      originalWidth: "1112px",
    },
    {
      original: "https://picsum.photos/id/1015/1000/600/",
      thumbnail: "https://picsum.photos/id/1015/250/150/",
      originalHeight: "1112px",
      originalWidth: "1112px",
    },
    {
      original: "https://picsum.photos/id/1019/1000/600/",
      thumbnail: "https://picsum.photos/id/1019/250/150/",
      originalHeight: "1112px",
      originalWidth: "1112px",
    },
  ];
  return (
    <div className="w-full h-[480px] grid grid-cols-12 bg-[#F7F3FF]">
      <div className="col-span-6">
        {/* <ImageGallery
        items={images} /> */}
      </div>
      <div className="col-span-6">Harsh</div>
    </div>
  );
};

export default CreditCard;
