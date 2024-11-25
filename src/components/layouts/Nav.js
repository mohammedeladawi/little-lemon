import { List, ShoppingCartSimple, X } from "@phosphor-icons/react";
import React, { useRef } from "react";
import styles from "./Nav.module.css";
import { NavLink } from "react-router-dom";

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
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
          <li>
            <NavLink to="/menu">Menu</NavLink>
          </li>
          <li>
            <NavLink to="/reservations">Reservations</NavLink>
          </li>
          <li>
            <NavLink to="/order-online">Order Online</NavLink>
          </li>
          <li>
            <NavLink to="/login" className={styles["user-actions_login"]}>
              Login
            </NavLink>
          </li>
        </ul>
      </nav>
      <nav className={styles["user-actions"]}>
        <ul>
          <li>
            <NavLink
              to="/shopping-cart"
              className={styles["user-actions_cart"]}
            >
              <span className={styles["items-count"]}>0</span>
              <ShoppingCartSimple size={32} />
            </NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Nav;
