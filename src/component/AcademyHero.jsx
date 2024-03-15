import React from "react";
import Button from "./Button";

const AcademyHero = ({ data, style, padding = true }) => {
  console.log(typeof data);
  return (
    <div
      className={
        "w-full h-fit px-[15px]  " +
        (data.img ? (padding == true ? " md:p-20 py-10 px-7" : "") : "")
      }
    >
      <div className="flex flex-wrap m-auto">
        <div
          className={
            (data.img
              ? `md:w-[50%] text-center items-center ${
                  data.order ? "md:order-1" : ""
                } `
              : "") +
            " flex-col flex justify-center md:items-start md:text-left "
          }
        >
          <h1
            className={
              "text-4xl md:text-[56px] leading-tight font-medium mb-7 " +
              (style ? style : "")
            }
          >
            {data.title}
          </h1>
          <p className="text-base text-left">{data.desc}</p>
          {data.btn && (
            <div className="before:content-[''] before:block before:w-[1.5em] before:my-[2em] before:h-[1px] before:bg-[#6e108d] before:m-auto before:md:mx-0">
              <Button
                text={data.btn}
                style={"!p-[13.6px_40.8px] !bg-[#6e108d] text-[1.2rem]"}
              />
            </div>
          )}
        </div>
        {data.img && (
          <div
            className={
              "w-full md:max-w-[50%] flex justify-center items-center mt-[1.6em] md:mt-0 m-auto md:m-0 " +
              (padding == true ? "md:px-[5%]" : "")
            }
          >
            <img src={data.img} alt="" />
          </div>
        )}
      </div>
    </div>
  );
};

export default AcademyHero;
