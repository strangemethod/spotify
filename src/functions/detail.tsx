import { useState } from 'react'
import ChipGrid from '../components/chip-grid.tsx'
import GetColor from './get-color.tsx'
import {removeNbsp} from './utilities.ts'

import '../styles/detail.scss'

export default function Detail(props) {
  const [exanded, setExpanded] = useState(true)

  const getSubtitle = () => {
    if (props.detail.type === 'album') {
      return props.detail.artists[0].name
    } else if (props.detail.type === 'show') {
      return props.detail.publisher
    } else {
      return props.detail.type;
    }
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
          <p className="detail-type type-xsmall">{getSubtitle()}</p>
          <h1>{props.detail.name}</h1>
        </div>
      </div>
      <main className="bg-gradient">
        {props.tracks &&
          <div className="detailTracks">
            <h2>Top Tracks</h2>
              <ChipGrid {...props} chips={props.tracks} max="9" />
          </div>
        }
        {props.detail.description &&
          <div className="detail-description type-small"
              dangerouslySetInnerHTML={{ __html: removeNbsp(props.detail.description)}}>
          </div>
        }
      </main>
    </div>
   )
 }