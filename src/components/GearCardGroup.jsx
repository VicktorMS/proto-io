import React from "react";
import Card from "./Card";

import mouseImage from "/images/mouse-razer-130-x-140.png"
import keyboardImage from "/images/keyboard-razer-130-x-140.png"
import headsetImage from "/images/headset-razer-130-x-140.png"

const GearCardGroup = () => {
  return (
    <>
      <Card
        src={mouseImage}
        alt="Jogador BRTT"
        bgColor="bg-primary"
        contentStyle="h-full p-6 flex flex-col gap-2 text-primary-content justify-center"
      >
        <p className="font-extrabold text-sm">Mouse</p>
        <p>
          <span className="font-extrabold">Razer</span> Deathadder R-X1
        </p>
        <p className="font-extrabold text-sm">View More </p>
      </Card>

      <Card
        src={keyboardImage}
        alt="Jogador BRTT"
        bgColor="bg-secondary"
        contentStyle="h-full p-6 flex flex-col gap-2 justify-center text-secondary-content"
      >
        <p className="font-extrabold text-sm">Keyboard</p>
        <p className="text-base-content">
          <span className="font-extrabold text-primary">Razer</span> Blackwidow Chroma 2.0
        </p>
        <p className="font-extrabold text-sm">View More </p>
      </Card>

      <Card
        src={headsetImage}
        alt="Jogador BRTT"
        bgColor="bg-secondary"
        contentStyle="h-full p-6 flex flex-col gap-2 justify-center text-secondary-content"
      >
        <p className="font-extrabold text-sm">Headset</p>
        <p className="text-base-content">
          <span className="font-extrabold text-primary">Razer</span> Kraken X
        </p>
        <p className="font-extrabold text-sm">View More </p>
      </Card>

      
    </>
  );
};

export default GearCardGroup;
