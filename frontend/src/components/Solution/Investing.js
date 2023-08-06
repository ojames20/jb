import React from "react";
import Navbar1 from "../Navbar/Navbar1";
import Insight from "../Insight/Insight";
import Footer from "../Footer/Footer";

function Investing() {
  return (
    <div>
      <Navbar1 />
      <section>
        <div className="about_headline">
          <h2 className="about_headline_title">investing</h2>
          <h5 className="about_headline_paragraph">
            Your investment needs are specific to you and your situation. Take
            advantage of our expertise to explore what’s out there and find the
            solution that will support you in meeting your investment
            objectives.
          </h5>
        </div>
      </section>
      <section className="about-section">
        <div className="about-paragraph">
          <p>
            What are your investment goals? And do they really match your
            overall risk profile? It doesn’t matter if you’re new to the stock
            markets or a seasoned expert; Julius Baer can help you determine
            where you stand with your investments and how to get to where you
            want to go.
          </p>
          <div className="about_bold">
            <h2 className="smb">Our investment approach</h2>
          </div>
          <p>
            As our client, you decide whether you wish to have an active part in
            defining your investment strategy or prefer to leave it in the hands
            of a trusted partner. Whichever option you choose, Julius Baer’s
            disciplined and active investment approach will target consistent
            investment performance while taking calculated risks. Our investment
            solutions cover a vast investment universe that we tailor to your
            specific needs and risk appetite.
          </p>

          <div className="about_bold">
            <h2 className="smb">Responsible investing</h2>
          </div>
          <p>
            Julius Baer is committed to responsible investing and is a signatory
            to the UN-supported Principles for Responsible Investment. As part
            of our investment process, we therefore analyse financial and
            material ESG risks in order to help you secure financial returns
            while at the same time having a positive impact on society and the
            environment.
          </p>
        </div>
      </section>
      <Insight />
      <Footer />
    </div>
  );
}

export default Investing;
