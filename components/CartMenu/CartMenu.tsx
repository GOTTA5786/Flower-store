'use client'
import { oswaldo } from '@/fonts/fonts'
import styles from './CartMenu.module.css'
import { FaXmark } from "react-icons/fa6";
import { useAppDispatch, useAppSelector } from '@/hooks/hooks';
import { clearCart, disableCart } from '@/store/cartSlice';
import Image from 'next/image';
import CartItemQuantityBtn from '../CartItemQuantityBtn/CartItemQuantityBtn';
import { useEffect, useState } from 'react';
import DeleteFromCartBtn from '../DeleteFromCartBtn/DeleteFromCartBtn';


export default function CartMenu() {
    const isActive = useAppSelector(state => state.cart.isActive)
    const items = useAppSelector(state => state.cart.items)
    const totalPrice = useAppSelector(state => state.cart.totalPrice)
    const dispatch = useAppDispatch()
    const [isOrdered, setIsOrdered] = useState<boolean>(false)

    useEffect(() => {
        setIsOrdered(false)
    }, [isActive])
    

    

  return (
    <div className={`${styles.container} ${isActive ? styles.active : ''} ${oswaldo.className}`} onClick={e => {dispatch(disableCart()), document.body.style.overflow = 'auto'}}>
        <div className={`${styles.content} ${isActive ? styles.active : ''}`} onClick = {e => e.stopPropagation()}>
            <div>
                <div className={styles.cartHeader}>
                    <p>Ваша корзина</p>
                    <FaXmark className={styles.xmark} onClick={e => {dispatch(disableCart()), document.body.style.overflow = 'auto'}}/>
                </div>
                <div className={styles.itemsBlock}>
                    {(items.length === 0 ) ? <p className={styles.emptyCart}>Ваша корзина пуста</p> :
                    items.map(item => {return <div key={item.flower_id} className={styles.oneItemBlock}>
                        <div className={styles.leftBlock}>
                            <div className={styles.itemImg}>
                                <Image
                                    src={`/Items_images/${item.pathtoimg}.png`}
                                    fill={true}
                                    alt='default'
                                />
                            </div>
                            <div className={styles.description}>
                                <div className={styles.descriptionTop}>
                                    <p className={styles.descriptionTitle}>{item.title}</p>
                                    <span className={styles.descriptionPrice}>{item.price} ₽ x {item.quantity}</span>
                                </div>
                                <CartItemQuantityBtn quantity={item.quantity} flower_id={item.flower_id}/>
                            </div>
                        </div>    
                        <div className={styles.rightBlock}>
                            <span className={styles.itemTotalPrice}>{(item.price * item.quantity).toFixed(2)} ₽</span>
                            <DeleteFromCartBtn flower_id={item.flower_id}/>
                        </div>
                    </div>})}
                </div>
                <div className={styles.footer}>
                    <span>предварительный итог : {totalPrice} руб.</span>
                    {(isOrdered) ? 
                    <div className={styles.thxForOrder}>спасибо за покупку!</div>:
                    <div className={styles.orderBtn} onClick={e => {setIsOrdered(true); dispatch(clearCart())}}>оформить заказ</div>}
                </div>
            </div>
        </div>
    </div>
  )
}
