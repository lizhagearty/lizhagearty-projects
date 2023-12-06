// src/App.js

import React from 'react';
import Header from './components/Header';
import Portfolio from './components/Portfolio';
import Creator from './components/Creator';
import Engineer from './components/Engineer';
import About from './components/About';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        {/* <h3>LIZ HAGEARTY</h3> */}
        <h3 className='title'>LIZ HAGEARTY <div className='navigation-links'><a href="#engineer">Engineer</a>  |  <a href="#artist">Artist</a> | <a href="#creator">Creator</a></div></h3>
        <section id="engineer" className="section-card">
          // Engineer
          <Engineer />
        </section>  
        <section id="artist" className="section-card">
         // Artist
        <Portfolio /></section>
        <section id="creator" className="section-card">
        // Content Creator
        <Creator /></section>
        <About />
      </main>
      <Footer />
    </div>
  );
}

export default App;
