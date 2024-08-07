import { useEffect } from 'react'
import browseTiles from './browse-tiles.tsx'
import TileGrid from '../components/tile-grid.tsx'


export default function Browse(props) {
  let tiles = browseTiles()

  tiles = tiles.map((tile) => {
    tile.style = 'layered'
    return tile
  })

  useEffect(() => {
    (async () => {
      await props.sdk.recommendations.genreSeeds();
    })();
  }, [props.sdk]);


  return (
    <main>
      <h1>Browse</h1>
      <TileGrid {...props} handler={props.getResultsPage} tiles={tiles} type="genre" />
    </main>
   )
 }