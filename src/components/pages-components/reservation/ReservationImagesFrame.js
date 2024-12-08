import React from "react";
import styles from "./ReservationImagesFrame.module.css";
import Container from "../../grid-system/Container";

const containerStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
  gap: "12px",
};

const imgs = [
  {
    src: require("../../../assets/images/restaurant.jpg"),
    title: "Restaurant Exterior",
  },
  {
    src: require("../../../assets/images/restauranfood.jpg"),
    title: "Delicious Food",
  },
  {
    src: require("../../../assets/images/restaurant chef B.jpg"),
    title: "Chef at Work",
  },
];

const ReservationImagesFrame = () => {
  return (
    <section className={styles["images-frame"]}>
      <Container addStyle={containerStyle}>
        {imgs.map((img, idx) => (
          <div key={idx}>
            <img src={img.src} alt={img.title} />
          </div>
        ))}
      </Container>
    </section>
  );
};

export default ReservationImagesFrame;
