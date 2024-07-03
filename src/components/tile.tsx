import '../styles/tile.scss'
import apiWrapper from '../functions/api-wrapper.ts'
import {stripTags, truncateText} from '../functions/utilities.ts'

export default function Tile(props) {
  const getSubtitle = (subtitle) => {
    return truncateText(stripTags(subtitle), 35)
  }

  const callAction = () => {
    if (props.action) {
      props.action({...props})
    }
  }

  return (
    <button 
        className={"tile " + (props.style || 'stacked')}
        onClick={() => {
          if (props.genre) props.setGenre(props.genre)
          callAction()
        }}>
      <div className="tile-image">
        <img src={props.image} alt="" />
      </div>
      <div className="tile-text">
        <h3 className={"type-medium " + (props.style !== 'layered' ? 'type-bold' : '')}>{truncateText(props.title, 35)}</h3>
        <p className="type-small color-text-light"
            dangerouslySetInnerHTML={{ __html: truncateText(stripTags(props.subtitle), 35)}}></p>
      </div>
    </button>
  );
}