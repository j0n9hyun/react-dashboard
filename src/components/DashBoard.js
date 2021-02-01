import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
// import { Chart } from 'react-charts';
import axios from 'axios';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import Table from './Table';
// import Highcharts from 'highcharts';
// import HighchartsReact from 'highcharts-react-official';

const Container = styled.div`
  background-color: #2c3e50;
  height: 100%;
`;

const MenuBar = styled.div`
  /* display: table-cell; */
  border: 1px solid red;
  /* width: 50px; */
  height: 100%;
`;

const Menu = styled.div`
  border: 2px solid coral;
  color: lightgray;
  height: 100%;
  font-size: 2rem;
`;

const TableContainer = styled.div`
  display: table;
  border: 2px solid orange;
  color: lightgray;
  text-align: center;
`;

// const Table = styled.div`
//   position: absolute;
//   display: table-cell;
//   text-align: center;
//   color: lightgray;
//   left: 50%;
//   border: 3px solid pink;
// `;

const DashBoard = () => {
  const [ti, setTi] = useState([]);
  useEffect(() => {
    const apiCall = async () => {
      await axios.get('http://localhost:8888/data').then((res) => {
        // console.log(res.data);
        setTi(res.data);
      });
      // const user = await res.data;
      // console.log(user.map((v) => setTi(v.indicator)));
    };
    apiCall();
  }, []);
  const columns = ['No', 'indicator_type', 'indicator', 'reg_date'];
  // const data = ti.map((v) => v.indicator);

  return (
    <Container>
      <MenuBar>
        <TableContainer>
          <Table columns={columns} data={ti} />
        </TableContainer>
      </MenuBar>
    </Container>
  );
};

export default DashBoard;

/* <MenuBar>
  <Menu>😊</Menu>
  <Menu>💕</Menu>
  <Menu>🎁</Menu>
  <Menu>🎶</Menu>
</MenuBar> */
