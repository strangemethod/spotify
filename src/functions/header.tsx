import React, { useEffect, useState } from 'react';
import { SearchResults, SpotifyApi } from '@spotify/web-api-ts-sdk';
import { useTrail, a } from '@react-spring/web'
import '../styles/header.scss'

import chevronDown from '../assets/icons/chevron-down.png';
import chevronLeft from '../assets/icons/chevron-left.png';
import chevronRight from '../assets/icons/chevron-right.png';
import searchIcon from '../assets/icons/search.png';
import spotifyIcon from '../assets/icons/spotify.png';


export default function Header({currentPage, pages, setPage}) {
  const [open, set] = useState(true)

  const prevPage = () => {
    if (currentPage === 'detail'){
      setPage('home')
    } else if (currentPage === 'results'){
      setPage('browse')

    } else {
      let index = pages.indexOf(currentPage) - 1;
      if (index < 0) index = pages.length - 1;
      setPage(pages[index]);
    }
  }

  const nextPage = () => {
    if (currentPage === 'detail'){
      setPage('home')
    } else {
      let index = pages.indexOf(currentPage) + 1;
      if (index >= pages.length) index = 0;
      setPage(pages[index]);
    }
  }

  return (
    <div className="header">
      <ul className="header-options">
        <li className="header-options-search" >
          <button>
            <img className="icon-search" src={searchIcon} alt="" />
          </button>
        </li>
        <li className="header-options-dropdown">
          <button className="button-spotify">
            <img src={spotifyIcon} alt="" />
            <img className="icon-down" src={chevronDown} alt="" />
          </button>
        </li>
        <li className="header-options-advance">
          <button className="button-prev color-grey" onClick={() => {prevPage()}}>
            <img src={chevronLeft} alt="" />
          </button>
          <button className="button-next color-grey" onClick={() => {nextPage()}}>
            <img src={chevronRight} alt="" />
          </button>
        </li>
      </ul>
      <ul className="header-menu">
        <li>
          <button className={"type-medium header-menu-item " + (currentPage == 'home' ? 'active' : '')}
              onClick={() => {setPage('home')}}>
            Home
          </button>
        </li>
        <li> 
          <button className={"type-medium header-menu-item " + (currentPage == 'browse' ? 'active' : '')}
              onClick={() => {setPage('browse')}}>
            Browse
          </button>
        </li>
        <li> 
          <button className={"type-medium header-menu-item " + (currentPage == 'library' ? 'active' : '')}
              onClick={() => {setPage('library')}}>
            Library
          </button>
        </li>
      </ul>
    </div>
   )
 }