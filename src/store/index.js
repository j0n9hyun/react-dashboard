import {
  combineReducers,
  configureStore,
  createAction,
  createReducer,
} from '@reduxjs/toolkit';

export const todos = [
  {
    id: 1,
    dates: '2021 - 12 - 15',
    content: 'content1',
    clicked: false,
    done: false,
  },
  {
    id: 2,
    dates: '2021 - 1 - 15',
    content: 'content2',
    clicked: false,
    done: false,
  },
  {
    id: 3,
    dates: '2021 - 1 - 14',
    content: 'content3',
    clicked: false,
    done: false,
  },
  {
    id: 4,
    dates: '2020 - 11 - 15',
    content: 'content4',
    clicked: false,
    done: false,
  },
];

export const createList = createAction('CREATE_LIST');
export const deleteList = createAction('DELETE_LIST');
export const toggleDeleteList = createAction('TOGGLE_DELETE');
export const toggleDoneList = createAction('TOGGLE_DONE');

const todoReducer = createReducer(todos, {
  [createList]: (state, { payload }) => {},
  [deleteList]: (state, { payload }) => {},
  [toggleDeleteList]: (state, { payload }) => {},
  [toggleDoneList]: (state, { payload }) => {},
});

const reducer = combineReducers({ todoReducer });

export const store = configureStore({ reducer });
