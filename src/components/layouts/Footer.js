import React from "react";
import footerLogo from "../../assets/images/Asset 9@4x.png";
import Container from "../grid-system/Container";
import styles from "./Footer.module.css";

const containerStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fill, minmax(211px, 1fr))",
  gap: "35px",
};

const Footer = () => {
  return (
    <footer className={styles["footer-section"]}>
      <Container addStyle={containerStyle}>
        <img className={styles["logo"]} src={footerLogo} alt="Footer Logo" />
        {/* Quick Links */}
        <nav>
          <h4>Doormat Navigation</h4>
          <ul>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#menu">Menu</a>
            </li>
            <li>
              <a href="#reservations">Reservations</a>
            </li>
            <li>
              <a href="#order-online">Order Online</a>
            </li>
            <li>
              <a href="#login">Login</a>
            </li>
          </ul>
        </nav>
        {/* Contact Information */}
        <address>
          <h4>Contact Us</h4>
          <p>
            Email:
            <a href="mailto:info@littlelemon.com">info@littlelemon.com</a>
          </p>
          <p>
            Phone: <a href="tel:+1234567890">+1 (234) 567-890</a>
          </p>
        </address>
        {/* Social Media Links */}
        <nav>
          <h4>Social Media Links</h4>
          <ul>
            <li>
              <a href="https://facebook.com/littlelemon">Facebook</a>
            </li>
            <li>
              <a href="https://twitter.com/littlelemon">Twitter</a>
            </li>
            <li>
              <a href="https://instagram.com/littlelemon">Instagram</a>
            </li>
          </ul>
        </nav>
      </Container>
    </footer>
  );
};

export default Footer;
