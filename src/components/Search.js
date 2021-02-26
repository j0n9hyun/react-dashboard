import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import palette from '../static/palette';
import '../static/fontAwesome/css/all.css';
import axios from 'axios';

const SearchBar = styled.input`
  /* max-width: 300px; */
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

const API = 'http://localhost:8888/data';

const Search = () => {
  const [input, setInput] = useState('');
  const [result, setResult] = useState([]);
  const [inputData, setInputData] = useState([]);

  useEffect(() => {
    const conn = async () => {
      await axios
        .get(API)
        .then((res) => setInput(res.data.map((v) => v.indicator)));
    };
    conn();
  }, []);

  const onChange = (e) => {
    setInputData(input);
    // const f = input.filter((v) => {
    //   return v.toLowerCase().includes(input);
    // });
    // setResult(input.filter((v) => v ===));
  };

  return (
    <div>
      <i className='fas fa-search' />
      <SearchBar placeholder='검색' onChange={onChange} />
      {/* <div style={{ color: 'white' }}> {input} </div> */}
      <div style={{ color: 'yellow' }}> {result} </div>
    </div>
  );
};

export default Search;
