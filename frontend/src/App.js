import "./App.css";
import React from "react";
import { Routes, Route } from 'react-router-dom';
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Company from "./components/About/Company";
import Commitment from "./components/About/Commitment";
import Business from "./components/About/Business";
import Solution from "./components/Solution/Solution";
import WealthPlanning from "./components/Solution/WealthPlanning";
import Investing from "./components/Solution/Investing";
import Financing from "./components/Solution/Financing";
import AdditionalServices from "./components/Solution/AdditionalServices";
import Login from "./components/Login/Login";

function App() {
  
  return (
    <React.Fragment>
      {/* <Navbar /> */}
      <Routes>
        <Route path="/" element={ <Home />} />
        <Route path="/about" element={ <About /> } />
        <Route path="/about/company" element={<Company />} />;
        <Route path="/about/commitment" element={<Commitment />} />;
        <Route path="/about/business" element={<Business />} />;
        <Route path="/solution"  element={<Solution />}/>
        <Route path="/solution/wealth-planing"  element={<WealthPlanning />}/>
        <Route path="/solution/investing" element={<Investing />} />
        <Route path="/solution/financing" element={<Financing />} />
        <Route path="/solution/additional-services" element={<AdditionalServices />} />
        <Route path="/e-services" element={<Login />} />

      </Routes>
    </React.Fragment>
  );
}

export default App;
