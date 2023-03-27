import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: 0,
  name:"John"
}

export const todoReducer = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    incrementMe:(state)=>{
        state.value=state.value+1;
    },
    decrementMe:(state)=>{
      state.value=state.value-1;
  }
    ,
  },
})


export default todoReducer.reducer