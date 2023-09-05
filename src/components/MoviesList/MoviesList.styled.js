import styled from 'styled-components';


const StyledMoviesList = styled.div`    
    max-width: 1200px;
    margin: 0 auto;
    
    .allMovies{
        display: flex;
        flex-wrap: wrap;
        justify-content: space-evenly;
    }


.pagination {
    padding: 10px;
    margin: 15px 0;
    display: flex;
    justify-content: center;
  }
  
  .pagination > span{
    padding: 15px 20px;
    border: 1px solid gray;
    cursor: pointer;
  }
  
  .pagination__disable{
    opacity: 0;
  }
  
  .pagination__selected{
    background-color: rgb(220, 220, 220);
  }
`


export default StyledMoviesList;