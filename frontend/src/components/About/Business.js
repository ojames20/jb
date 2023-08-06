import React from "react";
import Navbar1 from "../Navbar/Navbar1";
import Insight from "../Insight/Insight";
import Footer from "../Footer/Footer";

function Business() {
  return (
    <div>
      <Navbar1 />
      <section>
        <div className="about_headline">
          <h2 className="about_headline_title">our business</h2>
          <h5 className="about_headline_paragraph">
            At Julius Baer, we focus on what we do best: Providing comprehensive
            support to help you achieve your goals and live your passion.
          </h5>
          <div className="about-paragraph">
            <p>
              We help you achieve your financial aspirations through holistic
              solutions that take into account what truly matters to you – in
              your business and personal life, today and for future generations.
            </p>
            <p>
              We support you in all aspects of wealth management and give you
              access to our expertise and our dedicated professionals around the
              globe.
            </p>
          </div>
        </div>
      </section>
      <section className="about-section">
        <div className="about-paragraph">
          <h3 className="about_headline_title h3">investment expertise</h3>
          <h5 className="about_headline_paragraph">Pure wealth managment</h5>

          <p>
            Julius Baer’s activities are centered on the deep understanding of
            your needs in respect to wealth accumulation, wealth preservation
            and wealth transfer to next generations. Based on your unique
            situation, we deploy a holistic advisory approach to systematically
            derive the appropriate financial solutions encompassing wealth
            planning, investing and financing.
          </p>
          <p>
            The result is a service experience that holistically matches your
            individual preferences – taking into account your financial,
            business and personal goals. To achieve this, we draw from a wealth
            of dedicated resources provided by our specialised units.
          </p>
        </div>
      </section>
      <section className="about-section">
        <div className="about-paragraph">
          <h3 className="about_headline_title h3">
            responsible wealth managment
          </h3>
          <h5 className="about_headline_paragraph">
            Invest sustainably, invest in what matters to you.
          </h5>

          <p>
            At Julius Baer, we empower you to have a positive impact, both today
            and in the future. The key to doing this successfully is having a
            deep understanding of your unique needs, for example, what you want
            to achieve with your wealth and how you want to accumulate,
            preserve, and transfer it to the next generation. Our sustainability
            strategy underscores the importance of our role in serving as a
            trusted partner on your sustainability journey. And as you pursue
            this path, our goal is to provide the transparent and reliable
            insights you require to make informed choices.
          </p>
          <p>
            Each investment journey is personal, and we help our clients invest
            in what matters to them. To support you in defining your journey, we
            provide: <br />
            &#8226; Guidance on clearly articulating your values, ambitions, and
            profile. <br />
            &#8226; Transparency on your portfolio’s sustainability profile and
            an investment ‘health check’.
            <br />
            &#8226; Support in co-creating a strategy that will meet your
            objectives.
          </p>
          <p>
            Once you have defined these elements and are ready to set out, we
            accompany you every step of the way with the help of a comprehensive
            ecosystem consisting of:
            <br />
            &#8226; Methodology & Client reporting <br />
            &#8226; Products and solutions <br />
            &#8226; Research & Thought leadership <br />
            &#8226; Client community & ESG knowledge
          </p>
          <p>
            Methodology & Client reporting: Enabling informed decision-making
            through robust information Reliability and transparency are at the
            heart of responsible wealth management at Julius Baer. We therefore
            provide transparent reports on sustainability performance to
            clients. To assess and categorize different investments in terms of
            their sustainability performance, we apply our robust ESG
            methodology.
          </p>
          <p>
            Products and solutions: From different ESG-related investments to
            philanthropic ventures, we offer a range of options that suit your
            personal profile and level of ambition. Our approach to responsible
            wealth management encompasses responsible investing, sustainable
            investing, impact investing, and philanthropy services.
          </p>
          <p>
            Research & Thought leadership: Providing the bigger picture We use
            our expertise to select and share pertinent information about
            current and future sustainability, impact, and philanthropy trends.
          </p>
          <p>
            Client community & ESG knowledge: Just as our expertise becomes
            yours, our networks become your networks A person’s biggest impact
            may not come as a result of what they do, but of who they connect
            with. We therefore actively create networking opportunities so that
            you can engage with like-minded individuals, families, investors,
            and experts. It is in this spirit that we launched the
            Sustainability Circle.
          </p>
        </div>
      </section>
      <Insight />
      <Footer />
    </div>
  );
}

export default Business;
