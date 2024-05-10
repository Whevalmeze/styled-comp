import './App.css';
import { ThemeProvider, createGlobalStyle } from 'styled-components';
import StyledButton, { Darkbutton, FancyButton, Spinner, SubmitButton } from './components/Button/Button';
function App() {
  // global styling
  const HeadingStyle = createGlobalStyle`
    h1, h2, h3, h4 {
      font-weight: 800;
      text-transform: lowercase;
    }
  `
  return (
    <ThemeProvider theme={{
      dark: {
        primary: "black",
        text: 'white'
      },
      light: {
        primary: "white",
        text: "black"
      }
    }}>
    <div className="App">
      <HeadingStyle />
      <h1>HelLO</h1>
      <h2>HelLO</h2>
      <h3>HelLO</h3>
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
      <Darkbutton variant="stroke">I am the button</Darkbutton>
      <br/>
      <br/>
      {/* Polmorphic props using the "as" prop */}
      <FancyButton as="a">Click me stupid</FancyButton>
    </div>
    </ThemeProvider>
  );
}

export default App;
