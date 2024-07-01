import { useEffect, useState } from 'react'
import { SearchResults, SpotifyApi } from '@spotify/web-api-ts-sdk'
import TileGrid from '../components/tile-grid.tsx'

import image1 from '../assets/images/list-item-large1.png'
import image2 from '../assets/images/list-item-large2.png'
import image3 from '../assets/images/list-item-large3.png'
import image4 from '../assets/images/list-item-large4.png'
import image5 from '../assets/images/list-item-large5.png'
import image6 from '../assets/images/list-item-large6.png'
import image7 from '../assets/images/list-item-large7.png'
import image8 from '../assets/images/list-item-large8.png'
import image9 from '../assets/images/list-item-large9.png'
import image10 from '../assets/images/list-item-large10.png'
import image11 from '../assets/images/list-item-large11.png'
import image12 from '../assets/images/list-item-large12.png'
import image13 from '../assets/images/list-item-large13.png'
import image14 from '../assets/images/list-item-large14.png'
import image15 from '../assets/images/list-item-large15.png'
import image16 from '../assets/images/list-item-large16.png'
import image17 from '../assets/images/list-item-large17.png'
import image18 from '../assets/images/list-item-large18.png'
import image19 from '../assets/images/list-item-large19.png'
import image20 from '../assets/images/list-item-large20.png'


export default function Browse({ sdk }: { sdk: SpotifyApi }) {
  const images = [
    image1,
    image2,
    image3,
    image4,
    image5,
    image6,
    image7,
    image8,
    image9,
    image10,
    image11,
    image12,
    image13,
    image14,
    image15,
    image16,
    image17,
    image18,
    image19,
    image20
  ]

  const genres = [
    'RADAR',
    'Podcasts',
    'Audiobooks',
    'Made For You',
    'New Releases',
    'Country',
    'Latin',
    'Charts',
    'Live Events',
    'Rock',
    'Mood',
    'Discover',
    'Indie',
    'Disney',
    'R&B',
    'Hip-Hop',
    'Pop',
    'Rock',
    'Workout',
    'K-pop',        
  ]

  const tiles = images.map((image, idx) => {
    return {
      image: images[idx],
      style: 'layered',
      title: genres[idx]
    }
  })

  return (
    <main>
      <h1>Browse</h1>
      <TileGrid tiles={tiles} />
    </main>
   )
 }