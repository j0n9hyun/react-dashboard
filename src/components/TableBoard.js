import React from 'react';
import TiList from './TiList';
import styled from 'styled-components';
import palette from '../static/palette';
import '../static/fontAwesome/css/all.css';
import 'react-calendar/dist/Calendar.css';
import Menu from './Menu';
import { useSelector } from 'react-redux';
import spinner from '../static/load.gif';
import MyProfile from './MyProfile';

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
  position: relative;
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

const ProfileContainer = styled.div`
  position: relative;
  border: 0;
  right: 0;
  color: ${palette.gray[6]};
  text-align: center;
  margin: 20px 20px;
  border-radius: 10px;
  width: 250px;
  float: right;
  height: 50px;
`;
const Profile = styled.div`
  position: relative;
  margin: 10px;
  border-radius: 50px;
  bottom: 25px;
  width: 40px;
  height: 40px;
  background-color: ${palette.gray[6]};
`;

const ProfileText = styled.div`
  position: relative;
  left: 75px;
  color: ${palette.gray[5]};
`;
const ProfileTextSubtitle = styled.div`
  position: relative;
  left: 75px;
  font-size: 14px;
  color: ${palette.gray[6]};
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
const TableBoard = () => {
  // const dispatch = useDispatch();
  const tableApi = useSelector((state) => state.api);
  const column = useSelector((state) => state.column);
  const column2 = useSelector((state) => state.column2);
  const data = useSelector((state) => state.api);
  const data2 = useSelector((state) => state.apiTitle);
  console.log(tableApi.map((d) => d.id));
  // const columns = useSelector((state) => state.column);

  const list = [
    {
      id: tableApi.map((v) => v.id),
      type: tableApi.map((v) => v.indicator_type),
      indicator: 'www.naver.com',
    },
  ];

  list.push({ id: tableApi.map((v) => v.id) });

  return (
    <Container>
      <SearchContainer>
        <i class='fas fa-search' />
        <SearchBar placeholder='검색' />
      </SearchContainer>
      <MyProfile />

      <MenuBarTitle>
        TableBoard
        <SubTitle>테이블보드입니다.</SubTitle>
      </MenuBarTitle>
      <Menu color='red' />

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

      <TiList />
    </Container>
  );
};

export default TableBoard;
