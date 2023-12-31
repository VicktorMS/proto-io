import React from "react";

import mouseImage from "/images/store/highlight/mouse.png";
import keyboardImage from "/images/store/highlight/keyboard.png";
import headsetImage from "/images/store/highlight/headset.png";

const HighlightProductsCardGroup = ({wrapperClass}) => {
  return (
    <div className={`flex gap-2 w-full justify-center  lg:flex-col lg:w-80 ${wrapperClass} px-4 lg:p-0`} >
      <HighlightProductCard image={mouseImage} name={"Mouse"} accent={"R-X1"} />
      <HighlightProductCard image={keyboardImage} name={"Blackwidow"} accent={"R-X1"} />
      <HighlightProductCard image={headsetImage} name={"Kraken"} accent={"R-X1"} />
    </div>
  );
};

const HighlightProductCard = ({ name, accent, image }) => {
  return (
    <div className="text-center rounded-lg h-20 lg:h-16 flex justify-center items-center w-full relative bg-[#111] bg-pain-logo hover:scale-105 transition">
      <p className="font-bold text-sm w-full">
        {name} <span className="text-primary">{accent}</span>
      </p>
      {/* <img src={image} alt={`${name}`} className="absolute object-cover z-10 h-full rounded-lg"/> */}
    </div>
  );
};

export default HighlightProductsCardGroup;
