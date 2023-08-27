import { createSlice,PayloadAction } from '@reduxjs/toolkit'


interface SliderState {
  leftDotState:number,
  rightDotState:number,
  minPrice:number,
  maxPrice:number,
}


const initialState: SliderState = {
    leftDotState:0,
    rightDotState:120,
    minPrice:0,
    maxPrice:120,
}

export const catalogPriceSlider = createSlice({
  name: 'priceSlider',
  initialState,
  reducers: {
    setMinUserPrice: (state, action:PayloadAction<number>) => {
      if (action.payload+10 < state.rightDotState){
        state.leftDotState = action.payload
      }
    },
    setMaxUserPrice: (state, action:PayloadAction<number>) => {
        if (action.payload > state.leftDotState +10){
            state.rightDotState = action.payload
          }
    },
  },
})

export const { setMinUserPrice, setMaxUserPrice } = catalogPriceSlider.actions

export default catalogPriceSlider.reducer