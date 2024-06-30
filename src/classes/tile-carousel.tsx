import React from 'react';

import Tile from './tile.tsx'

import '../styles/tile-carousel.css'


export default class TileCarousel extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const chips = this.props.tiles.length > this.props.max 
        ? this.props.tiles.slice(0, this.props.max)
        : this.props.tiles;
    
    return (
      <div className="tile-carousel">
        <ul>
          {this.props.tiles && this.props.tiles.map((tile, idx) => ( 
              <Tile key={idx}
                title={tile.name || tile.album.name}
                subtitle={tile.artists ? tile.artists[0].name : tile.album.artists[0].name}
                image={tile.album.images[0].url} />
            ))
          }
        </ul>
      </div>
    );
  }
}