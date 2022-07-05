import { createSlice, createAsyncThunk  } from '@reduxjs/toolkit'
import authController from './authController'

export const register = createAsyncThunk('auth/register', async (user, thunkAPI) => {
    try {
        return await authController.register(user)
    } catch (error) {
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()

        return thunkAPI.rejectWithValue(message)
    }
})

export const login = createAsyncThunk('auth/login', async (user, thunkAPI) => {
    try {
        return await authController.login(user)
    } catch (error) {
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()

        return thunkAPI.rejectWithValue(message)
    }
})

export const logout = createAsyncThunk('auth/logout', async () => {
    return await authController.logout()
})

const user = JSON.parse(localStorage.getItem('user')) //check for user in local storage

export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        user: user ? user : null, // is user in localStorage or not
        isLoaded: false,
        isSuccess: false,
        isError: false,
        message:''
    },
    reducers:{
        reset: (state) => {
            state.isLoading = false
            state.isSuccess = false
            state.isError = false
            state.message = ""
        }
    },
    extraReducers: builder => {
        builder
        .addCase(login.pending, (state) => {
            state.isLoading = true
        })
        .addCase(login.fulfilled, (state, action) => {
            state.isLoading = false
            state.isSuccess = true
            state.user = action.payload
        })
        .addCase(login.rejected, (state, action) => {
            state.isLoading = false
            state.isError = true
            state.message = action.payload
        })
        .addCase(register.pending, (state) => {
            state.isLoading = true
        })
        .addCase(register.fulfilled, (state, action) => {
            state.isLoading = false
            state.isSuccess = true
            state.user = action.payload
        })
        .addCase(register.rejected, (state, action) => {
            state.isLoading = false
            state.isError = true
            state.message = action.payload
        })
        .addCase(logout.fulfilled, (state) => {
            state.user=null
        })
    }

})

export const { reset } = authSlice.actions

export default authSlice.reducer