import React from "react";

const Button = ({ text, style }) => {
  return (
    <button
      type="button"
      className={
        ` text-white !bg-[#27d17f] hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center ` +
        style
      }
    >
      {text}
    </button>
  );
};

export default Button;
