import React from "react";
import Header from "../components/layouts/Header";
import Footer from "../components/layouts/Footer";
import { Outlet } from "react-router-dom";
import Nav from "../components/layouts/Nav";

const Default = () => {
  return (
    <>
      <Header>
        <Nav />
      </Header>
      <Outlet />
      <Footer />
    </>
  );
};

export default Default;
