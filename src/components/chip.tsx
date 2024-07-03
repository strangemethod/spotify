import '../styles/chip.scss'
import apiWrapper from '../functions/api-wrapper.ts'
import {stripTags, truncateText} from '../functions/utilities.ts'


export default function Chip(props) {
  const callAction = () => {
    if (props.action) {
      props.action({...props})
    }
  }

  return (
    <button className="chip color-grey bg-gradient"
        onClick={() => {callAction()}}>
      {props.image &&
        <img src={props.image} alt="" />
      }
      <h3 className="chip-title type-medium type-bold">{truncateText(stripTags(props.title), 35)}</h3>
    </button>
  );
}