import React from "react";
import LearningCard from "./LearningCard";
const Beginners = () => {
  const comp = [];
  for (let i = 0; i < 6; i++) {
    comp.push(<LearningCard />);
  }
  return (
    <section className="pb-20">
      <section className="max-w-screen-xl m-auto ">
        <section className="py-6 md:py-20 px-[15px] md:max-w-[46em] m-auto">
          <h1 className="font-bold text-3xl md:text-5xl md:text-center mb-5">
            Beginner lessons
          </h1>
          <h3 className="text-gray-400 text-xl md:text-center ">
            What is Bitcoin? If you are new to cryptocurrencies and want to
            learn about the basics, the beginner lessons of the Bitpanda Academy
            are the right place to start.
          </h3>
        </section>
        <section className="flex flex-wrap">{comp}</section>
      </section>
    </section>
  );
};

export default Beginners;
