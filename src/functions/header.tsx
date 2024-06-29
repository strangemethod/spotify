import React, { useEffect, useState } from 'react';
import { SearchResults, SpotifyApi } from '@spotify/web-api-ts-sdk';
import { useTrail, a } from '@react-spring/web'

import chevronDown from '../assets/icons/chevron-down.png';
import chevronLeft from '../assets/icons/chevron-left.png';
import chevronRight from '../assets/icons/chevron-right.png';
import searchIcon from '../assets/icons/search.png';
import spotifyIcon from '../assets/icons/spotify.png';

import '../styles/header.css'


/* 
 * TODO: header animations
 */
// const Trail: React.FC<{ open: boolean }> = ({ open, children }) => {
//   const items = React.Children.toArray(children)
//   const trail = useTrail(items.length, {
//     config: { mass: 5, tension: 2000, friction: 200 },
//     opacity: open ? 1 : 0,
//     x: open ? 0 : 20,
//     width: open ? 300 : 0,
//     from: { opacity: 0, x: 20, width: 0 },
//   })
//   return (
//     <ul className="header-menu">
//       {trail.map(({ height, ...style }, index) => (
//         <a.li key={index} style={style}>
//           <a.div style={{ height }}>{items[index]}</a.div>
//         </a.li>
//       ))}
//     </ul>
//   )
// }

export default function Header({currentPage, pages, setPage}) {
  const [open, set] = useState(true)

  const prevPage = () => {
    let index = pages.indexOf(currentPage) - 1;
    if (index < 0) index = pages.length - 1;
    setPage(pages[index]);
  }

  const nextPage = () => {
    let index = pages.indexOf(currentPage) + 1;
    if (index >= pages.length) index = 0;
    setPage(pages[index]);
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
          <button className={"type-medium header-menu-item " + (currentPage == 'Home' ? 'active' : '')}
              onClick={() => {setPage('Home')}}>
            Home
          </button>
        </li>
        <li> 
          <button className={"type-medium header-menu-item " + (currentPage == 'Browse' ? 'active' : '')}
              onClick={() => {setPage('Browse')}}>
            Browse
          </button>
        </li>
        <li> 
          <button className={"type-medium header-menu-item " + (currentPage == 'Library' ? 'active' : '')}
              onClick={() => {setPage('Library')}}>
            Library
          </button>
        </li>
      </ul>
{/*      <Trail open={open}>
          <button className="type-medium header-menu-item" onClick={() => {setPage('Home')}}>Home</button>
          <button className="type-medium header-menu-item" onClick={() => {setPage('Browse')}}>Browse</button>
          <button className="type-medium header-menu-item" onClick={() => {setPage('Library')}}>Library</button>
      </Trail>*/}
    </div>
   )
 }