import React from 'react';
import logo from './logo.png';
import './App.css';

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <div className='image'>
          <img src={logo} className='App-logo' alt='logo' />
        </div>
        <div className='text'>
          <p>75' runtime</p>
          <p>May 1st</p>
          <p>Hidden Harmony Recordings</p>
          <p>(HH01)</p>
        </div>
        <audio
          src='http://edge.mixlr.com/channel/onuip'
          type='audio/mpeg'
          autoplay
          controls
        ></audio>
      </header>
    </div>
  );
}

export default App;
