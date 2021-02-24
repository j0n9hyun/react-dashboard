import { createSlice } from '@reduxjs/toolkit';

export const pieChartSlice = createSlice({
  name: 'piechart',
  initialState: {
    name: 'Hostname (Type 1)',
    value: 0,
    //  name: 'IPv4 (Type 2)', value: 0 },
    // { name: 'URL (Type 3) ', value: 0 },
    // { name: 'Group D', value: 0 },
  },
  reducers: {
    valueAmount: (state, action) => {
      state.value += action.payload;
      // console.log(action.payload);
      // console.log(state.name);
    },
  },
});

export const { valueAmount } = pieChartSlice.actions;
export default pieChartSlice.reducer;
