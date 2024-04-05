import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const STATUSES = Object.freeze({
    IDLE: 'idle',
    ERROR: 'error',
    LOADING: 'loading'
})

export const fetchCategory = createAsyncThunk('product/fetch', async (cat) => {
    try {
        console.log(cat);
        const res = await fetch(`https://reduxstorebackendd.onrender.com/api/v1/user/products/${cat}`);
        const data = await res.json();
        console.log(data)
        return data;
    } catch (error) {
        throw error;
    }
});

const userProductSlice = createSlice({
    name: 'getCategory',
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
            .addCase(fetchCategory.pending, (state, action) => {
                state.status = STATUSES.LOADING
            })
            .addCase(fetchCategory.fulfilled, (state, action) => {
                state.data = action.payload;
                state.status = STATUSES.IDLE;
            })
            .addCase(fetchCategory.rejected, (state, action) => {
                state.status = STATUSES.ERROR;
            })
    }
});

export const { setProduct, setStatus } = userProductSlice.actions;
export default userProductSlice.reducer;