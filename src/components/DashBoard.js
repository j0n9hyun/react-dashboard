import React from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import presentation from '../static/presentation.png';
import background from '../static/background.jpg';
import menubar from '../static/menu11.png';
import settings from '../static/settings.png';
import calendar from '../static/calendar.png';
import dashboard from '../static/dashboard.png';
import sign from '../static/sign.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faJedi, faSearch } from '@fortawesome/free-solid-svg-icons';

const element = (
  <FontAwesomeIcon icon={faJedi} color='white' size='4x' pull='left' />
);

const searchElement = (
  <FontAwesomeIcon icon={faSearch} color='lightgray' size='lg' />
);

const SearchIcon = styled.span`
  position: absolute;
  top: 70px;
  left: 6%;
`;

const Container = styled.div`
  background-color: #343a40;
  height: 100%;
`;
const Header = styled.div`
  background-color: #212529;
  width: 100%;
  height: 70px;
  cursor: pointer;
`;

const MenuBar = styled.div`
  position: absolute;
  background-color: #212529;
  width: 230px;
  height: calc(100% - 70px);
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
  cursor: pointer;
`;

const Menu1 = styled.div`
  background-color: black;
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
    margin: 10px 10px;
    width: 205px;
    color: white;
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

const Welcome = styled.div`
  box-shadow: 0 2px 30px -10px black;
  opacity: 0.8;
  background-image: url(${background});
  color: lightgray;
  position: absolute;
  text-align: center;
  width: calc(100% - 230px);
  height: 100px;
  margin-left: 230px;
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
  position: relative;
  background-color: #1e272e;
  /* border-radius: 20px; */
  color: lightgray;
  top: 13%;
  width: calc(100% - 230px);
  margin-left: 230px;
  /* height: 100%; */
  box-shadow: 0 2px 20px -10px black;
`;

const Img = styled.img`
  width: 33px;
  height: 30px;
  padding-bottom: 5px;
  padding-left: 3px;
`;

const SearchBar = styled.input`
  border: 0;
  color: lightgray;
  background-color: #343a40;
  margin-bottom: 10px;
  border-radius: 10px;
  padding-left: 35px;
  margin-left: 6px;
  font-size: 1rem;
  width: 180px;
  height: 35px;
  outline: none;
  box-shadow: 0 5px 5px -3px black;
  &::placeholder {
    color: darkgray;
  }
`;

const HeaderButton = styled.li`
  position: relative;
  top: 25%;
  border: 0px solid transparent;
  background-color: transparent;
  list-style: none;
  float: left;
  color: lightgray;
  padding-left: 30px;
  text-align: center;
  outline: none;
  font-size: 1.5rem;
  &:hover {
    color: lightblue;
  }
`;

const Item = styled.li`
  position: relative;
  top: 25%;
  border: 0px solid transparent;
  background-color: #868e96;
  list-style: none;
  border-radius: 10px;
  color: lightgray;
  padding-left: 30px;
  width: 200px;
  margin-bottom: 10px;
  outline: none;
  font-size: 1.5rem;
  box-shadow: 0 5px 5px -3px black;
  &:hover {
    color: skyblue;
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
  const onClick3 = () => {
    history.push('/');
  };

  return (
    <>
      <Container>
        <Header>
          <div onClick={onClick3}> {element} </div>
          <HeaderButton onClick={onClick}>Dashboard</HeaderButton>
          <HeaderButton>Users</HeaderButton>
          <HeaderButton>Profile</HeaderButton>
        </Header>
        <MenuBar>
          <MenuBarTitle>
            Home
            <MenuBarShrinkButton onClick={MenuBarInverse} />
          </MenuBarTitle>
          <SearchIcon>{searchElement}</SearchIcon>
          <SearchBar placeholder='입력' />

          <Menu1 onClick={onClick}>
            <Img src={dashboard} />
            <SideText>Home</SideText>
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
        <Welcome>Welcome to asdasd</Welcome>
        <InnerContainer>
          <Item>
            <a href=' #'>Getting Started</a>
          </Item>
          <Item>
            <a href=' #'>Documentation</a>
          </Item>
        </InnerContainer>
      </Container>
    </>
  );
};

export default DashBoard;
