import { combineReducers } from 'redux';
import nameReducer from './nameSlice'; 

const rootReducer = combineReducers({
    name: nameReducer,
});

export default rootReducer;
