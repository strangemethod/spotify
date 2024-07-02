import '../styles/detail.scss'

export default function Detail({data}) {
  return (
    <main className="detail">
      <div className="detail-hero color-grey">
        <div>
          <img src={data.images[0].url} alt="" />
        </div>
        <div className="detail-hero-text">
          <p className="type-xsmall">ARTIST</p>
          <h1>{data.name}</h1>
        </div>
      </div>
    </main>
   )
 }