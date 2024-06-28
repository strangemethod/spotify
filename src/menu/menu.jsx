import React from "react";
import './menu.css';
const playlists = require('./menu.json');


export default class Playlist extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
    }
  }

  render() {
    return (
      <div className="playlist">
        <ul>
          {playlists.map((playlist, idx) => (
              <li key={idx}>
                <h2>{playlist}</h2>
              </li>
            ))
          }
        </ul>
      </div>
    );
  }
}