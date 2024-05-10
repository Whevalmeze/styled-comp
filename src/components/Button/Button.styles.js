import styled, {keyframes} from 'styled-components';

export const StyledButton = styled.button`
  border-radius: 20px;
  background-color: ${({variant}) => variant == "stroke" ? "#fff" : "green"};
  color: ${({variant}) => variant == "stroke" ? "green" : "#fff"};
  width: 200px;
  height: 50px;
  padding: 15px 30px;
  transition: 0.5s all ease-in-out;
  &:hover {
    background-color: ${({variant}) => variant !== "stroke" ? "#fff" : "green"};
    color: ${({variant}) => variant !== "stroke" ? "green" : "#fff"};
  }
`
export const FancyButton = styled(StyledButton)`
  background-image: linear-gradient(to right, #f6d365 0%, #fda085 100%);
  border: none;
`
export const SubmitButton = styled(StyledButton).attrs(
  {
    type: "submit"
  }
)`
  background-color: ${({variant}) => variant == "stroke" ? "#fff" : "red"};
  color: ${({variant}) => variant == "stroke" ? "red" : "#fff"};
`
const rotate = keyframes`
  from {
    transform: rotate(0deg);
  } to {
    transform: rotate(360deg);
  }
`
export const Spinner = styled.img`
  animation: ${rotate} infinite 20s linear;
  pointer-events: none;
`