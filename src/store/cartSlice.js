import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const cartSlice = createSlice({
    name: 'cart',
    initialState: initialState,
    reducers: {
        add(state, action) {
            state.push(action.payload);      //we can change it mutably bcoz behind the scene immer.js is taking care of mutable behaviour
        },

        remove(state, action) {
            return state.filter(item => item.id !== action.payload)
        }
    }
})

export const { add, remove } = cartSlice.actions;      // this will give the action functions
export default cartSlice.reducer;              // this will give the state