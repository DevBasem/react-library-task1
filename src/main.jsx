import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Mainpage from "./assets/Pages/Mainpage.jsx";
import Homeroute from "./assets/Pages/Homeroute.jsx";
import Aboutroute from "./assets/Pages/Aboutroute.jsx";
import Portfolio from "./assets/Components/Portfolio.jsx";
import Contactroute from "./assets/Pages/Contactroute.jsx";

const router = createBrowserRouter([
  {
    element: <Mainpage />,
    children: [
      {
        path: "react-library-task1/",
        element: <Homeroute />,
      },
      {
        path: "about",
        element: <Aboutroute />,
      },
      {
        path: "portfolio",
        element: <Portfolio />,
      },
      {
        path: "contact",
        element: <Contactroute />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(<RouterProvider router={router} />);
