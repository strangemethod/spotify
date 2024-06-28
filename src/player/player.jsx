import React from "react";
import './player.css';
const tracks = require('../playlist/playlist.json');

export default class Player extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let currentTrack = tracks[this.props.track]

    return (
      <div className="player">

        <audio controls>
          <source src="horse.mp3" type="audio/mpeg" />
          Your browser does not support the audio element.
        </audio>

        <div className="player-info">
          <h2>{currentTrack.artist}</h2>
          <h3>{currentTrack.title}</h3>
        </div>
        <div className="player-transports">
          <button>prev</button>
          <button className="player-transports-play"
              aria-label="Play track" >
            <img src="/icons/play.svg" />
          </button>
          <button>next</button>
        </div>
        <div className="player-options">
        </div>
      </div>
    );
  }
}