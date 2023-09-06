import { useEffect, useState } from "react";
import GenreList from "../GenreList";
import MovieItem from "../MovieItem";
import StyledMoviesList from "./MoviesList.styled";
import useGenre from '../../hooks/useGenre';
import axios from "axios";
import { saveMovies } from "../../store/actions";
import { useDispatch } from "react-redux";

function MoviesList(props) {
    const { allMovies, page, setPage, fetchMovies, numOfPages, setNumOfPages, searchText, fetchSearch } = props;
    const dispatch = useDispatch();
    const [genres, setGenres] = useState([]);
    const [selectedGenres, setSelectedGenres] = useState([]);

    const genresForUrl = useGenre(selectedGenres);
    
    const fetchMoviesOnGenre = async () => {
        const { data } = await axios.get(
          `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}&with_genres=${genresForUrl}`
        );
        dispatch(saveMovies(data.results));
        setNumOfPages(data.total_pages);
      };

      useEffect(() => {
        if(!fetchMovies) return;
        window.scroll(0, 0);
        if(selectedGenres.length > 0)
            fetchMoviesOnGenre();
        else if(searchText)
            fetchSearch(searchText);
        else
            fetchMovies();
        // eslint-disable-next-line
      }, [selectedGenres, page]);

      const selectPageHandler = (selectedPage) => {
        if (selectedPage >= 1 && selectedPage <= numOfPages) {
          setPage(selectedPage)
        }
      }

    return (
        <StyledMoviesList>
            <GenreList genres={genres} setGenres={setGenres} selectedGenres={selectedGenres} setSelectedGenres={setSelectedGenres} />
            <div className="allMovies" data-testid="allMovies">
                {allMovies?.map(movie => {
                    return (
                        <MovieItem movie={movie} key={movie.id} />
                    )
                })}
            </div>
        {numOfPages > 0 && (
            <div className="pagination" data-testId="pagination">
                <span onClick={() => selectPageHandler(page - 1)} className={page > 1 ? "" : "pagination__disable"}>◀</span>

                {[...Array(Math.floor(numOfPages / 20))].map((_, i) => {
                  return <span key={i} className={page === i + 1 ? "pagination__selected" : ""} onClick={() => selectPageHandler(i + 1)}>{i + 1}</span>
                }).slice(0, 10)}

                <span onClick={() => selectPageHandler(page + 1)} className={page < numOfPages / 20 ? "" : "pagination__disable"}>▶</span>
            </div>
        )}
        </StyledMoviesList>
    )

}

export default MoviesList;