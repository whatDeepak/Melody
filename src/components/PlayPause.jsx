import { FaPauseCircle, FaPlayCircle } from 'react-icons/fa';

const PlayPause = ({ isPlaying, activeSong,song,handlePause, 
  handlePlay}) => ( isPlaying && activeSong?.title === 
    song.trackMetadata.trackName ? (
      <FaPauseCircle 
        size={35}
        className='text-gray-300'
        onclick={handlePause}
      />
    ) : (
      <FaPlayCircle 
      size={35}
      className='text-gray-300'
      onclick={handlePlay}
      />
    )
);

export default PlayPause;
