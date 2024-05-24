import React, { useRef, useState } from "react";

import avatar from "../../assets/dashboard/avatar.svg";

import logo from "../../assets/logo.gif";
import { Link } from "react-router-dom";
import bar from "../../assets/dashboard/bar.svg";

const data = [
  { label: "First name" },
  { label: "Last name" },
  { label: "Username" },
  { label: "Email", type: 0 },
  { label: "Password", type: 1 },
  { label: "Confirm password", type: 1 },
];

const type = ["email", "password"];

const SideBar = () => {
  const [user, setUser] = useState("User");
  const [active, setActive] = useState(0);
  const [openNav, setOpenNav] = useState(false);

  const sidebarRef = useRef();

  React.useEffect(() => {
    const handleOutsideClick = (event) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        setOpenNav(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  const nav = ["Profile", "Wallet"];

  return (
    <section className="flex w-full h-full">
      <ul className="flex justify-between items-center md:hidden w-full bg-black fixed top-0 py-4">
        <li className="py-[9px] px-[3px]">
          <div class="w-20">
            <img src={logo} alt="" />
          </div>
        </li>
        <li className="py-[9px] px-[3px]" onClick={() => console.log("object")}>
          <button className="" onClick={() => setOpenNav(!openNav)}>
            <img src={bar} alt="" className="" />
          </button>
        </li>
      </ul>

      <aside
        className={
          "w-[70%] absolute transition-transform lg:relative lg:w-[25%] xl:w-[15%] h-full bg-black text-white lg:!translate-x-0 " +
          (openNav == false ? "-translate-x-full" : "")
        }
        ref={sidebarRef}
      >
        <div className="flex items-center gap-4 font-bold p-[30px] mt-20">
          <div className="rounded-full p-2 bg-gray-50">
            <img src={avatar} alt="" className="w-7" />
          </div>
          Hi {user}
        </div>
        <ul>
          {nav.map((item, index) => (
            <li
              className={
                "py-4 text-xl font-bold text-center relative p-[30px] cursor-pointer " +
                (index == active ? "active" : "")
              }
              key={index}
              onClick={() => setActive(index)}
            >
              {index == 1 ? <Link to={"/dashboard/wallet"}>{item}</Link> : item}
            </li>
          ))}
        </ul>
      </aside>

      <section className="w-full lg:h-full flex mt-28 lg:mt-0 lg:justify-center flex-col lg:items-center">
        <section className="w-full h-fit flex flex-wrap justify-around items-center lg:max-w-[768px] gap-y-6">
          {data.map((item, index) => (
            <div className="w-full  max-w-[300px] h-fit" key={index}>
              <label
                htmlFor="username"
                className="block mb-2 text-sm font-medium text-gray-900 "
              >
                {item.label}:
              </label>
              <input
                name="username"
                type={item.type ? type[item.type] : "text"}
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:border-gray-600  dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder={
                  item.type && item.label == 1
                    ? item.label
                    : `your ${item.label}`
                }
              />
            </div>
          ))}
        </section>
        <button className="bg-gray-900 p-2 w-fit text-white rounded-xl mt-5 ml-[5%] font-bold px-10">
          Submit
        </button>
      </section>
    </section>
  );
};

export default SideBar;
