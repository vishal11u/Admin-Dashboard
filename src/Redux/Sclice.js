import { createSlice } from '@reduxjs/toolkit';

export const Slice = createSlice({
    name: 'Cart',
    initialState: [],
    reducers: {
        add: (state, action) => {
            state.push(action.payload)
        }
    }
})

export const { add } = Slice.actions;
export default Slice.reducer;