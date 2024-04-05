import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const STATUSES = Object.freeze({
    IDLE: 'idle',
    ERROR: 'error',
    LOADING: 'loading'
})

export const fetchProducts = createAsyncThunk('product/fetch', async () => {
    try {
        const res = await fetch("https://reduxstorebackendd.onrender.com/api/v1/user/products");
        const data = await res.json();
        return data.Products;
    } catch (error) {
        throw error;
    }
});

const userProductSlice = createSlice({
    name: 'userProducts',
    initialState: {
        data: [], // Ensure data is initialized to an empty array
        status: '',
    },
    reducers: {
        setProduct(state, action) {
            state.data = action.payload
        },
        setStatus(state, action) {
            state.status = action.payload
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchProducts.pending, (state, action) => {
                state.status = STATUSES.LOADING
            })
            .addCase(fetchProducts.fulfilled, (state, action) => {
                state.data = action.payload;
                state.status = STATUSES.IDLE;
            })
            .addCase(fetchProducts.rejected, (state, action) => {
                state.status = STATUSES.ERROR;
            })
    }
});

export const { setProduct, setStatus } = userProductSlice.actions;
export default userProductSlice.reducer;