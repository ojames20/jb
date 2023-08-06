import React from "react";
import { Link } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";
import videojs from "video.js";
import 'video.js/dist/video-js.css';

function AboutUs() {
  return (
    <div>
      <section>
        <div className="about_headline ">
          <h2 className="about_headline_title">about us</h2>
          <h5 className="about_headline_paragraph">
            The international reference in wealth management
          </h5>
        </div>
        <div className="about_links">
          <div className="link-txt">
            <Link to="/about/company">
              <span className="link-txt-space"> Our company</span>
              <span>
                <BsArrowRight />
              </span>
              <hr className="horizontal-line" />
            </Link>
          </div>

          <div className="link-txt">
            <Link to="/about/business">
              <span className="link-txt-space"> Our Business</span>
              <span>
                <BsArrowRight />
              </span>
              <hr className="horizontal-line" />
            </Link>
          </div>

          <div className="link-txt">
            <Link to="/about/commitment">
              <span className="link-txt-space"> Our commitment</span>
              <span>
                <BsArrowRight />
              </span>
              <hr className="horizontal-line" />
            </Link>
          </div>
        </div>
      </section>
      <section className="about-section">
        <div className="about-paragraph">
          <p>
            For more than 130 years, we at Julius Baer have managed our clients’
            wealth and served them as trusted, truly personal and holistic
            advisors. With our roots as a family business, we know the value of
            long-term relationships, and the challenges and opportunities of
            growing wealth, protecting it, and passing it on. In all we do, we
            are inspired by our purpose: creating value beyond wealth.{" "}
          </p>
          <p>
            Julius Baer is present in over 25 countries and around 60 locations.
            Headquartered in Zurich, we have offices in key locations including
            Bangkok, Dubai, Dublin, Frankfurt, Geneva, Hong Kong, London,
            Luxembourg, Madrid, Mexico City, Milan, Monaco, Mumbai, Santiago de
            Chile, São Paulo, Shanghai, Singapore, Tel Aviv and Tokyo. Our
            client-centric approach, our objective advice based on the Julius
            Baer open product platform, our solid financial base and our
            entrepreneurial management culture make us the international
            reference in wealth management.
          </p>
          <p>
            At the end of April 2023, assets under management amounted to CHF
            429 billion. Bank Julius Baer & Co. Ltd., the renowned Swiss private
            bank with origins dating back to 1890, is the principal operating
            company of Julius Baer Group Ltd., whose shares are listed on the
            SIX Swiss Exchange (ticker symbol: BAER) and are included in the
            Swiss Leader Index (SLI), comprising the 30 largest and most liquid
            Swiss stocks.
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
            poster="https://www.juliusbaer.com/fileadmin/_processed_/1/5/csm_jb-history_9660cc0288.webp"
            data-setup="{}"
            height={650}
            width={1157}
          >
            <source
              src="https://www.juliusbaer.com/fileadmin/about/heritage-julius-baer-en.mp4"
              type="video/mp4"
            ></source>
          </video>
        </div>
      </section>
    </div>
  );
}

export default AboutUs;
