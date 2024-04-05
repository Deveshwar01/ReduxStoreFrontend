import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const STATUSES = Object.freeze({
    IDLE: 'idle',
    ERROR: 'error',
    LOADING: 'loading'
})


export const addProduct = createAsyncThunk('admin/addProduct', async ({ id, productImg, title, price, category }) => {
    try {
        // const {id,name,description,price,category}=data;
        const response = await fetch('https://reduxstorebackendd.onrender.com/api/v1/admin/add', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ Id: id, img: productImg, Title: title, price, category })

        })
        if (!response.ok) {
            throw new Error('Failed to add Product')
        }
        const data = await response.json();
        return data;
    } catch (error) {
        throw new Error('Failed to add Product')
    }
});



const userSlice = createSlice({
    name: 'addProduct',
    initialState: {
        data: null,
        status: STATUSES.IDLE,
        error: null
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(addProduct.pending, (state) => {
                state.status = STATUSES.LOADING
            })
            .addCase(addProduct.fulfilled, (state) => {
                state.status = STATUSES.IDLE
            })
            .addCase(addProduct.rejected, (state) => {
                state.status = STATUSES.ERROR
            })

    }
})

export default userSlice.reducer;