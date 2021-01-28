import LoginForm from './components/LoginForm';
import { createGlobalStyle } from 'styled-components';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

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
      <Router>
        <GlobalStyle />
        <Route path='/' exact component={LoginForm} />
      </Router>
    </>
  );
}

export default App;
