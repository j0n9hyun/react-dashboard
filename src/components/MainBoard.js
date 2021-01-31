// // import axios from 'axios';
// import React from 'react';
// const MainBoard = () => {
//   // const res = await fetch('http://localhost:8888/users');
//   // const users = await res.json();
//   // console.log(users);
//   return <div>확인</div>;
// };

import React, { useEffect } from 'react';

const call = async () => {
  const res = await fetch('http://localhost:8888/users');
  const users = await res.json();
  if (users[0].id === 'j0n9hyun') {
    console.log('성공');
  } else {
    console.log('통과실패');
  }
};

const MainBoard = () => {
  useEffect(() => {
    call();
  });
  return <div>확인</div>;
};

export default MainBoard;
