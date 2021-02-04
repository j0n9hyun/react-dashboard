import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TiList from './TiList';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import dashboard from '../static/dashboard.png';
import presentation from '../static/presentation.png';

const Container = styled.div`
  background-color: #2c3e50;
  height: 100%;
`;

const MenuBar = styled.div`
  top: 10px;
  left: 10px;
  /* position: relative; */
  position: fixed;
  border: 0px solid coral;
  background-color: #1e272e;
  border-radius: 20px;
  width: 50px;
  height: 50%;
`;

const Menu1 = styled.div`
  /* border: 2px solid coral; */
  padding-top: 10px;
  color: lightgray;
  font-size: 2rem;
  /* text-align: center; */
  padding-left: 5px;
  cursor: pointer;
  border-radius: 20px;
  transition: background-color 1s ease;
  &:hover {
    background-color: black;
    width: 250px;
    display: inline-block;
    transition: all 0.5s ease-in-out;
    &:before {
      text-align: center;
      content: '';
      position: absolute;
      left: 0;
      height: 8%;
      width: 3px;
      border-radius: 20px;
      background: white;
    }
    &:after {
      position: relative;
      /* top: 5px; */
      /* padding-top: 30px; */
      content: 'Home';
      color: white;
      text-align: center;
      left: 20%;
      /* left: 150px; */
      /* padding-left: 40px; */
    }
  }
`;

const Menu2 = styled(Menu1)`
  &:hover {
    &:after {
      content: 'Tables';
      left: 10%;
    }
  }
`;

const Img = styled.img`
  width: 38px;
`;

const TableBoard = () => {
  const [ti, setTi] = useState([]);
  const [tiTitle, setTiTitle] = useState([]);

  const history = useHistory();
  const onClick = () => {
    history.push('/dashboard');
  };
  const onClick2 = () => {
    history.push('/tableboard');
  };
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
    <Container>
      <MenuBar>
        <Menu1 onClick={onClick}>
          <Img src={dashboard} />
        </Menu1>
        <Menu2 onClick={onClick2}>
          <Img src={presentation} />
        </Menu2>
      </MenuBar>
      <TiList columns={columns} columns2={columns2} data={ti} data2={tiTitle} />
    </Container>
  );
};

export default TableBoard;
