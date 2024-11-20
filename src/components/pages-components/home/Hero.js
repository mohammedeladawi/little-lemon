import React from "react";
import restaurantFood from "../../../assets/images/restauranfood.jpg";
import Container from "../../grid-system/Container";
import styles from "./Hero.module.css";
import Button from "../../ui/buttons/Button";

const containerStyle = {
  display: "flex",
  justifyContent: "space-between",
  gap: "20px",
};

const Hero = () => {
  return (
    <section className={styles["hero-section"]}>
      <Container addStyle={containerStyle}>
        <div className={styles["hero-info"]}>
          <div className={styles.titles}>
            <h1>Little Lemon</h1>
            <h2>Chicago</h2>
          </div>
          <p className={styles.details}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <Button href="#">Reserve a Table</Button>
        </div>
        <div className={styles["hero-img"]}>
          <img src={restaurantFood} alt="A cheif come with food" />
        </div>
      </Container>
    </section>
  );
};

export default Hero;
