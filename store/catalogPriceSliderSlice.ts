import { createSlice,PayloadAction } from '@reduxjs/toolkit'


interface SliderState {
  leftDotState:number,
  rightDotState:number,
  inputMaxValue:number,
  inputMinValue:number,
  minPrice:number,
  maxPrice:number,
}


const initialState: SliderState = {
    leftDotState:0,
    rightDotState:120,
    inputMinValue:0,
    inputMaxValue:120,
    minPrice:0,
    maxPrice:120,
}

export const catalogPriceSlider = createSlice({
  name: 'priceSlider',
  initialState,
  reducers: {
    setMinUserPrice: (state, action:PayloadAction<number>) => {
      if (action.payload+1 < state.rightDotState){
        state.leftDotState = action.payload
        state.inputMinValue = action.payload
      }else{
        state.leftDotState = state.rightDotState-1
        state.inputMinValue = state.rightDotState-1
      }
    },
    setMaxUserPrice: (state, action:PayloadAction<number>) => {
        if (action.payload > state.leftDotState +1){
            state.rightDotState = action.payload
            state.inputMaxValue = action.payload
        }else{
          state.rightDotState = state.leftDotState+1
          state.inputMaxValue = state.leftDotState+1
        }
    },
    setUserInputMinPrice: (state, action:PayloadAction<number>) => {
      state.inputMinValue = action.payload
    },
    setUserInputMaxPrice: (state, action:PayloadAction<number>) => {
      state.inputMaxValue = action.payload
    },
  },
})

export const { setMinUserPrice, setMaxUserPrice,setUserInputMinPrice,setUserInputMaxPrice } = catalogPriceSlider.actions

export default catalogPriceSlider.reducer