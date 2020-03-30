import React from 'react';
import logo from './logo.png';

class Index extends React.Component {
  constructor() {
    super();
    this.state = {
      active: false,
    };
  }

  componentWillUpdate() {
    if (this.state.active === false) {
      document.getElementById('player').play();
    } else {
      document.getElementById('player').pause();
    }
  }

  render() {
    const string = `//`;

    const handleClick = (e, state) => {
      this.setState({ active: !this.state.active });
    };

    return (
      <>
        <div className='image'>
          <img src={logo} className='App-logo' alt='logo' />
          {/* <div className='video' onClick={e => handleClick(e)}>
            <div
              id='play-btn'
              className={
                this.state.active === false ? 'triangle-mode' : 'rectangle-mode'
              }
            ></div>
          </div> */}
        </div>
        <div className='text'>
          <h3>{`${string}///PERPETUAL STREAM///${string}`}</h3>
          <div className='video' onClick={e => handleClick(e)}>
            <div
              id='play-btn'
              className={
                this.state.active === false ? 'triangle-mode' : 'rectangle-mode'
              }
            ></div>
          </div>
          <h3>
            <a
              href='https://hiddenharmony.bigcartel.com/product/c-r-gillespie-concentration-patterns-2lp-hh01'
              target='_blank'
            >
              PRE ORDER
            </a>
          </h3>

          <p>Out May 1st on 2xLP</p>
          <p>Hidden Harmony Recordings</p>
          <p>(HH01)</p>
        </div>
        <audio
          src='http://edge.mixlr.com/channel/evezj'
          type='audio/mpeg'
          id='player'
        ></audio>
      </>
    );
  }
}

export default Index;
