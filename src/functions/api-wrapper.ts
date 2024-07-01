/*
 * Generic wrapper for fetching API data.
 * Results are saved in localstorage.
 */
export default async function apiWrapper(args) {
  const {name, data, endpoint, refresh, setter} = args
  const storedData = localStorage.getItem(name)
  const cached = storedData && !refresh


  if (cached) {
    setter(() => JSON.parse(storedData))
  }

  if (!cached){
    const results = await endpoint()
    const resultsData = results.items || results
    setter(() => resultsData)
    localStorage.setItem(name, JSON.stringify(resultsData))
  }
}