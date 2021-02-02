import React, { useState } from 'react';
// import 'antd/dist/antd.css';
import styled from 'styled-components';
import spinner from '../static/load.gif';
const TableContainer = styled.div`
  position: absolute;
  text-align: center;
  left: 30%;
  top: 30%;
  height: 500px;
`;

const TableStyling = styled.table`
  border-collapse: collapse;
  border-radius: 1em;
  margin: 0 auto;
  max-width: 800px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);
`;

const TableHead = styled.thead`
  &:first-child {
    position: sticky;
    top: 0;
  }
`;
const TableTr = styled.tr`
  display: table;
  width: 100%;
  background-color: white;
  color: black;
  height: 50px;
  &:nth-of-type(even) {
    background-color: lightgray;
    color: black;
  }
`;

const TableBody = styled.tbody`
  display: block;
  overflow-y: scroll;
  height: 250px;
  &::-webkit-scrollbar {
    background-color: gray;
    width: 12px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #6c5ce7;
    border-radius: 15px;
  }
  &::-webkit-scrollbar-track {
  }
`;

const TableTh = styled.th`
  background-color: #6c7ae0;
  color: white;
  border: 0px solid #8e44ad;
  text-align: center;
  width: 1000px;
  padding: 12px 15px;
  position: sticky;
  top: 0;
  /* &:first-child {
    border-radius: 46px 0 0 0;
    color: red;
  }
  &:last-child {
    border-radius: 0 46px 0 0;
    color: red;
  } */
`;

const TableTd = styled.td`
  width: 200px;
  text-align: center;
`;

const DownButton = styled.button`
  position: relative;
  font-size: 1rem;
  width: 250px;
  border-radius: 15px;
  color: lightgray;
  border: 2px solid transparent;
  background: rgba(255, 255, 255, 0.1);
  cursor: pointer;

  &:hover {
    box-shadow: 0 2px 20px -10px lightblue;
    color: white;
    transition: all 0.5s ease-in-out;
  }
`;

const TiList = ({ columns, data }) => {
  const [count, setCount] = useState(5);
  // const [loading, setLoading] = useState(false);
  const loadData = data.filter(function (e) {
    return e.id <= count;
  });

  // data.length === 0 ? console.log('참') : console.log('거짓');
  return (
    <>
      <TableContainer>
        <TableStyling>
          <TableHead>
            <TableTr>
              {columns.map((column) => (
                <TableTh key={column}>{column}</TableTh>
              ))}
            </TableTr>
          </TableHead>
          <TableBody>
            {data.length === 0 ? (
              <img src={spinner} />
            ) : (
              loadData.map(({ id, indicator_type, indicator, reg_date }) => (
                <TableTr key={id}>
                  <TableTd>{id}</TableTd>
                  <TableTd>{indicator_type}</TableTd>
                  <TableTd>{indicator}</TableTd>
                  <TableTd>{reg_date.slice(0, 19).replace('T', ' ')}</TableTd>
                </TableTr>
              ))
            )}
          </TableBody>
        </TableStyling>
        <DownButton
          onClick={(e) => {
            setCount(count + 5);
          }}
        >
          불러오기
        </DownButton>
      </TableContainer>
    </>
  );
};

export default TiList;
