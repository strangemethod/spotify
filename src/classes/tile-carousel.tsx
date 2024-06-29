import React from 'react';

import Tile from './tile.tsx'

import '../styles/tile-carousel.css'


export default class TileCarousel extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log(this.props.tiles)
    return (
      <div className="tile-carousel">
        <ul>
          {this.props.tiles && this.props.tiles.map((tile, idx) => ( 
              <Tile key={idx}
                title={tile.name}
                subtitle={tile.artists[0].name}
                image={tile.album.images[0].url} />
            ))
          }
        </ul>
      </div>
    );
  }
}