import React from 'react';
import Login from './components/Login';
import { createGlobalStyle } from 'styled-components';
import { BrowserRouter as Router, Route } from 'react-router-dom';

const GlobalStyle = createGlobalStyle`
  body {
    padding: 0;
    margin: 0;
    border: 0;
  }
`;

function App() {
  // const [token, setToken] = useState(null);

  // if (!token) {
  //   return <Login setToken={setToken} />;
  // }

  return (
    <>
      <GlobalStyle />
      <Router>
        <Switch>
          <Route path='/' exact component={Login} />
          <Route path='/dashboard' exact component={DashBoard}></Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
