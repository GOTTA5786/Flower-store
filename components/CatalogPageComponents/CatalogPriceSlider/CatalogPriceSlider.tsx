'use client'
import { useAppDispatch, useAppSelector } from '@/hooks/hooks'
import styles from './CatalogPriceSlider.module.css'
import { setMaxUserPrice,setMinUserPrice } from '@/store/catalogPriceSliderSlice'
import { oswaldo } from '@/fonts/fonts'

export default function CatalogPriceSlider() {
   const minUserPrice = useAppSelector(state => state.priceSlider.leftDotState)
   const maxUserPrice = useAppSelector(state => state.priceSlider.rightDotState)
   const minPrice = useAppSelector(state => state.priceSlider.minPrice)
   const maxPrice = useAppSelector(state => state.priceSlider.maxPrice)
   
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
            <input type = 'number' placeholder={`${minPrice}`} value={minUserPrice} onChange = {(e) => {dispatch(setMinUserPrice(e.target.valueAsNumber))}}/>
            $ - 
            <input type = 'number' placeholder={`${maxPrice}`} value={maxUserPrice} onChange = {(e) => dispatch(setMaxUserPrice(e.target.valueAsNumber))}/>
            $
        </span>
      </div>
    </>
  )
}
