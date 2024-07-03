import { useEffect, useState } from 'react';
import { SearchResults, SpotifyApi } from '@spotify/web-api-ts-sdk';
import apiWrapper from './api-wrapper.ts'
import getDetailPage from '../functions/get-detail-page.ts'
import Subnav from './subnav.tsx'
import TileGrid from '../components/tile-grid.tsx'


export default function Library(props) {
  const tabs = ['Playlists', 'Podcasts', 'Audiobooks', 'Artists', 'Albums'];
  const [tab, setTab] = useState(tabs[0]);

  const playlistArgs = {
    name: 'playlists',
    data: props.playlists,
    endpoint: () => {return props.sdk.currentUser.playlists.playlists()},
    setter: props.setPlaylists
  }

  const audiobookArgs = {
    name: 'audiobooks',
    data: props.audiobooks,
    endpoint: () => {return props.sdk.currentUser.audiobooks.savedAudiobooks()},
    setter: props.setAudiobooks
  }

  // Spotify API methods.
  useEffect(() => {
    (async () => {
      apiWrapper(playlistArgs)
      apiWrapper(audiobookArgs)
    })();
  }, [props.sdk]);

  return (
    <main>
      <Subnav setTab={setTab} tab={tab} tabs={tabs} />
      <h1>{tab}</h1>
      {tab === 'Playlists' && props.playlists &&
        <TileGrid {...props} action={getDetailPage} tiles={props.playlists} type="playlist" />
      }
     {tab === 'Audiobooks' && props.audiobooks &&
        <TileGrid {...props} action={getDetailPage} tiles={props.audiobooks} type="shows" />
      }
      {tab === 'Artists' && props.topArtists &&
        <TileGrid {...props} action={getDetailPage} tiles={props.topArtists} type="artist" />
      }
      {tab === 'Podcasts' && props.shows && 
        <TileGrid {...props} action={getDetailPage} tiles={props.shows} type="shows" />
      }
      {tab === 'Albums' && props.albums &&
        <TileGrid {...props} action={getDetailPage} tiles={props.albums} type="album" />
      }
    </main>
   )
 }