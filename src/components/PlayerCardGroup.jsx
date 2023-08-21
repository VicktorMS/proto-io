import React from "react";
import ThinCard from "./ThinCard";

//Players Image
import wizerPlayer from "/images/team/wizer.png";
import cariokPlayer from "/images/team/cariok.png";
import dynquedoPlayer from "/images/team/dy-nquedo.png";
import trigoPlayer from "/images/team/Trigo.png";
import damagePlayer from "/images/team/damage.png";

//Icons Image
import topIcon from "/images/team/icons/top.png";
import botIcon from "/images/team/icons/bot.png";
import jgIcon from "/images/team/icons/jg.png";
import midIcon from "/images/team/icons/mid.png";
import supIcon from "/images/team/icons/sup.png";

//Card Icon
import twitterIcon from "/icons/twitter-logo.svg";
import discordLogo from "/icons/discord-small.svg";
import twitchLogo from "/icons/twitch-small.svg";



const PlayerCardGroup = () => {
  const teamData = [
    {
      nickname: "Wizer",
      image: wizerPlayer,
      role: "Top-Laner",
      roleIcon: topIcon,
    },
    {
      nickname: "Cariok",
      image: cariokPlayer,
      role: "Jungler",
      roleIcon: jgIcon,
    },
    {
      nickname: "dyNquedo",
      image: dynquedoPlayer,
      role: "Mid-Laner",
      roleIcon: midIcon,
    },
    {
      nickname: "Trigo",
      image: trigoPlayer,
      role: "Bot-Laner",
      roleIcon: botIcon,
    },
    {
      nickname: "Damage",
      image: damagePlayer,
      role: "Support",
      roleIcon: supIcon,
    },
  ];
  return (
    <div className="flex flex-col gap-3">
      {teamData.map((data, index) =>(
        <TeamPlayerCard  key={index} data={data}/>
      ))}
    </div>
  );
};

const TeamPlayerCard = ({ data }) => {
  const { nickname, image, role, roleIcon } = data;
  return (
    <ThinCard
      src={image}
      alt={`Foto de jogador ${nickname}`}
      contentStyle="p-6 flex flex-col gap-2 justify-center shadow-md"
    >
      <p className="font-bold text-md">paiN {nickname}</p>
      <div className="flex gap-1 h-4">
        <img src={twitterIcon} alt={""} className="h-full"/>
        <img src={discordLogo} alt={""} className="h-full"/>
        <img src={twitchLogo} alt={""} className="h-full"/>
      </div>
      <div className="flex gap-1 mt-3 text-secondary-content font-bold items-center">
        <img src={roleIcon} alt={"posição " + role} className="w-5 h-5"/>
        <p>{role}</p>
      </div>
    </ThinCard>
  );
};

export default PlayerCardGroup;
