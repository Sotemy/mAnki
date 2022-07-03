import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

import appService from './appService'

const initialState = {
    isLoading: false,
    isSuccess: false,
    isError: false,
    message: ""
}

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
      .addCase(login.pending, (state) => {
          state.isLoading = true
      })
      .addCase(login.fulfilled, (state, action) => {
          state.isLoading = false
          state.isSuccess = true
          state.app = action.payload
      })
      .addCase(login.rejected, (state, action) => {
          state.isLoading = false
          state.isError = true
          state.message = action.payload
      })

    }
  })
  
  // Action creators are generated for each case reducer function
  export const { reset } = authSlice.actions
  export default authSlice.reducer