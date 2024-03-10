import React from "react";

export const WorkFeatureCard = ({Image, Title, Paragraph}) => {
  return (
    <div className="card-w">
      <div className="icon-text">
        <img src={Image} alt="work-future-icon" />
        <h6>{Title}</h6>
      </div>
      <p>{Paragraph}</p>
    </div>
  );
};
