import React, { useState } from "react";

import AcademyHero from "../component/AcademyHero";
import hero from "../assets/security/hero.webp";
import SubHero from "../component/SubHero";

import security from "../assets/Secure.svg";
import trusted from "../assets/Trusted.svg";
import regulated from "../assets/Regulated.svg";
import community from "../assets/Community.svg";
import img1 from "../assets/security/img1.webp";
import img2 from "../assets/security/img2.webp";
import tick from "../assets/security/tick.svg";
import property from "../assets/security/property.png";
import Accordion from "../component/Accordion";

const data = {
  title: "Why your assets are safe with us",
  desc: "Customer safety is our first goal - this is how we approach security.",
  img: hero,
  order: "1",
};

const data2 = [
  {
    name: "+4,000,000",
    img: community,
    text: "users",
  },
  {
    name: "12",
    img: regulated,
    text: "European licences & registrations",
  },
  {
    name: "7.7k",
    img: trusted,
    text: "Trusted reviews",
  },
  {
    name: "All",
    img: security,
    text: "our funds are regularly validated",
  },
];

const data3 = [
  {
    title: "Financial Transparency",
    desc: "Not only are we the leading European crypto investment platform, we are also one of the most regulated. We believe in doing things the right way, not the easy way, which is why we choose to be fully transparent, to acquire licences that see us monitored by multiple financial market authorities, and to have our funds and business practices regularly validated by external parties.",
  },
  {
    title: "User data protection",
    desc: "Bitpanda only processes your personal data for the purposes permitted according to GDPR. We do not use personal data for automated decision-making, including profiling, and we have several security measures in place to make sure your data is safely stored and processed.",
  },
  {
    title: "Regulations, licences, registrations",
    desc: "The Bitpanda Group diligently follows European laws and regulations. We operate our businesses based on various VASP registrations, as well as MiFID II, E-Money and PSD II licences amongst all our core markets.",
  },
  {
    title: "Asset protection",
    desc: "We prioritise keeping your assets safe, incorporating multiple security measures to protect them from potential threats. Crypto assets are stored in highly-secure cold storage facilities that are examined by an external auditor. Your assets are yours.",
  },
  {
    title: "Advanced Encryption",
    desc: "Bitpanda infrastructure and systems are secured with the most modern encryption technologies and supported by our dedicated security teams.",
  },
  {
    title: "24/7 Coverage",
    desc: "As the markets are open 24/7, so are we. Our Operations, Security and Engineering teams operate on a 24/7 coverage model to respond to any changes within the markets.",
  },
];

const data4 = [
  {
    title: "Best-in-class security",
    desc: "Possessing internally maintained security programs is one thing, but having them measure up to industry standards and validating them by achieving best-in-class certifications is another. The latter is much more difficult and time-consuming, but if you want to be a safe and rigorously regulated company, it is necessary and worthwhile. Our ISO27001 certification proves we do it.",
    img: img1,
    order: 1,
  },
  {
    title: "Secure and regulated",
    desc: "We have attained the SOC 2 Type 1 report. This is a significant achievement that demonstrates our ongoing commitment to the highest security and compliance standards.",
    img: img2,
  },
];

const data5 = [
  {
    title: "Password Management",
    desc: "User passwords are stored using the most trusted and modern hashing algorithms. Nobody can read or decrypt them, including us.",
  },
  {
    title: "MFA",
    desc: "If activated by the user (highly recommended by Bitpanda) time-based one-time passwords and multi-factor authentication to defend against security threats and additional 2FA in case of user password compromise.",
  },
  {
    title: "KYC / AML",
    desc: "Robust KYC onboarding and verification procedures, and fully compliant with European regulation.",
  },
  {
    title: "Account Lock",
    desc: "Users are prompted via email to verify every password reset request and to freeze their account if the request was not initiated by them.",
  },
  {
    title: "Session Management",
    desc: "Bitpanda allows users to see which browsers and devices they are logged in from to control their account access.",
  },
  {
    title: "Account monitoring",
    desc: "Important notifications to the user to ensure overview of user account activity.",
  },
];

const data6 = [
  {
    title: "Infrastructure safeguards",
    desc: "We have a system of layered technical defences in place to safeguard our platform and to uphold the confidentiality, integrity and availability of our infrastructure. Additionally, we practise secure software development lifecycle in order to build our products",
  },
  {
    title: "Internal security measures",
    desc: "Our internal security teams ensure the day-to-day activities of our colleagues take place in a secure manner as part of a safe and controlled environment. We build and run our insider threat monitoring programme and regularly conduct training exercises to increase awareness of security topics across the organisation.",
  },
  {
    title: "Continuous security assessment",
    desc: "Routine assessments of our security controls and processes through exercises like penetration tests completed by reputable external parties, proactive internal threat hunting, as well as our public  ensure that we can prevent potential attacks and minimise risk.",
  },
];

const data7 = {
  title: "Bitpanda Custody ",
  desc: "Bitpanda Custody is the insured, user-friendly custodial wallet platform for institutional-grade security, automation and management of crypto assets across blockchains and DeFi.",
  order: 1,
};

const data8 = [
  {
    title: "Is Bitpanda safe?",
    desc: "We take our users’ safety very seriously. Security is a natural and foundational part of everything we do from developing and deploying code to building and running our platform.",
  },
  {
    title: "Is Bitpanda regulated?",
    desc: "We operate our businesses based on various VASP registrations, as well as MiFID II, E-Money and PSD II licences amongst all our core markets. The Bitpanda Group diligently follows European law and regulations, and Bitpanda Payments GmbH possesses a payment service provider licence under PSD2, recently becoming an E-Money Institute. Our stringent user verification processes are also fully compliant with AML5.",
  },
  {
    title: "Who owns my assets?",
    desc: "When you invest with Bitpanda, you do. You are the beneficial owner of your assets (crypto assets and metals) and we hold them in custody, as a trustee. It’s your investment, your assets - we just keep them safe. All assets are held in a highly-secure environment. As a result, if something goes wrong, you will not be treated as an unsecured creditor and you don’t risk losing your assets. Instead, you assert the right of separation under Austrian law. For Bitpanda Stocks we have implemented a pledge system and all underlyings are held with a licensed custodian for securities (please refer to our prospectus). So whether you want to move it, trade it, invest it or grow it; it’s your investment, your choice.",
  },
  {
    title:
      "Does Bitpanda really have all client assets (all Crypto assets, BCI, Bitpanda Stocks, ETFs & Commodities and Metals) backed 1:1?",
    desc: "Yes, all of our customers' assets are physically backed up 1:1 and are stored in a highly secure environment.",
  },
  {
    title: "Do we speculate with client assets at all?",
    desc: "No, we do not speculate with customers’ assets in any of the asset classes we offer to our customers (crypto assets, BCI, Bitpanda Stocks, ETFs & Commodities and Metals).",
  },
  {
    title:
      "Bitpanda operates as a trustee - what does that mean for our clients?",
    desc: "Bitpanda manages client assets as a trustee, the client remains the beneficial owner. But what does that mean?<br/> <br/>Bitpanda holds clients crypto assets as trustee under a legally binding trust agreement with its customers and therefore there is a legally binding separation between our own assets and those of our customers.<br/><br/>We do not speculate with customers’ assets we hold. <br/><br/>Customers have a right to separation and are not treated as unsecured creditors; therefore customers cannot lose their crypto assets in custody.",
  },
  {
    title:
      "How does ownership of the assets included in the crypto indices work?",
    desc: "Ownership works just like with other assets. You are acquiring each single asset and not a basket.",
  },
  {
    title: "Do we plan on integrating hardware wallet interoperability?",
    desc: "Thanks for your suggestion. We are working around the clock to improve our blockchain infrastructure, so our customers have all deposit/withdrawal options they need. Withdrawing or depositing to and from Bitpanda to your Ledger is already possible, by simply using your ERC-20 deposit/withdrawal address. A deeper integration is not planned right now, but we can consider it for the future. Hope this answers your question.",
  },
  {
    title: "What about 99% of BEST being in 3 wallets? Are funds safe?",
    desc: "We are the safe custodian for our users and our distribution of user funds within these wallets is distributed between our many BEST holders. <br/><br/>These funds are on Bitpanda wallets, as BEST is our ecosystem token and users benefit most from the loyalty program, when they are holding it on our platform.",
  },
  {
    title: "What does cold wallet storage mean? How does it work?",
    desc: "Bitpanda holds all assets of customers as a trustee and these are 100% backed by real assets and kept in a highly secure environment (warm and cold wallets). We do not speculate with our clients’ assets and they are never used as collateral.",
  },
  {
    title: "How does this work when Staking is involved?",
    desc: "With staking, we simply delegate the crypto assets, so the funds are always under our control.",
  },
];

const Security = () => {
  return (
    <section className="">
      <div className="bg-gray-200">
        <div className="max-w-screen-xl m-auto w-full">
          <AcademyHero data={data} style={"!font-bold"} />
        </div>
      </div>

      <div className="py-10 md:py-20">
        <SubHero data={data2} btn={false} />
      </div>

      <section className="max-w-screen-xl m-auto px-[15px]">
        <h1 className="font-bold text-3xl md:text-5xl md:text-center mb-10 ">
          Security at Bitpanda
        </h1>

        <div className="flex flex-wrap gap-3">
          {data3.map((item, index) => (
            <div
              className={
                "!text-white md:w-[49%] rounded-xl py-10 px-7 " +
                ((index % 2 != 0 && index != 3) || index == 2
                  ? "bg-[#27d17f]"
                  : "bg-black")
              }
            >
              <AcademyHero
                data={item}
                style={"!font-bold text-[22px] !text-left md:!text-[28px]"}
                key={index}
              />
            </div>
          ))}
        </div>

        <div className="py-20 md:py-32 flex flex-col gap-9 ">
          {data4.map((item, index) => (
            <AcademyHero
              data={item}
              key={index}
              style={"!font-bold text-[22px] !text-left md:!text-[28px] "}
              padding={false}
            />
          ))}
        </div>

        <div>
          <h1 className="font-bold text-4xl md:text-5xl md:text-center  md:mb-10 ">
            Keeping your account secure
          </h1>

          <div className="flex justify-center items-center gap-4 flex-wrap">
            {data5.map((item, index) => (
              <div className="pt-10 md:pt-20 flex md:w-[49%]" key={index}>
                <div className="rounded-full bg-[#27d17f] w-8 h-8 flex justify-center items-center">
                  <img src={tick} alt="" className="w-4" />
                </div>
                <AcademyHero
                  data={item}
                  style={
                    "!font-bold text-[28px] !text-left md:!text-[38px] !mb-4"
                  }
                  padding={false}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="pt-28 py-20">
        <section className="bg-gray-100 py-10 md:py-20">
          <h1 className="font-bold text-4xl md:text-5xl text-center mb-10 ">
            Platform security
          </h1>
          <div className="max-w-screen-xl m-auto flex justify-center gap-8 flex-wrap px-4">
            {data6.map((item, index) => (
              <div
                className="md:max-w-[30.98%] bg-white rounded-xl p-4 py-10 h-fit"
                key={index}
              >
                <AcademyHero
                  data={item}
                  padding={false}
                  style={"!text-3xl md:!text-4xl !font-bold"}
                />
              </div>
            ))}
          </div>
        </section>
      </section>

      <section className="max-w-screen-xl m-auto w-full px-4">
        <div className="bg-green-400 rounded-xl flex flex-wrap justify-center items-center mb-20 px-4 py-8 md:p-0">
          <img src={property} alt="" className="md:w-[50%] md:block hidden" />
          <div className="md:w-[50%]  text-white">
            <AcademyHero data={data7} style={"!font-bold !p-0 text-4xl"} />
          </div>
        </div>

        <div className="py-10 md:py-20 px-4">
          <h1 className="font-bold text-3xl md:text-5xl md:text-left mb-10 ">
            FAQ
          </h1>

          <Accordion data={data8} />
        </div>
      </section>
    </section>
  );
};

export default Security;
