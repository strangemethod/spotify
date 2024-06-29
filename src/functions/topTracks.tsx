import { useEffect, useState } from 'react';
import { SearchResults, SpotifyApi } from '@spotify/web-api-ts-sdk';

import TileCarousel from '../classes/tile-carousel.tsx'


export default function TopTracks({ sdk }: { sdk: SpotifyApi }) {
  const [results, setResults] = useState<SearchResults<["tracks"]>>({} as SearchResults<["tracks"]>);
  const maxResults = 10;

  useEffect(() => {
    (async () => {
      const results = await sdk.currentUser.topItems('tracks');
      setResults(() => results);      
    })();
  }, [sdk]);

  const items = results.items?.filter((item, idx) => {
    if (idx < maxResults) return item;
  });

  return (
    <section>
      <h2>Your Top Tracks</h2>
      <TileCarousel tiles={items} />
    </section>
  )
}