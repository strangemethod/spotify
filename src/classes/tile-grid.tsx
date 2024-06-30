import React from 'react';

import Tile from './tile.tsx'

import '../styles/tile-grid.css'

export default class TileGrid extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <ul className="tile-grid">
        {this.props.tiles && this.props.tiles.map((tile, idx) => ( 
            <Tile key={idx}
              image={tile.image || tile.images[0].url}
              subtitle={tile.subtitle || tile.description}
              style={tile.style}
              title={tile.title || tile.name}
            />
          ))
        }
      </ul>
    );
  }
}