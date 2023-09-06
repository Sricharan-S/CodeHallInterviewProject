import axios from 'axios';
import React, { useEffect } from 'react';
import Select from 'react-select';
import StyledGenreList from './GenreList.styled';

export default function GenreList(props) {
  const { genres, setGenres, selectedGenres, setSelectedGenres } = props; 

  const fetchGenres = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/genre/movie/list?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`
    );
    if(data.genres){
      setGenres(data.genres.map(item => ({ id: item.id ,value: item.name, label: item.name })));
    }
  };

  useEffect(() => {
    fetchGenres();

    return () => {
      setGenres({});
    };
    // eslint-disable-next-line
  }, []);

  return (
    <StyledGenreList>
      <Select
        isMulti
        defaultValue={selectedGenres}
        onChange={setSelectedGenres}
        options={genres}
        className='GenreList'
        closeMenuOnSelect={false}
        placeholder="Select Genres..."
      />
    </StyledGenreList>
  );
}