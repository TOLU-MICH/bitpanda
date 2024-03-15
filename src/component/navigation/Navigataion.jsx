"use client";
import React, { useState } from "react";

import NavigationList from "./NavigationList";
import logo from "../../assets/logo.gif";
import bar from "../../assets/bar.svg";
import Button from "../Button";

const data = ["About ", "Security", "Press", "Career", "Partnership"];
const Navigation = () => {
  const [showNavList, setShowNavList] = useState(false);

  const handleClick = () => {
    setShowNavList(!showNavList);
  };

  return (
    <nav className="sticky top-0 z-50 duration-700 w-full bg-white">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a
          href="https://flowbite.com/"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <img src={logo} alt="Logo" className="w-36" />
        </a>
        <a
          className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse"
          href="/auth/register"
        >
          <span className="gap-5 flex">
            {/* <button
              type="button"
              className="text-white bg-gray-400 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center hidden md:block"
            >
              Login-in
            </button> */}
            <Button text="Log in" style={"md:!bg-gray-400 md:block hidden"} />
            <Button text="Sign-up" />
          </span>
          <button
            data-collapse-toggle="navbar-cta"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-cta"
            aria-expanded="false"
            onClick={() => handleClick()}
          >
            <span className="sr-only">Open main menu</span>
            <img src={bar} alt="" />
          </button>
        </a>

        <div
          className={
            "items-center justify-between w-full md:flex md:w-auto md:order-1 " +
            (showNavList == false && "hidden")
          }
        >
          <NavigationList list={data} />
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
