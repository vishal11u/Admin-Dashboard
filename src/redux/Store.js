import { combineReducers } from 'redux';
import nameReducer from './nameSlice'; 

const Store = combineReducers({
    name: nameReducer,
});

export default Store;
