import MovieItem from "../MovieItem";
import StyledMoviesList from "./MoviesList.styled";

function MoviesList(props) {
    const { allMovies } = props;
    return (
        <StyledMoviesList>
            {allMovies.map(movie => {
                return (
                    <MovieItem movie={movie}/>
                )
            })}
        </StyledMoviesList>
    )

}

export default MoviesList;