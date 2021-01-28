import LoginForm from './components/LoginForm';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    padding: 0;
    margin: 0;
    border: 0;
  }
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <LoginForm />
    </>
  );
}

export default App;
