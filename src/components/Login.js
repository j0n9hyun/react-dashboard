import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
// import axios from 'axios';
import { Redirect } from 'react-router-dom';
// import DashBoard from './DashBoard';
import axios from 'axios';

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

const WarningMsg = styled.div`
  margin-top: 200px;
  text-align: center;
  color: pink;
`;

// async function loginUser(credentials) {
//   return fetch('http://localhost:8888/users', {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify(credentials),
//   }).then((data) => data.json());
// }

const Login = ({ history }) => {
  // let history = useHistory();
  // console.log(setToken);
  const [result, setResult] = useState(null);
  // const [account, setAccount] = useState({ id: '', pw: '' });
  // const [login, setLogin] = useState(false);
  // const [id, setId] = useState(null);
  // const [pw, setPw] = useState(null);

  // const Test = () => {
  //   history.push('/');
  // login === true ? <DashBoard /> : console.log('로그인 실패');
  // const onChangeAccount = (e) => {
  //   setAccount({
  //     ...account,
  //     [e.target.id]: e.target.value,
  //   });
  //   console.log(account);
  // };
  // const history = useHistory();
  /*
  0: 암것도 없을 때
  1: 아이디 조건이 맞지 않을 때
  2: 패스워드 조건이 맞지 않을 때
  3.
  */

  useEffect(() => {
    const timeOut = setTimeout(() => {
      setResult(null);
    }, 3000);
    return () => clearTimeout(timeOut);
  });

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

    if (
      /[A-Z]/.test(formPw)
      // !/[0-9]+/.test(formPw)
      // !/[~!@$%<>^&*\-=+_]+/.test(formPw)
    ) {
      setResult(2);
      return false;
    }
    console.log('로그인 검증 통과');
    const idk = axios.get('http://localhost:8888/users');
    console.log(idk);

    // <Redirect to='/dashboard' />;

    // .then(({ data }) => {
    //   var { status } = data;
    //   if (status === 200) {
    //     localStorage.getItem('id');
    //     // return <Redirect to='dashboard' />;
    //     window.location.href = '/dashboard';
    //     console.log(`logged as ${data.id}`);
    //   } else {
    //     console.log('무언가 에러남');
    //     // console.log(`error ${status}`);
    //   }
    // });
    // setLogin(true);
  };

  // const fake = axios.get('http://localhost:8888/users');

  // console.log(fake);

  // return true;
  // axios.post('~~~' + '/login', { asd, asd }) .then ({ data }) => {const { asd, asd } = data if(data)}

  // const onChangeId = (e) => {
  //   setId(e.target.value);
  //   console.log(e.target.value);
  // };
  // const onChangePw = (e) => {
  //   setPw(e.target.value);
  //   console.log(e.target.value);
  // };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   const token = await loginUser({
  //     id,
  //     pw,
  //   });
  //   setToken(token);

  // };
  return (
    <Container>
      <form
        action='DashBoard'
        style={{ paddingTop: '230px' }}
        onSubmit={signIn}
      >
        <LoginContainer>
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
          <ButtonForm
            type='submit'
            // onClick={() => (window.location.href = '/dashboard')}
          >
            버튼
          </ButtonForm>
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
        </LoginContainer>
      </form>
    </Container>
  );
};

export default Login;
