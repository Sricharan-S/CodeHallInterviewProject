import axios from 'axios';
import './App.css';
import { useState } from 'react';
import MoviesList from './components/MoviesList';
import { saveMovies } from './store/actions';
import { connect, useDispatch } from 'react-redux';
import SearchBar from './components/SearchBar';

function App(props) {
  const { movies } = props;
  const dispatch = useDispatch();
  const [numOfPages, setNumOfPages] = useState(0);
  const [page, setPage] = useState(1);
  const [searchText, setSearchText] = useState('');
  
  const fetchMovies = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}`
    );
    dispatch(saveMovies(data.results));
    setNumOfPages(data.total_pages);
  };

  const fetchSearch = async (searchText) => {
    try {
      const { data } = await axios.get(
        `https://api.themoviedb.org/3/search/movie?api_key=${
          process.env.REACT_APP_API_KEY
        }&language=en-US&query=${searchText}&page=${page}&include_adult=false`
      );
    
      dispatch(saveMovies(data.results));
      setNumOfPages(data.total_pages);
      setSearchText(searchText);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="App">
      <SearchBar fetchMovies={fetchMovies} fetchSearch={fetchSearch}/>
      <MoviesList 
        fetchMovies={fetchMovies} 
        allMovies={movies} 
        numOfPages={numOfPages} 
        page={page} 
        setPage={setPage} 
        setNumOfPages={setNumOfPages} 
        searchText={searchText} 
        fetchSearch={fetchSearch}
      />
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    movies: state.movies
  };
}
export default connect(mapStateToProps)(App);
