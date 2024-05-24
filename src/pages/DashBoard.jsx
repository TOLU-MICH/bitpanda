import React from "react";
import SideBar from "../component/dashboard/SideBar";

const DashBoard = () => {
  return (
    <div className="w-full h-screen">
      <SideBar />
      <outlet />
    </div>
  );
};

export default DashBoard;
