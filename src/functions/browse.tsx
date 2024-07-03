import { useEffect, useState } from 'react'
import { SearchResults, SpotifyApi } from '@spotify/web-api-ts-sdk'
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
      const res = await props.sdk.recommendations.genreSeeds();
    })();
  }, [props.sdk]);


  return (
    <main>
      <h1>Browse</h1>
      <TileGrid {...props} handler={props.getResultsPage} tiles={tiles} type="genre" />
    </main>
   )
 }