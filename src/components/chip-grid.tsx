import Chip from './chip.tsx'
import '../styles/chip-grid.css'


export default function ChipGrid({chips, max}) {
  const chipsGroup = chips.length > max 
      ? chips.slice(0, max)
      : chips;

  return (
    <ul className="chip-grid">
      {chipsGroup && chipsGroup.map((chip, idx) => (
          <Chip key={idx} title={chip.name} image={chip.images[0].url} />
        ))
      }
    </ul>
  );
}