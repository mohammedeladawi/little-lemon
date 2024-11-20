import React from "react";
import ImgA from "../../../assets/images/Mario and Adrian A.jpg";
import ImgB from "../../../assets/images/Mario and Adrian b.jpg";
import Container from "../../grid-system/Container";
import styles from "./About.module.css";

const containerStyle = {
  display: "flex",
  justifyContent: "space-between",
  gap: "20px",
  marginBottom: "100px",
};

const About = () => {
  return (
    <section className={styles["about-section"]}>
      <Container addStyle={containerStyle}>
        <div className={styles["about-info"]}>
          <div className={styles["titles"]}>
            <h1>Little Lemon</h1>
            <h2>Chicago</h2>
          </div>
          <p className={styles["details"]}>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit. Exercitation
            veniam consequat sunt nostrud amet. Amet minim mollit non deserunt
            ullamco est sit aliqua dolor do amet sint. Velit officia consequat
            duis enim velit mollit.
          </p>
        </div>
        <div className={styles["about-imgs"]}>
          <img src={ImgA} alt="Mario and Adrian" />
          <img src={ImgB} alt="Mario and Adrian" />
        </div>
      </Container>
    </section>
  );
};

export default About;
