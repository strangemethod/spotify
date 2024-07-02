import apiWrapper from './api-wrapper.ts'

/*
 * Generic function to get detail page:
 * @param type {artist, album, genre}
 */
export default async function getDetailPage(props) { 
  const artistArgs = {
    name: 'artist',
    data: props.artist,
    endpoint: () => {return props.sdk.artists.get(props.spotifyId)},
    refresh: true,
    setter: props.setArtist
  }

  const artistTracksArgs = {
    name: 'artistTracks',
    data: props.artistTracks,
    endpoint: () => {return props.sdk.artists.topTracks(props.spotifyId)},
    refresh: true,
    setter: props.setArtistTracks
  }

  // Clear prevoius data.
  props.setArtist(null)
  props.setArtistTracks(null)

  // Get new data and load detail page.
  apiWrapper(artistArgs)
  apiWrapper(artistTracksArgs)
  props.setPage('detail')
}