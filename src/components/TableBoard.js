import React from 'react';
import styled from 'styled-components';
import palette from '../static/palette';
import '../static/fontAwesome/css/all.css';
import 'react-calendar/dist/Calendar.css';
// import Menu from './Menu';
import TiTypeList from './TiTypeList';
import { useHistory } from 'react-router-dom';
import Search from './Search';

const Container = styled.div`
  background-color: #000;
  height: 100%;
`;

const SearchContainer = styled.div`
  position: absolute;
  margin: 20px 0 20px 40px;
  left: 250px;
`;

const MenuBarTitle = styled.div`
  position: absolute;
  top: 65px;
  left: 260px;
  color: white;
  padding: 10px 0 20px 20px;
  font-size: 1.5rem;
`;

const SubTitle = styled.div`
  margin-top: 15px;
  font-size: 14px;
  color: ${palette.gray[5]};
`;

const MenuBar = styled.div`
  position: absolute;
  background-color: ${palette.gray[9]};
  border-top-right-radius: 25px;
  border-bottom-right-radius: 25px;
  /* width: 255px; */
  max-width: 100%;
  height: 100%;
  box-shadow: 0 2px 20px -10px black;
`;

const Menu1 = styled.div`
  /* background-color: black; */
  background-color: ${(props) => props.color || 'transparent'};
  font-weight: bold;
  padding: 10px 10px;
  margin: 10px 10px;
  width: 210px;
  height: 35px;
  color: lightgray;
  font-size: 16px;
  cursor: pointer;
  border-radius: 10px;
  transition: background-color 0.5s ease;
  &:hover {
    background-color: black;
    margin: 10px 10px;
    width: 210px;
    color: white;
    &:active {
      background-color: black;
    }
    &:before {
      text-align: center;
      content: '';
      position: absolute;
      left: 10px;
      height: 35px;
      width: 3px;
      border-radius: 20px;
      background-color: lightgray;
    }
  }
`;

const Menu2 = styled(Menu1)`
  background-color: ${(props) => props.color || 'transparent'};
`;
const Menu3 = styled(Menu2)`
  position: absolute;
  bottom: 20px;
  &:hover {
    &:before {
      left: 0;
    }
  }
`;
const Menu4 = styled(Menu3)`
  bottom: 80px;
`;

const SideText = styled.div`
  position: relative;
  bottom: 30px;
  text-align: center;
  line-height: 2;
  padding-left: 28px;
`;

const LogoTitle = styled.div`
  text-align: center;
  margin: 30px 0;
`;

const TableBoard = () => {
  const history = useHistory();
  const onClick = () => {
    history.push('/dashboard');
  };
  const onClick2 = () => {
    history.push('/tableboard');
  };
  const onClick3 = () => {
    history.push('/chartboard');
  };
  const onClickLogout = () => {
    localStorage.removeItem('user');
    history.push('/');
  };
  return (
    <Container>
      {/* <SearchContainer>
        <Search />
      </SearchContainer> */}
      <MenuBarTitle>
        TableBoard
        <SubTitle>테이블보드입니다.</SubTitle>
      </MenuBarTitle>
      <MenuBar>
        <LogoTitle>
          <i className='fab fa-phoenix-framework' />
        </LogoTitle>
        <Menu1 onClick={onClick} color=''>
          <i className='fas fa-border-all' />
          <SideText>DashBoard</SideText>
        </Menu1>
        <Menu2 color='black' onClick={onClick2}>
          <i className='fas fa-dice-d6' /> <SideText>Tables</SideText>
        </Menu2>
        <Menu2 onClick={onClick3}>
          <i className='far fa-chart-bar'></i>
          <SideText>Charts</SideText>
        </Menu2>
        <Menu3 onClick={onClickLogout}>
          <i className='fas fa-sign-out-alt'></i>
          <SideText>Logout</SideText>
        </Menu3>
        <Menu4>
          <i className='fas fa-cogs' />
          <SideText>Settings</SideText>
        </Menu4>
        {/* <CalendarContainer>
          <Calendar />
        </CalendarContainer> */}
      </MenuBar>
      <TiTypeList />
    </Container>
  );
};

export default TableBoard;
