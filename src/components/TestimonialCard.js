import React from "react";

export const TestimonialCard = ({TestiImage, Review, ReviewName, SmallText}) => {
  return (
    <div className="testimonial-card">
      <img src={TestiImage} alt="testimonial-card-img" />
      <p>{Review}</p>
      <p className="theme">{ReviewName}</p>
      <p className="small">{SmallText}</p>
    </div>
  );
};
