import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const STATUSES = Object.freeze({
    IDLE: 'idle',
    ERROR: 'error',
    LOADING: 'loading'
});

export const fetchPro = createAsyncThunk('pro/fetch', async () => {
    try {
        const res = await fetch("https://reduxstorebackendd.onrender.com/api/v1/admin/allproduct");
        const data = await res.json();
        return data.Products;
    } catch (error) {
        throw error;
    }
});

export const deletePro = createAsyncThunk('pro/delete', async (Id) => {
    try {
        await fetch(`https://reduxstorebackendd.onrender.com/api/v1/admin/delete/${Id}`, {
            method: 'DELETE'
        });
        return Id;
    } catch (error) {
        throw error;
    }
});

const proSlice = createSlice({
    name: 'pro',
    initialState: {
        data: [],
        status: '',
    },
    reducers: {
        setPro(state, action) {
            state.data = action.payload
        },
        setStatus(state, action) {
            state.status = action.payload
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchPro.pending, (state, action) => {
                state.status = STATUSES.LOADING
            })
            .addCase(fetchPro.fulfilled, (state, action) => {
                state.data = action.payload;
                state.status = STATUSES.IDLE;
            })
            .addCase(fetchPro.rejected, (state, action) => {
                state.status = STATUSES.ERROR;
            })
            .addCase(deletePro.pending, (state, action) => {
                state.status = STATUSES.LOADING;
            })
            .addCase(deletePro.fulfilled, (state, action) => {
                state.data = state.data.filter(product => product.id !== action.payload);
                state.status = STATUSES.IDLE;
            })
            .addCase(deletePro.rejected, (state, action) => {
                state.status = STATUSES.ERROR;
            });
    }
});

export const { setPro, setStatus } = proSlice.actions;
export default proSlice.reducer;
