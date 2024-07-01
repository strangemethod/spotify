import '../styles/chip.scss'
import apiWrapper from '../functions/api-wrapper.ts'


export default function Chip({artist, getDetailPage, image, sdk, setArtist, setPage, spotifyId, title, type}) {
  return (
    <button className="chip color-grey"
        onClick={() => {getDetailPage({artist, sdk, setArtist, setPage, spotifyId, type})}}>
      <img src={image} alt="" />
      <h3 className="chip-title type-medium type-bold">{title}</h3>
    </button>
  );
}