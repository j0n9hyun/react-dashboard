import React from 'react';
import Login from './components/Login';
import { createGlobalStyle } from 'styled-components';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import DashBoard from './components/DashBoard';
import J0n9hyun from './components/J0n9hyun';
import TableBoard from './components/TableBoard';

const GlobalStyle = createGlobalStyle`
  html, head {
    height: 100%;
  }
  div#root {
    height: 100%;
  }
  body {
    padding: 0;
    margin: 0;
    border: 0;
    height: 100%;
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
        <Route path='/' exact component={Login} />
        <Route path='/dashboard' component={DashBoard} />
        <Route path='/tableboard' component={TableBoard} />
        {/* <Route path='/j0n9hyun' exact component={J0n9hyun}></Route> */}
      </Router>
    </>
  );
}

export default App;
