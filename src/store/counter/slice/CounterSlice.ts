import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { count } from 'console';

interface CounterState {
    count :number
}

const initialState:CounterState = {
    count: 5
}

const CounterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    addOne (state){
       
        state.count++
    },
    subOne (state){
        if(state.count == 0) return;
        state.count--
    },
    resetCount (state, action:PayloadAction<number>){

        if(action.payload < 0) action.payload = 0;
        state.count = action.payload
    }
  }
});

export const {addOne,subOne,resetCount} = CounterSlice.actions

export default CounterSlice.reducer