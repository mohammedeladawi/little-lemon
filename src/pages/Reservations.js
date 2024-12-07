import React from "react";
import ReservationForm from "../components/pages-components/reservation/ReservationForm";

const Reservations = () => {
  const imgs = [
    {
      src: require("../assets/images/restaurant.jpg"),
      title: "Restaurant Exterior",
    },
    {
      src: require("../assets/images/restauranfood.jpg"),
      title: "Delicious Food",
    },
    {
      src: require("../assets/images/restaurant chef B.jpg"),
      title: "Chef at Work",
    },
  ];
  return (
    <main>
      <ReservationForm />
      <section className="images-frame">
        {imgs.map((img) => (
          <img src={img.src} alt={img.title} />
        ))}
      </section>
    </main>
  );
};

export default Reservations;
