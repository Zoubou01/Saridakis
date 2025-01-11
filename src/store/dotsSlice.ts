import { createSlice } from '@reduxjs/toolkit'

import type { PayloadAction } from '@reduxjs/toolkit'

export interface IAuthState {
  dotsState: string
}

const initialState: IAuthState = {
  dotsState: '3'
}

export const dotsSlice = createSlice({
  name: 'dots',
  initialState,
  reducers: {
    setDotsState: (state, action: PayloadAction<string>) => {
      state.dotsState = action.payload
    }
  }
})

export const { setDotsState } = dotsSlice.actions
export const dotsReducer = dotsSlice.reducer
