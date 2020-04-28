import React, { Component } from 'react';
import './Player.css';

class Player extends Component {
	displayTracks = () => {
    let track = [...this.props.track];
    
    
    let song = new Audio(track[0].track.preview_url)
    song.loop = true;
    song.volume = 0.1;
    song.play()

    this.setState({
      song: song
    })
  };
  

  render() {
    console.log(this.state)
    return (
      <div>
        <ul>
          <button onClick={()=>{this.displayTracks()}}>Start Song</button>
      </ul>
    </div>
    )
	}
}

export default Player;
