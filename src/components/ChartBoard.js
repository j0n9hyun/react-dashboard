import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import palette from '../static/palette';
import '../static/fontAwesome/css/all.css';
import 'react-calendar/dist/Calendar.css';
import Menu from './Menu';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { getList } from '../features/api/apiAsync';
import { getTitle } from '../features/api/apiTitleAsync';
import { valueAmount } from '../features/table/pieChartSlice';
import { Bar, Pie } from 'react-chartjs-2';

const Container = styled.div`
  background-color: #000;
  max-width: 100%;
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
  margin-left: 300px;
  max-width: 100%;
  height: 300px;
  border-radius: 15px;
  /* padding: 30px 20px; */
  background-color: ${palette.gray[9]};
  top: 180px;
`;

const PieContainer = styled.div`
  position: absolute;
  max-width: 100%;
  color: whitesmoke;
  top: 180px;
  right: 80px;
  background-color: ${palette.gray[9]};
  width: 700px;
  /* margin: 0 0; */
  height: 360px;
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
  max-width: 700px;
  /* max-width: 80%; */
  color: whitesmoke;
  top: 180px;
  margin-left: 18%;
  /* margin-left: 250px; */
  /* right: 80px; */
  background-color: ${palette.gray[9]};
  height: 360px;
  border-radius: 15px;
  box-shadow: 2px 2px 20px -10px gray;
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

const Types = [
  'FileHash-MD5',
  'FileHash-SHA1',
  'FileHash-SHA256',
  'URL',
  'domain',
  'IPv4',
  'CVE',
  'Hostname',
  'YARA',
];
// console.log(data2);

const ChartBoard = () => {
  const dispatch = useDispatch();
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
  const [chart, setChart] = useState([]);
  const selectIndicatorType = useSelector((state) =>
    state.api.map((v) => v.indicator_type.id)
  );

  const filterType1 = selectIndicatorType.filter((c) => c === 1).length;
  const filterType2 = selectIndicatorType.filter((c) => c === 2).length;
  const filterType3 = selectIndicatorType.filter((c) => c === 3).length;
  const filterType4 = selectIndicatorType.filter((c) => c === 4).length;
  const filterType5 = selectIndicatorType.filter((c) => c === 5).length;
  const filterType6 = selectIndicatorType.filter((c) => c === 6).length;
  const filterType7 = selectIndicatorType.filter((c) => c === 7).length;
  const filterType8 = selectIndicatorType.filter((c) => c === 8).length;
  const filterType9 = selectIndicatorType.filter((c) => c === 9).length;
  // console.log(filterType1);

  useEffect(() => {
    dispatch(getList());
    dispatch(getTitle());
    dispatch(valueAmount());
    // data2();
  }, []);
  const pieData = {
    labels: Types,
    datasets: [
      {
        label: '# of Votes',
        data: [
          filterType1,
          filterType2,
          filterType3,
          filterType4,
          filterType5,
          filterType6,
          filterType7,
          filterType8,
          filterType9,
        ],
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

  const sample = {
    labels: Types,
    datasets: [
      {
        label: '발견 수',
        data: [
          filterType1,
          filterType2,
          filterType3,
          filterType4,
          filterType5,
          filterType6,
          filterType7,
          filterType8,
          filterType9,
        ],
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

  return (
    <>
      <Container>
        {/* <SearchContainer>
          <i className='fas fa-search' />
          <SearchBar placeholder='검색' />
        </SearchContainer> */}
        <MenuBarTitle>
          TableBoard
          <SubTitle>차트보드입니다.</SubTitle>
        </MenuBarTitle>
        <MenuBar>
          <LogoTitle>
            <i className='fab fa-phoenix-framework' />
          </LogoTitle>
          <Menu1 onClick={onClick}>
            <i className='fas fa-border-all' />
            <SideText>DashBoard</SideText>
          </Menu1>
          <Menu2 onClick={onClick2}>
            <i className='fas fa-dice-d6' /> <SideText>Tables</SideText>
          </Menu2>
          <Menu2 color='black' onClick={onClick3}>
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
        <BarContainer2>
          <Bar data={sample} options={options2} />
        </BarContainer2>
        {/* <ChartContainer> */}
        {/* </ChartContainer> */}
        <PieContainer>
          <Pie data={pieData} />
        </PieContainer>
      </Container>
    </>
  );
};

export default ChartBoard;
