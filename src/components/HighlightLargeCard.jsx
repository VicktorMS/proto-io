import React from "react";
import HighlightProductsCardGroup from "./HighlightProductsCardGroup";
import Card from "./Card";

const HighlightLargeCard = ({ label, productName, src }) => {
  return (
    <div className="flex w-full pr-4 pl-2 gap-2">
      <HighlightProductsCardGroup />
      <Card
        wrapperClass="px-4 lg:p-0 "
        className="bg-pain-logo bg-left bg-primary text-black rounded-lg relative "
      >
        <div className="p-6">
          <h2 className="font-black text-2xl lg:text-4xl">NOVA {label}</h2>
          <p className="font-medium lg:text-xl">
            <span className="font-extrabold">Razer</span> {productName}
          </p>
          <button className="btn btn-black text-primary font-bold w-fit px-6 py-2 btn-sm lg:btn-md mt-4">
            Ver Mais
          </button>
        </div>
        <img src={src} className="object-cover absolute right-0 rounded-e-lg w-96 bottom-0"/>
      </Card>
    </div>
  );
};

export default HighlightLargeCard;
