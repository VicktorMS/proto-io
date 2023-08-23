import React from "react";
import Card from "./Card";

import mouseImage from "/images/gear/mouse-razer-130-x-140.png";
import keyboardImage from "/images/gear/keyboard-razer-130-x-140.png";
import headsetImage from "/images/gear/headset-razer-130-x-140.png";
import ArrowRight from "./icons/ArrowRight";

const GearCardGroup = () => {
  return (
    <>
      <Card
        src={mouseImage}
        alt="Deathadder R-X1"
        bgColor="bg-primary"
        className="h-full p-6 flex flex-col gap-2 text-primary-content justify-center"
      >
        <p className="font-extrabold text-sm">Mouse</p>
        <p>
          <span className="font-extrabold">Razer</span> Deathadder R-X1
        </p>
        <div className="flex font-extrabold text-sm items-center">
          <p>View More</p> <ArrowRight className="w-4 font-bold"/>
        </div>
      </Card>

      <Card
        src={keyboardImage}
        alt="Blackwidow Chroma 2.0"
        bgColor="bg-secondary"
        className="h-full p-6 flex flex-col gap-2 justify-center text-secondary-content"
      >
        <p className="font-extrabold text-sm">Keyboard</p>
        <p className="text-base-content">
          <span className="font-extrabold text-primary">Razer</span> Blackwidow
          Chroma 2.0
        </p>
        <div className="flex font-extrabold text-sm items-center">
          <p>View More</p> <ArrowRight className="w-4 font-bold"/>
        </div>
      </Card>

      <Card
        src={headsetImage}
        alt="Kraken X"
        bgColor="bg-secondary"
        className="h-full p-6 flex flex-col gap-2 justify-center text-secondary-content"
      >
        <p className="font-extrabold text-sm">Headset</p>
        <p className="text-base-content">
          <span className="font-extrabold text-primary">Razer</span> Kraken X
        </p>
        <div className="flex font-extrabold text-sm items-center">
          <p>View More</p> <ArrowRight className="w-4 font-bold"/>
        </div>
      </Card>
    </>
  );
};

export default GearCardGroup;
