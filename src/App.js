import './App.css';
import StyledButton, { FancyButton } from './components/Button/Button';
function App() {
  return (
    <div className="App">
      <StyledButton>I am the button</StyledButton>
      <br/>
      <br/>
      <StyledButton variant="stroke">I am the button</StyledButton>
      <br/>
      <br/>
      {/* Polmorphic props using the "as" prop */}
      <FancyButton as="a">Click me stupid</FancyButton>
    </div>
  );
}

export default App;
