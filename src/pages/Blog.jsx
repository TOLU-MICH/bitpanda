import React from "react";
import ColoredImage from "../component/academy/ColoredImage";
import blog from "../assets/academy/blgo.png";
import blogImg from "../assets/academy/b-1.png";
import Path from "../component/academy/Path";

const data = ["Beginner", "lesson1", "10 min"];

const a = [
  "Money is everything that can be used as a medium of exchange",
  "Money had many different forms throughout human history",
  "Before the invention of money, people used barter systems (though more recent research suggests that money developed after the invention of debt)",
  "Bitcoin is the biggest financial innovation since the introduction of credit cards in the 1950s and the dawn of online banking in the late 1990s",
];

const b = [
  "What is money?",
  "Why do we need money?",
  "Some characteristics of money",
  "Why is something considered valuable?",
];

const c = [
  {
    title: b[0],
    id: b[0],
    paragraph: [
      "People have been exchanging things with each other since the dawn of humankind. First there were barter systems. People exchanged items that they attributed equal intrinsic value to, as in “I give you this animal hide and you give me that sharp stone you found.” This system works quite well for exchanges between two people, but is usually too complex as soon as more people, more goods and longer distances are involved.",
      "Also, a barter system may also reach its limits when only two people are involved in the exchange. Let’s say you have a large amount of berries and want to exchange them for an animal hide. If both parties want and need the item offered by the other, there is a deal. But if there is no coincidence of wants, you have a problem.",
    ],
  },
  {
    title: b[1],
    id: b[1],
    paragraph: [
      "Furthermore, the problem with an exchange system like barter is that it’s not very efficient. To fix this predicament, human history has seen lots of manifestations of the idea of exchanging one commodity for another: animal hides, salt, sea shells, gemstones, grain and precious metals, among other different commodities, have all been used to exchange one valuable item for another.",
      "On the other hand, what happens if the other party already has enough berries or doesn’t need an animal hide? To tackle this problem, people invented money. ",
      "At this point, we are not talking about coins or paper money as we know it, but anything that is considered a store of value which all parties involved in the exchange agree on can be exchanged for another item thought to be valuable. ",
    ],
    quote:
      "Money is a useful tool that can be used to exchange value between people. Broken down to its core, it’s best described as a “medium of exchange.”",
    paragraph2: [
      "Money is an item or entity that can be verified and is widely accepted as payment. ",
    ],
  },
  {
    title: b[2],
    id: b[2],
    subTitle: [
      {
        title: "Medium of Exchange",
        paragraph: [
          "Money is a medium of exchange for commercial transactions involving goods, services and labor. It is very useful to have a designated medium of exchange for transactions that is commonly accepted. ",
        ],
      },
      {
        title: "Store of Value",
        paragraph: [
          "For later use, money can be used as a store of value for use in transactions until it is needed. A prerequisite for this is trust that money retains its value. ",
        ],
      },
      {
        title: "Portability",
        paragraph: [
          "Money can be easily moved around and exchanged with other currencies. For instance, the people on the island of Yap in Micronesia used limestones as official currency before they started using US Dollars. One of these stones would often weigh more than a car, making moving them very challenging. For this reason, they were usually stored in one place even if they changed ownership and people had to remember who was the actual present owner. ",
        ],
      },
      {
        title: "Durability",
        paragraph: [
          "Money is immutable and durable. Thanks to its sturdiness, it can be used until new supply is printed to replace the old supply. ",
        ],
      },
      {
        title: "Divisibility",
        paragraph: [
          "Money is divisible - it is available in smaller increments for the exchange of things of varying values. Imagine if you wanted to buy a pack of gum but you could only use a 50 note - it would definitely complicate the transaction.",
        ],
      },
      {
        title: "Verifiability",
        paragraph: [
          "Counterfeit money is probably as old as money. In order to accept and trust money, it has to be impossible to forge and easily identified as being legitimate. Counterfeit money leads to the reduction of buying power of real money.",
        ],
      },
      {
        title: "Fungibility",
        paragraph: [
          "Individual units of money have to be essentially interchangeable, meaning that that two equal units have to be equivalent and indistinguishable. This also relates to divisibility. Stores of value that don’t meet these criteria are termed “non-fungible.” The most popular example of something that can be traded like money that’s non-fungible is a collectible, like a piece of art.",
        ],
      },
    ],
  },
  {
    title: b[3],
    id: b[3],
    paragraph: [
      "Sea shells, gemstones or even gold, basically have no intrinsic value apart from being pretty and shiny, or in the case of gold, being able to conduct electricity well. Yet over the course of thousands of years, people used such items as a means of exchange. They were valuable because people put trust into them.",
      "Intrinsic value in this context is the perceived value that is attributed to something. This value is perceived from its intrinsic, attributed value.",
      "Even today, this holds true for our most popular and most widely used currencies, such as the Euro and the US Dollar. They are both printed by central banks and get their value from being backed by governments that people trust. ",
    ],
    quote:
      "All in all, most currencies and money derive their value from the fact that people think they are valuable. People who use them trust in their value.",
    paragraph2: [
      "Trust in money and other types of assets is established in various ways.",
      "Gold and silver are trusted because throughout history, they have been perceived as valuable and been used to produce items of value thanks to their decorative properties.",
      "Fiat currencies - issued by government decree - are trusted thanks to their history of being perceived as valuable, because they are backed by governments and issued by central banks.",
      "If people were to lose their trust in even one of the factors that establish this trust, value is bound to decrease. For instance, hyperinflation (massive inflation) among a few other things, is usually triggered by citizens of a nation losing their confidence in a currency.",
    ],
  },
];

const disclaimer = [
  {
    title: "DISCLAIMER",
    paragraph: [
      "This article does not constitute investment advice, nor is it an offer or invitation to purchase any crypto assets.",
      "This article is for general purposes of information only and no representation or warranty, either expressed or implied, is made as to, and no reliance should be placed on, the fairness, accuracy, completeness or correctness of this article or opinions contained herein.",
      "Some statements contained in this article may be of future expectations that are based on our current views and assumptions and involve uncertainties that could cause actual results, performance or events which differ from those statements.",
      "None of the Bitpanda GmbH nor any of its affiliates, advisors or representatives shall have any liability whatsoever arising in connection with this article.",
      "Please note that an investment in crypto assets carries risks in addition to the opportunities described above.",
    ],
  },
];

const Blog = () => {
  return (
    <section className="m-auto">
      <article className="max-w-screen-xl m-auto md:flex-[0_0_70%] px-[15px]">
        <div className="md:pb-24">
          <div className=" h-[40vh]  min-h-[300px] max-h-[600px] md:block hidden z-0 relative">
            {" "}
            <ColoredImage img={blog} color={"#BBFFB2"} />
          </div>
          <header className="z-20 md:mx-12 md:px-16 pt-16 bg-white rounded-lg -mt-[2.025em] flex flex-wrap relative">
            <Path data={data} />
            <h1 className="text-4xl md:text-[56px] my-[0.5em] font-medium leading-tight">
              The beginnings of money and the importance of trust
            </h1>
          </header>
          <div className="mx-[15px]">
            <div className="md:px-[75px] md:mb-10 text-xl">
              <p className="mb-[1.5em]">
                Before we dive into the world of cryptocurrencies, let us take a
                step back and learn some basics about the concept of money.
              </p>
              <ul className="list-disc mb-[1.5em] ">
                {a.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
              <p className="font-medium">
                In this article, you will learn the fundamentals of money.
              </p>
            </div>
            <div className="md:px-[75px] md:mb-14 text-xl">
              <nav>
                <h3 className="text-2xl font-bold mb-[0.5em]">Contents</h3>
                <ul>
                  {b.map((item, index) => (
                    <li
                      key={index}
                      className="text-gray-400 hover:text-gray-900 cursor-pointer"
                    >
                      <a href={`#${item}`}>{item}</a>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
            <div className="md:px-[75px] md:mb-10 text-xl">
              <img src={blogImg} alt="" />
            </div>
            <div className="md:px-[75px] md:mb-10 text-xl text-gray-600">
              <WriteUp data={c} />
            </div>
            <div className="md:px-[75px] md:mb-10 text-xl text-gray-400">
              <WriteUp data={disclaimer} />
            </div>
          </div>
        </div>
      </article>
      <footer className="p-[6em_20px] text-center w-full bg-[#8914b0]">
        <section className="py-6 md:py-20 px-[15px] md:max-w-[46em] m-auto">
          <h3 className="text-white text-xl md:text-center ">Next lesson</h3>
          <h1 className="font-medium text-3xl md:text-5xl md:text-center mb-5 text-white">
            What's the difference between a cryptocurrency like Bitcoin and fiat
            money?
          </h1>
        </section>
      </footer>
    </section>
  );
};

const WriteUp = ({ data }) => {
  return (
    <>
      {data.map((item, index) => (
        <>
          <h3
            className="text-3xl font-medium mt-[1.8em] mb-[0.45em]"
            id={item.id}
            key={index}
          >
            {item.title}
          </h3>
          {item.subTitle &&
            item.subTitle.map((item, index) => (
              <>
                {console.log(item)}
                <h4 className="text-xl font-medium my-[.5em]" key={index}>
                  {item.title}
                </h4>
                <ParagraphIterator data={item.paragraph} />
              </>
            ))}

          <ParagraphIterator data={item.paragraph} />

          {item.quote && (
            <>
              <blockquote
                className="border-l-2 border-l-[#8914b0] p-[1.2em] mb-[1.35em] md:text-[21px] text-gray-500"
                key={index}
              >
                {item.quote}
              </blockquote>

              <ParagraphIterator data={item.paragraph2} />
            </>
          )}
        </>
      ))}
    </>
  );
};

const ParagraphIterator = ({ data }) => {
  return (
    data &&
    data.map((item, index) => (
      <p className="mb-[1.3em] text-lg" key={index}>
        {item}
      </p>
    ))
  );
};

export default Blog;
