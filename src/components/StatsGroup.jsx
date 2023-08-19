import React from "react";
import Stats from "./Stats";

import championshipIcon from '/icons/campeonatos.svg'
import followersIcon from '/icons/user-icon.svg'
import moneyIcon from '/icons/money.svg'


const StatsGroup = () => {
  return (
    <div className="flex justify-between items-center p-7">
      <Stats icon={championshipIcon} label={"Campeonatos"}>
        124
      </Stats>
      <Stats icon={followersIcon} label={"Seguidores"}>
        2.6M
      </Stats>
      <Stats icon={moneyIcon} label={"Recompensas"}>
        14M
      </Stats>
    </div>
  );
};

export default StatsGroup;
