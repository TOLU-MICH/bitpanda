import React from "react";
import Button from "./Button";

const Card = ({ data, half = false, style = "bg-white", color, text }) => {
  return (
    <section
      className={
        `px-[15px] ` + (half == true ? "max-w-full md:max-w-[50%] w-full" : "")
      }
    >
      <section
        className={
          ` ${style} w-full flex flex-wrap rounded-3xl my-5 px-[15px] ` +
          (half == true ? "flex-col text-white" : "")
        }
      >
        <div
          className={
            " w-full p-[25px_20px] md:p-[40px_30px] " +
            (half == true ? "max-w-full" : "md:max-w-[50%]")
          }
        >
          {data.subTitle && (
            <p className="text-sm md:text-base mb-[15px] bg-gray-300 rounded-lg w-fit px-3 bg-opacity-40">
              {data.subTitle}
            </p>
          )}
          {data.title && (
            <h2 className="text-4xl leading-[3rem] md:text-5xl font-bold mb-5 md:leading-[4rem]">
              {data.title}
            </h2>
          )}
          {data.desc && <p className="text-2xl leading-9 mb-6">{data.desc}</p>}
          <Button text={text ? text : "Read more"} style={color} />
        </div>
        {data.img && (
          <div
            className={" w-full  " + (half == true ? "" : " md:max-w-[50%] ")}
          >
            <img
              src={data.img}
              alt=""
              className={!data.desc && " md:h-[32rem] "}
            />
          </div>
        )}
      </section>
    </section>
  );
};

export default Card;
