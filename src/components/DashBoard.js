import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
// import { Chart } from 'react-charts';
import axios from 'axios';
// import Highcharts from 'highcharts';
// import HighchartsReact from 'highcharts-react-official';

const Container = styled.div`
  background-color: #2c3e50;
  height: 100%;
`;

const MenuBar = styled.div`
  /* display: table-cell; */
  border: 1px solid red;
  width: 50px;
  height: 100%;
`;

const Menu = styled.div`
  border: 2px solid coral;
  color: lightgray;
  height: 50px;
  font-size: 2rem;
`;

const TableContainer = styled.div`
  display: table;
  border: 2px solid orange;
`;

const Table = styled.div`
  position: absolute;
  display: table-cell;
  text-align: center;
  color: lightgray;
  left: 50%;
  border: 3px solid pink;
`;

const DashBoard = ({ columns, data }) => {
  const [ti, setTi] = useState([]);
  useEffect(() => {
    const apiCall = async () => {
      await axios.get('http://localhost:8888/data').then((res) => {
        console.log(res.data);
        setTi(res.data);
      });
      // const user = await res.data;
      // console.log(user.map((v) => setTi(v.indicator)));
    };
    apiCall();
  }, []);
  // const data = React.useMemo(
  //   () => [
  //     {
  //       label: 'Series 1',
  //       data: [
  //         [0, 1],
  //         [1, 2],
  //         [2, 4],
  //         [3, 2],
  //         [4, 7],
  //       ],
  //     },
  //     {
  //       label: 'Series 2',
  //       data: [
  //         [0, 3],
  //         [1, 1],
  //         [2, 5],
  //         [3, 6],
  //         [4, 4],
  //       ],
  //     },
  //   ],
  //   []
  // );

  // const axes = React.useMemo(
  //   () => [
  //     { primary: true, type: 'linear', position: 'bottom' },
  //     { type: 'linear', position: 'left' },
  //   ],
  //   []
  // );

  return (
    <Container>
      <TableContainer>
        {ti}
        <table>
          <thead>
            <tr>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td></td>
            </tr>
          </tbody>
        </table>
        )
      </TableContainer>
      <MenuBar>
        <Menu>😊</Menu>
        <Menu>💕</Menu>
        <Menu>🎁</Menu>
        <Menu>🎶</Menu>
      </MenuBar>
      {/* <Chart data={data} axes={axes} style={{ height: '30px' }} /> */}
    </Container>
  );
};

export default DashBoard;
