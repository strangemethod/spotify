import '../styles/detail.scss'
import ChipGrid from '../components/chip-grid.tsx'

export default function Detail({data, tracks}) {
  return (
    <div className="detail">
      <div className="detail-hero color-grey">
        <div>
          <img src={data.images[0].url} alt="" />
        </div>
        <div className="detail-hero-text">
          <p className="type-xsmall">ARTIST</p>
          <h1>{data.name}</h1>
        </div>
      </div>
      <main>
        {tracks &&
          <div className="detailTracks">
            <h2>Top Tracks</h2>
              <ChipGrid chips={tracks} max="9" />
          </div>
        }
      </main>
    </div>
   )
 }