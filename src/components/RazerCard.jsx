import React from "react";

import razerLogo from "/images/gear/razer-logo.png";
import painLogo from "/images/gear/pain-logo.png";

const RazerCard = () => {
  return (
    <div className="p-4 w-full h-52">
      <div className="bg-gradient-to-r to-slate-900 from-black  h-full rounded-lg flex flex-col justify-center items-center lg:flex-row lg:justify-between lg:px-5">
        <img src={razerLogo} alt="Logo da Razer" className="translate-x-2 lg:w-1/3" />
        <div className="text-center lg:text-right">
          <p className="font-bold text-xl mt-2 lg:text-3xl">CONEXÃO GAMER</p>
          <p className="lg:text-xl">
            <span className="text-primary font-semibold">Razer</span> paiN
            Gaming
          </p>
        </div>
      </div>
    </div>
  );
};

export default RazerCard;
