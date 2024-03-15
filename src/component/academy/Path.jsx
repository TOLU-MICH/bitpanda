import React from "react";

const Path = ({ data }) => {
  return (
    <ul className="flex gap-1 uppercase text-xs text-gray-500 font-medium">
      <li>{data[0]}</li>
      <li className="flex justify-center items-center gap-1">
        <div className="bg-gray-300 rounded-full w-1 h-1" />
        {data[1]}
      </li>
      <li className="flex justify-center items-center gap-1">
        <div className="bg-gray-300 rounded-full w-1 h-1" />
        {data[2]}
      </li>
    </ul>
  );
};

export default Path;
