import React from "react";
import AcademyHero from "../component/AcademyHero";
import LevelNavigation from "../component/navigation/LevelNavigation";
import Beginners from "../component/academy/Beginners";

import hero from "../assets/academy/hero.png";

const data = {
  title:
    "Learn how to invest, all about personal finance, Bitcoin and cryptocurrencies.",
  desc: "  Become an expert in personal finance with our free and regularly updated eLearning platform.",
  img: hero,
  btn: "start learning",
};

const Academy = () => {
  return (
    <section className="w-full">
      <AcademyHero data={data} />
      <LevelNavigation />
      <Beginners />
    </section>
  );
};

export default Academy;
