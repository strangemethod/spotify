import { useEffect, useState } from 'react';
import { SearchResults, SpotifyApi } from '@spotify/web-api-ts-sdk';

import Subnav from './subnav.tsx'
import TileGrid from '../classes/tile-grid.tsx'


export default function Library({sdk, getApiData, playlists, setPlaylists}) {
  const tabs = ['Playlists', 'Podcasts', 'Audiobooks', 'Artists', 'Albums'];
  const [tab, setTab] = useState(tabs[0]);

  const playlistArgs = {
    name: 'playlists',
    data: playlists,
    endpoint: () => {return sdk.currentUser.playlists.playlists()},
    setter: setPlaylists
  }

  // Spotify API methods.
  useEffect(() => {
    (async () => {
      // getPlaylists();
      getApiData(playlistArgs)
    })();
  }, [sdk]);

  return (
    <main>
      <Subnav setTab={setTab} tab={tab} tabs={tabs} />
      <h1>{tab}</h1>
      {playlists &&
        <TileGrid tiles={playlists} />
      }
    </main>
   )
 }