import { img_300 } from "../../config/config";
import { provideRatingColor } from "../../utils/app_utils";
import StyledMoviesItem from "./MovieItem.styled";

function MovieItem({ movie }) {
    const {
        poster_path,
        title,
        release_date,
        vote_average,
    } = movie;
    return (
        <StyledMoviesItem ratingColor={provideRatingColor(vote_average)}>
             <img
                className="poster"
                src={`${img_300}${poster_path}`}
                alt={title}
            />
            <b className="title">{title}</b>
            <div className="subtitle">
                <div className="yearOfMovie">{release_date.slice(0,4)}</div>
                <div className="average">{vote_average}</div>
            </div>
        </StyledMoviesItem>
    );
}

export default MovieItem;