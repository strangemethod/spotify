/*
 * Normalize data for consumption by front-end components.
 */
const normalizeData = (name, data) => {
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
  } else if (name === 'artistTracks') {
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

/*
 * Generic wrapper for fetching API data.
 * Results are normalized and then saved in localstorage.
 */
export default async function apiWrapper(args) {
  const {name, data, endpoint, refresh, setter} = args
  const storedData = localStorage.getItem(name)
  const cached = storedData && !refresh


  if (cached) {
    setter(() => JSON.parse(storedData))
  }

  if (!cached){
    let results = endpoint().then((data) => {
    const normalized = normalizeData(name, data)

    setter(() => normalized)
    localStorage.setItem(name, JSON.stringify(normalized))
    })
  }
}