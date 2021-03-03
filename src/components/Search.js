import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import palette from '../static/palette';
import '../static/fontAwesome/css/all.css';

const SearchBar = styled.input`
  /* max-width: 500px; */
  max-width: 100%;
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

// const API = 'http://localhost:8888/data';

const Search = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [result, setResult] = useState([]);
  const data = useSelector((state) => state.api);
  const dd = data.map((v) => v.indicator);

  const onChange = (e) => {
    setSearchTerm(e.target.value);
    // const love = data.map((v) => v.indicator);
    // setResult(data);
    // const wordFilter = sample.filter((v) => {
    //   return v.toLowerCase().includes(sample);
    // });

    // console.log(wordFilter);

    // const f = input.filter((v) => {
    //   return v.toLowerCase().includes(input);
    // });
    // setResult(input.filter((v) => v ===));
  };

  useEffect(() => {
    const results = dd.filter((v) => v.toLowerCase().includes(searchTerm));
    setResult(results);
  }, [searchTerm]);

  return (
    <div>
      <i className='fas fa-search' />
      <SearchBar placeholder='검색' onChange={onChange} value={searchTerm} />
      {/* <div style={{ color: 'white' }}> {result}</div> */}
      {/* <div style={{ color: 'yellow' }}> {searchTerm} </div> */}
    </div>
  );
};

export default Search;
