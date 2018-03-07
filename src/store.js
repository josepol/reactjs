import { createStore } from 'redux';
import rootReducers from './Reducers';

let store = createStore(rootReducers);

export default store;