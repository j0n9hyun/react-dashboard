import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  background-color: #2c3e50;
  height: 1100px;
`;

const LoginContainer = styled.div`
  position: relative;
  top: 20%;
  border-radius: 10px;
  box-shadow: 0 10px 10px rgba(0, 0, 0, 20%);
  text-align: center;
  margin: 0 auto;
  width: 400px;
  height: 600px;
  background: linear-gradient(#130f40, #30336b);
`;

const SignBar = styled.div`
  color: white;
  font-size: 2rem;
  &::after {
    content: '';
    width: 1px;
    border: 1px solid red;
  }
`;

const InputName = styled.div`
  position: relative;
  bottom: 0;
  font-size: 12px;
  width: 30px;
  color: lightgray;
  top: 9%;
  left: 18%;
`;

const InputForm = styled.input`
  background: rgba(255, 255, 255, 0.1);
  color: lightgray;
  position: relative;
  top: 20%;
  font-size: 1.5rem;
  width: 250px;
  height: 30px;
  border: 8px solid transparent;
  border-radius: 15px;
  margin-top: 20px;
  padding-left: 10px;
  &:focus {
    outline: none;
    box-shadow: 0 0 10px skyblue;
    transition: all ease 0.5s 0s;
    color: white;
  }
  &:hover ${InputName} {
    color: red;
  }
`;

const ButtonForm = styled.button`
  position: relative;
  top: 30%;
  font-size: 1.5rem;
  width: 250px;
  margin-top: 10px;
  border-radius: 15px;
  color: lightgray;
  border: 2px solid transparent;
  background: rgba(255, 255, 255, 0.1);
  outline: none;

  &:hover {
    box-shadow: 0 2px 20px -10px lightblue;
    color: white;
    transition: all 0.5s ease-in-out;
  }
`;

const Checkbox = styled.label`
  position: absolute;
  left: 15%;
  top: 50%;
  color: lightgray;
  &:hover {
    color: whitesmoke;
  }
`;

// const Test = styled.label``;
const LoginForm = () => {
  return (
    <Container>
      <LoginContainer>
        {/* <SignBar>SIGN IN</SignBar> */}
        <InputForm type='text' placeholder='아이디' /> <br />
        <InputName>Username</InputName>
        <InputForm type='password' placeholder='비밀번호' /> <br />
        <InputName>Password</InputName>
        <ButtonForm>로그인</ButtonForm>
        <Checkbox>
          <input type='checkbox' />
          Remember Me
        </Checkbox>
      </LoginContainer>
    </Container>
  );
};

export default LoginForm;
