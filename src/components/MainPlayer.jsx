import React from "react";
import Card from "./Card";
import StatsGroup from "./StatsGroup";
import MailIcon from "./icons/MailIcon";

import playerBrtt from "/images/team/brtt.png";
import locationIcon from "/icons/location.svg";

import twitterIcon from "/icons/twitter-logo.svg";
import discordLogo from "/icons/discord-small.svg";
import twitchLogo from "/icons/twitch-small.svg";

import leagueLogo from '/icons/lol-logo.png'
import valorantLogo from '/icons/valorant.png'

const MainPlayer = () => {
  return (
    <>
      <Card
        src={playerBrtt}
        imageClass="max-h-72"
        wrapperClass="px-4"
        alt="Jogador BRTT"
        className="p-6 bg-secondary gap-3 max-h-72"
      >
        <p className="font-bold text-xl lg:text-3xl">brTT paiN</p>
        <p className="text-xs lg:text-base">
          &ldquo;Fala aê, meu nome é brTT e eu sou profissional de League of
          Legends.&rdquo;
        </p>
        <div className="text-secondary-content text-xs flex gap-1 lg:text-sm lg:gap-2">
          <img
            src={locationIcon}
            alt="ícone de localização"
            className="lg:w-5"
          />
          <p>Rio de Janeiro, Brasil |</p>
          <img src={twitterIcon} alt="ícone do twitter" className="lg:w-5" />
          <img src={twitchLogo} alt="ícone da twitch" className="lg:w-5" />
          <img src={discordLogo} alt="ícone do discord" className="lg:w-6" />
        </div>
        <div className="flex items-center gap-2">
          <button className="btn btn-accent btn-xs lg:btn-sm w-fit normal-case hover:scale-105">
            <MailIcon className="w-4" />
            painbrtt@contact.com.br
          </button>
          <button className="btn btn-accent btn-sm hidden lg:block py-1 hover:scale-105">
            <img src={leagueLogo} alt="Logo" className="h-full"/>
          </button>
          <button className="btn btn-primary btn-sm hidden lg:block py-1 hover:scale-105">
            <img src={valorantLogo} alt="Logo" className="h-full"/>
          </button>
        </div>
        <StatsGroup className={"hidden lg:flex lg:justify-start lg:gap-8 mt-2"} />
      </Card>
      <StatsGroup className={"lg:hidden"} />
    </>
  );
};

export default MainPlayer;
