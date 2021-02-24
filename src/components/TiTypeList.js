import React from 'react';
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
  border-top: 1px solid #c1c3d1;
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
  }
`;
const TableTh2 = styled.th`
  color: #d5dde5;
  background: #1b1e24;
  border-bottom: 4px solid #9ea7af;
  border-right: 1px solid #343a45;
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

const TableHead = styled.thead`
  /* float: ; */
  /* width: 500px; */
`;
const TiTypeList = () => {
  // const dispatch = useDispatch();
  const tableApi = useSelector((state) => state.api);
  const column = useSelector((state) => state.column);
  const column2 = useSelector((state) => state.column2);
  const data = useSelector((state) => state.api);
  const data2 = useSelector((state) => state.apiTitle);
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
    </Table>
  );
};

export default TiTypeList;
