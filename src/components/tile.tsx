import '../styles/tile.scss'

export default function Tile({title, subtitle, image, style}) {
  const removeTags = (str) => {
    if (!str) {
      return ''
    } else {
      str = str.toString();
    }
    return str.replace(/(<([^>]+)>)/ig, '');
  }

  const maxChars = 35;
  let subtitleClean = removeTags(subtitle);
  subtitleClean = subtitleClean.length > maxChars
      ? `${subtitleClean.substring(0, maxChars)}...`
      : subtitleClean;

  return (
    <div className={"tile " + (style || 'stacked')}>
      <img src={image} alt="" />
      <div className="tile-text">
        <h3 className="type-medium">{title}</h3>
        <p className="type-small color-text-light" dangerouslySetInnerHTML={{ __html: subtitleClean}}></p>
      </div>
    </div>
  );
}