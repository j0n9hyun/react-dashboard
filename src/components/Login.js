import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';

const Container = styled.div`
  background-color: #2c3e50;
  /* height: 1100px; */
  height: 100%;
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

// const SignBar = styled.div`
//   color: white;
//   font-size: 2rem;
//   &::after {
//     content: '';
//     width: 1px;
//     border: 1px solid red;
//   }
// `;

const InputName = styled.div`
  position: relative;
  bottom: 0;
  font-size: 12px;
  width: 30px;
  color: lightgray;
  /* top: 2%; */
  bottom: 1%;
  left: 18%;
`;

const InputForm = styled.input`
  background: rgba(255, 255, 255, 0.1);
  color: lightgray;
  position: relative;
  top: 10%;
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
  top: 20%;
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
  top: 60%;
  color: lightgray;
  &:hover {
    color: whitesmoke;
  }
`;

const WarningMsg = styled.div`
  margin-top: 200px;
  text-align: center;
  color: pink;
`;

const Img = styled.img`
  /* height: 80px; */
  width: 125px;
  /* padding-left: 45px; */
`;

const Login = () => {
  const [result, setResult] = useState(null);
  useEffect(() => {
    const timeOut = setTimeout(() => {
      setResult(null);
    }, 3000);

    return () => clearTimeout(timeOut);
  }, []);

  const signIn = (e) => {
    e.preventDefault();
    const formId = document.getElementById('id').value.trim();
    const formPw = document.getElementById('pw').value.trim();

    if (formId.length === 0 || formPw.length === 0) {
      setResult(0);
      return false;
    }
    if (
      /[A-Zㄱ-ㅎ가-힣]/.test(formId) ||
      /^[0-9]/.test(formId) ||
      /[~!@$%<>^&*\-=+_]/.test(formId)
    ) {
      setResult(1);
      return false;
    }

    // if (
    //   /[A-Z]/.test(formPw) ||
    //   !/[0-9]+/.test(formPw) ||
    //   !/[~!@$%<>^&*\-=+_]+/.test(formPw)
    // ) {
    //   setResult(2);
    //   return false;
    // }

    const apiCall = async () => {
      const res = await axios.get('http://localhost:8888/users');
      const user = await res.data;
      console.log(user);
      const auth = user.find(
        (user) => user.id === formId && user.pw === formPw
      );

      if (auth) {
        console.log('success');
        window.location.href = '/dashboard';
      } else {
        setResult(3);
        return false;
      }
    };
    apiCall();
  };

  return (
    <Container>
      <form style={{ paddingTop: '230px' }} onSubmit={signIn}>
        <LoginContainer>
          <Img src='https://www.flaticon.com/svg/vstatic/svg/3452/3452468.svg?token=exp=1612167196~hmac=786c903260713a964971888ac0c54c84' />
          {/* <SignBar>SIGN IN</SignBar> */}
          <InputForm
            type='text'
            id='id'
            placeholder='아이디'
            // onChange={onChangeId}
          />
          <br />
          <InputName>Username</InputName>
          <InputForm
            type='password'
            id='pw'
            placeholder='비밀번호'
            // onChange={onChangePw}
          />
          <br />
          <InputName>Password</InputName>
          <ButtonForm type='submit'>버튼</ButtonForm>
          <Checkbox>
            <input type='checkbox' />
            Remember Me
          </Checkbox>
          {result === 0 && (
            <WarningMsg>아이디 또는 패스워드가 입력되지 않았습니다.</WarningMsg>
          )}
          {result === 1 && (
            <WarningMsg>
              아이디 조건이 부합하지 않습니다. <br /> (아이디 4~32,
              특수문자&한글 불가, 숫자로 시작 불가)
            </WarningMsg>
          )}
          {result === 2 && (
            <WarningMsg>
              비밀번호는 4자 이상, 특문, 영어 대문자, 숫자가 각각 최소 1개씩
              포함되어야 합니다.
            </WarningMsg>
          )}
          {result === 3 && <WarningMsg>로그인 안됨</WarningMsg>}
        </LoginContainer>
      </form>
    </Container>
  );
};

export default Login;
