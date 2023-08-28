import React from "react";

import uniformeImage from "/images/store/store-uniforme.png";
import boneImage from "/images/store/bone-pain-000-x-205.png";
import kitImage from "/images/store/kit-pain-000-x-205.png";

//esse componente futuramente pode receber um objeto de produtos e iterar por eles

const StoreCarousel = () => {
    return (
    <>
      <div className="carousel w-full max-w-sm md:max-w-full xl:w-full h-96 gap-2 xl:mb-4 ">
        <CarouselItem
          itemOrder={"item1"}
          src={uniformeImage}
          title={"Uniforme Oficial paiN Gaming 2021"}
          price={"139,90"}
        />
        <CarouselItem
          itemOrder={"item2"}
          src={boneImage}
          title={"Boné paiN Gaming 2021"}
          price={"39,90"}
        />
        <CarouselItem
          itemOrder={"item3"}
          src={kitImage}
          title={"Kit Uniforme + Boné paiN Gaming 2022"}
          price={"159,90"}
        />
      </div>
      <div className="flex justify-center w-full max-w-full py-2 gap-2">
        <a href="#item1" className="btn btn-xs">
          1
        </a>
        <a href="#item2" className="btn btn-xs">
          2
        </a>
        <a href="#item3" className="btn btn-xs">
          3
        </a>
      </div>
    </>
  );
};

const CarouselItem = ({ itemOrder, title, src, alt, price, description }) => {
  return (
    <div
      id={itemOrder}
      className="carousel-item w-full h-full flex flex-col overflow-y-hidden rounded-lg max-w-sm xl:max-w-lg"
    >
      <img src={src} alt={alt} className="h-[45%] object-cover" />
      <div className="bg-secondary h-[55%] p-4 flex flex-col justify-between">
        <div className="flex flex-col gap-2">
          <h3 className="font-bold text-md">{title}</h3>
          <p className="text-sm text-secondary-content w-3/4 h-20 overflow-hidden whitespace-normal text-ellipsis">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam, nobis totam! Necessitatibus nisi tempore id veritatis qui, numquam vel natus reprehenderit minus, facilis voluptas sed error ad. Facere, est deserunt!
          </p>
        </div>
        <div className="flex items-center justify-between">
          <button className="btn btn-primary btn-sm">Comprar Agora</button>
          <p className="text-3xl text-secondary-content font-bold">
            <span className="text-sm">R$</span>
            {price}
          </p>
        </div>
      </div>
    </div>
  );
};

export default StoreCarousel;
