import browseTiles from './browse-tiles.tsx'
import TileGrid from '../components/tile-grid.tsx'

export default function Results(props) {

  let title = '';
  const genres = browseTiles();

  genres.forEach((tile) => {
    if (props.genre === tile.genre) title = tile.title
  })

  return (
    <main className="results">
      <h1>{title}</h1>
      <TileGrid {...props} handler={props.getDetailPage} tiles={props.recs} type="track" />
    </main>
   )
 }