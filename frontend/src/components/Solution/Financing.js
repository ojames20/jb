import React from "react";
import Navbar1 from "../Navbar/Navbar1";
import Footer from "../Footer/Footer";

function Financing() {
  return (
    <div>
      <Navbar1 />
      <section>
        <div className="about_headline">
          <h2 className="about_headline_title">financing</h2>
          <h5 className="about_headline_paragraph">
            Discover our broad range of financing solutions and find out which
            option best suits your specific needs.
          </h5>
        </div>
      </section>
      <section className="about-section">
        <div className="about-paragraph">
          <p>
            Financial flexibility is essential in today’s fast-moving world.
            Investment opportunities or a need for financing can arise at any
            time. You might also find yourself considering complex transactions
            requiring a credit analysis and structuring skills. Whatever your
            specific situation, find out which lending solutions are available
            to you and how we can execute your transactions.
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
            poster="https://www.juliusbaer.com/fileadmin/_processed_/3/5/csm_Video_still_02_e7e1808f81.webp"
            data-setup="{}"
            height={650}
            width={1157}
          >
            <source
              src="https://www.juliusbaer.com/fileadmin/content-hub/insights/210208_Loan_Campaign_16x9_ST.mp4"
              type="video/mp4"
            ></source>
          </video>
        </div>
      </section>
      <section className="about-section">
        <div className="about-paragraph">
          <h3 className="about_headline_title h3">lombard lending</h3>
          <h5 className="about_headline_paragraph">
            Retain your portfolio investment while increasing your financial
            flexibility
          </h5>
          <p>
            Whether you want to optimise your cash flow, improve your investment
            returns, or invest in derivative financial instruments that require
            a security margin – Julius Baer offers a wide range of customised
            Lombard-lending solutions to meet your individual financing and
            trading requirements.
          </p>
          <div className="about_bold">
            <h2 className="smb">Our services – a selection</h2>
          </div>
          <p className="sub-p">
            Our experienced specialists are here to help you develop a Lombard
            lending solution that enables you to
          </p>
          <div className="about_bold">
            <h2 className="smb">&#8226; answer to liquidity needs:</h2>
          </div>
          <p className="sub-p">
            Make large acquisitions without selling existing assets through a
            Lombard loan utilised in the form of either a fixed-term loan or a
            current account overdraft. Your acquisition will be financed against
            your portfolio.
          </p>
          <div className="about_bold">
            <h2 className="smb">
              &#8226; trade in derivative financial instruments:
            </h2>
          </div>
          <p className="sub-p">
            Use your portfolio as collateral for exchange-traded (ETD),
            over-the-counter (OTC) derivatives, and foreign exchange (FX)
            products. Deployed as such, it may serve to cover margin
            requirements to account for market fluctuations.
          </p>
          <div className="about_bold">
            <h2 className="smb">&#8226; reinvest:</h2>
          </div>
          <p className="sub-p">
            Borrow money against the pledge of your existing investments which
            serves as collateral. The proceeds of such loans can be reinvested
            in a diversified portfolio, serving as additional collateral. Such a
            portfolio diversifies risk and offers the opportunity to enhance
            investment yields without compromising your overall investment
            strategy.
          </p>
        </div>
      </section>
      <section className="about-section">
        <div className="about-paragraph">
          <h3 className="about_headline_title h3">structured finance</h3>
          <h5 className="about_headline_paragraph">
            Our Structured Finance team specialises in structuring and executing
            bespoke lending solutions.
          </h5>
          <p>
            Whether you are a private individual or a family office, we are on
            hand to help you gain access to financing that meets even the most
            complex needs.
          </p>
          <p>
            Standard financing solutions do not always provide the scope to
            address more sophisticated financing requirements. These can arise,
            for example, when a short-term investment opportunity presents
            itself, or if you are looking to protect the value of your
            investments, or to hedge your investment exposure.
          </p>
          <div className="about_bold">
            <h2 className="smb">Our approach</h2>
          </div>
          <p className="sub-p">
            Julius Baer understands such needs and has many years of
            tried-and-tested expertise in developing individual financing
            solutions.
          </p>
          <p>
            For us, an ‘individual solution’ means first and foremost
            understanding your motivation and your objectives. It also involves
            conducting an in-depth analysis of your underlying assets and
            assessing all of the considerations that are relevant to your
            situation. Once we have this information, we use the full spectrum
            of asset classes to design a structure that is collateralised by
            listed and non-listed assets – or a blend thereof. We do this in a
            way that is time-to-market, flexible, and agile.
          </p>
          <div className="about_bold">
            <h2 className="smb">Global reach</h2>
          </div>
          <p className="sub-p">
            Our experienced team, which has offices in four international
            financial centres, from which to serve you, has versatile
            structuring skills and a broad range of expertise. They would be
            delighted to work with you to find the structured financing solution
            that is right for you.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default Financing;
