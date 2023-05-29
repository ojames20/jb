
import './App.css';
import React from 'react'
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import OurSolution from './components/OurSolution/OurSolution';


function App() {
  return (
    <React.Fragment>
      <Navbar />
      <Hero />
      <OurSolution />
    </React.Fragment>
  );
}

export default App;
