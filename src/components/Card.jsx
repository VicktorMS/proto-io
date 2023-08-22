import React from "react";

const Card = ({
  src,
  alt,
  bgColor = "bg-secondary",
  children,
  style,
  className,
}) => {
  return (
    <div className="w-full px-4 h-40">
      <div className={`${bgColor} w-full h-full rounded-xl flex`}>
        {src && (
          <img
            src={src}
            alt={alt}
            className="h-full w-1/3 scale-[1.01] -translate-x-1 border-black shadow-md object-cover rounded-l-md"
          />
        )}
        <div
          className={`h-full w-full p-6 flex flex-col gap-2 ${className}`}
          style={style}
        >
          {children}
        </div>
      </div>
    </div>
  );
};

export default Card;
