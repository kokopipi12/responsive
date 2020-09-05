import React from 'react';
import logo from './logo.svg';
import './App.css';
import Body from  "./componen/body"
import Navbar from  "./componen/Navbar"
import Section from "./componen/Section"
import Footer from "./componen/Footer"
import Projek from './componen/Projek'
function App() {
  return (
    <div className="App">
      <Navbar />
      <Body />
      <Section/>
      <Projek/>
      <Footer/>
    </div>
  );
}

export default App;
