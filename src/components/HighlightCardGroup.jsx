import React from "react";
import Card from "./Card";
import WrenchIcon from "./icons/WrenchIcon";
import SignalIcon from "./icons/SignalIcon";
import PowerIcon from "./icons/PowerIcon";
import LinkIcon from "./icons/LinkIcon";
import SettingsIcon from "./icons/SettingsIcon";

import mouse1Image from "/images/store/mouse.png";
import mouse2Image from "/images/store/mouse-2.png";
import HighlightLargeCard from "./HighlightLargeCard";

import mouseLg from "/images/store/highlight/mouse-lg.png";
import keyboardLg from "/images/store/highlight/keyboard-lg.png";
import headsetLg from "/images/store/highlight/headset-lg.png";
import HighlightProductsCardGroup from "./HighlightProductsCardGroup";

const HighlightCardGroup = () => {
  return (
    <>
      <div className="hidden lg:grid w-full h-full gap-8">
        <HighlightLargeCard
          src={mouseLg}
          label={"GERAÇÃO"}
          productName={"Deathadder R-X1"}
        />
        <HighlightLargeCard
          src={keyboardLg}
          label={"TECNOLOGIA"}
          productName={"Blackwidow Chroma 2.0"}
        />
        <HighlightLargeCard
          src={headsetLg}
          label={"EXPERIÊNCIA"}
          productName={"Kraken XR"}
        />
      </div>
      <div className="w-full lg:hidden">
        <HighlightProductsCardGroup />
      </div>
      <Card className="w-full bg-primary text-primary-content mx-4 p-6 rounded-lg bg-pain-logo bg-right lg:hidden">
        <h3 className="text-4xl font-extrabold">NOVA GERAÇÃO</h3>
        <p className="text-lg font-semibold">
          <span className="font-extrabold">Razer</span> Deathadder
        </p>
        <button className="btn w-fit text-primary font-bold normal-case px-6 mt-4 rounded-xl">
          Ver Mais
        </button>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-0 w-full">
        <Card
          wrapperClass="px-4"
          className="bg-pain-logo bg-left bg-primary text-black rounded-lg p-6"
        >
          <div className="flex justify-center  gap-3 ">
            <img
              src={mouse1Image}
              alt="Deathadder R-X1"
              className="h-4/5 translate-y-1 lg:h-full"
            />
            <div>
              <h3 className="text-lg lg:text-xl">
                <span className="font-extrabold">Razer</span> Deathadder R-X1
              </h3>
              <ul className="text-xs font-bold lg:text-sm">
                <li className="flex gap-1 items-center">
                  <span>
                    <WrenchIcon className="w-3" />
                  </span>
                  86g Midweight Design
                </li>
                <li className="flex gap-1 items-center">
                  <span>
                    <SignalIcon className="w-3" />
                  </span>
                  Razer™ HyperSpeed Wireless / Bluetooth
                </li>
                <li className="flex gap-1 items-center">
                  <span>
                    <PowerIcon className="w-3" />
                  </span>
                  7 programmable buttons
                </li>
                <li className="flex gap-1 items-center">
                  <span>
                    <LinkIcon className="w-3" />
                  </span>
                  On-board DPI and keymap storage
                </li>
                <li className="flex gap-1 items-center">
                  <span>
                    <SettingsIcon className="w-3" />
                  </span>
                  Compatible with Razer Dock Chroma
                </li>
              </ul>
            </div>
          </div>
        </Card>

        <Card
          wrapperClass="px-4"
          className="bg-pain-logo bg-left bg-[#111] rounded-lg p-6"
        >
          <div className="flex justify-center  gap-4 ">
            <img
              src={mouse2Image}
              alt="Deathadder R-X1"
              className="h-4/5 translate-y-1 lg:h-full"
            />
            <div>
              <h3 className="text-lg lg:text-xl">
                <span className="font-extrabold">Razer</span> Deathadder R-X2
              </h3>
              <ul className="text-xs font-bold lg:text-sm">
                <li className="flex gap-1 items-center">
                  <span>
                    <WrenchIcon className="w-3 text-primary" />
                  </span>
                  86g Midweight Design
                </li>
                <li className="flex gap-1 items-center">
                  <span>
                    <SignalIcon className="w-3 text-primary" />
                  </span>
                  Razer™ HyperSpeed Wireless / Bluetooth
                </li>
                <li className="flex gap-1 items-center">
                  <span>
                    <PowerIcon className="w-3 text-primary" />
                  </span>
                  7 programmable buttons
                </li>
                <li className="flex gap-1 items-center">
                  <span>
                    <LinkIcon className="w-3 text-primary" />
                  </span>
                  On-board DPI and keymap storage
                </li>
                <li className="flex gap-1 items-center">
                  <span>
                    <SettingsIcon className="w-3 text-primary" />
                  </span>
                  Compatible with Razer Dock Chroma
                </li>
              </ul>
            </div>
          </div>
        </Card>
      </div>
    </>
  );
};

export default HighlightCardGroup;
