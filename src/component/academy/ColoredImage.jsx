import React from "react";

const ColoredImage = ({ color, img }) => {
  return (
    <div
      className={`after:bg-[${color}] after:absolute after:inset-0 relative after:bg-opacity-35 h-[inherit] after:mix-blend-multiply`}
    >
      <img src={img} alt="" className="w-full h-[inherit] object-contain z-0" />
    </div>
  );
};

export default ColoredImage;
