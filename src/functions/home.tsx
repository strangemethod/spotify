import { useEffect, useState } from 'react';
import { SearchResults, SpotifyApi } from '@spotify/web-api-ts-sdk';

import ChipGrid from '../classes/chip-grid.tsx'
import TileCarousel from '../classes/tile-carousel.tsx'


export default function Home({
    sdk , 
    topTracks,
    setTopTracks,
    recTracks,
    setRecTracks,
    topArtists,
    setTopArtists}) {

  // Get user's top artists and save to localStorage.
  const getTopArtists = async() => {
    const cachedArtists = localStorage.getItem('topArtists');

    if (cachedArtists ) {
      setTopArtists(() => JSON.parse(cachedArtists));
    }

    if (!topArtists.length && !cachedArtists){
      const artistResults = await sdk.currentUser.topItems('artists', 'short_term', 6);
      setTopArtists(() => artistResults.items);
      localStorage.setItem('topArtists', JSON.stringify(artistResults.items));
    }
  }

  // Get user's top tracks and save to localStorage.
  const getTopTracks = async() => {
    const cachedTracks= localStorage.getItem('topTracks');

    if (cachedTracks) {
      setTopTracks(() => JSON.parse(cachedTracks));
    }

    if (!topTracks.length&& !cachedTracks){
      const trackResults = await sdk.currentUser.topItems('tracks', 'medium_term', 10);
      setTopTracks(() => trackResults.items);
      localStorage.setItem('topTracks', JSON.stringify(trackResults.items));
    }
  }

  // Get user's recommended tracks and save to localStorage.
  const getRecommendations= async() => {
    const cachedRecs = localStorage.getItem('recTracks');

    if (cachedRecs) {
      console.log('stored!')
      setRecTracks(() => JSON.parse(cachedRecs));
    }

    if (topTracks.length&& !cachedRecs) { 
      // Recommendations method accepts 5 max seeds.
      const recsResults = await sdk.recommendations.get({
          limit: 10,
          seed_artists: [
              topTracks[0].artists[0].id, 
              topTracks[1].artists[0].id, 
              topTracks[2].artists[0].id
            ],
          seed_tracks: [
              topTracks[0].id, 
              topTracks[1].id
            ]
        });
      setRecTracks(() => recsResults.tracks);
      localStorage.setItem('recTracks', JSON.stringify(recsResults.tracks));
    }
  }

  // Spotify API methods.
  useEffect(() => {
    (async () => {
      getTopArtists();
      getTopTracks();
      // getRecommendations();
    })();
  }, [sdk]);

  return (
    <main>
      <h1 className="type-large">Good Afternoon</h1>
      <section>
        <ChipGrid chips={topArtists} />
      </section>
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
    </main>
  )
}