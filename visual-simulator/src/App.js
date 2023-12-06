// src/App.js
import React from 'react';
import './App.css';
// import RippleEffect from './RippleEffect';
import PhysicsCircle from './PhysicsCircle';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <Header />
      {/* <RippleEffect /> */}
      <PhysicsCircle />
    </div>
  );
}

export default App;
