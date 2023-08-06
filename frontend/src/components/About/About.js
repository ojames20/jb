import React from 'react';

import Footer from '../Footer/Footer';
import Insight from '../Insight/Insight';

import './About.css';
import Navbar1 from '../Navbar/Navbar1';
import AboutUs from './AboutUs';


function About() {
  return (
    <div>
       <Navbar1 />
       <AboutUs />
       <Insight />
       <Footer />
    </div>
  )
}

export default About