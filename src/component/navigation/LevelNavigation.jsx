import React from "react";

const LevelNavigation = () => {
  return (
    <ul className="z-20 bg-white h-[5.1625rem] border-y border-y-gray-200 mx-auto flex justify-center items-center my-10 sticky top-0">
      <li className="h-full px-[15px] flex justify-center items-center relative">
        <button className="focus:text-[#8914b0] hover:text-[#8914b0] after:content-[''] after:w-[90%] after:h-[1px] hover:after:bg-[#8914b0] focus:after:bg-[#8914b0] focus:after:h-[2px] after:absolute after:bottom-0 after:left-2">
          all levels
        </button>
      </li>
      <li className="h-full px-[15px] flex justify-center items-center relative">
        <button className="focus:text-[#8914b0] hover:text-[#8914b0] after:content-[''] after:w-[90%] after:h-[1px] hover:after:bg-[#8914b0] focus:after:bg-[#8914b0] focus:after:h-[2px] after:absolute after:bottom-0 after:left-2">
          beginner
        </button>
      </li>
      <li className="h-full px-[15px] flex justify-center items-center relative">
        <button className="focus:text-[#8914b0] hover:text-[#8914b0] after:content-[''] after:w-[90%] after:h-[1px] hover:after:bg-[#8914b0] focus:after:bg-[#8914b0] focus:after:h-[2px] after:absolute after:bottom-0 after:left-2">
          intermediate
        </button>
      </li>
      <li className="h-full px-[15px] flex justify-center items-center relative">
        <button className="focus:text-[#8914b0] hover:text-[#8914b0] after:content-[''] after:w-[90%] after:h-[1px] hover:after:bg-[#8914b0] focus:after:bg-[#8914b0] focus:after:h-[2px] after:absolute after:bottom-0 after:left-2">
          advanced
        </button>
      </li>
    </ul>
  );
};

export default LevelNavigation;
