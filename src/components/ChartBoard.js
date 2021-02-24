import React, { useEffect } from 'react';
import styled from 'styled-components';
import palette from '../static/palette';
import '../static/fontAwesome/css/all.css';
import 'react-calendar/dist/Calendar.css';
import {
  ResponsiveContainer,
  BarChart,
  // Bar,
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
import { useDispatch, useSelector } from 'react-redux';
import { getList } from '../features/api/apiAsync';
import { getTitle } from '../features/api/apiTitleAsync';
import { valueAmount } from '../features/table/pieChartSlice';
import { Bar } from '@reactchartjs/react-chart.js';

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
  /* max-width: 300px; */
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
const ddd = [
  { name: 'Page A', uv: 4000, female: 2400, male: 2400 },
  { name: 'Page B', uv: 3000, female: 1398, male: 2210 },
  { name: 'Page C', uv: 2000, female: 9800, male: 2290 },
  { name: 'Page D', uv: 2780, female: 3908, male: 2000 },
  { name: 'Page E', uv: 1890, female: 4800, male: 2181 },
  { name: 'Page F', uv: 2390, female: 3800, male: 2500 },
  { name: 'Page G', uv: 3490, female: 4300, male: 2100 },
];

const ChartBoard = () => {
  const dispatch = useDispatch();
  const selectIndicatorType = useSelector((state) =>
    state.api.map((v) => v.indicator_type)
  );
  const filterType1 = selectIndicatorType.filter((c) => c === 1).length;
  const filterType2 = selectIndicatorType.filter((c) => c === 2).length;
  const filterType3 = selectIndicatorType.filter((c) => c === 3).length;

  const data = [
    { name: 'Hostname', value: filterType1 },
    { name: 'IPv4', value: filterType2 },
    { name: 'URL', value: filterType3 },
    { name: 'SHA256-hash', value: 10 },
  ];

  useEffect(() => {
    dispatch(getList());
    dispatch(getTitle());
    dispatch(valueAmount());
  }, [dispatch]);

  return (
    <>
      <Container>
        <SearchContainer>
          <i className='fas fa-search' />
          <SearchBar placeholder='검색' />
        </SearchContainer>
        <MyProfile />
        <MenuBarTitle>
          ChartBoard
          <SubTitle>차트보드입니다.</SubTitle>
          {/* <button onClick={() => dispatch(valueAmount())}>버튼</button> */}
        </MenuBarTitle>
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
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </PieContainer>
        <Bar
          data={data}
          width={100}
          height={50}
          options={{ maintainAspectRatio: false }}
        />
      </Container>
    </>
  );
};

export default ChartBoard;
