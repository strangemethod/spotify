import React, { useEffect, useState } from 'react';
import '../styles/subnav.scss'


export default function Subnav({setTab, tab, tabs}) {
  const listItems = tabs.map((tabName, idx) => {
    return (
      <li key={idx} className={tab === tabName ? 'active' : ''}>
        <button className="color-grey type-medium"
            onClick={() => {setTab(tabName)}}>
          {tabName}
        </button>
      </li>
    )
  });

  return (
    <ul className="subnav">
      {listItems}
    </ul>
   )
 }