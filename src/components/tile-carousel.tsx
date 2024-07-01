import Tile from './tile.tsx'
import '../styles/tile-carousel.scss'


export default function TileCarousel({tiles}) {
  return (
     <div className="tile-carousel">
        {tiles.map((tile, idx) => (
          <Tile key={idx}
            title={tile.name || tile.album.name}
            subtitle={tile.artists ? tile.artists[0].name : tile.album.artists[0].name}
            image={tile.album.images[0].url}
            style="small" />
        ))}
      </div>
  );
}