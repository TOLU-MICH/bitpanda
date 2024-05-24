import React from "react";
import nextLogo from "../../assets/logo.gif";

const Logo = () => {
  return (
    <div className="flex items-center justify-center ">
      <img className="rounded-full w-11 md:w-14" src={nextLogo} alt="" />
      <span className=" font-bold text-xl md:text-2xl text-slate-900 dark:text-white">
        Eco<span className="text-[#029d48]">Guard</span>
      </span>
    </div>
  );
};

export default Logo;
