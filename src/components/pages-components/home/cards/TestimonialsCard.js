import { Star } from "@phosphor-icons/react";
import React from "react";
import styles from "./TestimonialsCard.module.css";

const TestimonialsCard = ({ rating, avatarSrc, reviewerName, reviewText }) => {
  let stars = [];
  for (let i = 0; i < rating; i++) {
    stars.push(<Star size={22} weight="fill" />);
  }

  return (
    <div className={styles["card-testimomials"]}>
      <div className={styles["card-header"]}>
        <span className={styles["rating"]}>{stars}</span>
      </div>

      <div className={styles["card-body"]}>
        <p className={styles["review-text"]}>{reviewText}</p>
      </div>

      <div className={styles["card-footer"]}>
        <h5 className={styles["reviewer-name"]}>{reviewerName}</h5>
        <img
          src={avatarSrc}
          className={styles["reviewer-img"]}
          alt="Reviewer"
        />
      </div>
    </div>
  );
};

export default TestimonialsCard;
