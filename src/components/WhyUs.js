import React from "react";
import WhyUsImg from "../assets/images/whyus.png";
import { WhyUsCard } from "./WhyUsCard";

const WhyUs = () => {
  return (
    <div className="why-us">
      <div className="container">
        <div className="row">
          <div className="col-lg-5 col-md-5">
            <div className="image">
              <img src={WhyUsImg} alt="why-us" />
            </div>
          </div>
          <div className="col-lg-7 col-md-7">
            <div className="details">
              <div className="title-wrp color">
                <span className="line fir"></span>
                <span className="line sec"></span>
                <div className="text">
                  <h6>Why Us?</h6>
                  <h4>
                    20+ Years of Experience in Financial & Business Audit
                    Services
                  </h4>
                </div>
              </div>
              <div className="row">
                <div className="col-sm-6">
                  <WhyUsCard Title="Over a decade of experience" Text="Immense technical know-how, hardwork and persistence"/>
                </div>
                <div className="col-sm-6">
                  <WhyUsCard Title="7 Inspiring leaders as partners" Text="Channelizing years of experience in directing the team"/>
                </div>
                <div className="col-sm-6">
                  <WhyUsCard Title="Experienced team of profess..." Text="Abstain from conduct that might bring discredit to the profession"/>
                </div>
                <div className="col-sm-6">
                  <WhyUsCard Title="Sound knowledge of financia..." Text="Keep organization up-to-date with best business practice"/>
                </div>
                <div className="col-sm-6">
                  <WhyUsCard Title="Being impartial and free of a..." Text="Work according to certain technical and professional stand..."/>
                </div>
                <div className="col-sm-6">
                  <WhyUsCard Title="500+ satisfied happy clients" Text="Work according to certain technical and professional stand..."/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyUs;
