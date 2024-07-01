import Chip from './chip.tsx'
import '../styles/chip-grid.css'


export default function ChipGrid({artist, chips, getDetailPage, max, sdk, setArtist, setPage}) {
  const chipsGroup = chips.length > max 
      ? chips.slice(0, max)
      : chips;

  return (
    <ul className="chip-grid">
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
        ))
      }
    </ul>
  );
}