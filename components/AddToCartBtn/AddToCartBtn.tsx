import React from 'react'
import styles from './AddToCartBtn.module.css'
import { oswaldo } from '@/Fonts/fonts'
export default function AddToCartBtn() {
  return (
    <div className={styles.container}>
        <p className={styles.buttonText + " " + oswaldo.className}>Добавить в корзину</p>
    </div>
  )
}
