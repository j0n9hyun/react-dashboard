import React, { useState } from 'react';
import styled from 'styled-components';
import palette from '../static/palette';
import '../static/fontAwesome/css/all.css';
import 'react-calendar/dist/Calendar.css';
import { useSelector } from 'react-redux';
import spinner from '../static/load.gif';

const Table = styled.table`
  background: black;
  border-radius: 3px;
  border-collapse: collapse;
  width: 100%;
  height: 320px;
  margin: auto;
  max-width: 600px;
  padding: 5px;
  top: 177px;
  left: -100px;
  position: relative;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
  animation: float 5s infinite;
`;
const TableTd = styled.td`
  background: ${palette.gray[9]};
  padding: 20px;
  text-align: left;
  vertical-align: middle;
  width: 200px;
  font-weight: 300;
  font-size: 14px;
  text-shadow: -1px -1px 1px rgba(0, 0, 0, 0.1);
  border-right: 1px solid #c1c3d1;
`;

const TableTr = styled.tr`
  display: table;
  width: 800px;
  /* border-top: 1px solid #c1c3d1; */
  border-bottom: 1px solid #c1c3d1;
  color: ${palette.gray[5]};
  font-size: 14px;
  font-weight: normal;
  text-shadow: 0 1px 1px rgba(256, 256, 256, 0.1);

  &:first-child {
    border-top: none;
  }
  &:last-child {
    border-bottom: none;
    color: coral;
  }
`;
const TableTh2 = styled.th`
  color: #d5dde5;
  background: #1b1e24;
  /* border-bottom: 4px solid #9ea7af; */
  /* border-right: 1px solid #343a45; */
  font-size: 16px;
  font-weight: 100;
  padding: 24px;
  text-align: left;
  text-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);
  vertical-align: middle;
  width: 100px;
  text-align: center;
  &:first-child {
    border-top-left-radius: 15px;
  }
  &:last-child {
    border-top-right-radius: 15px;
    border-right: none;
  }
`;

const TableBody = styled.tbody`
  overflow-y: auto;
  overflow-x: hidden;
  float: left;
  /* display: block; */
  width: 800px;
  height: 560px;
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
  &::-webkit-scrollbar {
    background-color: gray;
    width: 12px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #6c5ce7;
    border-radius: 15px;
  }
`;

const TableHead = styled.thead`
  /* float: ; */
  /* width: 500px; */
`;

const DownButton = styled.button`
  position: relative;
  padding: 0;
  margin: 0;
  font-size: 1rem;
  width: 100%;
  /* border-radius: 15px; */
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
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

const aaa = () => {};

const TiTypeList = () => {
  // const dispatch = useDispatch();
  const [count, setCount] = useState(7);
  const tableApi = useSelector((state) => state.api);
  const column = useSelector((state) => state.column);
  const column2 = useSelector((state) => state.column2);
  const data = useSelector((state) => state.api);
  const data2 = useSelector((state) => state.apiTitle);
  const loadData = data2.filter(function (e) {
    return e.id <= count;
  });
  return (
    <Table>
      <TableHead>
        <TableTr>
          {column2.map((column) => (
            <TableTh2 key={column}>{column}</TableTh2>
          ))}
        </TableTr>
      </TableHead>
      <TableBody>
        {data2.length === 0
          ? // <img src={spinner} alt='spinner' />
            // <i class='fas fa-spinner fa-spin' />
            null
          : loadData.map(({ id, id_value, name, description: desc }) => (
              <TableTr key={id}>
                <TableTd>{id_value}</TableTd>
                <TableTd>{name}</TableTd>
                <TableTd>{desc.substr(0, 50) + '...'}</TableTd>
              </TableTr>
            ))}
        <DownButton
          onClick={(e) => {
            setCount(count + 5);
          }}
        >
          불러오기
        </DownButton>
      </TableBody>
    </Table>
  );
};

export default TiTypeList;
