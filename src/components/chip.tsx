import '../styles/chip.scss'
import {stripTags, truncateText} from '../functions/utilities.ts'


export default function Chip(props) {
  const clickHandler = () => {
    if (props.handler) {
      props.handler({...props})
    }
  }

  return (
    <button className="chip color-grey"
        onClick={() => {clickHandler()}}>
      {props.image &&
        <img src={props.image} alt="" />
      }
      <div className="chip-text">
        <h3 className="chip-title type-medium type-bold"
             dangerouslySetInnerHTML={{ __html: truncateText(stripTags(props.title), 35)}}>
        </h3>
        {props.subtitle &&
          <p className="type-small">{props.subtitle}</p>
        }
      </div>
    </button>
  );
}