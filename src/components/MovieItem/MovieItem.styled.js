import styled from 'styled-components';


const StyledMoviesItem = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    width: 200px;
    padding: 5px;
    margin: 5px 0;
    background-color: #282c34;
    border-radius: 10px;
    position: relative;
  
  .poster {
    border-radius: 10px;
  }
  
  .title {
    width: 100%;
    text-align: center;
    font-size: 17px;
    padding: 8px 0;
    height: 40px;
  }  
  .subtitle{
    display: flex;
    justify-content: space-between;
    .average {    
      background-color: ${props => props.ratingColor.background};
      color: ${props => props.ratingColor.color};
      padding: 4px 8px;
      text-align: center;
      border-radius: 5px;
    }
    .yearOfMovie{
      font-weight: 500;
      background-color: white;
      color: black;
      padding: 4px 8px;
      text-align: center;
      border-radius: 5px;
    }
  }
`


export default StyledMoviesItem;