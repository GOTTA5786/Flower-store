'use client'
import styles from './AddToCartBtn.module.css'
import { oswaldo } from '@/fonts/fonts'
import { IFlower } from '../CatalogPageComponents/FlowerItem/FlowerItem'
import { useAppDispatch, useAppSelector } from '@/hooks/hooks'
import { addToCart, enableleCart, ICartItem } from '@/store/cartSlice'


export default function AddToCartBtn(flower:IFlower) {

  const dispatch = useAppDispatch()
  const items = useAppSelector(state => state.cart.items)

  const item:ICartItem={
    flower_id: (flower.flower_id),
    pathtoimg: (flower.pathtoimg),
    price: ((flower.sale) ? flower.saleprice : flower.price),
    quantity: 1,
    title: (flower.title)
  }

  if (items.has(flower.flower_id)){
    return (
      <span className={styles.inCartContainer + " " + oswaldo.className} onClick={e => {e.preventDefault(); dispatch(enableleCart())}}>
        Товар уже в корзине
      </span>
    )
  }else{
    return (
      <span className={styles.container + " " + oswaldo.className} onClick={e => {e.preventDefault(); dispatch(addToCart(item))}}>
          Добавить в корзину
      </span>
    )
  }
  
}
