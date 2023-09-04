import axios from 'axios';
import './App.css';
import { useEffect, useState } from 'react';
import MoviesList from './components/MoviesList';

function App() {
  const [movies, setMovies] = useState([]);
  const [numOfPages, setNumOfPages] = useState(0);
  const [page, setPage] = useState(1);
  
  const fetchMovies = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}`
    );
    setMovies(data.results);
    setNumOfPages(data.total_pages);
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  return (
    <div className="App">
      <header className="App-header"></header>
      <MoviesList allMovies={movies}/>
    </div>
  );
}

export default App;

// Navbar
// SearchBar - with debouncing
// Movies list
// MovieItem
// Pagination
// Filtering badges based on genre - FilterGenreList - GenreBadge
