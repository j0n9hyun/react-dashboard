import React from 'react';
import Login from './components/Login';
import { createGlobalStyle } from 'styled-components';
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';
import DashBoard from './components/DashBoard';
import TableBoard from './components/TableBoard';
import MyProfile from './components/MyProfile';

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

  a {
    text-decoration: none;
    color: lightgray;
  }
  a:hover {
    color: skyblue;
  }
`;

function App() {
  // const [authenticated, setAuthenticated] = useState(false);
  const getValue = localStorage.getItem('user');
  // console.log(getValue);

  // console.log(authenticated);
  return (
    <>
      <GlobalStyle />
      <Router>
        {getValue ? <Redirect to='/dashboard' /> : <Redirect to='/' />}
        <Switch>
          {/* <Route
            path='/'
            exact
            render={() => <Login setAuthenticated={setAuthenticated} />}
          /> */}
          <Route path='/' exact component={Login} />
          <Route path='/dashboard' component={DashBoard} />
          <Route path='/tableboard' component={TableBoard} />
          <Route path='/profile' component={MyProfile} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
