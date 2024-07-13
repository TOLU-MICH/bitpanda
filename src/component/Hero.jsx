import React from "react";
import Button from "./Button";
import heroVideo from "../assets/hero.mp4";
import btc from "../assets/btc.svg";
import eth from "../assets/eth.svg";

const data = [
  {
    img: btc,
    name: "Bitcoin",
    amount: "€57,423.25",
    percent: "-0.86",
    unitAmt: "€497.95",
  },
  {
    img: eth,
    name: "Ethereum",
    amount: "€57,423.25",
    percent: "-0.86",
    unitAmt: "€497.95",
  },
];

const Hero = ({ title }) => {
  return (
    <section
      className="w-full h-fit md:h-[calc(100vh-50px)] px-[15px] mt-10 pb-10 md:p-20"
      id="why-us"
    >
      <div className="md:max-w-screen-xl md:flex mx-auto justify-center items-center">
        <div className="md:pl-12 md:max-w-[50%] w-full ">
          <h1 className="font-bold text-[42px] md:text-[55px] leading-[3rem] md:leading-[3.8rem]">
            Investing <br /> you can trust
          </h1>
          <div className="mb-5 pt-5">
            <Button
              text={"Start Investing"}
              style={"!p-[14px_40px] !text-xl"}
            />
          </div>
        </div>
        <div className="max-w-50% w-full relative">
          <video
            src={heroVideo}
            autoPlay
            loop
            muted
            playsInline
            poster
            className="max-h-[650px] h-full"
          />
          <p className="mt-5 text-sm text-gray-500 pt-5">
            Past performance is no indication of future performance.
          </p>

          {/* hero overlay */}
          <section className="w-[247px] absolute top-0 pt-12 md:pt-24 z-10 pl-[10px] block">
            {data.map((item, index) => (
              <div
                className="mb-2 p-[14px_20px] flex justify-between items-center w-full border-[2px] border-[#ebebeb] rounded-xl relative backdrop-blur-md bg-opacity-50 bg-[#f5f5f58a] shadow-xl shadow-[#0000000c]"
                key={index}
              >
                <img src={item.img} alt="" className="w-[40px] h-[40px]" />
                <span className="">
                  <p className="font-bold">{item.name}</p>
                  <p className="font-bold text-xs">€{item.amount}</p>
                </span>
                <span className="text-red-500">
                  <p>{item.percent}%</p>
                  <p className="text-xs">€{item.unitAmt}</p>
                </span>
              </div>
            ))}
          </section>
        </div>
      </div>
    </section>
  );
};

export default Hero;
