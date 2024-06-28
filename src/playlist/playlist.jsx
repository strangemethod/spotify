import React from "react";
import './playlist.css';
const tracks = require('./playlist.json');


export default class Playlist extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="playlist">
        <ul className="playlist-tracklist">
          {tracks.map((track, idx) => (
              <li 
                  key={idx}
                  className="playlist-track"
                  onClick={() => {this.props.loadTrack(idx)}}>
                <div className="playlist-track-info-container">
                  <p className="playlist-track-info">{idx}</p>
                  <img className="playlist-track-info"
                      src={`/albums/${track.image}`} />
                  <div className="playlist-track-info">
                    <h2>{track.title}</h2>
                    <h3>{track.artist}</h3>
                  </div>
                </div>
                <div>
                  <p>{track.album}</p>
                </div>
                <div>                
                  <p>{track.run_time}</p>
                </div>
              </li>
            ))
          }
        </ul>
      </div>
    );
  }
}