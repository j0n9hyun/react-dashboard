import { createSlice } from '@reduxjs/toolkit';

export const columnSlice = createSlice({
  name: 'column',
  initialState: ['번호', '타입', '인디케이터', '등록일'],
  reducers: {},
});

// export const { test } = columnSlice.actions;
export default columnSlice.reducer;
