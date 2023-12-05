// src/App.js

import React from 'react';
import Header from './components/Header';
import Portfolio from './components/Portfolio';
import About from './components/About';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <h1>My Portfolio</h1>
        <Portfolio />
        <About />
      </main>
      <Footer />
    </div>
  );
}

export default App;
