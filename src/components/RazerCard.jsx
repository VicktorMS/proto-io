import React from "react";

import razerLogo from "/images/gear/razer-logo.png";
import painLogo from "/images/gear/pain-logo.png";

const RazerCard = () => {
  return (
    <div className="p-4 w-full h-52">
      <div className="bg-gradient-to-r to-slate-900 from-black  h-full rounded-lg flex flex-col justify-center items-center relative">
        <img src={razerLogo} alt="Logo da Razer" className="translate-x-2" />
        <p className="font-bold text-xl mt-2">CONEXÃO GAMER</p>
        <p>
          <span className="text-primary font-semibold">Razer</span> paiN Gaming
        </p>
        <img src={painLogo} alt="Pain Logo" className="absolute z-10"/>
      </div>
    </div>
  );
};

export default RazerCard;
