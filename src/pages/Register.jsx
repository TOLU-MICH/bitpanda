import React from "react";
import { Link } from "react-router-dom";
import Password from "../component/Password";
import nextLogo from "../assets/logo.gif";

const Register = () => {
  return (
    <section className=" h-screen">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <img src={nextLogo} alt="" className="w-16" />
            <h1 className="text-center text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
              Sign in to your account
            </h1>
            <form method="POST" className="space-y-5">
              <div className="w-full  max-w-[400px]">
                <label
                  htmlFor="username"
                  className="block mb-2 text-sm font-medium text-gray-900 "
                >
                  Username:
                </label>
                <input
                  name="username"
                  type="text"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Your Username"
                />
              </div>
              <div className="w-full  max-w-[400px]">
                <label
                  htmlFor="Email"
                  className="block mb-2 text-sm font-medium text-gray-900 "
                >
                  Email:
                </label>
                <input
                  name="Email"
                  type="email"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Your Email"
                />
              </div>
              <Password label="Password" />

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
                        className="text-gray-500 dark:text-gray-300 hover:cursor-pointer"
                      >
                        Remember me
                      </label>
                    </div>
                  </div>

                  <Link href={"/auth/reset-password"}>
                    <p className="text-sm font-medium text-blue-600 hover:underline dark:text-blue-500">
                      Forgot password?
                    </p>
                  </Link>
                </div>

                <p className="text-sm font-light text-gray-500 dark:text-gray-400 mb-2">
                  Already have an account?{" "}
                  <Link href={"/auth/login"}>
                    <span className="font-medium text-blue-600 hover:underline dark:text-blue-500">
                      Log in
                    </span>
                  </Link>
                </p>

                <input
                  type="submit"
                  className="hover:cursor-pointer w-full bg-slate-900 rounded-md text-white text-bold px-3 py-1 md:py-2 text-base font-semibold leading-6 shadow-sm hover:bg-slate-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Register;
