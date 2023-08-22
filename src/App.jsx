import React from "react";
import Header from "./components/Header";
import CommunityTab from "./components/CommunityTab";
import Card from "./components/Card";
import StatsGroup from "./components/StatsGroup";
import GearCardGroup from "./components/GearCardGroup";
import RazerCard from "./components/RazerCard";
import Drawer from "./components/Drawer";
import SectionTitle from "./components/SectionTitle";
import StoreCarousel from "./components/StoreCarousel";
import PlayerCardGroup from "./components/PlayerCardGroup";
import HighlightProductsGroup from "./components/HighlightProductsCardGroup";
import HighlightCardGroup from "./components/HighlightCardGroup";
import StoreHighlightCarousel from "./components/StoreHighligthCarousel";
import NewsCard from "./components/NewsCard";

import playerBrtt from "/images/brtt.png";
import locationIcon from "/icons/location.svg";

import twitterIcon from "/icons/twitter-logo.svg";
import discordLogo from "/icons/discord-small.svg";
import twitchLogo from "/icons/twitch-small.svg";
import newsTeam1 from "/images/news/team1.png";
import newsTeam2 from "/images/news/team2.png";
import Footer from "./components/Footer";

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
            <SectionTitle>MEU GEAR</SectionTitle>
            <GearCardGroup />
            <RazerCard />
          </section>
          <section className="flex flex-col gap-4 ">
            <SectionTitle>NOSSA LOJA</SectionTitle>
            <div className="px-4 max-w-[414px]">
              <StoreCarousel />
            </div>
          </section>
          <section className="flex flex-col gap-4 ">
            <SectionTitle>NOSSO TIME</SectionTitle>
            <PlayerCardGroup />
          </section>
          <section className="pt-4 flex flex-col gap-4">
            <HighlightProductsGroup />
            <HighlightCardGroup />
            <StoreHighlightCarousel />
          </section>
          <section className="pt-4 flex flex-col gap-4">
            <SectionTitle>ÚLTIMAS NOTÍCIAS</SectionTitle>
            <NewsCard>
              <img src={newsTeam1} alt="Time da Pain" className="w-2/5 object-cover rounded-s-lg" />
              <div className="p-4 flex flex-col gap-2 bg-secondary rounded-e-lg">
                <h3 className="text-sm font-bold">
                  Escalação paiN Gaming 2022
                </h3>
                <p className="text-xs text-ellipses">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Tempora explicabo ab sequi.
                </p>
                <button className="btn btn-primary btn-sm rounded-xl font-extrabold w-fit">
                  Ver mais
                </button>
              </div>
            </NewsCard>
            <NewsCard>
              <div className="p-4 flex flex-col gap-2 bg-secondary rounded-s-lg">
                <h3 className="text-sm font-bold ">
                  Escalação paiN Gaming 2022
                </h3>
                <p className="text-xs text-ellipses">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Tempora explicabo ab sequi, 
                </p>
                <button className="btn btn-accent btn-sm rounded-xl font-extrabold w-fit">
                  Ver mais
                </button>
              </div>
              <img src={newsTeam2} alt="Time da Pain" className="w-2/5 object-cover rounded-e-lg" />
            </NewsCard>
          </section>
          <Footer/>
        </main>
      </Drawer>
    </>
  );
};

export default App;
