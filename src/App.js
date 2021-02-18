import React, { useState } from 'react';
import Login from './components/Login';
import { createGlobalStyle } from 'styled-components';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import DashBoard from './components/DashBoard';
import TableBoard from './components/TableBoard';
import Profile from './components/Profile';
import { signIn } from './components/auth';
import AuthRoute from './components/AuthRoute';

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
  const [user, setUser] = useState(null);
  const authenticated = user == null;

  const login = ({ id, pw }) => setUser(signIn({ id, pw }));
  console.log(signIn);
  const logout = () => setUser(null);
  return (
    <>
      <GlobalStyle />
      <Router>
        <Switch>
          <Route path='/' exact component={Login} />
          <Route path='/dashboard' component={DashBoard} />
          <Route path='/tableboard' component={TableBoard} />
          {/* <Route path='/profile' component={Profile} /> */}
          <AuthRoute
            authenticated={authenticated}
            path='/profile'
            render={(props) => <Profile user={user} {...props} />}
          />
          {/* <AuthRoute
            authenticated={authenticated}
            path='/dashboard'
            render={(props) => <DashBoard user={user} {...props} />}
          /> */}
        </Switch>
      </Router>
    </>
  );
}

export default App;
