import React from "react";
import commodity from "../assets/invest/Commodities.png";
import crypto from "../assets/invest/crypto.png";
import etfs from "../assets/invest/ETFs.png";
import stock from "../assets/invest/stock.png";
import investMetals from "../assets/invest/Invest-Metals.png";
import investBCI from "../assets/invest/Invest-BCI.png";

const data = [
  {
    name: "Cryptocurrencies",
    desc: "Buy, sell & swap the cryptocurrencies you want anytime, anywhere.",
    img: crypto,
  },
  {
    name: "Stocks*",
    desc: "Invest in fractions of your favourite companies without committing to a whole share",
    img: stock,
  },
  {
    name: "ETFs*",
    desc: "Invest in fractions of your favourite ETFs* without committing to a whole share",
    img: etfs,
  },
  {
    name: "Commodities*",
    desc: "Fortify your portfolio with commodities* and shield it against inflation ",
    img: commodity,
  },
  {
    name: "Crypto Indices*",
    desc: "Auto-invest in the whole crypto market with a single click ",
    img: investBCI,
  },
  {
    name: "Precious Metals",
    desc: "Diversify your portfolio by investing in physically-backed precious metals ",
    img: investMetals,
  },
];

const InvestCard = () => {
  return (
    <section className="max-w-screen-xl m-auto">
      <section className="py-20 px-[15px]">
        <h3 className="text-gray-400 font-bold text-xl md:text-center mb-5">
          INVEST
        </h3>
        <h1 className="font-bold text-3xl md:text-5xl md:text-center ">
          All your investments. <br /> All on Bitpanda.
        </h1>
      </section>

      <section className="gap-5 flex flex-wrap p-[15px]">
        {data.map((item, index) => (
          <div
            className="bg-gray-200 md:max-w-[30.33338%] w-full rounded-xl"
            key={index}
          >
            <div className="p-[40px_30px]">
              <h3 className="text-4xl font-bold mb-5 ">{item.name}</h3>
              <p className="text-xl">{item.desc}</p>
            </div>
            <img src={item.img} />
          </div>
        ))}
      </section>
      <p className="text-center pt-5 pb-10 md:pb-20 px-[15px] text-sm text-gray-500">
        *Stocks and ETFs are underlying assets of the contracts offered as
        Bitpanda Stocks and are brought to you by Bitpanda Financial Services.
        For more information consult the prospectus at bitpanda.com. Capital at
        risk.
      </p>
    </section>
  );
};

export default InvestCard;
