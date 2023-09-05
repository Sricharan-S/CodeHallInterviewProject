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
    border-top-left-radius: 4px;
    border-bottom-left-radius: 4px;
  }
  
  input[type=text]:hover {
    background: #f1f1f1;
  }
  
  button {
    padding: 15px;
    background: #ddd;
    font-size: 17px;
    border: none;
    border-top-right-radius: 4px;
    border-bottom-right-radius: 4px;
    cursor: pointer;
  }
`;

export default StyledSearchBar;