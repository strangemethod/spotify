import ChipGrid from '../components/chip-grid.tsx'
import GetColor from './get-color.tsx'
import '../styles/detail.scss'

export default function Detail(props) {
  const cleanHtml = () => {
    // Strip invisibile characters
    let dom = document.createElement('div')
    dom.innerHTML = props.detail.description
    dom.innerHTML = dom.innerHTML.replace(/\&nbsp;/g, ' ')
    const cleanHtml = dom.innerHTML.toString()
    return cleanHtml
  }

  return (
    <div className="detail">
      <div className="color-canvas">
        <GetColor {...props} imageUrl={props.detail.images[0].url} />
      </div>

      <div className="detail-hero color-grey"
          style={props.detailColor ? {backgroundImage: props.detailColor} : {}}>
        <div>
          <img src={props.detail.images[0].url} alt="" />
        </div>
        <div className="detail-hero-text">
          <p className="detail-type type-xsmall">{props.detail.type}</p>
          <h1>{props.detail.name}</h1>
        </div>
      </div>
      <main className="bg-gradient">
        {props.detail.description &&
          <div className="detail-description type-small"
              dangerouslySetInnerHTML={{ __html: cleanHtml(props.detail.description)}}>
          </div>
        }
        {props.tracks &&
          <div className="detailTracks">
            <h2>Top Tracks</h2>
              <ChipGrid {...props} chips={props.tracks} max="9" />
          </div>
        }
      </main>
    </div>
   )
 }