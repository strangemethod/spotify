import '../styles/tile.scss'
import apiWrapper from '../functions/api-wrapper.ts'

export default function Tile(props) {
  const removeTags = (str) => {
    if (!str) {
      return ''
    } else {
      str = str.toString();
    }
    return str.replace(/(<([^>]+)>)/ig, '');
  }

  const maxTitle = 35;
  let titleClean = props.title.length > maxTitle
      ? `${props.title.substring(0, maxTitle)}...`
      : props.title;

  const maxSubtitle = 35;
  let subtitleClean = removeTags(props.subtitle);
  subtitleClean = subtitleClean.length > maxSubtitle
      ? `${subtitleClean.substring(0, maxSubtitle)}...`
      : subtitleClean;

  const callAction = () => {
    if (props.action) {
      props.action({...props})
    }
  }

  return (
    <button 
        className={"tile " + (props.style || 'stacked')}
        onClick={() => {callAction()}}>
      <div className="tile-image">
        <img src={props.image} alt="" />
      </div>
      <div className="tile-text">
        <h3 className={"type-medium " + (props.style !== 'layered' ? 'type-bold' : '')}>{titleClean}</h3>
        <p className="type-small color-text-light" dangerouslySetInnerHTML={{ __html: subtitleClean}}></p>
      </div>
    </button>
  );
}