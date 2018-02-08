import { createStore } from 'redux';
import rootReducers from './Reducers';

let store = createStore(rootReducers);
console.log(store.getState())

export default store;