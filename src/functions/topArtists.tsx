import { useEffect, useState } from 'react';
import { SearchResults, SpotifyApi } from '@spotify/web-api-ts-sdk';

import ChipGrid from '../classes/chip-grid.tsx'


export default function TopArtists({ sdk }: { sdk: SpotifyApi }) {
  const [results, setResults] = useState<SearchResults<["artists"]>>({} as SearchResults<["artists"]>);
  const maxResults = 6;

  useEffect(() => {
    (async () => {
      const results = await sdk.currentUser.topItems('artists');
      setResults(() => results);      
    })();
  }, [sdk]);

  const items = results.items?.filter((item, idx) => {
    if (idx < maxResults) return item;
  });

  return (
    <section>
      <ChipGrid chips={items} />
    </section>
   )
 }