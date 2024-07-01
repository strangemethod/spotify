import '../styles/artist.css'

export default function Artist({artist}) {
  return (
    <main className="detail-artist">
      <div className="artist-hero color-grey">
        <div>
          <img src={artist.images[0].url} alt="" />
        </div>
        <div className="artist-hero-text">
          <p className="type-xsmall">ARTIST</p>
          <h1>{artist.name}</h1>
        </div>
      </div>
    </main>
   )
 }