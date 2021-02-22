import { createSlice } from '@reduxjs/toolkit';

export const columnSlice = createSlice({
  name: 'column',
  initialState: {
    value: ['번호', '타입', '인디케이터', '등록일'],
  },
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
  },
});
