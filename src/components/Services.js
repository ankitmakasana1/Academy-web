import React from "react";
import SerImg from "../assets/images/Service.png";

import { ServicesBox } from "./ServicesBox";
import SvgOne from "../assets/images/Bank.svg";
import SvgTwo from "../assets/images/Calculator.svg";
import SvgThree from "../assets/images/Moneyag.svg";
import SvgFour from "../assets/images/Market.svg";
import SvgFive from "../assets/images/Clipboards.svg";
import SvgSix from "../assets/images/GST.svg";
import SvgSeven from "../assets/images/Accounting.svg";
import SvgEight from "../assets/images/Bag.svg";

const Services = () => {
  return (
    <div className="service-wrp">
      <div className="container">
        <div className="title-wrp">
          <span className="line fir"></span>
          <span className="line sec"></span>
          <div className="text">
            <h6>A general set of</h6>
            <h4>Our Services</h4>
          </div>
        </div>
        <div className="box-wrp">
          
            <div className="box-div">
              <ServicesBox
                Image={SvgOne}
                Title="Setting up business in India"
                Paragraph="India being one of the most accelerating countries in the world comprises of colossal human..."
              />
              <ServicesBox
                Image={SvgTwo}
                Title="Book Keeping "
                Paragraph="Whether you are launching a start-up in need of small business book keeping services or already..."
              />
              <ServicesBox
                Image={SvgThree}
                Title="Tax and Regulatory"
                Paragraph="As a chartered accountancy firm, we aim at guiding you throughout your tax compliances. Taxation is..."
              />
              <ServicesBox
                Image={SvgFour}
                Title="Company Formation Services & FDI"
                Paragraph="Starting a company or Setting up a business is not an easy task. Therefore, at AJSH we offer... "
              />
              <ServicesBox
                Image={SvgFive}
                Title="Auditing"
                Paragraph="An audit service is more than a formality; it is a necessity to protect your business and encourage it to..."
              />
              <ServicesBox
                Image={SvgSix}
                Title="GST Services"
                Paragraph="The Goods and Services Tax (GST) has consolidated a plethora of indirect taxes levied by the Centre..."
              />
            
              <ServicesBox
                Image={SvgSeven}
                Title="Accounting"
                Paragraph="This is our Public Company Accounting Oversight Board(PCAOB) registered service... "
              />
              <ServicesBox
                Image={SvgEight}
                Title="Business Process  Outsourcing"
                Paragraph="In today's business world it becomes quite a challenge for business enterprises to carry out..."
              />
            </div>
            
              
            
            <div className="box-img">
                <img className="service-img" src={SerImg} alt="Service-img"/>
            </div> 
          
        </div>
      </div>
    </div>
  );
};

export default Services;
