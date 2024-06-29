import { useEffect, useState } from 'react';
import React from 'react';
import { Scopes, SearchResults, SpotifyApi } from '@spotify/web-api-ts-sdk';
import { useSpotify } from './hooks/useSpotify.ts';

import Browse from './functions/browse.tsx'
import Header from './functions/header.tsx'
import Home from './functions/home.tsx'
import Library from './functions/library.tsx'

import './styles/app.css';


function App() {
  const sdk = useSpotify(
    "49fef81c299049e5b7738107d20af951",
    "http://localhost:3000/", 
    Scopes.all
  );

  // App State
  const [currentPage, setPage] = useState('Home');
  const pages = ['Home', 'Browse', 'Library']
  const [topTracks, setTopTracks] = useState([]);
  const [recTracks, setRecTracks] = useState([]);
  const [topArtists, setTopArtists] = useState([]);


  return(
    <div className="app">
      <Header currentPage={currentPage} pages={pages} setPage={setPage} />
      {sdk && currentPage == 'Browse' &&
        <Browse sdk={sdk}  />
      }
      {sdk && currentPage == 'Home' &&
        <Home sdk={sdk}
            recTracks={recTracks}
            setRecTracks={setRecTracks}
            topTracks={topTracks}
            setTopTracks={setTopTracks}
            topArtists={topArtists}
            setTopArtists={setTopArtists} />
      }
      {sdk && currentPage == 'Library' &&
        <Library sdk={sdk} />
      }
    </div>
  )
}

 export default App;
