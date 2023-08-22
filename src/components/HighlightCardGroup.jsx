import React from "react";
import Card from "./Card";
import WrenchIcon from "./icons/WrenchIcon";
import SignalIcon from "./icons/SignalIcon";
import PowerIcon from "./icons/PowerIcon";
import LinkIcon from "./icons/LinkIcon";
import SettingsIcon from "./icons/SettingsIcon";


import painLogo from "/images/gear/pain-logo.png";
import mouse1Image from "/images/store/mouse.png";
import mouse2Image from "/images/store/mouse-2.png";

const HighlightCardGroup = () => {
  return (
    <>
      <Card bgColor="bg-primary text-black" className="relative">
        <h2 className="font-black text-2xl">NOVA GERAÇÃO</h2>
        <p className="font-medium">
          <span className="font-extrabold">Razer</span> Deathadder
        </p>
        <button className="btn btn-black text-primary font-bold w-fit px-6 py-2 btn-sm text-xs">
          Ver Mais
        </button>
        <img
          src={painLogo}
          alt="Logo da Pain Game"
          className="absolute object-cover top-0 z-10 right-0"
        />
      </Card>

      <Card bgColor="bg-primary text-black" className="relative">
        <div className="flex justify-center  gap-3">
          <img
            src={mouse1Image}
            alt="Deathadder R-X1"
            className="h-4/5 translate-y-1"
          />
          <div>
            <h3 className="text-lg">
              <span className="font-extrabold">Razer</span> Deathadder R-X1
            </h3>
            <ul className="text-xs font-bold ">
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

        <img
          src={painLogo}
          alt="Logo da Pain Game"
          className="absolute object-cover top-0 z-10 -translate-x-32 right-0"
        />
      </Card>

      <Card bgColor="bg-[#111] " className="relative">
        <div className="flex justify-center  gap-4">
          <img
            src={mouse2Image}
            alt="Deathadder R-X1"
            className="h-4/5 translate-y-1"
          />
          <div>
            <h3 className="text-lg">
              <span className="font-extrabold">Razer</span> Deathadder R-X2
            </h3>
            <ul className="text-xs font-bold ">
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

        <img
          src={painLogo}
          alt="Logo da Pain Game"
          className="absolute object-cover top-0 z-10 -translate-x-32 right-0"
        />
      </Card>
    </>
  );
};

export default HighlightCardGroup;
