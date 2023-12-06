// src/components/NavBar.js
import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <div className="navbar">
      <NavLink to="/circles" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
        Circles
      </NavLink>
      <NavLink to="/particles" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
        Particles
      </NavLink>
      {/* Add more NavLink components for additional routes */}
    </div>
  );
};

export default NavBar;
