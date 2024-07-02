import '../styles/chip.scss'
import apiWrapper from '../functions/api-wrapper.ts'


export default function Chip(props) {
  const maxTitle = 40;
  let titleClean = props.title.length > maxTitle
      ? `${props.title.substring(0, maxTitle)}...`
      : props.title;


  const callAction = () => {
    if (props.action) {
      props.action({...props})
    }
  }

  return (
    <button className="chip color-grey bg-gradient"
        onClick={() => {callAction()}}>
      <img src={props.image} alt="" />
      <h3 className="chip-title type-medium type-bold">{titleClean}</h3>
    </button>
  );
}