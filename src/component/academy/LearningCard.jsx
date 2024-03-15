import React from "react";
import blog from "../../assets/academy/blgo.png";
import ColoredImage from "./ColoredImage";
import Path from "./Path";

const data = ["Beginner", "lesson1", "10 min"];

const LearningCard = () => {
  return (
    <div className="md:max-w-[33.33333%] w-full px-5 mb-10 hover:-translate-y-1">
      <article className="shadow-lg transition-all ease-in-out rounded-xl">
        {/* <div className="after:bg-[#BBFFB2] after:absolute after:inset-0 h-[72.5%] relative after:bg-opacity-35">
          <img src={blog} alt="" />
        </div> */}

        <div className="h-[72.5%]">
          <ColoredImage img={blog} color={"#BBFFB2"} />
        </div>

        <div className="p-[1.4rem]">
          <Path data={data} />

          <h4 className="font-bold mb-4">
            The beginnings of money and the importance of trust
          </h4>
          <p className="text-sm text-gray-600">
            People have been exchanging things in barter systems since the dawn
            of humankind. This gets too complex as soon as more people and goods
            are involved.
          </p>

          <div className="pt-[1.5rem] mt-auto uppercase font-bold text-[#8914b0]">
            <p className="text-sm">view lesson</p>
          </div>
        </div>
      </article>
    </div>
  );
};

export default LearningCard;
