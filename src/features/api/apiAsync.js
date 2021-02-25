import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const getList = createAsyncThunk('get_list', async () => {
  // const response = await axios.get('http://localhost:8888/data');
  const response = await axios.get('http://localhost:8000/api/v1');
  return response.data;
});

export const getSlice = createSlice({
  name: 'api',
  initialState: [],
  reducers: {},
  extraReducers: {
    [getList.fulfilled]: (state, { payload }) => [...payload],
  },
});

export default getSlice.reducer;
