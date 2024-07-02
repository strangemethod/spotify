import '../styles/chip.scss'
import apiWrapper from '../functions/api-wrapper.ts'


export default function Chip(props) {
  const callAction = () => {
    if (props.action) {
      props.action({...props})
    }
  }


  return (
    <button className="chip color-grey"
        onClick={() => {callAction()}}>
      <img src={props.image} alt="" />
      <h3 className="chip-title type-medium type-bold">{props.title}</h3>
    </button>
  );
}