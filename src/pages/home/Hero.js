import React from "react";
import restaurantFood from "../../assets/images/restauranfood.jpg";
import Container from "../../components/grid-system/Container";
import styles from "./Hero.module.css";
import Button from "../../components/ui/Buttons/Button";

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
          <div className={styles.title}>
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
          <img src={restaurantFood} alt="A cheif come with food"></img>
        </div>
      </Container>
    </section>
  );
};

export default Hero;
