import React from "react";
import Button from "./Button";

const HeroCard = ({ data, border = true, btn = true }) => {
  return (
    <div
      className={
        "md:w-[33.32223%] mx-8 md:mx-0 md:px-8 py-4 md:py-0 flex flex-col items-center gap-4 md:block " +
        (border &&
          "border-b-[1px] md:border-r-[1px] md:border-b-0 border-gray-300 last:border-0")
      }
    >
      {data.img && (
        <img
          src={data.img}
          alt=""
          className="w-20 h-25 md:w-[89px] md:h-[73px] pl-0 md:pl-3 p-3 md:pb-0 md:mx-auto object-cover"
        />
      )}
      <div>
        <h1 className="text-2xl md:text-3xl font-bold text-center md:my-2">
          {data.name}
        </h1>
        {data.text.length == 2 ? (
          <p className="text-lg text-gray-600 text-center my-1 md:my-2  flex flex-wrap gap-x-1 w-fit">
            <span>
              <strong>{data.bold[0]}</strong> {data.text[0]}
            </span>
            <span>
              <strong>{data.bold[1]}</strong> {data.text[1]}
            </span>
          </p>
        ) : (
          <p className="text-lg text-gray-600 text-center my-1 md:my-2 flex flex-wrap gap-x-1 justify-center">
            {data.bold && <strong>{data.bold}</strong>} {data.text}
          </p>
        )}
      </div>

      {btn == true && (
        <div className="w-full flex items-center">
          <Button text="Read more" style={"!mx-auto"} link="security" />
        </div>
      )}
    </div>
  );
};

export default HeroCard;
