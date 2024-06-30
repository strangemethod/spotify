import React from 'react';

import Tile from './tile.tsx'

import '../styles/tile-grid.css'

export default class TileGrid extends React.Component {
  constructor(props) {
    super(props);
  }

  getImage = (tile) => {
    if (tile.images) {
      return tile.images[0].url;
    } else if (tile.album && tile.album.images) {
      return tile.album.images[0].url;
    } else if (tile.show && tile.show.images) {
      return tile.show.images[0].url;
    } else {
      return tile.image;
    }
  }

  getTitle = (tile) => {
    if (tile.album) {
      return tile.album.name;
    } else if (tile.show) {
      return tile.show.name;
    } else if (tile.name) {
      return tile.name;
    } else {
      return tile.title;
    }
  }

  render() {
    return (
      <ul className="tile-grid">
        {this.props.tiles && this.props.tiles.map((tile, idx) => ( 
            <Tile key={idx}
              image={this.getImage(tile)}
              subtitle={tile.subtitle || tile.description}
              style={tile.style}
              title={this.getTitle(tile)}
            />
          ))
        }
      </ul>
    );
  }
}