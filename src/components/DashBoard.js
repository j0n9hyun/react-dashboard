import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import palette from '../static/palette';
import '../static/fontAwesome/css/all.css';
import Clock from 'react-live-clock';
import 'react-calendar/dist/Calendar.css';
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
import { useDispatch, useSelector } from 'react-redux';
import { getList } from '../features/api/apiAsync';
import { getTitle } from '../features/api/apiTitleAsync';
import { valueAmount } from '../features/table/pieChartSlice';
import TiTypeList from './TiTypeList';

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

const PieContainer = styled.div`
  position: absolute;
  max-width: 100%;
  color: whitesmoke;
  top: 560px;
  left: 730px;
  background-color: ${palette.gray[9]};
  width: 350px;
  margin: 0 0;
  height: 280px;
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

const TimeoutContainer = styled.div`
  position: absolute;
  border: 1px solid red;
  right: 305px;
  color: red;
  width: 100px;
`;

const COLORS = [
  '#0088FE',
  '#00C49F',
  '#FFBB28',
  '#FF8042',
  // '#9b59b6',
  // '#34495e',
  // '#bdc3c7',
];

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

const DashBoard = () => {
  const [chart, setChart] = useState([]);
  const dispatch = useDispatch();
  const selectIndicatorType = useSelector((state) =>
    state.api.map((v) => v.indicator_type)
  );
  const filterType1 = selectIndicatorType.filter((c) => c === 1).length;
  const filterType2 = selectIndicatorType.filter((c) => c === 2).length;
  const filterType3 = selectIndicatorType.filter((c) => c === 3).length;
  const filterType4 = selectIndicatorType.filter((c) => c === 4).length;
  const filterType5 = selectIndicatorType.filter((c) => c === 5).length;
  const filterType6 = selectIndicatorType.filter((c) => c === 6).length;
  const filterType7 = selectIndicatorType.filter((c) => c === 7).length;
  const filterType8 = selectIndicatorType.filter((c) => c === 8).length;
  const ccc = () => {
    setChart([
      { name: 'Hostname', value: filterType1 },
      { name: 'IPv4', value: filterType2 },
      { name: 'URL', value: filterType3 },
      { name: 'FileHash-SHA256', value: filterType4 },
      { name: 'FileHash-MD5', value: filterType5 },
      { name: 'FileHash-SHA1', value: filterType6 },
      { name: 'domain', value: filterType7 },
      { name: 'CVE', value: filterType8 },
      { name: 'BitcoinAddress', value: 10 },
      { name: 'email', value: 10 },
      { name: 'YARA', value: 10 },
      { name: 'JA3', value: 10 },
    ]);
  };

  useEffect(() => {
    dispatch(getList());
    dispatch(getTitle());
    dispatch(valueAmount());
    // ccc();
  }, [dispatch]);

  /* {chart.map((e) => e.name)} */
  return (
    <>
      <Container>
        <div style={{ paddingLeft: '1210px', height: '0' }}>
          <TiTypeList />
        </div>
        <SearchContainer>
          <i className='fas fa-search' />
          <SearchBar placeholder='검색' />
        </SearchContainer>
        <TimeoutContainer>대충 clock</TimeoutContainer>
        <MyProfile />
        <MenuBarTitle>
          DashBoard
          <SubTitle>대시보드입니다.</SubTitle>
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
            <PieChart width={100} height={500}>
              <Pie
                data={chart}
                // cx={100}
                // cy={75}
                labelLine={false}
                label={renderCustomizedLabel}
                outerRadius={130}
                fill='#8884d8'
              >
                {chart.map((entry, index) => (
                  <Cell fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </PieContainer>
        <ChartContainer2>
          <Time>
            <Clock format={'HH:mm:ss'} ticking={true} timezone={'Asia/Seoul'} />
            <TimezoneText>Asia/Seoul</TimezoneText>
          </Time>
        </ChartContainer2>
      </Container>
    </>
  );
};

export default DashBoard;
