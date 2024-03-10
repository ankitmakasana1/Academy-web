import React from "react";

import Sone from "../assets/images/facebook.svg";
import Stwo from "../assets/images/twitter.svg";
import Sthree from "../assets/images/google.svg";
import Sfour from "../assets/images/linked.svg";

const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-12">
              <div className="about">
                <h6>About Us</h6>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not onlyafive centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged. It was popularised in the 1960s with
                  the release of Letraset sheets containing Lorem Ipsum
                  passages, and more recently with desktop publishing software
                  like Aldus PageMaker including versions of Lorem Ipsum.
                </p>
              </div>
            </div>
            <div className="col-lg-2 col-md-2 col-sm-4">
              <h6>Quick Links</h6>
              <a className="links" href="/">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12.1289 15.1372C11.8752 15.391 11.4756 15.391 11.2219 15.1372C10.9767 14.892 10.9767 14.4839 11.2219 14.2393L15.821 9.64015L0.644444 9.64015C0.290663 9.64015 0.000322342 9.35895 0.000322342 9.00517C0.000322342 8.65139 0.290663 8.36104 0.644444 8.36104L15.821 8.36104L11.2219 3.77046C10.9767 3.51669 10.9767 3.10804 11.2219 2.86343C11.4756 2.60966 11.8752 2.60966 12.1289 2.86343L17.8169 8.55137C18.062 8.79656 18.062 9.20463 17.8169 9.44925L12.1289 15.1372Z"
                    fill="white"
                  />
                </svg>
                What We Do
              </a>
              <a className="links" href="/">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12.1289 15.1372C11.8752 15.391 11.4756 15.391 11.2219 15.1372C10.9767 14.892 10.9767 14.4839 11.2219 14.2393L15.821 9.64015L0.644444 9.64015C0.290663 9.64015 0.000322342 9.35895 0.000322342 9.00517C0.000322342 8.65139 0.290663 8.36104 0.644444 8.36104L15.821 8.36104L11.2219 3.77046C10.9767 3.51669 10.9767 3.10804 11.2219 2.86343C11.4756 2.60966 11.8752 2.60966 12.1289 2.86343L17.8169 8.55137C18.062 8.79656 18.062 9.20463 17.8169 9.44925L12.1289 15.1372Z"
                    fill="white"
                  />
                </svg>
                Who We Are
              </a>
              <a className="links" href="/">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12.1289 15.1372C11.8752 15.391 11.4756 15.391 11.2219 15.1372C10.9767 14.892 10.9767 14.4839 11.2219 14.2393L15.821 9.64015L0.644444 9.64015C0.290663 9.64015 0.000322342 9.35895 0.000322342 9.00517C0.000322342 8.65139 0.290663 8.36104 0.644444 8.36104L15.821 8.36104L11.2219 3.77046C10.9767 3.51669 10.9767 3.10804 11.2219 2.86343C11.4756 2.60966 11.8752 2.60966 12.1289 2.86343L17.8169 8.55137C18.062 8.79656 18.062 9.20463 17.8169 9.44925L12.1289 15.1372Z"
                    fill="white"
                  />
                </svg>
                Careers
              </a>
              <a className="links" href="/">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12.1289 15.1372C11.8752 15.391 11.4756 15.391 11.2219 15.1372C10.9767 14.892 10.9767 14.4839 11.2219 14.2393L15.821 9.64015L0.644444 9.64015C0.290663 9.64015 0.000322342 9.35895 0.000322342 9.00517C0.000322342 8.65139 0.290663 8.36104 0.644444 8.36104L15.821 8.36104L11.2219 3.77046C10.9767 3.51669 10.9767 3.10804 11.2219 2.86343C11.4756 2.60966 11.8752 2.60966 12.1289 2.86343L17.8169 8.55137C18.062 8.79656 18.062 9.20463 17.8169 9.44925L12.1289 15.1372Z"
                    fill="white"
                  />
                </svg>
                Contact Us
              </a>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-8">
              <div className="contact">
                <h6>Contact Us</h6>
                <h5>Company Name</h5>
                <p>2240 Warner Street, Fort Lauderdale, Florida, UAS</p>
                <p>Phone: +1 1234 5678</p>
                <p>Email: support@domain.com | info@domain.com</p>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <div className="copyright">
        <div className="container">
          <div className="bg">
            <p>Copyright © 2022 by Company Name | All rights reserved.</p>
            <div className="social">
              <img src={Sone} alt="" />
              <img src={Stwo} alt="" />
              <img src={Sthree} alt="" />
              <img src={Sfour} alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
