/*
 * Normalize data for consumption by front-end components.
 */
export default function normalizeData (name, data) {
  if (data.items) {
    // eslint-disable-next-line array-callback-return
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
          album: result.album.id,
          image: result.album.images[0].url,
          subtitle: result.artists[0].name,
          title: result.name,
          uri: result.uri
        }
      } else if (name === 'albums') {
        return {
          id: result.album.id,
          image: result.album.images[0].url,
          subtitle: result.album.artists[0].name,
          title: result.album.name,
        }
      } else if (name === 'shows') {
        return {
          id: result.show.id,
          image: result.show.images[0].url,
          subtitle: result.show.publisher,
          title: result.show.name,
          uri: result.show.uri,
        }
      } else if (name === 'playlists') {
        return {
          id: result.id,
          image: result.images[0].url,
          subtitle: result.description,
          title: result.name,
        }
      } else if (name === 'audiobooks') {
        return {
          id: result.id,
          image: result.images[0].url,
          subtitle: result.authors[0].name,
          title: result.name,
        }
      } else if (name === 'detailTracks') {
        // Playlists tracks.
        if (result.track) {
          return {
            id: result.track.id,
            image: result.track.album && result.track.album.images 
                ? result.track.album.images[0].url : null,
            title: result.track.name,
            subtitle: result.track.artists && result.track.artists 
                ? result.track.artists[0].name : null,
            uri: result.track.uri,
          }
        } else {
          console.log(result)
          // Shows.
          return {
            id: result.id,
            image: result.images ? result.images[0].url : null,
            title: result.name,
            uri: result.uri,
          }
        }
      }
    })
  } else if (name === 'detailTracks' || name === 'recs') {
    // Artists.
    data = data.tracks.map((result) => {
      return {
        album: result.album.id,
        id: result.id,
        image: result.album.images[0].url,
        subtitle: result.artists[0].name,
        title: result.name,
        uri: result.uri
      }    
    })
  }

  return data
}
