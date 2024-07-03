import SpotifyPlayer from 'react-spotify-web-playback';
import '../styles/player.scss'

export default function Player(props) {
  return (
    <div className={`player ${props.playerItems && props.playerItems.length ? 'open' : 'closed'}`}>
      <div className="player-container">
        <SpotifyPlayer
          styles={{
            bgColor: 'transparent',
            color: 'rgba(255, 255, 255, .6)',
            loaderColor: 'rgba(255, 255, 255, .9)',
            sliderColor: '#1cb954',
            sliderHandleColor: 'rgba(255, 255, 255, .9)',
            sliderTrackColor: 'rgba(255, 255, 255, .05)',
            trackArtistColor: 'rgba(255, 255, 255, .9)',
            trackNameColor: 'rgba(255, 255, 255, .9)',
            bgColor: 'transparent',
            trackArtistColor: '#ccc',
          }}
          play={props.playerItems && props.playerItems.length}
          token={props.getToken()}
          type="episode"
          uris={props.playerItems}
        />
      </div>
    </div>
  );
}

