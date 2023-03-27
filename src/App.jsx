import { useState } from 'react'
import { changeInput, incrementMe } from './slices/counterSlice';
import { decrementMe } from './slices/counterSlice';
import { incrementBySValue,incrementByNum} from './slices/counterSlice';
import './App.css'

import { useDispatch,useSelector } from 'react-redux'


function App() {
  const [state,setState]=useState(0);
  const dispatch=useDispatch();
  const globalState=useSelector(state=>state.counterReducer);
  //It is a global hook

  
  
  const decrementIt=()=>{
      dispatch(decrementMe());
  }

  const incrementIt=()=>{
    dispatch(incrementMe());
  }

  const incrementByValue=()=>{
    dispatch(incrementBySValue());
  }

  const incrementByInputNum=()=>{
      dispatch(incrementByNum((Number)(state)));
  }

  const handleChange=(event)=>{
   // dispatch(changeInput(event.target.value))
   setState(event.target.value);
  }

  return (
    <div className="App">
     
     <h1>Count - {globalState.value}</h1>
     <button onClick={incrementIt}>Increment</button>
     <button onClick={decrementIt}>Decrement</button>
     <button onClick={incrementByValue}>IncrementByValue</button>
     <button onClick={incrementByInputNum}>incrementByNum</button>
     <input type="text" onChange={handleChange} />
    </div>
  )
}

export default App
