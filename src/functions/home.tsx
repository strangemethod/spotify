import { useEffect, useState } from 'react';
import { SearchResults, SpotifyApi } from '@spotify/web-api-ts-sdk';

import TileCarousel from '../classes/tile-carousel.tsx'
import TopArtists from './topArtists.tsx'


export default function Home({
    sdk , 
    topTracks,
    setTopTracks,
    recTracks,
    setRecTracks}) {

  const maxTracks = 10;

  useEffect(() => {
    (async () => {
      if (!topTracks.length){
        // Get user's top tracks.
        const trackResults = await sdk.currentUser.topItems('tracks');
        const tracks = trackResults.items?.filter((item, idx) => {
          if (idx < maxTracks) return item;
        });
        setTopTracks(() => tracks);
      
        // Get recommendations based on top tracks.
        // Method accepts 5 max seeds.
        const recsResults = await sdk.recommendations.get({
            limit: 10,
            seed_artists: [tracks[0].artists[0].id, tracks[1].artists[0].id, tracks[2].artists[0].id],
            seed_tracks: [tracks[0].id, tracks[1].id]
          });
        setRecTracks(() => recsResults.tracks);
      }
    })();
  }, [sdk]);

  return (
    <>
      <h1 className="type-large">Good Afternoon</h1>      
      <TopArtists sdk={sdk} />
      <section>
        <h2>Your Top Tracks</h2>
        {topTracks &&
          <TileCarousel tiles={topTracks} />
        }
      </section>
      <section>
        <h2>Based on Your Recent Listening</h2>
        {recTracks &&
          <TileCarousel tiles={recTracks} />
        }
      </section>
    </>
  )
}