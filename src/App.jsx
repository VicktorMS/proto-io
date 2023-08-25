import React from "react";
import Header from "./components/Header";
import CommunityTab from "./components/CommunityTab";
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
import Footer from "./components/Footer";


import newsTeam1 from "/images/news/team1.png";
import newsTeam2 from "/images/news/team2.png";
import MainPlayer from "./components/MainPlayer";

const App = () => {
  return (
    <>
      <Drawer>
        <Header />
        <CommunityTab />
        <main>
          <section className="lg:mb-8">
           <MainPlayer/>
          </section>
          <section className="flex flex-col gap-4">
            <SectionTitle>MEU GEAR</SectionTitle>
            <GearCardGroup />
            <RazerCard />
          </section>
          <section className="flex flex-col gap-4">
            <SectionTitle>NOSSA LOJA</SectionTitle>
            <div className="px-4 w-full flex flex-col items-center">
              <StoreCarousel />
            </div>
          </section>
          <section className="flex flex-col gap-4 ">
            <SectionTitle>NOSSO TIME</SectionTitle>
            <PlayerCardGroup />
          </section>
          {/* <section className="pt-4 flex flex-col gap-4 flex flex-col items-center">
            <HighlightProductsGroup />
            <HighlightCardGroup />
            <StoreHighlightCarousel />
          </section> */}
          <section className="pt-4 flex flex-col gap-4">
            <SectionTitle>ÚLTIMAS NOTÍCIAS</SectionTitle>
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
                <button className="btn btn-primary btn-xs  rounded-xl font-extrabold w-fit normal-case">
                  Ver mais
                </button>
              </div>
            </NewsCard>
            <NewsCard>
              <div className="p-4 flex flex-col gap-2 bg-secondary rounded-s-lg max-h-48 justify-center">
                <h3 className="text-sm font-bold">Últimos jogos paiN Gaming</h3>
                <p className="overflow-hidden whitespace-normal text-ellipsis text-sm">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Deserunt aut vero, ut dolores esse voluptatem aliquid natus
                  odio reprehenderit iure eligendi a nesciunt. Adipisci veniam
                  illo velit repellat. Ratione, consequuntur!
                </p>
                <button className="btn btn-accent btn-xs  rounded-xl font-extrabold w-fit normal-case">
                  Ver mais
                </button>
              </div>
              <img
                src={newsTeam2}
                alt="Time da Pain"
                className="w-2/5 object-cover rounded-e-lg max-h-48"
              />
            </NewsCard>
            <NewsCard>
              <div className="bg-primary w-full rounded-lg p-5 bg-pain-logo bg-right">
                <h3 className="text-sm text-primary-content font-black ">
                  Opa, que tal se inscrever no nosso newsletter e ficar por
                  dentro de tudo que acontece com o time?
                </h3>
                <div className="flex mt-4">
                  <input
                    type="email"
                    placeholder="Seu e-mail aqui"
                    className="bg-base-content text-primary-content input w-full max-w-xs rounded-e-none"
                  />
                  <button className="btn btm-neutral rounded-s-none">
                    Inscrever-se
                  </button>
                </div>
            
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
