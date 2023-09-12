import { cartSlice } from './cartSlice';
import { configureStore } from '@reduxjs/toolkit'
import { sliderSlice } from './sliderSlice'
import { catalogPriceSlider } from './catalogPriceSliderSlice'
import { filterSlice } from './filterSlice'
import { enableMapSet } from 'immer';

enableMapSet()

export const store = configureStore({
  reducer: {
    slider: sliderSlice.reducer,
    priceSlider: catalogPriceSlider.reducer,
    filter: filterSlice.reducer,
    cart: cartSlice.reducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch