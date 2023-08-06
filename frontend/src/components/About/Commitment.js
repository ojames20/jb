import React from "react";
import Navbar1 from "../Navbar/Navbar1";
import Insight from "../Insight/Insight";
import Footer from "../Footer/Footer";

function Commitment() {
  return (
    <div>
      <Navbar1 />
      <section>
        <div className="about_headline">
          <h2 className="about_headline_title">our commitment</h2>
          <h5 className="about_headline_paragraph">
            From the leaders of tomorrow and our employees to the arts: We are
            serious about our commitments to help create value beyond wealth.
          </h5>
          <div className="about-paragraph">
            <p>
              Julius Baer has a long tradition of supporting a carefully
              selected range of issues and organisations with a view to
              preserving the best of today and ensuring a better tomorrow. From
              fostering leaders of the future and investing in promising artists
              and athletes to helping reduce wealth inequality and tackling
              environmental challenges, we live by our conviction that how we
              invest today is how we live tomorrow.
            </p>
          </div>
        </div>
      </section>
      <section className="about-section">
        <div className="about-paragraph">
          <h3 className="about_headline_title h3">art collection</h3>
        </div>
      </section>
      <section className="video-section">
        <div className="video-container">
          <video
            id="my-player"
            class="video-js"
            controls
            preload="auto"
            poster="https://www.juliusbaer.com/fileadmin/_processed_/b/0/csm_julius-baer-art-collection-thumbnail_a8f12d1174.webp"
            data-setup="{}"
            height={650}
            width={1157}
          >
            <source
              src="https://www.juliusbaer.com/fileadmin/about/20230223-julius-baer-art-collection.mp4"
              type="video/mp4"
            ></source>
          </video>
        </div>
      </section>
      <section className="about-section">
        <div className="about-paragraph">
          <p>
            The Julius Baer art collection comprises a comprehensive selection
            of contemporary Swiss art that numbers over 5000 pieces, spanning a
            wide array of media. Paintings, sculptures, photographs, videos,
            graphics, and drawings are displayed in Julius Baer’s meeting rooms,
            staff restaurants, offices, foyers, and corridors around the globe.
            Established in 1981 by Hans J. Baer (1927-2011), the collection was
            inspired by his belief that art in the workplace offers a wonderful
            starting point for conversation. Today, the works continue to engage
            and intrigue both employees and visiting clients.
          </p>
          <p>
            Since its inception, the focus of the Julius Baer Art Committee has
            been to find outstanding Swiss artists at an early stage. In
            addition to fostering young talent and collecting pieces at the
            beginning of the artist’s career, another central aim of the
            collection is to follow the artist’s activities closely and acquire
            additional artworks as their oeuvre develops to obtain a
            representative body of their work. This creates a dynamic blend of
            both up-and-coming and firmly established artists.
          </p>
          <p>
            The collection features works by some of Switzerland’s most
            important contemporary artists including John M Armleder, Silvia
            Bächli, Miriam Cahn, Lutz & Guggisberg, Pipilotti Rist, Ugo
            Rondinone, Shirana Shahbazi, and Roman Signer, to name but a few.
          </p>
        </div>
      </section>
      <section className="about-section">
        <div className="about-paragraph">
          <h3 className="about_headline_title h3">sponsoring</h3>
          <h5 className="about_headline_paragraph">
            We are the proud sponsor of a range of exciting and highly regarded
            international sporting events and cultural institutions.
          </h5>
          <p>
            The promotion of culture and sports is a long-standing tradition at
            Julius Baer. We support emerging talents and forward-thinking
            platforms to spark innovation, encourage dialogue across
            generations, and promote greater diversity. In all our activities,
            we stay true to our commitment to foster innovation for a better
            future for the communities in which we live and work. We aim to
            share the excitement of outstanding achievement and innovative
            approaches with the public at large while at the same time fostering
            talent.
          </p>
          <p>
            These commitments embody our purpose: to create value beyond wealth.
            We sponsor both international and local platforms.
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
            poster="https://www.juliusbaer.com/fileadmin/_processed_/6/e/csm_formula-e-thumbnail_cab0cf0667.webp"
            data-setup="{}"
            height={650}
            width={1157}
          >
            <source
              src="https://www.juliusbaer.com/fileadmin/campaigns/formula-e-sponsoring-video-updated.mp4"
              type="video/mp4"
            ></source>
          </video>
        </div>
      </section>
      <section className="about-section">
        <div className="about-paragraph">
          <h5 className="about_headline_paragraph">
            ABB FIA Formula E World Championship
          </h5>
          <p>
            The ABB FIA Formula E World Championship is the world’s first fully
            electric, city-street racing series. While it is designed to thrill
            and entertain, it also aims to educate and innovate. Formula E
            provides fertile ground for some of the world’s leading companies to
            develop and test sustainable solutions for mobility, energy
            production and their wider applications
          </p>
          <p>
            The forward-thinking, innovative approach of Formula E resonates
            deeply with our corporate values. Considering the impact that our
            actions today will have on the next generation is central to both
            organisations.
          </p>
          <p>
            We are proud to be the founding Global Partner of Formula E and have
            supported the world championship since its first race in 2014.
          </p>
        </div>
      </section>
      <Insight />
      <Footer />
    </div>
  );
}

export default Commitment;
