import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

import appService from './appService'

const initialState = {
    isLoading: false,
    isSuccess: false,
    isError: false,
    message: ""
}

export const getData = createAsyncThunk('/', async (_, thunkAPI) => {
    try {
        const token = thunkAPI.getState().auth.user.token;
        return await appService.getData(token)
    } catch (error) {
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()

        return thunkAPI.rejectWithValue(message)
    }
})


export const appSlice = createSlice({
    name: 'app',
    initialState,
    reducers: {
        reset: (state) => {
            state.isLoading = false
            state.isSuccess = false
            state.isError = false
            state.message = ""
        }
    },
    extraReducers: builder => {
        builder
            .addCase(getData.pending, (state) => {
                state.isLoading = true
            })
            .addCase(getData.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true
                state.app = action.payload.data
            })
            .addCase(getData.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.message = action.payload
            })

    }
})

// Action creators are generated for each case reducer function
export const { reset } = appSlice.actions
export default appSlice.reducer