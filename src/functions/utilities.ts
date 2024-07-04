/*
 * Generic utility functions.
 */

export function isComponentPage() {
  return window.location.search === '?components'
}

export function removeNbsp(str) {
  // Strip invisibile characters
  let dom = document.createElement('div')
  dom.innerHTML = str
  // eslint-disable-next-line no-useless-escape
  dom.innerHTML = dom.innerHTML.replace(/\&nbsp;/g, ' ')
  return dom.innerHTML.toString()
}

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
