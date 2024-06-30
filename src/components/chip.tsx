import '../styles/chip.css'


export default function Chip({image, title}) {
  return (
    <button className="chip color-grey">
      <img src={image} alt="" />
      <h3 className="type-medium">{title}</h3>
    </button>
  );
}