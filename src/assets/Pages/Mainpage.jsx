import React from "react";
import MainNavbar from "../Components/MainNavbar";
import Home from "../Components/Home";
import Footer from "../Components/Footer";
import Info from "../Components/Info";
import { Outlet } from "react-router-dom";

export default function Mainpage() {
  return (
    <>
      <MainNavbar />
      <Outlet />
      <Info />
      <Footer />
    </>
  );
}
