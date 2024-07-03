import browseTiles from './browse-tiles.tsx'
import getDetailPage from './functions/get-detail-page.ts'
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
      <TileGrid {...props} action={props.getDetailPage} tiles={props.recs} type="track" />
    </main>
   )
 }