'use client'

import { combineReducers, configureStore } from '@reduxjs/toolkit'

//@ts-ignore
import { useDispatch, useSelector } from 'react-redux'

import { menuReducer } from '@/store/menuSlice'
import { dotsReducer } from './dotsSlice'

const rootReducer = combineReducers({ menu: menuReducer, dots: dotsReducer })

export const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware => getDefaultMiddleware({ serializableCheck: false })
})

export const useAppDispatch = () => useDispatch()
export const useAppSelector = useSelector
