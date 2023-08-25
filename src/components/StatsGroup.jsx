import React from "react";
import Stats from "./Stats";

import championshipIcon from '/icons/campeonatos.svg'
import followersIcon from '/icons/user-icon.svg'
import moneyIcon from '/icons/money.svg'
import viewIcon from '/icons/eye-icon.svg'


const StatsGroup = ({className}) => {
  return (
    <div className={`flex justify-between items-center p-7 lg:p-0 ${className}`}>
      <Stats icon={championshipIcon} label={"Campeonatos"}>
        124
      </Stats>
      <Stats icon={followersIcon} label={"Seguidores"}>
        2.6M
      </Stats>
      <Stats icon={moneyIcon} label={"Recompensas"}>
        14M
      </Stats>
      <Stats icon={viewIcon} label={"Visualizações"} className={"hidden lg:block"}>
        30M+
      </Stats>
    </div>
  );
};

export default StatsGroup;
