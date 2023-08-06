import React from "react";
import Navbar1 from "../Navbar/Navbar1";
import Footer from "../Footer/Footer";
import { BsArrowRight } from "react-icons/bs";
import { Link } from "react-router-dom";
import Insight from "../Insight/Insight";

function Solution() {
  return (
    <div>
      <Navbar1 />
      <section>
        <div className="about_headline ">
          <h2 className="about_headline_title">our solutions</h2>
          <h5 className="about_headline_paragraph">
          Julius Baer offers a broad spectrum of tailored solutions for your investing, financing, and wealth planning needs.
          </h5>
        </div>
        <div className="about_links">
          <div className="link-txt">
            <Link to="/solution/wealth-planing">
              <span className="link-txt-space"> Wealth Planning</span>
              <span>
                <BsArrowRight />
              </span>
              <hr className="horizontal-line" />
            </Link>
          </div>

          <div className="link-txt">
            <Link to="/solution/investing">
              <span className="link-txt-space">Investing</span>
              <span>
                <BsArrowRight />
              </span>
              <hr className="horizontal-line" />
            </Link>
          </div>

          <div className="link-txt">
            <Link to="/solution/financing">
              <span className="link-txt-space">Financing</span>
              <span>
                <BsArrowRight />
              </span>
              <hr className="horizontal-line" />
            </Link>
          </div>
          <div className="link-txt">
            <Link to="/solution/additional-services">
              <span className="link-txt-space">Additional services</span>
              <span>
                <BsArrowRight />
              </span>
              <hr className="horizontal-line" />
            </Link>
          </div>
        </div>
      </section>
      <section>
        <div className="our-solution-container">
          <div className="content gap">
            <div className="content1">
              <div className="inner-cont">
                <h2>Wealth planning</h2>
                <span>discover more</span>
              </div>
            </div>
            <div className="content2">
              <div className="inner-cont">
                <h2>Investing</h2>
                <span>discover more</span>
              </div>
            </div>
          </div>
          <div className="content">
            <div className="content3">
              <div className="inner-cont">
                <h2>Financing</h2>
                <span>discover more</span>
              </div>
            </div>
            <div className="content4">
              <div className="inner-cont">
                <h2>Additional Services</h2>
                <span>discover more</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="about-section">
        <div className="about-paragraph">
          <p>
          What matters to you, matters to us. That is why at Julius Baer, we promise to fully understand your situation and objectives – financial, business, and personal – and provide you with tailored solutions for all of your financial needs. Our holistic approach to wealth management ensures that both your personal and professional situations are taken into account when devising the right strategy for your assets. 
          </p>
          </div>
          </section>
      <Insight />
      <Footer />
    </div>
  );
}

export default Solution;
