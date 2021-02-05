import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TiList from './TiList';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import presentation from '../static/presentation.png';
import background from '../static/background.jpg';
import menubar from '../static/menu11.png';
import settings from '../static/settings.png';
import calendar from '../static/calendar.png';
import dashboard from '../static/dashboard.png';
import sign from '../static/sign.png';

const Container = styled.div`
  background-color: #343a40;
  height: 100%;
`;

const MenuBar = styled.div`
  top: 10px;
  left: 10px;
  position: fixed;
  /* position: sticky; */
  /* background-color: #1e272e; */
  background-color: #212529;
  border-radius: 20px;
  width: 230px;
  height: 70%;
  box-shadow: 0 2px 20px -10px black;
`;

const MenuBarInverse = () => {
  console.log('inverse');
};

const MenuBarTitle = styled.div`
  color: white;
  padding: 10px 0 20px 20px;
  font-size: 1.5rem;
  /* &:after {
    content: '';
    display: inline-block;
    height: 30px;
    width: 32px;
    margin-left: 100px;
    background: url(${menubar});
    background-size: 32px 30px;
  } */
`;

const MenuBarShrinkButton = styled.div`
  position: absolute;
  top: 0;
  margin-top: 10px;
  margin-left: 165px;
  height: 30px;
  width: 32px;
  background: url(${menubar});
  background-size: 32px 30px;
`;

const Menu1 = styled.div`
  font-weight: bold;
  padding-top: 10px;
  color: lightgray;
  font-size: 16px;
  padding-left: 5px;
  cursor: pointer;
  border-radius: 10px;
  margin: 10px 10px;
  transition: background-color 0.5s ease;
  &:hover {
    background-color: black;
    color: white;
    margin: 10px 10px;
    width: 205px;
    &:active {
      background-color: #130f40;
    }
    &:before {
      text-align: center;
      content: '';
      position: absolute;
      left: 0;
      height: 35px;
      width: 3px;
      border-radius: 20px;
      background-color: lightgray;
    }
  }
`;

const Menu2 = styled(Menu1)`
  background-color: black;
  &:hover {
    &:after {
      content: '';
      left: 20%;
    }
  }
`;
const Menu3 = styled(Menu1)`
  background-color: transparent;
  &:hover {
    &:after {
      content: '';
      left: 20%;
    }
  }
`;

const Header = styled.div`
  box-shadow: 0 2px 30px -10px black;
  opacity: 0.8;
  border-radius: 20px;
  background-image: url(${background});
  color: lightgray;
  position: absolute;
  /* position: relative; */
  text-align: center;
  top: 20px;
  width: 70%;
  height: 100px;
  left: 55%;
  margin-left: calc(70% / -2);
  margin-bottom: 30px;
  font-size: 2rem;
  &:hover {
    opacity: 1;
  }
`;

const SideText = styled.span`
  position: absolute;
  text-align: center;
  left: 0;
  right: 0;
`;

const InnerContainer = styled.div`
  position: absolute;
  background-color: #1e272e;
  border-radius: 20px;
  color: lightgray;
  top: 15%;
  width: 30%;
  left: 38%;
  margin-left: calc(30% / -2);
  height: 50%;
  box-shadow: 0 2px 20px -10px black;
`;
const InnerContainer2 = styled(InnerContainer)`
  left: 70%;
`;

const Test = styled.div`
  border: 1px solid red;
  width: 100px;
  height: 500px;
`;

const Img = styled.img`
  width: 33px;
  height: 30px;
  padding-bottom: 5px;
  padding-left: 3px;
`;

const SearchBar = styled.input`
  /* background-color: lightgray; */
  border: 0;
  background-color: #343a40;
  margin-bottom: 10px;
  border-radius: 10px;
  padding-left: 25px;
  margin-left: 8px;
  font-size: 1rem;
  width: 180px;
  height: 35px;
  outline: none;
  box-shadow: 0 5px 5px -3px black;
  &::placeholder {
    color: darkgray;
  }
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
        <MenuBarTitle>
          Tables
          <MenuBarShrinkButton onClick={MenuBarInverse} />
        </MenuBarTitle>

        <SearchBar placeholder='입력' />

        <Menu1 onClick={onClick}>
          <Img src={dashboard} />
          {/* <FontAwesomeIcon icon={faHome} size='2x' color='#535c68' spin /> */}
          <SideText>Home</SideText>
        </Menu1>
        <Menu2 onClick={onClick2}>
          <Img src={presentation} /> <SideText>Tables</SideText>
        </Menu2>
        <Menu3 onClick={onClick2}>
          <Img src={calendar} /> <SideText>어쩌고</SideText>
        </Menu3>
        <Menu3 onClick={onClick2}>
          <Img src={sign} /> <SideText>저쩌고</SideText>
        </Menu3>
        <Menu3 onClick={onClick2}>
          <Img src={settings} /> <SideText>Settings</SideText>
        </Menu3>
      </MenuBar>
      <TiList columns={columns} columns2={columns2} data={ti} data2={tiTitle} />
    </Container>
  );
};

export default TableBoard;
