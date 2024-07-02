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

  const maxTitle = 35;
  let titleClean = title.length > maxTitle
      ? `${title.substring(0, maxTitle)}...`
      : title;

  const maxSubtitle = 35;
  let subtitleClean = removeTags(subtitle);
  subtitleClean = subtitleClean.length > maxSubtitle
      ? `${subtitleClean.substring(0, maxSubtitle)}...`
      : subtitleClean;

  return (
    <div className={"tile " + (style || 'stacked')}>
      <div className="tile-image">
        <img src={image} alt="" />
      </div>
      <div className="tile-text">
        <h3 className={"type-medium " + (style !== 'layered' ? 'type-bold' : '')}>{titleClean}</h3>
        <p className="type-small color-text-light" dangerouslySetInnerHTML={{ __html: subtitleClean}}></p>
      </div>
    </div>
  );
}