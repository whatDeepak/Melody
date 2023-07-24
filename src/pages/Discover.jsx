import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Error, Loader, SongCard } from '../components';
import { genres } from '../assets/constants';
import { selectGenreListId } from '../redux/features/playerSlice';
import { useGetSongsByGenreQuery } from '../redux/services/api';
import { logo } from '../assets';

const Discover = () => {
  const dispatch = useDispatch();
  const { genreListId } = useSelector((state) => state.player);
  const { activeSong, isPlaying } = useSelector((state) => state.player);
  const { data, isFetching, error } = useGetSongsByGenreQuery(genreListId || 'POP');

  if (isFetching) return <Loader title="Loading songs..." />;

  if (error) return <Error />;

  const genreTitle = genres.find(({ value }) => value === genreListId)?.title;

  const isChooseOptionSelected = genreListId === '';

  const handleGenreSelect = (e) => {
    dispatch(selectGenreListId(e.target.value));
    // Scroll to the top of the page after selecting a genre
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="flex flex-col">
      <div className="w-full flex justify-between items-center sm:flex-row flex-col mt-4 mb-10">
        <h2 className="font-bold text-3xl text-white text-left">Discover {genreTitle}</h2>
        <select
          onChange={handleGenreSelect}
          value={genreListId || ''}
          className="bg-black text-gray-300 p-3 text-sm rounded-lg outline-none sm:mt-0 mt-5"
        >
          <option value="">Genre</option>
          {genres.map((genre) => (
            <option key={genre.value} value={genre.value}>
              {genre.title}
            </option>
          ))}
        </select>
      </div>

      {isChooseOptionSelected ? (
        <div className="flex justify-center items-center mt-40">
          <img src={logo} alt="Your Logo" className="w-62 h-62" />
        </div>
      ) : (
        <div className="flex flex-wrap sm:justify-start justify-center gap-8">
          {data?.tracks.map((song, i) => (
            <SongCard key={song.key} song={song} isPlaying={isPlaying} activeSong={activeSong} data={data} i={i} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Discover;
