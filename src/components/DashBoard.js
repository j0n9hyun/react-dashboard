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
import Modal from 'react-overlays/Modal';
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  PieChart,
  Pie,
  Sector,
  Cell,
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
  /* &:hover {
    background-color: ${palette.gray[8]};
  } */
  background-color: transparent;

  &:hover {
    background-color: ${palette.gray[9]};
    cursor: pointer;
  }
`;
const Profile = styled.div`
  /* right: 0; */
  /* border: 1px solid red; */
  position: relative;
  /* margin: 10px; */
  border-radius: 50px;
  left: 10%;
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
  text-align: center;
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
  bottom: 15px;
  font-size: 1.5rem;
  &:hover ${DropdownContent} {
    display: block;
    color: coral;
  }
`;

const CalendarContainer = styled.div`
  position: relative;
  left: -2px;
  width: 255px;
`;

const PieContainer = styled.div`
  position: absolute;
  max-width: 100%;
  color: whitesmoke;
  top: 560px;
  left: 730px;
  background-color: ${palette.gray[9]};
  width: 350px;
  margin: 0 0;
  /* height: 0; */
  height: 200px;
  border-radius: 15px;
`;

// let rand = () => Math.floor(Math.random() * 20) - 10;

const Backdrop = styled('div')`
  position: fixed;
  z-index: 1040;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: #000;
  opacity: 0.5;
`;

const RandomlyPositionedModal = styled(Modal)`
  position: fixed;
  width: 400px;
  /* height: 600px; */
  z-index: 1040;
  top: 50%;
  left: 50%;
  border: 0;
  outline: none;
  border-radius: 15px;
  margin-left: calc(400px / -2);
  margin-top: calc(400px / -2);
  background-color: white;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.5);
  padding: 20px;
  background-color: ${palette.gray[8]};
  color: ${palette.gray[5]};
  transform: scale(0);
`;

const ModalWrapper = styled.div`
  margin: 0;
  padding: 0;
  text-align: center;
`;

const ModalProfile = styled.div`
  position: absolute;
  border: 1px solid blue;
  width: 50px;
  height: 50px;
  right: 0;
  margin-right: 15px;
`;

const data = [
  { name: 'Group A', value: 400 },
  { name: 'Group B', value: 300 },
  { name: 'Group C', value: 300 },
  { name: 'Group D', value: 200 },
];
const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
  index,
}) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill='white'
      textAnchor={x > cx ? 'start' : 'end'}
      dominantBaseline='central'
    >
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

const DashBoard = () => {
  const [ti, setTi] = useState([]);
  const [tiTitle, setTiTitle] = useState([]);

  const columns = ['번호', '타입', '인디케이터', '등록일'];
  const columns2 = ['아이디값', '타이틀', '설명'];

  const [show, setShow] = useState(false);

  const renderBackdrop = (props) => <Backdrop {...props} />;

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
        <ProfileContainer onClick={() => setShow(true)}>
          <Dropdown>
            <i className='fas fa-sort-down' />
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
        <PieContainer>
          <ResponsiveContainer>
            <PieChart width={400} height={1000}>
              <Pie
                data={data}
                // cx={100}
                // cy={75}
                labelLine={false}
                label={renderCustomizedLabel}
                outerRadius={70}
                fill='#8884d8'
              >
                {data.map((entry, index) => (
                  <Cell fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
        </PieContainer>
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
        <RandomlyPositionedModal
          show={show}
          onHide={() => setShow(false)}
          renderBackdrop={renderBackdrop}
        >
          <ModalWrapper>
            프로필 설정
            <ModalProfile>
              <i class='fas fa-user'></i>
            </ModalProfile>
            <div>
              아이디 <br />
            </div>
            <div>
              현재 비밀번호 <br />
              <input />
            </div>
            <div>
              새 비밀번호 <br /> <input />
            </div>
            <div>
              비밀번호 확인 <br /> <input />
            </div>
          </ModalWrapper>
        </RandomlyPositionedModal>
      </Container>
    </>
  );
};

export default DashBoard;
