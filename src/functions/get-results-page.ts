import apiWrapper from './api-wrapper.ts'

/*
 * Generic function to get results page:
 */
export default async function getResultsPage(props) {
  const recsArgs = {
    name: 'recs',
    data: props.recs,
    endpoint: () => {return props.sdk.recommendations.get({
      seed_genres: [props.genre]
    })},
    refresh: true,
    setter: props.setRecs
  }
  
  props.setRecs(null)
  await apiWrapper(recsArgs)
  props.setPage('results')
}