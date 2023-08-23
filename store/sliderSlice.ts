import { createSlice,PayloadAction } from '@reduxjs/toolkit'


interface SliderState {
  value: number,
  count:number
  dots: number
}


const initialState: SliderState = {
  value: 0,
  count: 0,
  dots: 0,
}

export const sliderSlice = createSlice({
  name: 'position',
  initialState,
  reducers: {
    toRight: (state) => {
      if (state.dots > state.count){
        state.value -= 1140
        state.count = state.count + 1
      }
    },
    toLeft: (state) => {
      if (state.value !< 0){
        state.value += 1140
        state.count = state.count - 1
      }
    },
    setDots: (state, action:PayloadAction<number>) => {
      state.dots = action.payload
    },
  },
})

export const { toRight, toLeft, setDots } = sliderSlice.actions

export default sliderSlice.reducer