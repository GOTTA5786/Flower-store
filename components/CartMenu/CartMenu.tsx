'use client'
import { oswaldo } from '@/fonts/fonts'
import styles from './CartMenu.module.css'
import { FaXmark } from "react-icons/fa6";
import { useAppDispatch, useAppSelector } from '@/hooks/hooks';
import { disableCart } from '@/store/cartSlice';
import Image from 'next/image';
import CartItemQuantityBtn from '../CartItemQuantityBtn/CartItemQuantityBtn';
import { useEffect } from 'react';


export default function CartMenu() {
    const isActive = useAppSelector(state => state.cart.isActive)
    const items = useAppSelector(state => state.cart.items)
    const dispatch = useAppDispatch()

    useEffect(() => {
    
    }, [items])
    

    

  return (
    <div className={`${styles.container} ${isActive ? styles.active : ''} ${oswaldo.className}`} onClick={e => {dispatch(disableCart()), document.body.style.overflow = 'auto'}}>
        <div className={`${styles.content} ${isActive ? styles.active : ''}`} onClick = {e => e.stopPropagation()}>
            <div>
                <div className={styles.cartHeader}>
                    <p>Ваша корзина</p>
                    <FaXmark className={styles.xmark} onClick={e => {dispatch(disableCart()), document.body.style.overflow = 'auto'}}/>
                </div>
                {items.map(item => {return <div key={item.flower_id} className={styles.itemBlock}>
                    <div className={styles.itemImg}>
                        <Image
                            src={`/Items_images/${item.pathtoimg}.png`}
                            fill={true}
                            alt='default'
                        />
                    </div>
                    <div className={styles.description}>
                        <p className={styles.descriptionTitle}>{item.title}</p>
                        <span className={styles.descriptionPrice}>{item.price} ₽ x {item.quantity}</span>
                        <CartItemQuantityBtn quantity={item.quantity} flower_id={item.flower_id}/>
                    </div>
                    <div>
                        <p>total position price</p>
                        <p>delete btn</p>
                    </div>
                </div>})}
            </div>
        </div>
    </div>
  )
}
