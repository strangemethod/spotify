import { useEffect } from 'react'
import apiWrapper from './api-wrapper.ts'
import ChipGrid from '../components/chip-grid.tsx'
import getDetailPage from '../functions/get-detail-page.ts'
import TileCarousel from '../components/tile-carousel.tsx'


export default function Home(props) {
  const artistArgs = {
    name: 'topArtists',
    data: props.topArtists,
    endpoint: () => {return props.sdk.currentUser.topItems('artists', 'short_term', 50)},
    setter: props.setTopArtists
  }

  const tracksArgs = {
    name: 'topTracks',
    data: props.topTracks,
    endpoint: () => {return props.sdk.currentUser.topItems('tracks', 'medium_term', 50)},
    setter: props.setTopTracks
  }

  const albumsArgs = {
    name: 'albums',
    data: props.albums,
    endpoint: () => {return props.sdk.currentUser.albums.savedAlbums(50)},
    setter: props.setAlbums
  }

  const showsArgs = {
    name: 'shows',
    data: props.shows,
    endpoint: () => {return props.sdk.currentUser.shows.savedShows(50)},
    setter: props.setShows
  }

  const playlistArgs = {
    name: 'playlists',
    data: props.playlists,
    endpoint: () => {return props.sdk.currentUser.playlists.playlists()},
    setter: props.setPlaylists
  }

  const audiobookArgs = {
    name: 'audiobooks',
    data: props.audiobooks,
    endpoint: () => {return props.sdk.currentUser.audiobooks.savedAudiobooks()},
    setter: props.setAudiobooks
  }

  useEffect(() => {
    (async () => {
      apiWrapper(artistArgs)
      apiWrapper(tracksArgs)
      apiWrapper(albumsArgs)
      apiWrapper(showsArgs)
      apiWrapper(playlistArgs)
      apiWrapper(audiobookArgs)
    })();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.sdk]);

  return (
    <main>
      <section>
        {props.topArtists &&
          <ChipGrid {...props} handler={getDetailPage} chips={props.topArtists} max="6" type="artist" />
        }
      </section>
      <section>
        {props.shows && props.shows.length &&
          <>
            <h2>Podcasts and Audiobooks</h2>
            <TileCarousel {...props} handler={getDetailPage} tiles={props.shows} type="shows" />
          </>
        }
      </section>
      <section>
        {props.topTracks && props.topTracks.length &&
           <>
            <h2>Your Top Tracks</h2>
            <TileCarousel {...props} handler={getDetailPage} tiles={props.topTracks} type="track" />
          </>
        }
      </section>
      <section>
        {props.albums && props.albums.length &&
          <>
            <h2>Albums You Love</h2>
            <TileCarousel {...props} handler={getDetailPage} max="10" tiles={props.albums} type="album"/>
          </>
        }
      </section>
    </main>
  )
}