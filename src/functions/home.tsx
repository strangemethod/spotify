import { useEffect, useState } from 'react'
import { SearchResults, SpotifyApi } from '@spotify/web-api-ts-sdk'
import ChipGrid from '../components/chip-grid.tsx'
import TileCarousel from '../components/tile-carousel.tsx'


export default function Home({albums, apiWrapper, artist, getDetailPage, recTracks, sdk, setAlbums,
  setArtist, setTopArtists, setRecTracks, setPage, setShows, setTopTracks, shows, topArtists, topTracks}) {

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

  // Spotify API methods.
  useEffect(() => {
    (async () => {
      apiWrapper(artistArgs)
      apiWrapper(tracksArgs)
      apiWrapper(albumsArgs)
      apiWrapper(showsArgs)
      // getRecommendations();
    })();
  }, [sdk]);

  return (
    <main>
      <section>
        {topArtists &&
          <ChipGrid
              artist={artist}
              chips={topArtists}
              getDetailPage={getDetailPage}
              max="6"
              sdk={sdk}
              setArtist={setArtist}
              setPage={setPage}
              type="artist" />
        }
      </section>
      <section>
        {shows && shows.length &&
          <>
            <h2>Podcasts and Audiobooks</h2>
            <TileCarousel tiles={shows} />
          </>
        }
      </section>

      <section>
        {topTracks && topTracks.length &&
           <>
            <h2>Your Top Tracks</h2>
            <TileCarousel tiles={topTracks} />
          </>
        }
      </section>
      <section>
        {albums && albums.length &&
          <>
            <h2>Albums You Love</h2>
            <TileCarousel tiles={albums} max="10" />
          </>
        }
      </section>
    </main>
  )
}