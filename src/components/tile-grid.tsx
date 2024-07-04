import React, {useState} from 'react'
import { useTrail, a} from '@react-spring/web'
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

export default function TileGrid(props) {
  const [open] = useState(true)

  return (
    <div className="tile-grid">
      <TileGridTrail open={open}>
        {props.tiles && props.tiles.map((tile, idx) => ( 
          <Tile {...props}
            key={idx}
            genre={tile.genre}
            id={tile.album || tile.id}
            image={tile.image}
            spotifyId={tile.id}
            subtitle={tile.subtitle}
            style={tile.style}
            title={tile.title}
          />
        ))}
      </TileGridTrail>
    </div>
  );
}