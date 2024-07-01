import Tile from './tile.tsx'
import '../styles/tile-grid.scss'

export default function TileGrid({tiles}) {

  const getImage = (tile) => {
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

  const getTitle = (tile) => {
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

  return (
    <div className="tile-grid">
      {tiles && tiles.map((tile, idx) => ( 
          <Tile key={idx}
            image={getImage(tile)}
            subtitle={tile.subtitle || tile.description}
            style={tile.style}
            title={getTitle(tile)}
          />
        ))
      }
    </div>
  );
}