import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
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
  PieChart,
  Pie,
  Cell,
} from 'recharts';
import MyProfile from './MyProfile';
import Menu from './Menu';
import { useSelector } from 'react-redux';

const Container = styled.div`
  background-color: #000;
  height: 100%;
`;

const SearchContainer = styled.div`
  position: absolute;
  margin: 20px 0 20px 40px;
  left: 250px;
`;
const SearchBar = styled.input`
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
  height: 200px;
  border-radius: 15px;
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
  height: 200px;
  border-radius: 15px;
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
  let todos = useSelector((state) => {
    return state.todoReducer;
  });
  console.log(todos);
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
        <MyProfile />
        <Menu />
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
      </Container>
    </>
  );
};

export default DashBoard;
