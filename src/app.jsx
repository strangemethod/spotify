import React from "react";
import './app.css';
import Player from "./player/player.jsx";
import Playlist from "./playlist/playlist.jsx";

const tracks = require('./playlist/playlist.json');


export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      'playing': false,
      'playlist': true,
      'track': 0,
    }
  }

  loadPlaylist = (playlist) => {
    this.setState({
      'playlist': playlist
    })
  }

  loadTrack = (trackIndex) => {    
    this.setState({
      'track': trackIndex
    })
  }

  playTrack = () => {    
    this.setState({
      'playing': true,
    })
  }

  pauseTrack = () => {    
    this.setState({
      'playing': false,
    })
  }


  globalProps = {
    loadPlaylist: this.loadPlaylist,
    loadTrack: this.loadTrack,
    playTrack: this.playTrack,
    pauseTrack: this.pauseTrack,
  }

  render() {
    return (
      <div className="app">
        {this.state.playlist &&
          <Playlist {...this.globalProps} />
        }
        {typeof this.state.track === 'number' &&
          <Player track={this.state.track} />
        }
      </div>
    );
  }
}