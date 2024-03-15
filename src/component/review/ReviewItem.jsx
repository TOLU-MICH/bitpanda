import React from "react";
import Rating from "./Rating";

const ReviewItem = () => {
  return (
    <section className="text-sm">
      <Rating
        color={"!bg-[#00b67a]"}
        rate={5}
        style={"!w-3"}
        cStyle={"!p-1 bg-[#00b67a]"}
      />
      <h3 className="font-bold  pt-3 text-sm">Fast and easy communication</h3>
      <p>Fast and easy communication</p>
      <p className="text-gray-500">
        <span className="font-bold ">Kristaps Antxpop, </span>3 February
      </p>
    </section>
  );
};

export default ReviewItem;
