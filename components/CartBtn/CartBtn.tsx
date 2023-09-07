'use client'

import { PiHandbagLight } from "react-icons/pi" 
import styles from './CartBtn.module.css'
import { oswaldo } from "@/fonts/fonts"
import { useAppDispatch, useAppSelector } from "@/hooks/hooks"
import { enableleCart } from "@/store/cartSlice"


export default function CartBtn() {
  const dispatch  = useAppDispatch()
  const totalQuantity = useAppSelector(state => state.cart.items.length)
  return (
    <div>
        <div className={styles.container} onClick={e => {dispatch(enableleCart()),document.body.style.overflow = 'hidden'}}>
            <div className={styles.counter + " " + oswaldo.className}>{totalQuantity}</div>
            <PiHandbagLight className={styles.btn}></PiHandbagLight>
        </div>
    </div>
  )
}
