import './App.css';
import StyledButton, { FancyButton, Spinner, SubmitButton } from './components/Button/Button';
function App() {
  return (
    <div className="App">
      <Spinner src='./logo192.png' />
      <StyledButton>I am the button</StyledButton>
      <br/>
      <br/>
      <StyledButton variant="stroke">I am the button</StyledButton>
      <br/>
      <br/>
      <SubmitButton variant="stroke">I am the button</SubmitButton>
      <br/>
      <br/>
      {/* Polmorphic props using the "as" prop */}
      <FancyButton as="a">Click me stupid</FancyButton>
    </div>
  );
}

export default App;
