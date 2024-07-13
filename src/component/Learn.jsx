import React from "react";
import Card from "./Card";
import academy from "../assets/Academy.png";

const data = {
  subTitle: "BITPANDA ACADEMY",
  title: "Learn all about investing, Bitcoin and blockchain",
  img: academy,
};

const Learn = () => {
  return (
    <section className="max-w-screen-xl m-auto pb-20" id="learn">
      <div className="py-6 md:py-20 px-[15px]">
        <h3 className="text-gray-400 font-bold text-base md:text-xl md:text-center mb-0 md:mb-5">
          Learn
        </h3>
        <h1 className="font-bold text-3xl lg:text-5xl md:text-center ">
          Boost your financial literacy skills
        </h1>
      </div>

      <section>
        <Card
          data={data}
          text={"Visit Academy"}
          style="bg-[#28d180] text-white"
          link={"academy"}
        />
      </section>
    </section>
  );
};

export default Learn;
