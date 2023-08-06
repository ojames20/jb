import React from "react";
import Hero from "../Hero/Hero";
import OurSolution from "../OurSolution/OurSolution";
import Location from "../Location/Location";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";

function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <OurSolution />
      <Location />
      <Footer />
    </div>
  );
}

export default Home;
