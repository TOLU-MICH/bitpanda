import React from "react";
import heroImg from "../assets/hero-img.png";

const HeroBoard = () => {
  return (
    <section className="bg-black flex items-center justify-center ">
      <div className="max-w-screen-xl flex items-center p-2">
        <div className="max-w-[50%] md:max-w-52 p-[5px] pb-0 w-full border-b border-b-[#27d17f]">
          <img src={heroImg} alt="" />
        </div>
        <p className=" text-2xl md:text-3xl text-white font-bold p-7 max-w-[61%] md:!max-w-[100%]">
          You can now invest with{" "}
          <span className="text-[#27d17f]">
            zero deposit or withdrawal fees
          </span>{" "}
          on all payment options, including credit cards.
        </p>
      </div>
    </section>
  );
};

export default HeroBoard;
