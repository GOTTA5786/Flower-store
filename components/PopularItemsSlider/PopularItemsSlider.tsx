'use client'
import styles from './PopularItemsSlider.module.css'
import SliderContent from '../SliderContent/SliderContent'

import { FaAnglesLeft,FaAnglesRight } from "react-icons/fa6";
import SliderDots from '../SliderDots/SliderDots'
import { useAppDispatch } from '@/hooks/hooks'
import { sliderSlice } from '@/store/sliderSlice'
import { IFlower } from '../CatalogPageComponents/FlowerItem/FlowerItem';

export interface IFlowerArray {
  flowers:Array<IFlower>
}

export default function PopularItemsSlider(flowers:IFlowerArray) {
  const {toRight, toLeft} = sliderSlice.actions
  const dispatch = useAppDispatch()

  return (
    <div className={styles.container}>
      <FaAnglesLeft className={styles.arrow} onClick={() => dispatch(toLeft())}></FaAnglesLeft>
      <SliderContent flowers={flowers.flowers}></SliderContent>
      <SliderDots></SliderDots>
      <FaAnglesRight className={styles.arrow} onClick={() => dispatch(toRight())}></FaAnglesRight>
    </div>
  )
}
