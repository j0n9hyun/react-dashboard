import React, { useState } from 'react';
import styled from 'styled-components';
import spinner from '../static/load.gif';
import palette from '../static/palette';
import { useSelector } from 'react-redux';

const TableContainer = styled.div`
  margin-top: 20px;
  position: absolute;
  text-align: center;
  right: 60px;
  width: 700px;
  top: 15%;
  height: 500px;
  background-color: transparent;
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
  background-color: ${palette.gray[9]};

  color: ${palette.gray[4]};

  height: 50px;
  &:nth-of-type(1) {
    background-color: transparent;
    border-right: none;
  }
  &:nth-of-type(even) {
    background-color: ${palette.gray[9]};
    color: ${palette.gray[4]};
  }
  &:first-child {
    border-top: none;
  }
  &:last-child {
    border-bottom: none;
  }
`;

const TableBody = styled.tbody`
  display: block;
  overflow-y: scroll;
  margin-bottom: 30px;
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
  background-color: #1b1e24;
  /* background-color: ${palette.gray[8]}; */
  color: ${palette.gray[4]};
  border: 0px solid #8e44ad;
  text-align: center;
  width: 1000px;
  padding: 12px 15px;
  position: sticky;
  top: 0;
  &:nth-of-type(1) {
    border-top-left-radius: 15px;
  }
  &:nth-of-type(4) {
    border-top-right-radius: 15px;
  }
`;
const TableTh2 = styled.th`
  background-color: #ffbe76;
  color: white;
  border: 0px solid #8e44ad;
  text-align: center;
  width: 1000px;
  padding: 12px 15px;
  position: sticky;
  top: 0;
  &:nth-of-type(1) {
    border-top-left-radius: 15px;
  }
  &:nth-of-type(3) {
    border-top-right-radius: 15px;
  }
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

const Img = styled.img`
  width: 100px;
`;
const TiList = () => {
  const [count, setCount] = useState(5);
  const column = useSelector((state) => state.column);
  const column2 = useSelector((state) => state.column2);
  const data = useSelector((state) => state.api);
  const data2 = useSelector((state) => state.apiTitle);
  const loadData = data.filter(function (e) {
    return e.id <= count;
  });

  return (
    <>
      <TableContainer>
        <TableStyling>
          <TableHead>
            <TableTr>
              {column.map((column) => (
                <TableTh key={column}>{column}</TableTh>
              ))}
            </TableTr>
          </TableHead>
          <TableBody>
            {data.length === 0 ? (
              <Img src={spinner} alt='spinner' />
            ) : (
              loadData.map(({ id, indicator_type, indicator, reg_date }) => (
                <TableTr key={id}>
                  <TableTd>{id}</TableTd>
                  <TableTd>{indicator_type}</TableTd>
                  <TableTd>{indicator}</TableTd>
                  <TableTd>{reg_date.slice(0, 1).replace('T', ' ')}</TableTd>
                </TableTr>
              ))
            )}
            <DownButton
              onClick={(e) => {
                setCount(count + 5);
              }}
            >
              불러오기
            </DownButton>
          </TableBody>
        </TableStyling>
        <TableStyling>
          <TableHead>
            <TableTr>
              {column2.map((column) => (
                <TableTh2 key={column}>{column}</TableTh2>
              ))}
            </TableTr>
          </TableHead>
          <TableBody>
            {data2.length === 0 ? (
              <img src={spinner} alt='spinner' />
            ) : (
              data2.map(({ id, id_value, name, description: desc }) => (
                <TableTr key={id}>
                  <TableTd>{id_value}</TableTd>
                  <TableTd>{name}</TableTd>
                  <TableTd>{desc.substr(0, 50) + '...'}</TableTd>
                </TableTr>
              ))
            )}
          </TableBody>
        </TableStyling>
      </TableContainer>
    </>
  );
};

export default TiList;
