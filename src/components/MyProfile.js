import React, { useState } from 'react';
import Modal from 'react-overlays/Modal';
import styled from 'styled-components';
import palette from '../static/palette';

const Backdrop = styled('div')`
  position: fixed;
  z-index: 1040;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: #000;
  opacity: 0.5;
`;

const RandomlyPositionedModal = styled(Modal)`
  position: fixed;
  width: 400px;
  /* height: 600px; */
  z-index: 1040;
  border: 0;
  outline: none;
  top: 50%;
  left: 50%;
  border-radius: 15px;
  margin-left: calc(400px / -2);
  margin-top: calc(400px / -2);
  background-color: white;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.5);
  padding: 20px;
  background-color: ${palette.gray[8]};
  color: ${palette.gray[5]};
`;

const ModalWrapper = styled.div`
  margin: 0;
  padding: 0;
  text-align: center;
`;

const ModalProfile = styled.div`
  position: absolute;
  border: 1px solid blue;
  width: 50px;
  height: 50px;
  right: 0;
  margin-right: 15px;
`;

const ProfileContainer = styled.div`
  position: relative;
  border: 0;
  right: 0;
  color: ${palette.gray[6]};
  text-align: center;
  margin: 20px 20px;
  border-radius: 10px;
  /* border: 1px solid coral; */
  width: 250px;
  float: right;
  /* background-color: ${palette.gray[9]}; */
  height: 50px;
  /* &:hover {
    background-color: ${palette.gray[8]};
  } */
  background-color: transparent;

  &:hover {
    background-color: ${palette.gray[9]};
    cursor: pointer;
  }
`;
const Profile = styled.div`
  /* right: 0; */
  /* border: 1px solid red; */
  position: relative;
  /* margin: 10px; */
  border-radius: 50px;
  left: 10%;
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
  text-align: center;
  color: ${palette.gray[6]};
`;

const DropdownContent = styled.div`
  display: none;
  position: absolute;
  background-color: gray;
  text-align: center;
  left: -205px;
  top: 65px;
  width: 200px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
`;

const Dropdown = styled.div`
  position: relative;
  display: inline-block;
  left: 100px;
  bottom: 15px;
  font-size: 1.5rem;
  &:hover ${DropdownContent} {
    display: block;
    color: coral;
  }
`;

const MyProfile = ({ user }) => {
  const [show, setShow] = useState(false);
  const renderBackdrop = (props) => <Backdrop {...props} />;
  return (
    <>
      <ProfileContainer onClick={() => setShow(true)}>
        <Dropdown>
          <i className='fas fa-sort-down' />
        </Dropdown>
        <Profile>
          <ProfileText>j0n9hyun</ProfileText>
          <ProfileTextSubtitle>QuadMiners</ProfileTextSubtitle>
        </Profile>
      </ProfileContainer>
      <RandomlyPositionedModal
        show={show}
        onHide={() => setShow(false)}
        renderBackdrop={renderBackdrop}
      >
        <ModalWrapper>
          프로필 설정
          <ModalProfile>
            <i class='fas fa-user'></i>
          </ModalProfile>
          <div>
            아이디 <br />
          </div>
          <div>
            현재 비밀번호 <br />
            <input />
          </div>
          <div>
            새 비밀번호 <br /> <input />
          </div>
          <div>
            비밀번호 확인 <br /> <input />
          </div>
        </ModalWrapper>
      </RandomlyPositionedModal>
    </>
  );
};

export default MyProfile;
