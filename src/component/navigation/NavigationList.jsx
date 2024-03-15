import React, { Ref, RefObject } from "react";
import chevron from "../../assets/chevron.svg";
import btc from "../../assets/btc.svg";
import eth from "../../assets/eth.svg";

const investData = [
  { name: "Bitcoin", acronym: "BTC", img: btc },
  { name: "Ethereum", acronym: "ETH", img: eth },
];

const NavigationList = ({ list, style }) => {
  return (
    <ul
      className={
        "flex flex-col font-medium p-4 md:p-0 mt-4 rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-inherit " +
        style
      }
    >
      {list.map((item, index) => {
        return (
          <li className="group relative hover:after:content-[''] hover:after:h-[2px] hover:after:w-full hover:after:bg-[#27d17f] hover:after:absolute hover:after:bottom-0 hover:after:left-0 hover:after:rounded-full transition-all hover:cursor-pointer">
            {index === 0 ? (
              <section className="relative">
                <span className="flex gap-2">
                  {item}
                  <img src={chevron} alt="Drop down arrow" className="w-3" />
                </span>
                <div className="w-max h-max absolute shadow-lg p-8 -left-28 invisible group-hover:visible">
                  <h3 className="font-bold text-xl leading-8">Invest in:</h3>
                  <h4 className="font-semibold leading-8">CryptoCurrencies</h4>
                  <p className="mb-4 text-gray-400 leading-5">
                    Buy, sell & swap CryptoCurrencies
                  </p>
                  <ul className="space-y-4">
                    {investData.map((item, index) => (
                      <li className="flex gap-3 items-center" key={index}>
                        <img src={item.img} alt="bitcoin Logo" />
                        <p className="text-sm">{item.name}</p>
                        <p className="text-gray-500 font-bold text-base">
                          {item.acronym}
                        </p>
                      </li>
                    ))}
                  </ul>
                </div>
              </section>
            ) : (
              <a
                className="block py-2 px-3 md:p-0 text-black rounded md:bg-transparent "
                aria-current="page"
                key={index}
              >
                {item}
              </a>
            )}
          </li>
        );
      })}
    </ul>
  );
};

export default NavigationList;
