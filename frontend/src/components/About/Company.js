import React from "react";
import Navbar1 from "../Navbar/Navbar1";
import Insight from "../Insight/Insight";
import Footer from "../Footer/Footer";

import videojs from "video.js";
import "video.js/dist/video-js.css";

function Company() {
  return (
    <div>
      <Navbar1 />
      <section>
        <div className="about_headline">
          <h2 className="about_headline_title">our company</h2>
          <h5 className="about_headline_paragraph">
            We think long term and strive to deliver excellence in everything we
            do
          </h5>
        </div>
      </section>
      <section className="about-section">
        <div className="about-paragraph">
          <p>
            At Julius Baer our goal is to help you grow, protect, and pass on
            your wealth to the next generation. We hold ourselves to very high
            standards in all that we do and manage our company with a long-term
            approach and a focus on creating and maintaining personal, long-term
            partnerships based on trust.
          </p>
          <h2 className="about_headline_title h3">purpose</h2>
          <p>
            For more than 130 years, we at Julius Baer have managed our clients’
            wealth and served them as trusted, truly personal and holistic
            advisors. With our roots as a family business, we know the value of
            long-term relationships, and the challenges and opportunities of
            growing wealth, protecting it, and passing it on. We help our
            clients understand and shape the future in which we will live and we
            enable their families and new generations to thrive. We strive to be
            agile and to remain relevant as the preferred wealth management
            partner. And, as an institution, we act responsibly towards
            employees, stakeholders and society. In all we do, we are inspired
            by our purpose: creating value beyond wealth.
          </p>
        </div>
      </section>
      <section className="video-section">
        <div className="video-container">
          <video
            id="my-player"
            class="video-js"
            controls
            preload="auto"
            poster="https://www.juliusbaer.com/fileadmin/_processed_/b/7/csm_purpose_5c2a0c5e9b.webp"
            data-setup="{}"
            height={650}
            width={1157}
          >
            <source
              src="https://www.juliusbaer.com/fileadmin/about/Purpose.mp4"
              type="video/mp4"
            ></source>
          </video>
        </div>
      </section>
      <section className="about-section">
        <div className="about-paragraph">
          <h3 className="about_headline_title h3">financial strength</h3>
          <h5 className="about_headline_paragraph">
            Julius Baer’s strong financial standing and balance sheet are a
            reflection of both the trust placed in us and our stability.
          </h5>
          <p>
            Julius Baer has not incurred a loss in almost a century, and
            continues to be profitable, even in difficult markets. Our financial
            strength provides stability for our clients, our employees, and our
            shareholders.
          </p>
          <p>
            Our balance sheet is conservatively structured, with the funding
            coming almost entirely from client deposits. Our loan book is also
            managed conservatively and is mainly composed of fully
            collateralised loans to our private clients (Lombard or residential
            mortgages).
          </p>
          <p>
            Our healthy BIS total capital ratio and BIS CET1 capital ratio give
            us a substantial capital buffer that provides us with plenty of room
            to steer and develop our business.
          </p>
          <p>
            And, thanks to our focus on pure wealth management, our business
            model is comparatively low risk. It is backed by comprehensive risk
            management and strict corporate governance principles.
          </p>
          <p>
            Bank Julius Baer & Co. Ltd. has a solid Aa3 long-term deposit rating
            (domestic and foreign currency) from Moody’s, placing us at the top
            end of the wealth management industry.
          </p>
        </div>
      </section>
      <Insight />
      <Footer />
    </div>
  );
}

export default Company;
