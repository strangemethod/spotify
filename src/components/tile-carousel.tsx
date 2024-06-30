import { useSpringCarousel } from 'react-spring-carousel'
import Tile from './tile.tsx'


export default function TileCarousel({tiles}) {
  const slideGroups = [];
  const groupSize = 5;

  for (let i = 0; i < tiles.length; i += groupSize) {
      const group = tiles.slice(i, i + groupSize);
      slideGroups.push(group);
  }

  const slides = slideGroups.map((group, idx) => {
    return {
      id: `slide-${idx}`,
      renderItem: (
        group.map((tile, idx) => {
          return (
            <Tile key={idx}
              title={tile.name || tile.album.name}
              subtitle={tile.artists ? tile.artists[0].name : tile.album.artists[0].name}
              image={tile.album.images[0].url}
              style="small" />
          )
        })
      )
    }
  });

  const { carouselFragment } = useSpringCarousel({
    items: slides
  })

  return (
     <div className="tile-carousel">
        {carouselFragment}
      </div>
  );
}