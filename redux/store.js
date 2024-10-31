// redux/store.js
import { createStore } from 'redux';
import { reducerToDo } from './reducers';

const store = createStore(reducerToDo);

export default store;
