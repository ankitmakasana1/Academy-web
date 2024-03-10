import React from "react";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import TestiOne from "../assets/images/testimonial-one.png"
import TestiTwo from "../assets/images/testimonial-two.png"
import TestiThree from "../assets/images/testimonial-three.png"
import { TestimonialCard } from "./TestimonialCard";

const Testimonial = () => {

    const settings = {
        dots: true,
        arrows: false,
        infinite: true,
        speed: 300,
        autoplay: true,
        autoplaySpeed: 20000,
        slidesToShow: 3,
        slidesToScroll: 3,
        centerMode: false,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              infinite: true,
              dots: true,
            },
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              initialSlide: 1,
            },
          },
        ],
      };


  return (
    <div className="testimonial-wrp">
      <div className="container">
        <div className="title-wrp">
          <span className="line fir"></span>
          <span className="line sec"></span>
          <div className="text">
            <h6>What our client says?</h6>
            <h4>Client Testimonial</h4>
          </div>
        </div>
        <div className="testimonial-card-wrp">
            <Slider {...settings}>
                <TestimonialCard TestiImage={TestiOne} Review="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book." ReviewName="~ Chris Hemsworth" SmallText="Creative Director Of Bonzai Creative Solutions"/>
                <TestimonialCard TestiImage={TestiTwo} Review="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book." ReviewName="~ Chris Hemsworth" SmallText="Creative Director Of Bonzai Creative Solutions"/>
                <TestimonialCard TestiImage={TestiThree} Review="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book." ReviewName="~ Chris Hemsworth" SmallText="Creative Director Of Bonzai Creative Solutions"/>
                <TestimonialCard TestiImage={TestiOne} Review="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book." ReviewName="~ Chris Hemsworth" SmallText="Creative Director Of Bonzai Creative Solutions"/>
                <TestimonialCard TestiImage={TestiTwo} Review="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book." ReviewName="~ Chris Hemsworth" SmallText="Creative Director Of Bonzai Creative Solutions"/>
                <TestimonialCard TestiImage={TestiThree} Review="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book." ReviewName="~ Chris Hemsworth" SmallText="Creative Director Of Bonzai Creative Solutions"/>
            </Slider>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
