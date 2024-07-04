import { useState } from 'react';
import getDetailPage from '../functions/get-detail-page.ts'
import Subnav from './subnav.tsx'
import TileGrid from '../components/tile-grid.tsx'


export default function Library(props) {
  const tabs = ['Playlists', 'Podcasts', 'Audiobooks', 'Artists', 'Albums'];
  const [tab, setTab] = useState(tabs[0]);

  const showAudiobooks = () => {
    if (tab === 'Audiobooks' && props.audiobooks) {
      return (
        props.audiobooks.length
        ? <TileGrid {...props} handler={getDetailPage} tiles={props.audiobooks} type="shows" />
        : <h3>You do not have any saved Audiobooks.</h3>
      )
    }
  }

  const showPodcasts = () => {
    if (tab === 'Podcasts' && props.shows) {
      return (
        props.shows.length
        ? <TileGrid {...props} handler={getDetailPage} tiles={props.shows} type="shows" />
        : <h3>You do not have any saved Podcasts.</h3>
      )
    }
  }


  return (
    <main>
      <Subnav setTab={setTab} tab={tab} tabs={tabs} />
      <h1>{tab}</h1>
      {tab === 'Playlists' && props.playlists &&
        <TileGrid {...props} handler={getDetailPage} tiles={props.playlists} type="playlist" />
      }
      {showAudiobooks()}
      {tab === 'Artists' && props.topArtists &&
        <TileGrid {...props} handler={getDetailPage} tiles={props.topArtists} type="artist" />
      }
      {showPodcasts()}
      {tab === 'Albums' && props.albums &&
        <TileGrid {...props} handler={getDetailPage} tiles={props.albums} type="album" />
      }
    </main>
   )
 }