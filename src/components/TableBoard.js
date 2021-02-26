import React from 'react';
import TiList from './TiList';
import styled from 'styled-components';
import palette from '../static/palette';
import '../static/fontAwesome/css/all.css';
import 'react-calendar/dist/Calendar.css';
import Menu from './Menu';
import { useSelector } from 'react-redux';
import MyProfile from './MyProfile';
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

const TableBoard = () => {
  // const dispatch = useDispatch();
  const tableApi = useSelector((state) => state.api);
  const column = useSelector((state) => state.column);
  const column2 = useSelector((state) => state.column2);
  const data = useSelector((state) => state.api);
  const data2 = useSelector((state) => state.apiTitle);
  // console.log(tableApi.map((d) => d.id));
  // const columns = useSelector((state) => state.column);

  // const list = [
  //   {
  //     id: tableApi.map((v) => v.id),
  //     type: tableApi.map((v) => v.indicator_type),
  //     indicator: 'www.naver.com',
  //   },
  // ];

  // list.push({ id: tableApi.map((v) => v.id) });

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
      <TiTypeList />
      {/* <TiList /> */}
    </Container>
  );
};

export default TableBoard;
