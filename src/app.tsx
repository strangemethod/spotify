import { useEffect, useState } from 'react'
import React from 'react'
import { Scopes, SearchResults, SpotifyApi } from '@spotify/web-api-ts-sdk'
import { useSpotify } from './hooks/useSpotify.ts'

import Browse from './functions/browse.tsx'
import Detail from './functions/detail.tsx'
import getDetailPage from './functions/get-detail-page.ts'
import Header from './functions/header.tsx'
import Home from './functions/home.tsx'
import Library from './functions/library.tsx'

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
  const [currentPage, setPage] = useState('home')
  const [detail, setDetail] = useState(null)
  const [detailColor, setDetailColor] = useState(null)
  const [detailTracks, setDetailTracks] = useState(null)
  const [playlists, setPlaylists] = useState(null)
  const [shows, setShows] = useState(null)
  const [topArtists, setTopArtists] = useState(null)
  const [topTracks, setTopTracks] = useState(null)

  const globalProps = {
    albums,
    audiobooks,
    currentPage,
    detail,
    detailColor,
    detailTracks,
    getDetailPage,
    playlists,
    sdk,
    setAlbums,
    setAudiobooks,
    setDetail,
    setDetailColor,
    setDetailTracks,
    setPage,
    setPlaylists,
    setShows,
    setTopArtists,
    setTopTracks,
    shows,
    topArtists,
    topTracks,
  }


  return(
    <div className="app">
      <Header currentPage={currentPage} pages={pages} setPage={setPage} />

      {sdk && detail !== null && detailTracks !== null && currentPage === 'detail' &&
        <Detail {...globalProps} detail={detail} tracks={detailTracks} />
      }

      {sdk && currentPage === 'browse' &&
        <Browse {...globalProps}   />
      }

      {sdk && currentPage === 'home' &&
        <Home {...globalProps} />
      }

      {sdk && currentPage === 'library' &&
        <Library {...globalProps} />
      }
    </div>
  )
}

 export default App;
