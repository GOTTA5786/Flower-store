'use client'

import { PiHandbagLight } from "react-icons/pi" 
import styles from './CartBtn.module.css'
import { oswaldo } from "@/fonts/fonts"


export default function CartBtn() {
  return (
    <div>
        <div className={styles.container}>
            <div className={styles.counter + " " + oswaldo.className}>5</div>
            <PiHandbagLight className={styles.btn}></PiHandbagLight>
        </div>
    </div>
  )
}
