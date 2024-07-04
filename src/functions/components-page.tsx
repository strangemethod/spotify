import TileCarousel from '../components/tile-carousel.tsx'
import TileGrid from '../components/tile-grid.tsx'
import ChipGrid from '../components/chip-grid.tsx'
import { carouselData, carouselParams, chipParams, tileData, tileParams } from './components-data.tsx';
import '../styles/components-page.scss'


export default function ComponentsPage(props) {
  const table = (params) => {
    return (
      <table className="component-params">
        <tr className="component-params-key">
          <td>param</td>
          <td>type</td>
          <td>description</td>
        </tr>
        {params.map(param => {
          return(
            <tr>
              <td>{param[0]}</td>
              <td>{param[1]}</td>
              <td>{param[2]}</td>
            </tr>
          )
        })}
      </table>
    )
  }

  return (
    <main className="components-page">
      <div className="container">
        <h1>App Components</h1>
        <p className="component-note type-small">The app normalizes all Spotify API data in order to pass simple parameters to the front-end components and keep them as logic-free as possible.</p>
        <p className="component-note type-small">A handler function is also passed into each component to determine what action is performed on click.</p>
      </div>

      <section>
        <div className="container">
          <h2>Tile</h2>
          <p className="component-note type-small">
            Tile is an atomic component that can be placed inside a Tile Carousel or a Tile Grid. It has two style variations.
          </p>
          {table(tileParams)}
          <h3>Demo</h3>
          <div className="tile-demo">
            <TileGrid tiles={tileData} />
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <h2>Tile Carousel</h2>
          <p className="component-note type-small">
            The Tile Carousel can be swiped on touch devices to reveal overflowing tiles.
          </p>
          {table(carouselParams)}
          <h3>Demo</h3>
          <div className="tile-demo">
            <TileCarousel tiles={carouselData} />
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <h2>Tile Grid</h2>
          <p className="component-note type-small">
            CSS grid layout for Tiles.
          </p>
          {table(carouselParams)}
          <h3>Demo</h3>
          <div className="tile-demo">
            <TileGrid tiles={carouselData} />
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <h2>Chip</h2>
          <p className="component-note type-small">
            An atomic component with a horizontal layout. It can be placed inside a Chip Grid for layout.
          </p>
          {table(chipParams)}
          <h3>Demo</h3>
          <div className="tile-demo">
            <ChipGrid chips={[tileData[0]]} />
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <h2>Chip</h2>
          <p className="component-note type-small">
            CSS grid layout for Chips.
          </p>
          {table(chipParams)}
          <h3>Demo</h3>
          <div className="tile-demo">
            <ChipGrid chips={carouselData} />
          </div>
        </div>
      </section>
    </main>
   )
 }