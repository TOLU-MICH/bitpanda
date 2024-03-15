import React from "react";
import bloomberg from "../assets/FeaturedIn/Bloomberg.svg";
import cnbc from "../assets/FeaturedIn/CNBC.svg";
import forbes from "../assets/FeaturedIn/Forbes.svg";
import tc from "../assets/FeaturedIn/TC.svg";

const data = [bloomberg, cnbc, forbes, tc];

const FeaturedIn = () => {
  return (
    <section className="flex flex-wrap justify-center items-center border-t border-b gap-3 p-1">
      <p className="text-lg pr-4">Feature in</p>

      {data.map((item, index) => (
        <img src={item} alt="logos" key={index} className="w-20" />
      ))}
    </section>
  );
};

export default FeaturedIn;
