import React from 'react'
import SldierDot from '../SldierDot/SldierDot'
import SliderArrow from '../SliderArrow/SliderArrow'
import SliderContent from '../SliderContent/SliderContent'

export default function PopularItemsSlider() {
  return (
    <div>
      <SliderArrow></SliderArrow>
      <SliderContent></SliderContent>
      <SldierDot></SldierDot>
      <SliderArrow></SliderArrow>
    </div>
  )
}
