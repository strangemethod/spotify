import { useEffect, useState } from 'react';
import { SearchResults, SpotifyApi } from '@spotify/web-api-ts-sdk';
import Subnav from './subnav.tsx'
import TileGrid from '../components/tile-grid.tsx'


export default function Library({sdk, apiWrapper, playlists, setPlaylists, audiobooks, 
      setAudiobooks, topArtists, albums, shows}) {
  const tabs = ['Playlists', 'Podcasts', 'Audiobooks', 'Artists', 'Albums'];
  const [tab, setTab] = useState(tabs[0]);

  const playlistArgs = {
    name: 'playlists',
    data: playlists,
    endpoint: () => {return sdk.currentUser.playlists.playlists()},
    setter: setPlaylists
  }

  const audiobookArgs = {
    name: 'audiobooks',
    data: audiobooks,
    endpoint: () => {return sdk.currentUser.audiobooks.savedAudiobooks()},
    setter: setAudiobooks
  }


  // Spotify API methods.
  useEffect(() => {
    (async () => {
      apiWrapper(playlistArgs)
      apiWrapper(audiobookArgs)
    })();
  }, [sdk]);

  return (
    <main>
      <Subnav setTab={setTab} tab={tab} tabs={tabs} />
      <h1>{tab}</h1>
      {tab === 'Playlists' && playlists &&
        <TileGrid tiles={playlists} />
      }
     {tab === 'Audiobooks' && audiobooks &&
        <TileGrid tiles={audiobooks} />
      }
      {tab === 'Artists' && topArtists &&
        <TileGrid tiles={topArtists} />
      }
      {tab === 'Podcasts' && shows && 
        <TileGrid tiles={shows} />
      }
      {tab === 'Albums' && albums &&
        <TileGrid tiles={albums} />
      }
    </main>
   )
 }