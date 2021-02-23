import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const getTitle = createAsyncThunk('get_title', async () => {
  const response = await axios.get('http://localhost:8888/reputation_title');
  return response.data;
});

export const getTitleSlice = createSlice({
  name: 'apiTitle',
  initialState: [],
  reducers: {},
  extraReducers: {
    [getTitle.fulfilled]: (state, { payload }) => [...payload],
  },
});

export default getTitleSlice.reducer;
