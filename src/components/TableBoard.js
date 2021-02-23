import React from 'react';
import TiList from './TiList';
import styled from 'styled-components';
import palette from '../static/palette';
import '../static/fontAwesome/css/all.css';
import 'react-calendar/dist/Calendar.css';
import Menu from './Menu';

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
const TableBoard = () => {
  return (
    <Container>
      <SearchContainer>
        <i class='fas fa-search' />
        <SearchBar placeholder='검색' />
      </SearchContainer>
      <ProfileContainer>
        <i class='fas fa-sort-down' />
        <Profile>
          <ProfileText>j0n9hyun</ProfileText>
          <ProfileTextSubtitle>QuadMiners</ProfileTextSubtitle>
        </Profile>
      </ProfileContainer>
      <MenuBarTitle>
        TableBoard
        <SubTitle>테이블보드입니다.</SubTitle>
      </MenuBarTitle>
      <Menu color='red' />
      <TiList />
    </Container>
  );
};

export default TableBoard;
