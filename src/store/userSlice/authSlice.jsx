import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const STATUSES = Object.freeze({
    IDLE: 'idle',
    ERROR: 'error',
    LOADING: 'loading'
});

export const Register = createAsyncThunk('user/register', async (userData) => {
    try {
        const response = await fetch('https://reduxstorebackendd.onrender.com/api/user/v1/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(userData),
        });
        if (!response.ok) {
            throw new Error('Failed to sign up user');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        throw new Error('Failed to sign up user');
    }
});

export const Login = createAsyncThunk('user/login', async (userData) => {
    try {
        const response = await fetch('http://localhost:4000/api/v1/user/Login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(userData),
        });
        if (!response.ok) {
            throw new Error('Failed to log in user');
        }
        const data = await response.json();
        // localStorage.setItem('token', data.token);
        return data;
    } catch (error) {
        throw new Error('Failed to log in user');
    }
});

const userSlice = createSlice({
    name: 'user',
    initialState: {
        data: null,
        status: STATUSES.IDLE,
        error: null
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(Register.pending, (state) => {
                state.status = STATUSES.LOADING;
            })
            .addCase(Register.fulfilled, (state, action) => {
                state.data = action.payload;
                state.status = STATUSES.IDLE;
            })
            .addCase(Register.rejected, (state, action) => {
                state.status = STATUSES.ERROR;
            })
            .addCase(Login.pending, (state) => {
                state.status = STATUSES.LOADING;
            })
            .addCase(Login.fulfilled, (state, action) => {
                state.data = action.payload;
                state.status = STATUSES.IDLE;
            })
            .addCase(Login.rejected, (state, action) => {
                state.status = STATUSES.ERROR;
            });
    }
});

export default userSlice.reducer;