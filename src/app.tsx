import { useEffect, useState } from 'react'
import React from 'react'
import { Scopes, SearchResults, SpotifyApi } from '@spotify/web-api-ts-sdk'
import { useSpotify } from './hooks/useSpotify.ts'

import apiWrapper from './functions/api-wrapper.ts'
import getDetailPage from './functions/get-detail-page.ts'

import Artist from './functions/artist.tsx'
import Browse from './functions/browse.tsx'
import Header from './functions/header.tsx'
import Home from './functions/home.tsx'
import Library from './functions/library.tsx'

import './styles/app.css'


function App() {
  const sdk = useSpotify(
    "49fef81c299049e5b7738107d20af951",
    "http://localhost:3000/", 
    Scopes.all
  );

  const pages = ['home', 'browse', 'library']

  // App State
  const [albums, setAlbums] = useState(null)
  const [artist, setArtist] = useState(null)
  const [audiobooks, setAudiobooks] = useState(null)
  const [currentPage, setPage] = useState('home')
  const [playlists, setPlaylists] = useState(null)
  const [recTracks, setRecTracks] = useState(null)
  const [shows, setShows] = useState(null)
  const [topArtists, setTopArtists] = useState(null)
  const [topTracks, setTopTracks] = useState(null)

  const globalProps = {
    albums,
    artist,
    audiobooks,
    apiWrapper,
    getDetailPage,
    playlists,
    recTracks,
    sdk,
    setAlbums,
    setArtist,
    setAudiobooks,
    setPage,
    setPlaylists,
    setRecTracks,
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
      {sdk && artist !== null  && currentPage === 'artist' &&
        <Artist {...globalProps} />
      }
      {sdk && currentPage === 'album' &&
        <div>Album Page</div>
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
