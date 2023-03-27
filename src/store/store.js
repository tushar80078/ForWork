import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../slices/counterSlice'
import todoReducer from '../slices/todoReducer'
export const store = configureStore({
  reducer: {
    counterReducer:counterReducer,
    todoReducer:todoReducer
  },
})