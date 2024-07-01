import React, {useState} from 'react'
import { useTrail, a, easings } from '@react-spring/web'
import Tile from './tile.tsx'
import '../styles/tile-grid.scss'


const TileGridTrail: React.FC<{ open: boolean }> = ({ open, children }) => {
  const items = React.Children.toArray(children)
  const trail = useTrail(items.length, {
    config: { mass: 5, tension: 3500, friction: 200},
    opacity: open ? 1 : 0,
    y: open ? 0 : -15,
    from: { opacity: 0, y: -15},
  })
  return (
    <>
      {trail.map(({ height, ...style }, index) => (
        <a.div key={index} style={style}>
          {items[index]}
        </a.div>
      ))}
    </>
  )
}

export default function TileGrid({tiles}) {
  const [open, set] = useState(true)

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
      <TileGridTrail open={open}>
        {tiles && tiles.map((tile, idx) => ( 
          <Tile key={idx}
            image={getImage(tile)}
            subtitle={tile.subtitle || tile.description}
            style={tile.style}
            title={getTitle(tile)}
          />
        ))}
      </TileGridTrail>
    </div>
  );
}