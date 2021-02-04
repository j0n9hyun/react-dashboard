import React from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import dashboard from '../static/dashboard.png';
import presentation from '../static/presentation.png';
import background from '../static/background.jpg';
import menubar from '../static/menu11.png';
import settings from '../static/settings.png';
import calendar from '../static/calendar.png';
import search from '../static/search.png';
import sign from '../static/sign.png';

const Container = styled.div`
  background-color: #2c3e50;
  height: 100%;
`;

const MenuBar = styled.div`
  top: 10px;
  left: 10px;
  position: fixed;
  /* position: sticky; */
  background-color: #1e272e;
  border-radius: 20px;
  width: 200px;
  height: 70%;
  box-shadow: 0 2px 20px -10px black;
`;

const MenuBarTitle = styled.div`
  color: white;
  padding: 10px 0 20px 20px;
  font-size: 1.5rem;
  &:after {
    content: '';
    display: inline-block;
    height: 30px;
    width: 32px;
    margin-left: 75px;
    background: url(${menubar});
    background-size: 32px 30px;
  }
`;

const Menu1 = styled.div`
  background-color: black;
  font-weight: bold;
  padding-top: 10px;
  color: lightgray;
  font-size: 1rem;
  padding-left: 5px;
  cursor: pointer;
  border-radius: 20px;
  transition: background-color 0.5s ease;
  &:hover {
    background-color: black;
    width: 195px;
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
  margin-bottom: 10px;
  border-radius: 15px;
  padding-left: 25px;
  margin-left: 8px;

  font-size: 1rem;
  width: 150px;
  height: 30px;
  outline: none;
  background-color: lightgray;
  &:before {
    content: url('../static/search.png');
  }
`;

const DashBoard = () => {
  const history = useHistory();
  const onClick = () => {
    history.push('/dashboard');
  };
  const onClick2 = () => {
    history.push('/tableboard');
  };
  return (
    <>
      <Container>
        <Header>Welcome to asdasd</Header>
        <InnerContainer>test</InnerContainer>
        <InnerContainer2>test</InnerContainer2>
        <MenuBar>
          <MenuBarTitle>Home</MenuBarTitle>
          <SearchBar placeholder='검색' />
          <Menu1 onClick={onClick}>
            <Img src={dashboard} /> <SideText>Home</SideText>
          </Menu1>
          <Menu2 onClick={onClick2}>
            <Img src={presentation} /> <SideText>Tables</SideText>
          </Menu2>
          <Menu2 onClick={onClick2}>
            <Img src={calendar} /> <SideText>어쩌고</SideText>
          </Menu2>
          <Menu2 onClick={onClick2}>
            <Img src={sign} /> <SideText>저쩌고</SideText>
          </Menu2>
          <Menu2 onClick={onClick2}>
            <Img src={settings} /> <SideText>Settings</SideText>
          </Menu2>
        </MenuBar>
      </Container>
      <Test />
    </>
  );
};

export default DashBoard;
