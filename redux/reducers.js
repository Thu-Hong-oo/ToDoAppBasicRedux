// redux/reducers.js
import { ADD_TODO, DELETE_TODO } from './actions';

const initialState = {
  list: [
    { id: '1', task: 'Learn HTML' },
    { id: '2', task: 'Java Basics' },
    { id: '3', task: 'Learn CSS' },
    { id: '4', task: 'Learn CSS' },
    { id: '5', task: 'Learn CSS' },
  ],
};

export const reducerToDo = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        list: [...state.list, action.payload], // thêm công việc mới
      };
    case DELETE_TODO:
      return {
        ...state,
        list: state.list.filter((item) => item.id !== action.payload),
      };
    default:
      return state;
  }
};
