import normalizeData from './normalize.ts'

/*
 * Generic wrapper for fetching API data.
 * Results are normalized and then saved in localstorage.
 */
export default async function apiWrapper(args) {
  const {name, endpoint, refresh, setter} = args
  const storedData = localStorage.getItem(name)
  const cached = storedData && !refresh


  if (cached) {
    setter(() => JSON.parse(storedData))
  }

  if (!cached){
    endpoint().then((data) => {
      const normalized = normalizeData(name, data)
      setter(() => normalized)
      localStorage.setItem(name, JSON.stringify(normalized))
    })
  }
}