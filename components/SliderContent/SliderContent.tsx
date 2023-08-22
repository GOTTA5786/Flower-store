import React from 'react'
import styles from './SliderContent.module.css'
import { flowers } from '@/HardCode/flowers'
import SliderContentItem from '../SliderContentItem/SliderContentItem'


export default function SliderContent() {
  return (
    <div className={styles.container}>
      <SliderContentItem prop={flowers[0]}></SliderContentItem>
      <SliderContentItem prop={flowers[1]}></SliderContentItem>
      <SliderContentItem prop={flowers[2]}></SliderContentItem>
      <SliderContentItem prop={flowers[3]}></SliderContentItem>
      <SliderContentItem prop={flowers[4]}></SliderContentItem>
      <SliderContentItem prop={flowers[5]}></SliderContentItem>
    </div>
  )
}
