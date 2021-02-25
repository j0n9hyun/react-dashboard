import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const getTitle = createAsyncThunk('get_title', async () => {
  const response = await axios.get('http://localhost:8000/api/v2');
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
