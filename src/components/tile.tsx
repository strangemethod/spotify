import '../styles/tile.scss'
import apiWrapper from '../functions/api-wrapper.ts'
import {stripTags, truncateText} from '../functions/utilities.ts'

export default function Tile(props) {
  const getSubtitle = (subtitle) => {
    return truncateText(stripTags(subtitle), 35)
  }

  const clickHandler = () => {
    if (props.handler) {
      props.handler({...props})
    }
  }

  return (
    <button 
        className={"tile " + (props.style || 'stacked')}
        onClick={() => {
          if (props.genre) props.setGenre(props.genre)
          clickHandler()
        }}>
      <div className="tile-image">
        <img src={props.image} alt="" />
      </div>
      <div className="tile-text">
        <h3 className={"type-medium " + (props.style !== 'layered' ? 'type-bold' : '')}>
          {truncateText(props.title, props.maxLength || 35)}
        </h3>
        <p className="type-small color-text-light"
            dangerouslySetInnerHTML={{ __html: truncateText(stripTags(props.subtitle), props.maxLength || 35)}}>
        </p>
      </div>
    </button>
  );
}