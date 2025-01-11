import { createSlice } from '@reduxjs/toolkit'

import type { PayloadAction } from '@reduxjs/toolkit'

export interface IAuthState {
  menuState: string
}

const initialState: IAuthState = {
  menuState: 'about'
}

export const menuSlice = createSlice({
  name: 'menu',
  initialState,
  reducers: {
    setMenuState: (state, action: PayloadAction<string>) => {
      state.menuState = action.payload
    }
  }
})

export const { setMenuState } = menuSlice.actions
export const menuReducer = menuSlice.reducer
