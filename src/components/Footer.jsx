import React from "react";

import painLogo from "/images/footer/pain-logo.png";
import discordLogo from "/icons/discord-icon.svg";
import twitchLogo from "/icons/twitch-icon.svg";
import overwolfLogo from "/icons/overwolf-icon.png";

const Footer = () => {
  return (
    <footer className="footer p-10 bg-[#111] text-neutral-content mt-4 grid-cols-3 ">
      <div className="flex flex-col gap-6 h-full w-full col-span-2">
        <div className="h-fit">
          <img src={painLogo} alt="Pain Gaming" />
        </div>
        <div className="text-gray-400 text-xs">
          <h4 className="font-bold mb-2">
            © Pain Gaming 2022 ® Todos os Direitos Reservados
          </h4>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit
            Consequuntur.
          </p>
        </div>
      </div>

      <div className="flex flex-col justify-between h-full w-full col-span-1">
        <div className="h-fit w-full text-right font-bold">
          <ul className="leading-7">
            <MenuOption>About</MenuOption>
            <MenuOption>Gear</MenuOption>
            <MenuOption>Store</MenuOption>
            <MenuOption>Team</MenuOption>
            <MenuOption>Sponsors</MenuOption>
          </ul>
        </div>
        <div className="text-right w-full h-full mt-2">
          {/* <span className="footer-title">Social</span> */}
          <div className="flex flex-row-reverse gap-2 mt-1 ">
            <a>
              <img src={overwolfLogo} alt="Overwolf logo" className="w-7" />
            </a>
            <a>
              <img src={twitchLogo} alt="Twitch Logo" />
            </a>
            <a>
              <img src={discordLogo} alt="Discord Logo" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

const MenuOption = ({ children }) => {
  return (
    <li>
      <a
        className="font-bold text-base cursor-pointer hover:text-primary h-11"
        href={"#" + children}
      >
        {children}
      </a>
    </li>
  );
};

export default Footer;
