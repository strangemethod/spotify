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

  return (
    <div className="tile-grid">
      <TileGridTrail open={open}>
        {tiles && tiles.map((tile, idx) => ( 
          <Tile key={idx}
            image={tile.image}
            subtitle={tile.subtitle}
            style={tile.style}
            title={tile.title}
          />
        ))}
      </TileGridTrail>
    </div>
  );
}