import styled from 'styled-components';

export const StyledButton = styled.button`
  background-color: ${({variant}) => variant == "stroke" ? "#fff" : "green"};
  border-radius: 20px;
  color: ${({variant}) => variant == "stroke" ? "green" : "#fff"};
  width: 200px;
  height: 50px;
`