import React from "react";

import { WorkFeatureCard } from "./WorkFeatureCard";
import Workimage from "../assets/images/work.png"
import WeOne from "../assets/images/Business.svg"
import WeTwo from "../assets/images/Market-t.svg"
import WeThree from "../assets/images/Mortgage.svg"
import WeFour from "../assets/images/Financial.svg"
import WeFive from "../assets/images/Risk.svg"
import WeSix from "../assets/images/Saving.svg"

const WorkFeature = () => {
  return (
    <div className="work-feature-wrp">
      <div className="container">
        <div className="title-wrp">
          <span className="line fir"></span>
          <span className="line sec"></span>
          <div className="text">
            <h6>We are Specilist</h6>
            <h4>Work Feature</h4>
          </div>
        </div>

        <div className="card-image-div">
          <div className="card-w-wrp">
            <WorkFeatureCard Image={WeOne} Title="Business Consulting" Paragraph="Lorem Ipsum is simply dummy text of the printing and type setting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s" />
            <WorkFeatureCard Image={WeFour} Title="Financial Consulting" Paragraph="Lorem Ipsum is simply dummy text of the printing and type setting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s" />
            <WorkFeatureCard Image={WeTwo} Title="Market Research" Paragraph="Lorem Ipsum is simply dummy text of the printing and type setting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s" />
            <WorkFeatureCard Image={WeFive} Title="Risk Management" Paragraph="Lorem Ipsum is simply dummy text of the printing and type setting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s" />
            <WorkFeatureCard Image={WeThree} Title="Mortgage Advisor" Paragraph="Lorem Ipsum is simply dummy text of the printing and type setting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s" />
            <WorkFeatureCard Image={WeSix} Title="Saving Money" Paragraph="Lorem Ipsum is simply dummy text of the printing and type setting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s" />
          </div>
          <div className="image-div">
            <img src={Workimage} alt=""/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkFeature;
