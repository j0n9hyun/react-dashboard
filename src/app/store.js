import { configureStore } from '@reduxjs/toolkit';
import love from '../features/counter/counterSlice';
import columnReducer from '../features/table/columnSlice';
import column2Reducer from '../features/table/column2Slice';
import apiReducer from '../features/api/apiAsync';
import getTitleReducer from '../features/api/apiTitleAsync';
import pieChartReducer from '../features/table/pieChartSlice';

export default configureStore({
  reducer: {
    counter: love,
    column: columnReducer,
    column2: column2Reducer,
    api: apiReducer,
    apiTitle: getTitleReducer,
    pieChart: pieChartReducer,
  },
});
