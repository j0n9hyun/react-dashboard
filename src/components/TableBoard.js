import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TiList from './TiList';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import palette from '../static/palette';
import '../static/fontAwesome/css/all.css';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const Container = styled.div`
  background-color: #000;
  height: 100%;
`;

const MenuBar = styled.div`
  position: absolute;
  background-color: ${palette.gray[9]};
  border-top-right-radius: 25px;
  border-bottom-right-radius: 25px;
  height: 100%;
  box-shadow: 0 2px 20px -10px black;
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
  width: 300px;
  color: ${palette.gray[5]};
`;

const Menu1 = styled.div`
  background-color: transparent;
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
      background-color: #130f40;
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
  background-color: black;
`;
const Menu3 = styled(Menu2)`
  background: transparent;
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

const SearchContainer = styled.div`
  position: absolute;
  margin: 20px 0 20px 40px;
  left: 250px;
`;
const SearchBar = styled.input`
  position: relative;
  width: 500px;
  border: 0;
  color: lightgray;
  background-color: #343a40;
  margin-bottom: 10px;
  border-radius: 10px;
  padding-left: 15px;
  margin-left: 20px;
  font-size: 1rem;
  height: 35px;
  outline: none;
  box-shadow: 0 5px 5px -3px black;
  &::placeholder {
    color: darkgray;
  }
`;

const CalendarContainer = styled.div`
  position: relative;
  top: 55%;
  left: -2px;
  width: 255px;
`;

// const Item = styled.li`
//   position: relative;
//   top: 25%;
//   border: 0px solid transparent;
//   background-color: #868e96;
//   list-style: none;
//   border-radius: 10px;
//   color: lightgray;
//   padding-left: 30px;
//   width: 200px;
//   margin-bottom: 10px;
//   outline: none;
//   font-size: 1.5rem;
//   box-shadow: 0 5px 5px -3px black;
//   &:hover {
//     color: skyblue;
//   }
// `;

const LogoTitle = styled.div`
  text-align: center;
  margin: 30px 0;
`;

const ProfileContainer = styled.div`
  position: relative;
  border: 0;
  right: 0;
  color: ${palette.gray[6]};
  text-align: center;
  margin: 20px 20px;
  border-radius: 10px;
  /* border: 1px solid coral; */
  width: 250px;
  float: right;
  /* background-color: ${palette.gray[9]}; */
  height: 50px;
`;
const Profile = styled.div`
  /* right: 0; */
  /* border: 1px solid red; */
  position: relative;
  margin: 10px;
  border-radius: 50px;
  bottom: 25px;
  width: 40px;
  height: 40px;
  background-color: ${palette.gray[6]};
`;

const ProfileText = styled.div`
  position: relative;
  left: 75px;
  color: ${palette.gray[5]};
`;
const ProfileTextSubtitle = styled.div`
  position: relative;
  left: 75px;
  font-size: 14px;
  color: ${palette.gray[6]};
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
      <SearchContainer>
        <i class='fas fa-search' />
        <SearchBar placeholder='검색' />
      </SearchContainer>
      <ProfileContainer>
        <i class='fas fa-sort-down' />
        <Profile>
          <ProfileText>j0n9hyun</ProfileText>
          <ProfileTextSubtitle>QuadMiners</ProfileTextSubtitle>
        </Profile>
      </ProfileContainer>
      <MenuBar>
        <LogoTitle>
          <i class='fab fa-phoenix-framework' />
        </LogoTitle>
        <MenuBarTitle>
          Tables
          <SubTitle>테이블 공간입니다</SubTitle>
        </MenuBarTitle>

        <Menu1 onClick={onClick}>
          <i class='fas fa-border-all' />
          <SideText>DashBoard</SideText>
        </Menu1>
        <Menu2 onClick={onClick2}>
          <i class='fas fa-dice-d6' /> <SideText>Tables</SideText>
        </Menu2>
        <Menu1 onClick={onClick2}>
          <i class='far fa-chart-bar'></i>
          <SideText>Charts</SideText>
        </Menu1>
        <Menu1 onClick={onClick2}>
          <i class='fas fa-key' /> <SideText>blabla</SideText>
        </Menu1>
        <Menu3>
          <i class='fas fa-sign-out-alt'></i>
          <SideText>Logout</SideText>
        </Menu3>
        <Menu4>
          <i class='fas fa-cogs' />
          <SideText>Settings</SideText>
        </Menu4>
      </MenuBar>
      <CalendarContainer>
        <Calendar />
      </CalendarContainer>
      <TiList columns={columns} columns2={columns2} data={ti} data2={tiTitle} />
    </Container>
  );
};

export default TableBoard;
