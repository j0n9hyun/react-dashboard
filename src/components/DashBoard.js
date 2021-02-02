import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import TiList from './TiList';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from 'react-router-dom';
import J0n9hyun from './J0n9hyun';

const Container = styled.div`
  background-color: #2c3e50;
  height: 100%;
`;

const MenuBar = styled.div`
  position: relative;
  border: 1px solid red;
  width: 50px;
  height: 100%;
`;

const Menu = styled.div`
  position: relative;
  border: 2px solid coral;
  color: lightgray;
  font-size: 2rem;
  text-align: center;
  /* width: 300px; */
`;

const Img = styled.img`
  width: 30px;
  margin: 0 5px;
`;

const DashBoard = () => {
  const [ti, setTi] = useState([]);
  const columns = ['번호', '타입', '인디케이터', '등록일'];

  useEffect(() => {
    const apiCall = async () => {
      await axios.get('http://localhost:8888/data').then((res) => {
        setTi(res.data);
      });
    };

    apiCall();
  }, []);
  return (
    <>
      <Router>
        <Container>
          <MenuBar>
            {/* <Route path='/j0n9hyun' component={J0n9hyun} /> */}
            <Menu>💕</Menu>
            <Menu>
              <Link to='/dashboard'>🎶</Link>
            </Menu>
          </MenuBar>
          <TiList columns={columns} data={ti} />
        </Container>
      </Router>
    </>
  );
};

export default DashBoard;
