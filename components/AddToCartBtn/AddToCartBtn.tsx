'use client'
import styles from './AddToCartBtn.module.css'
import { oswaldo } from '@/fonts/fonts'
import { IFlower } from '../CatalogPageComponents/FlowerItem/FlowerItem'
import { useAppDispatch } from '@/hooks/hooks'
import { addToCart, ICartItem } from '@/store/cartSlice'


export default function AddToCartBtn({flower_id,pathtoimg,price,sale,saleprice,title}:IFlower) {
  
  const item:ICartItem={
    flower_id: flower_id,
    pathtoimg: pathtoimg,
    price: sale ? saleprice : price,
    quantity: 1,
    title: title,
  }
  const dispatch = useAppDispatch()
  return (
    <div className={styles.container}>
        <p className={styles.buttonText + " " + oswaldo.className} onClick={e => {dispatch(addToCart(item)); console.log(item)}}>Добавить в корзину</p>
    </div>
  )
}
