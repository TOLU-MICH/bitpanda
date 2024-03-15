import React from "react";
import btc from "../assets/btc.svg";
import chart from "../assets/chart.svg";
import Button from "./Button";

const CryptoCard = () => {
  return (
    <section className="w-full max-w-[90%] mx-auto rounded-lg bg-gray-50">
      <div className="flex p-[25px_36px]  mb-3 gap-3 border-b-gray-300 border-b">
        <img src={btc} alt="Bitcoin" />
        <span>
          <p className="font-bold leading-3">Bitcoin</p>
          <p className="text-gray-400 font-bold">Btc</p>
        </span>
      </div>
      <div className="p-[40px_20px] pt-0">
        <p className="text-4xl font-bold">€56,982.05</p>
        <span className="text-red-500 font-bold text-sm">€572.66 (-0.99%)</span>
      </div>
      <div className="p-[40px_20px] pt-0">
        <img src={chart} alt="" />
      </div>
      <div className="p-[40px_20px] pt-0">
        <Button text={"Buy"} style={"!text-base"} />
      </div>
    </section>
  );
};

export default CryptoCard;
