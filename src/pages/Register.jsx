import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import Password from "../component/Password";
import nextLogo from "../assets/logo.gif";
import { apiClientPublic } from "../utils";
import axios from "axios";

const Register = () => {
  const username = useRef();
  const email = useRef();
  const pswd = useRef();
  const confPswd = useRef();
  const [data, setData] = useState();

  function notification(text) {
    const Toast = Swal.mixin({
      toast: true,
      position: "top-end",
      showConfirmButton: false,
      timer: 1000,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.onmouseenter = Swal.stopTimer;
        toast.onmouseleave = Swal.resumeTimer;
      },
    });
    Toast.fire({
      icon: "error",
      title: text,
    });
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    const psw = pswd.current.value;
    const confPsw = confPswd.current.value;
    const user = username.current.value;
    const userEmail = email.current.value;

    const credentials = {
      username: user,
      email: userEmail,
      password1: psw,
      password2: confPsw,
    };

    if (psw.length >= 8 && confPsw.length >= 8) {
      const data = await apiClientPublic.post(`registration/`, credentials);
      console.log(data);
      data.status === 400 && setData(data.data);
    } else {
      notification("password must contain at least 8 characters.");
    }
  };
  return (
    <section className="md:h-screen">
      <div className="flex flex-col items-center justify-center px-6 py-8 m-auto md:h-screen lg:py-0 w-full">
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <Link to={"/"}>
              <img src={nextLogo} alt="" className="w-16" />
            </Link>
            <h1 className="text-center text-lg font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
              create an account with us today
            </h1>
            <form method="POST" className="space-y-5" onSubmit={handleSubmit}>
              <div className="w-full  max-w-[400px]">
                <label
                  htmlFor="username"
                  className="block mb-2 text-base font-bold text-gray-900 "
                >
                  Username:
                </label>
                <input
                  name="username"
                  type="text"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Your Username"
                  ref={username}
                />
                {data && data.username && (
                  <p className="text-sm text-red-500 pl-3">
                    {data.username[0]}
                  </p>
                )}
              </div>
              <div className="w-full  max-w-[400px]">
                <label
                  htmlFor="Email"
                  className="block mb-2 text-base font-bold text-gray-900 "
                >
                  Email:
                </label>
                <input
                  name="Email"
                  type="email"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Your Email"
                  ref={email}
                  required
                />
                {data && data.email && (
                  <p className="text-sm text-red-500 pl-3">{data.email[0]}</p>
                )}
              </div>
              <Password label="Password" pswdRef={pswd} />
              {data && (data.password1 || data.password2) && (
                <p className="text-sm text-red-500 pl-3">
                  {data.password1[0] || data.password2[0]}
                </p>
              )}
              <Password label="Confirm password" pswdRef={confPswd} />

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

                  <Link>
                    <p className="text-sm font-medium text-blue-600 hover:underline dark:text-blue-500">
                      Forgot password?
                    </p>
                  </Link>
                </div>

                <p className="text-sm font-light text-gray-500 dark:text-gray-400 my-4">
                  Already have an account?{" "}
                  <Link to={"/auth/login"}>
                    <span className="font-medium text-[inherit] text-blue-600 hover:underline dark:text-blue-500">
                      Log in
                    </span>
                  </Link>
                </p>

                <input
                  type="submit"
                  className="hover:cursor-pointer w-full bg-slate-900 rounded-md text-white text-bold px-3 py-2 text-base font-semibold leading-6 shadow-sm hover:bg-slate-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
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
