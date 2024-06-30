import { useEffect, useState } from 'react';
import { SearchResults, SpotifyApi } from '@spotify/web-api-ts-sdk';

import ChipGrid from '../classes/chip-grid.tsx'
import TileCarousel from '../classes/tile-carousel.tsx'


export default function Home({sdk,getApiData, topTracks, setTopTracks, recTracks, 
    setRecTracks, topArtists, setTopArtists, albums, setAlbums, shows, setShows}) {

  const artistArgs = {
    name: 'topArtists',
    data: topArtists,
    endpoint: () => {return sdk.currentUser.topItems('artists', 'short_term', 20)},
    setter: setTopArtists
  }

  const tracksArgs = {
    name: 'topTracks',
    data: topTracks,
    endpoint: () => {return sdk.currentUser.topItems('tracks', 'medium_term', 15)},
    setter: setTopTracks
  }

  const albumsArgs = {
    name: 'albums',
    data: albums,
    endpoint: () => {return sdk.currentUser.albums.savedAlbums(15)},
    setter: setAlbums
  }

  const showsArgs = {
    name: 'shows',
    data: shows,
    endpoint: () => {return sdk.currentUser.shows.savedShows(15)},
    setter: setShows
  }


  // Custom function for recommendations basd on other results.
  const getRecommendations= async() => {
    const cachedRecs = localStorage.getItem('recTracks');

    if (cachedRecs) {
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
      getApiData(artistArgs)
      getApiData(tracksArgs)
      getApiData(albumsArgs)
      getApiData(showsArgs)
      getRecommendations();
    })();
  }, [sdk]);

  return (
    <main>
      <h1 className="type-large">Good Afternoon</h1>
      <section>
        {topArtists &&
          <ChipGrid chips={topArtists} max="6"/>
        }
      </section>
      <section>
        <h2>Your Top Tracks</h2>
        {topTracks.length &&
          <TileCarousel tiles={topTracks} />
        }
      </section>
      <section>
        <h2>Based on Your Recent Listening</h2>
        {recTracks.length &&
          <TileCarousel tiles={recTracks} />
        }
      </section>
      <section>
        <h2>Albums You Love</h2>
        {albums.length &&
          <TileCarousel tiles={albums} max="10" />
        }
      </section>

    </main>
  )
}