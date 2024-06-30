import React, { useEffect, useState } from 'react';

import '../styles/subnav.css'


export default function Subnav({setTab, tab, tabs}) {

  const listItems = tabs.map((tab, idx) => {
    return (
      <li key={idx}>
        <button className="color-grey type-medium"
            onClick={() => {setTab(tab)}}>
          {tab}
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