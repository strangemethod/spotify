import React, {useState} from 'react'
import { useTrail, a, easings } from '@react-spring/web'
import Chip from './chip.tsx'
import '../styles/chip-grid.scss'


const ChipTrail: React.FC<{ open: boolean }> = ({ open, children }) => {
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

export default function ChipGrid(props) {
  const [open, set] = useState(true)
  const chipsGroup = props.chips.length > props.max 
      ? props.chips.slice(0, props.max)
      : props.chips;

  return (
    <ul className="chip-grid">
      <ChipTrail open={open}>
        {chipsGroup && chipsGroup.map((chip, idx) => (
            <Chip 
                {...props}
                key={idx}
                image={chip.image}
                spotifyId={chip.id}
                title={chip.title}
                uri={chip.uri}
            />
          ))}
      </ChipTrail>
    </ul>
  );
}