import React from "react";
import { Element } from "react-scroll";
import Header from "./components/Header";
import CommunityTab from "./components/CommunityTab";
import GearCardGroup from "./components/GearCardGroup";
import RazerCard from "./components/RazerCard";
import Drawer from "./components/Drawer";
import SectionTitle from "./components/SectionTitle";
import StoreCarousel from "./components/StoreCarousel";
import PlayerCardGroup from "./components/PlayerCardGroup";
import HighlightCardGroup from "./components/HighlightCardGroup";
import StoreHighlightCarousel from "./components/StoreHighligthCarousel";
import NewsCard from "./components/NewsCard";
import Footer from "./components/Footer";
import MainPlayer from "./components/MainPlayer";

import newsTeam1 from "/images/news/team1.png";
import newsTeam2 from "/images/news/team2.png";
import painLogo from "/images/news/pain-logo-news.png"


const App = () => {


  
  return (
    <>
      <Drawer>
        <Header />
        <CommunityTab />
        <main>
          <section id="About" className="lg:mb-8">
            <MainPlayer />
          </section>
          <section id="Gear" className="flex flex-col gap-4 lg:gap">
            <SectionTitle>MEU GEAR</SectionTitle>
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 px-4 gap-3">
              <GearCardGroup />
            </div>
            <RazerCard />
          </section>

          <section id="Store" className="flex flex-col gap-4">
            <SectionTitle>NOSSA LOJA</SectionTitle>
            <div className="px-4 w-full flex flex-col items-center">
              <StoreCarousel />
            </div>
          </section>
          <section id="Team" className="flex flex-col gap-4 ">
            <SectionTitle>NOSSO TIME</SectionTitle>
            <PlayerCardGroup />
          </section>
          <section id="Sponsors" className="pt-4 flex flex-col gap-4 flex flex-col items-center">
            <HighlightCardGroup />
            <StoreHighlightCarousel />
          </section>
          <section className="pt-4 flex flex-col gap-4">
            <SectionTitle>ÚLTIMAS NOTÍCIAS</SectionTitle>
            <div className="gap-4 grid grid-cols-1 lg:grid-cols-2 lg:gap-0">
              <NewsCard>
                <img
                  src={newsTeam1}
                  alt="Time da Pain"
                  className="w-2/5 object-cover rounded-s-lg max-h-48"
                />
                <div className="p-4 flex flex-col gap-2 bg-secondary rounded-e-lg max-h-48 justify-center">
                  <h3 className="text-sm font-bold">
                    Escalação paiN Gaming 2022
                  </h3>
                  <p className="overflow-hidden whitespace-normal text-ellipsis text-sm">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Deserunt aut vero, ut dolores esse voluptatem aliquid natus
                    odio reprehenderit iure eligendi a nesciunt. Adipisci veniam
                    illo velit repellat. Ratione, consequuntur!
                  </p>
                  <button className="btn btn-primary btn-xs  rounded-xl font-extrabold w-fit normal-case lg:btn-sm hover:scale-105">
                    Ver mais
                  </button>
                </div>
              </NewsCard>
              <NewsCard>
                <div className="p-4 flex flex-col gap-2 bg-secondary rounded-s-lg max-h-48 justify-center">
                  <h3 className="text-sm font-bold">
                    Últimos jogos paiN Gaming
                  </h3>
                  <p className="overflow-hidden whitespace-normal text-ellipsis text-sm">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Deserunt aut vero, ut dolores esse voluptatem aliquid natus
                    odio reprehenderit iure eligendi a nesciunt. Adipisci veniam
                    illo velit repellat. Ratione, consequuntur!
                  </p>
                  <button className="btn btn-accent btn-xs rounded-xl font-extrabold w-fit normal-case lg:btn-sm hover:scale-105">
                    Ver mais
                  </button>
                </div>
                <img
                  src={newsTeam2}
                  alt="Time da Pain"
                  className="w-2/5 object-cover rounded-e-lg max-h-48"
                />
              </NewsCard>
            </div>

            <NewsCard>
              <div className="bg-primary w-full rounded-lg p-5 bg-pain-logo bg-right lg:p-6 flex items-center justify-between">
                <div className="lg:w-3/5">
                  <h3 className="text-sm text-primary-content font-black lg:text-lg ">
                    Opa, que tal se inscrever no nosso newsletter e ficar por
                    dentro de tudo que acontece com o time?
                  </h3>
                  <div className="flex mt-4">
                    <input
                      type="email"
                      placeholder="Seu e-mail aqui"
                      className="bg-base-content text-primary-content input w-full max-w-xs rounded-e-none"
                    />
                    <button className="btn btm-neutral rounded-s-none hover:scale-105">
                      Inscrever-se
                    </button>
                  </div>
                </div>
                <img src={painLogo} alt="Logo Pain" className="hidden h-2/3 lg:block"/>
              </div>
            </NewsCard>
          </section>
          <Footer />
        </main>
      </Drawer>
    </>
  );
};

export default App;
