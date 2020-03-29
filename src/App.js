import React from 'react';
import './App.css';
import Index from '../src/Components/Index';
import Socials from '../src/Components/Socials';

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <Socials />
        <div className='topText'>
          <h1>C.R. Gillespie</h1>
          <h2>CONCENTRATION PATTERNS</h2>
        </div>
        <Index />
      </header>
    </div>
  );
}

export default App;
