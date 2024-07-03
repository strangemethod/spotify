import { useEffect, useState } from 'react'
import React from 'react'
import { Scopes, SearchResults, SpotifyApi } from '@spotify/web-api-ts-sdk'
import { useSpotify } from './hooks/useSpotify.ts'

import Browse from './functions/browse.tsx'
import Components from './functions/components-page.tsx'
import Detail from './functions/detail.tsx'
import getDetailPage from './functions/get-detail-page.ts'
import getResultsPage from './functions/get-results-page.ts'
import Header from './functions/header.tsx'
import Home from './functions/home.tsx'
import { isComponentPage } from './functions/utilities.ts'
import Library from './functions/library.tsx'
import Results from './functions/results.tsx'

import './styles/app.scss'


function App() {
  const sdk = useSpotify(
    "49fef81c299049e5b7738107d20af951",
    "http://localhost:3000/", 
    Scopes.all
  );

  const pages = ['home', 'browse', 'library']

  // App State
  const [albums, setAlbums] = useState(null)
  const [audiobooks, setAudiobooks] = useState(null)
  const [currentPage, setPage] = useState(isComponentPage() ? 'components' : 'home')
  const [currentTrack, setTrack] = useState('home')
  const [detail, setDetail] = useState(null)
  const [detailColor, setDetailColor] = useState(null)
  const [detailTracks, setDetailTracks] = useState(null)
  const [genre, setGenre] = useState(null)
  const [playlists, setPlaylists] = useState(null)
  const [recs, setRecs] = useState(null)
  const [shows, setShows] = useState(null)
  const [topArtists, setTopArtists] = useState(null)
  const [topTracks, setTopTracks] = useState(null)

  const globalProps = {
    albums,
    audiobooks,
    currentPage,
    currentTrack,
    detail,
    detailColor,
    detailTracks,
    genre,
    getDetailPage,
    getResultsPage,
    playlists,
    recs,
    sdk,
    setAlbums,
    setAudiobooks,
    setDetail,
    setDetailColor,
    setDetailTracks,
    setGenre,
    setPage,
    setPlaylists,
    setRecs,
    setShows,
    setTopArtists,
    setTopTracks,
    setTrack,
    shows,
    topArtists,
    topTracks,
  }

  return(
    <div className="app">
      <Header currentPage={currentPage} pages={pages} setPage={setPage} />

      {sdk && currentPage === 'browse' &&
        <Browse {...globalProps}   />
      }

      {sdk && currentPage === 'home' &&
        <Home {...globalProps} />
      }

      {sdk && currentPage === 'library' &&
        <Library {...globalProps} />
      }

      {sdk && detail !== null && currentPage === 'detail' &&
        <Detail {...globalProps} detail={detail} tracks={detailTracks} />
      }

      {sdk && genre !== null && currentPage === 'results' &&
        <Results {...globalProps}/>
      }

      {sdk && currentPage === 'components' &&
        <Components {...globalProps}   />
      }
    </div>
  )
}

 export default App;
