import React from 'react'
import logo from './logo.png';

class Index extends React.Component {
  constructor() {
      super()
      this.state = {
          active: false
      }
	}
	
  render() {
		const string = `//`

		const handleClick = () => {
			this.setState({active: !this.state.active})
			if(this.state.active === true) {
				document.getElementById('player').play();
			}

			if(this.state.active === false) {
				document.getElementById('player').pause();
			}
		}

    return(
      <>
      	<div className='image'>
        	<img src={logo} className='App-logo' alt='logo' />
					<div className="video" onClick={(e) => handleClick(e)} >
          	<div id="play-btn" className={this.state.active === false ? "triangle-mode" : "rectangle-mode"}></div>
        	</div>
        </div>
        <div className='text'>
        <h3>{`${string}///PERPETUAL STREAM///${string}`}</h3>
          <p>May 1st</p>
          <p>Hidden Harmony Recordings</p>
          <p>(HH01)</p>
        </div>
        <audio
        	src='http://edge.mixlr.com/channel/onuip'
          type='audio/mpeg'
          autoplay
          id="player"
        ></audio>
      </>
    )
  }
}


export default Index;