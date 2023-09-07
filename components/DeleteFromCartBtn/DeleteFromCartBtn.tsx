'use client'
import styles from './DeleteFromCartBtn.module.css'
import { oswaldo } from "@/fonts/fonts"
import { useAppDispatch } from '@/hooks/hooks'
import { removeFromCart } from '@/store/cartSlice'

interface IFlower_id{
    flower_id:number
}

export default function DeleteFromCartBtn(props:IFlower_id) {
    const dispatch = useAppDispatch()
  return (
    <span className={styles.removeBtn + ' ' + oswaldo.className} onClick={e => dispatch(removeFromCart(props.flower_id))}>
        Убрать из корзины
    </span>
  )
}
