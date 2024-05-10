import './App.css';
import StyledButton from './components/Button/Button';
function App() {
  return (
    <div className="App">
      <StyledButton>I am the button</StyledButton>
      <br/>
      <br/>
      <StyledButton variant="stroke">I am the button</StyledButton>
    </div>
  );
}

export default App;
