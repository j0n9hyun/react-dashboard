import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import palette from '../static/palette';
import '../static/fontAwesome/css/all.css';
import Clock from 'react-live-clock';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import axios from 'axios';
import TiList from './TiList';
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from 'recharts';

const Container = styled.div`
  background-color: #000;
  height: 100%;
  /* background-color: ${palette.gray[9]}; */
`;

const MenuBar = styled.div`
  position: absolute;
  background-color: ${palette.gray[9]};
  border-top-right-radius: 25px;
  border-bottom-right-radius: 25px;
  width: 255px;
  /* left: 10px; */
  height: 100%;
  /* height: calc(100% - 110px); */
  /* margin: 20px 20px; */
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
  color: ${palette.gray[5]};
`;

const Menu1 = styled.div`
  background-color: black;
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
  background-color: transparent;
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

const SearchContainer = styled.div`
  position: absolute;
  margin: 20px 0 20px 40px;
  left: 250px;
`;
const SearchBar = styled.input`
  /* position: relative; */
  max-width: 300px;
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

const Time = styled.div`
  position: relative;
  text-align: center;
  left: 25%;
  top: 25%;
  padding-right: 50%;
`;

const TimezoneText = styled.div`
  font-size: 1rem;
  color: ${palette.gray[6]};
  text-align: center;
`;

const Wrapper = styled.div`
  position: relative;
  width: 300px;
  border: 1px solid red;
`;

const ChartContainer = styled.div`
  position: relative;
  /* border: 2px solid ${palette.gray[7]}; */
  box-shadow: 2px 2px 20px -10px gray;
  width: 750px;
  max-width: 60%;
  height: 300px;
  border-radius: 15px;
  padding: 30px 20px;
  background-color: ${palette.gray[9]};
  left: 300px;
  top: 180px;
`;

const ChartContainer2 = styled.div`
  position: relative;
  max-width: 100%;
  color: whitesmoke;
  font-size: 3rem;
  top: 200px;
  left: 300px;
  background-color: ${palette.gray[9]};
  width: 400px;
  margin: 0 0;
  /* height: 0; */
  height: 200px;
  border-radius: 15px;
  /* border: 1px solid red; */
`;

const ChartContainer3 = styled.div`
  position: absolute;
  top: 550px;
  right: 5%;
  background-color: ${palette.gray[9]};
  width: 600px;
  height: 300px;
  border-radius: 15px;
  /* border: 1px solid red; */
`;
const DropdownContent = styled.div`
  display: none;
  position: absolute;
  background-color: gray;
  text-align: center;
  left: -205px;
  top: 65px;
  width: 200px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
`;

const Dropdown = styled.div`
  position: relative;
  display: inline-block;
  left: 100px;
  bottom: 5px;
  font-size: 1.5rem;
  &:hover ${DropdownContent} {
    display: block;
    color: coral;
  }
`;

const DropdownButton = styled.div`
  background-color: #ffdab9;
  padding: 8px;
  font-size: 15px;
  border: none;
`;

const Dropdownbtn = styled.button`
  background-color: #4caf50;
  color: white;
  padding: 16px;
  font-size: 16px;
  border: none;
  cursor: pointer;
`;

const CalendarContainer = styled.div`
  position: relative;
  left: -2px;
`;

const TableContainer = styled.div`
  position: static;
  border: 1px solid red;
  width: 300px;
  height: 300px;
`;

const DashBoard = () => {
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

  const history = useHistory();
  const onClick = () => {
    history.push('/dashboard');
  };
  const onClick2 = () => {
    history.push('/tableboard');
  };
  const onClickLogout = () => {
    history.push('/');
  };
  const d = [
    {
      name: '18-24',
      uv: 31.47,
      pv: 2400,
      fill: '#8884d8',
    },
    {
      name: '25-29',
      uv: 26.69,
      pv: 4567,
      fill: '#83a6ed',
    },
    {
      name: '30-34',
      uv: -15.69,
      pv: 1398,
      fill: '#8dd1e1',
    },
    {
      name: '35-39',
      uv: 8.22,
      pv: 9800,
      fill: '#82ca9d',
    },
    {
      name: '40-49',
      uv: -8.63,
      pv: 3908,
      fill: '#a4de6c',
    },
    {
      name: '50+',
      uv: -2.63,
      pv: 4800,
      fill: '#d0ed57',
    },
    {
      name: 'unknow',
      uv: 6.67,
      pv: 4800,
      fill: '#ffc658',
    },
  ];

  const ddd = [
    { name: 'Page A', uv: 4000, female: 2400, male: 2400 },
    { name: 'Page B', uv: 3000, female: 1398, male: 2210 },
    { name: 'Page C', uv: 2000, female: 9800, male: 2290 },
    { name: 'Page D', uv: 2780, female: 3908, male: 2000 },
    { name: 'Page E', uv: 1890, female: 4800, male: 2181 },
    { name: 'Page F', uv: 2390, female: 3800, male: 2500 },
    { name: 'Page G', uv: 3490, female: 4300, male: 2100 },
  ];

  return (
    <>
      <Container>
        <SearchContainer>
          <i className='fas fa-search' />
          <SearchBar placeholder='검색' />
        </SearchContainer>
        <ProfileContainer>
          <Dropdown>
            <i className='fas fa-sort-down' />

            <DropdownContent>
              <a href='#'>Profile</a>
            </DropdownContent>
          </Dropdown>
          <Profile>
            <ProfileText>j0n9hyun</ProfileText>
            <ProfileTextSubtitle>QuadMiners</ProfileTextSubtitle>
          </Profile>
        </ProfileContainer>
        <MenuBar>
          <LogoTitle>
            <i className='fab fa-phoenix-framework' />
          </LogoTitle>
          <MenuBarTitle>
            DashBoard
            <SubTitle>대시보드입니다.</SubTitle>
          </MenuBarTitle>

          <Menu1 onClick={onClick}>
            <i className='fas fa-border-all' />
            <SideText>DashBoard</SideText>
          </Menu1>
          <Menu2 onClick={onClick2}>
            <i className='fas fa-dice-d6' /> <SideText>Tables</SideText>
          </Menu2>
          <Menu2 onClick={onClick2}>
            <i className='far fa-chart-bar'></i>
            <SideText>Charts</SideText>
          </Menu2>
          <Menu2 onClick={onClick2}>
            <i className='fas fa-key' /> <SideText>blabla</SideText>
          </Menu2>
          <Menu3 onClick={onClickLogout}>
            <i className='fas fa-sign-out-alt'></i>
            <SideText>Logout</SideText>
          </Menu3>
          <Menu4>
            <i className='fas fa-cogs' />
            <SideText>Settings</SideText>
          </Menu4>
        </MenuBar>

        <ChartContainer>
          <ResponsiveContainer>
            <BarChart
              width={800}
              height={300}
              data={ddd}
              margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray='3 3' />
              <XAxis dataKey='name' />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey='female' stackId='a' fill='#8884d8' />
              <Bar dataKey='male' stackId='a' fill='#82ca9d' />
              <Bar dataKey='uv' fill='#ffc658' />
            </BarChart>
          </ResponsiveContainer>
        </ChartContainer>
        <ChartContainer2>
          <Time>
            <Clock format={'HH:mm:ss'} ticking={true} timezone={'Asia/Seoul'} />
            <TimezoneText>Asia/Seoul</TimezoneText>
          </Time>
        </ChartContainer2>
        <CalendarContainer>
          <Calendar />
        </CalendarContainer>
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

export default DashBoard;
