import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: 0,
  name:"John",
  input:0
}

export const counterSlice = createSlice({
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
    incrementBySValue:(state)=>{
      state.value=state.value+10;
    }
    ,
    incrementByNum:(state, action)=>{
      //console.log(action)
      state.value=state.value+action.payload;
     //state.value=state.value+Number(state.input);
    },

    changeInput:(state,action)=>{
     state.input=action.payload;
    }
  },
})

// Action creators are generated for each case reducer function
export const { incrementMe,decrementMe,incrementBySValue,incrementByNum ,changeInput} = counterSlice.actions

export default counterSlice.reducer