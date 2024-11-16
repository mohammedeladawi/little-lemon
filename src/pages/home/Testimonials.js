import React from "react";
import TestimonialsCard from "./cards/TestimonialsCard";
import Container from "../../components/grid-system/Container";
import styles from "./Testimonials.module.css";

const reviews = [
  {
    name: "Mark",
    avatarSrc: require("../../assets/images/reviewer_1.jpg"),
    rating: 5,
    reviewText: "The best!",
  },
  {
    name: "Matilda",
    avatarSrc: require("../../assets/images/reviewer_2.jpg"),
    rating: 3,
    reviewText: "Liked it",
  },
  {
    name: "Nahla",
    avatarSrc: require("../../assets/images/reviewer_3.jpg"),
    rating: 4,
    reviewText: "Delicious!",
  },
  {
    name: "Noah",
    avatarSrc: require("../../assets/images/reviewer_4.jpg"),
    rating: 5,
    reviewText: "Amazing!",
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
          {reviews.map((review, index) => (
            <TestimonialsCard
              key={index}
              rating={review.rating}
              avatarSrc={review.avatarSrc}
              reviewerName={review.name}
              reviewText={review.reviewText}
            />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Testimonials;
