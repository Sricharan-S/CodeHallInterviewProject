import styled from 'styled-components';

const StyledSearchBar = styled.div` 
  display: flex;
  justify-content: center;
  margin-bottom: 40px;
  input[type=text] {
    padding: 15px;
    font-size: 17px;
    border: none;
    float: left;
    background: white;
    width: 50%;
  }
  
  input[type=text]:hover {
    background: #f1f1f1;
  }
  
  button {
    padding: 15px;
    background: #ddd;
    font-size: 17px;
    border: none;
    cursor: pointer;
  }

`;

export default StyledSearchBar;