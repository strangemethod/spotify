import apiWrapper from './api-wrapper.ts'

/*
 * Generic function to get detail page:
 * @param type {artist, album, genre}
 */
export default async function getDetailPage(props) {

  let detailEndpoint = null
  let tracksEndpoint = null

  if (props.type === 'artist') {
    detailEndpoint = props.sdk.artists.get(props.spotifyId)
    tracksEndpoint = props.sdk.artists.topTracks(props.spotifyId)
  } else if (props.type === 'shows') {
    detailEndpoint = props.sdk.shows.get(props.id)
    tracksEndpoint = props.sdk.shows.episodes(props.id, 9)
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
    props.setDetailTracks(null)
    apiWrapper(detailTracksArgs)
  }

  if (detailEndpoint) {
    props.setDetail(null)
    apiWrapper(detailArgs)
    props.setPage('detail')
  }
}