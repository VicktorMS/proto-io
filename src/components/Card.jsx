import React from "react";

const Card = ({
  src,
  alt,
  children,
  className,
  wrapperClass
}) => {
  return (
    <div className={`w-full ${wrapperClass}`}>
      <div className={`w-full h-full flex min-h-40 `}>
        {src && (
          <img
            src={src}
            alt={alt}
            className="w-1/3  shadow-md object-cover rounded-l-lg"
          />
        )}
        <div
          className={`min-h-full w-full flex flex-col justify-center gap-2 rounded-r-lg ${className}`}
        >
          {children}
        </div>
      </div>
    </div>
  );
};

export default Card;
