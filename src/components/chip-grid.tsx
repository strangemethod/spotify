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

export default function ChipGrid({artist, chips, getDetailPage, max, sdk, setArtist, setPage}) {
  const [open, set] = useState(true)
  const chipsGroup = chips.length > max 
      ? chips.slice(0, max)
      : chips;

  return (
    <ul className="chip-grid">
      <ChipTrail open={open}>
        {chipsGroup && chipsGroup.map((chip, idx) => (
            <Chip key={idx}
                artist={artist}
                getDetailPage={getDetailPage} 
                image={chip.images[0].url}
                setArtist={setArtist}
                setPage={setPage}
                sdk={sdk}
                spotifyId={chip.id}
                title={chip.name}
                type={chip.type}
            />
          ))}
      </ChipTrail>
    </ul>
  );
}