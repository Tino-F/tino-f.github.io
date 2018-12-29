import { createStore } from 'redux';
import allReducers from './reducers/index';

const store = createStore(
  allReducers,
  {
    menu: false
  }
);

export default store;
