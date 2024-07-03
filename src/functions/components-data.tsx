/*
 * Data for the components documentation page.
 * This data should not be used in the app.
 */

import image7 from '../assets/images/list-item-large7.png'

export const tileData = [
  {
    id: '6nS5roXSAGhTGr34W6n7Et',
    image: 'https://i.scdn.co/image/ab6761610000e5eba1ad57b6dbd3e836302efae0',
    maxLength: 50,
    subtitle: 'Known for a pop-oriented synthesis of numerous styles.',
    title: 'Disclosure',
  },{
    id: '6nS5roXSAGhTGr34W6n7Et',
    image: image7,
    maxLength: 50,
    style: 'layered',
    title: 'Latin',
  }
]

export const tileParams = [
  ['id', 'string', 'valid Spotify id'],
  ['image', 'string', 'the image URL'],
  ['maxLength', 'int', 'Length after which the subtitle is truncated with an ellipsis.'],
  ['subtitle', 'string', 'subtitle text'],
  ['style', '"stacked (default)", "layered"', 'Layered tiles display text on top of image.'],
  ['title', 'string', 'title text'],
]

export const carouselData = [
  tileData[0], tileData[0], tileData[0], tileData[0], tileData[0], tileData[0], tileData[0], tileData[0], tileData[0], tileData[0]
]

export const carouselParams = [
  ['tiles', 'Array', 'An array of react Tile components.'],
]

export const chipParams = [
  ['id', 'string', 'valid Spotify id'],
  ['image', 'string', 'the image URL'],
  ['maxLength', 'int', 'Length after which the title is truncated with an ellipsis.'],
  ['title', 'string', 'title text'],
]