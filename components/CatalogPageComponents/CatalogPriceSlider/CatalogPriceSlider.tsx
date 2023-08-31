'use client'
import { useAppDispatch, useAppSelector } from '@/hooks/hooks'
import styles from './CatalogPriceSlider.module.css'
import { setMaxUserPrice,setMinUserPrice,setUserInputMaxPrice,setUserInputMinPrice } from '@/store/filterSlice'
import { oswaldo } from '@/fonts/fonts'
export default function CatalogPriceSlider() {
   const minUserPrice = useAppSelector(state => state.filter.leftDotState)
   const maxUserPrice = useAppSelector(state => state.filter.rightDotState)

   const minPrice = useAppSelector(state => state.filter.minPrice)
   const maxPrice = useAppSelector(state => state.filter.maxPrice)

   const inputMinValue = useAppSelector(state => state.filter.inputMinValue)
   const inputMaxValue = useAppSelector(state => state.filter.inputMaxValue)
   
   const dispatch = useAppDispatch()
   

  return (
    <>
      <div className={styles.container}>
        <label className={styles.slider}><input type="range" value={minUserPrice} onChange={(e) => dispatch(setMinUserPrice(e.target.valueAsNumber))} min={minPrice} max={maxPrice}/></label>
        <label className={styles.slider}><input type="range" value={maxUserPrice} onChange={(e) => dispatch(setMaxUserPrice(e.target.valueAsNumber))} min={minPrice} max={maxPrice}/></label>
      </div>
      <div className={styles.priceSliderContainer}>
        <span className={styles.priceSlider + ' ' + oswaldo.className}>
            цена: 
            <input type = 'number' placeholder={`${minPrice}`} value={inputMinValue} onChange={(e) => dispatch(setUserInputMinPrice(e.target.valueAsNumber))}  onBlur = {(e) => {dispatch(setMinUserPrice(e.target.valueAsNumber))}}/>
            ₽ - 
            <input type = 'number' placeholder={`${maxPrice}`} value={inputMaxValue} onChange = {(e) => dispatch(setUserInputMaxPrice(e.target.valueAsNumber))} onBlur = {(e) => {dispatch(setMaxUserPrice(e.target.valueAsNumber))}}/>
            ₽
        </span>
      </div>
    </>
  )
}
