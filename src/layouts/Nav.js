import { List, X } from "@phosphor-icons/react";
import React, { useRef } from "react";
import styles from "./Nav.module.css";

const Nav = () => {
  const navigationMenuRef = useRef(null);
  return (
    <>
      <div
        className={styles["burger-icon"]}
        onClick={() => navigationMenuRef.current.classList.add("show")}
      >
        <List size={32} weight="bold" />
      </div>
      <nav className={styles["nav-menu"]} ref={navigationMenuRef}>
        <div
          className={styles["close-menu"]}
          onClick={() => navigationMenuRef.current.classList.remove("show")}
        >
          <X size={32} weight="bold" />
        </div>
        <ul>
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#menu">Menu</a>
          </li>
          <li>
            <a href="#reservation">Reservations</a>
          </li>
          <li>
            <a href="#order-online">Order Online</a>
          </li>
          <li>
            <a href="#login">Login</a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Nav;
