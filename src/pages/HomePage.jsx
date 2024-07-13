import React, { useEffect } from "react";
import Navigation from "../component/navigation/Navigataion";
import HeroBoard from "../component/HeroBoard";
import Hero from "../component/Hero";
import SubHero from "../component/SubHero";
import InvestCard from "../component/InvestCard";
import Feature from "../component/Feature";
import Learn from "../component/Learn";
import Review from "../component/review/Review";
import Help from "../component/Help";
import FeaturedIn from "../component/FeaturedIn";

import security from "../assets/Secure.svg";
import trusted from "../assets/Trusted.svg";
import regulated from "../assets/Regulated.svg";

const data = [
  {
    name: "Regulated",
    img: regulated,
    bold: "Austria based and European regulated",
    text: "crypto & securities broker platform",
  },
  {
    name: "Safe and Secured",
    img: security,
    bold: ["Funds secured ", "Fully compliant "],
    text: [
      "in offline wallets. ",
      "with European data, IT and money laundering security standards",
    ],
  },
  {
    name: "Trusted",
    img: trusted,
    bold: "4+ million ",
    text: "happy users. Excellent Trustpilot rating.",
  },
];

const HomePage = () => {
  return (
    <>
      {/* <Navigation /> */}
      <HeroBoard />
      <Hero />
      <SubHero data={data} />
      <InvestCard />
      <Feature />
      <Learn />
      <Review />
      <Help />
      <FeaturedIn />
    </>
  );
};

export default HomePage;
