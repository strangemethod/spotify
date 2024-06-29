import { useEffect, useState } from 'react';
import { SearchResults, SpotifyApi } from '@spotify/web-api-ts-sdk';

import TileCarousel from '../classes/tile-carousel.tsx'


export default function TopTracks({ sdk }: { sdk: SpotifyApi }) {
  const [results, setResults] = useState<SearchResults<["tracks"]>>({} as SearchResults<["tracks"]>);
  const [recs, setRecs] =
      useState<SearchResults<["recommendations"]>>({} as SearchResults<["recommendations"]>);
  const maxResults = 10;
  const seedArtists = [];
  const seedTracks = [];

  useEffect(() => {
    (async () => {
      // Get user's top tracks.
      const results = await sdk.currentUser.topItems('tracks');
      const items = results.items?.filter((item, idx) => {
        if (idx < maxResults) return item;
      });
      setResults(() => items);    

      // Get recommendations based on top tracks.
      const recs_results = await sdk.recommendations.get({
          limit: 10,
          seed_artists: [items[0].artists[0].id, items[1].artists[0].id, items[2].artists[0].id],
          seed_tracks: [items[0].id, items[1].id]
        });
      setRecs(() => recs_results.tracks);    


    })();
  }, [sdk]);


  return (
    <section>
      <h2>Your Top Tracks</h2>
      {results.length &&
        <TileCarousel tiles={results} />
      }
      <h2>Based on Your Recent Listening</h2>
      {recs.length &&
        <TileCarousel tiles={recs} />
      }

    </section>
  )
}