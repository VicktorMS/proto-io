import React from "react";

import mouseImage from "/images/store/highlight/mouse.png";
import keyboardImage from "/images/store/highlight/keyboard.png";
import headsetImage from "/images/store/highlight/headset.png";

const HighlightProductsCardGroup = () => {
  return (
    <div className="flex gap-2 w-full justify-center px-4">
      <HighlightProductCard image={mouseImage} name={"Mouse"} accent={"R-X1"} />
      <HighlightProductCard image={keyboardImage} name={"Blackwidow"} accent={"R-X1"} />
      <HighlightProductCard image={headsetImage} name={"Kraken"} accent={"R-X1"} />
    </div>
  );
};

const HighlightProductCard = ({ name, accent, image }) => {
  return (
    <div className="text-center rounded-lg h-20 flex justify-center items-center w-full relative">
      <p className="font-bold text-sm z-20 hidden">
        {name} <span className="text-primary">{accent}</span>
      </p>
      <img src={image} alt={`${name}`} className="absolute object-cover z-10 h-full rounded-lg"/>
    </div>
  );
};

export default HighlightProductsCardGroup;
