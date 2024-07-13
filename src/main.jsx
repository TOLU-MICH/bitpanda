import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/HomePage.jsx";
import Blog from "./pages/Blog.jsx";
import Academy from "./pages/Academy.jsx";
import Security from "./pages/Security.jsx";
import Login from "./pages/Login.jsx";
import Register from "./pages/Register.jsx";
import DashBoard from "./pages/DashBoard.jsx";
import Modaler from "./component/dashboard/Modaler.jsx";
import Wallet from "./pages/Wallet.jsx";
import Navigation from "./component/navigation/Navigataion.jsx";

const router = createBrowserRouter([
  {
    path: "",
    element: <Navigation />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "blog/",
        element: <Blog />,
      },
      {
        path: "academy/",
        element: <Academy />,
      },
      {
        path: "security/",
        element: <Security />,
      },
      {
        path: "auth/login/",
        element: <Login />,
      },
      {
        path: "auth/register/",
        element: <Register />,
      },
      {
        path: "dashboard/",
        element: <DashBoard />,
      },
      { path: "dashboard/wallet/", element: <Wallet /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
