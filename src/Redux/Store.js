import { configureStore } from '@reduxjs/toolkit';
import UserSlice from './Sclice';

const Store = configureStore({
    reducer: {
        user: UserSlice,
    }
})

export default Store;