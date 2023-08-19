import React from "react";
import Header from "./components/Header";
import CommunityTab from "./components/CommunityTab";
import Card from "./components/Card";
import StatsGroup from "./components/StatsGroup";

import playerBrtt from "/images/brtt.png";
import locationIcon from "/icons/location.svg";
import twitterIcon from "/icons/twitter-logo.svg";
import discordLogo from "/icons/discord-small.svg";
import twitchLogo from "/icons/twitch-small.svg";
import GearCardGroup from "./components/GearCardGroup";
import RazerCard from "./components/RazerCard";
import Drawer from "./components/Drawer";

const App = () => {
  return (
    <>
      <Drawer>
        <Header />
        <CommunityTab />
        <main>
          <section>
            <Card
              src={playerBrtt}
              alt="Jogador BRTT"
              contentStyle="p-6 flex flex-col gap-2"
            >
              <p className="font-bold text-xl">brTT paiN</p>
              <p className="text-xs">
                &ldquo;Fala aê, meu nome é brTT e eu sou profissional de League
                of Legends.&rdquo;
              </p>
              <div className="text-secondary-content text-xs flex gap-1">
                <img src={locationIcon} alt="ícone de localização" />
                <p>Rio de Janeiro, Brasil |</p>
                <img src={twitterIcon} alt="ícone do twitter" />
                <img
                  src={twitchLogo}
                  alt="ícone da twitch"
                  className="w-3 fill-red-500"
                />
                <img src={discordLogo} alt="ícone do discord" />
              </div>
              <button className="btn btn-accent btn-xs text-xs w-5/6 normal-case">
                painbrtt@contact.com.br
              </button>
            </Card>
            <StatsGroup />
          </section>
          <section className="flex flex-col gap-4">
            <h2 className="text-xl font-bold px-4">MEU GEAR</h2>
            <GearCardGroup />
            <RazerCard />
          </section>
        </main>
      </Drawer>
    </>
  );
};

export default App;
