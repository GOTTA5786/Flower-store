'use client'
import styles from './AddToCartBtn.module.css'
import { oswaldo } from '@/fonts/fonts'
import { IFlower } from '../CatalogPageComponents/FlowerItem/FlowerItem'
import { useAppDispatch } from '@/hooks/hooks'
import { addToCart, ICartItem } from '@/store/cartSlice'


export default function AddToCartBtn(flower:IFlower) {
  
  const item:ICartItem={
    flower_id: (flower.flower_id),
    pathtoimg: (flower.pathtoimg),
    price: ((flower.sale) ? flower.saleprice : flower.price),
    quantity: 1,
    title: (flower.title)
  }
  const dispatch = useAppDispatch()
  return (
    <div className={styles.container}>
        <p className={styles.buttonText + " " + oswaldo.className} onClick={e => {dispatch(addToCart(item)); console.log(item)}}>Добавить в корзину</p>
    </div>
  )
}
