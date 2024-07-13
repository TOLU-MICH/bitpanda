import React from "react";
import image1 from "../assets/hero-img.png";
import Button from "./Button";
import Card from "./Card";
import crypto from "../assets/hero-img.png";
import banner1 from "../assets/invest/22.png";
import banner2 from "../assets/invest/Small banner.png";

const data = {
  subTitle: "INVEST WITH ZERO DEPOSIT FEES",
  title: "More money in your portfolio",
  desc: "No deposit and withdrawal fees, on all payment methods for all fiat currencies. More money in your portfolio means more opportunities to grow your investments and make impactful decisions, and that's exactly what we're here for.",
  img: crypto,
  style: "bg-black",
};

const data2 = [
  {
    subTitle: "BITPANDA SPOTLIGHT",
    title: "Meet the new stars on the crypto horizon",
    desc: "With Bitpanda Spotlight you can invest in fast-moving, hard to find crypto coins and projects",
    img: banner2,
    style: "bg-black",
  },
  {
    subTitle: "SECURITY",
    title: "Best-in-class security",
    desc: "Our ISO27001 certification proves that we follow the highest security standards.",
    img: banner1,
    style: "bg-[#28d180]",
    color: "!bg-white !text-black",
  },
];
const Feature = () => {
  return (
    <div className="" id="features">
      <section className="bg-gray-200 pb-20">
        <section className="max-w-screen-xl m-auto ">
          <section className="py-6 md:py-20 px-[15px]">
            <h3 className="text-gray-400 font-bold text-xl md:text-center mb-5">
              Feature
            </h3>
            <h1 className="font-bold text-3xl md:text-5xl md:text-center ">
              More than an investment platform
            </h1>
          </section>
          <Card data={data} color={"white"} link={"/academy"} />
          <section className="flex flex-wrap w-full">
            {data2.map((item, index) => (
              <Card
                data={item}
                half={true}
                key={index}
                style={item.style}
                color={item.color && item.color}
                link={"academy"}
              />
            ))}
          </section>
          <section className="w-full flex justify-center items-center">
            <Button
              style={"!p-[10px_30px] md:!p-[14px_40px] !text-lg md:!text-xl"}
              text={"See all features"}
              link={"academy"}
            />
          </section>
        </section>
      </section>
    </div>
  );
};

export default Feature;
