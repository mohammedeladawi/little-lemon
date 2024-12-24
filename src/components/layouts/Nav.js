import { List, ShoppingCartSimple, X } from "@phosphor-icons/react";
import React, { useRef, useState } from "react";
import styles from "./Nav.module.css";
import { NavLink } from "react-router-dom";

const Nav = () => {
  const navigationMenuRef = useRef(null);
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen((prevState) => !prevState);
    if (!menuOpen) {
      navigationMenuRef.current.classList.add("show");
    } else {
      navigationMenuRef.current.classList.remove("show");
    }
  };

  const closeMenu = () => {
    setMenuOpen(false);
    navigationMenuRef.current.classList.remove("show");
  };

  return (
    <>
      <button
        aria-label="Open navigation menu"
        aria-expanded={menuOpen}
        aria-controls="main-navigation"
        className={styles["burger-icon"]}
        onClick={toggleMenu}
      >
        <List size={32} weight="bold" />
      </button>
      <nav
        id="main-navigation"
        className={`${styles["nav-menu"]} ${menuOpen ? "show" : ""}`}
        ref={navigationMenuRef}
        role="menu"
      >
        <button
          aria-label="Close navigation menu"
          className={styles["close-menu"]}
          onClick={closeMenu}
        >
          <X size={32} weight="bold" />
        </button>
        <ul>
          <li role="menuitem" onClick={closeMenu}>
            <NavLink to="/">Home</NavLink>
          </li>
          <li role="menuitem" onClick={closeMenu}>
            <NavLink to="/about">About</NavLink>
          </li>
          <li role="menuitem">
            <NavLink to="/menu">Menu</NavLink>
          </li>
          <li role="menuitem" onClick={closeMenu}>
            <NavLink to="/reservations">Reservations</NavLink>
          </li>
          <li role="menuitem" onClick={closeMenu}>
            <NavLink to="/order-online">Order Online</NavLink>
          </li>
          <li role="menuitem" onClick={closeMenu}>
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
              aria-label="Shopping cart"
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
