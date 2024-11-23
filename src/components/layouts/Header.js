import React from "react";
import logo from "../../assets/images/Logo.svg";
import Container from "../grid-system/Container";
import styles from "./Header.module.css";

const containerStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  gap: "20px",
};

const Header = ({ children }) => {
  return (
    <header className={styles["header-section"]}>
      <Container addStyle={containerStyle}>
        <div className={styles["img-container"]}>
          <img className={styles["logo"]} src={logo} alt="Header logo" />
        </div>
        {children}
      </Container>
    </header>
  );
};

export default Header;
