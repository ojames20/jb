import React from "react";
import Navbar1 from "../Navbar/Navbar1";
import Footer from "../Footer/Footer";

function WealthPlanning() {
  return (
    <div>
      <Navbar1 />
      <section>
        <div className="about_headline">
          <h2 className="about_headline_title">wealth planning</h2>
          <h5 className="about_headline_paragraph">
            Our tailored and holistic wealth planning services will help you
            navigate every stage of your life.
          </h5>
        </div>
      </section>
      <section className="about-section">
        <div className="about-paragraph">
          <p>
            At Julius Baer, we believe that wealth planning is a core pillar of
            every successful wealth management strategy. Whether you wish to
            secure your children’s financial future, better understand your tax
            situation, or are seeking expertise on succession, retirement, or
            relocation, our dedicated wealth planning team can help you prepare
            for tomorrow by taking action today.
          </p>
          <div className="about_bold">
            <h2 className="smb">Our wealth planning process</h2>
          </div>
          <p>
            We know that your personal circumstances and aspirations will evolve
            over time. That is why our first priority is to gain a thorough
            understanding of your current situation, goals, and future needs.
            Together with you, we then determine your wealth planning
            requirements and define a strategy to address these. In a third
            step, this strategy is then implemented using the Julius Baer
            product and service platform, which draws on the experience of a
            broad range of in-house experts and carefully selected third-party
            specialists.
          </p>
          <p>
            Our team of wealth planners have local expertise and a global
            network to support you with your wealth planning needs.
          </p>
          <p>
            The only constant in life is change, which is why individual life
            planning should not be a one-off exercise. Your personal
            circumstances, requirements, expectations, and aspirations will
            develop over time. We are here to support you through life’s
            adventures and provide the right solution for every step of the way.
            Whatever your goal may be, we will listen to you carefully and show
            how prudent planning can help you achieve them. Comprehensive
            analysis is essential to ensure that your wealth remains secure for
            you, your family, and future generations.
          </p>
          <div className="about_bold">
            <h2 className="smb">Our services - a selection</h2>
          </div>
          <p>
            We deploy a holistic approach to managing your wealth. Our own
            advisors, together with a broad network of external experts,
            supports you to analyse your overall wealth situation. They create a
            comprehensive financial overview for you and your family or
            business, encompassing relevant wealth planning topics such as
            <br />
            &#8226; financial planning: in-depth planning to help you achieve
            your financial goals <br />
            &#8226; wealth structuring: deploying the appropriate solutions for
            your family or business <br />
            &#8226; retirement: providing for a comfortable future <br />
            &#8226; taxation: understanding your tax obligations <br />
            &#8226; succession: transferring your wealth to the next generation{" "}
            <br />
            &#8226; relocation: understanding the impact of a potential move
            abroad <br />
            &#8226; philanthropy: leaving your mark on the world through
            charitable engagement.
          </p>
        </div>
      </section>
      <section className="about-section">
        <div className="about-paragraph">
          <h3 className="about_headline_title h3">family office services</h3>
          <h5 className="about_headline_paragraph">
            Global family office services – from our family to yours
          </h5>
          <p>
            Families are the foundation from which we grow, and, like each
            person, they are all individual. The life lessons passed between
            generations form our values and beliefs, and help define our path.
            You do not choose your family and its heritage, but you can shape
            its future with your actions. This may require the courage to
            innovate, or could mean drawing on the experience of your ancestors.
            The enduring bonds between family members offer strength that
            supports and guides every generation to seek its potential.
          </p>
          <div className="about_bold">
            <h2 className="smb">Why do we know?</h2>
          </div>
          <p>
            Fam​​ily is in Julius Baer’s DNA. We went from humble beginnings to
            a flourishing family business, which at the correct time the family
            sold to allow it to evolve into the global reference for wealth
            management that we are today. Our founding family had the foresight
            to do what was best to nurture and grow the business, and we have
            never lost that family perspective. Today, it is the understanding
            of how to preserve and create value through change, the respect for
            personal relations and humanity, and the commitment to contribute to
            the creation of sustainable communities and economies that makes us
            the best advisors when it comes to ’family affairs’​.
          </p>
          <div className="about_bold">
            <h2 className="smb">Family roadmap</h2>
          </div>
          <p className="sub-p">
            Cut through complexity with a consolidated view of your current and
            future family needs​​.
          </p>
          <div className="about_bold">
            <h2 className="smb">Family governance</h2>
          </div>
          <p className="sub-p">
          Establish a family constitution and create communication and education platforms.
          </p>
          <div className="about_bold">
            <h2 className="smb">Family experts</h2>
          </div>
          <p className="sub-p">
          Finding you the right partners using our extensive network of dedicated providers.
          </p>
          <div className="about_bold">
            <h2 className="smb">Family network</h2>
          </div>
          <p className="sub-p">
          Meet and exchange thought leadership with peer families and industry leaders at tailor-made events​. 
          </p>
          <div className="about_bold">
            <h2 className="smb">Family purpose</h2>
          </div>
          <p className="sub-p">
          Set your family’s values in motion with a view to society and the environment.
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
            poster="https://www.juliusbaer.com/fileadmin/_processed_/5/b/csm_jb-family-office-services-preview_3908ffd862.webp"
            data-setup="{}"
            height={650}
            width={1157}
          >
            <source
              src="https://www.juliusbaer.com/fileadmin/wealth-management/jb-family-office-services-en.mp4"
              type="video/mp4"
            ></source>
          </video>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default WealthPlanning;


