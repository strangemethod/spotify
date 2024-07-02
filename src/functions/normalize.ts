/*
 * Normalize data for consumption by front-end components.
 */
export default function normalizeData (name, data) {
  console.log(data)
  if (data.items) {
    data = data.items.map((result) => {
      if (name === 'topArtists') {
        return {
          id: result.id,
          image: result.images[0].url,
          title: result.name,
        }
      } else if (name === 'topTracks') {
        return {
          id: result.id,
          image: result.album.images[0].url,
          subtitle: result.artists[0].name,
          title: result.name,
        }
      } else if (name === 'albums') {
        return {
          id: result.album.id,
          image: result.album.images[0].url,
          subtitle: result.album.artists[0].name,
          title: result.album.name,
        }
      } else if (name === 'shows') {
        console.log(result)
        return {
          id: result.show.id,
          image: result.show.images[0].url,
          subtitle: result.show.publisher,
          title: result.show.name,
        }
      } else if (name === 'playlists') {
        return {
          id: result.id,
          image: result.images[0].url,
          subtitle: result.description,
          title: result.name,
        }
      } else if (name === 'audiobooks') {
        console.log(result)
        return {
          id: result.id,
          image: result.images[0].url,
          subtitle: result.authors[0].name,
          title: result.name,
        }
      }
    })
  } else if (name === 'detailTracks') {
    console.log(data)
    data = data.tracks.map((result) => {
      return {
        id: result.id,
        image: result.album.images[0].url,
        subtitle: result.artists[0].name,
        title: result.name,
      }    
    })
  }

  return data
}
