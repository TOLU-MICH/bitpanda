import React from "react";

import faq from "../assets/security/download.svg";

const Accordion = ({ data }) => {
  const [visibility, setVisibility] = React.useState(null);

  const handleClick = React.useCallback((i) => {
    if (visibility === i) return setVisibility(null);
    setVisibility(i);
  });

  return (
    <div className="text-left md:px-4">
      {data.map((item, index) => (
        <button
          className="w-full bg-gray-100 rounded-xl group mb-8"
          onClick={() => handleClick(index)}
          key={index}
        >
          <span className="flex justify-between px-5 md:px-10 py-5 items-start">
            <h2 className="font-medium text-base md:text-2xl text-left">
              {item.title}
            </h2>
            <img
              src={faq}
              alt=""
              className={`h-fit w-2.5  transition-transform duration-300 ease-in-out mt-2 ${
                visibility === index ? "rotate-[90deg]" : "rotate-45"
              }`}
            />
          </span>
          <div
            className={`text-left overflow-auto transition-all duration-300 ease-in-out text-slate-600 text-sm ${
              visibility === index ? "px-10 py-5 h-fit" : "p-0 h-0"
            }`}
          >
            <div className="overflow-hidden">{item.desc}</div>
          </div>
        </button>
      ))}
    </div>
  );
};

export default Accordion;
