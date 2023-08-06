import React from "react";
import Navbar1 from "../Navbar/Navbar1";
import Footer from "../Footer/Footer";
import Insight from "../Insight/Insight";

function AdditionalServices() {
  return (
    <div>
      <Navbar1 />
      <section>
        <div className="about_headline">
          <h2 className="about_headline_title">additional services</h2>
          <h5 className="about_headline_paragraph">
            Having trouble finding a wealth manager who will support you with a
            tailored solution to what is perhaps not an everyday need? We’re
            here to help with an extensive range of additional services.
          </h5>
        </div>
      </section>
      <section className="about-section">
        <div className="about-paragraph">
          <p>
            At Julius Baer, our job is to understand what matters to you and
            then help you achieve that. Because those goals can change and
            evolve over time, we are continuously expanding our expertise and
            offering to ensure we keep step with you. Our exciting range of
            additional services has been designed with exactly this in mind.
          </p>
        </div>
      </section>
      <section className="about-section">
        <div className="about-paragraph">
          <h3 className="about_headline_title h3">asset servicing</h3>
          <h5 className="about_headline_paragraph">
            Manage your assets more efficiently with bespoke asset servicing
          </h5>
          <p>
            By choosing Julius Baer as your partner for your asset servicing
            needs, you receive a tailored and sophisticated custodian service
            that enables you to simplify and actively steer your business,
            leaving you with more time for your core activities.
          </p>
          <div className="about_bold">
            <h2 className="smb">Our services – a selection</h2>
          </div>
          <p className="sub-p">
            Julius Baer covers the entire spectrum of asset servicing, from
            global custody and depositary bank services to reporting solutions:
          </p>

          <p className="sub-p">
            &#8226; Our global custody offering includes the efficient and
            straightforward safekeeping and administration of your assets at
            Julius Baer. As part of this service, your bankable assets are
            managed by asset managers selected by you, who can work with their
            stockbroker and dealer of choice.
          </p>

          <p className="sub-p">
            &#8226;  As part of our depositary bank services, Julius Baer acts as
            your custodian for your collective investment scheme. Our wide range
            of services relating to fund custody and additional services is
            tailored to the needs of the collective investment scheme and its
            partners.
          </p>

          <p className="sub-p">
            &#8226;  Julius Baer’s reporting solutions are specially adapted to
            your wishes, needs, and includes performance and risk analysis,
            strategy monitoring, and the performance of efficient investment
            controlling. Our range of services is divided into modules and is
            tailored to your specific situation – you can combine several
            modules or make use of individual modules based on your needs.
          </p>
          <p className="sub-p">
            &#8226; Furthermore, as a Julius Baer client, you have access to a
            full range of value added services for tailored solutions for your
            investment, financing and administrational needs.
          </p>
        </div>
      </section>
      <Insight />
      <Footer />
    </div>
  );
}

export default AdditionalServices;
