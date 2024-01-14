import { configureStore } from '@reduxjs/toolkit';
import userReducer from './Sclice';
import authReducer from './Sclice';

const store = configureStore({
  reducer: {
    user: userReducer,
    auth: authReducer,
  },
});

export default store;
