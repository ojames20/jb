import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="nav-social-wrapper">
        <div className="footer-nav">
          <ul>
            <li className="link">
              <a href="/" className="link">
                About
              </a>
            </li>
            <li className="link">
              <a href="/" className="link">
                Contact
              </a>
            </li>
            <li className="link">
              <a href="/" className="link">
                legal
              </a>
            </li>
          </ul>
        </div>
        <div className="footer-social">
          <ul>
            <li className="facebook">
              <a href="/" className="link">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="8"
                  height="16"
                  viewBox="0 0 8 16"
                >
                  <path d="M2.133 5.453H.527v2.63h1.606v7.726H5.22V8.051h2.154l.23-2.598H5.221v-1.48c0-.611.12-.854.713-.854h1.671V.423H5.467c-2.3 0-3.334 1.015-3.334 2.96z"></path>
                </svg>
              </a>
            </li>
            <li className="twitter">
              <a href="/" className="link">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 19 15">
                  <path d="M18.45 2.024a7.426 7.426 0 0 1-2.136.587A3.739 3.739 0 0 0 17.949.548a7.31 7.31 0 0 1-2.36.904A3.718 3.718 0 0 0 12.875.277a3.723 3.723 0 0 0-3.62 4.576A10.537 10.537 0 0 1 1.595.957a3.723 3.723 0 0 0-.503 1.875c0 1.294.657 2.434 1.653 3.104a3.731 3.731 0 0 1-1.685-.467v.046a3.728 3.728 0 0 0 2.982 3.656 3.703 3.703 0 0 1-1.677.065 3.728 3.728 0 0 0 3.472 2.59 7.448 7.448 0 0 1-5.503 1.541 10.492 10.492 0 0 0 5.697 1.675c6.838 0 10.576-5.68 10.576-10.606 0-.16-.004-.321-.01-.483a7.576 7.576 0 0 0 1.854-1.93"></path>
                </svg>
              </a>
            </li>
            <li className="youtube">
              <a href="/" className="link">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 16">
                  <path d="M21.25 3.926c.002.02.203 1.67.203 3.292v1.527c0 1.626-.2 3.273-.202 3.29-.011.067-.217 1.495-.88 2.164-.761.796-1.61.88-2.066.925l-.122.013c-2.623.19-6.486.21-7.01.212h-.065c-.527-.002-4.388-.023-6.998-.21l-.135-.015c-.459-.045-1.306-.129-2.07-.929-.66-.665-.867-2.093-.875-2.153a30.83 30.83 0 0 1-.203-3.297V7.218c0-1.623.2-3.272.202-3.286.009-.067.216-1.495.88-2.167C2.67.97 3.518.888 3.975.845l.12-.014c2.623-.19 6.48-.205 7.008-.208h.062c.532.003 4.393.019 7.005.206l.135.016c.456.043 1.305.124 2.068.924.66.668.867 2.096.877 2.157m-6.651 4.328a.29.29 0 0 0 .157-.259l-.156-.258-5.433-2.834-.286.009-.14.248v5.65l.14.247.152.045.134-.034L14.6 8.254"></path>
                </svg>
              </a>
            </li>
            <li className="linkedin">
              <a href="/" className="link">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 14">
                  <path d="M3.813 2.395c0-.866-.692-1.565-1.546-1.565C1.413.83.72 1.529.72 2.395c0 .863.693 1.562 1.547 1.562s1.546-.7 1.546-1.562zM.973 13.542h2.615V5.067H.972zm6.795-8.475H5.26v8.475h2.51V9.094c0-1.192.546-1.902 1.593-1.902.963 0 1.425.682 1.425 1.902v4.448h2.602V8.176c0-2.272-1.282-3.368-3.074-3.368-1.793 0-2.547 1.399-2.547 1.399z"></path>
                </svg>
              </a>
            </li>
            <li className="instagram">
              <a href="/" className="link">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 15">
                  <path d="M13.716 12.724a.567.567 0 0 1-.567.567H2.964a.567.567 0 0 1-.566-.567V6.476h1.28a4.56 4.56 0 0 0-.147 1.137c0 2.508 2.027 4.542 4.526 4.542a4.535 4.535 0 0 0 4.379-5.679h1.28zm0-8.519a.567.567 0 0 1-.566.57h-1.694a.567.567 0 0 1-.564-.57V2.502c0-.314.252-.568.564-.568h1.694c.314 0 .566.254.566.568zm-5.653.57a2.835 2.835 0 1 1 0 5.669 2.835 2.835 0 0 1 0-5.67zm5.66 10.22c.938 0 1.698-.764 1.698-1.704V1.934A1.7 1.7 0 0 0 13.723.23H2.398A1.7 1.7 0 0 0 .7 1.934v11.357c0 .94.76 1.704 1.698 1.704z"></path>
                </svg>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer-nav2">
        <ul>
          <li className="link space">
            <a href="/" className="link">
              Data privcy policy for electronic services
            </a>
          </li>
          <li className="link space">
            <a href="/" className="link">
              terms of use
            </a>
          </li>
          <li className="link space">
            <a href="/" className="link">
              news alert
            </a>
          </li>
          <li className="link space copyright">
            <a href="/" className="link">
              ©2023 Julius Baer
            </a>
          </li>
        </ul>
      </div>
      <div className="text-mini">
        <p>
          Certain products and services of the Julius Baer Group are not
          accessible to residents and/or nationals of certain countries. Website
          users are therefore asked to consult the{" "}
          
            Terms of use
          {" "}
          applicable to this website and to contact their nearest Julius Baer
          entity (“Locations”) for information on products and services
          available in their country. Furthermore, users may consult their
          legal/tax advisors should they require any clarifications on the
          interpretation of the Terms of use.
        </p>
      </div>
    </div>
  );
}

export default Footer;
