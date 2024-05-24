import React from "react";
import viewPsw from "../assets/auth/eye.svg";
import hidePsw from "../assets/auth/eye-off.svg";

function Password({ label }) {
  const password = React.useRef(null);
  const [image, setImage] = React.useState(false);
  const [type, setType] = React.useState("password");

  const togglePassword = () => {
    if (type === "password") {
      setType("text");
      return true;
    } else {
      setType("password");
      return false;
    }
  };

  return (
    <div className="relative">
      <label
        htmlFor="password"
        className="block mb-2 text-sm font-medium text-gray-900"
      >
        {label || "Password"}
      </label>
      <input
        type={type}
        name="username"
        id="password"
        placeholder="••••••••"
        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5  dark:focus:ring-blue-500 dark:focus:border-blue-500"
        required={true}
        ref={password}
      />
      <img
        src={image ? hidePsw : viewPsw}
        alt=""
        className="w-5 h-5 absolute right-3 z-20 top-10 cursor-pointer"
        onClick={() => setImage(togglePassword())}
      />
    </div>
  );
}

export default Password;
