import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {                                    // for making an api call, initial state can't be empty coz api call not always returns the data, there can be errors/exceptions as well
    data: [],
    loading: false,
    error: null,
}

const productSlice = createSlice({
    name: 'products',
    initialState: initialState,
    reducers: {
        // getProducts(state, action) {
        //     state.data = action.payload;
        // }
    },
    // In RTK, reducers are use to handle sync operations, for the async tasks we've extraReducers
    extraReducers: (builder) => {
        builder
            .addCase(fetchProducts.fulfilled, (state, action) => {
                state.data = action.payload;
                state.loading = false;
            })
            .addCase(fetchProducts.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchProducts.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            });
    }
})

export const { getProducts } = productSlice.actions;      // this will give the action functions
export default productSlice.reducer;                     // this will give the state

//Handling async operations with the help of createAsyncThunk
export const fetchProducts = createAsyncThunk('products/get', async () => {
    const data = await fetch('https://fakestoreapi.com/products')
    const result = await data.json();
    return result;
})

//This thunk creator will dispatch an action for the calling function
// export function fetchProducts() {
//     return async function getProductsThunk(dispatch, getState) {
//         const data = await fetch('https://fakestoreapi.com/products')
//         const result = await data.json();
//         dispatch(getProducts(result));
//     }
// }