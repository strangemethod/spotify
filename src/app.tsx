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
  const [tab, setTab] = useState('Home');

  return(
    <div className="app">
      <Header setTab={setTab} />
      {sdk && tab == 'Browse' &&
        <Browse sdk={sdk}  />
      }
      {sdk && tab == 'Home' &&
        <Home sdk={sdk} />
      }
      {sdk && tab == 'Library' &&
        <Library sdk={sdk} />
      }
    </div>
  )
}

 export default App;