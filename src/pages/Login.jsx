import React, { useRef } from "react";
import { Link } from "react-router-dom";
import Password from "../component/Password";
import nextLogo from "../assets/logo.gif";

import Glogo from "../assets/GoogleLogo.svg";
import { apiClientPublic } from "../utils";

const Login = () => {
  const user = useRef();
  const email = useRef();
  const password = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = await apiClientPublic.post("login/", {
      username: user.current.value,
      email: email.current.value,
      password: password.current.value,
    });

    console.log(data);
  };

  return (
    <section className=" h-screen">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <img src={nextLogo} alt="" className="w-16" />
            <h1 className="text-center text-lg font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
              Sign in to your account
            </h1>
            <form method="POST" className="space-y-5" onSubmit={handleSubmit}>
              <div className="w-full  max-w-[400px]">
                <label
                  htmlFor="username"
                  className="block mb-2 text-sm font-bold text-gray-900 "
                >
                  Username:
                </label>
                <input
                  name="username"
                  type="text"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-xs sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Your Email Or Username"
                  ref={user}
                />
              </div>
              <div className="w-full  max-w-[400px]">
                <label
                  htmlFor="username"
                  className="block mb-2 text-sm font-bold text-gray-900 "
                >
                  Email:
                </label>
                <input
                  name="username"
                  type="text"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-xs sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Your Email Or Username"
                  ref={email}
                />
              </div>
              <Password label="Password" pswdRef={password} />

              <div>
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-start ">
                    <div className="flex items-center h-5 ">
                      <input
                        id="remember"
                        aria-describedby="remember"
                        type="checkbox"
                        className="hover:cursor-pointer w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                      />
                    </div>
                    <div className="ml-3 text-sm ">
                      <label
                        htmlFor="remember"
                        className="text-gray-500 dark:text-gray-300 hover:cursor-pointer text-xs sm:text-sm"
                      >
                        Remember me
                      </label>
                    </div>
                  </div>

                  <Link href={"/auth/reset-password"}>
                    <p className="text-xs sm:text-sm font-medium text-blue-600 hover:underline dark:text-blue-500 ">
                      Forgot password?
                    </p>
                  </Link>
                </div>

                <p className="text-xs sm:text-sm font-light text-gray-500 dark:text-gray-400 my-4">
                  Don’t have an account yet?{" "}
                  <Link href={"/auth/register"}>
                    <span className="font-medium text-blue-600 hover:underline dark:text-blue-500">
                      Sign up
                    </span>
                  </Link>
                </p>

                <input
                  type="submit"
                  className=" hover:cursor-pointer w-full bg-slate-900 rounded-md text-white text-bold px-3 py-1 md:py-2 text-xs sm:text-sm font-semibold leading-6 shadow-sm hover:bg-slate-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
