import React from "react";
import logo from "../../assets/images/Logo.svg";
import Container from "../grid-system/Container";

const containerStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  gap: "20px",
};

const Header = ({ children }) => {
  return (
    <header>
      <Container addStyle={containerStyle}>
        <img
          className="logo"
          style={{ width: "195px" }}
          src={logo}
          alt="Header logo"
        />
        {children}
      </Container>
    </header>
  );
};

export default Header;
