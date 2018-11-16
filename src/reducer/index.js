
import base from './base-reducer';
import {createStore,combineReducers} from 'redux';
const allReducers = {
    base: base,
};
const rootReducer = combineReducers(allReducers);
let ReduxStore = createStore(rootReducer);

export default ReduxStore;