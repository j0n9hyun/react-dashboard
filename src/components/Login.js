import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import access from '../static/access.png';
import palette from '../static/palette';
import '../static/fontawesome.css';

const Container = styled.div`
  /* background-color: #2c3e50; */
  background-color: ${palette.gray[8]};
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
  /* background: linear-gradient(#130f40, #30336b); */
  background: ${palette.gray[9]};
`;

const InputName = styled.div`
  position: relative;
  bottom: 0;
  font-size: 12px;
  width: 30px;
  color: lightgray;
  /* top: 2%; */
  bottom: 6%;
  left: 17%;
`;

const InputForm = styled.input`
  background: rgba(255, 255, 255, 0.1);
  color: lightgray;
  position: relative;
  top: 5%;
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
  top: 15%;
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
  top: 55%;
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
  width: 130px;
  /* padding-left: 45px; */
`;

const Login = () => {
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
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
      await axios
        .get('http://localhost:8888/users')
        .then((user) => {
          const auth = user.data.find(
            (user) => user.id === formId && user.pw === formPw
          );

          if (auth) {
            window.location.href = '/dashboard';
          } else {
            setResult(3);
            return false;
          }
        })
        .catch((e) => {
          setLoading(true);
          setResult(3);
        });
    };
    apiCall();
  };

  return (
    <Container>
      <form style={{ paddingTop: '200px' }} onSubmit={signIn}>
        <LoginContainer>
          <Img src={access} />
          <InputForm type='text' id='id' placeholder='아이디' />
          <br />
          <InputName>Username</InputName>
          <InputForm type='password' id='pw' placeholder='비밀번호' />
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
          {result === 3 && (
            <WarningMsg>
              <div class='.fa-spinner'>{'\uf110'} \uf110로그인</div> 로그인 안됨
            </WarningMsg>
          )}
          {loading === true && console.log('ㄴ')}
        </LoginContainer>
      </form>
    </Container>
  );
};

export default Login;
