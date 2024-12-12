import React, { useEffect } from 'react';
import './App.css';
import SnakeGame from './Component/SnakeGame';

function App() {
  useEffect(() => (
    document.getElementsByClassName('app')[0].style.display = "block"
  ));
  return (
    <div className="app">
      <p>Launching Soon
        <div className="loader">
          <span className="dot dot-1"></span>
          <span className="dot dot-2"></span>
          <span className="dot dot-3"></span>
          <span className="dot dot-4"></span>
        </div>
      </p>

      <div className="game">
        <SnakeGame />
      </div>
      <div className="name" >
        <p style={{ fontWeight: '700', fontSize: '20px' }}>Ishan Rijal</p>
        <a style={{ display: 'block', textDecoration: 'none', marginTop: '-20px', marginLeft: '-20px' }} href="https://ishanrijal.blogspot.com/">Blog</a>
        <a style={{ display: 'block', textDecoration: 'none', marginTop: '-20px', marginLeft: '120px' }} href="https://ishanrijal.medium.com/">Medium</a>
      </div>
    </div>
  );
}

export default App;

