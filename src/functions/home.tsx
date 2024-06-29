import { useEffect, useState } from 'react';
import { SearchResults, SpotifyApi } from '@spotify/web-api-ts-sdk';

import TopArtists from './topArtists.tsx'
import TopTracks from './topTracks.tsx'


export default function Home({ sdk }: { sdk: SpotifyApi }) {

  return (
    <>
      <h1 className="type-large">Good Afternoon</h1>
      <TopArtists sdk={sdk} />
      <TopTracks sdk={sdk} />
    </>
  )
}