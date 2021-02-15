import React from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import background from '../static/background.jpg';
import menubar from '../static/menu11.png';
import palette from '../static/palette';
import '../static/fontAwesome/css/all.css';
import TableBoard from './TableBoard';

import {
  LineChart,
  Line,
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
  ScatterChart,
  Scatter,
  Cell,
  RadialBarChart,
  RadialBar,
} from 'recharts';
import TiList from './TiList';

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

const dd = [
  { name: 'Page A', uv: 4000, pv: 2400, amt: 2400 },
  { name: 'Page B', uv: 3000, pv: 1398, amt: 2210 },
  { name: 'Page C', uv: 2000, pv: 9800, amt: 2290 },
  { name: 'Page D', uv: 2780, pv: 3908, amt: 2000 },
  { name: 'Page E', uv: 1890, pv: 4800, amt: 2181 },
  { name: 'Page F', uv: 2390, pv: 3800, amt: 2500 },
  { name: 'Page G', uv: 3490, pv: 4300, amt: 2100 },
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

const dddd = [
  { x: 100, y: 200, z: 200 },
  { x: 120, y: 100, z: 260 },
  { x: 170, y: 300, z: 400 },
  { x: 140, y: 250, z: 280 },
  { x: 150, y: 400, z: 500 },
  { x: 110, y: 280, z: 200 },
];

const ddddd = [
  { name: 'Group A', value: 400 },
  { name: 'Group B', value: 300 },
  { name: 'Group C', value: 300 },
  { name: 'Group D', value: 200 },
];
const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const RADIAN = Math.PI / 180;

const Container = styled.div`
  background-color: #000;
  /* background-color: ${palette.gray[9]}; */
  height: 100%;
`;

const MenuBar = styled.div`
  position: absolute;
  background-color: ${palette.gray[9]};
  /* background-color: #122620; */
  border-top-right-radius: 25px;
  border-bottom-right-radius: 25px;
  width: 250px;
  /* left: 10px; */
  height: 100%;
  /* height: calc(100% - 110px); */
  /* margin: 20px 20px; */
  box-shadow: 0 2px 20px -10px black;
`;

const MenuBarInverse = () => {
  console.log('inverse');
};

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
  padding: 10px 10px;
  margin: 10px 10px;
  width: 210px;
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
const Menu3 = styled(Menu1)`
  position: absolute;
  background-color: transparent;
  bottom: 20px;
`;
const Menu4 = styled(Menu3)`
  bottom: 80px;
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
  position: relative;
  /* border: 1px solid red; */
  margin: 5px 10px 10px 48px;
  /* margin: 0 auto; */
  left: 0;
  right: 0;
  text-align: center;
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

const SearchContainer = styled.div`
  position: absolute;
  margin: 20px 0 20px 40px;
  left: 250px;
`;
const SearchBar = styled.input`
  border: 0;
  color: lightgray;
  background-color: #343a40;
  margin-bottom: 10px;
  border-radius: 10px;
  padding-left: 15px;
  margin-left: 20px;
  font-size: 1rem;
  /* width: 180px; */
  width: 500px;
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

const LogoTitle = styled.div`
  text-align: center;
  margin: 30px 0;
`;

const ProfileContainer = styled.div`
  position: absolute;
  border: 0;
  right: 0;
  color: ${palette.gray[6]};
  text-align: center;
  margin: 20px 20px;
  border-radius: 10px;
  /* border: 1px solid coral; */
  width: 200px;
  background-color: ${palette.gray[9]};
  height: 50px;
`;
const Profile = styled.div`
  /* right: 0; */
  /* border: 1px solid red; */
  margin: 10px;
  border-radius: 10px;
  width: 40px;
  height: 40px;
  background-color: ${palette.gray[6]};
`;

const ProfileText = styled.div`
  position: absolute;
  left: 80px;
  color: ${palette.gray[4]};
  top: 15px;
`;

const ChartContainer = styled.div`
  border: 2px solid ${palette.gray[7]};
  border-radius: 15px;
  padding: 30px 20px;
  background-color: ${palette.gray[9]};
  position: absolute;
  left: 300px;
  top: 20%;
`;

const ChartContainer2 = styled(ChartContainer)`
  left: 50%;
  /* border: 1px solid red; */
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
        <SearchContainer>
          <i class='fas fa-search' />
          <SearchBar placeholder='검색' />
        </SearchContainer>
        <ProfileContainer>
          <Profile>
            <i class='fas fa-sort-down' />
            <ProfileText>j0n9hyun</ProfileText>
          </Profile>
        </ProfileContainer>
        <MenuBar>
          <LogoTitle>
            <i class='fab fa-phoenix-framework' />
          </LogoTitle>
          <MenuBarTitle>
            DashBoard
            <SubTitle>대시보드입니다.</SubTitle>
          </MenuBarTitle>

          <Menu1 onClick={onClick}>
            <i class='fas fa-border-all' />
            <SideText>DashBoard</SideText>
          </Menu1>
          <Menu2 onClick={onClick2}>
            <i class='fas fa-dice-d6' /> <SideText>Tables</SideText>
          </Menu2>
          <Menu2 onClick={onClick2}>
            <i class='far fa-chart-bar'></i>
            <SideText>Charts</SideText>
          </Menu2>
          <Menu2 onClick={onClick2}>
            <i class='fas fa-key' /> <SideText>blabla</SideText>
          </Menu2>
          <Menu3>
            <i class='fas fa-sign-out-alt'></i>
            <SideText>Logout</SideText>
          </Menu3>
          <Menu4>
            <i class='fas fa-cogs' />
            <SideText>Settings</SideText>
          </Menu4>
        </MenuBar>
        <ChartContainer>
          <LineChart
            width={600}
            height={300}
            data={dd}
            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
          >
            <XAxis dataKey='name' />
            <YAxis />
            <CartesianGrid strokeDasharray='3 3' />
            <Tooltip />
            <Legend />
            <Line
              type='monotone'
              dataKey='pv'
              stroke='#8884d8'
              activeDot={{ r: 8 }}
            />
            <Line type='monotone' dataKey='uv' stroke='#82ca9d' />
          </LineChart>

          <BarChart
            width={600}
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
        </ChartContainer>
        <ChartContainer2>
          <RadialBarChart
            width={730}
            height={350}
            innerRadius='10%'
            outerRadius='80%'
            data={d}
            startAngle={180}
            endAngle={0}
          >
            <RadialBar
              minAngle={15}
              label={{ fill: 'black', position: 'insideStart' }}
              background
              clockWise={true}
              dataKey='uv'
            />
            <Legend
              iconSize={10}
              width={120}
              height={120}
              layout='vertical'
              verticalAlign='middle'
              align='right'
            />
            <Tooltip />
          </RadialBarChart>

          <ScatterChart
            width={400}
            height={300}
            margin={{ top: 20, right: 20, bottom: 20, left: 20 }}
          >
            <CartesianGrid />
            <XAxis dataKey={'x'} type='number' name='stature' unit='cm' />
            <YAxis dataKey={'y'} type='number' name='weight' unit='kg' />
            <Scatter name='A school' data={dddd} fill='#8884d8' />
            <Tooltip cursor={{ strokeDasharray: '3 3' }} />
          </ScatterChart>
        </ChartContainer2>
      </Container>
    </>
  );
};

export default DashBoard;
