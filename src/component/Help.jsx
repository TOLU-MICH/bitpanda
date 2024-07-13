import React from "react";
import community from "../assets/Community.svg";
import contactUs from "../assets/Contact us.svg";
import HeroCard from "./HeroCard";

const data = [
  {
    name: "Community",
    img: community,
    text: "Join our online community so you can be the first to hear about company news, new products and more.",
  },
  {
    name: "Contact us",
    img: contactUs,
    text: "Our Bitpanda Helpdesk is filled with in-depth articles, and if you need more help, we are always available to lend a helping hand through our contact form.",
  },
];

const Help = () => {
  return (
    <section className="pb-20" id="help">
      <section className="max-w-screen-xl m-auto ">
        <section className="py-6 md:py-20 px-[15px]">
          <h3 className="text-gray-400 font-bold text-base md:text-xl md:text-center mb-0 md:mb-5">
            Help
          </h3>
          <h1 className="font-bold text-3xl lg:text-5xl md:text-center ">
            Questions? We’re here for you
          </h1>
        </section>

        <section className="flex flex-col md:flex-row justify-center items-center">
          {data.map((item, index) => (
            <HeroCard data={item} key={index} border={false} />
          ))}
        </section>
      </section>
    </section>
  );
};

export default Help;
