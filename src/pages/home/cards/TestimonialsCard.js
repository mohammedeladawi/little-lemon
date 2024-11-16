import { Star } from "@phosphor-icons/react";
import React from "react";

const TestimonialsCard = ({ rating, avatarSrc, reviewerName, reviewText }) => {
  let stars = [];
  console.log(Star);
  // for (let i = 0; i < rating; i++) {
  //   stars.push(<Star size={32} />);
  // }

  return (
    <div className="card-testimomials">
      <div className="card-header">
        <span className="rating">{stars}</span>
      </div>

      <div className="card-body">
        <img src={avatarSrc} className="card-avatar" alt="Reviewer Image" />
        <h5 className="reviewer-name">{reviewerName}</h5>
      </div>

      <div className="card-footer">
        <p className="card-review">{reviewText}</p>
      </div>
    </div>
  );
};

export default TestimonialsCard;
