import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TiList from './TiList';
import styled from 'styled-components';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from 'react-router-dom';
import DashBoard from './DashBoard';

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

const TableBoard = () => {
  const [ti, setTi] = useState([]);
  const [tiTitle, setTiTitle] = useState([]);
  const columns = ['번호', '타입', '인디케이터', '등록일'];
  const columns2 = ['아이디값', '타이틀', '설명'];

  useEffect(() => {
    const apiCall = async () => {
      await axios.get('http://localhost:8888/data').then((res) => {
        setTi(res.data);
      });
    };
    const Title = async () => {
      await axios.get('http://localhost:8888/reputation_title').then((res) => {
        setTiTitle(res.data);
      });
    };

    apiCall();
    Title();
  }, []);
  return (
    <>
      <Container>
        <MenuBar>
          <Menu>
            <Link to='/tableboard'>🌹</Link>
          </Menu>
          <Menu>
            <Link to='/dashboard'>🎶</Link>
          </Menu>
        </MenuBar>
        <TiList
          columns={columns}
          columns2={columns2}
          data={ti}
          data2={tiTitle}
        />
      </Container>
    </>
  );
};

export default TableBoard;
