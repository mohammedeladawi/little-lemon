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
        <img src={avatarSrc} className={styles["card-avatar"]} alt="Reviewer" />
        <h5 className={styles["reviewer-name"]}>{reviewerName}</h5>
      </div>

      <div className={styles["card-footer"]}>
        <p className={styles["card-review"]}>{reviewText}</p>
      </div>
    </div>
  );
};

export default TestimonialsCard;
