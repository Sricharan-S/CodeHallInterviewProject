import axios from "axios";
import { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { saveMovies } from "../../store/actions";
import { debounce } from "../../utils/app_utils";
import StyledSearchBar from "./SearchBar.styled";

function SearchBar(props){
    const [page] = useState(1);
    const dispatch = useDispatch();
    let inputRef = useRef();

    const fetchSearch = async (searchText) => {
        try {
          const { data } = await axios.get(
            `https://api.themoviedb.org/3/search/movie?api_key=${
              process.env.REACT_APP_API_KEY
            }&language=en-US&query=${searchText}&page=${page}&include_adult=false`
          );
        
          dispatch(saveMovies(data.results));
        } catch (error) {
          console.error(error);
        }
      };
    
    const debounceFetchSearch = debounce(fetchSearch, 500);;
    
    const onSearchTextChange = (e) => {
        let searchText = e.target.value;
        debounceFetchSearch(searchText);
    }
    const onClearHandle = () => {
        props.fetchMovies();
        inputRef.current.value = '';
    }
    return (
        <StyledSearchBar>
            <input type="text" placeholder="Search movies..." name="search" onChange={onSearchTextChange} ref={inputRef} autoComplete="off"/>
            <button type="button" onClick={onClearHandle}><i className="fa fa-close"></i></button>
        </StyledSearchBar>
    )
}

export default SearchBar;