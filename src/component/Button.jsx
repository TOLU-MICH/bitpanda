import React from "react";
import { Link } from "react-router-dom";

const Button = ({ text, style, link }) => {
  return (
    <button
      type="button"
      className={
        ` text-white !bg-[#27d17f] hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center ` +
        style
      }
    >
      <Link to={link ? link : "/auth/register/"}>{text}</Link>
    </button>
  );
};

export default Button;
