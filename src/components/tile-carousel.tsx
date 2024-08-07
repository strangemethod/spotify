import React, {useEffect, useState} from 'react'
import { useTrail, a } from '@react-spring/web'
import Tile from './tile.tsx'
import '../styles/tile-carousel.scss'


const CarouselTrail: React.FC<{ open: boolean }> = ({ open, children }) => {
  const items = React.Children.toArray(children)
  const trail = useTrail(items.length, {
    config: { mass: 5, tension: 3000, friction: 200},
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

export default function TileCarousel(props) {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    // Delay carousel loadind to ensure smooth animations.
    setTimeout(() => {
      setOpen(true)
    }, 200)
  }, []);

  return (
     <div className="tile-carousel">
        <CarouselTrail open={open}>
          {props.tiles.map((tile, idx) => (
            <Tile key={idx}
              {...props}
              id={tile.album || tile.id}
              image={tile.image}
              subtitle={tile.subtitle}
              title={tile.title}
              // eslint-disable-next-line react/style-prop-object
              style="small" />
          ))}
        </CarouselTrail>
      </div>
  );
}