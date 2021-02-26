import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import palette from '../static/palette';
import '../static/fontAwesome/css/all.css';
import 'react-calendar/dist/Calendar.css';
import MyProfile from './MyProfile';
import Menu from './Menu';
import { useDispatch, useSelector } from 'react-redux';
import { getList } from '../features/api/apiAsync';
import { getTitle } from '../features/api/apiTitleAsync';
import { valueAmount } from '../features/table/pieChartSlice';
import { Bar, Pie, Line } from 'react-chartjs-2';

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
  box-shadow: 2px 2px 20px -10px gray;
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

const BarContainer2 = styled.div`
  position: relative;
  text-align: center;
  width: 680px;
`;

const LineContainer = styled.div`
  position: relative;
  width: 740px;
  padding: 0 10px;
  left: 1120px;
  height: 360px;
  bottom: 179px;
  background-color: ${palette.gray[9]};
  border-radius: 15px;
  box-shadow: 2px 2px 20px -10px gray;
`;

const Types = [
  'Hostname',
  'IPv4',
  'URL',
  'FileHash-SHA256',
  'FileHash-MD5',
  'FileHash-SHA1',
  'domain',
  'CVE',
  'BitcoinAddress',
  'email',
  'YARA',
  'JA3',
  'SSLCertFingerprint',
  'Mutex',
  'FileHash-IMPHASH',
];

const pieData = {
  labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
  datasets: [
    {
      label: '# of Votes',
      data: [12, 19, 3, 5, 2, 3],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)',
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)',
      ],
      borderWidth: 1,
    },
  ],
};
// console.log(data2);

const ChartBoard = () => {
  const dispatch = useDispatch();
  const [chart, setChart] = useState([]);
  const selectIndicatorType = useSelector((state) =>
    state.api.map((v) => v.indicator_type)
  );
  // const filterType1 = selectIndicatorType.filter((c) => c === 1).length;
  const filterType1 = selectIndicatorType.filter((c) => c === 1).length;
  const filterType2 = selectIndicatorType.filter((c) => c === 2).length;
  const filterType3 = selectIndicatorType.filter((c) => c === 3).length;
  // console.log(filterType1);

  useEffect(() => {
    dispatch(getList());
    dispatch(getTitle());
    dispatch(valueAmount());
    // data2();
  }, []);

  // const data2 = () => {
  //   setChart([sample]);
  // };
  // console.log(data2);
  const sample = {
    labels: Types,
    datasets: [
      {
        label: '발견 수',
        data: [filterType1, filterType2, filterType3],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  const options2 = {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
  };

  const lineData = {
    labels: ['1', '2', '3', '4', '5', '6'],
    datasets: [
      {
        label: '# of Votes',
        data: [12, 19, 3, 5, 2, 3],
        fill: false,
        backgroundColor: 'rgb(255, 99, 132)',
        borderColor: 'rgba(255, 99, 132, 0.2)',
        yAxisID: 'y-axis-1',
      },
      {
        label: '# of No Votes',
        data: [1, 2, 1, 1, 2, 2],
        fill: false,
        backgroundColor: 'rgb(54, 162, 235)',
        borderColor: 'rgba(54, 162, 235, 0.2)',
        yAxisID: 'y-axis-2',
      },
    ],
  };

  const lineOptions = {
    scales: {
      yAxes: [
        {
          type: 'linear',
          display: true,
          position: 'left',
          id: 'y-axis-1',
        },
        {
          type: 'linear',
          display: true,
          position: 'right',
          id: 'y-axis-2',
          gridLines: {
            drawOnArea: false,
          },
        },
      ],
    },
  };
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
          <BarContainer2>
            <Bar data={sample} options={options2} />
          </BarContainer2>
        </ChartContainer>
        <PieContainer>
          <Pie data={pieData} />
        </PieContainer>
        <LineContainer>
          <Line data={lineData} options={lineOptions} />
        </LineContainer>
      </Container>
    </>
  );
};

export default ChartBoard;
