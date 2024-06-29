import { useEffect, useState } from 'react';
import { SearchResults, SpotifyApi } from '@spotify/web-api-ts-sdk';

import '../styles/header.css'


export default function Header({setTab}) {

  return (
    <ul className="header">
      <li className="type-medium">
        <button onClick={() => {setTab('Home')}}>Home</button>
      </li>
      <li className="type-medium">
        <button onClick={() => {setTab('Browse')}}>Browse</button>
      </li>
      <li className="type-medium">
        <button onClick={() => {setTab('Library')}}>Library</button>
      </li>
    </ul>
   )
 }