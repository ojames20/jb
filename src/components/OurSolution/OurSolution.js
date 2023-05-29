import React from "react";
import "./OurSolution.css";

function OurSolution() {
  return (
    <div>
      <section>
        <div className="our-solution-container">
          <div className="headline">
            <h4 className="title">our solutions</h4>
          </div>

          <div className="content gap">
            <div className="content1">
              <div className="inner-cont">
                <h2>Wealth planning</h2>
                <span>discover more</span>
              </div>
            </div>
            <div className="content2">
              <div className="inner-cont">
                <h2>Wealth planning</h2>
                <span>discover more</span>
              </div>
            </div>
          </div>
          <div className="content">
            <div className="content3">
              <div className="inner-cont">
                <h2>Wealth planning</h2>
                <span>discover more</span>
              </div>
            </div>
            <div className="content4">
              <div className="inner-cont">
                <h2>Wealth planning</h2>
                <span>discover more</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="about">
        <div className="headline">
          <h4 className="title">about</h4>
        </div>

        <div className="con1 ">
          <div className="inner-con1">
            <h2>In a nutshell</h2>
            <p>Julius Baer has a long history and a clear purpose.</p>
            <button className="inner-con1-but">discover more</button>
          </div>
          <div className="inner-con1 mid">
            <h2>What we do</h2>
            <p>We help you achieve your financial and sustainability goals.</p>
            <button className="inner-con1-but">discover more</button>
          </div>
          <div className="inner-con1">
            <h2>Our locations</h2>
            <p>We are where you are. Discover our global presence.</p>
            <button className="inner-con1-but">discover more</button>
          </div>
        </div>

        <div className="con2">
          <div className="con2-cont">
            <p>
              For over 130 years, we have been focusing on one thing: helping
              people achieve their financial goals. As a global wealth manager,
              we understand your needs, and take the long view when it comes to
              your assets. Whether you’re starting a company, planning for your
              retirement, or want to ensure your loved ones will be taken care
              of in the future; our experts will help find the solution that is
              right for you.
            </p>
          </div>
        </div>

        <div className="con3">
          <div className="bg">
            <div className="con3-content">
              <h2>investment guide</h2>
              <div className="center">
                <p>Market Outlook 2023</p>
                <button className="but">discover more</button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="insight">
        <div className="headline">
          <h4 className="title">insight</h4>
        </div>
        <div className="insight-content">
          <div></div>
          <div></div>
        </div>
      </section>
    </div>
  );
}

export default OurSolution;
