import React from "react";
import TestimonialsCard from "./cards/TestimonialsCard";
import Container from "../../grid-system/Container";
import styles from "./Testimonials.module.css";

const reviews = [
  {
    name: "Mark",
    avatarSrc: require("../../../assets/images/reviewer_1.jpg"),
    rating: 5,
    reviewText:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore ",
  },
  {
    name: "Matilda",
    avatarSrc: require("../../../assets/images/reviewer_2.jpg"),
    rating: 3,
    reviewText:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore ",
  },
  {
    name: "Nahla",
    avatarSrc: require("../../../assets/images/reviewer_3.jpg"),
    rating: 4,
    reviewText:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore ",
  },
  {
    name: "Noah",
    avatarSrc: require("../../../assets/images/reviewer_4.jpg"),
    rating: 5,
    reviewText:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore ",
  },
];

const containerStyle = { paddingTop: "50px", paddingBottom: "50px" };

const Testimonials = () => {
  return (
    <section className={styles["testimonials-section"]}>
      <Container addStyle={containerStyle}>
        <div className={styles["testimonials-header"]}>
          <h2>Testimonials</h2>
        </div>
        <div className={styles["testimonials-body"]}>
          {reviews.map((review, idx) => (
            <TestimonialsCard
              rating={review.rating}
              avatarSrc={review.avatarSrc}
              reviewerName={review.name}
              reviewText={review.reviewText}
              key={idx}
            />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Testimonials;
