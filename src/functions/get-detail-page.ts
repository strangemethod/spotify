import apiWrapper from './api-wrapper.ts'

/*
 * Generic function to get detail page:
 * @param type {artist, album, genre}
 */
export default async function getDetailPage(args) { 
  const {artist, spotifyId, sdk, setArtist, setPage, type} = args
  const artistArgs = {
    name: 'artist',
    data: artist,
    endpoint: () => {return sdk.artists.get(spotifyId)},
    refresh: true,
    setter: setArtist
  }

  setArtist(null)
  apiWrapper(artistArgs)
  setPage(type)
}