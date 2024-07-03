import apiWrapper from './api-wrapper.ts'

/*
 * Generic function to get detail page:
 * @param type {artist, album, genre}
 */
export default async function getDetailPage(props) {
  let detailEndpoint = null
  let tracksEndpoint = null

  // Clear prevous detail data.
  props.setDetail(null)
  props.setDetailTracks(null)

  if (props.type === 'artist') {
    detailEndpoint = props.sdk.artists.get(props.spotifyId)
    tracksEndpoint = props.sdk.artists.topTracks(props.spotifyId)
  } else if (props.type === 'shows') {
    detailEndpoint = props.sdk.shows.get(props.id)
    tracksEndpoint = props.sdk.shows.episodes(props.id, 9)
  } else if (props.type === 'album' || props.type === 'track') {
    detailEndpoint = props.sdk.albums.get(props.id)
    tracksEndpoint = props.sdk.albums.tracks(props.id)
  } else if (props.type === 'playlist') {
    console.log(props.id)
    detailEndpoint = props.sdk.playlists.getPlaylist(props.id)
    tracksEndpoint = props.sdk.playlists.getPlaylistItems(props.id)
  }

  const detailArgs = {
    name: 'detail',
    data: props.detail,
    endpoint: () => {return detailEndpoint},
    refresh: true,
    setter: props.setDetail
  }

  const detailTracksArgs = {
    name: 'detailTracks',
    data: props.detailTracks,
    endpoint: () => {return tracksEndpoint},
    refresh: true,
    setter: props.setDetailTracks
  }

  // Get new data and load detail page.
  if (tracksEndpoint) {
    apiWrapper(detailTracksArgs)
  }

  if (detailEndpoint) {
    apiWrapper(detailArgs)
    props.setPage('detail')
  }
}