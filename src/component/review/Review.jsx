import React from "react";
import pilot from "../../assets/trustpilot.svg";
import Rating from "./Rating";
import ReviewContainer from "./ReviewContainer";

const Review = () => {
  return (
    <section className="max-w-screen-xl m-auto pb-20">
      <div className="py-6 md:py-20 px-[15px]">
        <h3 className="text-gray-400 font-bold text-xl md:text-center mb-5">
          Reviews
        </h3>
        <h1 className="font-bold text-3xl md:text-5xl md:text-center ">
          Don't just take our word for it
        </h1>
      </div>

      <section className="flex flex-col md:flex-row m-auto items-center">
        <div className="w-fit text-center md:w-[16%]">
          <h2 className="text-2xl">Great</h2>
          <Rating
            text={"3.5 out of 5 rating on Trustpilot"}
            rate={3}
            cStyle={"!bg-[#73cf11]"}
          />
          <p className="text-xs pt-1">
            Based on <span className="underline pb-3">9,080 reviews</span>
          </p>
          <img src={pilot} alt="" className="w-32 m-auto" />
        </div>

        <ReviewContainer />
      </section>
    </section>
  );
};

export default Review;
