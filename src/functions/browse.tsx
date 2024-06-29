import { useEffect, useState } from 'react';
import { SearchResults, SpotifyApi } from '@spotify/web-api-ts-sdk';

import TopArtists from './topArtists.tsx'


export default function Browse({ sdk }: { sdk: SpotifyApi }) {
  // useEffect(() => {
  //   (async () => {
  //     const results = await sdk.recommendations.genreSeeds();

  //   })();
  // }, [sdk]);
  return (
    <main>
      <h1>Browse</h1>
    </main>
   )
 }