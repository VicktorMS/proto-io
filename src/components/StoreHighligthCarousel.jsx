import React from "react";


import chair1 from '/images/store/highlight/chair-1.png';
import chair2 from '/images/store/highlight/chair-2.png';
import chair3 from '/images/store/highlight/chair-1.png';

const StoreHighlightCarousel = () => {
  
  const products = [chair1, chair2, chair3]
  
  
  return (
    <>
      <div className="carousel max-w-sm md:max-w-full">
        {products.map((src, index) => 
          <CarouselItem key={index} productsArr={products} id={index + 1} src={src}/>
        )}
      </div>
    </>
  );
};

const CarouselItem = ({id, src, productsArr }) => {

  
  function previousCarouselId(){
    if (id - 1 < 0 ){
     return productsArr.length
    }  
    return id - 1
  }

  function nextCarouselId(){
    if (id + 1 > productsArr.length ){
     return 1
    }  
    return id + 1
  }

  return (
    <div id={`highlight-store-chair-${id}`} className="carousel-item relative w-full h-1/2">
     
      <div className="w-full  px-4">
         <div className="w-full h-full bg-[#111] rounded-lg flex flex-col md:max-w-full max-w-sm items-center relative justify-center">
            <img src={src} alt={"Razer Iskur - Black / Green - XL Versão " + id} className="max-h-full"/>
            <div className="-translate-y-5 text-center">
              <h4 className="font-bold"><span className="text-primary">Razer</span> Iskur - Black /<span className="text-primary">Green</span>  - XL</h4>
              <p className="text-xs font-semibold text-neutral">Gaming Chair with Built-in Lumbar Support</p>

              <div className="flex items-center mt-3 bg-[#1E1E1E] rounded-lg ">
                <button className="btn btn-primary rounded-none rounded-s-lg grow font-extrabold text-black"> Ver mais</button>
                <div className="px-4">
                  <p className="text-xs text-slate-100">R$ 1299,90</p>
                  <p className="text-md text-primary font-bold">R$ 799,90</p>
                </div>
              </div>
              
            </div>
         </div>
      </div>

      <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
        <a href={`#highlight-store-chair-${previousCarouselId()}`} className="btn btn-circle text-primary">
          ❮
        </a>
        <a href={`#highlight-store-chair-${nextCarouselId()}`}  className="btn btn-circle text-primary">
          ❯
        </a>
      </div>
    </div>
  );
};

export default StoreHighlightCarousel;
