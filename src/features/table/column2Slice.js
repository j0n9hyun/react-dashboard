import { createSlice } from '@reduxjs/toolkit';

export const column2Slice = createSlice({
  name: 'column2',
  initialState: ['아이디값', '타이틀', '설명'],
});

export default column2Slice.reducer;
