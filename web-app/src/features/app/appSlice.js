import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

import syncronizeData from './appService'

const initialState = {
    isLoading: false,
    isSuccess: false,
    isError: false,
    message: ""
}

export const syncronize = createAsyncThunk('/', async(_, thunkAPI) => {
    try {
        const token = thunkAPI.getState().auth.user.token
        const data = thunkAPI.getState().app
        return await syncronizeData(data, token)
    } catch (error) {
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()

        return thunkAPI.rejectWithValue(message)
    }
})

export const authSlice = createSlice({
    name: 'auth',
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
      .addCase(syncronize.pending, (state) => {
          state.isLoading = true
      })
      .addCase(syncronize.fulfilled, (state, action) => {
          state.isLoading = false
          state.isSuccess = true
          state.app = action.payload
      })
      .addCase(syncronize.rejected, (state, action) => {
          state.isLoading = false
          state.isError = true
          state.message = action.payload
      })

    }
  })
  
  // Action creators are generated for each case reducer function
  export const { reset } = authSlice.actions
  export default authSlice.reducer