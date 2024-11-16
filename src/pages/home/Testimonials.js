import React from "react";
import TestimonialsCard from "./cards/TestimonialsCard";
import Container from "../../components/grid-system/Container";

const Testimonials = () => {
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

  return (
    <section className="testimonials-section">
      <Container>
        <h2>Testimonials</h2>
        <div className="testimonials">
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
