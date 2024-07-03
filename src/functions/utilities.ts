/*
 * Generic utility functions.
 */

export function stripTags(str) {
  if (!str) {
    return ''
  } else {
    str = removeNbsp(str)
  }
  return str.replace(/(<([^>]+)>)/ig, '')
}

export function truncateText(str, max) {
  return str && str.length > max
     	? `${str.substring(0, max)}...`
      : str
}

export function removeNbsp(str) {
  // Strip invisibile characters
  let dom = document.createElement('div')
  dom.innerHTML = str
  dom.innerHTML = dom.innerHTML.replace(/\&nbsp;/g, ' ')
  return dom.innerHTML.toString()
}