import React from "react";

import HeroCard from "./HeroCard";

const SubHero = ({ data, btn }) => {
  return (
    <div className="max-w-screen-xl w-full m-auto py-5">
      <section className="flex flex-col md:flex-row">
        {data.map((item, index) => (
          <HeroCard data={item} key={index} btn={btn} />
        ))}
      </section>
    </div>
  );
};

export default SubHero;
