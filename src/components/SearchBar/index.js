import axios from "axios";
import { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { saveMovies } from "../../store/actions";
import { debounce } from "../../utils/app_utils";
import StyledSearchBar from "./SearchBar.styled";

function SearchBar(props){
    const { fetchSearch } = props;
    let inputRef = useRef();
    const debounceFetchSearch = debounce(fetchSearch, 500);;
    
    const onSearchTextChange = (e) => {
        let searchText = e.target.value;
        if(!searchText) props.fetchMovies();
        else debounceFetchSearch(searchText);
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