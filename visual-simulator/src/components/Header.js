// src/components/Header.js

import React from 'react';
// import '../styles/Header.css';

function Header() {
  return (
    <>
    <a href="https://lizhagearty.vercel.app/"><div style={{ padding: '20px' }}> 
       <i class="fas fa-star" style={{ color: 'white', fontSize: '24px' }}></i>
    </div></a>
    {/* <div style={{ color: 'white', fontSize: '24px' }}>VISUAL </div> */}
    <div style={{ color: 'white', fontSize: '24px' }}>press the screen to create circles (:</div>
    </>
  );
}

export default Header;
