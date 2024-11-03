import React from "react";
import { Outlet } from "react-router-dom";
import HeaderTemplate from "./components/HeaderTemplate";
import FooterTemplate from "./components/FooterTemplate";
const HomeTemplate = () => {
  return (
    <>
      <HeaderTemplate />
      <Outlet />
      <FooterTemplate />
    </>
  );
};

export default HomeTemplate;
